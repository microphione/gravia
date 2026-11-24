// Plan item 2.94 (T-101, docs/designs/t101-live-map-same-repo.md, "D2-A: how it works" step 3): the `check` job of
// .github/workflows/live-save.yml. Publish copies this file as live-check/run.mjs next to the check bundle check.mjs
// (apps/client/src/live/live-check-entry.ts) and build.json, so a save is judged by the rules of the published build.
// It holds no token and writes only two job outputs: `verdict` (a fixed word) and `sha` (64 hex). Node built-ins only.
import { appendFileSync, readFileSync } from 'node:fs';
import { gunzipSync } from 'node:zlib';

// A compression bomb stops here, long before the memory of the runner (the live files are about 0.25 MB).
const UNZIPPED_MAX = 4 * 1024 * 1024;
const NO_SHA = '0'.repeat(64);

const check = await import(new URL('./check.mjs', import.meta.url).href);
const build = JSON.parse(readFileSync(new URL('./build.json', import.meta.url), 'utf8')).build;
if (typeof build !== 'string' || build === '') throw new Error('build.json names no build');

const gunzip = (bytes) => Promise.resolve(gunzipSync(bytes, { maxOutputLength: UNZIPPED_MAX }));

async function judge(event, now) {
  const issue = event.issue;
  if (issue.user.id !== event.repository.owner.id || !issue.title.startsWith(check.LIVE_TITLE_PREFIX)) {
    return { verdict: 'ignored', reason: 'not a live save of the owner' };
  }
  const body = issue.body ?? '';
  const decoded = await check.decodeLivePayload(body, gunzip);
  if (!decoded.ok) return decoded;
  const age = check.checkLivePayloadAge(issue.created_at, now);
  if (!age.ok) return age;
  if (decoded.payload.build !== build) {
    return { verdict: 'oldbuild', reason: `the save names build ${decoded.payload.build}, the page is build ${build}` };
  }
  const content = check.checkLivePayload(decoded.payload, check.known);
  if (!content.ok) return content;
  return { verdict: 'ok', reason: 'the save may be written', sha: check.splitLiveBody(body).sha256 };
}

const event = JSON.parse(readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8'));
const result = await judge(event, new Date());
const sha = result.verdict === 'ok' ? result.sha : NO_SHA;
// The reason may quote the map's own text: one line, no control characters, never at the start of a line (where the
// runner would read it as a workflow command).
const reason = String(result.reason).replace(/[\p{C}\p{Zl}\p{Zp}]/gu, '?').slice(0, 500);
console.log(`live-check verdict ${result.verdict} sha ${sha}: ${reason}`);
appendFileSync(process.env.GITHUB_OUTPUT, `verdict=${result.verdict}\nsha=${sha}\n`);

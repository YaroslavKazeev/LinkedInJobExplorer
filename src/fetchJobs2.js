// fetchJobs2.js
// Start an Apify actor run (curious_coder/linkedin-jobs-scraper) with a LinkedIn search URL
// Poll the run status until finished, then return the dataset items.

const DEFAULT_POLL_INTERVAL_MS = 2000;

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Start the curious_coder~linkedin-jobs-scraper actor with the provided startUrl input
 * and poll the actor run until it finishes. Returns the dataset items when the run
 * succeeds.
 *
 * Parameters:
 * - token: Apify API token string (required).
 * - startUrl: string, the LinkedIn jobs search URL to pass as input.url for the actor.
 * - options: optional object with pollIntervalMs and waitTimeoutMs.
 *
 * Usage example:
 *   const { items, run } = await fetchLinkedInActorResults(token, url);
 */
export default async function fetchLinkedInActorResults(
  token,
  startUrl,
  options = {}
) {
  if (!token || typeof token !== "string") {
    throw new TypeError("Apify API token (string) is required");
  }
  if (!startUrl || typeof startUrl !== "string") {
    throw new TypeError("startUrl (string) is required");
  }

  const { pollIntervalMs = DEFAULT_POLL_INTERVAL_MS, waitTimeoutMs } = options;

  const apifyBase = "https://api.apify.com/v2";
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  };

  async function fetchJson(url, fetchOptions = {}) {
    const res = await fetch(url, { headers, ...fetchOptions });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      const err = new Error(
        `Request failed ${res.status} ${res.statusText}: ${text}`
      );
      err.status = res.status;
      throw err;
    }
    console.log("fetchJson response:", res);
    return res.json();
  }

  // Start a new run for the actor curious_coder~linkedin-jobs-scraper
  // Actor identifier in the runs endpoint: acts/{user}~{act}/runs
  const startRunsUrl = `${apifyBase}/acts/curious_coder~linkedin-jobs-scraper/runs`;
  console.log("Starting actor run with startRunsUrl:", startRunsUrl);

  // The actor expects input.urls array (and optionally other params). We'll supply startUrl in an array.
  // Apify runs API accepts input properties at the top-level for starting runs.
  // Send urls, scrapeCompany and count as top-level properties (not nested under `input`).
  // const body = JSON.stringify({
  //   build: "latest",
  //   memory: 2048,
  //   urls: [startUrl],
  //   scrapeCompany: true,
  //   count: 100,
  // });
  const body = JSON.stringify({
    urls: [startUrl],
    scrapeCompany: true,
    count: 100,
  });

  console.log("Starting actor run with startUrl:", startUrl);
  console.log("POST body:", body);

  // Ensure Content-Type header is set and avoid accidentally overwriting headers
  const postHeaders = Object.assign({}, headers, {
    "Content-Type": "application/json",
  });

  const startResp = await fetchJson(startRunsUrl, {
    method: "POST",
    body,
    headers: postHeaders,
  });

  // The start response contains runId or id (Apify sometimes uses runId)
  const runId = startResp.id || startResp.runId || startResp.data?.id;
  if (!runId) {
    // If the above failed, try reading runId from response directly
    throw new Error("Unable to determine run id from start response");
  }

  const runUrl = `${apifyBase}/acts/curious_coder~linkedin-jobs-scraper/runs/${encodeURIComponent(
    runId
  )}`;
  console.log("Started run:", runId);
  console.log("Run URL:", runUrl);

  // Poll for completion
  const endStates = new Set(["SUCCEEDED", "FAILED", "ABORTED"]);
  const startTime = Date.now();
  let run = null;
  while (true) {
    const current = await fetchJson(runUrl);
    const status = current?.data.status;
    console.log(`Run ${runId} status:`, status);
    if (endStates.has(status)) {
      run = current;
      break;
    }
    if (waitTimeoutMs && Date.now() - startTime > waitTimeoutMs) {
      throw new Error(`Timeout waiting for run ${runId} to finish`);
    }
    await sleep(pollIntervalMs);
  }

  if (run.data.status !== "SUCCEEDED") {
    const err = new Error(`Apify run finished with status ${run.data.status}`);
    err.run = run;
    throw err;
  }

  // Resolve dataset id
  // let datasetId =
  //   run.defaultDatasetId || run?.defaultDataset?.id || run?.datasetId;
  // if (!datasetId) {
  // List datasets for the run
  //   const dsListUrl = `${apifyBase}/actor-runs/${encodeURIComponent(
  //     runId
  //   )}/dataset/items`;
  //   console.log("Fetching datasets list from:", dsListUrl);
  //   const dsList = await fetchJson(dsListUrl);
  //   // if (dsList.items && dsList.items.length) datasetId = dsList.items[0].id;
  //   console.log("Resolved datasetId from list:", datasetId);
  // }

  // if (!datasetId) return { items: [], run };

  // Fetch dataset items (paginated)
  const items = [];
  let offset = 0;
  const limit = 1000;
  while (true) {
    const dsUrl = `${apifyBase}/actor-runs/${encodeURIComponent(
      runId
    )}/dataset/items?format=json&offset=${offset}&limit=${limit}`;
    const batch = await fetchJson(dsUrl);
    if (!Array.isArray(batch) || batch.length === 0) break;
    items.push(...batch);
    if (batch.length < limit) break;
    offset += batch.length;
  }

  return { items, run };
}

const token = JSON.parse(import.meta.env.VITE_LINKEDIN_API_TOKEN);
const url =
  "https://www.linkedin.com/jobs/search?keywords=Web%20Developer&location=Drenthe";

const { items, run } = await fetchLinkedInActorResults(token, url);
console.log("Run finished:", run.data.id, run.data.status);
console.log("Items count:", items.length);
console.log(items.slice(0, 1));

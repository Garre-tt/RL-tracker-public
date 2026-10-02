(() => {
  const value = window.trackerSiteConfig?.releaseAssetUrl;
  configureSupport(window.trackerSiteConfig?.buyMeACoffeeUrl);
  if (typeof value !== "string" || !value) return;
  let url;
  try { url = new URL(value); } catch { return; }
  // Accept only owner-configured asset URLs. Verify public availability before deployment.
  if (url.protocol !== "https:" || url.hostname !== "github.com" || url.port ||
      url.username || url.password || url.search || url.hash ||
      /\/releases\/download\/untagged-/i.test(url.pathname) ||
      !/^\/Garre-tt\/RL-tracker-public\/releases\/download\/[^/]+\/[^/]+$/.test(url.pathname)) return;
  const link = document.getElementById("download-link");
  link.href = url.href;
  link.textContent = "Download for Windows";
  document.getElementById("download-status").textContent = "Public beta · Windows x64 · ZIP download from GitHub Releases.";
  function configureSupport(value) {
    if (typeof value !== "string" || !value) return;
    let url;
    try { url = new URL(value); } catch { return; }
    if (url.protocol !== "https:" || url.hostname !== "buymeacoffee.com" || url.port ||
        url.username || url.password || url.search || url.hash ||
        !/^\/[a-zA-Z0-9_-]{2,40}\/?$/.test(url.pathname) ||
        /^\/(realname|username|yourname|placeholder|example|support|signup|login)\/?$/i.test(url.pathname)) return;
    const link = document.getElementById("support-link");
    link.href = url.href;
    link.hidden = false;
    document.getElementById("support-status").textContent = "Optional support through Buy Me a Coffee.";
  }
})();

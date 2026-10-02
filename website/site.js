(() => {
  const config = window.trackerSiteConfig;
  configureSupport(config?.buyMeACoffeeUrl);
  if (config?.releaseVerified !== true) return;
  const url = releaseAsset(config.releaseAssetUrl, /\.(exe|zip)$/i);
  if (!url) return;
  const link = document.getElementById("download-link");
  const isSetup = /\.exe$/i.test(url.pathname);
  link.href = url.href;
  link.textContent = isSetup ? "Download Windows setup" : "Download for Windows";
  document.getElementById("download-status").textContent = isSetup
    ? "Public beta · Windows x64 · Setup installer from GitHub Releases."
    : "Public beta · Windows x64 · Portable ZIP from GitHub Releases.";
  const releasePath = url.pathname.slice(0, url.pathname.lastIndexOf("/") + 1);
  for (const [id, value, suffix] of [
    ["portable-link", config.portableAssetUrl, /\.zip$/i],
    ["setup-checksum-link", config.setupChecksumUrl, /\.sha256$/i],
    ["portable-checksum-link", config.portableChecksumUrl, /\.sha256$/i],
    ["setup-provenance-link", config.setupProvenanceUrl, /\.build-info\.json$/i]
  ]) {
    const asset = releaseAsset(value, suffix);
    if (!asset || asset.pathname.slice(0, asset.pathname.lastIndexOf("/") + 1) !== releasePath) continue;
    const target = document.getElementById(id);
    target.href = asset.href;
    target.hidden = false;
  }
  function releaseAsset(value, suffix) {
    if (typeof value !== "string" || !value) return null;
    let url;
    try { url = new URL(value); } catch { return null; }
    if (url.protocol !== "https:" || url.hostname !== "github.com" || url.port ||
        url.username || url.password || url.search || url.hash ||
        /\/releases\/download\/untagged-/i.test(url.pathname) ||
        !/^\/Garre-tt\/RL-tracker-public\/releases\/download\/[^/]+\/[^/]+$/.test(url.pathname) ||
        !suffix.test(url.pathname)) return null;
    return url;
  }
  function configureSupport(value) {
    if (typeof value !== "string" || !value) return;
    let url;
    try { url = new URL(value); } catch { return; }
    if (url.protocol !== "https:" || url.hostname !== "buymeacoffee.com" || url.port ||
        url.username || url.password || url.search || url.hash ||
        !/^\/[a-zA-Z0-9_-]{2,40}\/?$/.test(url.pathname) ||
        /^\/(realname|username|yourname|placeholder|example|support|signup|login)\/?$/i.test(url.pathname)) return;
    for (const id of ["header-support-link", "support-link"]) {
      const link = document.getElementById(id);
      link.href = url.href;
      link.hidden = false;
    }
    document.getElementById("support-status").textContent = "Optional support through Buy Me a Coffee.";
  }
})();

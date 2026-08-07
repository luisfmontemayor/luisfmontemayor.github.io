// Progressive enhancement for the static portfolio page.
// The nav keeps real `href="#id"` anchors; this only upgrades them to smooth
// scroll and drives the mobile drawer. If this script fails to load, the
// anchors still navigate natively. The 72px sticky-header offset is handled in
// CSS via the `scroll-mt-[72px]` classes on the target sections, not here.

function closeDrawer(): void {
  document.getElementById("mobile-drawer")?.classList.add("hidden");
  document.getElementById("menu-toggle")?.setAttribute("aria-expanded", "false");
}

function toggleDrawer(): void {
  const drawer = document.getElementById("mobile-drawer");
  const toggle = document.getElementById("menu-toggle");
  if (drawer === null || toggle === null) {
    return;
  }
  const nowHidden = drawer.classList.toggle("hidden");
  toggle.setAttribute("aria-expanded", String(!nowHidden));
}

function handleAnchorClick(event: MouseEvent, link: HTMLAnchorElement): void {
  const href = link.getAttribute("href");
  if (href === null) {
    return;
  }

  if (href === "#") {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeDrawer();
    return;
  }

  const target = document.querySelector(href);
  if (target === null) {
    return;
  }
  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  closeDrawer();
}

function hideUnstampedCommit(): void {
  // The footer commit link carries `__COMMIT_*__` tokens that CI replaces at
  // deploy time. In local previews they are never substituted, so hide the line
  // rather than show raw tokens.
  const link = document.getElementById("commit-link");
  if (link?.textContent?.includes("__COMMIT_SHORT__")) {
    link.classList.add("hidden");
  }
}

function revealEmail(): void {
  // The address is never committed to this repo and never present in the served
  // HTML: CI substitutes `__EMAIL_*__` with base64 halves of the local part and
  // the domain at deploy time (see .github/workflows/deploy.yml), and only this
  // function joins them with an `@`. Bulk harvesters that regex the raw response
  // without executing JS therefore find nothing; a headless browser still would.
  // Revealed on load rather than on click so the row stays a real focusable
  // anchor for keyboard and screen-reader users.
  // instanceof rather than a querySelector<HTMLAnchorElement> generic: this one
  // is checked at runtime, so `link.href` below is genuinely known to exist.
  const link = document.getElementById("contact-email");
  const text = document.getElementById("contact-email-text");
  if (!(link instanceof HTMLAnchorElement) || text === null) {
    return;
  }
  // getAttribute rather than dataset: DOMStringMap is an index signature, which
  // tsconfig's noPropertyAccessFromIndexSignature and biome's useLiteralKeys
  // disagree about how to read.
  const user = link.getAttribute("data-u");
  const domain = link.getAttribute("data-d");
  if (user === null || domain === null || user.startsWith("__")) {
    // Unsubstituted tokens in a local preview, same case as hideUnstampedCommit.
    return;
  }
  const address = `${atob(user)}@${atob(domain)}`;
  link.href = `mailto:${address}`;
  text.textContent = address;
}

function init(): void {
  for (const anchor of document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')) {
    anchor.addEventListener("click", (event) => {
      handleAnchorClick(event, anchor);
    });
  }
  document.getElementById("menu-toggle")?.addEventListener("click", toggleDrawer);
  hideUnstampedCommit();
  revealEmail();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

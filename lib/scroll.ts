/**
 * Smooth-scrolls to an in-page anchor when the target exists on the current page,
 * avoiding the "jump to top, then scroll down" that happens when a locale-prefixed
 * URL (e.g. /en-US#process) is treated as a navigation.
 *
 * Returns true when it handled the scroll in place; returns false to let the
 * browser follow the link normally (cross-page navigation, e.g. from /blog).
 */
export function scrollToHash(
  href: string,
  e: { preventDefault: () => void }
): boolean {
  if (typeof document === "undefined") return false;
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return false;

  const id = href.slice(hashIndex + 1);
  if (!id) return false;

  const el = document.getElementById(id);
  if (!el) return false; // target not on this page → allow normal navigation

  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  // Reflect the section in the URL without triggering a navigation/scroll reset.
  window.history.replaceState(null, "", `#${id}`);
  return true;
}

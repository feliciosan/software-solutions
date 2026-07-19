import posthog from "posthog-js";

if (
  process.env.NODE_ENV === "production" &&
  process.env.NEXT_PUBLIC_POSTHOG_KEY
) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    // Send events through our own domain (see reverse proxy rewrites in
    // next.config.ts); ui_host keeps PostHog UI links pointing to EU Cloud.
    api_host: "/ingest",
    ui_host: "https://eu.posthog.com",
    defaults: "2025-05-24",
    capture_exceptions: true,
  });
}

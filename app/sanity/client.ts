import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "lgzekbmp",
  dataset: "production",
  apiVersion: "v2026-01-28",
  token: process.env.SANITY_API_TOKEN,
  useCdn: true,
});


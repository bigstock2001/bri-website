// lib/sanity.client.ts
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "m3m672rb",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: false, // instant updates while testing
});

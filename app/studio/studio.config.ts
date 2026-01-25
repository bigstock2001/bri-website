import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "../../sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "bri-website-blog",
  projectId: "m3m672rb",
  dataset: "production",

  // ✅ Critical: tell Studio it lives at /studio
  basePath: "/studio",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});

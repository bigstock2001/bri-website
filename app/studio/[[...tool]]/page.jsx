"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../studio.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}

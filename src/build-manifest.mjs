// Standalone build-time entry: regenerate data/manifest.json by scanning
// device folders. Run by Vercel's buildCommand so the manifest is never
// committed by devices (which eliminates cross-device merge conflicts).
import { rebuildManifest } from "./manifest.mjs";

rebuildManifest();

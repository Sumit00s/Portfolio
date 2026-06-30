import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

// Automatically sync assets from the root 'assets' folder to 'public/assets' on start/build
const srcDir = path.join(process.cwd(), "assets");
const destDir = path.join(process.cwd(), "public", "assets");

try {
  if (fs.existsSync(srcDir)) {
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    const copyRecursive = (src: string, dest: string) => {
      const entries = fs.readdirSync(src, { withFileTypes: true });
      for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
          if (!fs.existsSync(destPath)) {
            fs.mkdirSync(destPath);
          }
          copyRecursive(srcPath, destPath);
        } else {
          // Only copy if modified or not exists
          if (!fs.existsSync(destPath) || fs.statSync(srcPath).mtimeMs !== fs.statSync(destPath).mtimeMs) {
            fs.copyFileSync(srcPath, destPath);
          }
        }
      }
    };
    copyRecursive(srcDir, destDir);
    console.log("✓ Assets successfully synced from root to public/assets");
  }
} catch (err) {
  console.error("Failed to sync assets:", err);
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

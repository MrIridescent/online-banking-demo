#!/usr/bin/env bash
set -euo pipefail

printf "\n=== Online Banking Demo Setup Wizard ===\n"
printf "Date: %s\n\n" "$(date -u +'%Y-%m-%d %H:%M:%S UTC')"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is not installed. Install Node.js 20+ and re-run this script."
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "npm is not installed. Install npm 10+ and re-run this script."
  exit 1
fi

NODE_VERSION="$(node -v)"
NPM_VERSION="$(npm -v)"

printf "Detected Node.js: %s\n" "$NODE_VERSION"
printf "Detected npm: %s\n\n" "$NPM_VERSION"

echo "[1/4] Installing dependencies..."
npm install

echo "[2/4] Running lint checks..."
npm run lint

echo "[3/4] Running production build..."
npm run build

echo "[4/4] Setup checks completed."
printf "\nSuccess. You can now run:\n"
printf "  npm run dev\n"
printf "\nThen open: http://localhost:5173\n"

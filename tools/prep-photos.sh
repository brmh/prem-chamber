#!/usr/bin/env bash
# Resize chamber photographs for the web and print the data entries for them.
#
#   ./tools/prep-photos.sh ~/Desktop/chamber-photos
#
# Originals are left untouched. Output goes to public/photos/ at 1600px wide,
# which is plenty for a page that never shows them larger than about 800.
set -euo pipefail

SRC="${1:-}"
if [ -z "$SRC" ] || [ ! -d "$SRC" ]; then
  echo "usage: $0 <folder-of-original-photos>" >&2
  exit 1
fi

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/photos"
mkdir -p "$OUT"

i=0
shopt -s nullglob nocaseglob
for f in "$SRC"/*.{jpg,jpeg,png,heic,webp}; do
  i=$((i + 1))
  name="chamber-$(printf '%02d' "$i").jpg"
  npx --yes sharp-cli@latest -i "$f" -o "$OUT/$name" --format jpeg -q 82 resize 1600 >/dev/null 2>&1 \
    || { echo "skipped (could not read): $f" >&2; continue; }
  dims=$(npx --yes sharp-cli@latest -i "$OUT/$name" --metadata 2>/dev/null \
          | sed -n 's/.*"width":\([0-9]*\).*"height":\([0-9]*\).*/\1 \2/p' | head -1)
  set -- ${dims:-1600 1200}
  echo "  { file: '$name', alt: 'TODO describe this photo', altHi: 'TODO विवरण', width: $1, height: $2 },"
done

if [ "$i" -eq 0 ]; then
  echo "no images found in $SRC" >&2
  exit 1
fi

echo >&2
echo "$i photo(s) written to public/photos/ — paste the lines above into src/data/photos.ts" >&2

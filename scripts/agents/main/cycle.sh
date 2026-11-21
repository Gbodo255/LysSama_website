#!/usr/bin/env bash
# Cycle rapide : régénération de toutes les pages, export statique, extraction du clone et comparaison.
# Usage : bash scripts/agents/main/cycle.sh "<routes séparées par des virgules>" "<largeurs>"
set -o pipefail
cd "$(dirname "$0")/../../.."; export MSYS_NO_PATHCONV=1
R="$1"; W="${2:-1440}"
ls reference/html | sed 's/.html//' | grep -v -E "design-system|robots|sitemap" | xargs node scripts/genpage.mjs > reference/agents/gen.log 2>&1 || { echo "GEN KO"; tail -5 reference/agents/gen.log; exit 1; }
NODE_OPTIONS=--max-old-space-size=8192 npx next build > reference/agents/build.log 2>&1 || { echo "BUILD KO"; grep -i -A6 "error" reference/agents/build.log | head -30; exit 1; }
for r in ${R//,/ }; do timeout 900 node --max-old-space-size=4096 scripts/extract.mjs --target=clone --only=$r --widths=$W --jobs=2 --force 2>&1 | grep -v '"ok":true' | cut -c1-200; done
node scripts/compare.mjs --only=$R --widths=$W 2>&1 | cut -c1-260
echo "CYCLE FINI"

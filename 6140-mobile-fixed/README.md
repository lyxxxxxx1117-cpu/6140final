# Beyond the Byline

Static editorial website: HTML, CSS and browser JavaScript. No API keys, server, dependencies or build step required.

## Local preview

Run `python3 -m http.server 6140 --directory dist` and visit http://localhost:6140/.

## Vercel

Import this GitHub repository. Keep Root Directory at the repository root, Framework Preset at Other, Build Command empty, and Output Directory at dist. The included vercel.json sets these values. No environment variables are needed.

Navigation uses URL hashes, so no rewrite rules are needed. Google Fonts requires an external connection; system fonts provide an offline fallback.

## Contents

The dist folder contains the full site and image assets. Photo credits are included in the page captions.

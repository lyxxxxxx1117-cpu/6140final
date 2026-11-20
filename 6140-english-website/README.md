# Beyond the Byline — Interactive Editorial Edition

Run `python3 -m http.server 6140 --bind 127.0.0.1 --directory dist`, then open http://127.0.0.1:6140/.

Five reading pages retain the original cover, typography, colors and supplied illustrations. Background provides a visual introduction; Risk offers four evidence-led stories; Policy includes keyboard-accessible risk tiers and correction workflows; Effect includes a selectable pilot timeline and expandable metrics; References offers keyword and category filtering.

Detailed source content remains in native details/summary disclosures. Animations respect prefers-reduced-motion. No dependencies or build step. Fonts fall back to system fonts offline.

Files: index.html; style.css and edition.css (existing foundation); story.css (narrative layouts); edition.js (five-page routing and cover); story.js (tabs, timeline, filters and scroll reveal).

Validation: JavaScript syntax checks, preserved long-paragraph audit, browser verification of risk-tier selection, pilot-phase selection, metric disclosure and reference classification; mobile Policy layout inspected at 390px.

References have not been independently reverified. Pilot metrics are proposed, not measured. Current delivery is local; earlier Sites publication attempts were blocked by environment approval policy.

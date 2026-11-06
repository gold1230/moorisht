# Moorish Tour: "use client" Build Fix

## Fixed file
`app/tour/page.tsx`

The Next.js compiler requires `"use client";` to be the first statement of a client component module, before all import declarations. The new first lines are:

```tsx
"use client";

import PopularTourCollection from "@/Compentents/tour/PopularTourCollection";
import Image from "next/image";
```

No other files with misplaced `"use client"` directives were found in the source tree.

## Deploy
Copy the corrected file into your existing Git repository, preserving its path, then run:

```bash
git add app/tour/page.tsx
git commit -m "Fix tour page use client build error"
git push origin main
```

## Validation
Passed: route, tour products, reviews, Next.js module exports, and SEO checks.
The full Next.js build was NOT run because the required npm dependencies were not present in the working environment.
After deployment, verify with `npm ci && npm run build` in your build environment.

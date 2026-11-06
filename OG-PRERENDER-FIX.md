# Fix for the Next.js Open Graph prerender error

The Open Graph image for `/morocco-tours-from-spain/` failed because a text `<div>` contained both text and a `<br />`, but did not have an explicit `display` style.

This patch replaces line breaks with two `<span>` elements inside a `display: flex; flex-direction: column` element. It fixes all four image generators that used the same pattern:

- `app/morocco-tours-from-spain/opengraph-image.tsx`
- `app/comprehensive-guide-to-morocco-tours-2024/opengraph-image.tsx`
- `app/exploring-the-wonders-of-morocco-tourism-experience/opengraph-image.tsx`
- `app/morocco-itinerary/opengraph-image.tsx`

## Minimal patch

Unzip the small patch over the **moorishtour project root** (the folder containing `package.json`). You only need to replace the four `opengraph-image.tsx` files. The project includes a new `check:opengraph` script and adds it to `check:deploy` in the full ZIP.

## Test on Windows PowerShell

```powershell
npm run check:deploy
npm run build
```

If the build uses stale artifacts, you can remove the `.next` folder (`Remove-Item -Recurse -Force .next`) and run the build again. Do not delete `node_modules` or your `.env` files.

## Verification scope

The four fixed TSX files and all eight Open Graph image generators were checked for JSX layout constraints and syntax. A full Next.js build was not run in this container because the extracted project does not include installed Next.js dependencies. The reported prerender failure should be resolved by these changes, but the user's local build is the final test.

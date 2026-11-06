# Moorish Tour ESLint Warning Cleanup

## Report addressed

The supplied Windows ESLint output listed **480 warnings and zero errors**:

- 479 warnings from `@typescript-eslint/no-unused-vars`.
- 1 warning from `jsx-a11y/role-supports-aria-props`.

## Changes

- Removed unused import specifiers and unused complete import declarations in tour, article, blog and shared components, using a TypeScript AST-based transformation rather than removing JSX markup.
- Removed the unused `register` binding in `ContactForm.tsx`.
- Removed unused `price` destructuring from the tour hero. The prop type remains compatible.
- Passed the existing sidebar `price` property through to `BookingPopup` instead of leaving it unused behind a hardcoded price.
- Used controlled form values for the tour-planner hidden fields and removed redundant local React state.
- Removed unused upload-file state while leaving uploads connected to the parent `onChange` handler.
- Removed the unused, duplicate `tourtripsdata` constant; the active `tourSchemaData` TouristTrip JSON-LD remains in the rendered page.
- Removed unsupported `aria-expanded` / `aria-controls` from the blog search `input` rather than adding an invalid combobox role.

## Checks actually performed

- TypeScript/TSX syntax parser: **1,116 source files passed**.
- Independent TypeScript-AST scan of `app/` and `Compentents/`: **1,045 files, 4,976 import bindings checked, 0 unused imports found**.
- Existing project route validator: **122 page routes, 33 blog entries, 17 tour entries; passed**.
- Next.js App Router export validator: **126 modules passed**.
- Open Graph JSX validator: **8 generators passed**.
- Homepage performance, social-profile, and security/AI static validators: **passed**.
- Original `source-map-js@1.2.2`, ESLint 9 / Next.js 16 compatibility and existing data were preserved.

## Important verification limitation

This environment could not download the project npm dependencies (the npm registry DNS lookup failed). Accordingly, a **real `npm run lint` or full `npm run build` was not completed here**, and an exact zero-warning ESLint result is not claimed. These source-level checks support the fixes but do not substitute for those commands.

On Windows in the extracted `moorishtour` folder:

```powershell
npm ci
npm run lint -- --max-warnings=0
npm run typecheck
npm run check:deploy
npm run build
```

If the Windows folder was previously upgraded to ESLint 10, reinstalling from the included `package-lock.json` with `npm ci` restores the compatible ESLint 9 version for this project.

Do not run `npm audit fix --force` solely to silence development-dependency warnings, as that can downgrade or break Next.js lint tooling.

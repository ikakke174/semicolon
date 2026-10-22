# Semicolon landing page: notes

## Where things are
- `src/module/view/home/Home.tsx` composes the page; each section is in `src/module/view/home/sections/` with its own `.css` file next to it (`sc-` prefixed class names).
- Shared parts: `src/module/lib/components/shared/` (Container, SectionHeading, Button, Field, Icon).
- All editable content: `src/module/lib/utility/data/site.ts`.
- Form helpers: `src/module/lib/utility/services/` (validation, submit). Types: `utility/types/content.interface.ts`.
- Images: `public/images/`.

## Replace placeholders (all in `data/site.ts`)
- `contact` (email, phone, address): shows "Not added yet" until set.
- `socials`: empty, so no social links show.
- `stats`: `00+` placeholders. `insights`: sample articles, not linked. `clients`: placeholder slots.
- `aboutVideoUrl`: while null, the About photo shows with its play button, and clicking it opens a "Sample video" message. Set a real video link and the button opens that video in a new tab.
- Service and About wording is proposed copy; confirm it.

## Forms
Both forms validate in the browser and never claim success without a real service. To connect them, create `.env.local` (git ignores `.env*`):

    NEXT_PUBLIC_CONTACT_ENDPOINT=https://your-endpoint
    NEXT_PUBLIC_NEWSLETTER_ENDPOINT=https://your-endpoint

Each endpoint must accept a JSON POST (`{ fullName, email, phone, company, service, message }` and `{ email }`). With no endpoint set, visitors are told nothing was sent.

## Changes to existing files
- `next.config.ts`: added `images.qualities: [75, 95]` (Next 16 otherwise forces quality 75, which softens photos).
- `src/app/globals.css`: `@theme` is now `@theme static` so the component CSS can read the colour tokens; fixed the self-referencing `--font-inter`; added base rules (smooth scroll, focus ring, reduced motion) and icon sizes.
- `src/app/layout.tsx`: page title and description.
- `src/module/view/home/Home.tsx`: now renders the full page.
- `src/module/lib/utility/hooks/general/use-mounted.ts`: rewritten with `useSyncExternalStore` (the old version failed lint). Behaviour is the same.
- `paths.ts`, `services/index.ts`: extended.

## Checked / not checked
Checked: `tsc --noEmit` and ESLint pass; the page renders in Chromium at 1440, 820 and 390 px with no sideways overflow and no missing images (with a stand-in for `next/image`).
Not checked: `next dev` / `next build` (the installed Next binaries are Windows builds, and the font download needs internet), the mobile menu and forms in a live browser. Run `npm run dev` and `npm run build` to confirm.

## Leftovers you can delete if unused
`public/file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`, and `public/semicolon-logo.png` / `semicolon-logo-big.jpg` if nothing else uses them (I did not delete them).

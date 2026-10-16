# BusinessCare

A dark, editorial one-page marketing site for **BusinessCare**, built with
[Astro](https://astro.build). The visual language is a close homage to the modern
enterprise-AI agency aesthetic: deep night-navy canvas, periwinkle-to-lilac gradient
type, generous vertical rhythm, deluxe motion.

> **Everything on this site is placeholder content.** The brand, statistics,
> testimonials, client names and contact details are invented samples for layout
> purposes. Replace them before publishing.

## Commands

| Command                 | Does                                        |
| ----------------------- | ------------------------------------------- |
| `npm install`           | Install dependencies                        |
| `npm run dev`           | Local dev server at `localhost:4321`        |
| `npm run build`         | Static build to `./dist`                    |
| `npm run preview`       | Preview the built site locally              |

## Where to edit content

Almost all copy lives in **`src/data/site.ts`**. Change the text there and the
page updates — no markup edits needed.

Design tokens (colours, spacing, type scale) live at the top of
**`src/styles/global.css`**.

## Structure

```
src/
  data/site.ts            all copy + nav + sections
  layouts/Base.astro      <head>, metadata, fonts, skip link
  styles/global.css       design tokens + every section style
  components/
    Art.astro             generative placeholder artwork (inline SVG)
    LogoMark.astro        neutral wordmark placeholder
    Header.astro          sticky nav + mega dropdowns + mobile drawer
    Hero.astro
    ServiceList.astro     numbered services
    LogoMarquee.astro     trust strip
    Showcase.astro        interactive operations showcase
    CoreDiagram.astro     layered stack diagram
    Results.astro         case tiles with a headline stat
    Pillars.astro         plan / build / operate
    Industries.astro
    Testimonials.astro
    Partners.astro
    CtaBand.astro
    Footer.astro
  pages/index.astro       composes the sections
```

## Notes

- No client-side framework. Vanilla `<script>` handles the nav, the showcase and
  scroll reveals via `IntersectionObserver`.
- Fonts are self-hosted via `@fontsource-variable/manrope` — the site makes no
  external network requests.
- Imagery is generated inline as SVG, so there are no binary assets to manage.
- Honours `prefers-reduced-motion`.

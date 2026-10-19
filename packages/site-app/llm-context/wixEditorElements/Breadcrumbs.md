# Component LLM Context

## About

- Name: Breadcrumbs
- Archetype: Breadcrumbs
- Purpose: A navigation component that displays the user's location within a site's hierarchy as a trail of links, allowing navigation back to any ancestor page.

## Props
Source: `definition.ts`

```ts
props: {
    a11y: prop.object<unknown>(),
    direction: prop.direction(),
    onMouseIn: prop.event('click'),
    onMouseOut: prop.event('click'),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/Breadcrumbs/css";

@import "./custom-enums.css";

/* Allowed CSS overrides for @wix/origami/Breadcrumbs; these are not computed styles. */
/*

.breadcrumbs {
  padding-inline-end: initial;
  border-start-end-radius: initial;
  box-shadow: initial;
  background: initial;
  padding-inline-start: initial;
  border-bottom: initial;
  border-inline-start: initial;
  border-top: initial;
  row-gap: initial;
  border-inline-end: initial;
  padding-top: initial;
  justify-content: initial;
  border-start-start-radius: initial;
  padding-bottom: initial;
  border-end-start-radius: initial;
  border-end-end-radius: initial;
  --overflow-items: wrap;
  --items-before-ellipsis: 1;
  --items-after-ellipsis: 1;
  --default-state: fullTrail;
  --column-gap: initial;
  --homepage-format: text;
}

.breadcrumbs-item-label {
  text-decoration-line: initial;
  text-transform: initial;
  border-start-end-radius: initial;
  box-shadow: initial;
  background: initial;
  text-shadow: initial;
  border-bottom: initial;
  color: initial;
  border-inline-start: initial;
  border-top: initial;
  border-inline-end: initial;
  border-start-start-radius: initial;
  font: initial;
  letter-spacing: 0em;
  line-height: 1.4em;
  border-end-start-radius: initial;
  border-end-end-radius: initial;
  --padding-top: initial;
  --padding-bottom: initial;
  --padding-inline-end: initial;
  --padding-inline-start: initial;
}

.breadcrumbs-item-label.breadcrumbs__item--hover {
}

.breadcrumbs-item-label.breadcrumbs__item--selected {
}

.breadcrumbs-separator {
  text-decoration-line: initial;
  text-shadow: initial;
  color: initial;
  font: initial;
  display: inline;
  --separator-symbol: slash;
}

*/
```

## Presets
Source: `Breadcrumbs.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `Breadcrumbs.tsx`

```ts
export const REF_ELEMENTS = [
  'animatedHomeIcon',
]
```

# Component LLM Context

## About

- Name: Vector Art
- Archetype: Image
- Purpose: Displays scalable vector graphics for decorative or illustrative purposes on a page

## Props
Source: `definition.ts`

```ts
props: {
    decorative: prop.boolean(),
    svgId: prop.vectorArt(),
    a11y: prop.object<unknown>(),
    displayMode: prop.enum('fit', 'stretch'),
    link: prop.link(),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/SvgImage/css";

@import "./custom-enums.css";

/* Allowed CSS overrides for @wix/origami/SvgImage; these are not computed styles. */
/*

.wixui-svg-image {
  filter: initial;
  --svg-color-4: initial;
  --svg-color-7: initial;
  --svg-color-1: initial;
  --stroke: initial;
  --svg-color-2: initial;
  --alpha-stroke: initial;
  --svg-color-6: initial;
  --flipX: NONE;
  --fill: initial;
  --svg-color-3: initial;
  --svg-color-5: initial;
  --opacity: 1;
  --svg-color-8: initial;
  --flipY: NONE;
  --stroke-width: initial;
}

*/
```

## Presets
Source: `SvgImage.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `SvgImage.tsx`

```ts
export const REF_ELEMENTS = [
]
```

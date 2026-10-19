# Component LLM Context

## About

- Name: Site Logo
- Archetype: Logo
- Purpose: Displays a logo (SVG or raster image) to represent a brand or business on a page

## Props
Source: `definition.ts`

```ts
props: {
    mediaType: prop.enum('svg', 'image'),
    svgId: prop.vectorArt(),
    image: prop.object<{ uri?: string; url: string; name?: string; height?: number; width?: number; animated?: boolean; crop?: { x: number; y: number; width: number; height: number }; quality?: number; alt?: string }>(),
    a11y: prop.object<unknown>(),
    link: prop.link(),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/SiteLogo/css";

@import "./custom-enums.css";

/* Allowed CSS overrides for @wix/origami/SiteLogo; these are not computed styles. */
/*

.site-logo {
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
Source: `SiteLogo.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `SiteLogo.tsx`

```ts
export const REF_ELEMENTS = [
]
```

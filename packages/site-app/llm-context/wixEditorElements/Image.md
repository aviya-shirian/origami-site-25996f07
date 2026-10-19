# Component LLM Context

## About

- Name: Image
- Archetype: Image
- Purpose: A fundamental component for displaying image files

## Props
Source: `definition.ts`

```ts
props: {
    priority: prop.enum('high', 'low'),
    decorative: prop.boolean(),
    image: prop.object<{ uri?: string; url: string; name?: string; height?: number; width?: number; animated?: boolean; crop?: { x: number; y: number; width: number; height: number }; quality?: number; alt?: string }>(),
    a11y: prop.object<unknown>(),
    displayMode: prop.enum('fill', 'fit', 'fitWidth'),
    link: prop.link(),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/Image3/css";

/* Allowed CSS overrides for @wix/origami/Image; these are not computed styles. */
/*

.image {
  --mix-blend-mode: initial;
  --blend-mode: normal;
  --border-width: initial;
  --border-radius: initial;
  --border-color: initial;
  --maskImage: initial;
  --opacity: 1;
  --box-shadow: initial;
  --border-style: initial;
}

*/
```

## Presets
Source: `Image.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `Image.tsx`

```ts
export const REF_ELEMENTS = [
]
```

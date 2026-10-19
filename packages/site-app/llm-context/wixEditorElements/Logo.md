# Component LLM Context

## About

- Name: Logo
- Archetype: Logo
- Purpose: Displays a logo image to represent a brand or business on a page

## Props
Source: `definition.ts`

```ts
props: {
    a11y: prop.object<unknown>(),
    link: prop.link(),
    image: prop.object<{ uri?: string; url: string; name?: string; height?: number; width?: number; animated?: boolean; crop?: { x: number; y: number; width: number; height: number }; quality?: number; alt?: string }>(),
    disableBackgroundRemoval: prop.boolean(),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/Logo/css";

/* Allowed CSS overrides for @wix/origami/Logo; these are not computed styles. */
/*

.logo-wrapper {
}

*/
```

## Presets
Source: `Logo.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `Logo.tsx`

```ts
export const REF_ELEMENTS = [
]
```

# Component LLM Context

## About

- Name: Line
- Archetype: Line
- Purpose: Organize content and create visual separation with styled lines throughout your site

## Props
Source: `definition.ts`

```ts
props: {
    a11y: prop.object<unknown>(),
    direction: prop.direction(),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/Line/css";

@import "./presets/vertical.css";
@import "./presets/horizontal.css";

@import "./custom-enums.css";

/* Allowed CSS overrides for @wix/origami/Line; these are not computed styles. */
/*

.line-wrapper {
  --lineColor: black;
  --lineSize: 10px;
  --doubleLineSize: 10px;
  --spaceBetween: 10px;
  --lineEnd: None;
  --lineStart: None;
  --type: Solid;
  --dashSize: 20px;
}

*/
```

## Presets
Source: `Line.tsx`

```ts
export const PRESET_NAMES = [
  'vertical',
  'horizontal',
]
```

## Ref Elements
Source: `Line.tsx`

```ts
export const REF_ELEMENTS = [
]
```

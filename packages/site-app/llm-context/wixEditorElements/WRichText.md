# Component LLM Context

## About

- Name: Text
- Archetype: RichTextEditor
- Purpose: Displays and formats rich text content, supporting various styles, links, and formatting options

## Props
Source: `definition.ts`

```ts
props: {
    a11y: prop.object<unknown>(),
    richText: prop.richText(),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/WRichText/css";

@import "./presets/vertical.css";
@import "./presets/horizontal.css";

/* Allowed CSS overrides for @wix/origami/WRichText; these are not computed styles. */
/*

.wrichtext {
  background-color: initial;
  text-transform: initial;
  text-decoration: initial;
  color: initial;
  text-align: initial;
  font: initial;
  letter-spacing: 0em;
  writing-mode: initial;
  mix-blend-mode: normal;
  --textShadow: initial;
  --textOutline: initial;
}

*/
```

## Presets
Source: `WRichText.tsx`

```ts
export const PRESET_NAMES = [
  'vertical',
  'horizontal',
]
```

## Ref Elements
Source: `WRichText.tsx`

```ts
export const REF_ELEMENTS = [
]
```

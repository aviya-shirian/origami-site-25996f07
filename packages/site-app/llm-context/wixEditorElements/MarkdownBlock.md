# Component LLM Context

## About

- Name: Markdown Block
- Archetype: Text
- Purpose: Renders Markdown (CommonMark + GFM) as styled HTML, with a closed set of visual themes

## Props
Source: `definition.ts`

```ts
props: {
    theme: prop.enum('light', 'dark', 'sepia', 'prism', 'brand'),
    content: prop.text({ maxLength: 100000 }),
    direction: prop.direction(),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/MarkdownBlock/css";

/* Allowed CSS overrides for @wix/origami/MarkdownBlock; these are not computed styles. */
/*

.markdown-block {
  padding-inline-end: 24px;
  border-start-end-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06),0 0 1px rgba(0,0,0,0.08);
  padding-inline-start: 24px;
  border-bottom: 1px solid;
  border-inline-start: 1px solid;
  border-top: 1px solid;
  border-inline-end: 1px solid;
  padding-top: 24px;
  border-start-start-radius: 12px;
  font-family: system-ui;
  padding-bottom: 24px;
  border-end-start-radius: 12px;
  border-end-end-radius: 12px;
}

*/
```

## Presets
Source: `MarkdownBlock.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `MarkdownBlock.tsx`

```ts
export const REF_ELEMENTS = [
]
```

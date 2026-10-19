# Component LLM Context

## About

- Name: Collapsible Text
- Archetype: Text
- Purpose: Let visitors explore content at their own pace with collapsible text that reduces page clutter.

## Props
Source: `definition.ts`

```ts
props: {
    onMouseIn: prop.event('click'),
    onClick: prop.event('click'),
    linkText: prop.text(),
    readMoreText: prop.text(),
    expandMode: prop.enum('button', 'link'),
    a11y: prop.object<unknown>(),
    text: prop.text({ maxLength: 120000 }),
    readLessText: prop.text(),
    link: prop.link(),
    onMouseOut: prop.event('click'),
    onDblClick: prop.event('click'),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/CollapsibleText/css";

/* Allowed CSS overrides for @wix/origami/CollapsibleText; these are not computed styles. */
/*

.collapsible-text {
  --max-lines: 2;
  --expand-control-spacing: 10px;
}

.text {
  text-decoration-line: initial;
  text-transform: none;
  color: #000000;
  text-align: start;
  font: 800 20px wix-madefor-text-v2;
  letter-spacing: 0em;
  line-height: 1.4em;
  --text-text-shadow: initial;
}

*/
```

## Presets
Source: `CollapsibleText.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `CollapsibleText.tsx`

```ts
export const REF_ELEMENTS = [
  'button',
]
```

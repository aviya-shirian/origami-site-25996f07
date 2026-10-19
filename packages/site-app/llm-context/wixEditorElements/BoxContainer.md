# Component LLM Context

## About

- Name: Container
- Archetype: Container
- Purpose: A flexible container for grouping and organizing other elements or components on a page

## Props
Source: `definition.ts`

```ts
props: {
    onMouseIn: prop.event('change'),
    onBlur: prop.event('change'),
    children: prop.object<ReactElement>(),
    onClick: prop.event('change'),
    a11y: prop.object<unknown>(),
    onMouseOut: prop.event('change'),
    onFocus: prop.event('change'),
    onDblClick: prop.event('change'),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/BoxContainer/css";

/* Allowed CSS overrides for @wix/origami/BoxContainer; these are not computed styles. */
/*

.container {
}

*/
```

## Presets
Source: `BoxContainer.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `BoxContainer.tsx`

```ts
export const REF_ELEMENTS = [
]
```

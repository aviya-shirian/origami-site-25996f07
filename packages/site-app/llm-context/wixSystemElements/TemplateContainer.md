# Component LLM Context

## About

- Name: Template Container
- Archetype: Container
- Purpose: Use a dynamic repeater to render lists of items from a dataset or API, binding each field (text, image, button) to data. The layout is fixed once, and the repeater clones it for all records, auto-updating when the data changes—perfect for scalable, data-driven UI.

## Props
Source: `definition.ts`

```ts
props: {
    isLoadMoreButtonVisible: prop.boolean(),
    items: prop.object<unknown[]>(),
    direction: prop.direction(),
    totalVisibleItems: prop.number({ min: 1 }),
    renderItem: prop.object<ReactElement>(),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "./baseComp/index.css";

/* Allowed CSS overrides for @wix/origami/TemplateContainer; these are not computed styles. */
/*

.template-container {
  border-bottom-style: initial;
  padding-inline-end: initial;
  border-bottom-width: initial;
  margin-top: initial;
  overflow: initial;
  margin-inline-start: initial;
  border-start-end-radius: initial;
  box-shadow: initial;
  background: initial;
  padding-inline-start: initial;
  border-inline-end-width: initial;
  border-bottom: initial;
  border-top-width: initial;
  border-inline-start: initial;
  border-top: initial;
  border-inline-end: initial;
  padding-top: initial;
  border-start-start-radius: initial;
  border-inline-start-width: initial;
  margin-bottom: initial;
  border-top-style: initial;
  padding-bottom: initial;
  border-end-start-radius: initial;
  border-inline-start-style: initial;
  border-inline-end-style: initial;
  margin-inline-end: initial;
  border-end-end-radius: initial;
  --rowGap: 10px;
  --columnGap: 10px;
  --columnCount: 3;
  --itemAlignment: center;
}

*/
```

## Presets
Source: `TemplateContainer.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `TemplateContainer.tsx`

```ts
export const REF_ELEMENTS = [
  'loadMoreButton',
]
```

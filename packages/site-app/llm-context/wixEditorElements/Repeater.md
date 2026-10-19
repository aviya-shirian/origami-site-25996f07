# Component LLM Context

## About

- Name: Repeater
- Archetype: Container
- Purpose: A container component that renders a collection of items from a data source using a repeated template layout

## Props
Source: `definition.ts`

```ts
props: {
    a11y: prop.object<unknown>(),
    items: prop.object<unknown[]>(),
    emptyState: prop.object<{ title?: string; description?: string }>(),
    direction: prop.direction(),
    isLoading: prop.boolean(),
    emptyStateContent: prop.object<ReactElement>(),
    onLoadMore: prop.event('change'),
    renderItem: prop.object<ReactElement>(),
    activeItem: prop.number(),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/Repeater/css";

@import "./presets/slider_vertical.css";
@import "./presets/slider.css";
@import "./presets/cards_off.css";
@import "./presets/cards.css";
@import "./presets/grid.css";
@import "./presets/list.css";

@import "./custom-enums.css";

/* Allowed CSS overrides for @wix/origami/Repeater; these are not computed styles. */
/*

.repeater {
  padding-inline-end: initial;
  border-start-end-radius: initial;
  box-shadow: initial;
  padding-inline-start: initial;
  border-bottom: 0px solid rgba(0, 0, 0, 1);
  border-inline-start: 0px solid rgba(0, 0, 0, 1);
  border-top: 0px solid rgba(0, 0, 0, 1);
  border-inline-end: 0px solid rgba(0, 0, 0, 1);
  padding-top: initial;
  justify-content: initial;
  border-start-start-radius: initial;
  padding-bottom: initial;
  border-end-start-radius: initial;
  border-end-end-radius: initial;
  --row-gap: 0px;
  --single-row-behavior: stretch;
  --show-scrollbar: shown;
  --scroll-snap-align: none;
  --column-count: 4;
  --items-direction: ltr;
  --background-color: transparent;
  --background-color-opacity: 100%;
  --keep-rows-equal: false;
  --column-min-width: 350px;
  --column-gap: 0px;
  --items-per-row: enabled;
  --overflow-content: visible;
  --row-min-height: 200px;
}

.repeater-empty-state {
  background-color: initial;
}

*/
```

## Presets
Source: `Repeater.tsx`

```ts
export const PRESET_NAMES = [
  'slider_vertical',
  'slider',
  'cards_off',
  'cards',
  'grid',
  'list',
]
```

## Ref Elements
Source: `Repeater.tsx`

```ts
export const REF_ELEMENTS = [
]
```

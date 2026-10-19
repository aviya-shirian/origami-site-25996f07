# Component LLM Context

## About

- Name: Popup
- Purpose: Popup container where you can add any components

## Props
Source: `definition.ts`

```ts
props: {
    onMouseIn: prop.event('click'),
    children: prop.object<ReactElement>(),
    a11y: prop.object<unknown>(),
    closeButtonLabel: prop.text(),
    direction: prop.direction(),
    onMouseOut: prop.event('click'),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "./baseComp/index.css";

@import "./custom-enums.css";

/* Allowed CSS overrides for @wix/origami/PopupContainer; these are not computed styles. */
/*

.popup-container {
  --overlay-color: initial;
  --close-text-button-position: bottom-center;
  --close-button-position: end;
  --close-text-button-padding: 8px;
  --close-button-padding: 8px;
  --overlay-opacity: 60;
}

.close-button {
  stroke-opacity: 1;
  stroke: transparent;
  fill-opacity: 100;
  fill: rgba(0, 0, 0, 1);
  stroke-width: 0px;
  display: initial;
  --drop-shadow: none;
  --close-button-size: 24px;
  --close-button-icon-color: rgba(0, 0, 0, 1);
}

.close-button.popup-container__close-button--hover {
}

*/
```

## Presets
Source: `PopupContainer.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `PopupContainer.tsx`

```ts
export const REF_ELEMENTS = [
  'closeTextButton',
]
```

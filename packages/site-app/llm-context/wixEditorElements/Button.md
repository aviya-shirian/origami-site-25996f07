# Component LLM Context

## About

- Name: Button
- Archetype: Button
- Purpose: Guide visitors through your site and drive important actions using customizable button elements.

## Props
Source: `definition.ts`

```ts
props: {
    onMouseIn: prop.event('click'),
    onBlur: prop.event('focus'),
    onClick: prop.event('click'),
    a11y: prop.object<unknown>(),
    label: prop.text({ maxLength: 1200 }),
    direction: prop.direction(),
    link: prop.link(),
    onMouseOut: prop.event('click'),
    onFocus: prop.event('focus'),
    disabled: prop.boolean(),
    onDblClick: prop.event('click'),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/Button/css";

@import "./presets/baseButton.css";

@import "./custom-enums.css";

/* Allowed CSS overrides for @wix/origami/Button; these are not computed styles. */
/*

.button {
  column-gap: initial;
  padding-inline-end: initial;
  border-start-end-radius: initial;
  box-shadow: initial;
  background: initial;
  padding-inline-start: initial;
  border-bottom: initial;
  border-inline-start: initial;
  border-top: initial;
  row-gap: initial;
  border-inline-end: initial;
  padding-top: initial;
  border-start-start-radius: initial;
  padding-bottom: initial;
  border-end-start-radius: initial;
  border-end-end-radius: initial;
  display: flex;
  --icon-position: initial;
  --content-horizontal-alignment: initial;
}

.button.button--hover {
}

.button.button--disabled {
}

.label {
  text-decoration-line: initial;
  background-color: initial;
  text-transform: initial;
  color: initial;
  text-align: initial;
  font: initial;
  letter-spacing: initial;
  line-height: initial;
  display: initial;
  --text-shadow: initial;
}

.label.button__label--hover {
  text-decoration-line: underline;
}

.label.button__label--disabled {
}

*/
```

## Presets
Source: `Button.tsx`

```ts
export const PRESET_NAMES = [
  'baseButton',
]
```

## Ref Elements
Source: `Button.tsx`

```ts
export const REF_ELEMENTS = [
  'animatedIcon',
]
```

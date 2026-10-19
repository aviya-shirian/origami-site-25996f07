# Component LLM Context

## About

- Name: Progress Bar
- Archetype: ProgressBar
- Purpose: Displays a progress bar to visualize completion status or loading progress

## Props
Source: `definition.ts`

```ts
props: {
    a11y: prop.object<unknown>(),
    label: prop.text(),
    targetValue: prop.number(),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/ProgressBar/css";

/* Allowed CSS overrides for @wix/origami/ProgressBar; these are not computed styles. */
/*

.progressbar {
  border: none;
}

.barContainer {
  height: 13px;
  box-shadow: initial;
  border-color: initial;
  border-style: initial;
  --barBorderWidth: initial;
  --barBackgroundColor: initial;
  --barBorderStartEndRadius: 0px;
  --barForegroundColor: initial;
  --barBorderEndStartRadius: 0px;
  --barBorderStartStartRadius: 0px;
  --barBorderEndEndRadius: 0px;
}

.label {
  text-decoration-line: initial;
  text-transform: initial;
  color: initial;
  text-align: initial;
  font: initial;
  letter-spacing: initial;
  line-height: initial;
  padding-bottom: 12px;
}

*/
```

## Presets
Source: `ProgressBar.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `ProgressBar.tsx`

```ts
export const REF_ELEMENTS = [
]
```

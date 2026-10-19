# Component LLM Context

## About

- Name: Text Effects
- Archetype: Text
- Purpose: Text Effects Sticker

## Props
Source: `definition.ts`

```ts
props: {
    a11y: prop.object<unknown>(),
    direction: prop.direction(),
    text: prop.text({ maxLength: 500 }),
    link: prop.link(),
    patternScope: prop.enum('none', 'character', 'word'),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/TextEffectsSticker/css";

@import "./custom-enums.css";

/* Allowed CSS overrides for @wix/origami/TextEffectsSticker; these are not computed styles. */
/*

.text-effects-sticker {
  text-transform: initial;
  text-align: initial;
  font: initial;
  letter-spacing: 0em;
  line-height: 1.2em;
  --rotation-pattern-9-enabled: 0;
  --rotation-pattern-10-enabled: 0;
  --offset-pattern-7-enabled: 0;
  --rotation-pattern-3-enabled: 0;
  --outer-stroke: initial;
  --fill-opacity: 1;
  --rotation-pattern-11: 0;
  --rotation-pattern-7: 0;
  --outer-stroke-angle: 45deg;
  --offset-pattern-2: 0;
  --shadow-opacity: 1;
  --is-capitalize: null;
  --shadow-distance: 50;
  --offset-pattern-1-enabled: 0;
  --rotation-pattern-2-enabled: 0;
  --offset-pattern-11: 0;
  --offset-pattern-7: 0;
  --offset-pattern-8: 0;
  --stroke: #000000;
  --outer-stroke-color: initial;
  --rotation-pattern-8-enabled: 0;
  --offset-pattern-15: 0;
  --rotation-pattern-15-enabled: 0;
  --rotation-pattern-13-enabled: 0;
  --bg-solid: initial;
  --rotation-pattern-1-enabled: 0;
  --offset-pattern-3-enabled: 0;
  --offset-pattern-12: 0;
  --rotation-pattern-15: 0;
  --offset-pattern-4-enabled: 0;
  --rotation-pattern-12: 0;
  --pattern-preset: initial;
  --rotation-pattern-8: 0;
  --offset-pattern-9: 0;
  --rotation-pattern-5-enabled: 0;
  --outer-stroke-distance: 0;
  --offset-pattern-6: 0;
  --offset-pattern-1: 0;
  --rotation-pattern-4: 0;
  --shadow-blur: 10;
  --rotation-pattern-intensity: initial;
  --offset-pattern-11-enabled: 0;
  --offset-pattern-5-enabled: 0;
  --rotation-pattern-2: 0;
  --offset-pattern-14: 0;
  --rotation-pattern-6-enabled: 0;
  --offset-pattern-5: 0;
  --bg-opacity: initial;
  --fill: #000000;
  --rotation-pattern-5: 0;
  --rotation-pattern-3: 0;
  --shadow-color: #000000;
  --offset-pattern-9-enabled: 0;
  --rotation-pattern-9: 0;
  --rotation-pattern-14-enabled: 0;
  --rotation-pattern-11-enabled: 0;
  --rotation-pattern-12-enabled: 0;
  --rotation-pattern-10: 0;
  --offset-pattern-13-enabled: 0;
  --offset-pattern-15-enabled: 0;
  --offset-pattern-14-enabled: 0;
  --rotation-pattern-1: 0;
  --offset-pattern-13: 0;
  --rotation-pattern-14: 0;
  --rotation-pattern-4-enabled: 0;
  --shadow-angle: 45deg;
  --rotation-pattern-6: 0;
  --offset-pattern-3: 0;
  --offset-pattern-10: 0;
  --offset-pattern-4: 0;
  --rotation-pattern-7-enabled: 0;
  --offset-pattern-8-enabled: 0;
  --offset-pattern-intensity: initial;
  --offset-pattern-10-enabled: 0;
  --stroke-width: 20px;
  --rotation-pattern-13: 0;
  --offset-pattern-12-enabled: 0;
  --offset-pattern-2-enabled: 0;
  --offset-pattern-6-enabled: 0;
}

*/
```

## Presets
Source: `TextEffectsSticker.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `TextEffectsSticker.tsx`

```ts
export const REF_ELEMENTS = [
]
```

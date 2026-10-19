# Component LLM Context

## About

- Name: Text Effects
- Archetype: Text
- Purpose: Text Effects Letter Press

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
@import "@wix/editor-react-components/TextEffectsLetterPress/css";

@import "./custom-enums.css";

/* Allowed CSS overrides for @wix/origami/TextEffectsLetterPress; these are not computed styles. */
/*

.text-effects-letter-press {
  text-transform: initial;
  color: initial;
  text-align: initial;
  font: initial;
  letter-spacing: 0em;
  line-height: 1.2em;
  --rotation-pattern-9-enabled: 0;
  --rotation-pattern-10-enabled: 0;
  --offset-pattern-7-enabled: 0;
  --rotation-pattern-3-enabled: 0;
  --fill-opacity: 1;
  --rotation-pattern-11: 0;
  --text-effects-opacity-color-1: initial;
  --rotation-pattern-7: 0;
  --offset-pattern-2: 0;
  --shadow-opacity: initial;
  --is-capitalize: null;
  --shadow-distance: initial;
  --offset-pattern-1-enabled: 0;
  --rotation-pattern-2-enabled: 0;
  --offset-pattern-11: 0;
  --offset-pattern-7: 0;
  --offset-pattern-8: 0;
  --rotation-pattern-8-enabled: 0;
  --offset-pattern-15: 0;
  --rotation-pattern-15-enabled: 0;
  --text-effects-color-2: initial;
  --rotation-pattern-13-enabled: 0;
  --rotation-pattern-1-enabled: 0;
  --layer-blend-mode: normal;
  --offset-pattern-3-enabled: 0;
  --offset-pattern-12: 0;
  --rotation-pattern-15: 0;
  --offset-pattern-4-enabled: 0;
  --rotation-pattern-12: 0;
  --pattern-preset: initial;
  --rotation-pattern-8: 0;
  --offset-pattern-9: 0;
  --rotation-pattern-5-enabled: 0;
  --offset-pattern-6: 0;
  --offset-pattern-1: 0;
  --rotation-pattern-4: 0;
  --shadow-blur: initial;
  --rotation-pattern-intensity: initial;
  --offset-pattern-11-enabled: 0;
  --offset-pattern-5-enabled: 0;
  --rotation-pattern-2: 0;
  --offset-pattern-14: 0;
  --rotation-pattern-6-enabled: 0;
  --offset-pattern-5: 0;
  --fill: #000000;
  --rotation-pattern-5: 0;
  --rotation-pattern-3: 0;
  --offset-pattern-9-enabled: 0;
  --text-effects-color-1: initial;
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
  --shadow-angle: initial;
  --rotation-pattern-6: 0;
  --offset-pattern-3: 0;
  --offset-pattern-10: 0;
  --offset-pattern-4: 0;
  --rotation-pattern-7-enabled: 0;
  --offset-pattern-8-enabled: 0;
  --offset-pattern-intensity: initial;
  --offset-pattern-10-enabled: 0;
  --rotation-pattern-13: 0;
  --offset-pattern-12-enabled: 0;
  --text-shadow: initial;
  --offset-pattern-2-enabled: 0;
  --offset-pattern-6-enabled: 0;
}

*/
```

## Presets
Source: `TextEffectsLetterPress.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `TextEffectsLetterPress.tsx`

```ts
export const REF_ELEMENTS = [
]
```

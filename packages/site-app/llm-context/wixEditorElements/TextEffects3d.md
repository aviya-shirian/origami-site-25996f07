# Component LLM Context

## About

- Name: Text Effects
- Archetype: Text
- Purpose: Text Effect - 3D

## Props
Source: `definition.ts`

```ts
props: {
    isDecorative: prop.boolean(),
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
@import "@wix/editor-react-components/TextEffects3d/css";

@import "./custom-enums.css";

/* Allowed CSS overrides for @wix/origami/TextEffects3d; these are not computed styles. */
/*

.text-effects-3d {
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
  --fill-opacity: initial;
  --rotation-pattern-11: 0;
  --text-fill: #000000;
  --rotation-pattern-7: 0;
  --text-shadow-3: initial;
  --offset-pattern-2: 0;
  --is-capitalize: null;
  --offset-pattern-1-enabled: 0;
  --rotation-pattern-2-enabled: 0;
  --offset-pattern-11: 0;
  --offset-pattern-7: 0;
  --offset-pattern-8: 0;
  --fill-color: initial;
  --rotation-pattern-8-enabled: 0;
  --text-stroke: initial;
  --offset-pattern-15: 0;
  --rotation-pattern-15-enabled: 0;
  --rotation-pattern-13-enabled: 0;
  --rotation-pattern-1-enabled: 0;
  --offset-pattern-3-enabled: 0;
  --offset-pattern-12: 0;
  --rotation-pattern-15: 0;
  --offset-pattern-4-enabled: 0;
  --rotation-pattern-12: 0;
  --stroke-opacity: 100%;
  --pattern-preset: initial;
  --rotation-pattern-8: 0;
  --offset-pattern-9: 0;
  --rotation-pattern-5-enabled: 0;
  --offset-pattern-6: 0;
  --offset-pattern-1: 0;
  --rotation-pattern-4: 0;
  --rotation-pattern-intensity: initial;
  --offset-pattern-11-enabled: 0;
  --offset-pattern-5-enabled: 0;
  --text-shadow-1: initial;
  --rotation-pattern-2: 0;
  --text-shadow-2: initial;
  --offset-pattern-14: 0;
  --rotation-pattern-6-enabled: 0;
  --offset-pattern-5: 0;
  --rotation-pattern-5: 0;
  --rotation-pattern-3: 0;
  --offset-pattern-9-enabled: 0;
  --text-stroke-opacity: initial;
  --rotation-pattern-9: 0;
  --rotation-pattern-14-enabled: 0;
  --rotation-pattern-11-enabled: 0;
  --rotation-pattern-12-enabled: 0;
  --rotation-pattern-10: 0;
  --offset-pattern-13-enabled: 0;
  --offset-pattern-15-enabled: 0;
  --offset-pattern-14-enabled: 0;
  --text-stroke-color: initial;
  --rotation-pattern-1: 0;
  --offset-pattern-13: 0;
  --text-fill-opacity: 1;
  --rotation-pattern-14: 0;
  --rotation-pattern-4-enabled: 0;
  --rotation-pattern-6: 0;
  --offset-pattern-3: 0;
  --offset-pattern-10: 0;
  --offset-pattern-4: 0;
  --rotation-pattern-7-enabled: 0;
  --offset-pattern-8-enabled: 0;
  --offset-pattern-intensity: initial;
  --offset-pattern-10-enabled: 0;
  --stroke-color: #000000;
  --stroke-width: 1px;
  --rotation-pattern-13: 0;
  --offset-pattern-12-enabled: 0;
  --offset-pattern-2-enabled: 0;
  --offset-pattern-6-enabled: 0;
}

*/
```

## Presets
Source: `TextEffects3d.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `TextEffects3d.tsx`

```ts
export const REF_ELEMENTS = [
]
```

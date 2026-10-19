# Component LLM Context

## About

- Name: Text Effects
- Archetype: Text
- Purpose: Text Effects Bauhaus

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
@import "@wix/editor-react-components/TextEffectsBauhaus/css";

@import "./custom-enums.css";

/* Allowed CSS overrides for @wix/origami/TextEffectsBauhaus; these are not computed styles. */
/*

.text-effects-bauhaus {
  text-transform: initial;
  text-align: initial;
  font: initial;
  letter-spacing: 0em;
  line-height: 1.2em;
  --rotation-pattern-9-enabled: 0;
  --text-effects-color-3: #CFFFCF;
  --rotation-pattern-10-enabled: 0;
  --offset-pattern-7-enabled: 0;
  --rotation-pattern-3-enabled: 0;
  --rotation-pattern-11: 0;
  --rotation-pattern-7: 0;
  --offset-pattern-2: 0;
  --is-capitalize: null;
  --shadow-distance: 10;
  --offset-pattern-1-enabled: 0;
  --rotation-pattern-2-enabled: 0;
  --offset-pattern-11: 0;
  --offset-pattern-7: 0;
  --offset-pattern-8: 0;
  --rotation-pattern-8-enabled: 0;
  --offset-pattern-15: 0;
  --rotation-pattern-15-enabled: 0;
  --text-effects-color-2: #D2E9FF;
  --rotation-pattern-13-enabled: 0;
  --rotation-pattern-1-enabled: 0;
  --layer-blend-mode: multiply;
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
  --rotation-pattern-intensity: initial;
  --offset-pattern-11-enabled: 0;
  --offset-pattern-5-enabled: 0;
  --rotation-pattern-2: 0;
  --offset-pattern-14: 0;
  --rotation-pattern-6-enabled: 0;
  --offset-pattern-5: 0;
  --rotation-pattern-5: 0;
  --rotation-pattern-3: 0;
  --offset-pattern-9-enabled: 0;
  --text-effects-color-1: #EED2FF;
  --rotation-pattern-9: 0;
  --rotation-pattern-14-enabled: 0;
  --rotation-pattern-11-enabled: 0;
  --rotation-pattern-12-enabled: 0;
  --rotation-pattern-10: 0;
  --offset-pattern-13-enabled: 0;
  --bevel-angle: 210deg;
  --offset-pattern-15-enabled: 0;
  --offset-pattern-14-enabled: 0;
  --rotation-pattern-1: 0;
  --offset-pattern-13: 0;
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
  --rotation-pattern-13: 0;
  --offset-pattern-12-enabled: 0;
  --offset-pattern-2-enabled: 0;
  --offset-pattern-6-enabled: 0;
}

*/
```

## Presets
Source: `TextEffectsBauhaus.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `TextEffectsBauhaus.tsx`

```ts
export const REF_ELEMENTS = [
]
```

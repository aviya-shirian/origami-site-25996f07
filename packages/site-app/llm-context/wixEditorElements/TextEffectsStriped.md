# Component LLM Context

## About

- Name: Text Effects
- Archetype: Text
- Purpose: Text Effects Striped

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
@import "@wix/editor-react-components/TextEffectsStriped/css";

@import "./custom-enums.css";

/* Allowed CSS overrides for @wix/origami/TextEffectsStriped; these are not computed styles. */
/*

.text-effects-striped {
  text-transform: initial;
  color: initial;
  text-align: initial;
  font: initial;
  letter-spacing: 0em;
  line-height: 1.2em;
  --stripe-angle: 0deg;
  --disable-inner-animation: none;
  --text-effects-color-2: #000000;
  --inner-animation-speed: 12.6;
  --stripe-size: 10px;
  --text-effects-color-1: #000000;
}

*/
```

## Presets
Source: `TextEffectsStriped.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `TextEffectsStriped.tsx`

```ts
export const REF_ELEMENTS = [
]
```

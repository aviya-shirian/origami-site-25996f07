# Component LLM Context

## About

- Name: Lottie
- Archetype: AnimatedGraphic
- Purpose: A component that displays and plays Lottie animations (JSON-based vector animations) with configurable playback, looping, speed, and optional on-stage play/pause control.

## Props
Source: `definition.ts`

```ts
props: {
    onMouseIn: prop.event('click'),
    onBlur: prop.event('focus'),
    loop: prop.boolean(),
    onClick: prop.event('click'),
    decorative: prop.boolean(),
    a11y: prop.object<unknown>(),
    showButtonOnHover: prop.enum('always', 'onHover'),
    direction: prop.direction(),
    allowClickToStop: prop.boolean(),
    onMouseOut: prop.event('click'),
    animationUrl: prop.object<string>(),
    onFocus: prop.event('focus'),
    onDblClick: prop.event('click'),
    speed: prop.number({ min: 0.5 }),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/Lottie/css";

/* Allowed CSS overrides for @wix/origami/Lottie; these are not computed styles. */
/*

.lottie {
  padding-inline-end: initial;
  border-start-end-radius: initial;
  box-shadow: initial;
  background: initial;
  padding-inline-start: initial;
  border-bottom: 0px none rgba(0, 0, 0, 1);
  border-inline-start: 0px none rgba(0, 0, 0, 1);
  border-top: 0px none rgba(0, 0, 0, 1);
  border-inline-end: 0px none rgba(0, 0, 0, 1);
  padding-top: initial;
  border-start-start-radius: initial;
  padding-bottom: initial;
  border-end-start-radius: initial;
  border-end-end-radius: initial;
}

*/
```

## Presets
Source: `Lottie.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `Lottie.tsx`

```ts
export const REF_ELEMENTS = [
  'playButton',
]
```

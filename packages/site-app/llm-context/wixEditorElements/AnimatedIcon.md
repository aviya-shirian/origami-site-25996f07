# Component LLM Context

## About

- Name: Animated Icon
- Archetype: Image
- Purpose: Add interactive icons that animate on hover to make your design more engaging and delightful

## Props
Source: `definition.ts`

```ts
props: {
    duration: prop.number(),
    svg: prop.vectorArt(),
    svgCustomAnimationSelected: prop.vectorArt(),
    svgLastStaticSelected: prop.vectorArt(),
    svgLastAnimatedSelected: prop.vectorArt(),
    svgCustomAnimationStart: prop.vectorArt(),
    svgCustomAnimationEnd: prop.vectorArt(),
    trigger: prop.enum('hover', 'click'),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/AnimatedIcon/css";

/* Allowed CSS overrides for @wix/origami/AnimatedIcon; these are not computed styles. */
/*

.animated-icon {
  display: initial;
  --fill: #000000;
  --size: 16px;
  --rotation: 0deg;
}

.animated-icon.animated-icon--hover {
}

.animated-icon.animated-icon--disabled {
}

.animated-icon.animated-icon--selected {
}

*/
```

## Presets
Source: `AnimatedIcon.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `AnimatedIcon.tsx`

```ts
export const REF_ELEMENTS = [
]
```

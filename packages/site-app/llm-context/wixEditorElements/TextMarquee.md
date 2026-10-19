# Component LLM Context

## About

- Name: Running Text
- Archetype: Text
- Purpose: Text Marquee

## Props
Source: `definition.ts`

```ts
props: {
    isDecorative: prop.boolean(),
    svg: prop.vectorArt(),
    a11y: prop.object<unknown>(),
    text: prop.text(),
    movementDirection: prop.enum('ltr', 'rtl'),
    link: prop.link(),
    pauseOnHover: prop.boolean(),
    speed: prop.number(),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/TextMarquee/css";

/* Allowed CSS overrides for @wix/origami/TextMarquee; these are not computed styles. */
/*

.text-marquee {
  font: initial;
  color: initial;
  --opacity: initial;
  --separator-scale: 1;
  --spaceBetweenItems: 10px;
  --separatorFillColor: #000000;
}

*/
```

## Presets
Source: `TextMarquee.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `TextMarquee.tsx`

```ts
export const REF_ELEMENTS = [
]
```

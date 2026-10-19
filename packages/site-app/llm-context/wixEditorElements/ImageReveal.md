# Component LLM Context

## About

- Name: Image Reveal
- Archetype: Slider
- Purpose: A before and after image comparison slider with a draggable divider

## Props
Source: `definition.ts`

```ts
props: {
    a11y: prop.object<unknown>(),
    labelPosition: prop.enum('horizontal', 'vertical'),
    beforeLabel: prop.text(),
    afterLabel: prop.text(),
    beforeImage: prop.object<{ uri?: string; url: string; name?: string; height?: number; width?: number; animated?: boolean; crop?: { x: number; y: number; width: number; height: number }; quality?: number; alt?: string }>(),
    afterImage: prop.object<{ uri?: string; url: string; name?: string; height?: number; width?: number; animated?: boolean; crop?: { x: number; y: number; width: number; height: number }; quality?: number; alt?: string }>(),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/ImageReveal/css";

/* Allowed CSS overrides for @wix/origami/ImageReveal; these are not computed styles. */
/*

.image-reveal {
  border: none;
  box-shadow: initial;
  border-radius: 12px;
}

.image-reveal-btn {
  border: none;
  box-shadow: 0 4px 12px rgba(0,0,0,0.22);
  background: rgba(255,255,255,1);
  border-radius: 50%;
  padding: 9px;
  display: initial;
  --arrow-spacing: 3px;
}

.image-reveal-btn.image-reveal-btn--focus {
}

.image-reveal-btn.image-reveal-btn--hover {
}

.image-reveal-btn.image-reveal-btn--disabled {
}

.image-reveal-divider {
  width: 2px;
  display: initial;
  background: rgba(255,255,255,0.85);
}

.image-reveal-label-after {
  text-decoration-line: initial;
  text-transform: initial;
  border-start-end-radius: 20px;
  background: #ffb6c1;
  text-shadow: initial;
  height: 90px;
  color: #1e293b;
  text-align: initial;
  border-start-start-radius: 0;
  font: var(--wst-paragraph-2-font);
  letter-spacing: 0.04em;
  line-height: initial;
  border-end-start-radius: 0;
  border-end-end-radius: 20px;
  width: 36px;
  display: initial;
}

.image-reveal-label-before {
  text-decoration-line: initial;
  text-transform: initial;
  border-start-end-radius: 20px;
  background: #ffb6c1;
  text-shadow: initial;
  height: 90px;
  color: #1e293b;
  text-align: initial;
  border-start-start-radius: 0;
  font: var(--wst-paragraph-2-font);
  letter-spacing: 0.04em;
  line-height: initial;
  border-end-start-radius: 0;
  border-end-end-radius: 20px;
  width: 36px;
  display: initial;
}

*/
```

## Presets
Source: `ImageReveal.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `ImageReveal.tsx`

```ts
export const REF_ELEMENTS = [
]
```

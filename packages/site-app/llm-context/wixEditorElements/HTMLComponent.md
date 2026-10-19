# Component LLM Context

## About

- Name: HTML Element
- Archetype: Frame
- Purpose: HTMLComponent

## Props
Source: `definition.ts`

```ts
props: {
    onMouseIn: prop.event('click'),
    sourceType: prop.enum('external', 'nonexternal'),
    scrolling: prop.enum('yes', 'no', 'auto'),
    url: prop.object<string>(),
    a11y: prop.object<unknown>(),
    allowFullScreen: prop.boolean(),
    onMouseOut: prop.event('click'),
    componentConsentPolicy: prop.enum('essential', 'functional', 'analytics', 'advertising', 'dataToThirdParty'),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/HTMLComponent/css";

/* Allowed CSS overrides for @wix/origami/HTMLComponent; these are not computed styles. */
/*

.html-component {
}

*/
```

## Presets
Source: `HTMLComponent.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `HTMLComponent.tsx`

```ts
export const REF_ELEMENTS = [
]
```

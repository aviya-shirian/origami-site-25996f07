# Component LLM Context

## About

- Name: HIPAA Certification
- Archetype: Frame
- Purpose: Displays a HIPAA certification widget. Shows activation instructions when not compliant, or a HIPAA Compliant badge when activated.

## Props
Source: `definition.ts`

```ts
props: {
    a11y: prop.object<unknown>(),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/HipaaIcon/css";

/* Allowed CSS overrides for @wix/origami/HipaaIcon; these are not computed styles. */
/*

.hipaa-icon {
  color: #3B7BBF;
  background-color: #FFFFFF;
}

*/
```

## Presets
Source: `HipaaIcon.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `HipaaIcon.tsx`

```ts
export const REF_ELEMENTS = [
]
```

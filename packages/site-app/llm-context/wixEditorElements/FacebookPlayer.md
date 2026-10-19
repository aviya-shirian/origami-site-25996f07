# Component LLM Context

## About

- Name: Facebook Player
- Purpose: Embeds and plays Facebook videos or stories directly on a web page

## Props
Source: `definition.ts`

```ts
props: {
    url: prop.object<string>(),
    a11y: prop.object<unknown>(),
    description: prop.text({ maxLength: 256 }),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/SocialPlayerFacebook/css";

/* Allowed CSS overrides for @wix/origami/FacebookPlayer; these are not computed styles. */
/*

.socialPlayerFacebook {
  box-shadow: initial;
  --borderStartEndRadius: 0px;
  --boxShadow: initial;
  --border-width: initial;
  --borderBottom: 0px;
  --borderInlineStart: 0px;
  --borderTop: 0px;
  --borderInlineEnd: 0px;
  --borderStartStartRadius: 0px;
  --border-color: initial;
  --borderEndStartRadius: 0px;
  --borderEndEndRadius: 0px;
  --border-style: initial;
}

*/
```

## Presets
Source: `FacebookPlayer.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `FacebookPlayer.tsx`

```ts
export const REF_ELEMENTS = [
]
```

# Component LLM Context

## About

- Name: Snapchat Player
- Archetype: Social
- Purpose: Embeds and plays Snapchat videos or stories directly on a web page

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
@import "@wix/editor-react-components/SocialPlayerSnapchat/css";

/* Allowed CSS overrides for @wix/origami/SnapchatPlayer; these are not computed styles. */
/*

.socialPlayerSnapchat {
  box-shadow: initial;
  --borderStartEndRadius: 0px;
  --border-width: initial;
  --border-radius: initial;
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
Source: `SnapchatPlayer.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `SnapchatPlayer.tsx`

```ts
export const REF_ELEMENTS = [
]
```

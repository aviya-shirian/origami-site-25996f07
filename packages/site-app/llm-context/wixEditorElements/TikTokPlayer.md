# Component LLM Context

## About

- Name: TikTok Player
- Archetype: Social
- Purpose: Displays a TikTok video player, allowing users to watch and share short-form videos

## Props
Source: `definition.ts`

```ts
props: {
    loop: prop.boolean(),
    startTime: prop.number(),
    url: prop.object<string>(),
    description: prop.text({ maxLength: 256 }),
    a11y: prop.object<unknown>(),
    mute: prop.boolean(),
    endTime: prop.number(),
    enabledControls: prop.boolean(),
    autoPlay: prop.boolean(),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/SocialPlayerTikTok/css";

/* Allowed CSS overrides for @wix/origami/TikTokPlayer; these are not computed styles. */
/*

.socialPlayerTikTok {
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
Source: `TikTokPlayer.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `TikTokPlayer.tsx`

```ts
export const REF_ELEMENTS = [
]
```

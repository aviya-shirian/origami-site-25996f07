# Component LLM Context

## About

- Name: Vimeo Player
- Archetype: Social
- Purpose: Embeds Vimeo videos, allowing visitors to watch them directly on a web page

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
    enabledTitle: prop.boolean(),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/SocialPlayerVimeo/css";

/* Allowed CSS overrides for @wix/origami/VimeoPlayer; these are not computed styles. */
/*

.socialPlayerVimeo {
  box-shadow: initial;
  --borderStartEndRadius: 0px;
  --border-width: initial;
  --borderBottom: 0px;
  --borderInlineStart: 0px;
  --borderTop: 0px;
  --borderInlineEnd: 0px;
  --borderStartStartRadius: 0px;
  --border-color: initial;
  --borderEndStartRadius: 0px;
  --box-shadow: none;
  --borderEndEndRadius: 0px;
  --border-style: initial;
}

*/
```

## Presets
Source: `VimeoPlayer.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `VimeoPlayer.tsx`

```ts
export const REF_ELEMENTS = [
]
```

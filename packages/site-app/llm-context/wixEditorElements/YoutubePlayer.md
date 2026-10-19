# Component LLM Context

## About

- Name: Youtube Player
- Archetype: Social
- Purpose: plays youtube videos directly on a web page

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
@import "@wix/editor-react-components/SocialPlayerYoutube/css";

/* Allowed CSS overrides for @wix/origami/YoutubePlayer; these are not computed styles. */
/*

.socialPlayerYoutube {
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
Source: `YoutubePlayer.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `YoutubePlayer.tsx`

```ts
export const REF_ELEMENTS = [
]
```

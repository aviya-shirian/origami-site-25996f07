# Component LLM Context

## About

- Name: Transparent Video
- Archetype: Video
- Purpose: Allows users to display transparent videos

## Props
Source: `definition.ts`

```ts
props: {
    a11y: prop.object<unknown>(),
    videoStartType: prop.enum('auto', 'click', 'hover'),
    saturation: prop.number(),
    hue: prop.number(),
    mute: prop.boolean(),
    video: prop.object<{ uri: string; name?: string; sources: Array<{ quality: '1080p' | '720p' | '480p' | '360p'; width: number; height: number; types: Array<{ format: 'mp4' | 'mp4-luminance'; uri: string; url: string }> }>; adaptiveSources: Array<{ format: 'hls' | 'dash'; uri: string; url: string }>; hasAudio: boolean; fps: number; poster?: { uri?: string; url: string; name?: string; height?: number; width?: number; animated?: boolean; crop?: { x: number; y: number; width: number; height: number }; quality?: number; alt?: string } }>(),
    duotoneDark: prop.text(),
    videoEndType: prop.enum('loop', 'replayOnClick', 'stop'),
    brightness: prop.number(),
    contrast: prop.number(),
    duotoneLight: prop.text(),
    effectType: prop.text(),
    filterEffectRecolorVideo: prop.boolean(),
    playbackRate: prop.number(),
    isCustom: prop.boolean(),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/TransparentVideo/css";

/* Allowed CSS overrides for @wix/origami/TransparentVideo; these are not computed styles. */
/*

.wixui-transparent-video {
}

*/
```

## Presets
Source: `TransparentVideo.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `TransparentVideo.tsx`

```ts
export const REF_ELEMENTS = [
]
```

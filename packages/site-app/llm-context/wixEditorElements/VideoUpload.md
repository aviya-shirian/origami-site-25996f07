# Component LLM Context

## About

- Name: Video Player
- Archetype: Video
- Purpose: Native video player, allows users to upload and play video files

## Props
Source: `definition.ts`

```ts
props: {
    enableControls: prop.boolean(),
    loop: prop.boolean(),
    a11y: prop.object<unknown>(),
    autoplay: prop.boolean(),
    mute: prop.boolean(),
    video: prop.object<{ uri: string; name?: string; sources: Array<{ quality: '1080p' | '720p' | '480p' | '360p'; width: number; height: number; types: Array<{ format: 'mp4' | 'mp4-luminance'; uri: string; url: string }> }>; adaptiveSources: Array<{ format: 'hls' | 'dash'; uri: string; url: string }>; hasAudio: boolean; fps: number; poster?: { uri?: string; url: string; name?: string; height?: number; width?: number; animated?: boolean; crop?: { x: number; y: number; width: number; height: number }; quality?: number; alt?: string } }>(),
    enableTitle: prop.boolean(),
    playbackRate: prop.number(),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/VideoUpload/css";

/* Allowed CSS overrides for @wix/origami/VideoUpload; these are not computed styles. */
/*

.wixui-video-upload {
  box-shadow: initial;
  --borderStartEndRadius: 0px;
  --boxShadow: none;
  --border-width: 0px;
  --borderBottom: 0px;
  --borderInlineStart: 0px;
  --borderTop: 0px;
  --borderInlineEnd: 0px;
  --borderStartStartRadius: 0px;
  --font: normal normal normal 28px/1.2em madefor-text, helveticaneuew01-45ligh, helveticaneuew02-45ligh, helveticaneuew10-45ligh, sans-serif;
  --border-color: transparent;
  --borderEndStartRadius: 0px;
  --maskImage: none;
  --borderEndEndRadius: 0px;
  --border-style: solid;
}

*/
```

## Presets
Source: `VideoUpload.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `VideoUpload.tsx`

```ts
export const REF_ELEMENTS = [
]
```

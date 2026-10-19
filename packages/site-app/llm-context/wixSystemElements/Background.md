# Component LLM Context

## About

- Name: Background
- Purpose: Displays a background layer, such as an image, color, or video within section or container.

## Props
Source: `definition.ts`

```ts
props: {
    isDecorative: prop.boolean(),
    loop: prop.boolean(),
    fittingType: prop.enum('fill', 'tile', 'original_size'),
    showControls: prop.boolean(),
    videoMedia: prop.object<{ uri: string; name?: string; sources: Array<{ quality: '1080p' | '720p' | '480p' | '360p'; width: number; height: number; types: Array<{ format: 'mp4' | 'mp4-luminance'; uri: string; url: string }> }>; adaptiveSources: Array<{ format: 'hls' | 'dash'; uri: string; url: string }>; hasAudio: boolean; fps: number; poster?: { uri?: string; url: string; name?: string; height?: number; width?: number; animated?: boolean; crop?: { x: number; y: number; width: number; height: number }; quality?: number; alt?: string } }>(),
    image: prop.object<{ uri?: string; url: string; name?: string; height?: number; width?: number; animated?: boolean; crop?: { x: number; y: number; width: number; height: number }; quality?: number; alt?: string }>(),
    a11y: prop.object<unknown>(),
    autoplay: prop.boolean(),
    focalPoint: prop.object<{ x?: number; y?: number }>(),
    qualityPolicy: prop.enum('highest', 'proportional', 'adaptive'),
    posterEffect: prop.enum('fade', 'none'),
    imageOverlay: prop.object<{ uri?: string; url: string; name?: string; height?: number; width?: number; animated?: boolean; crop?: { x: number; y: number; width: number; height: number }; quality?: number; alt?: string }>(),
    muted: prop.boolean(),
    playbackRate: prop.enum('0.25', '0.5', '0.75', '1.0', '1.25', '1.5', '2.0'),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "./baseComp/index.css";

/* Allowed CSS overrides for @wix/origami/Background; these are not computed styles. */
/*

.background {
  background-color: initial;
  --backgroundColor: initial;
  --blendMode: normal;
  --backgroundOverlayOpacity: initial;
  --backgroundImage: initial;
  --backgroundMediaOpacity: initial;
  --backgroundColorOpacity: initial;
  --maskImage: initial;
}

*/
```

## Presets
Source: `Background.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `Background.tsx`

```ts
export const REF_ELEMENTS = [
]
```

# Component LLM Context

## Props
Source: `definition.ts`

```ts
props: {
    loopVideos: prop.boolean(),
    loopItems: prop.boolean(),
    autoSlideBehaviour: prop.enum('CONTINUOUS_SCROLL', 'INTERVALS'),
    autoSlide: prop.boolean(),
    autoSlideIntervalTime: prop.number({ min: 1 }),
    showPlayButton: prop.boolean(),
    items: prop.object<Array<{ linkTitle?: string; description?: string; id?: string; alt?: string; link?: { href?: string; target?: '_self' | '_blank'; rel?: string; pageRole?: string }; media?: { mediaType?: 'IMAGE' | 'VIDEO'; imageOptions?: { imageData?: { uri?: string; url: string; name?: string; height?: number; width?: number; animated?: boolean; crop?: { x: number; y: number; width: number; height: number }; quality?: number; alt?: string }; imageInfo?: { url?: string; altText?: string; height?: number; id?: string; filename?: string; width?: number }; focalPoint?: { x?: number; y?: number } }; videoOptions?: { videoData?: { uri: string; name?: string; sources: Array<{ quality: '1080p' | '720p' | '480p' | '360p'; width: number; height: number; types: Array<{ format: 'mp4' | 'mp4-luminance'; uri: string; url: string }> }>; adaptiveSources: Array<{ format: 'hls' | 'dash'; uri: string; url: string }>; hasAudio: boolean; fps: number; poster?: { uri?: string; url: string; name?: string; height?: number; width?: number; animated?: boolean; crop?: { x: number; y: number; width: number; height: number }; quality?: number; alt?: string } }; focalPoint?: { x?: number; y?: number } } }; title?: string }>>(),
    downloadProtection: prop.boolean(),
    itemClickAction: prop.enum('ACTION', 'LINK', 'NOTHING'),
    expandedGalleryTransitionDuration: prop.number({ min: 100 }),
    videoPlayTrigger: prop.enum('HOVER', 'AUTOPLAY'),
    boundItems: prop.object<Array<unknown>>(),
    expandedGalleryTransition: prop.enum('NONE', 'SMOOTH'),
    pauseAutoSlideOnHover: prop.boolean(),
    onGetMoreItems: prop.event('change'),
    autoSlideContinuousScrollSpeed: prop.number({ min: 1 }),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "./baseComp/index.css";

@import "./presets/vertical-flex-pattern-4.css";
@import "./presets/vertical-grid-list-3.css";
@import "./presets/vertical-grid-pattern-responsive-2.css";
@import "./presets/vertical-grid-simple-responsive-1.css";
@import "./presets/vertical-grid-pattern-responsive-6.css";
@import "./presets/vertical-grid-simple-responsive-5.css";
@import "./presets/vertical-flex-pattern-1.css";
@import "./presets/vertical-grid-simple-fixed-1.css";
@import "./presets/vertical-grid-simple-responsive-7.css";
@import "./presets/vertical-grid-pattern-responsive-3.css";
@import "./presets/vertical-grid-simple-responsive-2.css";
@import "./presets/vertical-grid-simple-responsive-6.css";
@import "./presets/horizontal-grid-simple-responsive-1.css";
@import "./presets/vertical-grid-list-1.css";
@import "./presets/vertical-grid-simple-responsive-3.css";
@import "./presets/vertical-grid-pattern-responsive-4.css";
@import "./presets/horizontal-grid-simple-responsive-lean.css";
@import "./presets/vertical-grid-pattern-responsive-5.css";
@import "./presets/vertical-grid-pattern-responsive-8.css";
@import "./presets/vertical-grid-pattern-responsive-1.css";
@import "./presets/vertical-grid-pattern-responsive-7.css";
@import "./presets/vertical-grid-simple-responsive-4.css";
@import "./presets/vertical-flex-pattern-3.css";
@import "./presets/vertical-grid-list-2.css";
@import "./presets/vertical-flex-pattern-2.css";
@import "./presets/vertical-grid-simple-responsive-8.css";

/* Allowed CSS overrides for @wix/origami/FastGallery; these are not computed styles. */
/*

.fast-gallery {
  --border-bottom-left-radius: 0;
  --border-left-color: #000000;
  --padding-left: 0px;
  --padding-top: 0px;
  --border-left-width: 0px;
  --padding-bottom: 0px;
  --border-right-style: initial;
  --border-right-color: #000000;
  --border-bottom-width: 0px;
  --border-bottom-right-radius: 0;
  --background-color: #ffffff;
  --padding-right: 0px;
  --border-top-style: initial;
  --border-left-style: initial;
  --border-top-right-radius: 0;
  --border-right-width: 0px;
  --border-bottom-style: initial;
  --box-shadow: ;
  --border-top-color: #000000;
  --border-top-width: 0px;
  --border-bottom-color: #000000;
  --border-top-left-radius: 0;
}

*/
```

## Presets
Source: `FastGallery.tsx`

```ts
export const PRESET_NAMES = [
  'vertical-flex-pattern-4',
  'vertical-grid-list-3',
  'vertical-grid-pattern-responsive-2',
  'vertical-grid-simple-responsive-1',
  'vertical-grid-pattern-responsive-6',
  'vertical-grid-simple-responsive-5',
  'vertical-flex-pattern-1',
  'vertical-grid-simple-fixed-1',
  'vertical-grid-simple-responsive-7',
  'vertical-grid-pattern-responsive-3',
  'vertical-grid-simple-responsive-2',
  'vertical-grid-simple-responsive-6',
  'horizontal-grid-simple-responsive-1',
  'vertical-grid-list-1',
  'vertical-grid-simple-responsive-3',
  'vertical-grid-pattern-responsive-4',
  'horizontal-grid-simple-responsive-lean',
  'vertical-grid-pattern-responsive-5',
  'vertical-grid-pattern-responsive-8',
  'vertical-grid-pattern-responsive-1',
  'vertical-grid-pattern-responsive-7',
  'vertical-grid-simple-responsive-4',
  'vertical-flex-pattern-3',
  'vertical-grid-list-2',
  'vertical-flex-pattern-2',
  'vertical-grid-simple-responsive-8',
]
```

## Ref Elements
Source: `FastGallery.tsx`

```ts
export const REF_ELEMENTS = [
  'gallery',
  'nextButton',
  'prevButton',
  'expandedGallery',
]
```

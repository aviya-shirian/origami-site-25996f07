# Component LLM Context

## Props
Source: `definition.ts`

```ts
props: {
    loopVideos: prop.boolean(),
    loopItems: prop.boolean(),
    autoSlide: prop.boolean(),
    autoSlideIntervalTime: prop.number({ min: 1 }),
    showPlayButton: prop.boolean(),
    items: prop.object<Array<{ linkTitle?: string; description?: string; id?: string; alt?: string; link?: { href?: string; target?: '_self' | '_blank'; rel?: string; pageRole?: string }; media?: { mediaType?: 'IMAGE' | 'VIDEO'; imageOptions?: { imageData?: { uri?: string; url: string; name?: string; height?: number; width?: number; animated?: boolean; crop?: { x: number; y: number; width: number; height: number }; quality?: number; alt?: string }; imageInfo?: { url?: string; altText?: string; height?: number; id?: string; filename?: string; width?: number }; focalPoint?: { x?: number; y?: number } }; videoOptions?: { videoData?: { uri: string; name?: string; sources: Array<{ quality: '1080p' | '720p' | '480p' | '360p'; width: number; height: number; types: Array<{ format: 'mp4' | 'mp4-luminance'; uri: string; url: string }> }>; adaptiveSources: Array<{ format: 'hls' | 'dash'; uri: string; url: string }>; hasAudio: boolean; fps: number; poster?: { uri?: string; url: string; name?: string; height?: number; width?: number; animated?: boolean; crop?: { x: number; y: number; width: number; height: number }; quality?: number; alt?: string } }; focalPoint?: { x?: number; y?: number } } }; title?: string }>>(),
    downloadProtection: prop.boolean(),
    itemClickAction: prop.enum('ACTION', 'LINK', 'NOTHING'),
    videoPlayTrigger: prop.enum('HOVER', 'AUTOPLAY'),
    boundItems: prop.object<Array<unknown>>(),
    pauseAutoSlideOnHover: prop.boolean(),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "./baseComp/index.css";

@import "./presets/top-bottom.css";
@import "./presets/thumbnails-gallery-side-by-side.css";
@import "./presets/bottom-top-4.css";
@import "./presets/left.css";
@import "./presets/centered.css";
@import "./presets/flex-4.css";
@import "./presets/flex-2.css";
@import "./presets/side-by-side-5.css";
@import "./presets/bottom-top-3.css";
@import "./presets/flex-3.css";
@import "./presets/side-by-side-4.css";
@import "./presets/centered-2.css";

@import "./custom-enums.css";

/* Allowed CSS overrides for @wix/origami/ThumbnailsGalleryContainer; these are not computed styles. */
/*

.thumbnails-gallery {
  border-bottom-style: initial;
  border-bottom-width: 0px;
  border-bottom-color: #000000;
  border-start-end-radius: 0px;
  box-shadow: ;
  border-inline-end-width: 0px;
  border-top-width: 0px;
  border-inline-start-color: #000000;
  border-start-start-radius: 0px;
  border-inline-start-width: 0px;
  border-top-style: initial;
  border-end-start-radius: 0px;
  border-inline-start-style: initial;
  border-inline-end-style: initial;
  border-inline-end-color: #000000;
  border-top-color: #000000;
  border-end-end-radius: 0px;
  --thumbnails-nav-buttons-row: initial;
  --thumbnails-counter-margin-top: initial;
  --row-gap: 40px;
  --thumbnails-nav-buttons-col: initial;
  --thumbnails-gallery-padding-right: initial;
  --thumbnails-gallery-padding-top: initial;
  --thumbnails-nav-row: initial;
  --main-animation: crossfade;
  --thumbnails-gallery-col: initial;
  --thumbnails-text-child-margin-top-multiplier: initial;
  --thumbnails-nav-buttons-margin-top: initial;
  --thumbnails-gallery-padding-left: initial;
  --thumbnails-columns: initial;
  --thumbnails-text-max-height: initial;
  --thumbnails-counter-row: initial;
  --thumbnails-text-child-margin-left: initial;
  --thumbnails-text-child-margin-right: initial;
  --thumbnails-nav-strip-order: initial;
  --thumbnails-nav-buttons-margin-left: initial;
  --thumbnails-counter-col: initial;
  --gallery-background: #ffffff;
  --thumbnails-text-row-gap-multiplier: initial;
  --gallery-glass: none;
  --thumbnails-rows: initial;
  --thumbnails-counter-margin-right: initial;
  --flip-direction: vertical;
  --thumbnails-nav-group-display: initial;
  --thumbnails-text-direction: initial;
  --thumbnails-text-row: initial;
  --thumbnails-nav-col: initial;
  --thumbnails-counter-justify-self: initial;
  --thumbnails-gallery-row: initial;
  --thumbnails-counter-margin-left: initial;
  --thumbnails-text-col: initial;
  --reveal-direction: vertical;
  --image-object-fit: contain;
  --image-object-position: center;
  --column-gap: 40px;
  --thumbnails-nav-strip-col: initial;
  --thumbnails-nav-strip-row: initial;
  --thumbnails-text-child-margin-bottom-multiplier: initial;
  --thumbnails-gallery-padding-bottom: initial;
  --gallery-bg-opacity: 1;
  --thumbnails-nav-group-wrap: initial;
  --thumbnails-nav-buttons-justify-self: initial;
  --thumbnails-counter-margin-bottom: initial;
}

.thumbnails-nav-buttons {
  display: grid;
}

.thumbnails-description {
  text-decoration-line: initial;
  border-bottom-style: solid;
  text-transform: none;
  padding-inline-end: 0px;
  border-bottom-width: 0px;
  border-bottom-color: #000000;
  border-start-end-radius: 0px;
  box-shadow: none;
  padding-inline-start: 0px;
  border-inline-end-width: 0px;
  text-shadow: 0px 0px transparent;
  border-top-width: 0px;
  color: #575757;
  text-align: center;
  border-inline-start-color: #000000;
  padding-top: 0px;
  border-start-start-radius: 0px;
  font: 400 15px wix-madefor-text-v2;
  border-inline-start-width: 0px;
  letter-spacing: 0em;
  border-top-style: solid;
  line-height: 1.45em;
  padding-bottom: 0px;
  border-end-start-radius: 0px;
  border-inline-start-style: solid;
  font-size: initial;
  border-inline-end-style: solid;
  border-inline-end-color: #000000;
  border-top-color: #000000;
  border-end-end-radius: 0px;
  display: block;
  --description-glass: none;
  --description-background: transparent;
  --description-bg-opacity: 1;
}

.thumbnails-main-gallery {
  border-bottom-style: initial;
  border-bottom-width: 0px;
  border-bottom-color: #000000;
  border-start-end-radius: 0px;
  box-shadow: ;
  border-inline-end-width: 0px;
  border-top-width: 0px;
  border-inline-start-color: #000000;
  border-start-start-radius: 0px;
  border-inline-start-width: 0px;
  border-top-style: initial;
  border-end-start-radius: 0px;
  border-inline-start-style: initial;
  border-inline-end-style: initial;
  border-inline-end-color: #000000;
  border-top-color: #000000;
  border-end-end-radius: 0px;
  --main-image-padding-top: 0px;
  --main-image-padding-left: 0px;
  --image-container-bg-opacity: 1;
  --image-container-glass: none;
  --main-image-padding-bottom: 0px;
  --image-container-background: transparent;
  --main-image-padding-right: 0px;
}

.thumbnails-counter {
  text-decoration-line: initial;
  border-bottom-style: solid;
  text-transform: none;
  padding-inline-end: 0px;
  border-bottom-width: 0px;
  border-bottom-color: #000000;
  border-start-end-radius: 0px;
  box-shadow: none;
  padding-inline-start: 0px;
  border-inline-end-width: 0px;
  text-shadow: 0px 0px transparent;
  border-top-width: 0px;
  color: #1a1a1a;
  text-align: center;
  border-inline-start-color: #000000;
  padding-top: 0px;
  border-start-start-radius: 0px;
  font: 600 24px wix-madefor-text-v2;
  border-inline-start-width: 0px;
  letter-spacing: 0em;
  border-top-style: solid;
  line-height: 1.25em;
  padding-bottom: 0px;
  border-end-start-radius: 0px;
  border-inline-start-style: solid;
  font-size: initial;
  border-inline-end-style: solid;
  border-inline-end-color: #000000;
  border-top-color: #000000;
  border-end-end-radius: 0px;
  display: block;
  --counter-glass: none;
  --counter-format: slash-pad;
  --counter-background: transparent;
  --counter-bg-opacity: 1;
}

.thumbnails-title {
  text-decoration-line: initial;
  border-bottom-style: solid;
  text-transform: none;
  padding-inline-end: 0px;
  border-bottom-width: 0px;
  border-bottom-color: #000000;
  border-start-end-radius: 0px;
  box-shadow: none;
  padding-inline-start: 0px;
  border-inline-end-width: 0px;
  text-shadow: 0px 0px transparent;
  border-top-width: 0px;
  color: #1a1a1a;
  text-align: center;
  border-inline-start-color: #000000;
  padding-top: 0px;
  border-start-start-radius: 0px;
  font: 600 24px wix-madefor-text-v2;
  border-inline-start-width: 0px;
  letter-spacing: 0em;
  border-top-style: solid;
  line-height: 1.25em;
  padding-bottom: 0px;
  border-end-start-radius: 0px;
  border-inline-start-style: solid;
  font-size: initial;
  border-inline-end-style: solid;
  border-inline-end-color: #000000;
  border-top-color: #000000;
  border-end-end-radius: 0px;
  display: block;
  --title-glass: none;
  --title-background: transparent;
  --title-bg-opacity: 1;
}

*/
```

## Presets
Source: `ThumbnailsGalleryContainer.tsx`

```ts
export const PRESET_NAMES = [
  'top-bottom',
  'thumbnails-gallery-side-by-side',
  'bottom-top-4',
  'left',
  'centered',
  'flex-4',
  'flex-2',
  'side-by-side-5',
  'bottom-top-3',
  'flex-3',
  'side-by-side-4',
  'centered-2',
]
```

## Ref Elements
Source: `ThumbnailsGalleryContainer.tsx`

```ts
export const REF_ELEMENTS = [
  'expandedGallery',
  'linkButton',
  'navThumbnails',
]
```

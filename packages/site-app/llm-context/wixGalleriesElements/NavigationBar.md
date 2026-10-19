# Component LLM Context

## Props
Source: `definition.ts`

```ts
props: {
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "./baseComp/index.css";

@import "./presets/bar-03.css";
@import "./presets/thumbs-overlay-outline-01.css";
@import "./presets/thumbs-overlay-outline-04.css";
@import "./presets/thumbs-bar-03.css";
@import "./presets/thumbs-bar-02.css";
@import "./presets/thumbs-overlay-outline-02.css";
@import "./presets/dots-01.css";
@import "./presets/thumbs-overlay-outline-05.css";
@import "./presets/dots-outline-01.css";
@import "./presets/thumbs-bar-01.css";
@import "./presets/thumbs-overlay-outline-03.css";
@import "./presets/thumbs-overlay-outline-06.css";
@import "./presets/thumbs-outline-01.css";
@import "./presets/dots-outline-02.css";
@import "./presets/thumbs-shape-01.css";
@import "./presets/thumbs-bar-05.css";
@import "./presets/thumbs-outline-shape-01.css";
@import "./presets/thumbs-bar-04.css";
@import "./presets/bar-02.css";

@import "./custom-enums.css";

/* Allowed CSS overrides for @wix/origami/NavigationBar; these are not computed styles. */
/*

.nav-bar {
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
  display: flex;
  --nav-indicator-length-small: 8;
  --divider-length: 100;
  --nav-bd-outer-color: #000000;
  --nav-bar-padding-right: initial;
  --thumbnail-image-size-large: 112;
  --nav-indicator-length-large: 8;
  --nav-bd-outer: 0px;
  --media-aspect-ratio: 0;
  --nav-bd-end-style: solid;
  --nav-bar-padding-bottom: initial;
  --nav-bd-start-style: solid;
  --nav-bd-outer-style: solid;
  --nav-bar-bg-opacity: 1;
  --nav-bd-inner-color: #000000;
  --nav-indicator-mode: small;
  --nav-indicator-length-medium: 8;
  --nav-bd-start: 0px;
  --nav-bd-inner-style: solid;
  --nav-bar-glass: none;
  --nav-indicator-thickness-medium: 8;
  --nav-bd-end: 0px;
  --nav-bd-inner: 0px;
  --nav-bar-background: #ffffff;
  --nav-bd-logical: 0;
  --nav-bar-padding-left: initial;
  --thumbnail-image-size-small: 40;
  --divider-weight: 0;
  --nav-indicator-thickness-large: 8;
  --nav-indicator-thickness-small: 8;
  --gap: 40px;
  --nav-bar-padding-top: initial;
  --thumbnail-image-axis-intent: thickness;
  --thumbnail-image-size-medium: 56;
  --thumbnail-image-mode: small;
  --nav-bd-end-color: #000000;
  --nav-bar-alignment: center;
  --nav-bd-start-color: #000000;
}

.thumbnails-nav-gallery .container {
  --items-align-mode: center;
}

.thumbnails-nav-gallery .nav-indicator-divider {
  --divider-color: rgba(0, 0, 0, 1);
  --divider-opacity: 1;
}

.thumbnails-nav-gallery .nav-indicator {
  border-bottom-style: solid;
  padding-inline-end: 0px;
  border-bottom-width: 0px;
  border-bottom-color: #FFFFFF;
  border-start-end-radius: 999px;
  box-shadow: none;
  padding-inline-start: 0px;
  border-inline-end-width: 0px;
  border-top-width: 0px;
  border-inline-start-color: #FFFFFF;
  padding-top: 0px;
  border-start-start-radius: 999px;
  border-inline-start-width: 0px;
  border-top-style: solid;
  padding-bottom: 0px;
  border-end-start-radius: 999px;
  border-inline-start-style: solid;
  border-inline-end-style: solid;
  border-inline-end-color: #FFFFFF;
  border-top-color: #FFFFFF;
  border-end-end-radius: 999px;
  display: block;
  --nav-indicator-bg: rgba(255, 255, 255, 1);
  --nav-indicator-bg-opacity: 1;
}

.thumbnails-nav-gallery .media {
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-bottom-color: #000000;
  border-start-end-radius: 0px;
  box-shadow: none;
  border-inline-end-width: 0px;
  border-top-width: 0px;
  border-inline-start-color: #000000;
  border-start-start-radius: 0px;
  border-inline-start-width: 0px;
  border-top-style: solid;
  border-end-start-radius: 0px;
  border-inline-start-style: solid;
  border-inline-end-style: solid;
  border-inline-end-color: #000000;
  border-top-color: #000000;
  border-end-end-radius: 0px;
  display: block;
  --thumbnail-image-padding-left: 0px;
  --thumbnail-image-padding-bottom: 0px;
  --thumbnail-image-bg-opacity: 1;
  --thumbnail-image-opacity: 1;
  --thumbnail-image-background: transparent;
  --thumbnail-filter: none;
  --thumbnail-image-padding-right: 0px;
  --thumbnail-image-padding-top: 0px;
}

.thumbnails-nav-gallery .item {
  --scale-ref: 1280;
  --media-scale-ref: 1280;
  --nav-indicator-side: outer;
}

*/
```

## Presets
Source: `NavigationBar.tsx`

```ts
export const PRESET_NAMES = [
  'bar-03',
  'thumbs-overlay-outline-01',
  'thumbs-overlay-outline-04',
  'thumbs-bar-03',
  'thumbs-bar-02',
  'thumbs-overlay-outline-02',
  'dots-01',
  'thumbs-overlay-outline-05',
  'dots-outline-01',
  'thumbs-bar-01',
  'thumbs-overlay-outline-03',
  'thumbs-overlay-outline-06',
  'thumbs-outline-01',
  'dots-outline-02',
  'thumbs-shape-01',
  'thumbs-bar-05',
  'thumbs-outline-shape-01',
  'thumbs-bar-04',
  'bar-02',
]
```

## Ref Elements
Source: `NavigationBar.tsx`

```ts
export const REF_ELEMENTS = [
]
```

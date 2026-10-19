# Component LLM Context

## Props
Source: `definition.ts`

```ts
props: {
    itemClickAction: prop.enum('ACTION', 'LINK', 'NOTHING'),
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
@import "./presets/dots-outline-01.css";
@import "./presets/thumbs-bar-01.css";
@import "./presets/bar-outline-01.css";
@import "./presets/thumbs-overlay-outline-03.css";
@import "./presets/thumbs-outline-01.css";
@import "./presets/dots-outline-02.css";
@import "./presets/bar-01.css";
@import "./presets/thumbs-shape-01.css";
@import "./presets/thumbs-outline-shape-01.css";
@import "./presets/thumbs-bar-04.css";
@import "./presets/bar-02.css";

/* Allowed CSS overrides for @wix/origami/MediaNavBar; these are not computed styles. */
/*

.nav-bar {
  border-bottom-style: initial;
  border-bottom-width: 0px;
  border-top-right-radius: 0;
  border-bottom-color: #000000;
  border-right-color: #000000;
  box-shadow: ;
  border-left-color: #000000;
  border-left-width: 0px;
  border-top-width: 0px;
  border-right-style: initial;
  border-left-style: initial;
  border-bottom-left-radius: 0;
  border-right-width: 0px;
  border-top-style: initial;
  border-top-color: #000000;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
  display: flex;
  --divider-length: 100;
  --shape-length-medium: 8;
  --nav-bd-outer-color: #000000;
  --nav-bar-padding-right: initial;
  --thumbnail-image-size-large: 112;
  --nav-bd-outer: 0px;
  --media-aspect-ratio: 0;
  --nav-bd-end-style: solid;
  --nav-bar-padding-bottom: initial;
  --nav-bd-start-style: solid;
  --shape-thickness-large: 8;
  --nav-bd-outer-style: solid;
  --nav-bar-bg-opacity: 1;
  --nav-bd-inner-color: #000000;
  --nav-bd-start: 0px;
  --shape-length-large: 8;
  --nav-bd-inner-style: solid;
  --shape-length-small: 8;
  --nav-bd-end: 0px;
  --nav-bd-inner: 0px;
  --nav-bar-background: #ffffff;
  --nav-bd-logical: 0;
  --nav-bar-padding-left: initial;
  --thumbnail-image-size-small: 40;
  --divider-weight: 0;
  --shape-thickness-small: 8;
  --gap: 40px;
  --nav-bar-padding-top: initial;
  --thumbnail-image-axis-intent: thickness;
  --thumbnail-image-size-medium: 56;
  --thumbnail-image-mode: small;
  --shape-thickness-medium: 8;
  --nav-bd-end-color: #000000;
  --shape-mode: small;
  --nav-bar-alignment: center;
  --nav-bd-start-color: #000000;
}

.thumbnails-nav-gallery .container {
  --items-align-mode: center;
}

.thumbnails-nav-gallery .shape-divider {
  --divider-color: rgba(0, 0, 0, 1);
  --divider-opacity: 1;
}

.thumbnails-nav-gallery .media {
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-top-right-radius: 0px;
  border-bottom-color: #000000;
  border-right-color: #000000;
  box-shadow: none;
  border-left-color: #000000;
  border-left-width: 0px;
  border-top-width: 0px;
  border-right-style: solid;
  border-left-style: solid;
  border-bottom-left-radius: 0px;
  border-right-width: 0px;
  border-top-style: solid;
  border-top-color: #000000;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
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

.thumbnails-nav-gallery .shape {
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-top-right-radius: 999px;
  border-bottom-color: #FFFFFF;
  border-right-color: #FFFFFF;
  box-shadow: none;
  border-left-color: #FFFFFF;
  border-left-width: 0px;
  padding-right: 0px;
  border-top-width: 0px;
  border-right-style: solid;
  border-left-style: solid;
  padding-top: 0px;
  border-bottom-left-radius: 999px;
  border-right-width: 0px;
  border-top-style: solid;
  padding-bottom: 0px;
  border-top-color: #FFFFFF;
  border-top-left-radius: 999px;
  border-bottom-right-radius: 999px;
  padding-left: 0px;
  display: block;
  --shape-bg: rgba(255, 255, 255, 1);
  --shape-bg-opacity: 1;
}

.thumbnails-nav-gallery .item {
  --scale-ref: 1280;
  --shape-side: outer;
  --media-scale-ref: 1280;
}

*/
```

## Presets
Source: `MediaNavBar.tsx`

```ts
export const PRESET_NAMES = [
  'bar-03',
  'thumbs-overlay-outline-01',
  'thumbs-overlay-outline-04',
  'thumbs-bar-03',
  'thumbs-bar-02',
  'thumbs-overlay-outline-02',
  'dots-01',
  'dots-outline-01',
  'thumbs-bar-01',
  'bar-outline-01',
  'thumbs-overlay-outline-03',
  'thumbs-outline-01',
  'dots-outline-02',
  'bar-01',
  'thumbs-shape-01',
  'thumbs-outline-shape-01',
  'thumbs-bar-04',
  'bar-02',
]
```

## Ref Element Selectors
Source: `MediaNavBar.tsx`

```ts
export const REF_ELEMENT_SELECTORS = {
}
```

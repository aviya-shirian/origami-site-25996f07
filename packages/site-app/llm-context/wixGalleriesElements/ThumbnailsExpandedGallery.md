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

@import "./presets/expand-mode-classic.css";
@import "./presets/expanded-gallery-minimal.css";

@import "./custom-enums.css";

/* Allowed CSS overrides for @wix/origami/ThumbnailsExpandedGallery; these are not computed styles. */
/*

.expanded-gallery {
  border-bottom-style: initial;
  border-bottom-width: 0px;
  border-top-right-radius: 0;
  border-bottom-color: #000000;
  border-right-color: #000000;
  box-shadow: ;
  background: #ffffff;
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
  --row-gap: 20px;
  --navs-col: initial;
  --expanded-gallery-padding-left: 40px;
  --counter-row: initial;
  --text-col: initial;
  --navs-row: initial;
  --counter-col: initial;
  --expanded-gallery-padding-bottom: 40px;
  --expand-rows: initial;
  --text-row: initial;
  --gallery-row: initial;
  --close-col: initial;
  --close-row: initial;
  --gallery-col: initial;
  --column-gap: 40px;
  --expanded-gallery-padding-right: 40px;
  --expand-columns: initial;
  --expanded-gallery-padding-top: 40px;
  --text-max-height: initial;
}

.expand-description {
  text-decoration-line: initial;
  background-color: transparent;
  text-transform: none;
  text-shadow: 0px 0px transparent;
  padding-right: 0px;
  color: #575757;
  text-align: center;
  padding-top: 0px;
  font: 400 15px wix-madefor-text-v2;
  letter-spacing: 0em;
  line-height: 1.45em;
  padding-bottom: 0px;
  font-size: 15px;
  padding-left: 0px;
  display: block;
}

.expand-link {
  text-decoration-line: underline;
  background-color: transparent;
  text-transform: none;
  text-shadow: 0px 0px transparent;
  padding-right: 0px;
  color: #116dff;
  text-align: center;
  padding-top: 0px;
  font: 500 15px wix-madefor-text-v2;
  letter-spacing: 0em;
  line-height: 1.45em;
  padding-bottom: 0px;
  font-size: 15px;
  padding-left: 0px;
  display: block;
}

.expand-slide-counter {
  text-decoration-line: initial;
  background-color: transparent;
  text-transform: none;
  text-shadow: 0px 0px transparent;
  padding-right: 0px;
  color: #1a1a1a;
  text-align: center;
  padding-top: 0px;
  font: 600 24px wix-madefor-text-v2;
  letter-spacing: 0em;
  line-height: 1.25em;
  padding-bottom: 0px;
  font-size: 24px;
  padding-left: 0px;
  display: block;
}

.expand-title {
  text-decoration-line: initial;
  background-color: transparent;
  text-transform: none;
  text-shadow: 0px 0px transparent;
  padding-right: 0px;
  color: #1a1a1a;
  text-align: center;
  padding-top: 0px;
  font: 600 24px wix-madefor-text-v2;
  letter-spacing: 0em;
  line-height: 1.25em;
  padding-bottom: 0px;
  font-size: 24px;
  padding-left: 0px;
  display: block;
}

.expanded-gallery-inner-gallery {
  border-bottom-style: initial;
  border-bottom-width: 0px;
  border-top-right-radius: 0px;
  border-bottom-color: #000000;
  border-right-color: #000000;
  box-shadow: ;
  background: transparent;
  border-left-color: #000000;
  border-left-width: 0px;
  border-top-width: 0px;
  border-right-style: initial;
  border-left-style: initial;
  border-bottom-left-radius: 0px;
  border-right-width: 0px;
  border-top-style: initial;
  border-top-color: #000000;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
  --gallery-container-padding-top: 0px;
  --gallery-container-padding-left: 0px;
  --gallery-container-padding-right: 0px;
  --gallery-container-padding-bottom: 0px;
}

*/
```

## Presets
Source: `ThumbnailsExpandedGallery.tsx`

```ts
export const PRESET_NAMES = [
  'expand-mode-classic',
  'expanded-gallery-minimal',
]
```

## Ref Elements
Source: `ThumbnailsExpandedGallery.tsx`

```ts
export const REF_ELEMENTS = [
  'nextButton',
  'closeButton',
  'prevButton',
]
```

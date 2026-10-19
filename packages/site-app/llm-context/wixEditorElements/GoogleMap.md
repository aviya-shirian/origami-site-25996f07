# Component LLM Context

## About

- Name: Google Maps
- Archetype: Map
- Purpose: Embeds an interactive Google Map, allowing visitors to view locations

## Props
Source: `definition.ts`

```ts
props: {
    locations: prop.object<Array<{ linkTitle?: string; locationLinkAttributes?: { href?: string; target?: '_self' | '_blank'; rel?: string; pageRole?: string }; latitude?: number; description?: string; longitude?: number; address?: string; title?: string }>>(),
    showZoom: prop.boolean(),
    onMouseIn: prop.event('click'),
    defaultLocation: prop.number(),
    a11y: prop.object<unknown>(),
    mapInteractive: prop.boolean(),
    showDirectionsLink: prop.boolean(),
    onMouseOut: prop.event('click'),
    mapStyleKey: prop.enum('CLASSIC', 'SNOWWHITE', 'GRAYSCALE', 'SATELLITE'),
    showStreetView: prop.boolean(),
    showMapType: prop.boolean(),
    zoom: prop.number({ min: 0 }),
    pinIcon: prop.vectorArt(),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/GoogleMap/css";

/* Allowed CSS overrides for @wix/origami/GoogleMap; these are not computed styles. */
/*

.google-map {
}

*/
```

## Presets
Source: `GoogleMap.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `GoogleMap.tsx`

```ts
export const REF_ELEMENTS = [
]
```

# Component LLM Context

## About

- Name: Test Card
- Archetype: Text
- Purpose: Test for Storybook

## Props
Source: `definition.ts`

```ts
props: {
    menuItems: prop.object<unknown>(),
    onMouseIn: prop.event('click'),
    onBlur: prop.event('focus'),
    count: prop.number({ min: 0 }),
    cardVideo: prop.object<{ uri: string; name?: string; sources: Array<{ quality: '1080p' | '720p' | '480p' | '360p'; width: number; height: number; types: Array<{ format: 'mp4' | 'mp4-luminance'; uri: string; url: string }> }>; adaptiveSources: Array<{ format: 'hls' | 'dash'; uri: string; url: string }>; hasAudio: boolean; fps: number; poster?: { uri?: string; url: string; name?: string; height?: number; width?: number; animated?: boolean; crop?: { x: number; y: number; width: number; height: number }; quality?: number; alt?: string } }>(),
    isError: prop.boolean(),
    onClick: prop.event('click'),
    externalUrl: prop.object<string>(),
    setCount: prop.event<number>('change'),
    cardImage: prop.object<{ uri?: string; url: string; name?: string; height?: number; width?: number; animated?: boolean; crop?: { x: number; y: number; width: number; height: number }; quality?: number; alt?: string }>(),
    a11y: prop.object<unknown>(),
    icon: prop.vectorArt(),
    label: prop.text({ maxLength: 500 }),
    items: prop.object<Array<{ name?: string; description?: string }>>(),
    direction: prop.direction(),
    variant: prop.enum('primary', 'secondary', 'tertiary'),
    getCountAsText: prop.event('change'),
    onMouseOut: prop.event('click'),
    onFocus: prop.event('focus'),
    isEnabled: prop.boolean(),
    onDblClick: prop.event('click'),
    buttonLink: prop.link(),
    activeItem: prop.number(),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/TestComp/css";

@import "./custom-enums.css";

/* Allowed CSS overrides for @wix/origami/TestComp; these are not computed styles. */
/*

.test-comp-card {
  border: initial;
  box-shadow: initial;
  background: initial;
  border-radius: initial;
  padding: initial;
  --row-gap: initial;
  --number: initial;
  --fill-opacity: initial;
  --border: initial;
  --padding-top: initial;
  --border-inline-start: initial;
  --background: initial;
  --angle: initial;
  --stroke: initial;
  --border-width: initial;
  --border-radius: initial;
  --flex-direction: initial;
  --custom-option: option1;
  --height: initial;
  --padding-bottom: initial;
  --stroke-opacity: initial;
  --text-decoration-line: initial;
  --color: initial;
  --font: initial;
  --text-transform: initial;
  --padding-inline-start: initial;
  --background-color: initial;
  --border-color: initial;
  --fill: initial;
  --justify-content: initial;
  --border-bottom: initial;
  --line-height: initial;
  --border-top: initial;
  --column-gap: initial;
  --length: initial;
  --opacity: initial;
  --padding-inline-end: initial;
  --padding: initial;
  --box-shadow: initial;
  --text-align: initial;
  --margin-bottom: initial;
  --letter-spacing: initial;
  --border-style: initial;
  --border-inline-end: initial;
  --stroke-width: initial;
  --text-shadow: initial;
}

.test-comp-card.test-comp-card--hover {
}

.test-comp-card.test-comp-card--featured {
}

.test-comp-card.test-comp-card--focus {
}

.test-comp-card.test-comp-card--error {
}

.test-comp-card.test-comp-card--disabled {
}

.card-image {
  overflow: initial;
  border-radius: initial;
  margin-bottom: initial;
}

.card-description {
  font: initial;
  color: initial;
}

.card-error-text {
  font: initial;
  color: initial;
}

.card-title {
  font: initial;
  color: initial;
  margin-bottom: initial;
}

*/
```

## Presets
Source: `TestComp.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `TestComp.tsx`

```ts
export const REF_ELEMENTS = [
  'dummyAnimatedIcon',
]
```

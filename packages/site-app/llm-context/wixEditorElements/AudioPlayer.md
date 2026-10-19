# Component LLM Context

## About

- Name: Audio Player
- Archetype: Audio
- Purpose: A component that plays a single audio file with customizable playback controls, allowing users to play, pause, adjust volume, and seek through audio content

## Props
Source: `definition.ts`

```ts
props: {
    onMouseIn: prop.event('click'),
    loop: prop.boolean(),
    onPause: prop.event('change'),
    a11y: prop.object<unknown>(),
    audio: prop.object<unknown>(),
    direction: prop.direction(),
    onTimeupdate: prop.event('change'),
    displayMode: prop.enum('fill', 'fit', 'fitWidth'),
    coverImage: prop.object<{ uri?: string; url: string; name?: string; height?: number; width?: number; animated?: boolean; crop?: { x: number; y: number; width: number; height: number }; quality?: number; alt?: string }>(),
    onPlay: prop.event('change'),
    onMouseOut: prop.event('click'),
    onEnded: prop.event('change'),
    volume: prop.number({ min: 0 }),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/AudioPlayer/css";

/* Allowed CSS overrides for @wix/origami/AudioPlayer; these are not computed styles. */
/*

.audioPlayer {
  padding-inline-end: initial;
  border-start-end-radius: initial;
  box-shadow: initial;
  background: initial;
  padding-inline-start: initial;
  border-bottom: 0px none rgba(0, 0, 0, 1);
  color: initial;
  border-inline-start: 0px none rgba(0, 0, 0, 1);
  border-top: 0px none rgba(0, 0, 0, 1);
  border-inline-end: 0px none rgba(0, 0, 0, 1);
  padding-top: initial;
  border-start-start-radius: initial;
  font: initial;
  padding-bottom: initial;
  border-end-start-radius: initial;
  border-end-end-radius: initial;
  --audio-title-gap: 2px;
  --vertical-spacing: 8px;
  --content-horizontal-alignment: initial;
}

.title {
  display: block;
}

.progressBar {
  display: block;
}

.artistName {
  display: block;
}

.timeDisplay {
  display: block;
}

.volumeControls {
  display: flex;
}

.controls {
  --volume-control-color: currentColor;
  --time-display-color: currentColor;
  --progress-fill-color: currentColor;
  --play-icon-color: currentColor;
  --play-icon-size: 24px;
}

.controls.audio-player__controls--hover {
}

*/
```

## Presets
Source: `AudioPlayer.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `AudioPlayer.tsx`

```ts
export const REF_ELEMENTS = [
  'coverArt',
]
```

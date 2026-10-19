# Component LLM Context

## About

- Name: Share Buttons
- Archetype: Social
- Purpose: Increase your reach by letting visitors share your site with ease across channels.

## Props
Source: `definition.ts`

```ts
props: {
    onMouseIn: prop.event('click'),
    a11y: prop.object<unknown>(),
    direction: prop.direction(),
    buttons: prop.object<Array<{ unavailable?: boolean; description?: string; label?: string; isHidden?: boolean; platformId?: string; illustration?: { uri: string; viewBox: string; contentBox: string; colors: Record<string, string>; contentType: 'shape' | 'color' | 'tint' | 'ugc' | 'textpath'; svgContent: string }; disabled?: boolean; value?: string; isDefault?: boolean }>>(),
    onMouseOut: prop.event('click'),
    pageToShare: prop.enum('home', 'current'),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/ShareButtons/css";

@import "./presets/vertical.css";
@import "./presets/horizontal.css";

@import "./custom-enums.css";

/* Allowed CSS overrides for @wix/origami/ShareButtons; these are not computed styles. */
/*

.share-buttons {
  --align: center;
  --button-width: fit-content;
  --rows-spacing: 10px;
  --buttons-spacing: 10px;
}

.icon {
  display: inline-block;
  --icon-size: initial;
  --icon-rotation: initial;
}

.icon.share-buttons__icon--hover {
}

.label {
  text-decoration-line: initial;
  text-transform: initial;
  color: initial;
  font: initial;
  letter-spacing: 0em;
  display: inline-block;
}

.label.share-buttons__label--hover {
  text-decoration-line: underline;
}

.button {
  box-shadow: none;
  background: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 1);
  border-radius: 0px;
  border-inline-start: 1px solid rgba(0, 0, 0, 1);
  border-top: 1px solid rgba(0, 0, 0, 1);
  border-inline-end: 1px solid rgba(0, 0, 0, 1);
  padding: 8px;
  --icon-position: row;
  --icon-text-spacing: 10px;
  --horizontal-alignment: start;
}

.button.share-buttons__button--hover {
}

*/
```

## Presets
Source: `ShareButtons.tsx`

```ts
export const PRESET_NAMES = [
  'vertical',
  'horizontal',
]
```

## Ref Elements
Source: `ShareButtons.tsx`

```ts
export const REF_ELEMENTS = [
]
```

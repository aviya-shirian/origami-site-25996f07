# Component LLM Context

## About

- Name: Social Bar
- Archetype: Social
- Purpose: Grow your online presence and drive social engagement across platforms with social links.

## Props
Source: `definition.ts`

```ts
props: {
    onMouseIn: prop.event('click'),
    a11y: prop.object<unknown>(),
    items: prop.object<Array<{ a11y?: unknown; icon?: { uri: string; viewBox: string; contentBox: string; colors: Record<string, string>; contentType: 'shape' | 'color' | 'tint' | 'ugc' | 'textpath'; svgContent: string }; link?: { href?: string; target?: '_self' | '_blank'; rel?: string; pageRole?: string } }>>(),
    direction: prop.direction(),
    onMouseOut: prop.event('click'),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/LinkBar/css";

@import "./presets/vertical.css";
@import "./presets/horizontal.css";

/* Allowed CSS overrides for @wix/origami/SocialBar; these are not computed styles. */
/*

.link-bar {
  --row-gap: 0px;
  --item-size: 30px;
  --column-gap: 0px;
  --justify-content: center;
}

.link-bar.link-bar--hover {
}

*/
```

## Presets
Source: `SocialBar.tsx`

```ts
export const PRESET_NAMES = [
  'vertical',
  'horizontal',
]
```

## Ref Elements
Source: `SocialBar.tsx`

```ts
export const REF_ELEMENTS = [
]
```

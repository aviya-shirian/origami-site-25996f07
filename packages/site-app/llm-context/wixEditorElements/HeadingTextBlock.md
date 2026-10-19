# Component LLM Context

## About

- Name: Heading Text Block
- Archetype: Text
- Purpose: Semantic heading tag wrapping heading, title, subtitle, and caption in one tag

## Props
Source: `definition.ts`

```ts
props: {
    heading: prop.text(),
    subtitle: prop.text(),
    headingTag: prop.enum('h1', 'h2', 'h3', 'h4', 'h5', 'h6'),
    direction: prop.direction(),
    caption: prop.text(),
    title: prop.text(),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/HeadingTextBlock/css";

@import "./presets/vertical.css";
@import "./presets/horizontal.css";

/* Allowed CSS overrides for @wix/origami/HeadingTextBlock; these are not computed styles. */
/*

.heading-text-block {
  --parts-row-gap: 12px;
  --parts-column-gap: 12px;
}

.heading-text-block-title {
  text-decoration-line: initial;
  text-transform: initial;
  text-shadow: initial;
  color: initial;
  text-align: initial;
  font: initial;
  letter-spacing: initial;
  line-height: initial;
  display: initial;
}

.heading-text-block-caption {
  text-decoration-line: initial;
  text-transform: initial;
  text-shadow: initial;
  color: initial;
  text-align: initial;
  font: initial;
  letter-spacing: initial;
  line-height: initial;
  display: initial;
}

.heading-text-block-heading {
  text-decoration-line: initial;
  text-transform: initial;
  text-shadow: initial;
  color: initial;
  text-align: initial;
  font: initial;
  letter-spacing: initial;
  line-height: initial;
  display: initial;
}

.heading-text-block-subtitle {
  text-decoration-line: initial;
  text-transform: initial;
  text-shadow: initial;
  color: initial;
  text-align: initial;
  font: initial;
  letter-spacing: initial;
  line-height: initial;
  display: initial;
}

*/
```

## Presets
Source: `HeadingTextBlock.tsx`

```ts
export const PRESET_NAMES = [
  'vertical',
  'horizontal',
]
```

## Ref Elements
Source: `HeadingTextBlock.tsx`

```ts
export const REF_ELEMENTS = [
]
```

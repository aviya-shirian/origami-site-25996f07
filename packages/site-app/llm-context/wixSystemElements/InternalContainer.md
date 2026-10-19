# Component LLM Context

## About

- Name: Container
- Archetype: Container
- Purpose: Internal system container for wrapping and structuring content

## Props
Source: `definition.ts`

```ts
props: {
    dummyContainer: prop.object<ReactElement>(),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "./baseComp/index.css";

/* Allowed CSS overrides for @wix/origami/InternalContainer; these are not computed styles. */
/*

.container {
  --borderBottomStyle: solid;
  --backdropFilter: initial;
  --borderBottomWidth: 0px;
  --borderBottomColor: transparent;
  --borderStartEndRadius: 0px;
  --boxShadow: none;
  --borderInlineEndWidth: 0px;
  --borderTopWidth: 0px;
  --borderInlineStartColor: transparent;
  --borderStartStartRadius: 0px;
  --borderInlineStartWidth: 0px;
  --borderTopStyle: solid;
  --borderEndStartRadius: 0px;
  --borderInlineStartStyle: solid;
  --borderInlineEndStyle: solid;
  --borderInlineEndColor: transparent;
  --borderTopColor: transparent;
  --borderEndEndRadius: 0px;
}

*/
```

## Presets
Source: `InternalContainer.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `InternalContainer.tsx`

```ts
export const REF_ELEMENTS = [
]
```

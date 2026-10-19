# Component LLM Context

## About

- Name: Slideshow
- Archetype: Carousel
- Purpose: A carousel of customizable slides, where each slide is a container for any content from the Add Panel, with controls to navigate between slides

## Props
Source: `definition.ts`

```ts
props: {
    activeSlide: prop.number(),
    onMouseIn: prop.event('click'),
    slides: prop.object<Array<{ name?: string; content?: ReactElement }>>(),
    loop: prop.boolean(),
    onClick: prop.event('click'),
    onPause: prop.event('change'),
    onChange: prop.event('change'),
    a11y: prop.object<unknown>(),
    autoplay: prop.boolean(),
    transitionType: prop.enum('none', 'slide', 'cross-fade', 'in-out'),
    direction: prop.direction(),
    pauseButtonVisibility: prop.enum('always', 'onHover', 'never'),
    autoplayDelay: prop.number({ min: 0.5 }),
    onPlay: prop.event('change'),
    transitionDuration: prop.number(),
    transitionDirection: prop.enum('rtl', 'ltr', 'ttb', 'btt'),
    onMouseOut: prop.event('click'),
    prevButtonLabel: prop.text(),
    pauseOnHover: prop.boolean(),
    onDblClick: prop.event('click'),
    nextButtonLabel: prop.text(),
}
```

## Slots

A `ReactElement` prop above is a slot that holds other components. Its value is one `InternalContainer` with the
slot's components as its children, written as JSX, and the component's own tag takes `type="Container"`:

```jsx
<Slideshow id="comp1" type="Container" slides={[
    {
        name: 'First',
        content: (
            <InternalContainer id="comp1-first-content" type="Container" backgroundLayer={[<Background id="comp1-first-content-bg" type="Component" />]}>
                {/* any components */}
            </InternalContainer>
        ),
        _id: 'dataItem-comp1-first',
    },
]} />
```

- The ids above are placeholders: give each component, `InternalContainer` and `Background` an `id` of its own,
  unique on the page.
- Give each array item an `_id` of its own, distinct from every component `id`; it is the item's data id.
- Lay out each `InternalContainer` in `layout.css` as a container, like any other InternalContainer.

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/Slideshow/css";

@import "./presets/base.css";

@import "./custom-enums.css";

/* Allowed CSS overrides for @wix/origami/Slideshow; these are not computed styles. */
/*

.slideshow {
  box-shadow: none;
  border-bottom: none;
  border-radius: 0;
  border-inline-start: none;
  border-top: none;
  border-inline-end: none;
  --navigation-buttons-alignment: center;
  --navigation-buttons-arrangement: separated;
  --navigation-buttons-position-together-horizontal: top;
  --controls-padding: 0px;
  --pause-button-position: bottom-end;
  --navigation-buttons-column-gap: 20px;
  --animation-duration: 0.5s;
  --navigation-buttons-position-separated-horizontal: center;
  --navigation-buttons-row-gap: 20px;
  --navigation-buttons-position-together-vertical: start;
  --slide-indicators-position-horizontal: top;
  --navigation-buttons-position-separated-vertical: middle;
  --orientation: horizontal;
  --icon-placement-horizontal: next-to-text;
  --slide-indicators-position-vertical: end;
  --icon-placement-vertical: vertically-stacked;
}

.slideshow-pagination {
  display: flex;
  --dot-border: 1px solid rgb(1, 1, 1);
  --dot-border-radius: 50px;
  --dot-width: 10px;
  --dot-height: 10px;
  --dot-gap: 8px;
  --dot-shadow: initial;
  --dot-bg-color: rgba(0, 0, 0, 0.4);
}

*/
```

## Presets
Source: `Slideshow.tsx`

```ts
export const PRESET_NAMES = [
  'base',
]
```

## Ref Elements
Source: `Slideshow.tsx`

```ts
export const REF_ELEMENTS = [
  'navigationButtons',
]
```

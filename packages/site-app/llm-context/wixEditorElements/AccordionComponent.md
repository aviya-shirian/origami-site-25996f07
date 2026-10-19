# Component LLM Context

## About

- Name: Accordion
- Archetype: Accordion
- Purpose: AccordionContainer

## Props
Source: `definition.ts`

```ts
props: {
    onMouseIn: prop.event('click'),
    onBlur: prop.event('focus'),
    defaultOpen: prop.enum('none', 'first', 'all'),
    onClick: prop.event('click'),
    a11y: prop.object<unknown>(),
    items: prop.object<Array<{ name?: string; content?: ReactElement }>>(),
    direction: prop.direction(),
    onMouseOut: prop.event('click'),
    onFocus: prop.event('focus'),
    onDblClick: prop.event('click'),
    allowMultipleOpen: prop.boolean(),
    activeItem: prop.number(),
}
```

## Slots

A `ReactElement` prop above is a slot that holds other components. Its value is one `InternalContainer` with the
slot's components as its children, written as JSX, and the component's own tag takes `type="Container"`:

```jsx
<AccordionComponent id="comp1" type="Container" items={[
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
@import "@wix/editor-react-components/AccordionComponent/css";

@import "./custom-enums.css";

/* Allowed CSS overrides for @wix/origami/AccordionComponent; these are not computed styles. */
/*

.accordion {
  padding-inline-end: initial;
  border-start-end-radius: initial;
  background: initial;
  padding-inline-start: initial;
  border-bottom: initial;
  border-inline-start: initial;
  border-top: initial;
  border-inline-end: initial;
  padding-top: initial;
  border-start-start-radius: initial;
  padding-bottom: initial;
  border-end-start-radius: initial;
  border-end-end-radius: initial;
  --items-gap: 0px;
}

.item-title {
  text-transform: initial;
  padding-inline-end: initial;
  border-start-end-radius: initial;
  box-shadow: initial;
  background: initial;
  padding-inline-start: initial;
  border-bottom: initial;
  color: initial;
  border-inline-start: initial;
  text-align: start;
  border-top: initial;
  border-inline-end: initial;
  padding-top: initial;
  border-start-start-radius: initial;
  font: initial;
  padding-bottom: initial;
  border-end-start-radius: initial;
  border-end-end-radius: initial;
  --icon-position: End;
}

.item-title.accordion-component__item-title--hover {
}

.item-title.accordion-component__item-title--selected {
}

.item-content {
  padding-inline-end: initial;
  border-start-end-radius: initial;
  box-shadow: initial;
  background: initial;
  padding-inline-start: initial;
  border-bottom: initial;
  border-inline-start: initial;
  border-top: initial;
  border-inline-end: initial;
  padding-top: initial;
  border-start-start-radius: initial;
  padding-bottom: initial;
  border-end-start-radius: initial;
  border-end-end-radius: initial;
}

.accordion-item {
  border-start-end-radius: initial;
  box-shadow: initial;
  background: initial;
  border-bottom: initial;
  border-inline-start: initial;
  border-top: initial;
  border-inline-end: initial;
  border-start-start-radius: initial;
  border-end-start-radius: initial;
  border-end-end-radius: initial;
}

.accordion-item.accordion-component__accordion-item--hover {
}

.accordion-item.accordion-component__accordion-item--selected {
}

*/
```

## Presets
Source: `AccordionComponent.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `AccordionComponent.tsx`

```ts
export const REF_ELEMENTS = [
  'animatedIcon',
]
```

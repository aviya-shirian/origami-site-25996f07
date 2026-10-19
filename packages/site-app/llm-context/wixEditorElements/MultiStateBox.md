# Component LLM Context

## About

- Name: Multi-State Box
- Archetype: Container
- Purpose: A component that holds multiple states (each state is a container), displaying only one state at a time

## Props
Source: `definition.ts`

```ts
props: {
    onMouseIn: prop.event('click'),
    onBlur: prop.event('focus'),
    onClick: prop.event('click'),
    onChange: prop.event('change'),
    onMouseOut: prop.event('click'),
    activeStateIndex: prop.number(),
    onFocus: prop.event('focus'),
    activeStateName: prop.text(),
    onDblClick: prop.event('click'),
    states: prop.object<Array<{ name?: string; content?: ReactElement }>>(),
}
```

## Slots

A `ReactElement` prop above is a slot that holds other components. Its value is one `InternalContainer` with the
slot's components as its children, written as JSX, and the component's own tag takes `type="Container"`:

```jsx
<MultiStateBox id="comp1" type="Container" states={[
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
@import "@wix/editor-react-components/MultiStateBox/css";

/* Allowed CSS overrides for @wix/origami/MultiStateBox; these are not computed styles. */
/*

.multi-state-box {
}

*/
```

## Presets
Source: `MultiStateBox.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `MultiStateBox.tsx`

```ts
export const REF_ELEMENTS = [
]
```

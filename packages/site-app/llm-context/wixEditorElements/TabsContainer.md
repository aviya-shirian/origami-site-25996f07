# Component LLM Context

## About

- Name: Tabs
- Archetype: Tabs
- Purpose: A tabs component that allows you to display content in a tabbed interface.

## Props
Source: `definition.ts`

```ts
props: {
    onMouseIn: prop.event('click'),
    onBlur: prop.event('focus'),
    onClick: prop.event('click'),
    onChange: prop.event('change'),
    transitionType: prop.enum('none', 'slide', 'cross-fade'),
    direction: prop.direction(),
    tabs: prop.object<Array<{ name?: string; content?: ReactElement }>>(),
    onTabItemClicked: prop.event('change'),
    transitionDuration: prop.number(),
    activeTab: prop.number(),
    transitionDirection: prop.enum('up', 'down'),
    onMouseOut: prop.event('click'),
    onFocus: prop.event('focus'),
    onDblClick: prop.event('click'),
}
```

## Slots

A `ReactElement` prop above is a slot that holds other components. Its value is one `InternalContainer` with the
slot's components as its children, written as JSX, and the component's own tag takes `type="Container"`:

```jsx
<TabsContainer id="comp1" type="Container" tabs={[
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
@import "@wix/editor-react-components/Tabs/css";

@import "./custom-enums.css";

/* Allowed CSS overrides for @wix/origami/TabsContainer; these are not computed styles. */
/*

.tabs {
  font: initial;
  --menu-items-row-gap: 10px;
  --menu-padding-inline-start: 0px;
  --menu-item-padding-bottom: 0px;
  --menu-item-border-style-top: solid;
  --menu-border-width-inline-end: 0px;
  --menu-padding-bottom: 0px;
  --menu-item-text-shadow: initial;
  --menu-border-color-inline-start: #000000;
  --menu-item-border-color-inline-end: #000000;
  --menu-background: initial;
  --menu-padding-inline-end: 0px;
  --menu-border-width-inline-start: 0px;
  --menu-border-color-inline-end: #000000;
  --menu-item-padding-inline-end: 0px;
  --menu-border-radius-start-start: 0px;
  --menu-border-radius-start-end: 0px;
  --menu-border-radius-end-end: 0px;
  --menu-item-padding-inline-start: 0px;
  --menu-border-style-top: solid;
  --menu-item-border-style-inline-end: solid;
  --menu-item-flex: 0 0 auto;
  --menu-border-width-bottom: 0px;
  --menu-item-background: initial;
  --menu-item-color: #000000;
  --menu-border-color-bottom: #000000;
  --menu-item-border-style-inline-start: solid;
  --menu-items-column-gap: 10px;
  --menu-items-align: flex-start;
  --menu-item-padding-top: 0px;
  --menu-border-radius-end-start: 0px;
  --menu-border-style-inline-end: solid;
  --menu-item-border-color-top: #000000;
  --menu-item-border-style-bottom: solid;
  --menu-border-style-bottom: solid;
  --menu-item-border-color-inline-start: #000000;
  --menu-item-border-width-inline-start: 0px;
  --menu-item-text-align: initial;
  --menu-box-shadow: none;
  --menu-item-border-width-top: 0px;
  --menu-content-row-gap: 0px;
  --menu-item-border-width-bottom: 0px;
  --menu-item-text-decoration-line: initial;
  --menu-item-box-shadow: none;
  --menu-item-border-width-inline-end: 0px;
  --menu-item-border-color-bottom: #000000;
  --menu-padding-top: 0px;
  --menu-border-width-top: 0px;
  --menu-item-border-radius-end-start: 0px;
  --menu-item-letter-spacing: 0em;
  --menu-border-color-top: #000000;
  --menu-item-border-radius-end-end: 0px;
  --menu-item-border-radius-start-end: 0px;
  --overflow-behavior: nowrap;
  --menu-item-border-radius-start-start: 0px;
  --menu-border-style-inline-start: solid;
}

.menu-item {
  text-decoration-line: none;
  padding-inline-end: 0px;
  border-start-end-radius: 0px;
  box-shadow: none;
  background: transparent;
  padding-inline-start: 0px;
  text-shadow: none;
  border-bottom: 0px solid #000000;
  color: #000000;
  border-inline-start: 0px solid #000000;
  border-top: 0px solid #000000;
  border-inline-end: 0px solid #000000;
  padding-top: 0px;
  border-start-start-radius: 0px;
  font: initial;
  letter-spacing: 0em;
  padding-bottom: 0px;
  border-end-start-radius: 0px;
  border-end-end-radius: 0px;
  --menu-item-flex: 0 0 auto;
  --menu-item-text-align: center;
}

.menu-item.tabs__item--hover {
  text-decoration-line: underline;
}

.menu-item.tabs__item--selected {
  text-decoration-line: underline;
}

.tab-content-container {
  box-shadow: initial;
  background: initial;
  border-bottom: 0px solid black;
  border-radius: initial;
  border-inline-start: 0px solid black;
  border-top: 0px solid black;
  border-inline-end: 0px solid black;
}

.scroll-button {
  padding-inline-end: 0px;
  box-shadow: initial;
  background: initial;
  padding-inline-start: 0px;
  border-bottom: 0px solid black;
  border-radius: initial;
  border-inline-start: 0px solid black;
  border-top: 0px solid black;
  border-inline-end: 0px solid black;
  padding-top: 0px;
  padding-bottom: 0px;
  --icon-color: rgba(0, 0, 0, 1);
  --scroll-button-icon-size: 12px;
}

*/
```

## Presets
Source: `TabsContainer.tsx`

```ts
export const PRESET_NAMES = [
]
```

## Ref Elements
Source: `TabsContainer.tsx`

```ts
export const REF_ELEMENTS = [
]
```

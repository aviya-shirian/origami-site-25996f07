# Component LLM Context

## About

- Name: Menu
- Archetype: Menu
- Purpose: Displays a navigational menu, allowing visitors to access different pages or sections of a site

## Props
Source: `definition.ts`

```ts
props: {
    onMouseIn: prop.event('click'),
    onItemDblClick: prop.event('change'),
    onItemMouseOut: prop.event('change'),
    onMouseOut: prop.event('click'),
    onItemClick: prop.event('change'),
    onItemMouseIn: prop.event('change'),
}
```

## CSS Defaults
Source: `defaults.css`

```css
@import "@wix/editor-react-components/Menu/css";

@import "./presets/hamburgerMenu.css";
@import "./presets/verticalNavbar.css";
@import "./presets/horizontalHugNavbar.css";
@import "./presets/horizontalScrollNavbar.css";

@import "./custom-enums.css";

/* Allowed CSS overrides for @wix/origami/Menu; these are not computed styles. */
/*

.menu {
}

.navbar {
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
  --container-align: initial;
  --menu-items-row-gap: initial;
  --vertical-dropdown-display: expandCollapse;
  --item-divider-color: initial;
  --menu-items-column-gap: initial;
  --item-divider-style: initial;
  --items-width: fitToText;
  --item-divider-width: initial;
}

.hamburger-menu {
  --border-inline-end-width: initial;
  --border-inline-end-style: initial;
  --padding-top: initial;
  --boxShadow: initial;
  --background: initial;
  --close-button-position: end;
  --border-inline-start-style: initial;
  --border-inline-start-color: initial;
  --border-inline-start-width: initial;
  --overlay-background: initial;
  --padding-bottom: initial;
  --border-start-start-radius: 0px;
  --border-end-end-radius: 0px;
  --border-end-start-radius: 0px;
  --menu-position: top;
  --border-bottom-width: initial;
  --padding-inline-start: initial;
  --wrapper-position: end;
  --border-top-style: initial;
  --border-start-end-radius: 0px;
  --padding-inline-end: initial;
  --border-bottom-style: initial;
  --border-top-color: initial;
  --border-top-width: initial;
  --border-bottom-color: initial;
  --border-inline-end-color: initial;
  --hamburger-wrapper-width: third;
}

*/
```

## Presets
Source: `Menu.tsx`

```ts
export const PRESET_NAMES = [
  'hamburgerMenu',
  'verticalNavbar',
  'horizontalHugNavbar',
  'horizontalScrollNavbar',
]
```

## Ref Elements
Source: `Menu.tsx`

```ts
export const REF_ELEMENTS = [
  'hamburgerOpenButton',
]
```

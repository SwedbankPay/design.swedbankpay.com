# Changelog

## [10.5.0] - 06.12.2022

## Changed
-   Slab component:
    -   Changes to the design. Shadows are reworked. Changed slab arrow to a clip-path. Removed colors from examples.

-   Z-index:
    -   Moved variables to global to get a better overview. Updated all values so stacking works correctly.

-   A11y:
    -   Made element focus on keyboard navigation more visible and improved consistency between Chromium and non-chromium browsers.
    -   Updated components to better work with high contrast mode on the user's OS. 

-   Documentation:
    -   Updated some component documentation: Badge, Radio button, Button and Slab

## Added
-   Icon only Button:
    -   Added a new button variant with only an icon. 

-   Radio button:
    -   Added a new radio button style. It looks like a normal button, but with radio functionality. 

-   Badges:
    -   Added a lot more color variants to badges.

-   Latest version:
    -   Added a banner on the home page that redirects to the latest version of the DG. Also added a link on the top of the component page.

## Bugfixes
-   Button:
    -   Fixed pixel pushing on click.

-   Documentation page:
    -   Component overview:
        -   Fixed expandable component not appearing in the main overview.
        -   Added icons for expandable and dropdown.
    -   Sheet component:
        -   In the Sheet demo: renamed the buttons and modified the actions. 
    -   Search scroll bar:
        -   Fixed the scroll bar to only show when needed. Removed bottom scroll bar.

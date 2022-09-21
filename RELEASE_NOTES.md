# Changelog

## [10.3.0] - 06.09.2022

## Changed
-   Button component
    -   Updated design for different states; hover, focus, active, etc.

-   Tables component
    -   Column dividers
    -   Sorting option
    -   Handling of buttons

-   Tables documentation
    -   Added do and don't examples on how to structure a table
## Added
-   Searchbox for the design system
    -   Simple search on the different pages of the system.
    -   Different design for mobile view.

-   Optinal prefers-reduced-animation class
    -   Components with animations can be turned off if user applies this on their OS.
    -   Accordion, Expandable, Sidebar, Sheet, Topbar

-   Added callback to sheet and dialog component when firing off open/close methods.

-   Return Chart instance when new chart() is ran.

## WCAG
-   Menu button on topbar/sidebar mobile view
    -   aria-haspopup, aria-controls and aria-expanded

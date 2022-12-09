# Changelog

## [10.5.1] - 09.12.2022

## Changed
-   Tooltip component:
    -   The only component that was still dependent on another component's style. Added styles to the tooltip.less file, so it is independent. This is *kind of* a breaking change, but not really since the old version still works, but if you want to keep up2date, delete `.btn` and `.btn-link` classes.

## Bugfixes
-   Tooltip component:
    -   Z-index changes from v/10.5.0 removed the belonging arrow between the tooltip icon and the tooltip.

-   Input field component: 
    -   Had some issues with borders when postfix was displayed. This is now fixed

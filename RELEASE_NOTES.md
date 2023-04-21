# Changelog

## [10.8.1] - 20.04.2023

## Component changes

-   Input text &amp; textarea fields
    -   fix Layout shift when focus-within
    -   fix border color around prefix on success state

-   We continue on our migration to CSS Custom Properties

## Design Guide documentation changes
-   Button documentation &amp; Input field documentation
    -   Removed all references to button-link (now users should use tertiary)
    -   Removed all references to input textx "hint text expander"

-   Forms (in Patterns & Login)
    -   Add autocomplete attributes to all relevant inputs code snippets to enforce good practices

## Deleted features
-   Expanding hint text script is removed

## Packages maintenance

-   bump Stylelint from 3 to 5
-   bump Codecov-action from 3.1.2 to 3.1.3
-   bump npm-publish from 1 to 2
# Changelog

## [10.8.1] - 20.04.2023

## Component changes

-   Input text &amp; textarea fields
    -   fix Layout shift when focus-within
    -   fix border color around prefix on success state
-   Buttons
    -   fix colors PayEx destructive buttons when disabled

-   We continue on our migration to CSS Custom Properties

## Design Guide documentation changes
-   Button documentation &amp; Input field documentation
    -   Removed all references to button-link (now users should use tertiary)
    -   Removed all references to input textx "hint text expander"
    - PayEx restore destructive buttons Preview block in docs (but beware, this chunk will probably not be updated in the future)

-   Forms (in Patterns & Login)
    -   Add autocomplete attributes to all relevant inputs code snippets to enforce good practices

## Deleted features
-   Expanding hint text script

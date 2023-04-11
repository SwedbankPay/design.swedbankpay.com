# Changelog

## [10.7.5] - 24.03.2023

## Component changes
-   Button component
    Removed: (Breaking changes in form of deleting code)
    -   less-functions for creating diff buttons; button-variant, button-default-variant, button-outline-variant, button-link-variant, button-ghost, button-active-state, button-size, button-icon-size, btn-loader-variant
    -   specific less variables
    -   specific focus states
    -   btn-guiding-destructive, btn-executive-destructive, btn-link-destructive
    -   btn-icon-<size>
    
    Changed: (UI breaking changes)
    -   btn-primary (new design)
    -   btn-secondary (new design)
    -   button sizes: btn-lg, btn-sm, btn-xs

    Added: (new features)
    -   btn-tertiary (new button)
    -   btn-xl (size class)
    -   btn-icon class (can be combined with btn-<size> classes)

-   Input field
    Removed:
    -   less functions for error validation from validation.less
    -   less function for focus state

    Added/Updated:
    -   CSS variables for input fields Both SwedBP and PayEx variables
    -   Error message/icon
    -   Success message/icon
    -   Simplified error/success prop and correct presentation of component with belonging icons/colors

## Design Guide documentation changes
-   Button documentation
    Removed:
    -   Destructive button documentation

-   Input field documentation
    Removed:
    -   Do and donts examples

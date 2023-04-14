# Changelog

## [10.8.0] - 13.04.2023

## Component changes
-   We are progressively migrating to CSS Custom Properties (aka CSS variables)

-   Button component
    Removed: (Breaking changes in form of deleting code)
    -   less-functions for creating diff buttons; button-variant, button-default-variant, button-outline-variant, button-link-variant, button-ghost, button-active-state, button-size, button-icon-size, btn-loader-variant
    -   specific less variables
    -   specific focus states
    -   btn-guiding-destructive, btn-executive-destructive, btn-link-destructive
    -   btn-icon-\<size>
    -   btn-link

    Changed: (UI breaking changes)
    -   btn-primary (new design)
    -   btn-secondary (new design)
    -   button sizes: btn-lg, btn-sm, btn-xs
    -   dropdown toggle

    Added: (new features)
    -   btn-tertiary (new button)
    -   btn-xl (size class)
    -   btn-icon class (can be combined with btn-\<size> classes)

-   Input field
    Removed:
    -   less functions for error validation from validation.less
    -   less function for focus state

    Added/Updated:
    -   CSS variables for input fields Both SwedBP and PayEx variables
    -   Error message/icon
    -   Success message/icon
    -   Simplified error/success prop and correct presentation of component with belonging icons/colors

-   Colors (Swedbankpay only):
    -   Text color defaults to Brown-solid (instead of Brown previously). This enables new background colors now having enough color contrast with brown-solid text (Turquoise, brown-soft, brown-light, orange)

-   Typography
    -   H3 font-size increased
    -   Fixed incorrect header font-size
    -   Fixed incorrect header font-weight
    -   Removed h6 (code/UI Breaking-change)
    -   Converted all .less Typography variables to CSS custom properties (font-families, font-sizes, line-height, weight, ...) + continue migration of colors to CSS variables

-   Normalize.less -> import as first import so every import after that takes precedence
    -   Fixes headers font-size, and possible many more things.

-   Expanding hint text
    -   Delete the functionality and style; we are not supporting it anymore.

## Design Guide documentation changes
-   Button documentation
    -   Removed Destructive button documentation
    -   Added button specific util classes overview

-   Input field documentation
    -   Removed "Do and donts" examples

-   Identity Color documentation

-   Identity Typography documentation
    -   Headers, Font-sizes and Line-height

## Deleted features
-   Button component
    -   btn-guiding-destructive, btn-executive-destructive, btn-link-destructive classes (you are now supposed to use the new btn-tertiary for those edge cases) (this does not apply for the payex brand)
    -   btn-icon-\<size> classes (we are now using a combination of btn-icon and btn-\<size> )
    -   btn-link is fully removed, also replaced by btn-tertiary

-   Expanding hint text
    -   All styling has been removed, also the script. (We recommend thoroughly thinking through the use case, and rather add more explanation in the label/legend or hint-text)

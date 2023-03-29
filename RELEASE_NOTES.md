# Changelog

## [10.7.5] - 24.03.2023

## Component changes
-   we are using CSS Custom Properties (aka CSS variables)
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


-   Colors (Swedbankpay only):
    -   text color defaults to Brown-solid (instead of Brown previously)
        -   this enables new background colors now having enough color contrast with brown-solid text (Turquoise, brown-soft, brown-light, orange)
-   Typography
    -   h3 font-size increased
    -   fixed incorrect header font-sizes
    -   removed h6 (code/UI Breaking-change)
    - converted all .less Typography variables to CSS custom properties (font-families, font-sizes, line-height, weight, ...)

-   normalize.less -> import as first import so every import after that takes precedence
    -   fixes headers font-size, and possible many more things ?

## Design Guide documentation changes
-   Button documentation
    Removed:
    -   Destructive button documentation
-   Identity Color documentation
-   Typography - headers  & font-sizes & line-height

    Added:
    -   Button specific util class overview

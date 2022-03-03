# Changelog

## [8.0.0] - 02.03.2022

## Breaking changes
-   Pagination component has got a new design, and along comes a script that paginates the pages for you as well!
-   Form-group error message - Since the error message was presented with CSS, it was impossible for a screen reader to perceive it since it was not plain text. Therefor it is no longer created through the data-error attribute. But instead, placed directly inside the ``.help-block`` element.

## Changed
-   Accordion
    -   Updated description under Developer documentation to be more intuitive

-   Button
    -   Now supports icon after
    -   Some styling changes
    -   Documentation

-   Charts
    -   Updated documentation and now includes an Accessibility section.

-   Input-field
    -   Implemented postfix
    -   Documentation 

-   Sheet
    -   Is now mobile friendly
    -   Now has a header and supports a sticky footer
    -   Updated scripts to handle focus/tabbing inside the component
    -   Documentation 

-   Logotype
    -   Updated logotype assets folder(updated logos)
    -   Documentation

-   Browser support documentation

-   Design guide doc-container width(is now a tiny bit smaller)

-   Size H1 mobile & H2 desktop is now 28px, up from 24px

## Added
-   Accessibility improvements for various components:
    -   Aria-labels
    -   Labels for= - attributes
    -   Error text
    -   Form/Fieldset sections grouped
    -   Auto focus when modal is opened

-   Hotjar tracking code

## Fixed
-   Fourth level of extended sidebar did not show
-   Tabbing issues with Radio-buttons
-   Text overlapping arrow-button on the Select component
-   Bug on Tabs examples in the documentation



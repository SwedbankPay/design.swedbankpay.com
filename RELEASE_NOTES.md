# Changelog

## \[10.10.1\] - 14.02.2024

## Component changes

- Cards
  - new Cards UI. To migrate requires code changes from DG consuming devs. BUT silent support for "old" card syntax. Please check the documentation for more details.
  - the new UI requires the introduction of new classes (.cards-cta, span.arrow, ...). Unless one of these new classes (`.cards-cta`) is present, then the old UI will be used, by checking conditionally `cards:has(.cards-cta)`. If your project does NOT support the :has() selector yet, but requires fallback support for the old UI, then add `.legacy` class to the `.cards` element.

## Technical changes

- Dependencies updates (finished all Node -> 20 update for pipeline)

## Design System website

- update Playbook Profiles content

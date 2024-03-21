# Changelog

## \[10.11.0\] - 21.03.2024

## Component changes

- Cards
  - update Cards style & syntax. The update requires code changes from DG consuming devs in HTML. BUT there is silent support for "old" card syntax until next major version release. Please check the documentation for more details.
  - the new UI requires the introduction of new classes (.cards-cta, span.arrow, ...). Unless one of these new classes (`.cards-cta`) is present, then the old UI will be used, by checking conditionally `cards:has(.cards-cta)`. If your project does NOT support the :has() selector yet, but requires fallback support for the old UI, then add `.legacy` class to the `.cards` element.
  - deprecated cards variants (.primary, .secondary, .tertiary)
  - cards title text need to have the `.h4` class

## Technical changes

- Dependencies updates (finished GH actions Node -> 20 update & others misc)

## Design System website

- update Playbook Profiles content

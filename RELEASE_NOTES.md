# Changelog

## \[10.11.0\] - 21.03.2024

## Component changes

- Input fields

  - labels line-height increased & mobile values adjusted, so values are in sync with `h4` typography style

- Radio inputs

  - minor non-breaking UI change to the default input radio
  - minor UI changes to checkmark variant
    - some non-breaking UI changes (colors, width, ...)
    - Now the checkmark icon is achieved via span.checkmark-icon instead of an actual icon element loading an svg.
    - It is now possible to add a subtext inside the checkmark variant (use span.subtext)

- Buttons
  - minor non-breaking UI updates (height for size large, unify hover state, modify active & focus-visible UI, and more)
  - add Danish MitId button style (you can use either `i.bank-id-dk` OR `i.mitid-dk`, both are supported)

## Technical changes

- chore deps (update deps packages minor versions)

- remove Sentry from codebase

## Design System website

# Changelog

## \[10.12.0\] - 16.05.2024

## Component changes

- Input fields

  - Labels line-height increased & mobile values adjusted, so values are in sync with `h4` typography style

- Radio inputs

  - Minor non-breaking UI change to the default input radio
  - Minor UI changes to checkmark variant
    - Some non-breaking UI changes (colors, width, ...)
    - Now we achieve the checkmark icon using `span.checkmark-icon` instead of loading an actual icon element with an svg
    - New "large" variant for checkmark radio input
    - Possibility to add a subtext inside the checkmark variant (use `span.subtext`)

- Buttons

  - minor non-breaking UI updates (height for size large, unify hover state, update active & focus-visible UI, and more)
  - add Danish MitId button style (you can use either `i.bank-id-dk` OR `i.mitid-dk`, both are supported)
  - secondary buttons get a transparent background-color

- Cards

  - fix style .cards-wide on mobile

- Dialog

  - UI update
  - new syntax, leveraging the standard <dialog> tag
  - silent support for the old syntax until the next major release
  - add transitions

## Technical changes

- chore deps (update deps packages minor versions)

- remove Sentry from codebase

## Design System website

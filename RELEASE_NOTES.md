# Changelog

## \[10.12.1\] - 21.06.2024

## Component changes

- Dialog

  - if no invoker or close btn JS fails gracefully, providing helpful feedback in the console instead of throwing Error
  - CSS support for old syntax now checks it is not picked up also by the new syntax (make sure not dialog.dialog)
  - new dialog can have multiple invokers

- Buttons

  - loading spinner of buttons keep their aspect-ratio even if the buttons is squashed, when they're in overflow state

- Cards

  - add support for div.illustration & picture elements in lieu of the img element as illustrations of used in the cards component (changes in documentation will come in a future release)
  - default cards wide with no img and no text content -> align-items: center (better default when title wraps)

- Dropdown

  - dropdown.init() method now accept `id` parameter to initialize specific dropdowns, instead of always all dropdowns found in the DOM

- Utility classes

  - Add utility classes for display grid and inline grid

## Technical changes

- chore deps (update deps packages minor versions)

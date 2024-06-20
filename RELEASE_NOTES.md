# Changelog

## \[10.12.1\] - 21.06.2024

## Component changes

- Dialog

  - if not invoker or close btn JS fails gracefully, providing helpful feedback in the console instead of throwing Error
  - CSS support for old syntax now checks it is not picked up also by the new syntax (make sure not dialog.dialog)
  - new dialog can have multiple invokers

- Buttons

  - loading spinner of buttons keep their aspect-ratio even if the buttons is squashed, when they're in overflow state

## Technical changes

- chore deps (update deps packages minor versions)

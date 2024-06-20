# Changelog

## \[10.12.1\] - 21/06/2024

## Component changes

- Dialog

  - if not invoker or close btn JS fails gracefully, providing helpful feedback in the console instead of throwing Error
  - CSS support for old syntax now checks it is not picked up also by the new syntax (make sure not dialog.dialog)
  - new dialog can have multiple invokers

## Technical changes

- chore deps (update deps packages minor versions)

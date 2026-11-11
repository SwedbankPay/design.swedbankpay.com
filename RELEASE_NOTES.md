# Changelog

## \[10.15.0\] - 11/11/2026

## Added

- Colors (Swedbank Pay)
  - new CSS variables `--brand-red-light`, `--brand-tangerine`, `--brand-lilac`, `--brand-lilac-light` and `--brand-lilac-lighter`
  - matching Less variables `@brand-red-light`, `@brand-tangerine`, `@brand-lilac`, `@brand-lilac-light` and `@brand-lilac-lighter`

## Changed

- Colors (Swedbank Pay)
  - `--brand-orange` / `@brand-orange` updated from `#EE7023` to `#FF5F00`. `--system-warning` and `@system-warning` follow the new orange, as do the warning triangle and payment card icons
  - `@brand-warning` updated from `#E97423` to `#FF5F00` (now points to `@brand-orange`). This affects `.status-warning` and `.text-warning`
  - color pool on the Color page: "Orange light" is now `brand-tangerine` (`#FF9100`), "Fuchsia" colors are replaced by "Lilac" colors, and "Red light" is now available as `brand-red-light`
  - brand accent colors on the Color page now show "Red light" instead of "Pink"

## Deprecated

- `--brand-pink` / `@brand-pink` are deprecated and now point to `--brand-red-light` / `@brand-red-light` (same color, `#EFB7B6`). They will be removed in the next major version
  - a deprecation notice is shown on the Color page under "Brand accent colors"

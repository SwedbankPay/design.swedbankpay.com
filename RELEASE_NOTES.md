# Changelog

## \[10.15.1\] - TBD

## Technical chores

- group Dependabot npm updates (`.github/dependabot.yml`): security updates in one pull request, weekly minor/patch version updates in one pull request for production and one for development dependencies, and development major updates in one pull request. Production major updates are still raised separately
- move `js-beautify` (only used by the documentation site) from `dependencies` to `devDependencies`, so it and its transitive packages are no longer installed for consumers of the package
- update `moment` (dependency of `chart.js`) to `2.31.0` in `package-lock.json`. This only affects this repository, consumers resolve `moment` from `chart.js` (`^2.10.2`) in their own lockfile

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

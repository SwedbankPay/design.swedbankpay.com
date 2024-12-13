# Changelog

## \[10.13.0\] - 11.11.2024

## Playbook

- Updates to the playbook:

## Identity

- Updates the zip file containing the SwedbankPay logos with the new fixed versions

## Technical changes

- Browser support got significantly increased (now last 2 major versions, Firefox ESR, > 0,5% instead of 1%).
  - This is only impacting projects consuming the CSS & JS straight from the CDN. If you're pulling the source files then the polyfilling/transpilling will only be done by your own build pipeline anyways.
- updated dependencies

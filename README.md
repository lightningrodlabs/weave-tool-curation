# weave-tool-curation

Curation lists of Tools for [the Weave](https://theweave.social) / [Moss](https://github.com/lightningrodlabs/moss).

A **curation list** is an opinionated, curator-maintained list of Weave Tools. Moss fetches a
curation list to populate its Tool Library, so users can discover and install Tools. A **tool
list** is a developer collective's list of their own Tools and the available versions of each.

## Repository layout

Curation lists are versioned per Moss minor release. Each top-level directory targets one Moss
version line and contains its own tooling, source (`modify/`), generated lists (`lists/`) and
instructions:

| Directory | Targets | Status |
| --- | --- | --- |
| [`0.13/`](./0.13/README.md) | Moss 0.13 | released |
| [`0.14/`](./0.14/README.md) | Moss 0.14 | released |
| [`0.15/`](./0.15/README.md) | Moss 0.15 | released |
| [`0.16/`](./0.16/README.md) | Moss 0.16 | **in development — not an official release** |

> **Note on 0.16:** Moss 0.16 is still in development (`0.16.0-dev.x`). The `0.16/` lists exist so
> dev builds of Moss 0.16 have a working Tool Library, but they are provisional and may change or
> break as Moss 0.16 evolves. Do not treat the 0.16 lists as stable.

See each directory's `README.md` for how to add, modify and validate that version's lists.

## How the lists are published

The lists are served as static JSON over GitHub Pages at `https://lightningrodlabs.org/weave-tool-curation/`.

Publishing is automated by the [`Deploy Lists to Github Pages`](./.github/workflows/publish.yaml)
workflow. On every push to `main` (or manual dispatch) it:

1. Copies each version's generated lists from `<version>/lists/` into a flat `static/<version>/`
   directory (the `lists/` path segment is dropped).
2. Uploads `static/` as a GitHub Pages artifact and deploys it.

The deployed URLs are therefore:

```
https://lightningrodlabs.org/weave-tool-curation/<version>/curations-<version>.json
https://lightningrodlabs.org/weave-tool-curation/<version>/tool-list-<version>.json
```

for example `https://lightningrodlabs.org/weave-tool-curation/0.15/curations-0.15.json`.

**When adding a new Moss version directory, the `Move lists to static directory` step in
[`publish.yaml`](./.github/workflows/publish.yaml) must be updated to copy it** — the step lists
each version explicitly, so a new directory is not deployed until it is added there.

## Test branches

In addition to the deployed `main`-branch lists, `test-<version>` branches (e.g. `test-0.15`,
`test-0.16`) hold minimal lists used for development and testing of Moss itself. Moss dev configs
fetch those directly from GitHub via raw URLs rather than from the deployed site.

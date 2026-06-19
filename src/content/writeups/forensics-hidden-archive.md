# Forensics: The Hidden Archive

> Challenge focus: archive carving, file recovery, and metadata clues.

## Overview

This challenge started with a noisy bundle of files and a single goal: find the
artifact that carried the flag.

## Process

- Check file extensions and MIME types.
- Inspect archive contents recursively.
- Recover deleted or nested files.

## Useful commands

```bash
file suspect.bin
7z l bundle.zip
strings recovered.dat | head
```

## Takeaway

Most forensic CTFs reward patience. The trick is not just finding data, but
understanding the order in which it was hidden.

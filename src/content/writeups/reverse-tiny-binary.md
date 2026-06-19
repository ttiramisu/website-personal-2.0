# Reverse Engineering: Tiny Binary

> Challenge focus: control flow, logic reconstruction, and lightweight patching.

## Overview

The binary was small, but the logic was intentionally awkward. The best path
was to map the flow first, then identify the exact compare that gated the flag.

## Notes

1. Label the important branches.
2. Trace input handling.
3. Simplify the comparisons into plain logic.

## Takeaway

Small binaries can still hide layered checks. Clear notes make them much easier
to revisit later.

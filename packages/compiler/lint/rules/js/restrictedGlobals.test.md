# `harness.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/compiler/lint/rules/harness.test.ts --update-snapshots` to update.

## `js/restrictedGlobals`

### `0`

```

 lint/js/restrictedGlobals/reject/1/file.ts:1:12 lint/js/restrictedGlobals ━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Do not use the global variable event.

    console.log(event);
                ^^^^^

  ℹ Use a local variable instead.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```
console.log(event);

```

### `1`

```

 lint/js/restrictedGlobals/reject/2/file.ts:1:4 lint/js/restrictedGlobals ━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Do not use the global variable event.

    foo(event)
        ^^^^^

  ℹ Use a local variable instead.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `1: formatted`

```
foo(event);

```

### `2`

```
✔ No known problems!

```

### `2: formatted`

```
function foo(event) {
	console.info(event);
}

```
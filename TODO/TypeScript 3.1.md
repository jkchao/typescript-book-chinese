# Mapped types on tuples and arrays

In TypeScript 3.1, mapped object types<sup>[[1]](#ts-3-1-only-homomorphic)</sup> over tuples and arrays now produce new tuples/arrays, rather than creating a new type where members like `push()`, `pop()`, and `length` are converted.
For example:

```ts
type MapToPromise<T> = { [K in keyof T]: Promise<T[K]> };

type Coordinate = [number, number];

type PromiseCoordinate = MapToPromise<Coordinate>; // [Promise<number>, Promise<number>]
```

`MapToPromise` takes a type `T`, and when that type is a tuple like `Coordinate`, only the numeric properties are converted.
In `[number, number]`, there are two numerically named properties: `0` and `1`.
When given a tuple like that, `MapToPromise` will create a new tuple where the `0` and `1` properties are `Promise`s of the original type.
So the resulting type `PromiseCoordinate` ends up with the type `[Promise<number>, Promise<number>]`.

# Properties declarations on functions

TypeScript 3.1 brings the ability to define properties on function declarations and `const`-declared functons, simply by assigning to properties on these functions in the same scope.
This allows us to write canonical JavaScript code without resorting to `namespace` hacks.
For example:

```ts
function readImage(path: string, callback: (err: any, image: Image) => void) {
  // ...
}

readImage.sync = (path: string) => {
  const contents = fs.readFileSync(path);
  return decodeImageSync(contents);
};
```

Here, we have a function `readImage` which reads an image in a non-blocking asynchronous way.
In addition to `readImage`, we've provided a convenience function on `readImage` itself called `readImage.sync`.

While ECMAScript exports are often a better way of providing this functionality, this new support allows code written in this style to "just work" TypeScript.
Additionaly, this approach for property declarations allows us to express common patterns like `defaultProps` and `propTypes` on React stateless function components (SFCs).

```ts
export const FooComponent => ({ name }) => (
    <div>Hello! I am {name}</div>
);

FooComponent.defaultProps = {
    name: "(anonymous)",
};
```

<!--
fs.readFile(path, (err, data) => {
        if (err) callback(err, undefined);
        else decodeImage(data, (err, image) => {
            if (err) callback(err, undefined);
            else callback(undefined, image);
        });
    });
-->

---

<sup id="ts-3-1-only-homomorphic">[1]</sup> More specifically, homomorphic mapped types like in the above form.

# Version selection with `typesVersions`

Feedback from our community, as well as our own experience, has shown us that leveraging the newest TypeScript features while also accomodating users on the older versions are difficult.
TypeScript introduces a new feature called `typesVersions` to help accomodate these scenarios.

When using Node module resolution in TypeScript 3.1, when TypeScript cracks open a `package.json` file to figure out which files it needs to read, it first looks at a new field called `typesVersions`.
A `package.json` with a `typesVersions` field might look like this:

```json
{
  "name": "package-name",
  "version": "1.0",
  "types": "./index.d.ts",
  "typesVersions": {
    ">=3.1": { "*": ["ts3.1/*"] }
  }
}
```

This `package.json` tells TypeScript to check whether the current version of TypeScript is running.
If it's 3.1 or later, it figures out the path you've imported relative to the package, and reads from the package's `ts3.1` folder.
That's what that `{ "*": ["ts3.1/*"] }` means - if you're familiar with path mapping today, it works exactly like that.

So in the above example, if we're importing from `"package-name"`, we'll try to resolve from `[...]/node_modules/package-name/ts3.1/index.d.ts` (and other relevant paths) when running in TypeScript 3.1.
If we import from `package-name/foo`, we'll try to look for `[...]/node_modules/package-name/ts3.1/foo.d.ts` and `[...]/node_modules/package-name/ts3.1/foo/index.d.ts`.

What if we're not running in TypeScript 3.1 in this example?
Well, if none of the fields in `typesVersions` get matched, TypeScript falls back to the `types` field, so here TypeScript 3.0 and earlier will be redirected to `[...]/node_modules/package-name/index.d.ts`.

## Matching behavior

The way that TypeScript decides on whether a version of the compiler & language matches is by using Node's [semver ranges](https://github.com/npm/node-semver#ranges).

## Multiple fields

`typesVersions` can support multiple fields where each field name is specified by the range to match on.

```json
{
  "name": "package-name",
  "version": "1.0",
  "types": "./index.d.ts",
  "typesVersions": {
    ">=3.2": { "*": ["ts3.2/*"] },
    ">=3.1": { "*": ["ts3.1/*"] }
  }
}
```

Since ranges have the potential to overlap, determining which redirect applies is order-specific.
That means in the above example, even though both the `>=3.2` and the `>=3.1` matchers support TypeScript 3.2 and above, reversing the order could have different behavior, so the above sample would not be equivalent to the following.

```json5
{
  name: 'package-name',
  version: '1.0',
  types: './index.d.ts',
  typesVersions: {
    // NOTE: this doesn't work!
    '>=3.1': { '*': ['ts3.1/*'] },
    '>=3.2': { '*': ['ts3.2/*'] }
  }
}
```

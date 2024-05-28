# Stringify

> 0.2.0

Utilities for string transformation, published on [JSR](https://jsr.io).

## Installation

First of all, you need to install the package:

```
npx jsr add @dmnchzl/stringify
```

<details>
  <summary>Equivalent with Yarn</summary>
  
  ```
  yarn dlx jsr add @dmnchzl/stringify
  ```

</details>

<details>
  <summary>Equivalent with pNPM</summary>
  
  ```
  pnpm dlx jsr add @dmnchzl/stringify
  ```

</details>

<details>
  <summary>Equivalent with Deno</summary>
  
  ```
  deno add @dmnchzl/stringify
  ```

</details>

<details>
  <summary>Equivalent with Bun</summary>
  
  ```
  bunx jsr add @dmnchzl/stringify
  ```

</details>

## Utilities

Below, the list of all available utilities:

**toCamelCase**

> Set case of a string to 'camelCase'

```js
import { toCamelCase } from '@dmnchzl/stringify';

console.log(toCamelCase('Hello World')); // helloWorld
```

**toKebabCase**

> Set case of a string to 'kebab-case'

```js
import { toKebabCase } from '@dmnchzl/stringify';

console.log(toKebabCase('Hello World')); // hello-world
```

**toPascalCase**

> Set case of a string to 'PascalCase'

```js
import { toPascalCase } from '@dmnchzl/stringify';

console.log(toPascalCase('Hello World')); // HelloWorld
```

**toSnakeCase**

> Set case of a string to 'snake_case'

```js
import { toSnakeCase } from '@dmnchzl/stringify';

console.log(toSnakeCase('Hello World')); // hello_world
```

**getWords**

> Extract words from string

```js
import { getWords } from '@dmnchzl/stringify';

console.log(getWords('Hello World')); // ['Hello', 'World']
```

**countWords**

> Count words from string

```js
import { countWords } from '@dmnchzl/stringify';

console.log(countWords('Hello World')); // 2
```

## License

```
           DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                   Version 2, December 2004

Copyright (C) 2024 Damien Chazoule <dmnchzl@pm.me>

Everyone is permitted to copy and distribute verbatim or modified
copies of this license document, and changing it is allowed as long
as the name is changed.

           DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
  TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

 0. You just DO WHAT THE FUCK YOU WANT TO.
```

# nuxt-typed-link

[![npm](https://img.shields.io/npm/v/nuxt-typed-link.svg?style=flat-square&color=CB3837&logo=npm&logoColor=ffffff&label=npm)](https://www.npmjs.com/package/nuxt-typed-link)
[![nuxt](https://img.shields.io/static/v1?label=Nuxt&message=3&color=00C58E&style=flat-square&logo=nuxt.js&logoColor=ffffff)](https://nuxt.com/)
[![publish](https://img.shields.io/github/workflow/status/kiwilan/nuxt-typed-link/publish?style=flat-square&logo=github&logoColor=ffffff&label=publish)](https://github.com/kiwilan/nuxt-typed-link/actions)

A **Nuxt 3** module to use `TypedLink` component with typed routes.

## Why

This module is heavy inspired by [nuxt-typed-router](https://github.com/victorgarciaesgi/nuxt-typed-router), you can use in your app too. Where `nuxt-typed-router` give a router typed, `nuxt-typed-link` give a new component `TypedLink` strongly typed.

## Installation

With `NPM`

```bash
npm install nuxt-typed-link -D
```

Or `pnpm`

```bash
pnpm add nuxt-typed-link -D
```

## Features

- 🔎 Vue component ready with `TypedLink`
- 🔥 Hot reloading when routes updated
- 🌏 Support i18n (<https://github.com/nuxt-modules/i18n>)
- ✅ Support `params`
- 🦾 Strongly typed, validate by `to` prop (`typescript` required)

## Usage

```ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    'nuxt-typed-link',
  ],
  typedLink: {
    // ...
  },
})
```

| **Option**      | **Type**  | **Default** | **Description**                                                 |
| --------------- | --------- | ----------- | --------------------------------------------------------------- |
| `componentName` | `string`  | `TypedLink` | Override component name.                                        |
| `i18n`          | `boolean` | `false`     | i18n enabled, if you use <https://github.com/nuxt-modules/i18n> |

## Example

```bash
pages/
├── index.vue
├── about.vue
```

```vue
<template>
  <div>
    <TypedLink :to="{
      name: 'index',
    }">
      Home
    </TypedLink>
    <TypedLink :to="{
      name: 'abut', 
    }"> <!-- type error! -->
      About
    </TypedLink>
  </div>
</template>
```

## `TypedLink` Props

| **Prop** | **Type**    | **Required** | **Description** |
| -------- | ----------- | ------------ | --------------- |
| `to`     | `RouteType` | `true`       | Route object.   |

## 💻 Development

- Clone repository
- Install dependencies using `pnpm i`
- Prepare using `pnpm dev:prepare`
- Try playground using `pnpm dev`

### Local module

Create a `tgz`.

```bash
rm -f ~/nuxt-typed-link-*.tgz && npm pack && mv nuxt-typed-link-*.tgz ~/
```

Add it to your Nuxt app.

```json
{
  "devDependencies": {
    "nuxt-typed-link": "file:~/nuxt-typed-link-0.0.1.tgz"
  }
}
```

## License

[MIT](./LICENSE)

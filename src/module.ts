import { fileURLToPath } from 'url'
import { existsSync, writeFileSync } from 'fs'
import { defineNuxtModule, addPlugin, createResolver, addComponent, addTemplate, addImports } from '@nuxt/kit'
import { name, version } from '../package.json'
import { TypedRoute } from './tools/typed-route'

export interface ModuleOptions {
  /**
   * Override component name.
   *
   * @default 'TypedLink'
   */
  componentName: string
  /**
   * i18n enabled, if you use <https://github.com/nuxt-modules/i18n>
   *
   * @default false
   */
  i18n: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'typedLink'
  },
  defaults: {
    componentName: 'TypedLink',
    i18n: false

  },
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)

    const path = `${nuxt.options.buildDir}/typed-routes.ts`
    if (!existsSync(path)) { writeFileSync(path, '') }

    addImports({
      name: 'useImage',
      from: resolve('runtime/composables')
    })
    addComponent({
      name: options.componentName,
      filePath: resolve(runtimeDir, options.i18n ? 'component-i18n.vue' : 'component.vue')
    })

    nuxt.hook('pages:extend', (pages) => {
      TypedRoute.make(pages, path)
    })

    nuxt.options.alias['#typed-routes-options'] = addTemplate({
      filename: 'svg-transformer-options.mjs',
      getContents: () => Object.entries(options)
        .map(([key, value]) => `export const ${key} = ${JSON.stringify(value, null, 2)}`)
        .join('\n')
    }).dst
  }
})

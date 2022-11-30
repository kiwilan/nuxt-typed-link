<script lang="ts" setup>
import { useTypedLink } from '../src/runtime/composables'
import { RouteType } from './.nuxt/typed-routes'

const { push } = useTypedLink()
const navItems: {
  name: string,
  to: RouteType
}[] = [
  {
    name: 'Home',
    to: {
      name: 'index'
    }
  },
  {
    name: 'About',
    to: {
      name: 'about'
    }
  },
  {
    name: 'Blog',
    to: {
      name: 'blog'
    }
  }
]
</script>

<template>
  <div>
    <nav>
      <ul>
        <li v-for="item in navItems" :key="item.name">
          <typed-link :to="item.to">
            {{ item.name }}
          </typed-link>
        </li>
      </ul>
    </nav>
    <button
      @click="push({
        name: 'about'
      })"
    >
      pushTyped to about
    </button>
    <NuxtPage />
  </div>
</template>

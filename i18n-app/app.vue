<script lang="ts" setup>
import { useRouter } from '#app'
import { useSwitchLocalePath } from './.nuxt/imports'

const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div>
    <div class="flex items-center space-x-1">
      <NuxtLink :to="switchLocalePath('en')">
        English
      </NuxtLink>
      <NuxtLink :to="switchLocalePath('fr')">
        Français
      </NuxtLink>
    </div>
    <div>
      <typed-link
        :to="{
          name: 'index'
        }"
      >
        Home
      </typed-link>
      <typed-link
        :to="{
          name: 'about'
        }"
      >
        About
      </typed-link>
    </div>
    {{ $t('welcome') }}
    <NuxtPage />
  </div>
</template>

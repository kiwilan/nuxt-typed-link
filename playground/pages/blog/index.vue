<script lang="ts" setup></script>

<template>
  <div>
    Blog
    <nuxt-link
      :to="{
        name: 'blog-slug',
        params: {
          slug: 'example'
        }
      }"
    >
      Example
    </nuxt-link>
  </div>
</template>

<style scoped></style>

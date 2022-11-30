<script lang="ts" setup>
//
</script>

<template>
  <div>
    Home
    <div>
      <typed-link
        :to="{
          name: 'blog',
        }"
      >
        Blog
      </typed-link>
      <typed-link
        :to="{
          name: 'blog-slug',
          params: { slug: 'hello-world' }
        }"
      >
        Blog
      </typed-link>
    </div>
  </div>
</template>

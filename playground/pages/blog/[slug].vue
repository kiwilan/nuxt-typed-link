<script lang="ts" setup>import { useRoute } from '#app'

const { params } = useRoute()
</script>

<template>
  <div>
    Blog {{ params.slug }}
  </div>
</template>

<style scoped></style>

<template>
	<div>
      <CoreNetworkStatus />
        <NuxtPage />
	</div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
</script>


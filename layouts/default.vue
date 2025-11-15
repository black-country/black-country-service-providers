<template>
	<div>
      <CoreNetworkStatus />
      <NuxtPage />
	</div>
</template>

<script setup lang="ts">
import CoreNetworkStatus from "@/components/Core/NetworkStatus.vue"
definePageMeta({
  middleware: 'auth'
})
</script>


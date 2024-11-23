<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead({
  title: t('app_name'),
})

</script>

<template>
  <main class="flex flex-col sm:flex-row">
    <div class="w-full flex-grow">
      <AdminHeader />

      <!-- main content -->
      <div class="px-6 py-6">
        <slot />
      </div>
    </div>
  </main>
</template>

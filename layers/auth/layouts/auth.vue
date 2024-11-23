<script lang="ts" setup>
//
</script>

<template>
  <div class="h-screen flex items-center justify-center w-full">
    <div class="lg:w-[400px]">
      <Logo class="flex justify-center mb-1" />
      <div class="flex items-center justify-center mb-5">
        {{ $t('app_name') }}
      </div>
      <div class="bg-white rounded-xl shadow-md">
        <slot />
      </div>
    </div>
  </div>
</template>

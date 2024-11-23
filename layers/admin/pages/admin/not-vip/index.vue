<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
const isLoading = ref(true)
const errorMessage = ref<string | null>(null)

onMounted(async () => {
  try {
    // Dummy user ID for Bhaktiaji Ilham Mabruri
    if (!auth.user)
      await auth.login('97')

    isLoading.value = false
  }
  catch (error) {
    errorMessage.value = 'Failed to load user data. Please try again.'
    isLoading.value = false
    console.error(error)
  }
})

definePageMeta({
  layout: 'admin',
  middleware: 'auth',
})
</script>

<template>
  <div>
    <div class="mb-5">
      <nuxt-link class="font-semibold text-2xl" to="/">
        Not VIP
      </nuxt-link>
      <div class="text-gray-500">
        Profile Status
      </div>
    </div>

    <VCard
      icon="solar:forbidden-bold-duotone"
      icon-class="w-[70px] h-[70px] text-red-500"
      class="mb-5" header-class="border-none text-center"
    >
      <div v-if="isLoading" class="text-center">
        <p>Loading user data...</p>
      </div>
      <div v-else-if="errorMessage" class="text-center text-red-500">
        <p>{{ errorMessage }}</p>
      </div>
      <div v-else-if="auth.user" class="overflow-x-auto text-center justify-center items-center">
        <p class="text-sm md:text-xl lg:text-2xl xl:text-3xl font-bold text-red-500">
          FORBIDDEN, YOU'RE NOT A VIP! <br>
          <span class="text-xs md:text-sm lg:text-base xl:text-lg font-medium">
            Only users w/ ID Number 5 and above can enter!
          </span>
        </p>
      </div>
    </VCard>
  </div>
</template>

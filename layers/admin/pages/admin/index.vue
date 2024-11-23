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
        Dashboard
      </nuxt-link>
      <div class="text-gray-500">
        Profile Summary
      </div>
    </div>

    <VCard title="Bio" class="mb-5" header-class="bg-[#55335d] text-white rounded-t-lg">
      <div v-if="isLoading" class="text-center">
        <p>Loading user data...</p>
      </div>
      <div v-else-if="errorMessage" class="text-center text-red-500">
        <p>{{ errorMessage }}</p>
      </div>
      <div v-else-if="auth.user" class="overflow-x-auto">
        <table class="table-auto w-full border-collapse border border-gray-200">
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-semibold w-1/3 sm:w-1/4">
                Name
              </td>
              <td class="border border-gray-300 px-4 py-2">
                {{ auth.user?.name }}
              </td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-semibold w-1/3 sm:w-1/4">
                Username
              </td>
              <td class="border border-gray-300 px-4 py-2">
                {{ auth.user?.username }}
              </td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-semibold w-1/3 sm:w-1/4">
                Email
              </td>
              <td class="border border-gray-300 px-4 py-2">
                {{ auth.user?.email }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </VCard>

    <VCard title="Contact" class="mb-5" header-class="bg-[#55335d] text-white rounded-t-lg">
      <div v-if="isLoading" class="text-center">
        <p>Loading user data...</p>
      </div>
      <div v-else-if="errorMessage" class="text-center text-red-500">
        <p>{{ errorMessage }}</p>
      </div>
      <div v-else-if="auth.user" class="overflow-x-auto">
        <table class="table-auto w-full border-collapse border border-gray-200">
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-semibold w-1/3 sm:w-1/4">
                Address
              </td>
              <td class="border border-gray-300 px-4 py-2">
                {{ auth.user?.address?.street || 'N/A' }},
                {{ auth.user?.address?.suite || 'N/A' }},
                {{ auth.user?.address?.city || 'N/A' }} -
                {{ auth.user?.address?.zipcode || 'N/A' }}
                <br>
                <span class="text-sm text-gray-500">
                  Latitude: {{ auth.user?.address?.geo?.lat || 'N/A' }},
                  Longitude: {{ auth.user?.address?.geo?.lng || 'N/A' }}
                </span>
              </td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-semibold w-1/3 sm:w-1/4">
                Phone
              </td>
              <td class="border border-gray-300 px-4 py-2">
                {{ auth.user?.phone }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </VCard>

    <VCard title="Organization" class="mb-5" header-class="bg-[#55335d] text-white rounded-t-lg">
      <div v-if="isLoading" class="text-center">
        <p>Loading user data...</p>
      </div>
      <div v-else-if="errorMessage" class="text-center text-red-500">
        <p>{{ errorMessage }}</p>
      </div>
      <div v-else-if="auth.user" class="overflow-x-auto">
        <table class="table-auto w-full border-collapse border border-gray-200">
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-semibold w-1/3 sm:w-1/4">
                Company
              </td>
              <td class="border border-gray-300 px-4 py-2">
                {{ auth.user?.company?.name || 'N/A' }}
              </td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-semibold w-1/3 sm:w-1/4">
                Catch Phrase
              </td>
              <td class="border border-gray-300 px-4 py-2">
                {{ auth.user?.company?.catchPhrase || 'N/A' }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </VCard>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

defineEmits(['menu:click'])

const auth = useAuthStore()
const router = useRouter()
const route = useRoute()

function logout() {
  auth.logout()
  router.push('/auth/login')
}

const isOpen = ref(false)
function toggleSidebar() {
  isOpen.value = !isOpen.value
}
const menus = ref([
  {
    icon: 'ri:dashboard-line',
    text: 'Dashboard',
    to: '/admin',
  },
  {
    text: 'Open VIP',
    icon: 'fluent:premium-person-16-filled',
    to: '/admin/vip',
  },
])
</script>

<template>
  <header class="bg-white border-b border-gray-200">
    <div class="pr-6 pl-3 py-3 flex gap-2 items-center justify-between">
      <!-- toggle sidebar on mobile only -->
      <button
        class="flex-shrink-0 px-4 py-2 rounded inline sm:hidden"
        @click="toggleSidebar"
      >
        <Icon name="ri:menu-line" class="w-5 h-5" />
      </button>
      <!-- app title -->
      <div class="relative sm:w-2/12">
        <div
          class="
        flex
        justify-between
        gap-2
        items-center
        px-4
        border-b border-gray-200
        -mx-2
        sm:border-none
      "
        >
          <nuxt-link
            to="/admin"
            class="
          py-2
          w-full
          font-bold
          text-lg text-indigo-500
          flex
        "
          >
            <Logo class="flex justify-center" />
          </nuxt-link>
          <button
            class="i-ri-close-line w-6 h-6 text hidden sm:hidden"
            @click="isOpen = false"
          />
        </div>
      </div>
      <!-- navigation menu -->
      <nav class="hidden sm:flex flex-1 justify-center gap-6">
        <nuxt-link
          v-for="menu in menus"
          :key="menu.to"
          :to="menu.to"
          :class="[
            route.path === menu.to ? 'text-indigo-600 font-bold border-b-2 border-indigo-500' : '',
          ]"
        >
          <Icon :name="menu.icon" class="w-5 h-5 mr-1" />
          {{ menu.text }}
        </nuxt-link>
      </nav>

      <VDropdown right>
        <template #activator>
          <VDropdownButton
            v-slot="{ open }"
            as="button"
            type="button"
            class="
              text-gray-600
              hover:bg-gray-200
              hover:text-indigo-500
              px-2
              py-2
              rounded
            "
          >
            <span
              :class="[open ? 'text-indigo-500' : '']"
              class="flex items-center gap-2"
            >
              <Icon name="ri:user-line" class="w-5 h-5" />
              <span class="hidden sm:inline"> {{ auth.user?.name }} </span>
              <Icon
                name="ri:arrow-down-s-line"
                class="i-ri-arrow-down-s-line w-5 h-5"
              />
            </span>
          </VDropdownButton>
        </template>

        <VDropdownItem @click="logout">
          Logout
        </VDropdownItem>
      </VDropdown>

      <div
        v-if="isOpen"
        class="fixed inset-0 bg-white z-50 sm:hidden"
      >
        <div class="p-4">
          <button class="text-gray-600" @click="toggleSidebar">
            <Icon name="ri:close-line" class="w-6 h-6" />
          </button>
          <nav class="mt-4">
            <nuxt-link
              v-for="menu in menus"
              :key="menu.to"
              :to="menu.to"
              exact-active-class="active"
              class="block py-2 text-gray-700 hover:text-indigo-500"
              :class="[route.path === menu.to ? 'text-indigo-600 font-bold border-b-2 border-indigo-500' : '']"
            >
              <Icon :name="menu.icon" class="w-5 h-5 mr-2" />
              {{ menu.text }}
            </nuxt-link>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

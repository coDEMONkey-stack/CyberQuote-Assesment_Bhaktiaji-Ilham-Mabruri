<script lang="ts" setup>
import { useField, useForm } from 'vee-validate'
import { object, string } from 'yup'
import { useAuthStore } from '@/stores/auth'

useHead({
  title: 'Login',
})

definePageMeta({
  layout: 'auth',
  middleware: 'guest',
})

const { handleSubmit } = useForm({

  validationSchema: object({
    userID: string()
      .matches(/^\d+$/, 'Only numbers are allowed. Please remove any letters or special characters.')
      .required('User ID is required')
      .label('User ID'),

  }),
})

const auth = useAuthStore()
const router = useRouter()
const error = ref()
const route = useRoute()

const { store } = useAuthStorage()

const { value: userID, errorMessage: userIDError, validate } = useField('userID', undefined, {
  initialValue: '',
})

const isLoginDisabled = computed(() => {
  return !/^\d+$/.test(userID.value)
})
const onSubmit = handleSubmit(async (values) => {
  error.value = ''
  try {
    const res = await $fetch('/api/auth/login', {
      method: 'post',
      body: values,
    })

    const token = res.token
    const user = res.user

    store(token, user)

    auth.user = user
    auth.loggedIn = true

    router.push((route.query as any).next || '/admin')
  }
  catch (e: any) {
    error.value = e.data.error
  }
  setTimeout(() => {
    error.value = null
  }, 3500)
})
</script>

<template>
  <div class="flex items-center justify-center h-full">
    <form
      class="rounded-lg px-10 py-8 w-full max-w-md mx-auto"
      @submit="onSubmit"
    >
      <AuthHeader title="Login" subtitle="Please enter your credentials" />

      <div v-if="error" class="bg-error-600 text-white text-sm px-4 py-3 rounded-lg mb-4">
        {{ error }}
      </div>
      <!-- input userID 97 as DUMMY_USER: bhaktiaji ilham -->
      <VUInput
        v-model="userID"
        hint="dummy: 97"
        wrapper-class="mb-1"
        name="userID"
        :label="`User ID${userID ? `: ${userID}` : ''}`"
        placeholder="Input User ID"
        :error-message="userIDError"
        @input="validate()"
      />

      <div v-if="userIDError && userID" class="text-error-600 text-sm mb-4">
        {{ userIDError }}
      </div>

      <div class="mb-5 flex gap-2 justify-between items-center">
        <label class="flex gap-2 items-center text-sm">
          <input
            type="checkbox"
            class="w-4 h-4 rounded text-primary-500 focus:ring-primary-500 transition duration-300"
          >
          Remember me
        </label>
      </div>

      <VButton type="submit" color="primary" block class="mb-5" :disabled="isLoginDisabled">
        Login
      </VButton>
    </form>
  </div>
</template>

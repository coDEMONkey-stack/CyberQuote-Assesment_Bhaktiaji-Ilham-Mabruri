<script setup>
import { computed, ref } from 'vue'
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

const validationType = ref('1') // default: Only numbers are allowed | type 2: Only letters are allowed

const validationSchema = computed(() => {
  if (validationType.value === '1') {
    return object({
      userID: string()
        .matches(/^\d+$/, 'Only numbers are allowed. Please remove any letters or special characters.')
        .required('User ID is required')
        .label('User ID'),
    })
  }
  else if (validationType.value === '2') {
    return object({
      userID: string()
        .matches(/^[A-Za-z]+$/, 'Only letters are allowed. Please remove any numbers or special characters.')
        .required('User ID is required')
        .label('User ID'),
    })
  }
  return object()
})

const { handleSubmit } = useForm({
  validationSchema,
})

const auth = useAuthStore()
const router = useRouter()
const error = ref(null)
const route = useRoute()

const { store } = useAuthStorage()

const { value: userID, errorMessage: userIDError, validate } = useField('userID', undefined, {
  initialValue: '',
})

const isLoginDisabled = computed(() => {
  if (validationType.value === '1')
    return !/^\d+$/.test(userID.value)
  else if (validationType.value === '2')
    return !/^[A-Za-z]+$/.test(userID.value)

  return true
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

    router.push(route.query?.next || '/admin')
  }
  catch (e) {
    error.value = e?.data?.error || 'An unknown error occurred'
  }
  setTimeout(() => {
    error.value = null
  }, 3500)
})
</script>

<template>
  <div class="flex items-center justify-center h-full">
    <form class="rounded-lg px-10 py-8 w-full max-w-md mx-auto" @submit="onSubmit">
      <AuthHeader title="Login" subtitle="Please enter your credentials" />

      <div v-if="error" class="bg-error-600 text-white text-sm px-4 py-3 rounded-lg mb-4">
        {{ error }}
      </div>

      <!-- input userID 97 as DUMMY_USER: bhaktiaji ilham -->
      <!-- validation type refers to letters/numbers only that are allowed -->
      <VUInput
        v-model="userID"
        hint="dummy: 97"
        :validation-type="validationType"
        wrapper-class="mb-1"
        name="userID"
        :label="`User ID${userID ? `: ${userID}` : ''}`"
        placeholder="Input User ID"
        :error-message="userIDError"
        @input="validate(userID)"
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

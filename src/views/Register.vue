
<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="flex-shrink-0">
        <h1 class="text-5xl font-bold leading-none text-gray-600">Survey
        </h1>
        <span class="text-xl text-gray-600">Made Easy</span>
      </div>
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register for free</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <Alert v-if="Object.keys(errors).length" class="flex-col items-stretch text-sm">
        <div v-for="(field, i) of Object.keys(errors)" :keys="i">
          <div v-for="(error, ind) of errors[field] || []" :keys="ind">
           * {{ error }}
          </div>
        </div>

      </Alert>
      <form class="space-y-6" @submit="register">
        <div>
          <div class="mt-2">
            <input id="name" name="name" type="text" autocomplete="name" required v-model="user.name"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
            placeholder="Full Name"/>
          </div>
        </div>

        <div>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" required v-model="user.email" 
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
            placeholder="Email Address"/>
          </div>
        </div>

        <div>
          <div class="mt-2">
            <input id="password" name="password" type="password"  required v-model="user.password"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
            placeholder="Password"/>
          </div>
        </div>

        <div>
          <div class="mt-2">
            <input id="password_confirmation" name="password_confirmation" type="password"  required v-model="user.password_confirmation"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
            placeholder="Confirm Password"/>
          </div>
        </div>


        <div>
          <button 
          :disabled="loading"
          type="submit" class="flex w-full justify-center rounded-md 
          bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 
          text-white shadow-sm hover:bg-indigo-500 focus-visible:outline 
          focus-visible:outline-2 focus-visible:outline-offset-2 
          focus-visible:outline-indigo-600"
          :class="{'cursor-not-allowed': loading, 'hover:bg-indigo-500': loading}"
          >
            <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sign up
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Already a member?
        {{ ' ' }}
        <router-link :to="{name: 'Login'}" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Login to your account
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import store from "../store";
import {useRouter} from "vue-router";
import Alert from '../components/Alert.vue';

const router = useRouter();
const user = {
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
};
const loading = ref(false);
const errors = ref({});

function register(ev) {
  ev.preventDefault();

  loading.value = true;
  store
    .dispatch('register', user)
    .then((res) => {
      loading.value = false;
        router.push({
          name: 'Dashboard'
        })
    })
    .catch(err => {
      loading.value = false;
      if (err.response.status === 422) {
        errors.value = err.response.data.errors
      }
    })
}

</script>

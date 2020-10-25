<template>
  <div class="h-screen bg-teal-300">
    <div class="w-full flex flex-col items-center justify-center">
      <div class="mt-20 w-10/12">
        <breadcrumb :links="links"></breadcrumb>
      </div>

      <div class="mt-2 w-10/12 bg-white shadow-md p-2">
        <div class="text-3xl font-semibold text-center mt-1">
          Register account
        </div>
        <div class="w-full p-3">
          <input
            type="text"
            name="email"
            class="w-full h-10 px-3 py-0 mb-5 bg-white border border-gray-300 text-lg rounded-sm focus:outline-none"
            placeholder="Email"
          />

          <input
            type="Password"
            name="Password"
            class="w-full h-10 px-3 py-0 mb-5 text-lg bg-white border border-gray-300 rounded-sm focus:outline-none"
            placeholder="Password"
          />

          <input
            type="Password"
            name="ConfirmPassword"
            class="w-full h-10 px-3 py-0 mb-5 text-lg bg-white border border-gray-300 rounded-sm focus:outline-none"
            placeholder="Confirm password"
          />
          <button
            class="w-full py-1 mb-2 bg-green-500 text-white text-xl shadow-sm focus:outline-none"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'anonymous',
  data() {
    return {
      links: [
        {
          name: 'Login',
          to: '/login',
          disabled: false,
        },
        {
          name: 'Register',
          to: '/register',
          disabled: true,
        },
      ],
    }
  },
}
</script>

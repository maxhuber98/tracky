<template>
  <div class="h-screen bg-teal-300">
    <div class="w-full flex justify-center">
      <div class="mt-20 w-10/12 bg-white shadow-md p-2">
        <div class="text-3xl font-semibold text-center mt-1">Please login</div>
        <div class="w-full p-3">
          <input
            type="text"
            name="username"
            class="w-full h-10 px-3 py-0 mb-5 bg-white border border-gray-300 text-lg rounded-sm focus:outline-none"
            placeholder="Username"
          />

          <input
            type="Password"
            name="Password"
            class="w-full h-10 px-3 py-0 mb-5 text-lg bg-white border border-gray-300 rounded-sm focus:outline-none"
            placeholder="Password"
          />
          <button
            class="w-full py-1 mb-2 bg-green-500 text-white text-xl shadow-sm focus:outline-none"
          >
            Login
          </button>

          <nuxt-link
            to="/register"
            class="w-full block text-center py-1 bg-blue-500 text-white text-xl shadow-sm focus:outline-none"
          >
            Or register here
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'anonymous',
}
</script>

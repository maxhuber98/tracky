<template>
  <div class="bg-blue-500 shadow-md">
    <button
      class="hamburger hamburger--elastic focus:outline-none"
      :class="{ 'is-active': isActive }"
      type="button"
      aria-label="Menu"
      aria-controls="navigation"
      @click="toggleActive"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
    <nav id="navigation" :class="{ visible: isActive }">
      <ul class="ml-5 text-white text-xl font-semibold">
        <li><a href="#">Home</a></li>
        <li><a href="#">Add workout</a></li>
        <li><a href="#">Settings</a></li>
        <li><nuxt-link to="/login">Log out</nuxt-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive
    },
  },
}
</script>

<style scoped>
#navigation {
  transition: all 0.3s ease-in-out;
  height: 0;
  overflow: hidden;
}

.visible {
  height: 8rem !important;
}
</style>

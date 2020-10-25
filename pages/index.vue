<template>
  <div class="relative flex-auto">
    <nuxt-link
      class="absolute w-16 h-16 right-0 bottom-0 mb-3 mr-2 shadow-xl flex items-center justify-center bg-green-500 rounded-full text-xl text-white focus:outline-none active:shadow-none transition duration-300 ease-in-out"
      to="addworkout"
    >
      <font-awesome-icon icon="plus"></font-awesome-icon>
    </nuxt-link>

    <h2 class="w-11/12 m-auto text-3xl font-semibold">Workouts</h2>
    <div class="flex justify-center">
      <div
        class="w-11/12 h-32 mt-1 px-3 py-2 bg-teal-300 rounded-sm shadow-md"
        v-for="(item, n) in workouts"
        :key="n"
      >
        <div class="flex justify-between">
          <span>
            {{ item.name }}
          </span>
          <span class="text-gray-600 text-sm">
            {{ $moment.unix(item.date).format('DD/MM/yyyy') }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      workouts: [
        {
          name: 'Workout 1',
          date: 1601985600,
        },
      ],
    }
  },
}
</script>

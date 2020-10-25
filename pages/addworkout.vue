<template>
  <div class="flex flex-col">
    <div class="w-full flex flex-1 flex-col">
      <div class="w-full px-5 pt-3 pb-6 bg-blue-500 rounded-b-xl shadow-lg">
        <div class="text-white text-1.2r flex justify-between">
          <n-link to="/">
            <font-awesome-icon icon="arrow-left"></font-awesome-icon>
          </n-link>

          <button class="font-semibold focus:outline-none">Save</button>
        </div>

        <h1 class="text-2xl font-bold">Add exercise</h1>

        <div class="mb-3 w-full relative">
          <div class="relative">
            <input
              v-model="name"
              type="text"
              @input="onSearchInput"
              class="w-full h-10 px-3 py-0 mb-1 bg-white border border-gray-300 text-lg rounded-sm focus:outline-none"
              placeholder="Exercise"
              required
            />

            <button
              v-if="showAutoComplete && searchExercise.length > 0"
              class="absolute right-0 top-0 mr-2 mt-2 bg-gray-300 px-2 rounded-sm opacity-75 focus:outline-none"
              @click="showAutoComplete = false"
            >
              <font-awesome-icon icon="times"></font-awesome-icon>
            </button>
          </div>

          <ul
            v-if="showAutoComplete && searchExercise.length > 0"
            class="absolute bg-white w-full max-h-25r overflow-scroll px-2 py-1 shadow-md rounded-sm z-50"
          >
            <li
              v-for="(item, i) in searchExercise"
              :key="i"
              class="py-1"
              @click="setByAutoComplete(item)"
            >
              {{ item }}
            </li>
          </ul>
        </div>

        <div class="w-full flex flex-col">
          <ul class="mb-4 flex flex-row">
            <li class="w-20 mt-2">
              <label class="font-bold">Weight</label>
            </li>
            <li>
              <input
                v-model="weight"
                type="text"
                class="py-2 px-2 rounded-sm w-24 mr-2 text-black focus:outline-none"
                placeholder="30"
                required
              />
            </li>
            <li>
              <select
                v-model="units"
                class="py-2 px-2 rounded-sm bg-white text-black focus:outline-none"
              >
                <option value="0">kg</option>
                <option value="1">lbs</option>
              </select>
            </li>
          </ul>

          <ul class="mb-4 flex flex-row">
            <li class="w-20 mt-2">
              <label class="font-bold">Reps</label>
            </li>
            <li>
              <input
                v-model="reps"
                type="text"
                class="py-2 px-2 rounded-sm w-24 text-black focus:outline-none"
                placeholder="8"
                required
              />
            </li>
          </ul>

          <ul class="flex flex-row">
            <li class="w-10/12 mr-1">
              <button
                class="w-full py-2 bg-green-500 rounded-sm font-bold text-white focus:outline-none active:shadow-none"
                @click="addExercise"
              >
                Add <font-awesome-icon icon="plus"></font-awesome-icon>
              </button>
            </li>
            <li class="w-2/12">
              <button
                class="w-full py-2 bg-red-500 rounded-sm font-bold text-white focus:outline-none active:shadow-none"
                @click="clearForm"
              >
                <font-awesome-icon icon="trash-alt"></font-awesome-icon>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="overflow-y-scroll pb-4 flex-auto" v-if="exercises.length > 0">
        <div
          v-for="(item, i) in exercises.slice().reverse()"
          :key="i"
          class="w-11/12 px-3 py-2 mt-4 m-auto bg-teal-600 text-white rounded-md shadow-lg relative"
        >
          <p class="font-bold">{{ item.name }}:</p>
          <ul class="flex flex-row" v-for="(set, i) in item.sets" :key="i">
            <li class="mr-2 font-bold">
              {{ set.weight }}{{ set.units | unitsToDisplay }}
            </li>
            <li class="font-bold mr-1" v-for="(rep, i) in set.reps" :key="i">
              {{ rep }}x
            </li>
          </ul>
          <div
            class="absolute bottom-0 right-0 mr-2 mb-1 text-red-500"
            @click="showDeleteModal(item.name)"
          >
            <font-awesome-icon icon="trash-alt"></font-awesome-icon>
          </div>
        </div>
      </div>

      <div v-if="deleteModal">
        <div
          class="fixed top-0 w-full h-screen z-10 bg-gray-800 opacity-50 transition duration-300 ease-in-out"
        ></div>

        <div
          class="w-10/12 py-2 px-5 pb-6 fixed top-50 left-50 right-50 z-30 rounded-md shadow-lg text-white bg-blue-900 transform translate-x-m50 translate-y-m50"
          v-click-outside="closeDeleteModal"
        >
          <span class="text-2xl"
            >Are you sure you want to delete this item?</span
          >
          <ul class="w-full mt-3 flex flex-row justify-center items-center">
            <li>
              <button
                class="bg-red-500 py-2 mr-10 px-5 font-semibold rounded-sm shadow-lg focus:outline-none active:shadow-none"
                @click="deleteExercise"
              >
                Yes
              </button>
            </li>
            <li>
              <button
                class="bg-blue-500 py-2 px-5 font-semibold rounded-sm shadow-lg focus:outline-none active:shadow-none"
                @click="closeDeleteModal"
              >
                No
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deleteModal: false,
      name: null,
      weight: null,
      units: 0,
      reps: null,
      exercises: [],
      showAutoComplete: false,
    }
  },
  computed: {
    searchExercise() {
      const autocompleteItems = [
        'Squat',
        'Leg press',
        'Romanian deadlift',
        'Hanging leg raises',
        'Leg extension',
        'Scull crushers',
        'Close grip bench press',
        'Cable fly',
        'Dumbbell fly',
        'Pec dec',
        'Standing calve raises',
        'Seated calve extension',
        'Bench press',
        'Incline bench press',
        'Deadlift',
        'Shoulder press',
      ]

      return autocompleteItems.filter((option) => {
        return option
          .toString()
          .toLowerCase()
          .includes(this.name?.toLowerCase() || '')
      })
    },
  },
  methods: {
    addExercise() {
      let existingSet
      let existingExercise = this.exercises.find((x) => x.name === this.name)

      if (this.name == null || this.reps == null || this.weight == null) return

      if (existingExercise == null) {
        const newExercise = {
          name: this.name,
          sets: [],
        }

        this.exercises.push(newExercise)
        existingExercise = this.exercises.find((x) => x.name === this.name)
      }

      existingSet = existingExercise.sets.find(
        (x) => x.weight === this.weight && x.units === this.units
      )

      if (existingSet == null) {
        const newSet = {
          weight: this.weight,
          units: this.units,
          reps: [],
        }

        existingExercise.sets.push(newSet)
        existingSet = newSet
      }

      existingSet.reps.push(this.reps)
    },
    showDeleteModal(name) {
      this.selectedExercise = name
      this.deleteModal = true
    },
    closeDeleteModal() {
      this.deleteModal = false
    },
    deleteExercise() {
      const existingExercise = this.exercises.find(
        (x) => x.name === this.selectedExercise
      )

      if (existingExercise != null) {
        const index = this.exercises.indexOf(existingExercise)

        this.exercises.splice(index, 1)
      }

      this.closeDeleteModal()
    },
    clearForm() {
      this.name = null
      this.weight = null
      this.reps = null
    },
    onSearchInput() {
      this.showAutoComplete = this.name.length > 0 && this.name !== ' '
    },
    setByAutoComplete(name) {
      this.name = name
      this.showAutoComplete = false
    },
  },
  filters: {
    unitsToDisplay(unit) {
      if (unit === 0) {
        return 'kg'
      } else if (unit === 1) {
        return 'lbs'
      }
    },
  },
}
</script>

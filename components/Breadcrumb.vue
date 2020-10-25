<template>
  <div>
    <ul class="flex flex-row">
      <li v-for="(i, n) in links" :key="n">
        <nuxt-link class="text-blue-600" :to="i.to" v-if="!i.disabled">{{
          i.name
        }}</nuxt-link>
        <span v-else>{{ i.name }}</span>
        <span v-if="n < links.length - 1">/&nbsp;</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    links: Array,
  },
}
</script>

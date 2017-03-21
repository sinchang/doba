<template>
  <div>
    <div class="wrap">
      <router-link :to="`/celebrity/${cast.id}`">
        <img :src="cast.avatars.medium">
        <div>{{cast.name}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Cast',
    props: {
      cast: {
        type: Object,
        required: true
      }
    }
  }
</script>

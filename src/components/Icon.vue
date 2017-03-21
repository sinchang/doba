<template>
  <div>
    <svg :class="[name, 'icon']">
      <use :xlink:href="'#' + name"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'icon',
  props: {
    name: {
      type: String
    }
  }
}
</script>

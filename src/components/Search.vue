<template>
  <div>
    <div :class="['search-bar', {'focused': focused}]">
      <div class="search-icon">
        <Icon name="search"></Icon>
      </div>
      <input class="search-input"
             type="text"
             @keyup.enter="SEARCH"
             @focus="focused=true"
             @blur="focused=false"
             placeholder="搜索..." />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Icon from './Icon'

export default {
  name: 'search',
  data() {
    return {
      focused: false
    }
  },
  methods: {
    ...mapMutations([
      'SEARCH',
    ])
  },
  components: {
    Icon
  }
}
</script>

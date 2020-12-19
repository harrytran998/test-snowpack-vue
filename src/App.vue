<template>
  <div class="">
    <h1 class="text-red-500">XXX {{ state.message }}</h1>
  </div>
  <FooVl />
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import FooVl from '@app/components/FooVL.vue'

interface State {
  message: string
}

export default defineComponent({
  components: {
    FooVl,
  },
  setup() {
    const state: State = reactive({
      message: 'Learn Vue',
    })

    return {
      state,
    }
  },
})
</script>

<template>
  <h1>Sinh năm 1988 thì năm nay bao nhiêu tuổi?</h1>
  <div>
    <input type="text" v-model.number="inputAge" @keyup.enter="checkResult" />
    <button @click.prevent="checkResult">Kiểm tra</button>
  </div>
  <div class="flex place-content-center">
    <h2>{{ messageResult }}</h2>
    <video
      v-if="flagResult"
      class="w-full h-full"
      src="https://media.tenor.co/images/df459a6dc6b915ff8a08384ce4bf4e6d/tenor.gif?t=AAW4Kb4RjUcKSp6YHgMMiA&itemid=19253588"
      autoplay
      loop
    />
  </div>
  <FooVl />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import FooVl from '@app/components/FooVL.vue'

interface State {
  message: string
}

export default defineComponent({
  components: {
    FooVl,
  },
  setup() {
    const inputAge = ref('')
    const messageResult = ref('')
    const flagResult = ref(false)
    function checkResult() {
      const binZAge = 2020 - 1988
      if (+inputAge.value === binZAge) {
        flagResult.value = true
        messageResult.value = 'Amazing, good job em 👏'
      } else {
        flagResult.value = false
        messageResult.value = 'Em tính kiểu này thì chết anh rồi ☹️'
      }
    }
    return {
      inputAge,
      flagResult,
      checkResult,
      messageResult,
    }
  },
})
</script>

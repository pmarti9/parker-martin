<script>
import { NCard } from 'naive-ui'
import {defineComponent} from "vue";
export default defineComponent({
  components: {
    NCard
  },
  name: "ProjectCard"
})
</script>

<template>
  <div>
  <n-card title="Project">
    <template #cover>
      <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" alt="text">
    </template>
    Card Content - project details go here
  </n-card>
  </div>
</template>

<style scoped>
.n-card {
  max-width: 300px;
}
</style>
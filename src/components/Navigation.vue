<script>
import {RouterLink, RouterView} from "vue-router";
import Footer from "@/components/Footer.vue";
import {NDivider} from 'naive-ui'
import {defineComponent} from "vue";
export default defineComponent({
  name: "Navigation",
  components: {NDivider, Footer, RouterLink, RouterView}
})
</script>

<template>
  <header class="bg">
    <div class="wrapper">


      <n-space class="space" justify="space-around" size="large">
        <n-tabs justify-content="space-evenly" type="line">
          <n-tab-pane name="Home" tab="Home" size="large"><RouterLink to="/">Home</RouterLink> </n-tab-pane> |
          <n-tab-pane name="Projects" tab="Projects" size="large"><RouterLink to="/projects">Projects</RouterLink> </n-tab-pane> |
          <n-tab-pane name="Contact" tab="Contact" size="large"><RouterLink to="/contact">Contact</RouterLink></n-tab-pane>
        </n-tabs>
      </n-space>
    </div>
    <n-divider />
  </header>


  <RouterView />
  <Footer />
</template>

<style scoped>
.bg {
  justify-content: space-around;
  position: fixed;
  left: 0;
  right: 0;
  margin-bottom: 25rem;
  text-align: center;
}


</style>
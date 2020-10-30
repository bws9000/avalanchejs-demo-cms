<template>
  <div>
    <Header/>
  <main class="main">
    <slot/>
  </main>
    <Footer/>
  </div>
</template>

<script>

import Header from "@/components/header"
import Footer from "@/components/footer"

export default {
  components: {
    Header,
    Footer
  },
  mounted(){},
  methods: {}
};
</script>

<style>
/* */
</style>

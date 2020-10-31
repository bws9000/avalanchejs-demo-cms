<template>
  <DashLayout>
    <div class="content">
      User Details
    </div>
  </DashLayout>
</template>
<script>

import DashLayout from "@/layouts/dashLayout";

export default {
  name: 'UserDetails',
  components: {
    DashLayout
  },
  data() {
    return {}
  },
  methods: {},
  beforeMount () {},
  created(){
    this.$window.scrollTo(0,0);
  }
}
</script>

<style>
/* */
</style>

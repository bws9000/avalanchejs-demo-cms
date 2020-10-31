<template>
  <div>
    <DashHeader/>
  <main class="main">
    <div class="sidebar">
      <div class="inner_bar">
      <nav>
        <ul>
          <li><router-link to="/dash/user">users</router-link></li>
        </ul>
      </nav>
      <aside>
        <!-- -->
      </aside>
      </div>
    </div>
      <slot/>
  </main>
    <DashFooter/>
  </div>
</template>

<script>

import DashHeader from "@/components/dash/header"
import DashFooter from "@/components/dash/footer"

export default {
  components: {
    DashHeader,
    DashFooter
  },
  mounted(){},
  methods: {

  }
};
</script>

<style scoped>
  .inner_bar{
    border: 1px solid #999;
  }
  .inner_bar ul{
    padding-left:10px;
  }
</style>

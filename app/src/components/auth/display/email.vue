<template>
  <div>

    <div v-if="this.$store.state.loginEmail === '' &&
    this.$store.state.magicLoggedInStatus">
      <SmallSpinner />
    </div>

    <div v-else>
      <span v-if="this.$store.state.magicLoggedInStatus">
          {{this.$store.state.loginEmail}} | <router-link to="/logout">logout</router-link>
      </span>
    </div>

  </div>
</template>

<script>
import SmallSpinner from '@/components/ui/smallSpinner'
export default {
  name: 'emailDisplay',
  components:{
    SmallSpinner
  }
}
</script>
<style scoped>
/* */
</style>

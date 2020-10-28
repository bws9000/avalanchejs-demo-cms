<template>
  <MainLayout></MainLayout>
</template>
<script>
import {getMagic,logout} from "@/auth/magic/magic";
import MainLayout from "@/layouts/mainLayout";
export default {
  name: 'logout',
  m:{},
  components: {MainLayout},
  data: function () {
    return {}
  },
  methods: {
    magic() {
      this.m = getMagic();
      this.logout();
    },
    logout(){
      logout(this.m).then(()=>{
        alert(this.$store.state.loginEmail + ' logged out');
        this.$store.commit('logout');
        this.$router.push('/');
      })
    }
  },
  beforeMount () {
    this.magic();
  }
}
</script>

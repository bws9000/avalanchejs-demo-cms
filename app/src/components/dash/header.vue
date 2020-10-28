<template>
  <header>
    <h1>avalanchejs api explorer</h1>
    <nav>
      <ul>
        <li><a href="/">home</a></li>
      </ul>
    </nav>
    <EmailDisplay />
  </header>
</template>

<script>

import {getMagic,loginStatus,logout} from "@/auth/magic/magic";
import EmailDisplay from "@/components/auth/display/email"

export default {
  name: 'DashHome',
  m:{},
  components: {
    EmailDisplay
  },
  data: function(){
    return {

    }
  },
  methods: {
    logout(){
      logout(this.m).then(()=>{
        alert('logged out');
      })
    },
    magic(){
      if(!this.$store.state.magicLoggedInStatus) {
        this.m = getMagic();
        loginStatus(this.m).then((status) => {
          if(!status){
            this.$router.push('/login')
          }
        })
      }
    }
  },
  beforeMount() {
  }
}
</script>

<style>
/* */
</style>

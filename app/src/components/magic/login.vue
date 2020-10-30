<template>
  <MainLayout>

    <div v-if="!this.loaded">
      <SmallSpinner/>
    </div>
    <div id="magicApp" v-else>
      <MagicForm/>
    </div>

  </MainLayout>
</template>
<script>

import MainLayout from '@/layouts/mainLayout'
import MagicForm from '@/components/magic/form'
import SmallSpinner from '@/components/ui/smallSpinner'
import {getMagic,loginStatus} from "@/auth/magic/magic";

export default {
  name: 'MagicLogin',
  components: {
    MainLayout,
    MagicForm,
    SmallSpinner
  },
  data: function () {
    return {
      loaded: false,
      protectedURL:'/dash',
      m:{},
      loginStatus:false
    }
  },
  methods: {
    async handleLogin(e){
      if(!this.$store.state.magicLoggedInStatus) {
        e.preventDefault();
        const email = new FormData(e.target).get("email");
        if (email) {
          await this.m.auth.loginWithMagicLink({email});
          const isLoggedIn = await this.m.user.isLoggedIn();
          if (isLoggedIn) {
            this.$store.state.magicLoggedInStatus = true;
            this.$store.state.loginEmail = email;
            await this.$router.push(this.protectedURL)
          }
        }
      }
    },
    magic() {
      this.m = getMagic();
      loginStatus(this.m).then((status)=> {
        if (!status) {
          this.m.preload().then(() => {
            this.loaded = true
            this.login();
          })
        }else{
          this.$router.push(this.protectedURL)
        }
      })
    },
    login(){
      loginStatus(this.m).then((status)=>{
        this.$store.state.magicLoggedInStatus = !!status;
      })
    }
  },
  mounted () {
    this.magic();
  }
}
</script>

<style scoped>
#magicApp {
  margin: 20px auto 0;
  background-color: #eee;
  text-align: center;
  width: 300px;
  padding: 27px 18px;
}
</style>

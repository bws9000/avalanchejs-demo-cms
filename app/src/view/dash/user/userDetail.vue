<template>
  <DashLayout>
    <div class="content">
      <h1>{{ this.displayHeader }}</h1>
      <GetWalletForm/>
    </div>
  </DashLayout>
</template>
<script>

import GetWalletForm from '@/components/dash/forms/getWalletForm'
import DashLayout from "@/layouts/dashLayout";
import {getListUsers} from "@/service/api";

export default {
  name: 'UserDetails',
  components: {
    DashLayout,
    GetWalletForm
  },
  data() {
    return {
      userValid:true,
      displayHeader:'User Details',
      username:'',
      users:[]
    }
  },
  methods: {
    listUsers(){
      return getListUsers();
    }
  },
  beforeMount () {},
  mounted(){
    this.listUsers().then((r)=>{
      this.users = r.result.users;
      if(!this.users.includes(this.$route.params.id)){
        this.userValid = false;
        this.displayHeader = 'User Not Found.'
      }
    })
  }
}
</script>

<style>
/* */
</style>

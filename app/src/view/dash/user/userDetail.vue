<template>
  <DashLayout>
    <div class="content">
      <h1>{{ this.$route.params.id }}{{this.displayHeader}}</h1>
      <span class="address">
        default address: <strong>{{this.address}}</strong></span>
        <GetWalletForm/>
    </div>
  </DashLayout>
</template>
<script>

import GetWalletForm from '@/components/dash/forms/getWalletForm'
import DashLayout from "@/layouts/dashLayout";
import {getListUsers,getUserAddress} from "@/service/api";

export default {
  name: 'UserDetails',
  components: {
    DashLayout,
    GetWalletForm
  },
  data() {
    return {
      userValid:true,
      displayHeader:' details',
      address:'',
      users:[]
    }
  },
  methods: {
    listUsers(){
      return getListUsers();
    },
    getAddress(){
      return getUserAddress({
        username:this.$route.params.id
      });
    }
  },
  beforeMount () {},
  mounted(){
    this.listUsers().then((r)=>{
      this.users = r.result.users;
      if(!this.users.includes(this.$route.params.id)){
        this.userValid = false;
        this.displayHeader = 'User Not Found.'
      }else{
        this.getAddress().then((r)=>{
          this.address = r.address;
        });
      }
    })
  }
}
</script>

<style scoped>
.address {
  font-size: 12px;
}
</style>

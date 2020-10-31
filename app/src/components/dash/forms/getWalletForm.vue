<template>
  <div class="userForm">
    <h3>Get Balance:</h3>
    <form @submit="checkForm">
      <ul>
        <li class="gbAddress">
          <input
              type="text"
              v-model="gbAddress"
              required="required"
              placeholder="Key (not wallet address)" />
        </li>
        <li>
          <input
              type="text"
              name="assetID"
              v-model="assetID"
              required="required"
              readonly />
        </li>
        <li>
          <button type="submit">Get Balance</button>
        </li>
      </ul>
    </form>
  </div>
</template>
<script>

import {getWalletBalance} from "@/service/api";

export default {
  name:'getWallet',
  data: function() {
    return {
      assetID:'AVAX',
      gbAddress:''
    }
  },
  methods:{
    checkForm: function (e) {
      e.preventDefault()
      this.getBalance();
    },
    getBalance(){
      getWalletBalance({
            address:this.gbAddress,
            assetID: this.assetID
      }).then((r)=>{
        alert(JSON.stringify(r));
      })
    }
  }
}
</script>
<style scoped>
.gbAddress input{
  width:50%;
}
.userForm ul li{
  display:block;
  padding:3px;
}
button{
  padding:3px;
}
</style>

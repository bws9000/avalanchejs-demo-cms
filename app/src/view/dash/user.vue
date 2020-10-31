<template>
  <DashLayout>
    <div class="content">
      <CrudUser/>
    </div>
  </DashLayout>
</template>
<script>

import CrudUser from "@/components/dash/crud/user/index"
import DashLayout from "@/layouts/dashLayout";
import {
      getCreateUser,
      getListUsers
} from "../../service/api";

export default {
  name: 'UserHome',
  components: {
    DashLayout,
    CrudUser
  },
  data() {
    return {}
  },
  methods: {
    handleCreateUser(username,password){
      this.createUser(username,password);
    },
    handleUpdateUser(){

    },
    handleReadUsers(){
      return this.listUsers();
    },
    handleDeleteUser(){

    },
    listUsers(){
      return getListUsers();
    },
    createUser(username,password) {
      getCreateUser(
            {
              'username':username,
              'password': password
            }
      ).then(res => {
        if(res.result !== undefined) {
          if (!res.result.success) {
            alert('ERROR TRY AGAIN: \n' + JSON.stringify(res));
          } else {
           alert('Successfully added User');
          }
        }else{
          alert('ERROR TRY AGAIN: \n' + JSON.stringify(res));
        }
      })
    }
  },
  beforeMount () {}
}
</script>

<style>
/* */
</style>

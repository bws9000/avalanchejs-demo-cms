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
import {getApi} from "@/service/api";
export default {
  name: 'DashHome',
  components: {
    DashLayout,
    CrudUser
  },
  data() {
    return {
      test: []
    }
  },
  methods: {
    handleCreateUser(username,password){
      this.createUser(username,password);
    },
    createUser(username,password) {
      getApi(
          '/ext/keystore',
          'keystore.createUser',
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

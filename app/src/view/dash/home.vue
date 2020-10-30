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
<<<<<<< HEAD
import {getCreateUser} from "../../service/api";

=======
import {getApi} from "@/service/api";
>>>>>>> 5e9b81490d0151896c9a8d9ea9ac9adf0579640b
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
<<<<<<< HEAD
      getCreateUser(
=======
      getApi(
          '/ext/keystore',
          'keystore.createUser',
>>>>>>> 5e9b81490d0151896c9a8d9ea9ac9adf0579640b
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

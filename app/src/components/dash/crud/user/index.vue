<template>
  <div>
    <h3>User</h3>
    <ul>
      <li><button @click="loadCreate">Create</button></li>
      <li><button @click="loadRead">Read</button></li>
      <!-- <li><button @click="loadUpdate">Update</button></li> -->
      <li><button @click="loadDelete">Delete</button></li>
    </ul>
    <div v-if="createClicked"><CreateUser/></div>
    <div v-if="readClicked"><ReadUser/></div>
    <!-- <div v-if="updateClicked"><UpdateUser/></div> -->
    <div v-if="deleteClicked"><DeleteUser/></div>
  </div>
</template>
<script>

/* super elegant crud... */

import CreateUser from '@/components/dash/crud/user/forms/createUser'
import DeleteUser from '@/components/dash/crud/user/forms/deleteUser'
import ReadUser from '@/components/dash/crud/user/forms/readUser'
// import UpdateUser from '@/components/dash/crud/user/forms/updateUser'

export default {
  components:{
    // UpdateUser,
    DeleteUser,
    CreateUser,
    ReadUser,
  },
  data: function() {
    return {
      createClicked:false,
      readClicked:true, //default
      updateClicked:false,
      deleteClicked:false
    }
  },
  methods:{
    reset(){
      this.createClicked = false
      this.readClicked = false
      this.updateClicked = false
      this.deleteClicked = false
    },
    loadCreate(){
      this.reset()
      this.createClicked = !this.createClicked
    },
    loadRead(){
      this.reset()
      this.readClicked = !this.readClicked
    },
    loadUpdate(){
      this.reset()
      this.updateClicked = !this.updateClicked
    },
    loadDelete(){
      this.reset()
      this.deleteClicked = !this.deleteClicked
    }
  }
}
</script>
<style scoped>
/* */
</style>

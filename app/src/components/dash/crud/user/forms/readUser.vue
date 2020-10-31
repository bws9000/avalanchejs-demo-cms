<template>
  <div class="userForm">
    <h1>Users on this node</h1>
    <ul v-if="this.users.length < 1">
      <li>0</li>
    </ul>
    <ul id="userList">
      <li v-for="user in this.users" :key="user">
        <router-link :to="{ path: 'user/'+user }">{{user}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'ReadUser',
  data: function() {
    return {
      users:[]
    }
  },
  methods:{
    async listUsers() {
      let response = await this.$parent.$parent.$parent.handleReadUsers();
      this.users = response.result.users;
    }
  },
  beforeMount() {
    this.listUsers();
  }
}
</script>
<style scoped>
#userList li{
  display:block;
}
</style>

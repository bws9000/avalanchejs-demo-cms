<template>
  <div class="userForm">
    <h1>Delete user on this node</h1>
    <form @submit="checkForm">
      <ul>
        <li>
          <input type="text" v-model="username" required="required"
                 placeholder="username" />
        </li>
        <li>
          <input type="text" v-model="password" required="required"
                 placeholder="password" />
        </li>
        <li>
          <button type="submit">Delete User</button>
        </li>
      </ul>
    </form>
  </div>
</template>
<script>
export default {
  name:'deleteUser',
  data: function() {
    return {
      username:'',
      password: '',
    }
  },
  methods:{
    checkForm: function (e) {
      e.preventDefault()
      this.$parent.$parent.$parent.handleDeleteUser(this.username,this.password);
      this.username = '';
      this.password = '';
    }
  }
}
</script>
<style scoped>
.userForm ul li{
  display:block;
  padding:3px;
}
button{
  padding:3px;
}
</style>

<template>
  <div class="userForm">
    <h1>read user</h1>
  </div>
</template>
<script>
export default {
  name:'createUser',
  data: function() {
    return {
      username: this.$store.state.loginEmail,
      password: '',
    }
  },
  methods:{
    checkForm: function (e) {
      e.preventDefault()
      this.$parent.$parent.$parent.handleCreateUser(this.username,this.password);
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

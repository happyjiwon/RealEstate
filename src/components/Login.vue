<template>
  <div class="login">
    <h2>{{msg}}</h2>
    <ul class="input-container">
      <li class="input-title">ID</li>
      <input v-model="inputId" type="text" placeholder="아이디를 입력주세요">
    </ul>

    <ul class="input-container">
      <li class="input-title">Password</li>
      <input v-model="inputPassword" type="password" placeholder="비밀번호를 입력주세요" v-on:keyup.enter="login">
    </ul>

    <button v-on:click="login">Login</button>

  </div>
</template>

<script>
export default {
  name: 'login',
  data: function () {
    return {
      msg: '로그인 정보를 입력해 주세요.',
      inputId: '',
      inputPassword: ''
    }
  },
  methods: {
    login: function () {
      this.$http.post('/login', {
        id: this.inputId,
        pw: this.inputPassword
      })
      .then((result) => {
        if (result.data) {
          location.href = './briefing'
        } else {
          alert('ID 또는 비밀번호를 확인해 주세요')
        }
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/main_background.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
h1, h2 {
  font-size: 64px;
  font-weight: 300;
  line-height: 1.41;
  color: #ffffff;
  margin: 0;
  padding-top: 20%;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.input-title{
  width: 15%;
  min-width: 200px;
  text-align: start;
  color: #ffffff;
  font-size: 40px;
}

input {
  height: 30px;
  outline: 0;
}
input::-webkit-input-placeholder {
  font-size: 13px;
}

button {
  width: 100px;
  height: 30px;
  background-color: #32b8c2;
  color: #ffffff;
  border: 0;
  outline: 0;
}
</style>

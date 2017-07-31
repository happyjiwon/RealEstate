<template>
  <div class="login">
    <img src="./../assets/ryan.gif">
    <h2>{{msg}}</h2>
    <ul class="input-container">
      <li class="input-title">ID</li>
      <input v-model="inputId" type="text" placeholder="아이디를 입력주세요">
    </ul>

    <ul class="input-container">
      <li class="input-title">Password</li>
      <input v-model="inputPassword" type="password" placeholder="비밀번호를 입력주세요">
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
          alert('로그인 성공')
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
h1, h2 {
  font-weight: normal;
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
  width: 10%;
  min-width: 80px;
  text-align: start;
}

input {
  height: 30px;
}
input::-webkit-input-placeholder {
  font-size: 13px;
}

button {
  width: 100px;
  height: 30px;
}
</style>

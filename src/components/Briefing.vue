<template>
  <div class="briefing">
    <header>
      <div class="header-wrapper">
        <div class="header-title">
          <span class="section-title">Real Estate Info</span>
        </div>
        <button class="logout">로그아웃</button>
      </div>
    </header>
    <div class="sale-info">
      <table>
        <tbody>
        <tr>
          <td class="title-container">단지</td>
          <td class="input-container">
            <select v-model="complex">
              <option disabled value="">Please select one</option>
              <option>A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td class="title-container">동/호</td>
          <td class="input-container">
            <input v-model="dong" type="text">동
            <input v-model="ho" type="text">호
          </td>
        </tr>
        <tr>
          <td class="title-container">매매가</td>
          <td class="input-container">
            <input v-model="price" type="text">
          </td>
        </tr>
        <tr>
          <td class="title-container">타입</td>
          <td class="input-container">
            <input v-model="roomType" type="text">
          </td>
        </tr>
        <tr>
          <td class="title-container">향</td>
          <td class="input-container">
            <input v-model="direction" type="text">
          </td>
        </tr>
        <tr>
          <td class="title-container">학군</td>
          <td class="input-container">
            <input v-model="school" type="text">
          </td>
        </tr>
        <tr>
          <td class="title-container">특징</td>
          <td class="input-container">
            <input v-model="characteristic" type="text">
          </td>
        </tr>
        </tbody>
      </table>
      <button v-on:click="">추가하기</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'briefing',
    data: function () {
      return {
        complex: '',
        dong: '',
        ho: '',
        price: '',
        roomType: '',
        direction: '',
        school: '',
        characteristic: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header {
    width: 100%;
    height: 64px;
    top: -1px;
    position: fixed;
    background-color: #D81B60;
    box-shadow: 0 2px 5px rgba(0,0,0,0.26);
    left: 0;
    right: 0;
  }

  .header-title {
    display: inline-block;
  }

  .section-title {
    font-size: 18px;
    line-height: 64px;
    color: #ffffff;
    font-weight: bold;
  }

  .logout {
    float: right;
    margin-right: 10px;
    margin-top: 14px;
    display: inline-block;
  }

  .sale-info {
    padding-top: 20px;
  }

  div {
    margin-bottom: 10px;
  }

  tr{
    height: 50px;
  }

  .title-container{
    width: 35%;
    text-align: start;
    padding-left: 5%;
    font-size: 15px;
    color: #333;
  }

  .input-container{
    text-align: start;
  }

  select {
    height: 30px;
    outline: 0;
  }

  input {
    height: 20px;
    border: 0;
    border-bottom: 1px solid #e6e6e6;
    outline: 0;
  }
  input::-webkit-input-placeholder {
    font-size: 13px;
  }

  button {
    height: 36px;
    font-size: 14px;
    color: #ffffff;
    padding-left: 16px;
    padding-right: 16px;
    background-color: #D81B60;
    border: 0;
    outline: 0;
  }
</style>

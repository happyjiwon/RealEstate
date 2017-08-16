<template>
  <div class="briefing">
    <header>
      <div class="header-wrapper">
        <div class="header-title">
          <span class="section-title">Real Estate Info</span>
        </div>
        <button class="logout" v-on:click="logout">로그아웃</button>
      </div>
    </header>
    <div class="sale-info">
      <table>
        <tbody>
        <tr>
          <td class="title-container">단지</td>
          <td class="input-container">
            <select v-model="complex" title="complex-select-box" >
              <option value="" disabled selected hidden>선택해주세요</option>
              <option v-for="option in options" v-bind:value="option.COMPLEX_ID">
                {{ option.COMPLEX_NAME }}
              </option>
            </select>
          </td>
        </tr>
        <tr>
          <td class="title-container">동/호</td>
          <td class="input-container">
            <input v-model="dong" type="text" title="complex-dong">동
            <input v-model="ho" type="text" title="complex-ho">호
          </td>
        </tr>
        <tr>
          <td class="title-container">매매가</td>
          <td class="input-container">
            <input v-model="price" type="text" title="complex-price">
          </td>
        </tr>
        <tr>
          <td class="title-container">타입</td>
          <td class="input-container">
            <input v-model="roomType" type="text" title="complex-type">
          </td>
        </tr>
        <tr>
          <td class="title-container">향</td>
          <td class="input-container">
            <input v-model="direction" type="text" title="complex-direction">
          </td>
        </tr>
        <tr>
          <td class="title-container">학군</td>
          <td class="input-container">
            <input v-model="school" type="text" title="complex-school-info">
          </td>
        </tr>
        <tr>
          <td class="title-container">특징</td>
          <td class="input-container">
            <input v-model="characteristic" type="text" title="complex-description">
          </td>
        </tr>
        </tbody>
      </table>
      <button v-on:click="searchSale">검색</button>
      <button v-on:click="">추가하기</button>
      <button id="kakao-send-btn" v-on:click="sendKakao">카카오톡 전송</button>
      <sale-component v-bind:saleList="saleList"></sale-component>
    </div>
  </div>
</template>

<script>
  import sale from './Sale.vue'

  export default {
    name: 'briefing',
    components: {
      'sale-component': sale
    },
    data: function () {
      return {
        complex: '',
        dong: '',
        ho: '',
        price: '',
        roomType: '',
        direction: '',
        school: '',
        characteristic: '',
        options: [],
        saleList: []
      }
    },
    beforeMount () {
//      Kakao.init('f572b59050d3cbd22748d248b5776790')
      this.$http.get('/getComplexInfo', {
      })
        .then((result) => {
          this.options = result.data
        })
    },
    methods: {
      /* eslint no-undef: "off" */
      logout: function () {
        this.$http.post('/logout', {
        })
          .then((result) => {
            if (result.data) {
              location.href = './'
            } else {
              alert('로그아웃 실패')
            }
          })
      },
      sendKakao: function () {
        alert('개발중!!')
//        Kakao.init('f572b59050d3cbd22748d248b5776790')
//        Kakao.Link.sendDefault({
//          container: '#kakao-send-btn',
//          label: '링크 테스트',
//          link: {
//            webUrl: 'http://www.naver.com'
//          }
//        })
      },
      searchSale: function () {
        this.$http.post('/getSalesInfo', {
          complex: this.complex,
          dong: this.dong,
          ho: this.ho
        }).then((result) => {
          this.saleList = result.data
        })
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
    padding-top: 84px;
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
    min-width: 150px;
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

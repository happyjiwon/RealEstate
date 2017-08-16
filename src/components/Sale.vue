<template>
  <div class="sale">
    <div class="card-container" v-for="sale in saleList">
      <img class="close-button" src="./../assets/close_button.png"/>
      <div class="left-container">
        <img class="floor-plan-image" src="./../assets/plan32.jpg"/>
      </div>
      <div class="right-container">
        <div class="title">{{sale.COMPLEX_NAME}} {{sale.DONG}}동 {{sale.HO}}호</div>
        <div>매매가: {{sale.SALE_PRICE}}</div>
        <div>특징: {{sale.CHARACTERISTIC}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sale-card',
    props: ['saleList'],
    data: function () {
      return {}
    }
  }
</script>

<style scoped>
  .sale {
    margin-top: 10px;
  }
  .card-container {
    width: 1156px;
    height: 466px;
    display: inline-block;
    border-radius: 2px;
    box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.2);
    margin: auto;
  }
  .close-button {
    float: right;
    padding: 10px;
    opacity: 0.3;
  }
  .left-container {
    width: 26%;
    display: inline-block;
    float: left;
    margin: 66px;
  }
  .right-container {
    width: 60%;
    display: inline-block;
    font-size: 24px;
    font-weight: 500;
    text-align: left;
    color: #33b8c1;
  }
  .floor-plan-image {
    width: 330px;
    height: 330px;
  }
  .title {
    margin-bottom: 40px;
  }
</style>

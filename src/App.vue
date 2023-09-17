<script>
  import axios from 'axios';

  export default {
    data() {
      return{
        city: '',
        error: ''
      }
    },
    methods: {
      getWeather() {
        if(this.city.trim().length < 3) {
          this.error = 'Введите корректное значение';
          return false
        } else{
          this.error=''
        }

        axios.get();
      }
    }
  }
</script>

<template>
  <div class="app">
    <h1 class="title">Погода</h1>
    <p class="info" v-if="city!=''">Узнаем погоду в городе {{ city }}</p>
    <p class="info" v-else disabled>Введите название города {{ city }}</p>
    <div class="app-box">
      <input class="input" v-model="city" type="text" placeholder="Город">
      <button class="btn" v-on:click="getWeather()">Узнать</button>
    </div>
    <div class="error">{{ error }}</div>
  </div>
</template>

<style>
  .app{
    width: 100%;
    height: 100%;
    padding: 50px;
    border-radius: 10px;
    background-color: #F8D568;
  }
  .app-box{
    display: flex;
    justify-content: space-between;
    align-content: center;
    background-color: #fff;
    padding: 5px;
    border-radius: 10px;
  }
  .title{
    margin-bottom: 50px;
    font-size: 50px;
    line-height: 120%;
    text-align: center;
  }
  .info{
    font-size: 25px;
    margin-bottom: 30px;
    text-align: center;
  }
  .input{
    padding: 10px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 25px;
  }
  .btn{
    cursor: pointer;
    background-color: #000;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 5px 10px;
    font-size: 25px;
    font-family: 'Roboto';
  }
  .error{
    color: red;
    margin-top: 10px;
    font-size: 20px;
  }
</style>
<script>
  import axios from 'axios';
  import сelsius from './assets/сelsius.png';

  export default {
    data() {
      return{
        city: '',
        error: '',
        info: null,
        imageSrc: сelsius
      }
    },
    methods: {
      //валидация формы и получения данных погоды
      getWeather() {
        if(this.city.trim().length < 3) {
          this.error = 'Введите корректное значение';
          return false
        } else{
          this.error=''
        }

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=d4cea6e448f300abb46acd7e5a624672&units=metric`)
          .then(res => (this.info = res.data))
      }
    }
  }
</script>

<template>
  <div class="app">
    <h1 class="title">Погода</h1>
    <p class="info" v-if="city!=''">Узнаем погоду в городе "{{city}}"</p>
    <p class="info" v-else disabled>Введите название города "{{ city }}"</p>
    <div class="app-box">
      <input class="input" v-model="city" type="text" placeholder="Город">
      <button class="btn" v-on:click="getWeather()">Узнать</button>
    </div>
    <div class="error">{{ error }}</div>
    <p class="weather-temp" v-if="info != null">
      <span>  
        {{ Math.round(info.main.temp) }}
      </span>
      <img class="сelsius" :src="imageSrc" alt="image">
    </p>
    <p class="weather-min-temp" v-if="info !=null">
      {{ "Минимальная температура: " + Math.round(info.main.temp_min) }}
    </p>
    <p class="weather-max-temp" v-if="info != null">
      {{ "Максимальная температура: " + Math.round(info.main.temp_max) }}
    </p>
  </div>
</template>

<style>
  .app{
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
  .weather-temp,
  .weather-min-temp,
  .weather-max-temp{
    font-size: 40px;
    font-weight: 70;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  .weather-min-temp,
  .weather-max-temp{
    font-size: 25px;
  }
  .сelsius{
    width: 40px;
    margin-left: 10px;
  }
  .error{
    color: red;
    margin-top: 10px;
    font-size: 20px;
  }
</style>
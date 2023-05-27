<script setup>
import WeatherData from '../components/WeatherData.vue';
</script>

<template>
    <div class="weather p-3 flex flex-col">
        <span class="weather-title">Weather</span>
        <div class="flex justify-between pt-3 pb-3">
            <WeatherData />
            <WeatherData />
            <WeatherData />
        </div>
        <a href="#" class="weather-site hover:underline">weather.com</a>
    </div>
</template>

<style scoped>
.weather {
    background-color: #e5edff;
    border-radius: 20px;
    height: 50%;
}

.weather-title,
.weather-site {
    color: #001c39;
}
</style>
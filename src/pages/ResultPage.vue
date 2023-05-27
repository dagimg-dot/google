<script setup>
import RHeader from '../components/RHeader.vue'
import SearchType from '../components/SearchType.vue'
import WeatherCard from '../components/WeatherCard.vue';
</script>

<template>
    <RHeader />
    <SearchType />
    <div class="mt-3 mb-3">
        <div class="show-time">
            <span>About 4,290,000 results (0.65 seconds)</span>
        </div>
    </div>
    <div class="mt-4 mb-6">
        <div class="title">
            <span class="city block">Bahir Dar</span>
            <div class="flex">
                <span>City in Ethiopia</span>
                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z">
                    </path>
                </svg>
            </div>
        </div>
    </div>
    <div class="">
        <div class="visuals-wrapper flex space-x-5">
            <div class="images">
                <img src="https://lh5.googleusercontent.com/p/AF1QipMFmsr6xablrnN_4fPrZs63mTr7lIq9J4hWi1oB=w548-h318-n-k-no"
                    alt="">
            </div>
            <div class="maps">
                <img src="../assets/maps.png" alt="">
            </div>
            <div class="flex space-x-5">
                <div class="card-wrapper flex flex-col space-y-5">
                    <WeatherCard />
                    <div class="brilliant-ethiopia ">

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class="searches">
            
        </div>
    </div>
</template>

<style scoped>
.show-time {
    margin-left: 220px;
}

span {
    font-size: 14px;
    color: #70757a;
    font-family: Arial, Helvetica, sans-serif;
}

.city {
    font-size: 26px;
    color: #202124;
    font-family: Arial, Helvetica, sans-serif;
}

.title {
    margin-left: 220px;
}

svg {
    height: 17px;
    margin-left: 5px;
}

.visuals-wrapper {
    margin-left: 220px;
}

.card-wrapper {
    width: 266px;
}

img {
    border-radius: 20px;
}

.brilliant-ethiopia {
    background-color: #e5edff;
    border-radius: 20px;
    height: 50%;
}
</style>
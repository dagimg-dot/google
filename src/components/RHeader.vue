<script setup>
import GridButton from '../components/GridButton.vue';
import SignInButton from '../components/SignInButton.vue';
import SettingsButton from '../components/SettingsButton.vue';

import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

const route = useRoute();
const query = route.query.q;

onMounted(() => {
    renderQuery();
})

const renderQuery = () => {
    document.getElementsByTagName('input')[0].value = query;
}
</script>

<template>  
    <div class="flex items-center justify-between pt-5 pl-6 pr-6">
        <div class="flex items-center">
            <div class="logo">
                <img src="../assets/googlelogo_small.png" alt="">
            </div>
            <div class="flex">
                <div class="input-wrapper flex space-x-3 items-center rounded-full px-3">
                    <input type="text" class="outline-none bg-white px-2 py-1 w-64">
                    <div class="flex space-x-4 pr-1 items-center">
                        <div class="clear" title="Clear">
                            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                </path>
                            </svg>
                        </div>
                        <div title="Search by voice">
                            <img src="../assets/mic.svg" class="w-6 h-6" title="Search by voice">
                        </div>
                        <div title="Search by image">
                            <img src="../assets/image.svg" class="w-6 h-6" title="Search by image">
                        </div>
                        <div class="search" title="Search">
                            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex space-x-2">
            <SettingsButton />
            <GridButton />
            <div class="flex pl-2.5">
                <SignInButton />
            </div>
        </div>
    </div>
</template>>

<style scoped>
.logo img {
    scale: 0.5;
}

.search {
    width: 25px;
    height: 25px;
    fill: #4285f4;
}

.clear {
    width: 25px;
    height: 25px;
    fill: #9aa0a6;
}

.input-wrapper:hover {
    box-shadow: 0 1px 6px 1px rgba(32, 33, 36, 0.28);
}

.input-wrapper {
    border-color: #dfe1e5;
    box-shadow: 0px 2px 5px 1px rgba(64, 60, 67, 0.16);
    height: 50px;
}

input {
    width: 530px;
} 

input[type='text'] {
    font-size: 16px;
}

.settings {
    width: 25px;
    height: 25px;
    fill: #9aa0a6;
}
</style>
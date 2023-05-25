<script setup>
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  import Footer from './components/Footer.vue';
  import { ref } from 'vue'

  const isButtonClicked = ref(true)
  
  const getBoolean = (value) => {
    isButtonClicked.value = value
  }


</script>

<template>
  <Header @button-clicked="getBoolean"/>
  <Main :clickValue="isButtonClicked"/>
  <Footer />
</template>

<style scoped>  
</style>

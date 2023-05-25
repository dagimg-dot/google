<script setup>
import {ref} from 'vue'
import SignInButton from './SignInButton.vue';
import GridButton from './GridButton.vue';

const isButtonClicked = ref(true)

const emit = defineEmits(['buttonClicked']) 

const handleClick = () => {
  isButtonClicked.value = !isButtonClicked.value
  emit('buttonClicked', isButtonClicked.value)
}

</script>

<template>
  <div class="bg-white py-3">
      <div class="mx-4 flex justify-end">
          <ul class="flex space-x-6 items-center">
            <li><a href="#" class="text-gray-700 hover:underline">Gmail</a></li>
            <li><a href="#" class="text-gray-700 hover:underline" >Images</a></li>
            <li @click="handleClick"><GridButton /></li>
            <li><SignInButton /></li>
          </ul>
      </div>
  </div>
</template>

<style scoped>
  li a { 
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
    line-height: 26px;
  }

  a div img {
    color: #5f6368;
  }

  ul div:hover {
    background-color: #f1f3f4;
    border-radius: 50%;
  }

  li button {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }
</style>

 
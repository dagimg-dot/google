<template>
  <div class="bg-white py-3">
      <div class="container mx-auto flex justify-end">
          <ul class="flex space-x-6 items-center">
            <li><a href="#" class="text-gray-700 hover:underline">Gmail</a></li>
            <li><a href="#" class="text-gray-700 hover:underline" >Images</a></li>
            <a href="">
              <div class="w-8 h-8 flex items-center justify-center">
                <img src="../assets/9dots.svg" class="w-5 h-4">
              </div>
            </a>
            <li><button class="bg-blue-500 hover:bg-blue-700 text-white py-1.5 px-6 rounded">Sign in</button></li>
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

 
<script setup>
</script>

<template>
    <div class="flex flex-col items-center justify-center mt-11">
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png">
        <div class="my-7 flex items-center flex-col">
            <div class="flex space-x-3 items-center border border-gray-300 rounded-full px-3 py-2">
                <img src="../assets/search.svg" class="w-6 h-6 pl-1">
                <input type="text" class="outline-none bg-white px-2 py-1 w-64">
                <div class="flex space-x-3 pr-1">
                    <a href="#"><img src="../assets/mic.svg" class="w-7 h-7" title="Search by voice"></a>
                    <a href="#"><img src="../assets/image.svg" class="w-7 h-7" title="Search by image"></a>
                </div>
            </div>
            <div class="flex space-x-4 mt-8">
                <button class="border-2 border-gray-100 bg-gray-100 hover:border-gray-200 text-gray-700 py-1.5 px-6 rounded">Google Search</button>
                <button class="border-2 border-gray-100 bg-gray-100 hover:border-gray-200 text-gray-700 py-1.5 px-6 rounded">I'm Feeling Lucky</button>
            </div>
        </div>
        <div class="flex my-1 space-x-3"> 
            <span>Google offered in:</span>
            <a href="#">አማርኛ</a>
            <a href="#">ትግርኛ</a>
            <a href="#">Somaali</a>
            <a href="#">Affan Oromoo</a>
        </div>
        <div>
    
        </div>
    </div>
</template>

<style scoped>
    input {
        width: 500px;
    }

    button {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        color: #3C4043;
    }

    button:hover {
        cursor: pointer;
    }

    span {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        color: #3C4043;
    }

    a {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        color: #1A0DAB;
    }

    a:hover {
        text-decoration: underline;
    }
</style>
<template>
    <div class="bg-orange min-h-screen">
        <div class="container mx-auto">

           <navbar/>
            <search-eng/>

        </div>
    </div>
</template>

<script>
import Navbar from './Navbar.vue'
import SearchEng from './SearchEng.vue'
export default {
    components: {
        Navbar,
        SearchEng
    }
    
}
</script>

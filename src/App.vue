<template>
    <div>
        <explore />
        <router-view />
    </div>
</template>

<script>
import Explore from './components/Explore.vue'
export default {
    components: {
        Explore,

    }
   
}
</script>
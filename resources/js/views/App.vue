<template>
        <router-view></router-view>                   
</template>

<script>
    export default {
        data(){
            return{
                logado: false,
            }
        },
        mounted(){
            console.log("Component App mounted")
        }

    };

</script>

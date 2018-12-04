<template>
    <!-- Right Side Of Navbar -->
    <ul v-if="logado" class="navbar-nav text-uppercase ml-auto">
        <li class="nav-item">
            <router-link class="nav-link" to="/perfil">Nome Usuario</router-link>
        </li>
        <li class="nav-item">                            
            <router-link class="nav-link"to="/logout">Logout</router-link>                            
        </li>
    </ul>
    <ul v-else class="navbar-nav text-uppercase ml-auto">
        <li class="nav-item">                            
            <router-link class="nav-link" to="/login">Login</router-link>                            
        </li>
        <li class="nav-item">                            
            <router-link class="nav-link" to="/registrar">Registrar</router-link>                            
        </li>               
    </ul>
</template>

<script>
    export default {
        data(){
            return{
                logado:false,
            }
        },
        mounted(){
            console.log("COmponent NavRight Mounted")
        }
    }
</script>
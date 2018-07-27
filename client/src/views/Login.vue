<template>

  <div>
    <v-container>
        <v-layout row wrap>
            <v-flex xs6 offset-xs3>
                <h1>Login</h1>
                <v-text-field @input="setLoginEmail" :value="loginEmail" lable="email" placeholder="Email"></v-text-field>
                <v-text-field @input="setLoginPassword" :value="loginPassword" lable="Password" placeholder="Password" type="password"></v-text-field>
                <v-alert type="error" :value="loginError">
                    {{loginError}}
                </v-alert>
                <v-btn color="green" dark @click="login" >
                    <v-icon class="mr-2">fingerprint</v-icon>
                    Login
                 </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
  </div>

</template>

<script>

import { mapState, mapMutations, mapActions } from 'vuex';

export default {
    
    methods: {
        ...mapMutations('authentication', ['setLoginEmail', 'setLoginPassword']),
        ...mapActions('authentication', ['login'])
    },

    computed: {
        ...mapState('authentication', ['loginEmail', 'loginPassword', 'loginError'])
    }

}

</script>


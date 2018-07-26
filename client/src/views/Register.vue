<template>

  <div>
    <v-container>
        <v-layout row wrap>
            <v-flex xs6 offset-xs3>
                <h1>Register</h1>
                <v-text-field @input="setRegisterEmail" :value="registerEmail" lable="email" placeholder="Email"></v-text-field>
                <v-text-field @input="setRegisterPassword" :value="registerPassword" lable="Password" placeholder="Password" type="password"></v-text-field>
                <v-btn color="green" dark @click="register" >
                    <v-icon class="mr-2">account_circle</v-icon>
                    Register
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
        ...mapMutations('authentication', ['setRegisterEmail', 'setRegisterPassword']),
        ...mapActions('authentication', ['register'])
    },

    computed: {
        ...mapState('authentication', ['registerEmail', 'registerPassword'])
    }

}

</script>


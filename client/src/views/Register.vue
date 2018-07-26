<template>

  <div>
    <v-container>
        <v-layout row wrap>
            <v-flex xs6 offset-xs3>
                <h1>Register</h1>
                <v-text-field lable="email" placeholder="Email"></v-text-field>
                <v-text-field lable="Password" placeholder="Password" type="password"></v-text-field>
                <v-btn color="green" dark>
                    <v-icon class="mr-2">account_circle</v-icon>
                    Register
                 </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
  </div>

</template>

<script>

export default {
    
}

</script>


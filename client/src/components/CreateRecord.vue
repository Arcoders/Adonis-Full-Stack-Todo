<template>
    
    <div>
        <v-text-field 
        @input="$emit('onInput', $event)" 
        :value="value" 
        :placeholder="placeholder"></v-text-field>
        <v-btn @click="$emit('create')" dark color="teal lighten-1">
            <v-icon class="mr-2">add_circle</v-icon>    
            Create
        </v-btn>
    </div>

</template>

<script>

export default {
    
    props: ['placeholder', 'value'],

}

</script>

<template>

    <v-layout row wrap>
        <v-flex xs9 class="text-xs-left"> 
            <slot></slot>
            <v-text-field 
            v-if="isEditMode"
            @input="$emit('onInput', $event)"  
            :value="title" 
            autofocus>
            </v-text-field>
            <span v-else @click="$emit('onClick')">{{ title }}</span>
        </v-flex>
        <v-flex xs3 class="text-xs-right">
            <span v-if="isEditMode">
                <v-icon @click="$emit('onSave')">check</v-icon>
            </span>
            <span v-else>
                <v-icon @click="$emit('onEdit')">edit</v-icon>
                <v-icon @click="$emit('onDelete')" class="ml-2">delete</v-icon>                
            </span>
        </v-flex>
    </v-layout>

</template>

<script>

export default {
    
    props: ['isEditMode', 'title', 'record'],

}

</script>
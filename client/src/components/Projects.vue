<template>
    
    <Panel title="Projects">

        <div v-for="project in projects" :key="project._id" class="mb-4">
            <v-layout row wrap>
                <v-flex xs9 class="text-xs-left"> 
                    <v-text-field @input="setProjectTitle({project, title: $event})" v-if="project.isEditMode" :value="project.title" autofocus></v-text-field>
                    <span v-else>{{ project.title }}</span>
                </v-flex>
                <v-flex xs3 class="text-xs-right">
                    <v-icon v-if="project.isEditMode" @click="saveProject(project)">check</v-icon>
                    <v-icon v-else @click="toggleEdit(project)">edit</v-icon>
                    <v-icon v-if="!project.isEditMode" @click="deleteProject(project)" class="ml-2">delete</v-icon>
                </v-flex>
            </v-layout>
        </div>

        <v-text-field @input="setNewProjectName" :value="newProjectName" placeholder="My project name..."></v-text-field>
        <v-btn @click="createProject" dark color="teal lighten-1">
            <v-icon class="mr-2">add_circle</v-icon>    
            Create
        </v-btn>

    </Panel>
    
</template>

<script>

import { mapMutations, mapState, mapActions } from 'vuex';

export default {

    mounted () {
        this.fetchProjects();
    },
  
    methods: {

        ...mapMutations('projects', ['setProjectTitle', 'setNewProjectName', 'toggleEdit']),
        ...mapActions('projects', ['deleteProject', 'saveProject', 'createProject', 'fetchProjects']),

    },

    computed: {

        ...mapState('projects', ['newProjectName', 'projects']),

    },

};

</script>

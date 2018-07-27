<template>
    
    <Panel title="Projects">

        <div v-for="project in projects" :key="project._id">
            {{ project.title }}
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

        ...mapMutations('projects', ['setNewProjectName']),
        ...mapActions('projects', ['createProject', 'fetchProjects']),

    },

    computed: {

        ...mapState('projects', ['newProjectName', 'projects']),

    },

};

</script>

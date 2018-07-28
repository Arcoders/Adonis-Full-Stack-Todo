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

        <CreateRecord
            placeholder="My project name..."
            @onInput="setNewProjectName"
            :value="newProjectName"
            @create="createProject"
        />

    </Panel>
    
</template>

<script>

import { mapMutations, mapState, mapActions } from 'vuex';
import CreateRecord from '@/components/CreateRecord.vue';

export default {

    components: { CreateRecord },

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

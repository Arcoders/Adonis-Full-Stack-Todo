<template>
    
    <Panel title="Projects">

        <div v-for="project in projects" :key="project._id" class="mb-4">
            
            <EditableRecord
                :isEditMode="project.isEditMode"
                :title="project.title"
                @onInput="setProjectTitle({ project, title: $event })"
                @onEdit="toggleEdit(project)"
                @onSave="saveProject(project)"
                @onDelete="deleteProject(project)"
            />

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
import EditableRecord from '@/components/EditableRecord.vue';

export default {

    components: { CreateRecord, EditableRecord },

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

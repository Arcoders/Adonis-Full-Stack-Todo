<template>
    

    <Panel title="Tasks">
        
        <div v-for="task in tasks" :key="task._id" class="mt-2">
            
            <EditableRecord
                :isEditMode="task.isEditMode"
                :title="task.description"
                @onInput="setTaskDescription({ task, description: $event })"
                @onEdit="toggleEdit(task)"
                @onSave="saveTask(task)"
                @onDelete="deleteTask(task)"
                @onClick="taskClicked(task)"
            />

        </div>

        <CreateRecord
            placeholder="I need to..."
            @onInput="setNewTaskName"
            :value="newTaskName"
            @create="createTask"
        />

    </Panel>

</template>


<script>

import { mapState, mapActions, mapMutations } from 'vuex';
import CreateRecord from '@/components/CreateRecord.vue';
import EditableRecord from '@/components/EditableRecord.vue';

export default {
    
    components: { CreateRecord, EditableRecord },

    methods: {

        ...mapActions('tasks', ['createTask']),
        ...mapMutations('tasks', ['setNewTaskName']),

    },

    computed: {

        ...mapState('tasks', ['tasks', 'newTaskName']),

    }

}

</script>

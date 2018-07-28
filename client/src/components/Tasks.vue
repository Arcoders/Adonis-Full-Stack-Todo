<template>
    

    <Panel title="Tasks">
        
        <div v-for="task in tasks" :key="task._id" class="mt-2">
            
            <EditableRecord
                :isEditMode="task.isEditMode"
                :title="task.description"
                @onInput="setTaskDescription({ task, description: $event })"
                @onEdit="toggleEdit(task)"
                @onSave="saveTask(task)"
                @onDelete="deleteTask(task)">

                <v-icon @click="checkClicked(task)" class="mr-2">
                   {{ task.completed ? 'check_box' : 'check_box_outline_blank' }} 
                </v-icon>   

            </EditableRecord>

        </div>

        <CreateRecord
            v-if="currentProject"
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

        ...mapActions('tasks', ['createTask', 'deleteTask', 'saveTask']),
        ...mapMutations('tasks', ['setNewTaskName', 'setTaskDescription', 'toggleEdit', 'toggleCompleted']),

        checkClicked(task) {
            this.toggleCompleted(task);
            this.saveTask({task, updateCheckbox: true});
        }

    },

    computed: {

        ...mapState('tasks', ['tasks', 'newTaskName']),
        ...mapState('projects', ['currentProject']),

    }

}

</script>

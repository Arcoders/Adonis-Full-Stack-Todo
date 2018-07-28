/* eslint-disable */

import Vue from 'vue';
import Axios from '../http';

export default {
    namespaced: true,
    state: {
        tasks: [],
        newTaskName: null,
        isEditMode: false,
    },
    actions: {
        fetchTasksForProject({ commit }, project) {
            return Axios().get(`projects/${project._id}/tasks`)
            .then(({ data }) => {
                commit('setTasks', data);
            })
        },
        createTask({ commit, state, rootState }) {
            return Axios().post(`projects/${rootState.projects.currentProject._id}/tasks`, {
                description: state.newTaskName,
            })
            .then(({ data }) => {
                commit('appendTask', data);
                commit('setNewTaskName', null);
            });
        },
        saveTask({ commit }, {task, updateCheckbox = false}) {
            return Axios().patch(`tasks/${task._id}`, task)
            .then(() => {
                if (!updateCheckbox) commit('toggleEdit', task);
            });
        },
        deleteTask({ commit }, task) {
            return Axios().delete(`tasks/${task._id}`)
            .then(() => {
                commit('removeTask', task);
            });
        },
    },
    mutations: {
        setTasks: (state, tasks) => state.tasks = tasks,
        
        setNewTaskName: (state, newTaskName) => state.newTaskName = newTaskName,

        appendTask: (state, task) => state.tasks.push(task),

        setTaskDescription: (state, { task, description }) => task.description = description,

        removeTask: (state, task) => state.tasks.splice(state.tasks.indexOf(task), 1),

        toggleCompleted : (state, task) => task.completed = !task.completed,

        toggleEdit(state, task) {
            state.isEditMode = !state.isEditMode;
            Vue.set(task, 'isEditMode', state.isEditMode);
        },
    },
    getters: {

    },
};

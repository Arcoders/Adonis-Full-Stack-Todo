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
    },
    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks;
        },
        setNewTaskName(state, newTaskName) {
            state.newTaskName = newTaskName;
        },
        appendTask(state, task) {
            state.tasks.push(task);
        },
        setTaskDescription(state, { task, description }) {
            task.description = description;
        },
        toggleEdit(state, task) {
            state.isEditMode = !state.isEditMode;
            Vue.set(state, 'isEditMode', state.isEditMode);
        },
    },
    getters: {

    },
};

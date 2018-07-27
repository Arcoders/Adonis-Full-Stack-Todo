/* eslint-disable */

import Vue from 'vue';
import Axios from '../http';

export default {
    namespaced: true,
    state: {
        projects: [],
        newProjectName: null,
        isEditMode: false,
    },
    actions: {
        fetchProjects({ commit }) {
            return Axios().get('/projects')
            .then(({ data }) => {
                commit('setProjects', data);
            })
        },
        createProject({ commit, state }) {
            return Axios().post('/projects', {
                title: state.newProjectName,
            })
            .then(({ data }) => {
                commit('appendProject', data);
                commit('setNewProjectName', null);
            });
        }
    },
    mutations: {
        setNewProjectName(state, name) {
            state.newProjectName = name;
        },
        appendProject(state, project) {
            state.projects.push(project);
        },
        setProjects(state, projects) {
            state.projects = projects;
        },
        toggleEdit(state, project) {
            state.isEditMode = !state.isEditMode;
            Vue.set(project, 'isEditMode', state.isEditMode);
        },
    },
    getters: {
        
    },
};

/* eslint-disable */

import Vue from 'vue';
import Axios from '../http';

export default {
    namespaced: true,
    state: {
        currentProject: null,
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
        },
        saveProject({ commit }, project) {
            return Axios().patch(`projects/${project._id}`, project)
            .then(() => {
                commit('toggleEdit', project);
            });
        },
        deleteProject({ commit }, project) {
            return Axios().delete(`projects/${project._id}`)
            .then(() => {
                commit('removeProject', project);
            });
        },
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
        setProjectTitle(state, { project, title }) {
            project.title = title;
        },
        toggleEdit(state, project) {
            state.isEditMode = !state.isEditMode;
            Vue.set(project, 'isEditMode', state.isEditMode);
        },
        removeProject(state, project) {
            state.projects.splice(state.projects.indexOf(project), 1);
        },
        setCurrentProject(state, project) {
            state.currentProject = project;
        },
    },
    getters: {
        
    },
};

/* eslint-disable */

import Axios from '../http';
import router from '../router';

export default {
    namespaced: true,
    state: {
        projects: [],
        newProjectName: null,
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
        }
    },
    getters: {
        
    },
};

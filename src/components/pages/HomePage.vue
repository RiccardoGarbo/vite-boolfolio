<script>
import AppMain from '../AppMain.vue';
import axios from 'axios';
const endpoint = 'http://127.0.0.1:8000/api/projects/';
export default {
    name: 'AppHome',
    components: { AppMain },
    data: () => ({
        projects: []

    }),
    methods: {
        fetchProjects() {
            axios.get(endpoint).then(res => {
                this.projects = res.data
            })
        }
    },
    created() {
        this.fetchProjects();
    }
}
</script>



<template>
    <AppMain :projects='projects' />
</template>



<style>
/* Style here */
</style>

<script>
import axios from 'axios';
import ProjectCard from '../ProjectCard.vue';
const endpoint = 'http://127.0.0.1:8000/api/projects/';
export default {
    name: 'project-detail',
    components: { ProjectCard },

    data: () => ({
        project: null

    }),
    methods: {
        getProject() {
            axios.get(endpoint + this.$route.params.id).then(res => {
                this.project = res.data
            })
        }
    },
    created() {
        this.getProject();
    }
}
</script>



<template>
    <ProjectCard :project="project" :isDetail="true" />
</template>



<style>
/* Style here */
</style>

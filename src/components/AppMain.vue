<script>
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'AppMain',
    components: { ProjectCard },
    props: {
        'projects': Array
    }
}
</script>

<template>
    <div class="container">
        <ProjectCard v-for="project in projects" :project="project" />
    </div>
</template>



<style>
/* Style here */
</style>

<script>
export default {
    name: 'ProjectCard',
    props: {
        'project': Object
    }
}
</script>



<template>
    <div class="card">
        <img :src="project.image" class="card-img-top" :alt="project.tite">
        <div class="card-body">
            <h5 class="card-title"> {{ project.title }}</h5>
            <p class="card-text">{{ project.content }}</p>
        </div>
    </div>
</template>



<style>
/* Style here */
</style>

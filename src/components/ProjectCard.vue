<script>
import { RouterLink } from 'vue-router'
export default {
    name: 'ProjectCard',
    props: { project: Object, isDetail: Boolean }
}
</script>



<template>
    <div class="card">
        <img :src="project.image" class="card-img-top" :alt="project.title">
        <div class="card-body">
            <div class="d-flex justify-content-between">
                <h5 class="card-title"> {{ project.title }}</h5>
                <RouterLink v-if="!isDetail" class="btn btn-info"
                    :to="{ name: 'project-detail', params: { id: project.id } }">Vedi
                </RouterLink>
            </div>
            <p class="card-text">{{ project.content }}</p>
        </div>

    </div>

</template>



<style>
/* Style here */
</style>

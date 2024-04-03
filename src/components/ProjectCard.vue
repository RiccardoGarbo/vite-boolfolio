<script>
import { RouterLink } from 'vue-router'
export default {
    name: 'ProjectCard',
    props: { project: Object, isDetail: Boolean }
}
</script>



<template>
    <div class="container">
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
                <div class="d-flex justify-content-between">
                    <span>{{ project.type['label'] }}</span>
                    <div class="d-flex gap-2">
                        <span v-for="technology in project.technologies">{{ technology['label'] }} </span>
                    </div>
                </div>

            </div>

        </div>
    </div>

</template>



<style>
/* Style here */
</style>

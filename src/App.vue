<script>
import AppHeader from './components/AppHeader.vue';
import axios from 'axios';
const endpoint = 'http://127.0.0.1:8000/api/projects/';
export default {
  name: 'Boolfolio',
  components: { AppHeader },
  data: () => ({
    project: []

  }),
  methods: {
    fetchProjects() {
      axios.get(endpoint).then(res => {
        console.log(res.data)
      })
    }
  },
  created() {
    this.fetchProjects();
  }
}
</script>

<template>
  <AppHeader />
  <main class="container pt-3">
  </main>


</template>

<style scoped></style>

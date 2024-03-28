<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import axios from 'axios';
const endpoint = 'http://127.0.0.1:8000/api/projects/';
export default {
  name: 'Boolfolio',
  components: { AppHeader, AppMain },
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
  <AppHeader />
  <AppMain :projects='projects' />
</template>

<style scoped></style>

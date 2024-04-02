<script>
import AppHeader from './components/AppHeader.vue';
import HomePage from './components/pages/HomePage.vue';
export default {
  name: 'Boolfolio',
  components: { AppHeader, HomePage }
}
</script>

<template>
  <AppHeader />
  <RouterView />

</template>

<style scoped></style>

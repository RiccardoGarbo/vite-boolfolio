<script>
import AppHeader from './components/AppHeader.vue';


export default {
  name: 'Boolfolio',
  components: { AppHeader }
}
</script>

<template>
  <AppHeader />
  <RouterView />

</template>

<style scoped></style>

<template>
  <div>
    <Header />
    <router-view></router-view>
    <Notification v-if="notificationCount > 0" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Notification from './components/Notification.vue';
export default {
  components: {
    Header,
    Notification,
  },
  computed: {
    notificationCount() {
      return this.$store.getters.notificationCount;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
</style>

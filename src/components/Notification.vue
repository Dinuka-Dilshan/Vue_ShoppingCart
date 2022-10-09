<template>
  <div class="container">
    <div class="count">{{ count }}</div>
    <div>{{ notification }}</div>
    <div><button @click="clear">x</button></div>
  </div>
</template>

<script>
export default {
  computed: {
    notification() {
      return this.$store.getters.notification;
    },
    count() {
      return this.$store.getters.notificationCount;
    },
  },

  methods: {
    clear() {
      this.$store.dispatch('removeNotification');
    },
  },
};
</script>
<style scoped>
.container {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  bottom: 5%;
  right: 2%;
  width: fit-content;
  padding: 1rem;
  box-shadow: 0px 4px 20px -5px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 0px 4px 20px -5px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 4px 20px -5px rgba(0, 0, 0, 1);
}

.count {
  color: white;
  background-color: red;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
}

button {
  background-color: white;
  border: none;
  outline: none;
  font-size: 1.2rem;
}
button:hover {
  color: red;
}
</style>

<template>
  <div class="container">
    <RouterLink to="/products">Products</RouterLink>
    <RouterLink to="cart">
      <div class="wrapper">
        Cart
        <div class="amount">{{ items }}</div>
      </div></RouterLink
    >
  </div>
</template>
<script>
export default {
  computed: {
    items() {
      return this.$store.getters.quantity;
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #404040;
  font-size: 1.3rem;
  font-weight: bold;
}
.router-link-active {
  font-size: 1.4rem;
  border-bottom: 2px solid #404040;
}

.amount {
  color: white;
  background-color: red;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
}

.wrapper {
  align-items: center;
  display: flex;
  gap: 0.3rem;
}
</style>

<template>
  <div class="container">
    <div class="wrapper">
      <div class="total">Total:{{ total }}</div>
      <div class="qty">Quantity:{{ quantity }}</div>
    </div>
    <ProductItem
      v-for="(product, index) in products"
      :key="product.id"
      :id="index"
      :title="product.title"
      :price="product.price"
      :description="product.description"
      :image="product.image"
      itemType="cart"
    />
  </div>
</template>

<script>
import ProductItem from '../components/ProductItem.vue';
export default {
  components: {
    ProductItem,
  },
  computed: {
    products() {
      return this.$store.getters.cart;
    },
    total() {
      return this.$store.getters.total;
    },
    quantity() {
      return this.$store.getters.quantity;
    },
  },
};
</script>
<style scoped>
.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.wrapper{
    display: flex;
    gap: 1rem;
    font-size: 1.3rem;
}

.total{
    padding: 0.5rem 2rem;
    color: white;
    background-color: rgb(30, 187, 30);
    border-radius: 100vh;
}

.qty{
    padding: 0.5rem 2rem;
    color: white;
    background-color: rgb(255, 179, 37);
    border-radius: 100vh;
}
</style>

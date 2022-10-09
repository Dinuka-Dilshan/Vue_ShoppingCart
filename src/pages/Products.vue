<template>
  <div class="container">
    <div>
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :title="product.title"
        :price="product.price"
        :description="product.description"
        :image="product.image"
        :id="product.id"
        itemType="product"
      />
    </div>
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
      return this.$store.getters.products;
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
</style>

<template>
  <div class="container1">
    <img :src="image" alt="" />
    <div class="details">
      <div class="title-wrapper">
        <span class="title">{{ title }}</span>
        <span class="price">{{ price }}</span>
      </div>
      <span class="description">{{ description }}</span>

      <div class="btn-wrapper">
        <button v-if="itemType === 'product'" @click="addToCart">Add to Cart</button>
        <button v-if="itemType === 'cart'" @click="remove">Remove</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title', 'price', 'description', 'id', 'image','itemType'],
  methods: {
    addToCart() {
      this.$store.dispatch('addToCart',this.id);
      this.$store.dispatch('notify',`Product "${this.title}" added to cart`);
    },
    remove() {
      this.$store.dispatch('removeFromCart',this.id);
    },
  },
};
</script>

<style scoped>
.container1 {
  margin: 1.5rem;
  display: flex;
  width: 40rem;
  flex-direction: row;
  border-radius: 1rem;
  box-shadow: 0px 4px 20px -5px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 0px 4px 20px -5px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 4px 20px -5px rgba(0, 0, 0, 1);
}
img {
  width: 15rem;
  height: 13rem;
  object-fit: cover;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
}
.title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #404040;
}

.details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  gap: 1.5rem;
  width: 100%;
}

.description {
  font-size: 1.2rem;
  color: #404040;
}

.title-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.price {
  background-color: rgb(255, 255, 104);
  align-self: center;
  padding: 0.2rem 2rem;
  border-radius: 100vh;
  color: #404040;
  font-weight: bold;
}
.btn-wrapper {
  display: flex;
  justify-content: flex-end;
}
button {
  padding: 0.5rem 2rem;
  outline: none;
  border: none;
  font-size: 1.1rem;
  background: #74b9ff;
  color: white;
  border-radius: 50vh;
}

button:hover {
  background: #4ca2f8;
  color: white;
}
</style>

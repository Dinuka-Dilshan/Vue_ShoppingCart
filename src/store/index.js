import { createStore } from 'vuex';
const store = createStore({
  state() {
    return {
      products: [
        {
          id: 'p1',
          image: 'https://www.unl.edu/plains/wunder-library-shelf.jpg',
          title: 'Book Collection',
          description:
            'A collection of must-read books. All-time classics included!',
          price: 99.99,
        },
        {
          id: 'p2',
          image:
            'https://cdn.shopify.com/s/files/1/0253/1626/1993/products/zhota-action1_1280x1280.jpg?v=1655379213',
          title: 'Mountain Tent',
          description: 'A tent for the ambitious outdoor tourist.',
          price: 129.99,
        },
        {
          id: 'p3',
          image:
            'https://www.creativefabrica.com/wp-content/uploads/2021/04/04/Mockup-Two-fast-food-box-packaging-Graphics-10360612-1-580x387.jpg',
          title: 'Food Box',
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99,
        },
      ],
      cart: {
        items: [],
      },
      notifications: [],
    };
  },
  mutations: {
    addItem(state, payload) {
      state.cart.items.push(payload);
    },
    removeItem(state, payload) {
      state.cart.items = state.cart.items.filter(
        (_, index) => index !== payload
      );
    },
    addNotification(state, payload) {
      state.notifications.push(payload);
    },
    removeNotification(state) {
      state.notifications.pop();
    },
  },
  actions: {
    addToCart(context, payload) {
      const product = context.getters.products.find(
        (item) => item.id === payload
      );
      console.log(payload);
      context.commit('addItem', product);
    },
    removeFromCart(context, payload) {
      context.commit('removeItem', payload);
    },
    notify(context, payload) {
      context.commit('addNotification', payload);
    },
    removeNotification(context) {
      context.commit('removeNotification');
    },
  },
  getters: {
    products: (state) => state.products,
    total: (state) => {
      const total = state.cart.items.reduce((total, item) => {
        return total + item.price;
      }, 0);

      return total.toFixed(2);
    },
    quantity: (state) => state.cart.items.length,
    cart: (state) => state.cart.items,
    notification: (state, getters) =>
      state.notifications[getters.notificationCount - 1],
    notificationCount: (state) => state.notifications.length,
  },
});
export default store;

const mutations = {
    setToken(state, token) {
      state.token = token;
    },
    setProducts(state, products) {
      state.products = products;
    },
    addProductToState(state, orderItem) {
      state.orderItems.push(orderItem);
    },
    updateProduct(state, updatedProduct) {
      const productIndex = state.products.findIndex(product => product.id === updatedProduct.id);
      if (productIndex !== -1) {
        state.products.splice(productIndex, 1, updatedProduct);
      }
    },
    setIsAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    Cartproducts(state, products) {
      state.cart_products = products;
    },
  
  };
  
  export default mutations;
  
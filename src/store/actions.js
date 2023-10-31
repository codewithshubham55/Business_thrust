import axios from 'axios'; 

const actions = {
    async login({ commit }, { username, password }) {
      try {
        const requestData = {
          username,
          password,
        };
        const response = await axios.post('https://dummyjson.com/auth/login', requestData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          const token = response.data.token;

          commit('setToken', token);
          localStorage.setItem('authToken', token);
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          commit('setIsAuthenticated', true);
        } else {
          console.error('Login failed. Error response:', response);

          throw new Error('Login failed');
        }
      } catch (error) {
        console.error('Login failed:', error);


        throw error;
      }
    },
   async fetchProducts({ commit }) {
    try {
      const response = await fetch('https://dummyjson.com/products');
      if (response.ok) {
        const requestData = await response.json();
        const products=requestData?.products
        commit('setProducts', products);
      } else {
        console.error('Failed to fetch products:', response.statusText);
      }
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  },
  async addProduct({ commit }, newProduct) {
    try {
      const response = await axios.post('https://dummyjson.com/products/add', newProduct);

      if (response.status === 200) {
        const addedProduct = response.data;
        commit('addProductToState', addedProduct);
      } else {
        console.error('Failed to add product. Error response:', response);

        throw new Error('Failed to add product');
      }
    } catch (error) {
      console.error('Failed to add product:', error);

      throw error;
    }
  },
  async updateProduct({ commit }, updatedProduct) {
    try {
      const response = await axios.put(`https://dummyjson.com/products/${updatedProduct.id}`, updatedProduct);
      if (response.status === 200) {
        const updatedProductData = response.data;
        commit('updateProduct', updatedProductData);
        return updatedProductData;
      } else {
        throw new Error('Update failed');
      }
    } catch (error) {
      console.error('Failed to update the product:', error);
      throw error;
    }
  },
  async fetchCartProducts({ commit }, id) {
    
    try {
      let response
       response = await axios.get(`https://dummyjson.com/carts/${id}`);
      if (response.status === 200) {
        const products = response.data.products; 
        commit('Cartproducts', products);
      } else {
        console.error('Failed to fetch products. Error response:', response);
        throw new Error('Failed to fetch products');
      }
    } catch (error) {
      console.error('Failed to fetch products:', error);
      throw error;
    }
  },
  
};

export default actions;

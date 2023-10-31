<template>
  <div class="update-product">
    <h2>Update Product</h2>
    <form @submit.prevent="submitUpdate">
      <div class="form-group">
        <label for="title">Title:</label>
        <input v-model="updatedProduct.title" type="text" id="title" class="form-control" required />
      </div>

      
      <div class="form-group">
        <button type="submit" class="btn btn-primary">Update Product</button>

         <div v-if="error" class="error-message">
        {{ error }}
      </div>
      </div>
    </form>
  </div>
</template>

<script>
import router from '@/router';
import { mapActions } from 'vuex';


export default {
  data() {
    return {
      updatedProduct: {
        title: '',
        error:null
      },
    };
  },

  methods: {
    ...mapActions(['updateProduct']),
    async submitUpdate() {
      try {
        const productId = this.$route.params.id; 
      const updatedProduct = {
        id: productId,
        title: this.updatedProduct.title,

      };
        const updatedProductData = await this.updateProduct(updatedProduct);
        router.push('/products')
        console.log('Product updated:', updatedProductData);
      } catch (error) {
        this.error=error?.message
        console.error('Failed to update the product:', error);
      }
    },
  },
};
</script>

<style scoped>
  .update-product {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input.form-control {
    width: 92%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  button.btn-primary {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
  }

  button.btn-primary:hover {
    background-color: #0056b3;
  }

  h2 {
    text-align: center;
  }
  .error-message {
  color: #ff0000;
  text-align: center;
  margin-top: 10px;
}
</style>


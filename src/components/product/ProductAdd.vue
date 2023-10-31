<template>
  <div class="add-product">
    <h2>Add Product</h2>
    <form @submit.prevent="addNewProduct" class="product-form">
      <div class="form-group">
        <label for="title">Title:</label>
        <input v-model="newProduct.title" type="text" id="title" required />
      </div>

      <div class="form-group">
        <label for="description">Description:</label>
        <textarea v-model="newProduct.description" id="description" required></textarea>
      </div>

      <div class="form-group">
        <label for="price">Price:</label>
        <input v-model="newProduct.price" type="number" id="price" required />
      </div>

      <div class="form-group">
        <label for="discountPercentage">Discount Percentage:</label>
        <input v-model="newProduct.discountPercentage" type="number" id="discountPercentage" required />
      </div>


      <div class="form-group">
        <label for="stock">Stock:</label>
        <input v-model="newProduct.stock" type="number" id="stock" required />
      </div>

      <div class="form-group">
        <label for="brand">Brand:</label>
        <input v-model="newProduct.brand" type="text" id="brand" required />
      </div>

      <div class="form-group">
        <label for="category">Category:</label>
        <input v-model="newProduct.category" type="text" id="category" required />
      </div>
      <button type="submit">Add Product</button>
    </form>
  </div>
</template>

<script>
import router from '@/router';
import { mapActions } from 'vuex';


export default {
  data() {
    return {
      newProduct: {
        title: "",
        description: "",
        price: 0,
        discountPercentage: 0,
        stock: 0,
        brand: "",
        category: "",
        thumbnail: "",
        // Add fields for other product details
      },
    };
  },
  methods: {
    ...mapActions(['addProduct']),
    addNewProduct() {
      this.addProduct(this.newProduct)
        .then(() => {
          this.newProduct = {
            title: "",
            description: "",
            price: 0,
            discountPercentage: 0,
            stock: 0,
            brand: "",
            category: "",
          };
          router.push('/products')
        })
        .catch((error) => {
          console.error('Failed to add a new product:', error);
        });
    },
  },
};
</script>
<style scoped>
.add-product {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.product-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 3px;
}

input[type="text"],
input[type="number"],
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>

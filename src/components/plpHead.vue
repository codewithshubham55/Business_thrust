<template>
  <div class="product-list">
    <vue-head>
      <title>{{ pageTitle }}</title>
    </vue-head>

    <h1 class="page-title">{{ pageTitle }}</h1>
    <router-link to="/add-product">
      <button class="add-product-button">Add Product</button>
    </router-link>
    <router-link :to="{ name: 'add-order', params: { id: 1 } }" class="add-order-link">Add Order</router-link>
  </div>
</template>

<style scoped>
.product-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px;
  margin-bottom: 25px !important;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page-title {
  font-size: 28px;
  margin: 20px 0;
  color: #333;
}

.add-product-button {
  background-color: #007BFF;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.add-product-button:hover {
  background-color: #0056b3;
}

.add-order-link {
  color: #007BFF;
  font-weight: bold;
  margin: 20px 0;
  text-decoration: none;
  transition: color 0.3s;
}

.add-order-link:hover {
  color: #0056b3;
}
</style>

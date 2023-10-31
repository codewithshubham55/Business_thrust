<template>
  <div class="add-order">
    <h2>Add Order</h2>
    <form @submit.prevent="submitOrder">
      <div class="form-group">
        <label for="customerName">Customer Name:</label>
        <input v-model="order.customerName" type="text" id="customerName" required />
      </div>

      <h3>Available Products</h3>
      <div class="product-list">
      <div class="product-card" v-for="product in getproducts" :key="product.id">
        <!-- Display product information -->
        <div class="product-info">
                    <img :src="product.thumbnail" alt="Product Thumbnail" />

          <p>{{ product.title }}</p>
          <p>Price: ${{ product.price }}</p>
          <p>Quantity: {{ product.quantity }}</p>
          <p>Total: ${{ product.total }}</p>
          <p>Discount Percentage: {{ product.discountPercentage }}%</p>
          <p>Discounted Price: ${{ product.discountedPrice }}</p>
          <!-- If you have a thumbnail image, you can display it like this -->
        </div>
        <button @click="addProductToOrder(product)">Add</button>
      </div>
    </div>

      <div v-if="orderDetails.length">
        <h3>Order Details</h3>
        <ul>
          <li v-for="detail in orderDetails" :key="detail.product.id">
            {{ detail.product.name }} - Quantity: {{ detail.quantity }}
          </li>
        </ul>
      </div>

      <div>
        <h3>Order Summary</h3>
        <p>Subtotal: ${{ order.subtotal }}</p>
        <p>Discount Amount: ${{ order.discountAmount }}</p>
        <p>Tax Amount: ${{ order.taxAmount }}</p>
        <p>Total Amount: ${{ order.totalAmount }}</p>
      </div>

      <div class="form-group">
        <button type="submit">Submit Order</button>
      </div>
    </form>
  </div>
</template>

<script>


export default {
  name: "add-order",
  data() {
    return {
      order: {
        customerName: "",
        quantity: 1,
        unitPrice: 0,
        discount: 0,
        tax: 0,
        subtotal: 0,
        discountAmount: 0,
        taxAmount: 0,
        totalAmount: 0,
      },
      orderDetails: [],
    };
  },
  mounted(){
    
    this.callcart();

  },
  computed: {
    getproducts()
    {
      return this.$store.state.cart_products
    }
  },
  methods: {
    callcart(){
      console.log(this.$route)
            const cartId = this.$route.params.id
            console.log(cartId,"cart id   ")
      this.$store.dispatch('fetchCartProducts',cartId)
    },

    addProductToOrder(product) {
      const existingDetail = this.orderDetails.find((detail) => detail.product.id === product.id);
      if (existingDetail) {
        existingDetail.quantity++;
      } else {
        this.orderDetails.push({
          product: product,
          quantity: 1,
        });
      }
      this.calculateOrderSummary();
    },
    calculateOrderSummary() {
      this.order.subtotal = this.orderDetails.reduce(
        (subtotal, detail) => subtotal + detail.quantity * detail.product.price,
        0
      );
      this.order.discountAmount = (this.order.subtotal * this.order.discount) / 100;
      this.order.taxAmount = (this.order.subtotal * this.order.tax) / 100;
      this.order.totalAmount =
        this.order.subtotal - this.order.discountAmount + this.order.taxAmount;
    },
    submitOrder() {
      this.calculateOrderSummary();
      console.log("Order submitted:", this.order);
    },
  },
 
};
</script>
<style scoped>
.add-order {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.product-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 250px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-content {
  display: flex;
  align-items: center;
}

.product-image {
  flex: 1;
}

.product-image img {
  max-width: 100%;
  height: auto;
}

.product-details {
  flex: 2;
}

.product-title {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
}

.product-price {
  font-size: 16px;
  margin: 5px 0;
}

.product-quantity {
  font-size: 14px;
  margin: 5px 0;
}

.add-button {
  background-color: #007BFF;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.add-button:hover {
  background-color: #0056b3;
}

.product-title {
  font-size: 16px;
  font-weight: bold;
}

.product-info p {
  margin: 5px 0;
}

.product-thumbnail {
  max-width: 100%;
  height: auto;
}

.add-button {
  background-color: #007BFF;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.add-button:hover {
  background-color: #0056b3;
}

h3 {
  font-size: 18px;
  margin: 10px 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

.order-summary {
  margin-top: 20px;
}

.order-summary p {
  font-size: 16px;
  margin: 5px 0;
}

.submit-button {
  background-color: #007BFF;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  transition: background-color 0.3s;
}
.product-info  img{
    
  max-width: 150px;
  max-height: 150px;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
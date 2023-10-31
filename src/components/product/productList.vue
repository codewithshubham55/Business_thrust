<template>
  <div class="product-list">
    <PlPHead></PlPHead>
    <!-- <Filter v-model="selectedCategory"  /> -->
    <div class="product-cards">
      <div
        v-for="product in displayedProducts"
        :key="product.id"
        class="product-card"
      >

        <img :src="product.thumbnail" alt="Product Thumbnail" />
        <div class="product-details">
          <h2>{{ product.title }}</h2>
          <p>{{ product.description }}</p>
        </div>
        <div class="product-info">
          <p class="product-price">${{ product.price }}</p>
          <p class="product-discount">{{ product.discountPercentage }}% Off</p>
          <p class="product-rating">Rating: {{ product.rating }}</p>
          <p class="product-stock ">Stock: {{ product.stock }}</p>
        </div>
              <div @click="goToUpdateProduct(product.id)" class="updations">Update</div>

      </div>
    </div>  
    <pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      @page-change="changePage"
    ></pagination>
  </div>
</template>

<script>
// import Filter from '../filter.vue';

import pagination from "../pagination.vue";
import PlPHead from '../plpHead.vue';


export default {
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 6,
      totalProducts: 0, // Initialize totalProducts as a data property
    };
  },
  computed: {
    products() {  
      return this.$store.state.products;
    },
    totalPages() {
      return Math.ceil(this.products?.length / this.itemsPerPage);
    },
  displayedProducts() {
  if (this.products) {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    console.log(startIndex, endIndex);
    return this.products.slice(startIndex, endIndex);
  } else {
    return [];
  }
},

  },
  components: {
    pagination,
  PlPHead
    // Filter
  },
  methods: {
     goToUpdateProduct(productId) {
      this.$router.push({ name: 'update-product', params: { id: productId } });
    },
    changePage(newPage) {
      this.currentPage = newPage;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts")  },
};
</script>
<style scoped>
.updations{
  cursor: pointer;
  text-decoration:underline ;
}
@media screen and (max-width: 768px) {
  .product-card {
    width: calc(49% - 20px);
  }
}

@media screen and (max-width: 992px) {
  .product-card {
    width: calc(32.33% - 20px);
  }
}

@media screen and (max-width: 767px) {
  .product-details h2 {
    font-size: 16px;
  }
}
.product-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.product-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product-card {
  width: calc(30.33% - 20px);
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.product-card:hover {
  transform: scale(1.02);
}

.product-card img {
  margin: 0 auto;
  /* width: 100%; */
  max-width: 150px;
  max-height: 150px;
}

.product-details {
  text-align: center;
}

.product-title {
  font-size: 18px;
  margin: 10px 0;
}

.product-description {
  font-size: 14px;
  color: #666;
}

.product-info {
  text-align: center;
  margin-top: 10px;
}

.product-price {
  color: #f60;
  font-weight: bold;
}

.product-discount {
  color: #00f;
}

.product-rating {
  color: #090;
}

.product-stock {
  color: #999;
}

</style>

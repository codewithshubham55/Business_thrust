<template>
  <div class="filter-controls">
    <div class="filter-category">
      <label for="categoryFilter">Category:</label>
      <select v-model="selectedCategory" id="categoryFilter">
        <option value="">All</option>
        <option value="smartphones">Smartphones</option>
        <option value="fragrances">Fragrances</option>
        <option value="skincare">Skincare</option>
        <option value="laptops">Laptops</option>
      </select>
    </div>

    <div class="filter-price">
      <label for="priceFilter">Price Range:</label>
      <select v-model="selectedPrice" id="priceFilter">
        <option value="">All</option>
        <option value="0-50">$0 - $50</option>
        <option value="51-100">$51 - $100</option>
      </select>
    </div>

    <div class="filter-brand">
      <label for="brandFilter">Brand:</label>
      <select v-model="selectedBrand" id="brandFilter">
        <option value="">All</option>
        <option value="Apple">Apple</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
    name:"main-filter",
  data() {
    return {
      selectedCategory: "", 
      selectedPrice: "", 
      selectedBrand: "", 
    };
  },
};
</script>

<style scoped>
.filter-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.filter-category,
.filter-price,
.filter-brand {
  margin: 10px;
}

.filter-category label,
.filter-price label,
.filter-brand label {
  font-weight: bold;
}

.filter-category select,
.filter-price select,
.filter-brand select {
  width: 150px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>

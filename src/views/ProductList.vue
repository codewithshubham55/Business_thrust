<template>
  <div>
    <product-list></product-list>
  </div>
</template>

<script>
import productList from "@/components/product/productList.vue";

export default {
 
  components: {
    "product-list": productList,
  },
};
</script>

<style>
</style>
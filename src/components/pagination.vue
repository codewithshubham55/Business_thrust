<template>
  <div class="pagination">
    <button
      v-for="page in totalPages"
      :key="page"
      @click="changePage(page)"
      :class="{ active: currentPage === page }"
    >
      {{ page }}
    </button>
  </div>
</template>

<script>
export default {
  name: "main-pagination",
  props: {
    currentPage: Number,
    totalPages: Number,
  },
  mounted() {
    this.$nextTick(()=>{
      console.log(this.currentPage,this.totalPages,"all pages")
    })
    console.log("in pagination");
  },
  methods: {
    changePage(page) {
      this.$emit("page-change", page);
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
}

button {
  margin: 5px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

button.active {
  background-color: #0056b3;
}
</style>

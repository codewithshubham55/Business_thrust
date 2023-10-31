<template>
  <div class="custom-toast" :class="toastClass">{{ message }}</div>
</template>

<script>
export default {
  props: {
    message: String,
    type: String, 
  },
  computed: {
    toastClass() {
      return {
        'success-toast': this.type === 'success',
        'error-toast': this.type === 'error',
        'info-toast': this.type === 'info',
      };
    },
  },
};
</script>

<style scoped>
.custom-toast {
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
}

.success-toast {
  background-color: #4CAF50;
}

.error-toast {
  background-color: #F44336;
}

.info-toast {
  background-color: #2196F3;
}
</style>

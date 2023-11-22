<template>
  <div>
    <div
      class="drop-area"
      @dragover.prevent="handleDragOver"
      @dragenter.prevent="handleDragOver"
      @dragleave.prevent="handleDragLeave"
      @drop.prevent="handleDrop"
      :class="{ 'drag-over': isDragOver }"
    >
      <p v-if="!file">Drag and drop files here</p>
      <p v-else>
        <strong>Name:</strong> {{ file.name }}<br />
        <strong>Size:</strong> {{ formatSize(file.size) }}
      </p>
      <input type="file" ref="fileInput" @change="handleFileInput" style="display: none" />
    </div>

    <div v-if="file && (uploading || uploadProgress === 100)">
      <h2 v-if="uploading">Uploading...</h2>
      <div class="progress-container">
        <progress :value="uploadProgress" max="100" class="progress-bar"></progress>
        <div class="progress-text">{{ uploadProgress }}%</div>
        <div v-if="uploadProgress === 100" class="completion-message">Upload completed!</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "fileUploader",
  data() {
    return {
      file: null,
      uploading: false,
      uploadProgress: 0,
      isDragOver: false,
    };
  },
  methods: {
    handleDragOver(event) {
      this.isDragOver = true;
      event.dataTransfer.dropEffect = 'copy';
    },
    handleDragLeave() {
      this.isDragOver = false;
    },
    handleDrop(event) {
      this.isDragOver = false;
      this.handleFiles(event.dataTransfer.files);
    },
    handleFileInput() {
      this.handleFiles(this.$refs.fileInput.files);
    },
    handleFiles(files) {
      if (files.length > 0) {
        this.file = files[0];
        this.uploadFile();
      }
    },
    async uploadFile() {
      try {
        this.uploading = true;
        this.uploadProgress = 0;

        const formData = new FormData();
        formData.append('file', this.file, this.file.name);

        const config = {
          onUploadProgress: (progressEvent) => {
            this.uploadProgress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          },
        };

        await axios.post('http://localhost:4000/upload', formData, config);

        this.$refs.fileInput.value = null;
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        this.uploading = false;
      }
    },

    formatSize(bytes) {
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      if (bytes === 0) return '0 Byte';
      const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    },
  },
};
</script>

<style scoped>
.drop-area {
  border: 2px dashed #3498db;
  padding: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 20px;
}

.drop-area.drag-over {
  background-color: #ecf0f1;
}

.progress-container {
  text-align: center;
}

.progress-bar {
  width: 100%;
  margin-top: 10px;
}

.progress-text {
  margin-top: 5px;
  font-weight: bold;
}

.completion-message {
  margin-top: 10px;
  padding: 5px;
  border-radius: 5px;
  color: green;
  text-align: center;
}
</style>

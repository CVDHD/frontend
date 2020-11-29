<template>
  <div class="clearfix">
    <a-upload 
      :file-list="fileList" 
      :remove="handleRemove" 
      :before-upload="beforeUpload"
      accept=".csv"
    >
      <a-button type="primary"> 
        <a-icon type="upload" /> Select File csv
      </a-button>
    </a-upload>
    <a-button
      type="primary"
      :disabled="fileList.length === 0"
      style="margin-left: 16px"
      @click="handleUpload"
    >
      Start Upload
    </a-button>
  </div>
</template>
<script>
import adminService from '@/services/getData/AdminService'
export default {
  data() {
    return {
      fileList: [],
    };
  },
  methods: {
    handleRemove(file) {
      const index = this.fileList.indexOf(file);
      const newFileList = this.fileList.slice();
      newFileList.splice(index, 1);
      this.fileList = newFileList;
    },
    beforeUpload(file) {
      this.fileList = [file];
      return false;
    },
    async handleUpload() {
      const formData = new FormData();
      formData.append('file', this.fileList[0])
      await adminService.importFileCsv(formData)
    },
  },
};
</script>

<style lang="scss" scoped>
.clearfix{
  display: flex;
  align-items: center;
  justify-content: center;
  color: white
}
</style>

<template>
    <div id="header">
        <div>
           <a-dropdown v-model="visible">
    <a class="ant-dropdown-link" @click="e => e.preventDefault()">
       <a-icon
       :style="{ fontSize: '50px', color: '#ffff' }"
       type="user" />
    </a>
    <a-menu slot="overlay" @click="handleMenuClick">
      <a-menu-item key="1">
        Đăng xuất
      </a-menu-item>
      <a-menu-item key="2">
        Đổi mật khẩu
      </a-menu-item>
      <a-menu-item key="3">
        Thông tin cá nhân
      </a-menu-item>
    </a-menu>
  </a-dropdown>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
            visible: false,
        };
  },
  methods: {
    handleMenuClick(e) {
      if (e.key === '3') {
        this.visible = false;
      }
    },
  },
    }
</script>

<style lang="scss" scoped>
    #header{
        display: flex;
        height: 150px;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        h1{
            color: white;
            font-size: 3em;
            margin-top: 1em;
            text-align: center;
            width: 100%;
        }
    }
</style>
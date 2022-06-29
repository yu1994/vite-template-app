<template>
  <div>
    <div class="box">主要按钮</div>
    <div class="box1">主要按钮</div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { queryMessageListAPI } from '@/api/message';

// const renderData = ref<PolicyRecord[]>([]);
const fetchData = async () => {
  const { data } = queryMessageListAPI();
  console.info(data);
};
fetchData();
</script>

<script lang="ts">
export default {
  name: 'Index',
};
</script>

<style scoped lang="scss">
  .box {
    width: 750px;
    height: 40px;
    margin-bottom: 15px;
    background-color: #909399;
  }

  .box1 {
    width: 750px;
    font-size: 32px;
    background-color: #909399;
  }
</style>

<template>
  <div class="box">
    <div>主要按钮</div>
    <div class="box1">主要按钮</div>
    <van-cell-group>
      <template v-for="(item, key) in renderData" :key="key">
        <van-cell :title="item.title" :value="item.time" />
      </template>
      <van-cell title="currency" :value="$currency('11.243')" />
    </van-cell-group>
    <van-button type="primary" block>确定</van-button>
  </div>
</template>

<script lang="ts" setup>
  import { queryMessageListAPI, MessageRecord } from '@/api/message';

  const renderData = ref<MessageRecord[]>([]);
  const fetchData = async () => {
    const { data } = await queryMessageListAPI();
    renderData.value = data;
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
    left: 0;
    position: relative;
    width: 750px;
    margin-bottom: 15px;
    background-color: #909399;

    .box1 {
      width: 750px;
      font-size: 32px;
      background-color: #909399;
    }
  }
</style>

<template>
  <div class="box">
    <div class="fs-xs text-primary">主要按钮</div>
    <div class="fs-sm text-success">主要按钮</div>
    <div class="fs-md bg-warning mt-6">主要按钮</div>
    <div class="fs-lg">主要按钮</div>
    <div class="fs-xl">主要按钮</div>
    <div class="fs-xxl">主要按钮</div>
    <div class="fs-xxxl">主要按钮</div>
    <div class="box1">主要按钮11</div>
    <van-cell-group>
      <template v-for="(item, key) in renderData" :key="key">
        <van-cell :title="item.title" :value="item.time" />
      </template>
      <van-cell title="currency" :value="$currency('11.243')" />
    </van-cell-group>
    <van-button type="primary" block>确定</van-button>
  </div>
</template>

<script lang="ts" name="Home" setup>
  import { queryMessageListAPI, MessageRecord } from '@/api/message';

  const renderData = ref<MessageRecord[]>([]);
  const fetchData = async () => {
    const { data } = await queryMessageListAPI();
    renderData.value = data;
  };
  fetchData();
</script>

<style scoped lang="scss">
  .box {
    position: relative;
    left: 0;
    margin-bottom: 15px;
    background-color: #909399;

    .box1 {
      font-size: 32px;
      background-color: #909399;
    }
  }
</style>

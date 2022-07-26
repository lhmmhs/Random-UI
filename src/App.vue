<script lang="ts" setup>
import Button from '@/components/Button';
import Icon from '@/components/Icon';
</script>

<template>
  <div class="container">
    <div>
      <Button class="x">默认</Button>
      <Button type="primary" class="x">主要</Button>
      <Button type="danger" class="x">危险</Button>
      <Button type="warning" class="x">警告</Button>
      <Button type="success" class="x">成功</Button>
      <Button type="primary" class="x" :disabled="true">禁止</Button>
    </div>

    <div>
      <Button loading class="x">loading</Button>
      <Button type="primary" loading class="x">loading</Button>
    </div>

    <div>
      <Icon name="code" />
      <Icon name="reload" />
      <Icon name="eye" />
    </div>
  </div>
</template>

<style>
.container {
  width: 900px;
  margin: 0 auto;
}

.x {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>

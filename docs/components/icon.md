# icon

w-ui 推荐使用 xicons 作为图标库

```shell
$pnpm install @vicons/ionicons5
```

## 使用图表

- 如果你想用例子那样直接使用，你需要全局注册组件，才能够直接在项目中使用。

<script setup lang="ts">
import { AddCircle } from '@vicons/ionicons5';
</script>

  <w-icon :color="'red'" :size="40">
    <AddCircle></AddCircle>
  </w-icon>

  <w-icon :color="'yellow'" :size="40">
    <AddCircle></AddCircle>
  </w-icon>

```vue
<script setup lang="ts">
import { AddCircle } from '@vicons/ionicons5';
</script>

<template>
  <w-icon :color="'red'" :size="40">
    <AddCircle></AddCircle>
  </w-icon>

  <w-icon :color="'yellow'" :size="40">
    <AddCircle></AddCircle>
  </w-icon>
</template>

<style scoped></style>
```

## API

### Icon Props

| 名称  | 类型           | 默认值    | 说明     |
| ----- | -------------- | --------- | -------- |
| color | string         | undefined | 图标颜色 |
| size  | number\|string | undefined | 图标大小 |

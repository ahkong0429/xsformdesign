<template>
  <div>
    <el-form-item label="按钮文字">
      <el-input v-model="data.text" placeholder="按钮文字"></el-input>
    </el-form-item>
    <el-form-item label="是否禁用">
      <el-switch v-model="data.disabled"></el-switch>
    </el-form-item>
    <el-form-item label="是否可见">
      <el-switch v-model="data.display"></el-switch>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "config-button",
  props: ["data"],
  methods: {},
};
</script>
<style lang="scss" scoped>
.dic {
  display: flex;
  margin-bottom: 5px;
}
</style>

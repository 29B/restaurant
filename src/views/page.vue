<template>
  <el-container class="body">
    <el-aside class="aside1">
      <leftnav></leftnav>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import leftnav from "./Leftnav";
export default {
  name: "page",
  components: {
    leftnav,
  }
};
</script>

<style scoped>
.aside1 {
  height: 800px;
  width: 120px!important;
}
.body {
  background-color: rgb(249, 250, 249);
}
</style>

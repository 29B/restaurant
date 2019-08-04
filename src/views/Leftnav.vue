
<template>
  <div class="left-nav">
    <el-menu>
      <el-menu-item @click="push()">
        <!-- index="/main" -->
        <i class="icon iconfont icon-wodezichan"></i>
        <span class="span">收银</span>
      </el-menu-item>

      <el-menu-item>
        <i class="icon iconfont icon-dianpu"></i>
        <span class="span">店铺</span>
      </el-menu-item>

      <el-menu-item>
        <i class="icon iconfont icon-hanbao"></i>
        <span class="span">商品</span>
      </el-menu-item>

      <el-menu-item>
        <i class="icon iconfont icon-huiyuanqia"></i>
        <span class="span">会员</span>
      </el-menu-item>

      <el-menu-item>
        <i class="icon iconfont icon-shijian"></i>
        <span class="span">抢购</span>
      </el-menu-item>

      <el-menu-item>
        <i class="icon iconfont icon-tongji"></i>
        <span class="span">统计</span>
      </el-menu-item>·
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Leftnav",
  methods: {
    push() {
      this.$router.push("Leftnav2");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.span {
  font-size: 10px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: #fff;
}
.iconfont {
  font-size: 24px;
}
.el-menu-item i {
  color: #fff;
}
.left-nav .el-menu {
  padding: 0px;
  margin: 0px;
  width: 100px;
  height: 800px;
  background-color: #409eff;
}
.left-nav .el-menu-item {
  list-style: none;
  text-align: center;
  border-bottom: 1px solid #20a0ff;
}
</style>

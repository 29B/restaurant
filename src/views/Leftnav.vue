
<template>
  <div class="left-nav">
    <el-menu>
      <el-menu-item @click="push()">
        <!-- index="/main" -->
        <i class="icon iconfont icon-wodezichan"></i>
        <span class="span">收银</span>
      </el-menu-item>

      <el-menu-item @click="push1()">
        <i class="icon iconfont icon-dianpu"></i>
        <span class="span">店铺</span>
      </el-menu-item>

      <el-menu-item @click="push2()">
        <i class="icon iconfont icon-hanbao"></i>
        <span class="span">电影</span>
      </el-menu-item>

      <el-menu-item @click="push3()">
        <i class="icon iconfont icon-huiyuanqia"></i>
        <span class="span">会员</span>
      </el-menu-item>

      <el-menu-item @click="push4()">
        <i class="icon iconfont icon-shijian"></i>
        <span class="span">评论</span>
      </el-menu-item>

      <el-menu-item @click="push5()">
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
    },
    push1() {
      this.$router.push("shop");
    },
    push2() {
      this.$router.push("movie");
    },
    push3() {
      this.$router.push("vip");
    },
    push4() {
      this.$router.push("comment");
    },
    push5() {
      this.$router.push("tongji");
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
  padding: 0;
}
.left-nav .el-menu {
  padding: 0px;
  margin: 0px;
  height: 760px;
  background-color: #409eff;
}
.left-nav .el-menu-item {
  list-style: none;
  text-align: center;
  border-bottom: 1px solid #20a0ff;
  width: 80px;
}
</style>

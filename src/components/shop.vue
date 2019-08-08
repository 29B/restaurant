<template>
  <div>
    <el-container>
      <el-main>
        <el-card class="box-card" shadow="hover">
          <table cellpadding="15" cellspacing="20">
            <tr>
              <td rowspan="2">
                <span class="span1">小名堂老冰粉（十陵）</span>
                <hr />
                <span>月售89单</span>
              </td>
              <td>起送价</td>
              <td>商家配送</td>
              <td>平均商家配送</td>
              <td>
                <i class="icon iconfont icon-weiguanzhu"></i>
                <span>收藏</span>
              </td>
            </tr>
            <tr>
              <td>20元</td>
              <td>4分钟</td>
              <td>30分钟</td>
            </tr>
          </table>
        </el-card>
      </el-main>
      <el-footer>
        <el-menu class="shop-menu">
          <el-menu-item>
            <h1>公告与活动</h1>
          </el-menu-item>
          <el-menu-item>
            <p
              class="ex"
            >This is an ordinary paragraph. Notice that this text is red. The default text-color for a page is defined in the body selector.This is a paragraph with class="ex". This text is blue.</p>
          </el-menu-item>
          <el-menu-item>
            <a style="color: #606266;">
              <i class="icon iconfont icon-manjianyouhui" style="color:#d6204b;font-size:18px"></i> 在线支付满28减5
            </a>
          </el-menu-item>
          <el-menu-item>
            <a style="color: #606266;">
              <i class="icon iconfont icon-tejia" style="color:#36ab60;font-size:13px"></i>单人无限精彩套餐
            </a>
          </el-menu-item>
          <el-menu-item>
            <a style="color: #606266;">
              <i class="icon iconfont icon-weibiaoti1" style="color:#1296db;font-size:18px"></i>酒水满10元打八折
            </a>
          </el-menu-item>
          <el-menu-item>
            <a></a>
          </el-menu-item>
        </el-menu>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   tableData: [
      //     {
      //       price: "20元",
      //       time: "4分钟",
      //       pacetime: "30分钟"
      //     }
      //   ]
    };
  }
};
</script>

<style>
.box-card {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.left {
  width: 300px;
  margin: 0px;
}

li {
  text-align: left;
}
.span1 {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 20px;
  word-spacing: 10%;
  color: #606266;
}
.span2 {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 10%;
  color: #606266;
}
h1 {
  color: #606266;
}
p.ex {
  color: rgb(218, 89, 89);
}
</style>

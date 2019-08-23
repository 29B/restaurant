<template>
  <div class="body">
    <div>
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      <span>KFK824744323</span>
    </div>
    <hr />
    <div class="main">
      <div class="head0">
        <table cellspacing="10" class="head1">
          <tr>
            <td>
              <i class="icon iconfont icon-shoucang"></i>
            </td>
            <td>
              <i class="icon iconfont icon-pingjia"></i>
            </td>
            <td>
              <i class="icon iconfont icon-hongbao"></i>
            </td>
            <td>
              <el-badge
                value="hot"
                class="icon iconfont icon-xiaoxi"
                style="font-size: 24px;margin-right: 20px"
              ></el-badge>
            </td>
          </tr>
          <tr>
            <td style="padding-right: 200px;">收藏</td>
            <td style="padding-right: 200px;">评价</td>
            <td style="padding-right: 200px;">红包/卡卷</td>
            <td style="padding-right: 200px;">消息</td>
          </tr>
        </table>
      </div>

      <div class="packg">
        <table cellspacing="5" class="head2">
          <tr>
            <td style="padding-right: 200px;">
              <h3>我的钱包</h3>
            </td>
            <td></td>
            <td style="padding-right: 200px;">
              <span>点击进入钱包</span>
            </td>
          </tr>
          <tr>
            <td style="padding-right: 200px;color:#303133">6000</td>
            <td style="padding-right: 200px;color:#303133">10万</td>
            <td style="padding-right: 200px;color:#303133">5万</td>
          </tr>
          <tr>
            <td style="padding-right: 200px;color:#606266">借钱</td>
            <td style="padding-right: 200px;color:#606266">模拟信用卡</td>
            <td style="padding-right: 200px;color:#606266">模拟互助</td>
          </tr>
          <tr>
            <td style="padding-right: 200px;color:#909399">大约可借</td>
            <td style="padding-right: 200px;color:#909399">最高额度</td>
            <td style="padding-right: 200px;color:#909399">领互助金</td>
          </tr>
        </table>
      </div>
      <div class="block">
        <span class="demonstration"></span>
        <el-carousel height="150px" style="margin-top:15px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="gongju">
        <table cellspacing="5" class="head3">
          <tr>
            <td style="padding-right: 200px;">
              <h3>推荐工具</h3>
            </td>
            <td></td>
            <td style="padding-right: 200px;"></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <i
                class="icon iconfont icon-tongji"
                style="padding-right: 140px;color:#303133；font-size: 16px"
              ></i>
              <p>邀请有礼</p>
            </td>
            <td>
              <i
                class="icon iconfont icon-tongji"
                style="padding-right: 140px;color:#303133；font-size: 16px"
              ></i>
              <p>手机充值</p>
            </td>
            <td>
              <i
                class="icon iconfont icon-tongji"
                style="padding-right: 140px;color:#303133；font-size: 16px"
              ></i>
              <p>出行交通</p>
            </td>
            <td>
              <i
                class="icon iconfont icon-tongji"
                style="padding-right: 140px;color:#303133；font-size: 16px"
              ></i>
              <p>税率计算</p>
            </td>
          </tr>
          <tr>
            <td>
              <i
                class="icon iconfont icon-tongji"
                style="padding-right: 140px;color:#303133；font-size: 16px"
              ></i>
              <p>推荐办卡</p>
            </td>
            <td>
              <i
                class="icon iconfont icon-tongji"
                style="padding-right: 140px;color:#303133；font-size: 16px"
              ></i>
              <p>会员中心</p>
            </td>
            <td>
              <i
                class="icon iconfont icon-tongji"
                style="padding-right: 140px;color:#303133；font-size: 16px"
              ></i>
              <p>发票助手</p>
            </td>
            <td>
              <i
                class="icon iconfont icon-tongji"
                style="padding-right: 140px;color:#303133；font-size: 16px"
              ></i>
              <p>发票助手</p>
            </td>
          </tr>
          <tr>
            <td>
              <i
                class="icon iconfont icon-tongji"
                style="padding-right: 140px;color:#303133；font-size: 16px"
              ></i>
              <p>发票助手</p>
            </td>
            <td>
              <i
                class="icon iconfont icon-tongji"
                style="padding-right: 140px;color:#303133；font-size: 16px"
              ></i>
              <p>我要合作</p>
            </td>
            <td>
              <i
                class="icon iconfont icon-tongji"
                style="padding-right: 140px;color:#303133；font-size: 16px"
              ></i>
              <p>关于模拟</p>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <hr />
    <div class="biaoqian">
      <i class="icon iconfont icon-web-icon-" style="font-size: 30px;"></i>
      <i class="icon iconfont icon-icon-test" style="font-size: 30px;"></i>
    </div>
  </div>
</template>
<style>
.iconfont {
  font-size: 24px;
  /* margin-right: 20px; */
  padding-right: 200px;
  cursor: pointer;
}
p{
  padding-right: 140px
}
td {
  cursor: pointer;
}
.head0 {
  height: 100px;
  position: relative;
}
.head1 {
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);

  position: absolute;
  /*居中的关键*/
}
.packg {
  height: 100px;
  position: relative;
}
.head2 {
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  position: absolute;
  /*居中的关键*/
}
.gongju {
  height: 300px;
  position: relative;
}
.head3 {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  position: absolute;
  /*居中的关键*/
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.body {
  margin: 0 auto;
}
</style>

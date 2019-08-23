<template>
  <el-tabs :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane label="电影">
      <div class="box">
        <div>
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>

        <div>
          <el-row>
            <el-col :span="8" v-for="(o, index) in 9" :key="o" :offset="index > 0 ? 1 : 0">
              <el-card :body-style="{ padding: '0px' }">
                <img
                  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  class="image"
                />
                <div style="padding: 14px;">
                  <span>好看的电影</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>

        <div>
          <div>
            <el-select v-model="label" placeholder="品牌">
              <el-option
                v-for="item in cities1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
              </el-option>
            </el-select>

            <el-select v-model="value" placeholder="全城">
              <el-option
                v-for="item in cities"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
              </el-option>
            </el-select>

          </div>
          <el-table
            :data="priceData"
            style="width: 100%"
            :default-sort="{prop: 'price', order: 'descending'}"
            class="table"
          >
            <el-table-column prop="name" label="影城" width="180"></el-table-column>
            <el-table-column prop="price" label="价格" sortable width="180"></el-table-column>
            <el-table-column prop="lang" label="距离" sortable width="180"></el-table-column>
          </el-table>
          
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="商城">商城</el-tab-pane>
    <el-tab-pane label="演出">演出</el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  methods: {},
  data() {
    return {
      tabPosition: "top",
      count: 0,
      currentDate: new Date(),
      cities1: [
        {
          value: "23",
          label: "太平洋影城"
        },
        {
          value: "20",
          label: "万达影城"
        },
        {
          value: "11",
          label: "星美国际影城"
        },
        {
          value: "8",
          label: "CGV影城"
        },
        {
          value: "6",
          label: "国际影城"
        },
        {
          value: "3",
          label: "大地影院"
        }
      ],
      cities: [
        {
          value: "Beijing",
          label: "北京"
        },
        {
          value: "Shanghai",
          label: "上海"
        },
        {
          value: "Nanjing",
          label: "南京"
        },
        {
          value: "Chengdu",
          label: "成都"
        },
        {
          value: "Shenzhen",
          label: "深圳"
        },
        {
          value: "Guangzhou",
          label: "广州"
        }
      ],
      priceData: [{
          price: '20起',
          name: 'CGV影城',
          lang: '1518米'
        }, {
          price: '45起',
          name: '星美国际影城（1号店）',
          lang: '1517米'
        }, {
          price: '18起',
          name: '星美国际影城',
          lang: '1519米'
        }, {
          price: '16起',
          name: '太平洋影城',
          lang: '1516米'
        }],
      value: ""
    };
  }
};
</script>

<style >
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100px;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.el-col-8 {
  width: 7%;
  cursor: pointer;
}
</style>
<template>
  <div style="margin:0;height:100%">
    <div :data="info">
      <h1>折线图堆叠</h1>
    </div>
    <div id="container" style="height: 400px"></div>
  </div>
</template>

<script>
// import api from 'F:/关于前端/restaurant/src/pulgins/axios';

export default {
  name: "tongji",
  data() {
    return {
      Natural: "",
      Integer: "",
      Float: "",
      Character: "",
      String: ""
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      var echarts = require("echarts");
      var myChart = echarts.init(document.getElementById("container"));
      myChart.setOption({
        title: {
          text: "折线图堆叠"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "米线",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "米粉",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "木须肉炒饭",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "牛奶豆腐",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      });
    },
  //   created:function(){
  //      axios.get('/action/mock')
  //      .then(response=>{
  //          this.series.name=response.data;
  //      })
  //  },
  }
  
};
</script>

<style>
</style>
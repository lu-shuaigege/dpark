<template>
  <div class="newsfocus">
    <div class="newsfocus-banner">
      <img :src="banners.image" alt />
    </div>
    <p class="newsdetail-con-l-title">
        <span>产品服务 > </span>
        <span class="title">智慧交通解决方案</span>
    </p>
    <div class="trafficplan-first">
        <div>
            <p class="trafficplan-first1">智慧交通行业解决方案</p>
            <p class="trafficplan-first2">园区测绘致力于智慧大交通全流程解决方案，规划、交管、公交、停车等角度，打造集项目咨询、软件开发、运营服务、工程建设于一体的全流程行业解决方案。</p>
            <p class="trafficplan-first3">4-4-3专业技术服务体系：</p>
            <div style="margin-top:15px;">
                <img style="float:left" src="../../assets/imgs/product/trafficplan-img2.png" alt="">
                <div style="display:inline-block">
                    <p class="trafficplan-first4">大领域：</p>
                    <p class="trafficplan-first5">交通规划、交通管理、公共交通、智慧停车</p>
                    <p class="trafficplan-first4" style="margin-top:28px;">个阶段：</p>
                    <p class="trafficplan-first5">规划、设计、建设、运营</p>
                    <p class="trafficplan-first4" style="margin-top:28px;">类产品：</p>
                    <p class="trafficplan-first5">服务、软件、工程</p>
                </div>
            </div>
        </div>
        <img class="img1" src="../../assets/imgs/product/trafficplan-img1.png" alt="">
    </div>
    <div class="trafficplan-second">
        <div class="trafficplan-second-one">
            <div class="onelist">
                <div class="onelist1">
                    <div class="onelist-img listimg1"></div>
                    <p class="onelist1text">智慧交通规划</p>
                </div>
            </div>
            <div class="onelist">
                <router-link to="/intelligencemanagement" >
                <div class="onelist1" style="width:100%;height:100%">
                    <div class="onelist-img listimg2"></div>
                    <p class="onelist1text">智慧交管</p>
                </div>
                </router-link>
            </div>
            <div class="onelist">
                <router-link to="/smartbus">
                <div class="onelist1" style="width:100%;height:100%">
                    <div class="onelist-img listimg3"></div>
                    <p class="onelist1text">智慧公交</p>
                </div>
                </router-link>
            </div>
            
            <div class="onelist">
                <div class="onelist1">
                    <div class="onelist-img listimg4"></div>
                    <p class="onelist1text">智慧停车</p>
                </div>
            </div>
        </div>
        <div class="trafficplan-second-two">
            <table cellspacing="0">
                <tr style="background-color: #1280e1;">
                    <th style="width: 350px;"></th>
                    <th>智慧交通规划</th>
                    <th>智慧交管</th>
                    <th>智慧公交</th>
                    <th>智慧停车</th>
                </tr>
                <tr style="background-color: #e1ecf6;height: 120px;">
                    <td>服务产品</td>
                    <td>
                        <p>数据服务</p>
                        <p>技术服务</p>
                        <p>项目咨询服务</p>
                    </td>
                    <td>
                        <p>数据服务</p>
                        <p>专业运营服务</p>
                        <p>项目咨询服务</p>
                    </td>
                    <td>
                        <p>数据服务</p>
                        <p>专业运营服务</p>
                        <p>项目咨询服务</p>
                    </td>
                    <td></td>
                </tr>
                <tr style="background-color: #cae0f3;height: 250px;">
                    <td>软件产品</td>
                    <td>
                        <p>智慧规划决策支撑系统</p>
                        <p>城市交通模型</p>
                    </td>
                    <td>
                        <p>智能交通数据共享平台</p>
                        <p>交通0D分析系统</p>
                        <p>交通安全（事故）分析系统</p>
                        <p>路口档案系统</p>
                        <p>工程项目管理系统</p>
                        <p>设备运维管理系统</p>
                        <p>智能交通仿真决策支持系统</p>
                        <p>高速公路网格化集成指挥调度系统</p>
                    </td>
                    <td>
                        <p>公交规划管理应用系统</p>
                        <p>公交指挥调度系统</p>
                        <p>智慧公交大数据系统</p>
                        <p>公交行业效益监管应用系统</p>
                    </td>
                    <td>
                        
                    </td>
                </tr>
                <tr style="background-color: #e1ecf6;height: 150px;">
                    <td>工程产品</td>
                    <td></td>
                    <td>
                        <p>智能交通集成平台</p>
                        <p>诱导发布系统</p>
                        <p>智慧交通工程</p>
                    </td>
                    <td>
                        <p>公交行业安全监管平台</p>
                        <p>公交出行信息服务应用系统</p>
                        <p>场站管理应用系统</p>
                        <p>智慧公交工程</p>
                    </td>
                    <td>
                        <p>停车收费管理系统</p>
                        <p>智慧停车工程</p>
                    </td>
                </tr>
            </table>
        </div>
    </div>

    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Footer from "@/components/footer/footer.vue";
export default {
  data() {
    return {
      banners:'',
    };
  },
  components: {
    Footer
  },
  created() {
    //获取banner
    this.$api.get("banners/product-child", {}, res => {
        if (res.data.code == 1) {
            this.banners = res.data.data[0];
        } else {
        }
    });
  },
  methods: {
    

  }
};
</script>

<style scoped>
.newsfocus-banner {
  width: 100%;
  /* height: 470px; */
  margin-top: 70px;
  font-size: 0;
}
.newsfocus-banner img {
  width: 100%;
  /* height: 470px; */
}
.trafficplan-first{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    height: 490px;
    padding-top: 110px;
}
.img1{
    width: 440px;
	height: 440px;
    margin-left: 280px;
}
.trafficplan-first1{
    font-size: 24px;
	font-weight: bold;
	color: #333333;
}
.trafficplan-first2{
    width: 480px;
    font-size: 14px;
    color: #333;
    line-height: 24px;
    margin-top: 30px;
}
.trafficplan-first3{
    font-size: 18px;
	color: #333333;
    margin-top: 50px;
}
.trafficplan-first4{
    font-size: 16px;
	color: #333333;
    margin-left: 10px;
}
.trafficplan-first5{
    font-size: 14px;
	color: #666666;
    margin-left: 10px;
}
.trafficplan-second{
    width: 100%;
    height: 1159px;
	background-color: #f8f8f8;
}
.trafficplan-second-one{
    width: 1000px;
    margin: 0 auto;
    margin-top: 77px;
    display: flex;
    justify-content: space-between;
    padding-top: 110px;
    text-align: center;
}
.trafficplan-second-two{
    width: 1200px;
    margin: 0 auto;
    margin-top: 110px;
}
.onelist{
    width: 200px;
	height: 240px;
	background-color: #ffffff;
    color: #222;
    cursor: pointer;
}
.onelist-img{
    width: 53px;
    height: 45px;
    margin: 0 auto;
    /* margin-top: 54px; */
}
.onelist1{
    width: 100%;
    height: 100%;
    padding-top: 54px;
}
.onelist1 p{
    margin-top: 42px;
    color: #222;
}
.onelist:hover{
    background-color: #1280e1;
    color: #ffffff;
}
.onelist1:hover .onelist1text{
    color: #ffffff;
}
.listimg1{
    background: url(../../assets/imgs/product/grey1.png) no-repeat;
}
.onelist:hover .listimg1{
    background: url(../../assets/imgs/product/white1.png) no-repeat;
}
.listimg2{
    background: url(../../assets/imgs/product/grey2.png) no-repeat;
}
.onelist:hover .listimg2{
    background: url(../../assets/imgs/product/white2.png) no-repeat;
}
.listimg3{
    background: url(../../assets/imgs/product/grey3.png) no-repeat;
    background-position: center;
}
.onelist:hover .listimg3{
    background: url(../../assets/imgs/product/white3.png) no-repeat;
}
.listimg4{
    background: url(../../assets/imgs/product/grey4.png) no-repeat;
}
.onelist:hover .listimg4{
    background: url(../../assets/imgs/product/white4.png) no-repeat;
}
th{
    width: 1200px;
	height: 60px;
    font-size: 16px;
	color: #ffffff;
    text-align: left;
    padding-left: 56px;
}
td{
    font-size: 14px;
	color: #666666;
    padding-left: 56px;
    line-height: 24px;
}
.newsdetail-con-l-title{
  width: 1200px;
  margin: 0 auto;
  font-size: 14px;
  color: #666666;
  height: 30px;
  margin-top: 20px;
}
.newsdetail-con-l-title .title{
    color: #1280e1;
}
</style>



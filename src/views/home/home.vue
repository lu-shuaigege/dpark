<template>
  <!-- 首页 -->
  <div class="home">
    <!-- <full-page :options="options" ref="fullpage"> -->
      <!-- 轮播图 -->
      <el-carousel height="28vw" width="100%" arrow="always" indicator-position="none">
        <el-carousel-item v-for="(item,index) in imgs" :key="index">
          <a v-show="item.url !==''" :href="item.url"><img :src="item.image" style="width:100%" alt /></a>
          <img v-show="item.url ==''" :src="item.image" style="width:100%" alt />
        </el-carousel-item>
      </el-carousel>
      <!-- 六张图片 -->
      <div class="siximg">
        <div class="siximg_content">
          <div class="siximg_title">智慧城市整体解决方案</div>
          <div class="siximg_title_E">Integrated Solution of Smart City</div>
          <div class="siximg_img">
            <div class="siximg_img_div">
              <img src="../../assets/imgs/home/home-img1.png" alt />
              <router-link to="/naturalresources">
              <div class="cover">
                <div class="covercon">
                  园区测绘致力于为自然资源行业提供测绘地理信息全套服务，打造从数据采集（测绘、调查）、数据加工建库、数据融合应用，到软件系统开发的完整解决方案。
                </div>
                <img src="../../assets/imgs/home/programme-arrow.png" alt="">
              </div>
              </router-link>
              <div style="margin-top: 15px;">自然资源空间信息服务解决方案</div>
            </div>
            <div class="siximg_img_div">
              <img src="../../assets/imgs/home/home-img2.png" alt />
              <router-link to="/trafficplan">
              <div class="cover">
                <div class="covercon">
                  园区测绘致力于智慧大交通全流程解决方案，从规划、交管、公交、停车等角度，打造集项目咨询、软件开发、运营服务、工程建设于一体的全流程行业解决方案。
                </div>
                <img src="../../assets/imgs/home/programme-arrow.png" alt="">
              </div>
              </router-link>
              <div style="margin-top: 15px;">智慧交通解决方案</div>
            </div>
            <div class="siximg_img_div">
              <img src="../../assets/imgs/home/home-img3.png" alt />
              <router-link to="/assetintelligence">
              <div class="cover">
                <div class="covercon">
                  通过融入智能科技，整合GIS、IoT和机器学习等技术，为地产与建筑资产构建统一、高效的资产智能化管理链，提供资产信息采集、运维、统计分析、可视化和决策分析一体化的解决方案。
                </div>
                <img src="../../assets/imgs/home/programme-arrow.png" alt="">
              </div>
              </router-link>
              <div style="margin-top: 15px;">资产智能化运营管理平台</div>
            </div>
          </div>

          <div class="siximg_img">
            <div class="siximg_img_div">
              <img src="../../assets/imgs/home/home-img4.png" alt />
              <router-link to="/smarttown">
              <div class="cover">
                <div class="covercon">
                  围绕基层工作特点及便民服务需要，建设集党建引领、审批服务、综合执法、网格管理、指挥调度、经济发展于一体的乡镇（街道）审批服务综合执法一体化平台，支撑配套基层“1+4”改革。
                </div>
                <img src="../../assets/imgs/home/programme-arrow.png" alt="">
              </div>
              </router-link>
              <div style="margin-top: 15px;">审批服务综合执法一体化平台</div>
            </div>
            <div class="siximg_img_div">
              <img src="../../assets/imgs/home/home-img5.png" alt />
              <router-link to="/environmentalprotection">
              <div class="cover">
                <div class="covercon">
                  针对城市环境中空气、水、固废等污染物，开展实时监测、智能分析、智慧化管理的综合大数据分析平台。通过物联网传感器网络，采集、存储、归档各项污染物浓度的时空分布大数据，完成对各项环境指标的实时动态监测。
                </div>
                <img src="../../assets/imgs/home/programme-arrow.png" alt="">
              </div>
              </router-link>
              <div style="margin-top: 15px;">智慧环保大数据平台</div>
            </div>
            <div class="siximg_img_div">
              <img src="../../assets/imgs/home/home-img6.png" alt />
              <router-link to="/administrationlaw">
              <div class="cover">
                <div class="covercon">
                  感知、分析、服务、指挥、监察，五位一体；大集中、大整合、大共享，通过物联、大数据等技术手段，辅助完善执法程序、提升执法效能、创新执法模式，提升公共服务水平。
                </div>
                <img src="../../assets/imgs/home/programme-arrow.png" alt="">
              </div>
              </router-link>
              <div style="margin-top: 15px;">综合行政执法智慧管理平台</div>
            </div>
          </div>
          <div>
            <router-link to="/productservice"><p class="siximg-more">查看更多</p></router-link>
          </div>
        </div>
      </div>
      <!-- 简介 -->
      <div class="introduction">
        <div class="introduction-title">
          <p class="title-C">园区测绘</p>
          <p class="title-E">Company Profile</p>
        </div>
        <div class="introduction-con">
          <div class="introduction-con-title">
            苏州工业园区测绘地理信息有限公司
          </div>
          <div class="introduction-con-c" v-html="companyprofile">

          </div>
          <router-link to="/about"><button>查看更多</button></router-link>
        </div>
      </div>
      <!-- 新闻 -->
      <div class="news">
        <div class="news_content">
          <p class="title-C">新闻资讯</p>
          <p class="title-E">News Information</p>
          <div class="news_bottom">
            <div class="news_left">
              <div class="left_top">
                <div class="class_title">市场动态</div>
                <div class="hengxian"></div>
              </div>
              <div class="tuwen" @click="toDeail(news1_top.id,news1_top.column_id)">
                <!-- 左边新闻 -->
                <div class="tuwen_left">
                  <img :src="news1_top.cover_image" alt />
                </div>
                <div class="tuwen_right">
                  <div class="biaoti">
                    <p>{{news1_top.title}}</p>
                  </div>
                  <div class="xiangqing">{{news1_top.description}}</div>
                </div>
              </div>
              <div class="news_list" v-for="(item,index) in news1list" :key="index*1" v-show="index>0&&index<5" @click="toDeail(item.id,item.column_id)">
                <div class="list_top">
                  <span></span>
                  <div class="list_title">{{item.title}}</div>
                  <div class="list_time">{{item.published_at}}</div>
                </div>
                <div class="list_content">{{item.description}}</div>
              </div>
            </div>
            <!-- 右边新闻 -->
            <div class="news_right">
              <div class="left_top">
                <div class="class_title">公司活动</div>
                <div class="hengxian"></div>
              </div>
              <div class="tuwen" @click="toDeail(news2_top.id,news2_top.column_id)">
                <!-- 左边新闻 -->
                <div class="tuwen_left">
                  <img :src="news2_top.cover_image" alt />
                </div>
                <div class="tuwen_right">
                  <div class="biaoti">
                    <p>{{news2_top.title}}</p>
                  </div>
                  <div class="xiangqing">{{news2_top.description}}</div>
                </div>
              </div>
              <div class="news_list" v-for="(item,index) in news2list" :key="index+2" v-show="index>0&&index<5" @click="toDeail(item.id,item.column_id)">
                <div class="list_top">
                  <span></span>
                  <div class="list_title">{{item.title}}</div>
                  <div class="list_time">{{item.published_at}}</div>
                </div>
                <div class="list_content">{{item.description}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 联系我们 -->
      <div class="map footerH" id="add">
        <p class="title-C1">联系我们</p>
        <p class="title-E1">contact us</p>
        <div class="mapcontent">
          <div class="contact_left">
            <div class="mapleft">
              <div class="address_left">
                <div class="bluelogo">
                  <img class="bluelogoimg" src="../../assets/imgs/home/bluelogo.png" alt />
                </div>
                <div class="addresslist">
                  <img src="../../assets/imgs/home/address.png" alt />
                  <p>苏州工业园区苏虹中路101号</p>
                </div>
                <div class="addresslist">
                  <img src="../../assets/imgs/home/tel.png" alt />
                  <p>0512-67611188</p>
                </div>
                <div class="addresslist">
                  <img src="../../assets/imgs/home/email.png" alt />
                  <p>hr@dpark.com.cn</p>
                </div>
              </div>
              <div class="address_right">
                <img src="../../assets/imgs/home/QRcode.png" alt />
              </div>
            </div>
          </div>
          <div class="contact_right">
            <div class="form">
              <input type="text" placeholder="请输入联系方式" v-model="inputform.tel"/>
              <input type="text" placeholder="请输入邮箱" v-model="inputform.email"/>
              <textarea rows="3" cols="20" placeholder="输入需求描述..." v-model="inputform.demand"></textarea>
              <button @click="submit()">提 &nbsp;交</button>
            </div>
          </div>
        </div>
      </div>
      <Footer class="footer"></Footer>
    <!-- </full-page> -->
  </div>
</template>
<script>
import Footer from "@/components/footer/footer.vue";
export default {
  data() {
    return {
      companyprofile: "",
      imgs: [],
      news1_top: [],
      news1list: [],
      news2_top: [],
      news2list: [],
      inputform:{
        tel:'',
        email:'',
        demand:''
      }
      // isCompliant:false
    };
  },
  components: {
    Footer
  },
  // mounted(){
  //   console.log(this.isCompliant,this.$route.query.isCompliant)
  //   if(this.isCompliant){
  //     console.log(11)
  //       document.documentElement.scrollTop = 10000
  //   }
  // },
  created() {
    console.log(this.$route.query.isCompliant)
    this.isCompliant = this.$route.query.isCompliant
    //获取banner
    this.$api.get("banners/index", {}, res => {
      if (res.data.code == 1) {
        this.imgs = res.data.data;
      } else {
      }
    });

    //获取公司简介
    this.$api.get("company-profile", {}, res => {
      if (res.data.code == 1) {
        this.companyprofile = res.data.data.content;
      } else {
      }
    });

    //获取新闻列表
      this.$api.get("news-columns/"+1+"/news", {}, res => {
        if (res.data.code == 1) {
            this.news1list = res.data.data.data;
            this.news1_top = res.data.data.data[0];
        } else {
        }
      });

      //获取新闻列表
      this.$api.get("news-columns/"+2+"/news", {}, res => {
        if (res.data.code == 1) {
            this.news2list = res.data.data.data;
            this.news2_top = res.data.data.data[0];
        } else {
        }
      });

    this.a();
  },
  methods: {
    submit(){
      let regphone = /^((0\d{2,3}-?\d{7,8})|(1[3456789]\d{9}))$/;
      if(!regphone.test(this.inputform.tel)){
        this.$notify({
          title: '提示',
          message: '电话格式不正确',
          type: 'warning'
        });
        return
      }
      let regemail = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
      if(!regemail.test(this.inputform.email)){
        this.$notify({
          title: '提示',
          message: '邮箱格式不正确',
          type: 'warning'
        });
        return
      }

      //提交表单
      this.$api.post("demands", 
      {
        phone:this.inputform.tel,
        email:this.inputform.email,
        demand:this.inputform.demand
      }, 
      res => {
        if (res.data.code == 1) {
            this.$notify({
              title: '提示',
              message: "提交成功",
              type: 'warning'
            });
            this.inputform.tel = '';
            this.inputform.email = '';
            this.inputform.demand = '';
        } else {
          this.$notify({
            title: '提示',
            message: res.data.msg,
            type: 'warning'
          });
        }
      });
    },
    toDeail(x,y){
      sessionStorage.setItem("detailid",x)
      
      sessionStorage.setItem("category",y)
      this.$router.push({
          name: 'newsdetail',
          query: {
            id: x
          }
        })

    },
    a: function() {
      // console.log($(".tuwen").html());
    },
    
  }
};
</script>
<style scoped>
.introduction-con-c > strong > p > strong > img {
  display: none;
}
.home {
  padding-top: 70px;
  padding-bottom: 100px;
  position: relative;
}
input::-webkit-input-placeholder {
  color: #999;
  font-size: 14px;
  font-family: 微软雅黑;
}
textarea::-webkit-input-placeholder {
  color: #999;
  font-size: 14px;
  font-family: 微软雅黑;
}
/* 地图 */
.map {
  width: 100%;
  height: 650px;
  background: url("../../assets/imgs/home/map-bg.png");
  position: relative;
  /* display: flex;
  justify-content: center; */
  align-items: center;
  /* margin-top: -20px !important; */
}
.mapcontent {
  width: 1200px;
  /* height: 650px; */
  /* display: flex; */
  margin: 0 auto;
}
.contact_left {
  width: 650px;
  height: 447px;
  background: url(../../assets/imgs/home/map-small.png) no-repeat;
  background-size: 100% 100%;
  margin-top: 32px;
  position: relative;
  float: left;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.mapleft {
  width: 340px;
  height: 110px;
  background-color: #ffffff;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.15);
  padding: 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 97px;
  left: 236px;
}
.address_right{
  width: 121px;
	height: 121px;
}
.address_right img{
  width: 121px;
	height: 121px;
}

.address_left {
  width: 207px;
  height: 116px;
}
.bluelogo {
  width: 204px;
  height: 22px;
  margin-bottom: 16px;
}
.addresslist {
  width: 208px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}

.addresslist img {
  width: 18px;
  height: 18px;
  border-radius: 4px;
  margin-right: 10px;
}
.addresslist p {
  width: 179px;
  height: 14px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 14px;
  letter-spacing: 0px;
  color: #333333;
}

.footer {
  position: absolute;
  bottom: 0px;
  left: 0px;
}
/* 六图 */
.siximg {
  width: 100%;
  /* height: 65vw;x */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  margin-top: 50px;
}

.siximg_content {
  width: 91vw;
  min-width: 1100px;
  /* height: 838px; */
  box-sizing: border-box;
  overflow: hidden;
  padding-top: 40px;
  /* margin: 0 auto; */
  margin: 0 0;
}

.siximg_title {
  width: 360px;
  font-size: 36px;
  color: #333333;
  margin: 0 auto;
  text-align: center;
}
.siximg_title_E{
  font-size: 20px;
  color: #c1c1c1;
  margin: 0 auto;
  width: 360px;
  text-align: center;
}
.siximg_img {
  /* width: 1750px; */
  /* height: 787px; */
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.siximg_img_div {
  width: 29.5vw;
  min-width: 264px;
  min-height: 230px;
  /* height: 23vw; */
  margin-top: 40px;
  position: relative;
}
.siximg_img_div:hover .cover{
  display: block;
}
.cover{
  width: 29.5vw !important;
  min-width: 264px;
  min-height: 185px;
  height: 21vw !important;
  position: absolute;
  top: 0;
  left: 0;
  background: url(../../assets/imgs/home/home-imgcover.png) no-repeat;
  background-size: 100% 100%;
  text-align: center;
  cursor: pointer;
  display: none;
}
.cover p{
  font-size: 18px;
  color: #ffffff;
  margin-top: 4vw;
}
.cover .covercon{
  width: 60%;
  margin: 0 auto;
  font-size: 14px;
  line-height: 26px;
  color: #ffffff;
  margin-top: 8vw;
  overflow:hidden; 
  text-overflow:ellipsis;
  display:-webkit-box; 
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2; 

}
.cover img{
  width: 31px !important;
  height: 31px !important;
  margin-top: 30px;
  min-width: 31px !important;
  min-height: 31px !important;
}
.siximg_img_div img {
  /* width: 350px;
  height: 350px; */
  /* margin-bottom: 10px; */
  width: 29.5vw;
  height: 21vw;
  min-width: 264px;
  min-height: 185px;
}

.siximg_img_div div {
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #333333;
  text-align: center;
}
/* 新闻 */
.news {
  width: 100%;
  /* height: 960px; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.news_content {
  width: 1200px;
  height: 1050px;
  overflow: hidden;
  padding-top: 110px;
  /* margin: 0 auto; */
  margin: 0 0;
}

.news_title {
  width: 96px;
  height: 25px;
  font-family: MicrosoftYaHei-Bold;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #333333;
  margin: 0 auto 20px auto;
}

.news_bottom {
  width: 1200px;
  height: 778px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
/* 新闻左边 */
.news_left {
  width: 550px;
  height: 778px;
  /* border: 1px solid; */
  box-sizing: border-box;
}

.left_top {
  width: 100%;
  height: 48px;
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
  /* background-color: #1280e1; */
}

.class_title {
  width: 120px;
  height: 48px;
  background-color: #1280e1;
  font-family: MicrosoftYaHei;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 48px;
  letter-spacing: 0px;
  color: #ffffff;
  text-align: center;
}

.hengxian {
  width: 436px;
  height: 1px;
  background-color: #1280e1;
}

.tuwen {
  width: 100%;
  height: 210px;
  display: flex;
  /* justify-content: space-between; */
  cursor: pointer;
}

.tuwen_left {
  width: 280px;
  height: 210px;
}

.tuwen_left img {
  width: 100%;
  height: 100%;
}
/* 新闻右边 */
.tuwen_right {
  width: 240px;
  height: 42px;
  margin-left: 24px;
}

.biaoti {
  width: 239px;
  height: 44px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
  color: #333333;
  margin: 16px auto 28px auto;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /*截取第2行*/
  overflow: hidden;
}

.biaoti:hover{
  color: #1280e1;
}

.xiangqing {
  width: 248px;
  height: 78px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 20px;
  letter-spacing: 0px;
  color: #666666;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; /*截取第4行*/
  overflow: hidden;
}

.news_list {
  width: 100%;
  border-bottom: 1px solid #e1e1e1;
  padding: 30px 1px;
  box-sizing: border-box;
  cursor: pointer;
}

.list_top {
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  /* align-content: space-between; */
}

.list_top span {
  width: 4px;
  height: 20px;
  background-color: #1280e1;
  border-radius: 2px;
  margin-right: 10px;
}

.list_title {
  width: 375px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #333333;
  margin-right: 90px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1; /*截取第1行*/
  overflow: hidden;
  cursor: pointer;
}
.list_title:hover{
  color: #1280e1;
}
.list_time {
  width: 70px;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #999999;
  overflow: hidden;
  white-space: nowrap;
}

.list_content {
  width: 397px;
  height: 38px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 20px;
  letter-spacing: 0px;
  color: #666666;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /*截取第2行*/
  overflow: hidden;
}

/* .section {
  height: 100vh !important;
  margin-top: 46px;
} */
.fp-tableCell {
  display: block !important;
  vertical-align: inherit !important;
}
.el-carousel__item {
  /* height: 530px !important; */
  /* margin-top: -20px; */
}
.el-carousel__item img{
  /* height: 530px !important; */
}
.contact_right {
  margin-left: 110px;
  margin-top: 10px;
  float: left;
}
.contact_right .form_title {
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  margin-left: 170px;
  margin-top: 60px;
}
.contact_right input {
  display: block;
  width: 420px;
  height: 48px;
  border: none;
  margin-top: 24px;
  background-color: #f8f8f8;
  outline-style: none;
  padding-left: 20px;
  font-size: 14px;
}
.contact_right textarea {
  width: 400px;
  height: 160px;
  background-color: #f8f8f8;
  border: none;
  margin-top: 24px;
  outline-style: none;
  resize: none;
  padding: 20px;
  font-size: 14px;
  display: block;
}
.contact_right button {
  width: 440px;
	height: 48px;
  background-color: #1280e1;
  border: none;
  outline-style: none;
  font-size: 16px;
	font-weight: bold;
  color: #ffffff;
  margin-top: 53px;
  cursor: pointer;
}
/* 简介 */
.introduction{
  width: 100%;
	height: 740px;
  background: url(../../assets/imgs/home/introductionbg.png) 100% 100%;
  background-position: bottom;
}
.introduction-title{
  text-align: center;
  padding-top: 50px;
}
.title-C{
	font-size: 36px;
  color: #333333;
  text-align: center;
}
.title-E{
  font-size: 20px;
  color: #c1c1c1;
  text-align: center;
}
.introduction-con{
  width: 1200px;
  margin: 0 auto;
  margin-top: 30px;
}
.introduction-con-title{
  font-size: 20px;
  color: #333333;
  border-bottom: 1px solid #bbdaf1;
  width: 350px;
  height: 45px;
}
.introduction-con-c{
  width: 467px;
  font-size: 14px;
  color: #666 !important;
  margin-top: 30px;
  text-indent: 25px;
  line-height: 24px;
}
.introduction-con-c p{
  margin-top: 10px;
  color: #666666;
}
.introduction-con button{
  margin-top: 27px;
  width: 100px;
	height: 32px;
  background-color: #1280e1;
  border: none;
  outline-style: none;
  font-size: 14px;
	color: #ffffff;
  cursor: pointer;
}
.title-C1{
	font-size: 36px;
  color: #ffffff;
  text-align: center;
  padding-top: 42px;
}
.title-E1{
  font-size: 20px;
  text-align: center;
  color: #ffffff;
	opacity: 0.5;
}
.siximg-more{
  margin: 0 auto;
  font-size: 14px;
  color: #1280e1;
  margin-top: 60px;
  height: 32px;
  line-height: 32px;
  display: block;
  text-align: center;
  border: 1px solid #1280e1;
  width: 120px;
  border-radius: 18px;
  text-align: center;
}
</style>

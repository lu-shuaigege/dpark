<template>
  <div class="aboutus">
    <div class="aboutus-banner">
      <img :src="banner" alt />
    </div>
    <div class="aboutus-introduction">
      <div class="aboutus-introduction-con">
        <div class="introduction-con-up">
          <div class="introduction-con-upl">
            <p class="title">公司简介</p>
            <p>COMPANY PROFILE</p>
            <div class="content" v-html="companyprofile"></div>
          </div>
          <img src="../../assets/imgs/COMPANYPROFILE.png" alt />
        </div>
        <div class="introduction-con-ud">
          <div class="introduction-con-udl">
            <img src="../../assets/imgs/aboutus-l.png" alt />
          </div>
          <div class="introduction-con-udr">
            <div class="introduction-udr-p">
              <p class="title">
                <span></span>愿景
              </p>
              <p class="con">{{companyprofilelist.vision}}</p>
            </div>
            <div class="introduction-udr-p">
              <p class="title">
                <span></span>使命
              </p>
            <p class="con">{{companyprofilelist.mission}}</p>
            </div>
            <div class="introduction-udr-p">
              <p class="title">
                <span></span>价值观
              </p>
              <p class="con">{{companyprofilelist.value}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="aboutus-qualification">
      <div class="aboutus-qualification-con">
        <div class="aboutus-qualification-title">企业资质</div>
        <div class="qualification-con">
          <div class="qualification-con-list">
            <img src="../../assets/imgs/qualification1.png" alt />
            <p>测绘甲级资质</p>
          </div>
          <div class="qualification-con-list">
            <img src="../../assets/imgs/qualification2.png" alt />
            <p>高新技术企业</p>
          </div>
          <div class="qualification-con-list">
            <img src="../../assets/imgs/qualification3.png" alt />
            <p>软件企业</p>
          </div>
        </div>
      </div>
    </div>
    <div class="aboutus-history">
      <div class="aboutus-history-con">
        <div class="aboutus-qualification-title">发展历程</div>
        <img src="../../assets/imgs/history2.jpeg" alt />
      </div>
    </div>
    <div class="aboutus-award">
      <div class="aboutus-award-con">
        <div class="aboutus-qualification-title">奖项与科研实力</div>
        <div class="award-text">
          <p class="title">
            <span></span>荣誉奖项
          </p>
          <p>中国地理信息百强</p>
          <p>中国地理信息产业优秀工程奖金奖</p>
        </div>
        <div class="award-img" style="margin-bottom:50px">
          <div v-for="items in awards" :key='items.id' style="display:inline-block">
            <img v-for="item in items.images" :key="item" :src="item" alt />
          </div>
        </div>
        <div class="award-text">
          <p class="title">
            <span></span>科研实力
          </p>
          <p>江苏省地理空间信息技术工程中心CORS技术工程中心SZCORS分中心</p>
          <p>园区博士后工作站测绘公司分站</p>
          <p>武汉大学研究生工作站</p>
        </div>
        <div class="award-img" style="margin-bottom:50px">
          <div v-for="items in researches" :key='items.id' style="display:inline-block">
            <img v-for="item in items.images" :key="item" :src="item" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="aboutus-map">
      <div class="aboutus-qualification-title">子分公司</div>
      <div class="aboutus-map-con">
        <div class="aboutus-map-con-l">
          <img src="../../assets/imgs/aboutus-map.png" alt />
        </div>
        <div class="aboutus-map-con-r">
          <div class="map-r-title">园区测绘子分公司地址信息</div>
          <div class="positionlist">
            <div class="positionlist-name">
              <span></span>
              苏州工业园区格网信息科技有限公司
            </div>
            <p>地址：江苏省苏州市苏州工业园区苏虹中路101号</p>
            <p>电话：0512-67611188</p>
          </div>
          <div class="positionlist">
            <div class="positionlist-name">
              <span></span>
              苏州工业园区测绘地理信息有限公司宿迁分公司
            </div>
            <p>地址：江苏省宿迁市紫金山路12号</p>
            <p>电话：0527-82868319</p>
          </div>
          <div class="positionlist">
            <div class="positionlist-name">
              <span></span>
              滁州圆信苏滁测绘地理信息有限公司（苏滁现代产业园）
            </div>
            <p>地址：中国安徽省滁州市扬子路888号</p>
            <p>电话：0550-3769309</p>
          </div>
          <div class="positionlist">
            <div class="positionlist-name">
              <span></span>
              广西中马园区数字城市科技有限公司（中马钦州产业园）
            </div>
            <p>地址：广西钦州市中马钦州产业园区中马大街1号</p>
            <p>电话：0777-5988579</p>
          </div>
          <div class="positionlist">
            <div class="positionlist-name">
              <span></span>
              苏州工业园区测绘地理信息有限公司嘉善分公司
            </div>
            <p>地址：浙江省嘉兴市嘉善县魏塘街道智里路33号1号楼北侧</p>
            <p>电话：0573-84841277</p>
          </div>
          <div class="positionlist">
            <div class="positionlist-name">
              <span></span>
              苏州工业园区测绘地理信息有限公司银川分公司
            </div>
            <p>地址：宁夏回族自治区银川市兴庆区京河大道智慧研发大楼10楼1005室</p>
            <p>电话：18061992296</p>
          </div>
        </div>
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
      companyprofile: "",
      companyprofilelist:'',
      banner: "",
      awards:[],
      researches:[]
    };
  },
  components: {
    Footer
  },
  created() {
    this.api();
  },
  mounted() {
    
  },
  methods: {
    api(){
      //获取banner
    this.$api.get("banners/about-us", {}, res => {
      if (res.data.code == 1) {
        this.banner = res.data.data[0].image;
      } else {
      }
    });

    //获取公司简介
    this.$api.get("company-profile", {}, res => {
      if (res.data.code == 1) {
        this.companyprofilelist = res.data.data;
        this.companyprofile = res.data.data.content;
      } else {
      }
    });

    //获取荣耀奖项
    this.$api.get("awards", {}, res => {
      
      if (res.data.code == 1) {
        this.awards = res.data.data.data;
      } else {
      }
    });
    

    //获取科研实力
    this.$api.get("researches", {}, res => {
      if (res.data.code == 1) {
        this.researches = res.data.data.data;
      } else {
      }
    });
    }
  }
};
</script>
<style>
.content > strong > p > strong > img {
  display: none;
}
.aboutus {
}
.aboutus-banner {
  width: 100%;
  /* height: 470px; */
  margin-top: 70px;
  font-size: 0;
}
.aboutus-banner img {
  width: 100%;
  /* height: 470px; */
}
.aboutus-introduction {
  width: 100%;
  height: 1040px;
  background-color: #fff;
}
.aboutus-introduction-con {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}
.introduction-con-up {
  display: flex;
  align-items: center;
}
.introduction-con-upl {
  width: 620px;
  display: inline-block;
  margin-top: 50px;
}
.introduction-con-upl p {
  font-size: 12px;
  font-family: Arial;
  font-weight: normal;
  font-stretch: normal;
  line-height: 20px;
  letter-spacing: 0px;
  color: #999999;
  margin-top: 5px;
}
.introduction-con-upl .title {
  font-size: 24px;
  font-weight: bold;
  color: #333333;
}
.introduction-con-upl div {
  margin-top: 15px;
  text-align: justify;
  text-indent: 25px;
  font-size: 14px;
  color: #333333;
  line-height: 26px;
}
.introduction-con-up img {
  margin-left: 240px;
}
.introduction-con-ud {
  margin-top: 40px;
  display: flex;
}
.introduction-con-udl {
  display: inline-block;
}
.introduction-con-udl img {
  width: 650px;
  height: 435px;
}
.introduction-con-udr {
  display: inline-block;
  margin-top: 50px;
}
.introduction-udr-p {
  margin-left: 50px;
  margin-top: 50px;
}
.introduction-udr-p .title {
  font-size: 20px;
  color: #1280e1;
}
.introduction-udr-p .title span {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #1280e1;
  border-radius: 2px;
  margin-right: 10px;
}
.introduction-udr-p .con {
  font-size: 14px;
  color: #333333;
  margin-left: 20px;
  margin-top: 5px;
}
.aboutus-qualification {
  width: 100%;
  height: 484px;
  background-color: #f8f8f8;
}
.aboutus-qualification-con {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding-top: 1px;
}
.aboutus-qualification-title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin: 47px;
  color: #333333;
}
.qualification-con {
  display: flex;
  justify-content: space-between;
}
.qualification-con-list {
  text-align: center;
}
.qualification-con-list img {
  width: 381px;
  height: 277px;
}
.qualification-con-list p {
}
.aboutus-history {
  width: 100%;
  height: 966px;
  background-color: #fff;
}
.aboutus-history-con {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  margin-top: 90px;
}
.aboutus-history-con img {
  width: 1200px;
}
.aboutus-award {
  width: 100%;
  /* height: 883px; */
  background-color: #f8f8f8;
}
.aboutus-award-con {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding-top: 1px;
}
.award-text {
}
.award-text p {
  font-size: 16px;
  color: #666666;
  line-height: 30px;
}
.award-text .title {
  font-size: 20px;
  color: #333333;
  margin-bottom: 10px;
}
.award-text .title span {
  display: inline-block;
  width: 14px;
  height: 14px;
  background-color: #1280e1;
  margin-right: 15px;
}
.award-img {
  margin-top: 40px;
}
.award-img img {
  margin-right: 15px;
}
.aboutus-map {
  width: 100%;
  height: 900px;
  background-color: #ffffff;
}
.aboutus-map-con {
  width: 1200px;
  /* height: 100%; */
  margin: 0 auto;
  padding-top: 1px;
  display: flex;
}
.aboutus-map-con-l {
  display: inline-block;
}
.aboutus-map-con-l img {
  width: 600px;
  height: 600px;
}
.aboutus-map-con-r {
  display: inline-block;
  margin-left: 50px;
}
.map-r-title {
  width: 550px;
  height: 30px;
  border-bottom: 1px solid #e1e1e1;
  font-size: 18px;
  color: #333333;
}
.positionlist {
  margin-top: 22px;
}
.positionlist-name {
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
}
.positionlist-name span {
  display: inline-block;
  width: 4px;
  height: 20px;
  background-color: #1280e1;
  border-radius: 2px;
  vertical-align: sub;
  margin-right: 10px;
}
.positionlist p {
  font-size: 14px;
  color: #666666;
  margin-left: 20px;
  line-height: 21px;
}
</style>
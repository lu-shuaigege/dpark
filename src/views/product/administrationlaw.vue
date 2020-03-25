<template>
  <div class="naturalresources">
    <div class="naturalresources-banner">
      <img :src="banners.image" alt />
    </div>
    <p class="newsdetail-con-l-title">
        <span>产品服务 > </span>
        <span class="title">综合行政执法智慧管理平台</span>
    </p>
    <div class="environmentalprotection-first">
      <div class="naturalresources-title">综合行政执法智慧管理平台</div>
      <div class="environmentalprotection-first-text">
        本产品为贯彻落实《中共中央国务院关于深入推进城市执法体制改革改进城市管理工作的指导意见》（中发（2015）37号文件），配合各地区城市执法体制改革，支持相关领域职能的综合划转，设计研发了综合行政执法智慧管理平台。
      </div>
    </div>
    <div class="administrationlaw-second">
      <div class="naturalresources-title">平台框架</div>
      <div class="administrationlaw-second-con">
        <div class="second-con-list">
          <img src="../../assets/imgs/newproduct/guanli.png" alt="">
          <div class="second-con-list-p">
            <div>
              <span>基础信息管理平台</span>
              包括执法事项管理子系统、法律法规管理子系统、执法人员管理子系统、文书管理子系统
            </div>
          </div>
        </div>
        <div class="second-con-list">
          <img src="../../assets/imgs/newproduct/zhifa-s.png" alt="">
          <div class="second-con-list-p second-list1">
            <div>
              <span>综合行政执法平台</span>
              包括综合行政执法子系统、移动执法子系统、双随机抽查子系统、考核分析子系统
            </div>
          </div>
        </div>
        <div class="second-con-list">
          <img src="../../assets/imgs/newproduct/xingzhengzhifa1.png" alt="">
          <div class="second-con-list-p">
            <div>
              <span>监督指挥平台</span>
              包括执法一张图子系统、指挥调度子系统
            </div>
          </div>
        </div>
        <div class="second-con-list">
          <img src="../../assets/imgs/newproduct/cehuazhihui.png" alt="">
          <div class="second-con-list-p second-list1">
            <div>
              <span>执法大数据平台</span>
              包括大数据可视化子系统、辅助决策子系统
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="administrationlaw-third">
      <div class="naturalresources-title">解决问题</div>
      <div class="administrationlaw-third-con">
        <div class="administrationlaw-third-con-l">
          <div>
            <p>利用移动设备、物联设备等，通过物联、大数据等技术手段，辅助完善执法程序、提升执法效能、创新执法模式。</p>
            <p>创新执法管理方式，实现双随机执法，避免多头执法扰民，推进依法行政，严格规范公正文明执法。</p>
          </div>
        </div>
        <div class="administrationlaw-third-con-r">
          <img src="../../assets/imgs/newproduct/administrationlaw-img1.png" alt="">
        </div>
      </div>
    </div>
    <div class="administrationlaw-four">
      <div class="naturalresources-title">产品特色</div>
      <div class="administrationlaw-four-con">
        <div class="four-con-l">
          <img src="../../assets/imgs/newproduct/administrationlaw-img2.png" alt="">
        </div>
        <div class="four-con-r">
          <p>• 自由裁量行为标准化</p>
          <p>• 实现标准化的实时考核和指标分析</p>
          <p>• 大数据分析、风险预警、分析研判、决策支持</p>
          <p>• 实现网络审批、便捷操作、规范执法办案程序、提高执法工作效率</p>
          <p>• 执法办案无纸化、自动化、即时化、精准化，对执法行为全过程记</p>
          <p style="margin-top:0">&nbsp;&nbsp;录，有据可查</p>
        </div>
      </div>
    </div>
    <div class="environmentalprotection-five">
      <div class="environmentalprotection-five-con">
        <div class="five-con-list" v-for="item in list" :key="item">
          <img :src="item.cover_image" alt="">
          <p class="p">{{item.title}}</p>
          <button class="button" @click="toDetail(item.id)">查看更多>></button>
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
      banners: "",
      list: []
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
    //获取列表
    this.$api.get("products/category/law-enforcement-platform", {}, res => {
      if (res.data.code == 1) {
        this.list = res.data.data.data;
      } else {
      }
    });
  },
  methods: {
    toDetail(x){
      sessionStorage.setItem("pdetailid",x)
      this.$router.push({
        name: 'detail',
        query: {
            id: x
        }
      })
    },
  }
};
</script>
<style scoped>
.naturalresources {
  padding-top: 70px;
}
.naturalresources-banner {
}
.naturalresources-banner img {
}
.naturalresources-title {
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  text-align: center;
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


.environmentalprotection-first{
  width: 1200px;
  margin: 0 auto;
  margin-top: 80px;
}
.environmentalprotection-first-text{
  width: 1122px;
  font-size: 16px;
  color: #333333;
  text-indent: 30px;
  margin: 0 auto;
  margin-top: 30px;
  line-height: 26px
}

.administrationlaw-second{
  width: 100%;
  height: 476px;
  background-color: #f8f8f8;
  margin-top: 80px;
  padding-top: 70px;
}
.administrationlaw-second-con{
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
}
.second-con-list{
  position: relative;
}
.second-con-list img{
  position: absolute;
  transform: translate(0,-50%);
  margin-left: 80px;
}
.second-con-list-p{
  width: 277px;
	height: 155px;
	background-color: #cae0f3;
  padding-top: 86px;
}
.second-list1{
  background-color: #c6eeec;
}
.second-con-list-p div{
  width: 210px;
	font-size: 14px;
	line-height: 26px;
  color: #333333;
  margin: 0 auto;
  text-align: center;
}
.second-con-list-p div span{
  width: 210px;
	font-size: 14px;
	line-height: 24px;
  color: #333333;
  margin: 0 auto;
  margin-bottom: 5px;
  text-align: center;
  display: block;
  font-weight: bold
}
.administrationlaw-third{
  padding-top: 80px;
}
.administrationlaw-third-con{
  width: 1200px;
	height: 412px;
  border: solid 1px #e1e1e1;
  margin: 0 auto;
  display: flex;
  margin-top: 50px;
}
.administrationlaw-third-con-l{
  width: 530px;
}
.administrationlaw-third-con-r{
  width: 670px;
}
.administrationlaw-third-con-l div{
  width: 384px;
	font-size: 16px;
	line-height: 26px;
  color: #222222;
  margin-left: 54px;
  margin-top: 130px;
}
.administrationlaw-third-con-l div p{
  margin-top: 6px;
}
.administrationlaw-four{
  width: 100%;
  height: 683px;
  background: #f8f8f8;
  margin-top: 110px;
  padding-top: 60px;
}
.administrationlaw-four-con{
  width: 1200px;
  margin: 0 auto;
  display: flex;
  margin-top: 100px;
}
.four-con-l{
  width: 683px;
}
.four-con-r{
  font-size: 16px;
	line-height: 24px;
  color: #333333;
  margin-top: 100px;
}
.four-con-r p{
  margin-top: 5px;
  margin-left: 38px;
}
.environmentalprotection-five{
  padding-top: 56px;
  padding-bottom: 164px
}
.environmentalprotection-five-con{
  width: 1236px;
  margin: 0 auto;
}
.five-con-list{
  width: 377px;
	height: 331px;
  border: solid 1px #f4f4f4;
  margin: 82px 14px 0 14px;
  text-align: center;
  color: #222222;
  display: inline-block;
}
.five-con-list img{
  width: 377px;
	height: 200px;
}
.five-con-list p{
  font-size: 16px;
	font-weight: bold;
  margin-top: 10px;
}
.five-con-list button{
  width: 128px;
	height: 36px;
  border: solid 1px #1280e1;
  font-size: 14px;
  color: #1280e1;
  margin-top: 20px;
  cursor: pointer;
  background: #ffffff;
}
.five-con-list button:hover{
  background-color: #1280e1;
  color: #ffffff;
}
.five-con-list:hover{
  color: #1280e1 !important;
}
</style>
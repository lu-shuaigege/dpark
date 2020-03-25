<template>
  <div class="newsdetail">
    <div class="newsfocus-banner">
      <img :src="banner.image" alt />
    </div>
    <div class="newsfocus-con">
      <div class="newsfocus-con-p">
        <div class="newsdetail-con-l">
          <p class="newsdetail-con-l-title">
              <span>产品服务 > {{field1}} > {{field2}} > </span>
              <span class="title">{{productdetail.title}}</span>
          </p>
          <div class="newsdetail-con" v-html="productdetail.content">
            
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
      detailId:0,
      productdetail:[],
      banner:'',
      field1:this.$route.query.field1,
      field2:this.$route.query.field2
    };
  },
  components: {
    Footer
  },
  created(){
      // this.detailId = sessionStorage.getItem("pdetailid");
      this.detailId = this.$route.query.id

      // this.fieldFilter(this.$route.query.field1)
      this.field1 = this.fieldFilter(this.$route.query.field1)
      this.field2 = this._fieldFilter(this.$route.query.field2)
      //获取详情
      this.$api.get("products/"+this.detailId, {}, res => {
        if (res.data.code == 1) {
            this.productdetail = res.data.data;
        } else {
        }
      });

      //获取banner
      this.$api.get("banners/product-child", {}, res => {
          if (res.data.code == 1) {
              this.banner = res.data.data[0];
          } else {
          }
      });
  },
  methods:{
      fieldFilter (value) {
        if(value == '') {return "";}
        if(value == 1) {return "自然资源空间信息服务解决方案";}
        if(value == 2) {return "智慧交通解决方案";}
        if(value == 3) {return "审批服务综合执法一体化平台";}
        if(value == 4) {return "资产智能化运营管理平台";}
        if(value == 5) {return "智慧环保大数据分析平台";}
        if(value == 6) {return "综合行政法智慧管理平台";}
    },
    _fieldFilter (value) {
        if(value == '') {return "";}
        if(value == 1) {return "测绘服务";}
        if(value == 2) {return "数据服务";}
        if(value == 3) {return "软件服务";}
        if(value == 4) {return "咨询监理";}
        if(value == 5) {return "智慧交管";}
        if(value == 6) {return "智慧公交";}
        if(value == 7) {return "智慧交通规划";}
        if(value == 8) {return "智慧停车";}
        if(value == 9) {return "软件产品";}
        if(value == 10) {return "服务产品";}
        if(value == 11) {return "经典案例";}
    }
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
  /* width: 100%; */
  /* height: 470px; */
}
.newsfocus-con {
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
}
.newsfocus-con-p {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  position: relative;
}
.newsdetail-con-l{
    width: 1200px;
}
.newsdetail-con-l-title{
    border-bottom: 1px solid #e1e1e1;
    font-size: 14px;
    color: #666666;
    height: 30px;
}
.newsdetail-con-l-title .title{
    color: #1280e1;
}
.newsdetail-con{
    padding-top: 20px;
}
.newsdetail-con p{
    margin: 20px;
    text-align: left;
}
.newsdetail-con img{
    margin: 20px;
    width: 600px;
	  height: 450px;
}

</style>



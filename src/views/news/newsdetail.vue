<template>
  <div class="newsdetail">
    <div class="newsfocus-banner" :style="{background:'url('+banners.image+')'}">
      <!-- <img :src="banners.image" alt /> -->
    </div>
    <div class="newsfocus-con">
      <div class="newsfocus-con-p">
        <div class="newsdetail-con-l">
          <p class="newsdetail-con-l-title">
              <span>{{newsdetail.column_zh}} > </span>
              <span class="title">{{newsdetail.title}}</span>
          </p>
          <div class="newsdetail-con" v-html="newsdetail.content">
              
          </div>
        </div>
        <div class="newsdetail-con-r" :class="navBarFixed == true ? 'navBarWrap' :''">
          <p class="newsdetail-con-r-title">
              <img src="../../assets/imgs/Hotspot.png" alt="">
              <span>热点新闻</span>
          </p>
          <div class="newsdetail-con-r-list">
              <div class="newsdetail-con-r-listone" v-for="(item,index) in newslist" :key="index" @click="toDeail(item.id)" v-show="index<5">
                  <p class="title"><span></span>{{item.title}}</p>
                  <div class="r-listnone">
                    <p class="time">{{item.published_at}}</p>
                    <div class="con">
                        {{item.description}}
                    </div>
                  </div>
              </div>
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
      newsdetail:[],
      newslist:[],
      detailId:0,
      navBarFixed:false,
      category: 1,
      ltop:0,
      banners:''
    };
  },
  components: {
    Footer
  },
  created() {
    // this.detailId = sessionStorage.getItem("detailid");
    this.detailId = this.$route.query.id
    
    if(sessionStorage.getItem("category")!=null){
        this.category = sessionStorage.getItem("category");
    }else{
        this.category = 1
    }
    this.api();
      
  },
  mounted(){
    window.addEventListener("scroll", this.hidemenu); //监听滚动事件
    this.ltop = ($(".newsdetail-con-r").offset().top)-70;
  },
  methods:{
     hidemenu(){
        let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

        if (scrollTop > this.ltop) {
            this.navBarFixed = true
        }else{
            this.navBarFixed = false
        }
    },
    toDeail(x){
      sessionStorage.setItem("detailid",x)
      this.detailId = sessionStorage.getItem("detailid");
      this.api();

    },
    api(){
      //获取banner
      this.$api.get("banners/news", {}, res => {
        if (res.data.code == 1) {
            this.banners = res.data.data[0];
        } else {
        }
      });
        //获取新闻详情
      this.$api.get("news/"+this.detailId, {}, res => {
        if (res.data.code == 1) {
            this.newsdetail = res.data.data;
        } else {
        }
      });
      //获取新闻列表
      this.$api.get("news-columns/"+this.category+"/news", {}, res => {
        if (res.data.code == 1) {
            this.newslist = res.data.data.data;
        } else {
        }
      });
    }
  },
  beforeDestroy() {
      window.removeEventListener("scroll", this.hidemenu);
  }
};
</script>

<style scoped>
.newsfocus-banner {
  width: 100%;
  height: 470px;
  margin-top: 70px;
  font-size: 0;
  background-position: center !important;
}
.newsfocus-banner img {
  width: 100%;
  height: 470px;
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
    width: 805px;
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
    /* text-align: center; */
    padding-top: 20px;
    color: #666;
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
.newsdetail-con-r{
    width: 350px;
	  min-height: 300px;
    background-color: #f8f8f8;
    margin-left: 45px;
    margin-top: 82px;
    position: absolute;
    right: 0;
    padding-bottom: 15px;
}
.newsdetail-con-r-title{
    font-size: 18px;
	font-weight: bold;
    color: #333333;
    margin-top: 29px;
    margin-left: 20px;
}
.newsdetail-con-r-title img{
    vertical-align: sub;
}
.newsdetail-con-r-list{
    margin-left: 33px;
}
.newsdetail-con-r-listone{
    padding-top: 30px;
    padding-bottom: 15px;
    cursor: pointer;
}
.newsdetail-con-r-listone:hover .title{
    color: #1280e1;
}
.newsdetail-con-r-listone:hover .title span{
    background-color: #1280e1;
}
.newsdetail-con-r-listone:hover .r-listnone{
    display: block;
}
.newsdetail-con-r-listone .title{
    width: 280px;
    overflow:hidden; 
    text-overflow:ellipsis; 
    white-space:nowrap; 
    font-size: 16px;
	color: #333333;
}
.newsdetail-con-r-listone .title span{
    display: inline-block;
    width: 4px;
	height: 20px;
	background-color: #999999;
    border-radius: 2px;
    vertical-align: sub;
    margin-right: 10px;
}
.newsdetail-con-r-listone .r-listnone{
    margin-left: 15px;
    display: none;
}
.newsdetail-con-r-listone .r-listnone .time{
    font-size: 12px;
    color: #999999;
    margin-top: 5px;
}
.newsdetail-con-r-listone .r-listnone .con{
    width: 256px;
    overflow:hidden; 
    text-overflow:ellipsis;
    display:-webkit-box; 
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2; 
    font-size: 16px;
    color: #666666;
    margin-top: 20px;
}
.navBarWrap {
    position: fixed;
    top: 70px;
    z-index: 999;
    box-sizing: border-box;
    margin-left: 850px;
    right: auto;
    margin-top: 0;
}
.newsdetail-con div div{
  width: 805px !important;
}
.newsdetail-con div{
  width: 805px !important;
}
.newsdetail-con p{
  width: 805px !important;
}
</style>



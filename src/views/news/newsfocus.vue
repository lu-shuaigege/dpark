<template>
  <div class="newsfocus">
    <div class="newsfocus-banner" :style="{background:'url('+banners.image+')'}">
      <!-- <img :src="banners.image" alt /> -->
    </div>
    <div class="newsfocus-top">
        新闻聚焦
    </div>
    <div class="newsfocus-con">
      <div class="newsfocus-con-p">
        <div class="newsfocus-con-l">
          <div :class="navBarFixed == true ? 'navBarWrap' :''">
            <div class="newsfocus-con-l-list" v-for="item in newscolumns" :key="item.id" @click="listtab(item.id)" :class="navl == item.id ? 'selected' :''">
              {{item.title}}
              <img src="../../assets/imgs/more-new.png" alt />
            </div>
          </div>
        </div>
        <div class="newsfocus-con-r">
          <div class="newsfocus-con-r-list" v-for="item in newslist" :key="item.id" @click="toDeail(item.id)">
            <div class="newsfocus-listimg">
              <img :src="item.cover_image" alt />
            </div>
            <div class="newsfocus-listcon">
              <p class="title">{{item.title}}</p>
              <p class="time">
                <span class="time-min">发布日期：{{item.published_at}}</span>
                <span class="line"></span>
                <span>浏览次数：{{item.views}}</span>
              </p>
              <div
                class="con">{{item.description}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="yema">
      <v-pagination :total="total" :current-page="current" @pagechange="pagechange"></v-pagination>
      <!-- <div id="demo7"></div> -->
    </div>

    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Footer from "@/components/footer/footer.vue";
import pagination from "../../components/pagination/pagination.vue";
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      newscolumns:[],
      newslist:[],
      total: 15, // 记录总条数
      display: 15, // 每页显示条数
      current: 1, // 当前的页数
      category: 1, //一级分类
      page: 1, //页码
      navBarFixed:false,
      ltop:0,
      banners:'',
      navl:1
    };
  },
  components: {
    Footer,
    //引入分页组件
    "v-pagination": pagination
  },
  created() {
    sessionStorage.setItem("category",1)
    this.api()
      
  },
  mounted(){
    window.addEventListener("scroll", this.hidemenu); //监听滚动事件
    this.ltop = ($(".newsfocus-con-l").offset().top)-70;
    // setTimeout(function(){
    //   this.ltop = ($(".newsfocus-con-l").offset().top)-70;
    // },1000)
    
  },
  methods: {
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
      this.$router.push({
          name: 'newsdetail',
          query: {
            id: x
          }
        })

    },
    listtab(x){
      this.category = x;
      this.navl = x;
      sessionStorage.setItem("category",x)
      this.page = 1;
      this.pagination();
    },
    api:function () {
      //获取banner
      this.$api.get("banners/news", {}, res => {
        if (res.data.code == 1) {
            this.banners = res.data.data[0];
        } else {
        }
      });

      //获取新闻栏目
      this.$api.get("news-columns", {}, res => {
        if (res.data.code == 1) {
            this.newscolumns = res.data.data;
            this.category = res.data.data[0].id;
        } else {
        }
      });

      //获取新闻列表
      this.pagination();
    },

    //分页组件向后台发送请求
    pagechange: function(currentPage) {
      this.page = currentPage;
      this.current = currentPage;
      // ajax请求, 向后台发送 currentPage, 来获取对应的数据
        this.pagination();
    },

    //axios请求
    pagination: function() {
      //获取新闻列表
      this.$api.get("news-columns/"+this.category+"/news", {page: this.page}, res => {
        if (res.data.code == 1) {
            this.newslist = res.data.data.data;
            this.total = res.data.data.total;
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
.newsfocus-top{
    width: 1200px;
    margin: 0 auto;
    margin-top: 94px;
    border-bottom: 1px solid #e1e1e1;
    font-size: 24px;
	  font-weight: bold;
    color: #222222;
    height: 48px;
}
.newsfocus-con {
  width: 100%;
}
.newsfocus-con-p {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.newsfocus-con-l {
  width: 235px;
  border-right: 1px solid #e1e1e1;
  box-sizing: border-box;
  /* font-size: 0px; */
}
.newsfocus-con-l-list {
  width: 222px;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  border-bottom: 1px solid #e1e1e1;
}
.newsfocus-con-l-list img{
    float: right;
    padding: 17px;
}
/* .trend{
    display: inline-block;
    vertical-align: sub;
    margin-left: 25px;
    width: 16px;
	height: 18px;
    background: url(../../assets/imgs/trend-grey.png) no-repeat;
}
.activity{
    display: inline-block;
    margin-left: 25px;
    vertical-align: sub;
    width: 16px;
	height: 18px;
    background: url(../../assets/imgs/activity-grey.png) no-repeat;
}
.newsfocus-con-l-list:hover .trend{
    background: url(../../assets/imgs/trend-wgite.png) no-repeat;
}
.newsfocus-con-l-list:hover .trend{
    background: url(../../assets/imgs/trend-wgite.png) no-repeat;
} */

.newsfocus-con-r {
  width: 978px;
  margin-left: 30px;
}
.newsfocus-con-r-list {
  width: 949px;
  height: 250px;
  display: flex;
  border-bottom: 1px solid #e1e1e1;
  margin-top: 40px;
  cursor: pointer;
}
.newsfocus-listimg {
}
.newsfocus-listimg img {
  width: 280px;
  height: 210px;
}
.newsfocus-listcon {
  margin-left: 39px;
}
.newsfocus-listcon .title {
  font-size: 18px;
  color: #222;
  margin-top: 29px;
}
.newsfocus-listcon .title:hover{
  color: #1280e1;
}
.newsfocus-listcon .time {
  font-size: 12px;
  color: #999999;
  margin-top: 10px;
}
.time-min{
    width: 130px;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    vertical-align: text-bottom;
}
.newsfocus-listcon .time .line {
  width: 1px;
  height: 16px;
  background-color: #e1e1e1;
  display: inline-block;
  vertical-align: sub;
  margin-left: 10px;
  margin-right: 10px;
}
.newsfocus-listcon div {
  font-size: 14px;
  width: 630px;
  color: #666666;
  margin-top: 30px;
  overflow:hidden; 
  text-overflow:ellipsis;
  display:-webkit-box; 
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2; 
}

.yema {
  margin-bottom: 170px;
}
.navBarWrap {
    position: fixed;
    top: 70px;
    z-index: 999;
    width:222px;
    box-sizing: border-box;
}
.selected{
  color: #1280e1;
}
</style>



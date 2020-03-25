<template>
  <div class="newsfocus">
    <div class="newsfocus-search">
      <div class="top">
        <div class="top-con">您当前所在位置：首页>搜索</div>
      </div>
      <div class="search-top">
        <div class="navcontent-search">
          <span @click="tosearch()"></span>
          <input @keyup.enter="searchEnterFun" v-model="input" type="text" placeholder="请输入关键词" />
        </div>
      </div>
      <div class="newsfocus-top">新闻聚焦</div>
      <div class="newsfocus-con">
        <div class="newsfocus-con-p">
          <div class="newsfocus-con-r">
            <div
              class="newsfocus-con-r-list"
              v-for="item in newslist"
              :key="item.id"
              @click="toDeail(item.id)"
            >
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
                <div class="con">{{item.description}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="newsfocus-top">产品服务</div>
      <!-- <div class="fenge"></div> -->
      <div class="product">
        <div
          class="product-list"
          v-for="item in productlist"
          :key="item.id"
          @click="topDeail(item.id)"
        >
          <span class="dot"></span>
          <span class="dottext">{{item.title}}</span>
        </div>
      </div>
    </div>

    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Footer from "@/components/footer/footer.vue";
export default {
  components: {
    Footer
  },
  data() {
    return {
      newslist: [],
      productlist: [],
      input: ""
    };
  },
  created() {
    this.seaechcontent();
  },
  methods: {
    tosearch() {
      if(this.input){
        sessionStorage.setItem("search", this.input);
        this.$api.get("search", { q: this.input }, res => {
          if (res.data.code == 1) {
            this.newslist = res.data.data.newss;
            this.productlist = res.data.data.products;
          } else {
          }
        });
      }
      
    },
    searchEnterFun(e) {
      sessionStorage.setItem("search", this.input);
      var keyCode = window.event ? e.keyCode : e.which;
      
      if (keyCode == 13 && this.input) {
        this.$api.get("search", { q: this.input }, res => {
          if (res.data.code == 1) {
            this.newslist = res.data.data.newss;
            this.productlist = res.data.data.products;
          } else {
          }
        });
      }
    },
    seaechcontent() {
      let _this = this;
      let search = sessionStorage.getItem("search");
      //  let search =_this.$route.query.searchData;
      this.$api.get("search", { q: search }, res => {
        if (res.data.code == 1) {
          this.newslist = res.data.data.newss;
          this.productlist = res.data.data.products;
        } else {
        }
      });
    },
    toDeail(x) {
      sessionStorage.setItem("detailid", x);
      this.$router.push({
        name: "newsdetail",
        query: {
          id: x
        }
      });
    },
    topDeail(x) {
      sessionStorage.setItem("pdetailid", x);
      this.$router.push({
        name: "detail",
        query: {
          id: x
        }
      });
    }
  }
};
</script>

<style scoped>
.newsfocus-search {
  min-height: 75vh;
}
.top {
  margin-top: 70px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #f1f1f1;
  font-size: 14px;
  color: #666666;
}
.top-con {
  width: 1200px;
  margin: 0 auto;
}

.newsfocus-top {
  width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
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

.newsfocus-con-r {
  width: 1200px;
}
.newsfocus-con-r-list {
  width: 1200px;
  height: 250px;
  display: flex;
  border-top: 1px solid #e1e1e1;
  padding-top: 40px;
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
  color: #333;
  margin-top: 29px;
}
.newsfocus-listcon .title:hover {
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
  width: 880px;
  color: #666666;
  margin-top: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.fenge {
  width: 1200px;
  margin: 0 auto;
  height: 1px;
  background: #e1e1e1;
}
.product {
  width: 1226px;
  margin: 0 auto;
  padding-top: 20px;
  margin-bottom: 120px;
}
.product-list {
  width: 280px;
  height: 100px;
  background-color: #ffffff;
  border: solid 1px #e1e1e1;
  margin-left: 10px;
  margin-right: 10px;
  display: inline-block;
  margin-top: 20px;
  cursor: pointer;
}
.product-list:hover {
  color: #1280e1;
}
.product-list:hover .dot {
  background-color: #1280e1;
}
.product-list span {
  display: inline-block;
  vertical-align: text-top;
}
.dot {
  width: 10px;
  height: 10px;
  background-color: #999999;
  border-radius: 2px;
  margin-top: 26px;
  margin-left: 20px;
}
.dottext {
  width: 220px;
  margin-top: 21px;
  margin-left: 5px;
}
.search-top {
  width: 1200px;
  margin: 0 auto;
}
.navcontent-search {
  position: relative;
  width: 152px;
  height: 34px;
  float: right;
  margin-top: 10px;
}
.navcontent-search div {
  width: 152px;
  height: 34px;
}
.navcontent-search span {
  position: absolute;
  display: inline-block;
  width: 40px;
  height: 30px;
  top: 2px;
  left: 5px;
}
.navcontent-search input {
  width: 108px;
  height: 32px;
  background-color: #ffffff;
  border-radius: 16px;
  border: solid 1px #1280e1;
  outline-style: none;
  padding-left: 42px;
  background: url(../../assets/imgs/home/home-search.png) no-repeat;
  background-position: 12px 8px;
}
</style>



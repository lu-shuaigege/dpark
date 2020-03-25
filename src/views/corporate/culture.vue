<template>
  <div class="corporateculture">
    <div class="corporateculture-banner">
      <img :src="banners.image" alt />
    </div>
    <div class="corporateculture-nav" :class="navBarFixed == true ? 'navBarWrap' :''">
      <div class="corporateculture-nav-con">
        <div
          v-for="item in culturecategories"
          :key="item.id"
          @click="switchNav(item.id)"
          :class="item.id == active ? 'nav2blue' :''"
        >
          <span></span>
          {{item.title}}
        </div>
      </div>
    </div>
    <div class="corporateculture-con">
      <div class="environment" id="environment">
        <p class="title">
          <span></span>
          {{culturecategories0.title}}
        </p>
        <div class="environment-con">
          <div class="environment-conone" v-for="item in culturecategorylist1" :key="item.id">
            <img :src="item.cover_image" alt />
            <p>{{item.title}}</p>
          </div>
        </div>
      </div>
      <div class="environment" id="employeelegance">
        <p class="title">
          <span></span>
          {{culturecategories1.title}}
        </p>
        <div class="environment-con">
          <div class="environment-conone" v-for="item in culturecategorylist2" :key="item.id">
            <img :src="item.cover_image" alt />
            <p>{{item.title}}</p>
          </div>
        </div>
      </div>
      <div class="environment" id="construction">
        <p class="title">
          <span></span>
          {{culturecategories2.title}}
        </p>
        <div class="environment-con">
          <div class="environment-conone" v-for="item in culturecategorylist3" :key="item.id">
            <img :src="item.cover_image" alt />
            <p>{{item.title}}</p>
          </div>
        </div>
      </div>
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Footer from "@/components/footer/footer.vue";
import { setTimeout } from "timers";
export default {
  data() {
    return {
      navBarFixed: false,
      culturecategories: [],
      culturecategories0: [],
      culturecategories1: [],
      culturecategories2: [],
      culturecategorylist1: [],
      culturecategorylist2: [],
      culturecategorylist3: [],
      active: 1,
      environmenttop: 0,
      employeelegancetop: 0,
      constructiontop: 0,
      scroll: "",
      banners: ""
    };
  },
  components: {
    Footer
  },
  created() {
    this.api();
    let s = sessionStorage.getItem("scroll");
    if (s > 470) {
      this.navBarFixed = true;
    }

    //置顶
    $("html,body").animate({
        scrollTop: 0
    }, 500);  

  },
  mounted() {
    window.addEventListener("scroll", this.hidemenu); //监听滚动事件

    setTimeout(() => {
      this.environmenttop = $("#environment").offset().top - 230;
      this.employeelegancetop = $("#employeelegance").offset().top - 230;
      this.constructiontop = $("#construction").offset().top - 230;
    }, 1000);

    this.hidemenu();
    let s = sessionStorage.getItem("scroll");
    if (s <= this.employeelegancetop) {
      this.active = 1;
      return;
    } else {
    }
    if (s > this.employeelegancetop && s <= this.constructiontop) {
      this.active = 2;
      return;
    } else {
    }
    if (s > this.constructiontop) {
      this.active = 3;
      return;
    } else {
    }
  },
  methods: {
    api: function() {
      //获取banner
      this.$api.get("banners/culture", {}, res => {
        if (res.data.code == 1) {
          this.banners = res.data.data[0];
        } else {
        }
      });

      //企业文化分类
      this.$api.get("culture-categories", {}, res => {
        if (res.data.code == 1) {
          this.culturecategories = res.data.data;
          this.culturecategories0 = res.data.data[0];
          this.culturecategories1 = res.data.data[1];
          this.culturecategories2 = res.data.data[2];
        } else {
        }
      });

      //企业文化列表
      this.$api.get("culture-categories/1/cultures", {}, res => {
        if (res.data.code == 1) {
          this.culturecategorylist1 = res.data.data.data;
        } else {
        }
      });
      this.$api.get("culture-categories/2/cultures", {}, res => {
        if (res.data.code == 1) {
          this.culturecategorylist2 = res.data.data.data;
        } else {
        }
      });
      this.$api.get("culture-categories/3/cultures", {}, res => {
        if (res.data.code == 1) {
          this.culturecategorylist3 = res.data.data.data;
        } else {
        }
      });
    },

    hidemenu() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.scroll = scrollTop;
      sessionStorage.setItem("scroll", this.scroll);
      //当滚动超过400时，实现吸顶效果（导航高度为400）
      
      if (scrollTop > 470) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }

      if (scrollTop <= this.employeelegancetop) {
        this.active = 1;
        return;
      } else {
      }
      if (
        scrollTop > this.employeelegancetop &&
        scrollTop <= this.constructiontop
      ) {
        this.active = 2;
        return;
      } else {
      }
      if (scrollTop > this.constructiontop) {
        this.active = 3;
        return;
      } else {
      }
    },
    switchNav(x) {
      this.active = x;

      if (x == 1) {
        $("html,body").animate({ scrollTop: this.environmenttop + 10 }, 100);
      } else if (x == 2) {
        $("html,body").animate(
          { scrollTop: this.employeelegancetop + 10 },
          100
        );
      } else if (x == 3) {
        $("html,body").animate({ scrollTop: this.constructiontop + 10 }, 100);
      }
    }
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.hidemenu);
  }
};
</script>

<style>
.corporateculture-banner {
  width: 100%;
  height: 470px;
  margin-top: 70px;
  font-size: 0;
}
.corporateculture-banner img {
  width: 100%;
  height: 470px;
}
.corporateculture-nav {
  widows: 100%;
  height: 60px;
  background-color: #f8f8f8;
  line-height: 60px;
}
.corporateculture-nav-con {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  font-size: 14px;
}
.corporateculture-nav-con div {
  margin-right: 70px;
  cursor: pointer;
}
.corporateculture-nav-con div span {
  width: 8px;
  height: 8px;
  background-color: #999999;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
}
.corporateculture-con {
  margin-bottom: 170px;
}
.environment {
  width: 1275px;
  margin: 0 auto;
}
.environment .title {
  width: 1200px;
  margin: 0 auto;
  margin-top: 100px;
  font-weight: bold;
  font-size: 18px;
}
.environment .title span {
  display: inline-block;
  width: 4px;
  height: 20px;
  background-color: #1280e1;
  border-radius: 2px;
  vertical-align: sub;
  margin-right: 12px;
}
.environment-con {
  /* margin-top: 30px; */
  /* height: 500px; */
}
.environment-conone {
  display: inline-block;
  margin-left: 35px;
  margin-right: 35px;
  text-align: center;
  margin-top: 30px;
  height: 290px;
}
.environment-conone img {
  width: 350px;
  height: 263px;
}
.environment-conone p {
  width: 350px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  color: #333;
}
.navBarWrap {
  position: fixed;
  top: 70px;
  z-index: 999;
  width: 100%;
}
.nav1blue,
.nav2blue,
.nav3blue {
  color: #1280e1;
}
.nav1blue span,
.nav2blue span,
.nav3blue span {
  background-color: #1280e1 !important;
}
</style>



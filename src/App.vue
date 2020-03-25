<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Header from "@/components/header/header.vue";
import Footer from "@/components/footer/footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  
}
.el-carousel__arrow i{
  font-size: 70px !important;
}
.el-carousel__arrow{
  background-color: transparent !important;
  margin: 0 200px !important;
  height: 70px !important;
  width: 70px !important;
}
.newsfocus-con-r .title-line{
  margin-top: 4px !important;
}
.newsfocus-con-l-list{
  height: 60px !important;
  line-height: 60px !important;
}
.newsfocus-con-l-list span{
  margin-top: 5px;
}
.newsfocus-con-l-list img{
  padding: 22px 17px !important;
}
</style>

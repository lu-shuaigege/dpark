<template>
    <div class="newsfocus">
        <div class="newsfocus-banner">
            <img :src="banners.image" />
        </div>
        <p class="newsdetail-con-l-title">
            <span>产品服务 > 智慧交通解决方案 ></span>
            <span class="title">智慧停车</span>
        </p>
        <div class="newsfocus-top">产品服务</div>
        <div class="newsfocus-con">
            <div class="newsfocus-con-p">
                <div class="newsfocus-con-l">
                    <div :class="navBarFixed == true ? 'navBarWrap' :''">
                        <div
                            class="newsfocus-con-l-list"
                            v-for="item in list"
                            :key="item.id"
                            @click="toDetail(item.id)"
                        >
                            <span
                                style="width: 170px;display: inline-block;line-height: 24px;"
                            >{{item.title}}</span>
                            <img src="../../assets/imgs/more-new.png" />
                        </div>
                    </div>
                </div>
                <div class="newsfocus-con-r">
                    <img src="../../assets/imgs/trafficengineering/trafficengineeringa.png" />
                    <img src="../../assets/imgs/trafficengineering/trafficengineeringb.png" />

                    <!-- <p class="title1">智慧停车</p>
                    <p class="title-line"></p>
                    <div class="r-first">
                        <div class="r-first-l">
                            <img src="../../assets/imgs/newproduct/trafficengineering-img1.png" alt />
                        </div>
                        <div class="r-first-r">
                            <p>以公司整体资源为依托，秉持优质高效的服务理念，打造工程建设、系统集成及软件服务体系，提供专业持续的品质服务。</p>
                        </div>
                    </div>
                    <p class="title1">客户</p>
                    <p class="title-line"></p>
                    <div class="r-second">
                        <div class="r-second-list">
                            <img src="../../assets/imgs/newproduct/trafficengineering-img2.png" alt />
                            <p class="title">交警部门</p>
                            <p class="con">
                                <span>智慧交管工程</span>
                                <span>交通安全设施</span>
                            </p>
                        </div>
                        <div class="r-second-list">
                            <img src="../../assets/imgs/newproduct/trafficengineering-img3.png" alt />
                            <p class="title">公交部门</p>
                            <p class="con">
                                <span>智慧公交工程</span>
                                <span>交通安全设施</span>
                            </p>
                        </div>
                        <div class="r-second-list">
                            <img src="../../assets/imgs/newproduct/trafficengineering-img4.png" alt />
                            <p class="title">住建局、交管局、开发公司</p>
                            <p class="con">
                                <span>交通安全设施、系统集成</span>
                                <span>智慧交管工程、智慧公交工程</span>
                                <span>智慧停车工程、智慧建筑工程</span>
                            </p>
                        </div>
                    </div>
                    <p class="title1">解决问题</p>
                    <p class="title-line"></p>
                    <div class="r-third">
                        <div class="r-third-l">
                            <div>智慧工程以用户体验为核心，运用先进的信息、通讯、传感、控制、GIS、计算机等技术，实现城市全面感知、互联、分析、预警、控制等能力，提升城市的运行效率、管理水平，努力打造一个高效、舒适、便捷的人性化环境。</div>
                        </div>
                        <div class="r-third-r">
                            <img src="../../assets/imgs/newproduct/trafficengineering-img5.png" alt />
                        </div>
                    </div>
                    <p class="title1">产品特色</p>
                    <p class="title-line"></p>
                    <img
                        class="r-img"
                        src="../../assets/imgs/newproduct/trafficengineering-img6.png"
                        alt
                    />-->
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
            list: [],
            banners: "",
            navBarFixed: false,
            ltop: 0
        };
    },
    components: {
        Footer
    },
    created() {
        this.api();
    },
    mounted() {
        window.addEventListener("scroll", this.hidemenu); //监听滚动事件
        this.ltop = $(".newsfocus-con-l").offset().top - 70;
    },
    methods: {
        hidemenu() {
            let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;

            if (scrollTop > this.ltop) {
                this.navBarFixed = true;
            } else {
                this.navBarFixed = false;
            }
        },
        toDetail(x) {
            sessionStorage.setItem("pdetailid", x);
            this.$router.push({
                name: "detail",
                query: {
                    id: x,
                    field1: 2,
                    field2: 8
                }
            });
        },
        api() {
            //获取banner
            this.$api.get("banners/product-child", {}, res => {
                if (res.data.code == 1) {
                    this.banners = res.data.data[0];
                } else {
                }
            });

            this.$api.get("products/category/smart-parking", {}, res => {
                if (res.data.code == 1) {
                    this.list = res.data.data.data;
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
}
.newsfocus-banner img {
    width: 100%;
    height: 470px;
}
.newsfocus-top {
    width: 1200px;
    margin: 0 auto;
    margin-top: 60px;
    border-bottom: 1px solid #e1e1e1;
    font-size: 24px;
    font-weight: bold;
    color: #222222;
    height: 48px;
}
.newsfocus-con {
    width: 100%;
    margin-bottom: 100px;
}
.newsfocus-con-p {
    width: 1200px;
    margin: 0 auto;
    display: flex;
}
.newsfocus-con-l {
    width: 222px;
    border-right: 1px solid #e1e1e1;
}
.newsfocus-con-l-list {
    width: 222px;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
    border-bottom: 1px solid #e1e1e1;
    color: #222222;
}
.newsfocus-con-l-list img {
    float: right;
    padding: 17px;
}
.newsfocus-con-r {
    width: 970px;
    text-align: center;
    margin: 0 auto;
}
.newsfocus-con-r img:nth-child(1) {
    margin-top: 50px;
}
.newsfocus-con-r img {
    width: 800px;
}
.newsfocus-con-r .title1 {
    font-size: 20px;
    color: #222222;
    margin-top: 50px;
}
.newsfocus-con-r .title-line {
    width: 40px;
    height: 2px;
    background-color: #1280e1;
    margin: 0 auto;
}
.navBarWrap {
    position: fixed;
    top: 70px;
    z-index: 999;
    width: 222px;
}
.newsdetail-con-l-title {
    width: 1200px;
    margin: 0 auto;
    font-size: 14px;
    color: #666666;
    height: 30px;
    margin-top: 20px;
}
.newsdetail-con-l-title .title {
    color: #1280e1;
}
.r-first {
    width: 774px;
    height: 189px;
    border: solid 1px #e1e1e1;
    margin: 0 auto;
    margin-top: 30px;
    display: flex;
}
.r-first-l {
    width: 368px;
}
.r-first-l img {
    width: 368px;
}
.r-first-r p {
    width: 294px;
    font-size: 16px;
    line-height: 26px;
    color: #333;
    text-align: left;
    margin: 60px 0 0 58px;
}
.r-second {
    width: 775px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.r-second-list {
    width: 237px;
    text-align: center;
    margin-top: 40px;
}
.r-second-list img {
    width: 237px;
    height: 248px;
}
.r-second-list .title {
    font-size: 16px;
    font-weight: bold;
    color: #222222;
    margin-top: 10px;
}
.r-second-list .con {
    width: 225px;
    font-size: 14px;
    line-height: 23px;
    color: #666666;
    margin: 0 auto;
    margin-top: 8px;
}
.r-second-list .con span {
    width: 225px;
    font-size: 14px;
    line-height: 23px;
    color: #666666;
    display: block;
}
.r-third {
    width: 775px;
    margin: 0 auto;
    display: flex;
    margin-top: 36px;
}
.r-third-l {
    width: 405px;
    height: 227px;
}
.r-third-r img {
    width: 368px;
    height: 227px;
}
.r-third-l div {
    width: 373px;
    font-size: 16px;
    line-height: 26px;
    color: #333;
    text-align: justify;
    margin-top: 60px;
}
.r-img {
    margin-top: 38px;
}
</style>



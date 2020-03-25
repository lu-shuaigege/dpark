<template>
    <div class="newsfocus">
        <div class="newsfocus-banner">
            <img :src="banners.image" alt />
        </div>
        <p class="newsdetail-con-l-title">
            <span>产品服务 > 智慧交通解决方案 ></span>
            <span class="titl">智慧交管</span>
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
                            <img src="../../assets/imgs/more-new.png" alt />
                        </div>
                    </div>
                </div>
                <div class="newsfocus-con-r">
                    <p class="title1">产品特色</p>
                    <p class="title-line"></p>
                    <div class="productservice-content">
                        <img src="../../assets/imgs/productservice/productservicea.png" />
                        <img src="../../assets/imgs/productservice/productserviceb.png" />
                    </div>
                    <!-- <div class="title1-p">
                        <span class="title1-p1">01</span>
                        <span class="title1-p2">先进的产品发展模式</span>
                    </div>
                    <div class="con">
                        <p>智慧交通系统的长久发展是以工程建设为基础、以软件平台为核心、以运营服务为保障，三者相辅相成，协同发展。因此针对交通运营服务，我们有相关的软件配套，包括智慧交通数据共享平台、运营支撑平台、交通OD分析系统等。</p>
                    </div>
                    <div class="title1-p">
                        <span class="title1-p1">02</span>
                        <span class="title1-p2">强大的城市交通中台技术</span>
                    </div>
                    <div class="con">
                        <p>基于城市交通中台的算力引擎与算法引擎双驱动，打破业务和数据壁垒，实现交通管理行业应用，促进城市交通治理的智能化、集约化、人性化转型。</p>
                    </div>
                    <div class="title1-p">
                        <span class="title1-p1">03</span>
                        <span class="title1-p2">先进的PDCA+全生命周期的服务体系</span>
                    </div>
                    <div class="con">
                        <p>基于PDCA科学的流程质量管理方法，构建交通管理行业全生命周期服务体系，有效保障用户服务质量，为用户提供优质的服务体验。</p>
                    </div>-->

                    <!-- <p class="title1">经典案例</p>
                    <p class="title-line"></p>
                    <p class="title2-p">
                        <span class="title2-p1"></span>
                        <span class="title2-p2">苏州市交警支队</span>
                        <span class="title2-p3">-智慧交通建设与运营服务</span>
                    </p>

                    <div class="con">
                        <p>
                            <span>服务内容：</span>
                            苏州交警智慧交通主要包含软件建设和运营服务两大内容，软件建设包括：智慧交通数据共享平台、高速公路网格化集成智慧调度系统等，运营服务包括交通信号优化及评价、交通投诉分析处理、交通综合分析研判、交通建模及仿真、汇报及宣传材料制作等工作。
                        </p>
                    </div>

                    <div class="inmancase1">
                        <div class="inmancase1-p1">宏观交通模型</div>
                        <div class="inmancase1-p2">全国首个基于SCOOT的动态中观仿真模型</div>
                        <div class="inmancase1-p3">二维仿真</div>
                        <div class="inmancase1-p4">苏州市范围内首个区域三维微观仿真</div>
                        <div class="inmancase1-p5">交通组织优化</div>
                        <div class="inmancase1-p6">智慧交通数据共享平台</div>
                        <div class="inmancase1-p7">高速公路网格化集成智慧调度系统</div>
                    </div>

                    <p class="title2-p" style="margin-top: 70px;">
                        <span class="title2-p1"></span>
                        <span class="title2-p2">苏州工业园区交警大队</span>
                        <span class="title2-p3">-智能交通建设与运营服务</span>
                    </p>

                    <div class="con">
                        <p>
                            <span>服务内容：</span>
                            园区交警大队智能交通主要包含软件建设和运营服务两大内容，软件建设包括：交通信息诱导平台、路口档案昔日、交通OD分析系统等；运营服务包括：设计阶段的交通咨询、项目管理、招投标；建设与运营阶段的项目管理、软件集成、交通服务、专题分析、勤务工作、地理信息相关资源维护、秩序投诉回复、交通值守、信号系统维护与管理、设备巡检、技术文档整理与汇总、各类汇报PPT和材料整理。
                        </p>
                    </div>

                    <div class="inmancase2">
                        <div class="inmancase2-p1">奥体中心大型活动</div>
                        <div class="inmancase2-p2">独墅湖大道 — 通园路交通改善</div>
                        <div class="inmancase2-p3">诱导发布</div>
                        <div class="inmancase2-p4">交通信息动态管理系统</div>
                    </div>-->
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
                    field2: 5
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

            this.$api.get("products/category/smart-traffic", {}, res => {
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
    text-align: center;
    margin: 0 auto;
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
.productservice-content {
    width: 930px;
}
.productservice-content img {
    width: 100%;
    margin-top: 20px;
}
.productservice-content img:nth-child(2) {
    width: 700px;
    margin-top: 50px;
}
.newsfocus-con-r .title2 {
    font-size: 16px;
    font-weight: bold;
    color: #222222;
    margin-top: 35px;
}
.newsfocus-con-r .con {
    text-align: left;
    font-size: 14px;
    color: #333;
    width: 770px;
    margin: 0 auto;
    margin-top: 20px;
    line-height: 24px;
}
.newsfocus-con-r .con span {
    font-weight: bold;
}
.img1 {
    margin-top: 40px;
}
.navBarWrap {
    position: fixed;
    top: 70px;
    z-index: 999;
    width: 222px;
}

.title1-p {
    width: 338px;
    height: 36px;
    margin-top: 30px;
    background: url(../../assets/imgs/newproduct/nerproduct-title.png) no-repeat;
    background-size: 100% 100%;
    text-align: left;
    line-height: 36px;
}
.title1-p1 {
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    margin-left: 10px;
}
.title1-p2 {
    font-size: 16px;
    color: #ffffff;
    margin-left: 25px;
}
.title2-p {
    text-align: left;
    margin-top: 30px;
}
.title2-p1 {
    display: inline-block;
    width: 18px;
    height: 18px;
    background-color: #2190ee;
    border-radius: 2px;
    vertical-align: sub;
}
.title2-p2 {
    font-size: 16px;
    color: #2190ee;
}
.title2-p3 {
    font-size: 14px;
    color: #333333;
}
.inmancase1 {
    width: 779px;
    height: 490px;
    background: url(../../assets/imgs/newproduct/newproduct-img4.png) no-repeat;
    background-size: 100% 100%;
    margin-top: 25px;
    position: relative;
}
.inmancase1-p1 {
    width: 195px;
    height: 36px;
    background-color: #2190ee;
    line-height: 36px;
    font-size: 12px;
    color: #ffffff;
    position: absolute;
    top: 75px;
    left: 0;
}
.inmancase1-p2 {
    width: 131px;
    height: 36px;
    background-color: #2190ee;
    font-size: 12px;
    color: #ffffff;
    position: absolute;
    top: 75px;
    left: 198px;
    padding: 0 30px;
}
.inmancase1-p3 {
    width: 195px;
    height: 36px;
    background-color: #2190ee;
    line-height: 36px;
    font-size: 12px;
    color: #ffffff;
    position: absolute;
    top: 217px;
    left: 0;
}
.inmancase1-p4 {
    width: 131px;
    height: 36px;
    background-color: #2190ee;
    font-size: 12px;
    color: #ffffff;
    position: absolute;
    top: 217px;
    left: 198px;
    padding: 0 30px;
}
.inmancase1-p5 {
    width: 382px;
    height: 36px;
    background-color: #2190ee;
    line-height: 36px;
    font-size: 12px;
    color: #ffffff;
    position: absolute;
    top: 217px;
    left: 397px;
}
.inmancase1-p6 {
    width: 389px;
    height: 36px;
    background-color: #2190ee;
    line-height: 36px;
    font-size: 12px;
    color: #ffffff;
    position: absolute;
    top: 471px;
    left: 0;
}
.inmancase1-p7 {
    width: 382px;
    height: 36px;
    background-color: #2190ee;
    line-height: 36px;
    font-size: 12px;
    color: #ffffff;
    position: absolute;
    top: 471px;
    left: 397px;
}
.inmancase2 {
    width: 779px;
    height: 419px;
    background: url(../../assets/imgs/newproduct/nerproduct-img3.png) no-repeat;
    background-size: 100% 100%;
    margin-top: 25px;
    position: relative;
}
.inmancase2-p1 {
    width: 385px;
    height: 36px;
    background-color: #2190ee;
    line-height: 36px;
    font-size: 12px;
    color: #ffffff;
    position: absolute;
    top: 175px;
    left: 0;
}
.inmancase2-p2 {
    width: 386px;
    height: 36px;
    background-color: #2190ee;
    line-height: 36px;
    font-size: 12px;
    color: #ffffff;
    position: absolute;
    top: 175px;
    left: 393px;
}
.inmancase2-p3 {
    width: 385px;
    height: 36px;
    background-color: #2190ee;
    line-height: 36px;
    font-size: 12px;
    color: #ffffff;
    position: absolute;
    top: 392px;
    left: 0;
}
.inmancase2-p4 {
    width: 386px;
    height: 36px;
    background-color: #2190ee;
    line-height: 36px;
    font-size: 12px;
    color: #ffffff;
    position: absolute;
    top: 392px;
    left: 393px;
}

.newsdetail-con-l-title {
    width: 1200px;
    margin: 0 auto;
    font-size: 14px;
    color: #666666;
    height: 30px;
    margin-top: 20px;
}
.newsdetail-con-l-title .titl {
    color: #1280e1;
}
</style>



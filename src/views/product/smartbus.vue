<template>
    <div class="newsfocus">
        <div class="newsfocus-banner">
            <img :src="banners.image" />
        </div>
        <p class="newsdetail-con-l-title">
            <span>产品服务 > 智慧交通解决方案 ></span>
            <span class="titl">智慧公交</span>
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
                    <p class="title1">产品特色</p>
                    <p class="title-line"></p>
                    <div class="title1-p">
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
                    </div>
                    <div class="bus-content">
                        <img src="../../assets/imgs/bus/busa.png" />
                        <img src="../../assets/imgs/bus/busb.png" />
                    </div>
                    <!-- <p class="title1">经典案例</p>
                    <p class="title-line"></p>
                    <p class="title2-p">
                        <span class="title2-p1"></span>
                        <span class="title2-p2">苏州工业园区</span>
                        <span class="title2-p3">-智能公交项目</span>
                    </p>

                    <div class="con">
                        <p>
                            <span>交通专业系统升级建设：</span>线路规划与评价系统、客流采集与分析系统；
                        </p>
                        <p>
                            <span>服务平台建设：</span>出行服务平台，包括：电子站牌报站服务、出行App、微信公众号；
                        </p>
                        <p>
                            <span>技术升级咨询：</span>技术升级咨询：公交大数据分析平台咨询设计。
                        </p>
                    </div>
                    <img
                        style="margin-top:30px"
                        src="../../assets/imgs/newproduct/nerproduct-img5.png"
                        alt
                    />

                    <p class="title2-p" style="margin-top:70px">
                        <span class="title2-p1"></span>
                        <span class="title2-p2">苏州工业园区</span>
                        <span class="title2-p3">-线路优化运营服务</span>
                    </p>

                    <div class="conlist">
                        <div class="conlist-l">
                            <p>
                                <span></span>苏州高铁北站客流分析；
                            </p>
                            <p>
                                <span></span>园区公交146、18线路优化；
                            </p>
                            <p>
                                <span></span>园区公交180线路时刻表优化；
                            </p>
                        </div>
                        <div class="conlist-r">
                            <p>
                                <span></span>苏州中心公交线路优化调整方案；
                            </p>
                            <p>
                                <span></span>苏州快线2号和快线6号开通方案；
                            </p>
                            <p>
                                <span></span>华谊兄弟国际影城公交线路优化调整方案。
                            </p>
                        </div>
                    </div>

                    <div class="buscase">
                        <p class="buscase-p1">公交线路站点优化</p>
                        <p class="buscase-p2">轨交接驳分析</p>
                        <p class="buscase-p3">公交线路优化</p>
                        <p class="buscase-p4">公交线路规划</p>
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
                    field2: 6
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

            this.$api.get("products/category/smart-bus", {}, res => {
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
    color: #333;
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
    color: #333;
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
    color: #333;
    margin-top: 50px;
}
.newsfocus-con-r .title-line {
    width: 40px;
    height: 2px;
    background-color: #1280e1;
    margin: 0 auto;
}
.newsfocus-con-r .title2 {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin-top: 35px;
}
.newsfocus-con-r .con {
    text-align: left;
    font-size: 14px;
    color: #666666;
    width: 770px;
    margin: 0 auto;
    margin-top: 20px;
    line-height: 24px;
}
.bus-content {
    max-width: 800px;
}
.bus-content img {
    width: 800px;
    margin-top: 50px;
}
.newsfocus-con-r .con p span {
    color: #333;
    font-weight: bold;
}
.img1 {
    margin-top: 50px;
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
.conlist {
    text-align: left;
    display: flex;
    margin-top: 15px;
}
.conlist-l {
    width: 282px;
}
.conlist-r {
    margin-left: 50px;
}
.conlist p {
    font-size: 14px;
    color: #666666;
    padding-left: 15px;
    line-height: 24px;
}
.conlist span {
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #999999;
    border-radius: 4px;
    margin-top: -3px;
    vertical-align: middle;
    margin-right: 5px;
}
.buscase {
    width: 780px;
    height: 424px;
    background: url(../../assets/imgs/newproduct/nerproduct-img6.png) no-repeat;
    background-size: 100% 100%;
    margin-top: 25px;
    position: relative;
}
.buscase p {
    font-size: 14px;
    color: #333;
    width: 385px;
    position: absolute;
}
.buscase-p1 {
    left: 0;
    top: 205px;
}
.buscase-p2 {
    left: 400px;
    top: 205px;
}
.buscase-p3 {
    left: 0;
    top: 430px;
}
.buscase-p4 {
    left: 400px;
    top: 430px;
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



<template>
    <div class="newsfocus">
        <div class="newsfocus-banner">
            <img :src="banners.image" />
        </div>
        <p class="newsdetail-con-l-title">
            <span>产品服务 > 自然资源空间信息服务解决方案 ></span>
            <span class="title">智慧交通规划</span>
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
                    <div class="newsfocus-con-r-topcontent">
                        <img src="../../assets/imgs/trafficplanning/trafficplanninga.png" />
                        <img src="../../assets/imgs/trafficplanning/trafficplanningb.png" />
                    </div>
                    <p class="title1">智慧交通规划</p>
                    <p class="title-line"></p>
                    <div
                        class="con"
                    >秉承衔接优化，协调发展的规划理念，以融合多源数据为内核，以数据流串联业务流，构建多模式全出行链，实现交通规划领域数据闭环的应用，从而实现交通规划资源整合化、管理精细化、决策科学化。</div>
                    <!-- <p class="title1">客户</p>
                    <p class="title-line"></p>
                    <div class="r-first">
                        <div class="r-first-list">
                            <img src="../../assets/imgs/newproduct/trafficplanning-img1.png" alt />
                            <p>市、区规划部门</p>
                        </div>
                        <div class="r-first-list">
                            <img src="../../assets/imgs/newproduct/trafficplanning-img2.png" alt />
                            <p>规划设计单位</p>
                        </div>
                    </div>-->
                    <p class="title1">解决问题</p>
                    <p class="title-line"></p>
                    <div class="r-second">
                        <div class="r-second-l">
                            <p>利用专业的技术手段，提升用户在以下几方面的能力：更开放的规划信息共享服务；更精准的规划决策支撑；更精细的规划管理能力；更全面的规划监管水平。横向上，破除行业壁垒，实现基于交通大数据的融合共享，实现大交通业务的一体化、常态化；纵向上，基于宏中微观交通模型，实现交通规划管理的深度服务科学化、精细化。</p>
                        </div>
                        <div class="r-second-r">
                            <img src="../../assets/imgs/newproduct/trafficplanning-img3.png" />
                        </div>
                    </div>
                    <!-- <p class="title1">产品特色</p>
                    <p class="title-line"></p>
                    <div class="r-third">
                        <div class="r-third-list">
                            <div class="conn con1">
                                <p>基于综合交通数据的采集、清洗、加工、分析的数据集成与交通宏观、中观、微观模型体系的算法集成，提供交通规划行业数据服务-方案评估-规划决策的闭环服务模式。</p>
                            </div>
                            <p>交通规划闭环服务模式</p>
                        </div>
                        <div class="r-third-list">
                            <div class="conn con2">
                                <p>覆盖公交、自行车、轨交等多种交通出行方式，构建集出行前信息预测、出行中态势推送、出行后服务评估于一体的全出行链交通规划服务体系</p>
                            </div>
                            <p>多模式全出行链交通规划服务体系</p>
                        </div>
                        <div class="r-third-list">
                            <div class="conn con3">
                                <p>基于城市交通中台的算力引擎与算法引擎双驱动，打破业务和数据壁垒，实现交通规划行业应用，促进城市交通治理的智能化、集约化、人性化转型</p>
                            </div>
                            <p>强大的城市交通中台技术</p>
                        </div>
                    </div>-->
                    <!-- <p class="title1">城市交通数据中心</p>
                    <p class="title-line"></p>
                    <div
                        class="con"
                    >以大数据分析技术为基础，汇聚融合基础地理、社会经济、土地利用、交通行业特征（？出行数据）、交通调查、规划等多源异构数据，使利用大数据治理和深度挖掘等技术手段，融合综合交通模型（TransCAD，TransModel），分析区域交通出行生成、交通分布、方式划分、交通分配规律（？情况），为交通基础设施建设、交通政策制定、交通影响评价提供更科学的量化参考和决策支持。并实现与其他政府部门、机构的信息共享。</div>
                    <img
                        class="r-img1"
                        src="../../assets/imgs/newproduct/trafficplanning-img7.png"
                        alt
                    />
                    <p class="title1">城市交通模型</p>
                    <p class="title-line"></p>
                    <div
                        class="con"
                    >利用城市宏、中、微观三个层次交通模型，从不同空间维度，构建城市交通需求的量化指标体系，分析评价城市的交通需求，辅助交通规划、建设、管理等领域的科学决策。</div>
                    <div class="r-four">
                        <div class="r-four-list">
                            <img src="../../assets/imgs/newproduct/trafficplanning-img8.png" alt />
                            <p>宏观模型</p>
                        </div>
                        <div class="r-four-list">
                            <img src="../../assets/imgs/newproduct/trafficplanning-img9.png" alt />
                            <p>中观模型</p>
                        </div>
                    </div>
                    <div class="r-four">
                        <div class="r-four-list">
                            <img src="../../assets/imgs/newproduct/trafficplanning-img10.png" alt />
                            <p>微观模型</p>
                        </div>
                        <div class="r-four-list">
                            <img src="../../assets/imgs/newproduct/trafficplanning-img11.png" alt />
                            <p>路口模型</p>
                        </div>
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
                    field2: 7
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

            this.$api.get("products/category/traffic-regulation", {}, res => {
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
.newsfocus-con-r-topcontent {
    width: 970px;
    margin-top: 50px;
}
.newsfocus-con-r-topcontent img {
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
    /* margin-top: 20px; */
    margin: 20px auto 0px;
    text-indent: 28px;
    line-height: 24px;
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
    width: 778px;
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
}
.r-first-list {
    width: 371px;
}
.r-first-list img {
    width: 371px;
}
.r-first-list p {
    margin-top: 5px;
    font-size: 14px;
}
.r-second {
    width: 778px;
    /* margin-top: 32px; */
    margin: 32px auto 0px;
    display: flex;
    justify-content: space-between;
}
.r-second-l {
    width: 391px;
}
.r-second-l p {
    width: 364px;
    font-size: 14px;
    line-height: 24px;
    color: #666666;
    margin-top: 24px;
    text-align: justify;
    text-indent: 28px;
}
.r-second-r {
    width: 380px;
}
.r-third {
    width: 778px;
    margin-top: 51px;
    display: flex;
    justify-content: space-between;
}
.r-third-list {
    width: 255px;
}
.r-third-list .con1 {
    width: 255px;
    height: 304px;
    background: url(../../assets/imgs/newproduct/trafficplanning-img4.png);
}
.r-third-list .con2 {
    width: 255px;
    height: 304px;
    background: url(../../assets/imgs/newproduct/trafficplanning-img5.png);
}
.r-third-list .con3 {
    width: 255px;
    height: 304px;
    background: url(../../assets/imgs/newproduct/trafficplanning-img6.png);
}
.r-third-list .conn p {
    width: 192px;
    font-size: 12px;
    line-height: 26px;
    color: #ffffff;
    padding: 76px 0 0 35px;
    text-align: justify;
}
.r-third-list p {
    font-size: 14px;
    line-height: 36px;
    color: #333;
    text-align: center;
}
.r-img1 {
    margin-top: 30px;
}
.r-four {
    display: flex;
    justify-content: space-between;
}
.r-four-list {
    width: 362px;
    height: 235px;
    margin-top: 36px;
}
.r-four-list img {
    width: 362px;
    height: 193px;
}
.r-four-list p {
    font-size: 14px;
    line-height: 24px;
    color: #333333;
}
</style>



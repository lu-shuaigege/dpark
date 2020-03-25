<template>
    <div class="naturalresources">
        <div class="naturalresources-banner">
            <img :src="banners.image" />
        </div>
        <p class="newsdetail-con-l-title">
            <span>产品服务 ></span>
            <span class="title">智慧环保大数据分析平台</span>
        </p>
        <div class="environmentalprotection-first">
            <div class="naturalresources-title">智慧环保大数据分析平台</div>
            <div
                class="environmentalprotection-first-text"
            >智慧环保大数据分析平台是一款针对城市环境中空气、水、固废等污染物，开展实时监测、智能分析、智慧化管理的综合大数据分析平台。通过物联网传感器网络，实时采集、存储、归档各项污染物浓度的时空分布大数据，完成对各项环境指标的实时动态监测。平台将城市生态环境、地理环境、气象环境、污染监测、污染企业、居住人口等数据汇聚起来，赋予自身实时报警、应急处置、智能化预警、情景还原、污染溯源、决策支持等能力。</div>
            <div class="environmentalprotection-first-img-div">
                <div class="environmentalprotection-first-img-div-left">
                    <img
                        class="environmentalprotection-first-img"
                        src="../../assets/imgs/protection/protectiona.png"
                    />
                </div>
                <div class="environmentalprotection-first-img-div-right">
                    <img src="../../assets/imgs/protection/protectionb.png" />
                    <img src="../../assets/imgs/protection/protectionc.png" />
                </div>
            </div>
            <div class="environmentalprotection-first-img-div">
                <div class="environmentalprotection-first-img-div-right">
                    <img src="../../assets/imgs/protection/protectione.png" />
                    <img src="../../assets/imgs/protection/protectionf.png" />
                </div>
                <div class="environmentalprotection-first-img-div-left">
                    <img
                        class="environmentalprotection-first-img"
                        src="../../assets/imgs/protection/protectiond.png"
                    />
                </div>
            </div>
        </div>
        <div class="environmentalprotection-second">
            <div class="naturalresources-title">建设目标</div>
            <div class="environmentalprotection-second-con">
                <div class="environmentalprotection-second-con-l">
                    <p>环保部门</p>
                    <div>通过构建空气和水体指标的监测、预警和溯源的监控体系，为环保部门的决策提供依据。</div>
                </div>
                <div class="environmentalprotection-second-con-r">
                    <img src="../../assets/imgs/newproduct/environmentalprotection-img2.png" />
                </div>
            </div>
            <div class="environmentalprotection-second-con">
                <div class="environmentalprotection-second-con-r">
                    <img src="../../assets/imgs/newproduct/environmentalprotection-img3.png" />
                </div>
                <div class="environmentalprotection-second-con-l">
                    <p>厂方（污染物源）</p>
                    <div>当监测站检测到相关污染物的浓度超过阈值时，平台会通过短信、电话等方式对相关负责人发送报警信息。</div>
                </div>
            </div>
        </div>
        <div class="environmentalprotection-third">
            <div class="naturalresources-title">解决问题</div>
            <div class="environmentalprotection-third-con">
                <div class="environment-third-list">
                    <div class="title">传统空气监测中存在的问题</div>
                    <div
                        class="con"
                    >传统的空气质量监测站建设成本高昂，国控点数量少，全国仅有3000多个站点，产生的数据有限。缺乏足够的监测点，使得先进的空气质量管理应用数据不足，无法进行空气质量的高级应用，如空气污染溯源，污染因子量化分析等。另外，目前的站点缺乏针对城市中特定污染源的站点，无法进行污染源管理。</div>
                </div>
                <div class="environment-third-list third-list2">
                    <div class="title">传统水质监测中存在的问题</div>
                    <div
                        class="con"
                    >目前，传统的水质监测站的方案多是基于人工操作的化学过程，监测时间慢，需要人工在实验室环境进行检测。并且，传统方法非实时监测，无法高效及时监测到不法企业的偷排行为等突发状况。</div>
                </div>
                <div class="environment-third-list">
                    <div class="title">传统监测中存在的其他问题</div>
                    <div
                        class="con"
                    >传统监测，缺乏一个直观的可视化监测平台，对污染情况的了解依赖零散的纸面资料，不能直观的看到不同类型污染物的分布。对污染的分析、溯源等多依靠经验推断，缺少理论支持。</div>
                </div>
            </div>
        </div>
        <div class="environmentalprotection-four">
            <div class="naturalresources-title">产品特色</div>
            <div class="environmentalprotection-four-con">
                <div class="four-con-list">
                    <div class="four-con-listone">
                        <div class="title title1">基于地图可视化的空气污染数据管理</div>
                        <div
                            class="con"
                        >系统支持将空气污染相关的测站信息、实时浓度信息、污染企业信息融入电子地图，以空间可视化的方式管理空气污染数据，从而全方位掌控城市空气污染的综合态势。</div>
                    </div>
                    <div class="four-con-listone">
                        <div class="title title2">多类型数据融合</div>
                        <div class="con">系统支持集成包括地理信息、GPS数据、Iot环境传感器数据、统计数据等多类型数据。</div>
                    </div>
                </div>
                <div class="four-con-list">
                    <div class="four-con-listone">
                        <div class="title title2">污染物扩散时空过程的历史再现</div>
                        <div
                            class="con"
                        >基于地图空间可视化技术，将污染物浓度按照时间和空间两个维度进行同步呈现，支持空间数据的实时监控、历史回放、模拟推演，让规律清晰可见，让决策有数可依、更加高效。</div>
                    </div>
                    <div class="four-con-listone">
                        <div class="title title1">污染时空变化分析</div>
                        <div class="con">基于地图空间可视化技术和污染物时空溯源模型，追溯污染物扩散的轨迹，并通过污染物扩散迹线查找疑似的高排污染源。</div>
                    </div>
                </div>
                <div class="four-con-list">
                    <div class="four-con-listone">
                        <div class="title title1">多样的可视化呈现手段</div>
                        <div class="con">系统支持空气污染监测结果和污染企业管理数据的在线统计分析能力。系统针对统计结果的可视化，提供丰富的图表呈现方式。</div>
                    </div>
                    <div class="four-con-listone">
                        <div class="title title2">海量IoT设备实时数据的接入</div>
                        <div
                            class="con"
                        >系统拥有高效可靠的实时大数据接入能力，支持接入城市级范围地图、IoT环境传感设备，可以支撑TB级的业务数据吞吐量。同时可以实现各类接口数据的无缝可视化接入，并在线上可快速响应分析操作和实时反映数据变化</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="environmentalprotection-five">
            <div class="environmentalprotection-five-con">
                <div class="five-con-list" v-for="item in list" :key="item">
                    <img :src="item.cover_image" />
                    <p class="p">{{item.title}}</p>
                    <button class="button" @click="toDetail(item.id)">查看更多>></button>
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
            banners: "",
            list: []
        };
    },
    components: {
        Footer
    },
    created() {
        //获取banner
        this.$api.get("banners/product-child", {}, res => {
            if (res.data.code == 1) {
                this.banners = res.data.data[0];
            } else {
            }
        });
        //获取列表
        this.$api.get(
            "products/category/inteenvi-bigdata-platform",
            {},
            res => {
                if (res.data.code == 1) {
                    this.list = res.data.data.data;
                } else {
                }
            }
        );
    },
    methods: {
        toDetail(x) {
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
.naturalresources {
    padding-top: 70px;
}
.naturalresources-banner {
}
.naturalresources-banner img {
}
.naturalresources-title {
    font-size: 24px;
    font-weight: bold;
    color: #333333;
    text-align: center;
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

.environmentalprotection-first {
    width: 1200px;
    margin: 0 auto;
    margin-top: 80px;
}
.environmentalprotection-first-text {
    width: 1122px;
    font-size: 16px;
    color: #333333;
    text-indent: 30px;
    line-height: 26px;
    margin: 0 auto;
    margin-top: 30px;
}
.environmentalprotection-first-img-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
}
.environmentalprotection-first-img {
    /* display: inline-block; */
    width: 580px;
    /* height: 836px; */
    margin-top: 40px;
}
.environmentalprotection-first-img-div-left {
    width: 580px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.environmentalprotection-first-img-div-right {
    width: 580px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}
.environmentalprotection-first-img-div-right img {
    width: 48%;
}
.environmentalprotection-second {
    width: 100%;
    height: 720px;
    background: #f8f8f8;
    margin-top: 130px;
    padding-top: 50px;
}
.environmentalprotection-second-con {
    width: 1205px;
    height: 256px;
    border: solid 1px #e1e1e1;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
}
.environmentalprotection-second-con-l {
    width: 531px;
    margin-left: 54px;
}
.environmentalprotection-second-con-l p {
    font-size: 16px;
    font-weight: bold;
    color: #333333;
    margin-top: 90px;
}
.environmentalprotection-second-con-l div {
    font-size: 14px;
    color: #333333;
    width: 392px;
    margin-top: 10px;
    line-height: 24px;
}
.environmentalprotection-second-con-r {
    width: 674px;
}
.environmentalprotection-third {
    width: 100%;
    height: 514px;
    background: #fff;
    padding-top: 84px;
}
.environmentalprotection-third-con {
    width: 1200px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
}
.environment-third-list {
    width: 374px;
    height: 350px;
    background-color: #1280e1;
}
.third-list2 {
    background-color: #00c6bb;
}
.environment-third-list .title {
    width: 192px;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    border-bottom: 1px solid #fff;
    margin-left: 40px;
    margin-top: 50px;
}
.environment-third-list .con {
    width: 294px;
    font-size: 14px;
    line-height: 26px;
    color: #ffffff;
    margin: 0 auto;
    margin-top: 30px;
}
.environmentalprotection-four {
    width: 100%;
    height: 660px;
    background: #f8f8f8;
    padding-top: 60px;
}
.environmentalprotection-four-con {
    width: 1200px;
    margin: 0 auto;
    margin-top: 20px;
}
.four-con-list {
    display: flex;
    justify-content: space-between;
}
.four-con-listone {
    margin-top: 50px;
}
.four-con-listone .title {
    width: 513px;
    height: 38px;
    line-height: 38px;
    font-size: 16px;
    color: #ffffff;
    padding-left: 55px;
}
.four-con-listone .title1 {
    background: url(../../assets/imgs/newproduct/environmentalprotection-img4.png);
    background-size: 100% 100%;
}
.four-con-listone .title2 {
    background: url(../../assets/imgs/newproduct/environmentalprotection-img5.png);
    background-size: 100% 100%;
}
.four-con-listone .con {
    width: 504px;
    font-size: 14px;
    line-height: 24px;
    color: #333;
    text-align: justify;
    margin-left: 47px;
    margin-top: 24px;
}
.environmentalprotection-five {
    padding-top: 56px;
    padding-bottom: 164px;
}
.environmentalprotection-five-con {
    width: 1236px;
    margin: 0 auto;
}
.five-con-list {
    width: 377px;
    height: 331px;
    border: solid 1px #f4f4f4;
    margin: 82px 14px 0 14px;
    text-align: center;
    color: #222222;
    display: inline-block;
}
.five-con-list img {
    width: 377px;
    height: 200px;
}
.five-con-list p {
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
}
.five-con-list button {
    width: 128px;
    height: 36px;
    border: solid 1px #1280e1;
    background: #fff;
    font-size: 14px;
    color: #1280e1;
    margin-top: 20px;
    cursor: pointer;
    text-align: center;
}
.five-con-list button:hover {
    background-color: #1280e1;
    color: #ffffff;
}
.five-con-list:hover {
    color: #1280e1 !important;
}
</style>
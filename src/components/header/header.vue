<template>
    <!-- 导航 -->
    <div class="nav">
        <div class="navcontent">
            <div class="navcontent_left">
                <router-link to="/home">
                    <img src="../../assets/imgs/SIPSD.png" alt />
                </router-link>
            </div>
            <div class="navcontent_right">
                <ul>
                    <router-link to="/home">
                        <li @click="selectNav(1)" :class="nav == 1 ? 'selected' :''">首页</li>
                    </router-link>
                    <router-link to="/about">
                        <li @click="selectNav(2)" :class="nav == 2 ? 'selected' :''">关于我们</li>
                    </router-link>

                    <li
                        class="prod"
                        @click="selectNav(3)"
                        :class="nav == 3 ? 'selected' :''"
                        style="width:64px;"
                    >
                        <router-link to="/productservice">
                            <span style="display:block;color: #222222;">产品服务</span>
                        </router-link>
                        <div class="navproduct">
                            <div class="navproduct-l">
                                <div @mouseover="mOver()" @mouseout="mOut()">
                                    <router-link to="/naturalresources">
                                        <p class="navproduct-l1">自然资源空间信息服务解决方案</p>
                                    </router-link>
                                    <div class="navproduct-r">
                                        <router-link to="/surveyservice">
                                            <p>测绘服务</p>
                                        </router-link>
                                        <router-link to="/dataservice">
                                            <p>数据服务</p>
                                        </router-link>
                                        <router-link to="/softwareproduct">
                                            <p>软件服务</p>
                                        </router-link>
                                        <router-link to="/consultingsupervision">
                                            <p>咨询监理</p>
                                        </router-link>
                                    </div>
                                </div>
                                <div @mouseover="mOver1()" @mouseout="mOut1()">
                                    <router-link to="/trafficplan">
                                        <p class="navproduct-l2">智慧交通解决方案</p>
                                    </router-link>
                                    <div class="navproduct-r1">
                                        <router-link to="/intelligencemanagement">
                                            <p>智慧交管</p>
                                        </router-link>
                                        <router-link to="/smartbus">
                                            <p>智慧公交</p>
                                        </router-link>
                                        <router-link to="/trafficplanning">
                                            <p>智慧交通规划</p>
                                        </router-link>
                                        <router-link to="/trafficengineering">
                                            <p>智慧交通工程</p>
                                        </router-link>
                                    </div>
                                </div>
                                <router-link to="/smarttown">
                                    <p class="navproduct-l3">审批服务综合执法一体化平台</p>
                                </router-link>

                                <div @mouseover="mOver2()" @mouseout="mOut2()">
                                    <router-link to="/assetintelligence">
                                        <p class="navproduct-l3">资产智能化运营管理平台</p>
                                    </router-link>
                                    <div class="navproduct-r2">
                                        <router-link to="/Intelligentsoft">
                                            <p>软件产品</p>
                                        </router-link>
                                        <router-link to="/Intelligentproduct">
                                            <p>服务产品</p>
                                        </router-link>
                                        <router-link to="/Intelligentcase">
                                            <p>经典案例</p>
                                        </router-link>
                                    </div>
                                </div>
                                <router-link to="/environmentalprotection">
                                    <p class="navproduct-l3">智慧环保大数据分析平台</p>
                                </router-link>
                                <router-link to="/administrationlaw">
                                    <p class="navproduct-l4">综合行政法智慧管理平台</p>
                                </router-link>
                            </div>
                        </div>
                    </li>

                    <router-link to="/newsfocus">
                        <li @click="selectNav(4)" :class="nav == 4 ? 'selected' :''">新闻聚焦</li>
                    </router-link>
                    <router-link to="/corporateculture">
                        <li @click="selectNav(5)" :class="nav == 5 ? 'selected' :''">企业文化</li>
                    </router-link>
                    <!-- <router-link to="/contactus">
          <li @click="selectNav(6)" :class="nav == 6 ? 'selected' :''">联系我们</li>
                    </router-link>-->
                    <li
                        class="contactus"
                        @click="selectNav(6)"
                        :class="nav == 6 ? 'selected' :''"
                        style="width:64px;"
                    >
                        <router-link to="/contactus">
                            <span style="display:block;color: #222222;">联系我们</span>
                        </router-link>
                        <div class="contactus_list">
                            <router-link to="/contactus">
                                <p>广纳贤才</p>
                            </router-link>
                            <p @click.stop="toComplaint()">投诉与建议</p>
                            <!-- <a href="/home#add"><p>投诉与建议</p></a> -->
                        </div>
                    </li>
                </ul>
            </div>
            <div class="navcontent-search">
                <div v-show="activeName">
                    <span @click="tosearch()"></span>
                    <input
                        @keyup.enter="searchEnterFun"
                        v-model="input"
                        type="text"
                        placeholder="请输入关键词"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nav: 1,
            input: "",
            activeName: true
        };
    },
    mounted() {
        let search = sessionStorage.getItem("search");
    },
    created() {
        if (sessionStorage.getItem("Nav") != null) {
            this.nav = sessionStorage.getItem("Nav");
        }
    },
    methods: {
        toComplaint() {
            this.$router.push({
                name: "home"
            });
            this.nav = 1;
            setTimeout(function() {
                document.documentElement.scrollTop = 10000;
            }, 200);
        },
        tosearch() {
            if (this.input) {
                sessionStorage.setItem("search", this.input);
                this.$router.push({
                    name: "search"
                });
                this.input = "";
            }
        },
        searchEnterFun(e) {
            // this.$router.push({path:'/search',query:{searchData:this.input}});

            var keyCode = window.event ? e.keyCode : e.which;
            if (keyCode == 13 && this.input) {
                sessionStorage.setItem("search", this.input);
                this.$router.push({
                    path: "/search"
                });
                this.input = "";
            }
        },
        selectNav(x) {
            sessionStorage.setItem("Nav", x);
            this.nav = x;
        },
        mOut() {
            $(".navproduct-r").hide();
        },
        mOver() {
            $(".navproduct-r").show();
        },
        mOut1() {
            $(".navproduct-r1").hide();
        },
        mOver1() {
            $(".navproduct-r1").show();
        },
        mOut2() {
            $(".navproduct-r2").hide();
        },
        mOver2() {
            $(".navproduct-r2").show();
        }
    },
    watch: {
        $route() {
            if (this.$route.path == "/search") {
                this.activeName = false;
            } else {
                this.activeName = true;
            }

            if (this.$route.path == "/home") {
                this.nav = 1;
            } else if (this.$route.path == "/about") {
                this.nav = 2;
            } else if (
                this.$route.path == "/newsfocus" ||
                this.$route.path == "/newsdetail"
            ) {
                this.nav = 4;
            } else if (this.$route.path == "/corporateculture") {
                this.nav = 5;
            } else if (this.$route.path == "/contactus") {
                this.nav = 6;
            } else if (this.$route.path == "/search") {
                this.nav = 0;
            } else {
                this.nav = 3;
            }
        }
    }
};
</script>
<style scoped>
input::-webkit-input-placeholder {
    color: #999;
    font-size: 12px;
    font-family: 微软雅黑;
    line-height: 30px;
}
.nav {
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    box-shadow: 0px 4px 7px 0px rgba(34, 34, 34, 0.2);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 9;
}
.navcontent {
    width: 1200px;
    height: 70px;
    margin: 0px auto;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
}

.navcontent_left {
    width: 133px;
    height: 35px;
}

.navcontent_left img {
    width: 133px;
    height: 35px;
}

.navcontent_right {
    width: 588px;
    height: 70px;
    margin-left: 229px;
}

.navcontent_right ul {
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 70px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin: 0;
}

.navcontent_right ul li {
    /* width: 80px; */
    height: 67px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #222222;
    cursor: pointer;
}

/* .navcontent_right ul li:hover {
  background-color: #0364ae;
} */
.selected {
    /* background-color: #0364ae; */
    border-bottom: 3px solid #1280e1;
}
.navcontent-search {
    position: relative;
    width: 150px;
    height: 32px;
    margin-left: 100px;
}
.navcontent-search div {
    width: 150px;
    height: 32px;
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
    width: 107px;
    height: 30px;
    background-color: #ffffff;
    border-radius: 16px;
    border: solid 1px #1280e1;
    outline-style: none;
    padding-left: 41px;
    background: url(../../assets/imgs/home/home-search.png) no-repeat;
    background-position: 14px 7px;
}
.navproduct {
    width: 301px;
    height: 354px;
    /* background-color: #ffffff; */
    border-radius: 0px 0px 0px 8px;
    font-size: 16px;
    display: flex;
    display: none;
    position: relative;
    margin-left: -50px;
    border-radius: 0px 0px 8px 8px;
    /* box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.08); */
}
.navproduct-l {
    text-align: left;
    width: 260px;
    background-color: #ffffff;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.08);
}
.navproduct-l1,
.navproduct-l2,
.navproduct-l3,
.navproduct-l4 {
    line-height: 24px;
    padding: 17px 15px;
    border-bottom: 1px solid #f0f0f0;
    color: #222222;
}
.navproduct-l p:hover {
    background-color: #f8f8f8;
    color: #1280e1;
}
.navproduct-r {
    text-align: center;
    width: 120px;
    background-color: #f8f8f8;
    padding-top: 20px;
    height: 334px;
    position: absolute;
    top: 0;
    right: -79px;
    display: none;
}
.navproduct-r p {
    line-height: 36px;
    color: #666;
    font-size: 14px;
}

.navproduct-r p:hover {
    color: #1280e1;
}
.navproduct-r1 {
    text-align: center;
    width: 120px;
    background-color: #f8f8f8;
    padding-top: 20px;
    height: 334px;
    position: absolute;
    top: 0;
    right: -79px;
    display: none;
}
.navproduct-r1 p {
    line-height: 36px;
    color: #666;
    font-size: 14px;
}
.navproduct-r1 p:hover {
    color: #1280e1;
}

.navproduct-r2 {
    text-align: center;
    width: 120px;
    background-color: #f8f8f8;
    padding-top: 20px;
    height: 334px;
    position: absolute;
    top: 0;
    right: -79px;
    display: none;
}
.navproduct-r2 p {
    line-height: 36px;
    color: #666;
    font-size: 14px;
}
.navproduct-r2 p:hover {
    color: #1280e1;
}
.prod:hover .navproduct {
    display: flex;
    /* width: 181px; */
}
.navproduct-l2 {
}
.navproduct-l3 {
}
.navproduct-l4 {
    border: none;
}

.contactus:hover .contactus_list {
    display: block;
}
.contactus_list {
    text-align: left;
    width: 120px;
    font-size: 16px;
    margin-left: -28px;
    background-color: #ffffff;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.08);
    display: none;
}
.contactus_list p {
    line-height: 24px;
    padding: 17px 15px;
    border-bottom: 1px solid #f0f0f0;
    color: #222222;
}
.contactus_list p:hover {
    background-color: #f8f8f8;
    color: #1280e1;
}
</style>

<template>
    <div class="contactus">
        <div class="contactus-banner">
            <img :src="banners.image" />
        </div>
        <div class="contactus-con">
            <div class="contactus-con-up">
                <p class="contactus-con-title">诚聘英才</p>
                <div class="contactus-con-link">
                    <p>邮箱地址：hr@dpark.com.cn</p>
                    <p>HR 专线：0512-67612670</p>
                </div>
            </div>
            <div class="contactus-con-ud">
                <div class="contactus-type">
                    <img class="contactus-type-up" src="../../assets/imgs/socialrecruitment.png" />
                    <div
                        class="contactus-type-list"
                        @click="showListone(item.id)"
                        v-for="item in newrequirement"
                        :key="item.id"
                    >
                        <div class="list-title">
                            <span class="line"></span>
                            <span class="text">{{item.title}}</span>
                            <img
                                v-show="active1!=item.id"
                                class="xiala"
                                src="../../assets/imgs/xiala-r.png"
                            />
                            <div class="xiala1" v-show="active1==item.id" @click="showListone(0)">
                                <img class="xiala" src="../../assets/imgs/xiala-ud.png" />
                            </div>
                        </div>
                        <div class="list-con" v-show="active1==item.id">
                            <p>你将要负责什么</p>
                            <li v-for="(item1,index1) of item.requirement" :key="index1+1">{{item1}}</li>
                            <p style="margin-top:20px">我们希望你是这样的</p>
                            <li
                                v-for="(item2,index2) of item.responsibility"
                                :key="'info1-'+ index2"
                            >{{item2}}</li>
                        </div>
                    </div>
                </div>
                <div class="contactus-type">
                    <img class="contactus-type-up" src="../../assets/imgs/Campusrecruitment.png" />
                    <div
                        class="contactus-type-list"
                        @click="showListthree(item.id)"
                        v-for="item in newcampuslist"
                        :key="item.id"
                    >
                        <div class="list-title">
                            <span class="line"></span>
                            <span class="text">{{item.title}}</span>
                            <img
                                v-show="active3!=item.id"
                                class="xiala"
                                src="../../assets/imgs/xiala-r.png"
                            />
                            <div class="xiala1" v-show="active3==item.id" @click="showListthree(0)">
                                <img class="xiala" src="../../assets/imgs/xiala-ud.png" />
                            </div>
                        </div>
                        <div class="list-con" v-show="active3==item.id">
                            <p>你将要负责什么</p>
                            <li v-for="(item1,index1) of item.requirement" :key="index1+1">{{item1}}</li>
                            <p style="margin-top:20px">我们希望你是这样的</p>
                            <li
                                v-for="(item2,index2) of item.responsibility"
                                :key="'info1-'+ index2"
                            >{{item2}}</li>
                        </div>
                    </div>
                </div>
                <div class="contactus-type">
                    <img class="contactus-type-up" src="../../assets/imgs/Internshiphiring.png" />
                    <div
                        class="contactus-type-list"
                        @click="showListtwo(item.id)"
                        v-for="item in newinternlist"
                        :key="item.id"
                    >
                        <div class="list-title">
                            <span class="line"></span>
                            <span class="text">{{item.title}}</span>
                            <img
                                v-show="active2!=item.id"
                                class="xiala"
                                src="../../assets/imgs/xiala-r.png"
                            />
                            <div class="xiala1" v-show="active2==item.id" @click="showListtwo(0)">
                                <img class="xiala" src="../../assets/imgs/xiala-ud.png" />
                            </div>
                        </div>
                        <div class="list-con" v-show="active2==item.id">
                            <p>你将要负责什么</p>
                            <li v-for="(item1,index1) of item.requirement" :key="index1+1">{{item1}}</li>
                            <p style="margin-top:20px">我们希望你是这样的</p>
                            <li
                                v-for="(item2,index2) of item.responsibility"
                                :key="'info1-'+ index2"
                            >{{item2}}</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="aboutus-map">
            <div class="aboutus-qualification-title">联系我们</div>
            <div class="aboutus-map-con">
                <div class="aboutus-map-con-l">
                    <img src="../../assets/imgs/aboutus-map.png" />
                </div>
                <div class="aboutus-map-con-r">
                    <div class="map-r-title">园区测绘子分公司地址信息</div>
                    <div class="positionlist">
                        <div class="positionlist-name">
                            <span></span>
                            苏州工业园区格网信息科技有限公司
                        </div>
                        <p>地址：江苏省苏州市苏州工业园区苏虹中路101号</p>
                        <p>电话：0512-67611188</p>
                    </div>
                    <div class="positionlist">
                        <div class="positionlist-name">
                            <span></span>
                            苏州工业园区测绘地理信息有限公司宿迁分公司
                        </div>
                        <p>地址：江苏省宿迁市紫金山路12号</p>
                        <p>电话：0527-82868319</p>
                    </div>
                    <div class="positionlist">
                        <div class="positionlist-name">
                            <span></span>
                            滁州圆信苏滁测绘地理信息有限公司（苏滁现代产业园）
                        </div>
                        <p>地址：中国安徽省滁州市扬子路888号</p>
                        <p>电话：0550-3769309</p>
                    </div>
                    <div class="positionlist">
                        <div class="positionlist-name">
                            <span></span>
                            广西中马园区数字城市科技有限公司（中马钦州产业园）
                        </div>
                        <p>地址：广西钦州市中马钦州产业园区中马大街1号</p>
                        <p>电话：0777-5988579</p>
                    </div>
                    <div class="positionlist">
                        <div class="positionlist-name">
                            <span></span>
                            苏州工业园区测绘地理信息有限公司嘉善分公司
                        </div>
                        <p>地址：浙江省嘉兴市嘉善县魏塘街道智里路33号1号楼北侧</p>
                        <p>电话：0573-84841277</p>
                    </div>
                    <div class="positionlist">
                        <div class="positionlist-name">
                            <span></span>
                            苏州工业园区测绘地理信息有限公司银川分公司
                        </div>
                        <p>地址：宁夏回族自治区银川市兴庆区京河大道智慧研发大楼10楼1005室</p>
                        <p>电话：18061992296</p>
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
            active1: 0,
            active2: 0,
            active3: 0,
            banners: "",
            sociallist: [],
            campuslist: [],
            internlist: [],
            newrequirement: [], //接口数据改造过的数组
            newcampuslist: [],
            newinternlist: [],
            outurl: ""
        };
    },
    components: {
        Footer
    },
    created() {
        this.api();
    },
    methods: {
        api() {
            //获取banner
            this.$api.get("banners/contact-us", {}, res => {
                if (res.data.code == 1) {
                    this.banners = res.data.data[0];
                } else {
                }
            });

            //社会招聘
            this.$api.get("recruits/social", {}, res => {
                if (res.data.code == 1) {
                    this.sociallist = res.data.data;
                    for (let i = 0; i < this.sociallist.length; i++) {
                        // this.outurl = this.sociallist[i].outer_url;
                        let sociallists = this.sociallist[i].requirement.split(
                            "；"
                        );
                        let responsibilitys = this.sociallist[
                            i
                        ].responsibility.split("；");
                        this.newrequirement.push({
                            requirement: sociallists,
                            responsibility: responsibilitys,
                            title: this.sociallist[i].title,
                            id: this.sociallist[i].id
                        });
                    }
                } else {
                }
            });

            //校园招聘
            this.$api.get("recruits/campus", {}, res => {
                if (res.data.code == 1) {
                    this.campuslist = res.data.data;
                    for (let i = 0; i < this.campuslist.length; i++) {
                        let campuslists = this.campuslist[i].requirement.split(
                            "；"
                        );
                        let responsibilitys = this.campuslist[
                            i
                        ].responsibility.split("；");
                        this.newcampuslist.push({
                            requirement: campuslists,
                            responsibility: responsibilitys,
                            title: this.campuslist[i].title,
                            id: this.campuslist[i].id
                        });
                    }
                } else {
                }
            });

            //实习生招聘
            this.$api.get("recruits/intern", {}, res => {
                if (res.data.code == 1) {
                    this.internlist = res.data.data;
                    for (let i = 0; i < this.internlist.length; i++) {
                        let internlists = this.internlist[i].requirement.split(
                            "；"
                        );
                        let responsibilitys = this.internlist[
                            i
                        ].responsibility.split("；");
                        this.newinternlist.push({
                            requirement: internlists,
                            responsibility: responsibilitys,
                            title: this.internlist[i].title,
                            id: this.internlist[i].id
                        });
                    }
                } else {
                }
            });
        },
        showListone(x) {
            if (x == 0) {
                this.active1 = x;
                window.event
                    ? (window.event.cancelBubble = true)
                    : e.stopPropagation();
                return;
            }
            this.$api.get("recruits/" + x, {}, res => {
                if (res.data.code == 1) {
                    this.outurl = res.data.data.outer_url;
                    if (this.outurl == "") {
                        this.active1 = x;
                    } else {
                        // window.location.href= this.outurl
                        window.open(this.outurl);
                    }
                } else {
                }
            });

            window.event
                ? (window.event.cancelBubble = true)
                : e.stopPropagation();
        },
        showListtwo(x) {
            if (x == 0) {
                this.active2 = x;
                window.event
                    ? (window.event.cancelBubble = true)
                    : e.stopPropagation();
                return;
            }
            this.$api.get("recruits/" + x, {}, res => {
                if (res.data.code == 1) {
                    this.outurl = res.data.data.outer_url;
                    if (this.outurl == "") {
                        this.active2 = x;
                    } else {
                        window.location.href = this.outurl;
                    }
                } else {
                }
            });
            window.event
                ? (window.event.cancelBubble = true)
                : e.stopPropagation();
        },
        showListthree(x) {
            if (x == 0) {
                this.active3 = x;
                window.event
                    ? (window.event.cancelBubble = true)
                    : e.stopPropagation();
                return;
            }
            this.$api.get("recruits/" + x, {}, res => {
                if (res.data.code == 1) {
                    this.outurl = res.data.data.outer_url;
                    if (this.outurl == "") {
                        this.active3 = x;
                    } else {
                        window.location.href = this.outurl;
                    }
                } else {
                }
            });
            window.event
                ? (window.event.cancelBubble = true)
                : e.stopPropagation();
        }
    }
};
</script>


<style>
.contactus-banner {
    width: 100%;
    /* height: 470px; */
    font-size: 0;
    margin-top: 70px;
}
.contactus-banner img {
    width: 100%;
    /* height: 470px; */
}
.contactus-con {
    margin-top: 100px;
}
.contactus-con-up {
    text-align: center;
}
.contactus-con-title {
    font-size: 24px;
    font-weight: bold;
    color: #333333;
}
.contactus-con-link {
    width: 520px;
    height: 74px;
    border: solid 1px #e1e1e1;
    margin: 0 auto;
    margin-top: 45px;
    padding-top: 26px;
    font-size: 20px;
    color: #333333;
}
.contactus-con-ud {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    margin-top: 50px;
    margin-bottom: 100px;
    justify-content: space-between;
}
.contactus-type {
    width: 350px;
}
.contactus-type-up {
    display: block;
    width: 350px;
    height: 100px;
    margin-bottom: 10px;
}
.contactus-type-list {
    background-color: #f4f4f4;
    margin-top: 20px;
}
.contactus-type-list .list-title {
    width: 350px;
    height: 56px;
    line-height: 56px;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
}
.contactus-type-list .list-title .line {
    width: 4px;
    height: 20px;
    background-color: #1280e1;
    border-radius: 2px;
    display: inline-block;
    margin-left: 13px;
    vertical-align: sub;
    margin-right: 5px;
}
.contactus-type-list .list-title .text {
    font-size: 16px;
    color: #333333;
    width: 280px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}
.contactus-type-list .list-title .xiala {
    float: right;
    padding: 19px;
}
.contactus-type-list .list-con {
}

.aboutus-map {
    width: 100%;
    height: 900px !important;
    background-color: #f8f8f8;
    padding-top: 1px;
}
.aboutus-map-con {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding-top: 1px;
    display: flex;
}
.aboutus-qualification-title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin: 50px;
    color: #333333;
}
.aboutus-map-con-l {
    display: inline-block;
}
.aboutus-map-con-l img {
    width: 600px;
    height: 600px;
}
.aboutus-map-con-r {
    display: inline-block;
    margin-left: 50px;
}
.map-r-title {
    width: 550px;
    height: 30px;
    border-bottom: 1px solid #e1e1e1;
    font-size: 18px;
    color: #333333;
}
.positionlist {
    margin-top: 20px;
}
.positionlist-name {
    font-size: 16px;
    color: #333;
    margin-bottom: 10px;
}
.positionlist-name span {
    display: inline-block;
    width: 4px;
    height: 20px;
    background-color: #1280e1;
    border-radius: 2px;
    vertical-align: sub;
    margin-right: 10px;
}
.positionlist p {
    font-size: 14px;
    color: #666666;
    margin-left: 20px;
    line-height: 22px;
}
.list-con {
    padding-left: 15px;
    padding-bottom: 30px;
    line-height: 25px;
}
.list-con p {
    font-size: 14px;
    font-weight: bold;
    color: #333333;
}
.list-con li {
    font-size: 14px;
    color: #666666;
    list-style-image: url(../../assets/imgs/blue-dot.png);
    width: 330px;
}
.xiala1 {
    width: 100%;
    position: absolute;
    right: 0px;
    top: 0px;
}
</style>


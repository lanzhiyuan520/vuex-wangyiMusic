<template>
    <div class="seniority-comments-list-wrap">
        <div class="seniority-info-title">
            <div class="seniority-info-title-left">
                <h3>评论</h3>
                <div class="comments-num-wrap">
                    共{{commentCount}}评论
                </div>
            </div>
        </div>
        <div class="comment-box">
            <div class="comment-content-wrap">
                <img :src="this.$store.state.login.login?this.$store.state.login.login.profile.avatarUrl:'http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50'" class="comment-icon" />
                <textarea class="comment-content" placeholder="评论" @focus="_focus" @input="c_content" :value="state.comment_content"></textarea>
            </div>
            <div class="comment-btn-wrap">
                <div class="comment-btn" @click="c_submit">评论</div>
            </div>
        </div>
        <div class="comment-item-wrap">
            <div class="comment-title" v-if="hotcomments">精彩评论</div>
            <div class="comment-item" v-if="hotcomments" v-for="(item,index) in hotcomments" :key="item.id">
                <div class="user-img-wrap">
                    <img :src="item.user.avatarUrl">
                </div>
                <div class="comment">
                    <div class="comment-text-wrap">
                        <span class="user-name">{{item.user.nickname}}:</span>
                        <span class="user-content">{{item.content}}</span>
                    </div>
                    <div class="like">
                        <div class="comment-time">{{item.time}}</div>
                        <div class="like-wrap">
                            <span class="like-icon" @click="_like"></span>
                            <span class="like-num">（{{item.likedCount}}）</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="comment-title" style="margin-top: 30px">最新评论</div>
            <div class="comment-item" v-for="(item,index) in comments" :key="index">
                <div class="user-img-wrap">
                    <img :src="item.user.avatarUrl">
                </div>
                <div class="comment">
                    <div class="comment-text-wrap">
                        <span class="user-name">{{item.user.nickname}}:</span>
                        <span class="user-content">{{item.content}}</span>
                    </div>
                    <div class="like">
                        <div class="comment-time">{{item.time | commentsTime}}</div>
                        <div class="like-wrap">
                            <span class="like-icon"></span>
                            <span class="like-num">（{{item.likedCount}}）</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        props:['comments','commentCount','hotcomments'],
        computed:{
            ...mapState({
                state:state=>state.common
            })
        },
        methods:{
            _focus(){
                var userInfo = JSON.parse(localStorage.getItem('userInfo'||[]))
                if (!userInfo){
                    this.$store.commit('loginState',{flag:1})
                }
            },
            c_content(e){
                this.$store.commit('comment_content',{val:e.target.value})
            },
            c_submit(){
                var userInfo = JSON.parse(localStorage.getItem('userInfo'||[]))
                if (!userInfo){
                    this.$store.commit('loginState',{flag:1})
                    return
                }
                this.$store.commit('c_submit')
            },
            _like(){
                this.$store.commit('disabled')
            }
        }
    }
</script>

<style scoped lang="less">
    .seniority-comments-list-wrap{
        margin-top: 40px;
    }
    .comments-num-wrap{
        font-size: 12px;
        color: #666;
        margin-left: 30px;
        margin-top: 10px;
    }
    .comment-box{
        .comment-content-wrap{
            display: flex;
            margin-top: 20px;
            .comment-icon{
                width: 50px;
                height: 50px;
            }
            .comment-content{
                display: block;
                width: 100% !important;
                flex: 1;
                height: 50px;
                outline: none;
                border: 1px solid #cdcdcd;
                resize: none;
                overflow: auto;
                font-size: 12px;
                margin-left: 10px!important;
                padding: 5px 6px 6px;
            }
        }
    }
    .comment-title{
        height: 20px;
        border-bottom: 1px solid #cfcfcf;
        color: #333;
        font-size: 12px;
        padding-bottom: 2px;
    }
    .comment-item{
        padding: 15px 0;
        border-bottom: 1px dotted #ccc;
        display: flex;
        .comment-text-wrap{
            flex: 1;
            .user-name{
                font-size: 12px;
                color: #0c73c2;
            }
            .user-content{
                font-size: 12px;
            }
        }
    }
    .like{
        display: flex;
        margin-top: 15px;
        justify-content: space-between;
        .like-wrap{
            display: flex;
            margin-right: 10px;
            .like-num{
                font-size: 12px;
                color: #333;
            }
            .like-icon{
                display: inline-flex;
                width: 15px;
                height: 14px;
                background: url("../../assets/icon5.png") no-repeat;
                background-position: -150px 0;
            }
        }
        .comment-time{
            font-size: 12px;
            color: #999;
        }
    }
    .user-img-wrap{
        img{
            width: 50px;
            height: 50px;
        }
    }

    .comment{
        width: 100%;
        padding-left: 10px;
    }
    .comment-btn-wrap{
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;
        .comment-btn{
            width: 46px;
            height: 25px;
            background: url("../../assets/icon2.png");
            background-position: -84px -64px;
            color: #fff;
            font-size: 14px;
            text-align: center;
            line-height: 25px;
        }
    }
</style>
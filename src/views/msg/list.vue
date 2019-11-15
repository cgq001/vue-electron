<template>
    <div class="list">
        <!-- 左侧 -->
        <div class="list-list">
            <!-- 搜索区域 -->
            <div class="list-list-title">
                <div class="list-list-title-top"></div>
                 <div class="list-list-title-bottom">
                     <div class="list-list-title-bottom-input">
                         <el-input
                            prefix-icon="el-icon-search"
                            size="mini"
                            placeholder="请输入内容"
                            clearable
                            v-model="input4">
                        </el-input>
                     </div>
                     <div class="list-list-title-bottom-btns">
                         <i class="el-icon-plus"></i>
                     </div>
                 </div>
            </div>
            <!-- 好友列表 -->
            <div class="list-list-box">
                <vue-scroll :ops="ops"> 
                <!-- <happy-scroll class="happyScroll" color="rgba(51,51,51,1)" size="8" hide-horizontal> -->
                <div class="list-list-lis">
                    <img src="../../assets/logo.png">
                    <div class="list-list-lis-centent">
                        <div class="list-list-lis-centent-top">这里是姓名</div>
                        <div class="list-list-lis-centent-bottom">这里是最后一条留言,这里是最后一条留言</div>
                    </div>
                    <div class="list-list-lis-time">
                        2019-12-02
                    </div>
                </div>
                <div class="list-list-lis">
                    <img src="../../assets/logo.png">
                    <div class="list-list-lis-centent">
                        <div class="list-list-lis-centent-top">这里是姓名</div>
                        <div class="list-list-lis-centent-bottom">这里是最后一条留言</div>
                    </div>
                    <div class="list-list-lis-time">
                        2019-12-02
                    </div>
                </div>
                <div class="list-list-lis">
                    <img src="../../assets/logo.png">
                    <div class="list-list-lis-centent">
                        <div class="list-list-lis-centent-top">这里是姓名</div>
                        <div class="list-list-lis-centent-bottom">这里是最后一条留言</div>
                    </div>
                    <div class="list-list-lis-time">
                        2019-12-02
                    </div>
                </div>
                <div class="list-list-lis">
                    <img src="../../assets/logo.png">
                    <div class="list-list-lis-centent">
                        <div class="list-list-lis-centent-top">这里是姓名</div>
                        <div class="list-list-lis-centent-bottom">这里是最后一条留言</div>
                    </div>
                    <div class="list-list-lis-time">
                        2019-12-02
                    </div>
                </div>
                <div class="list-list-lis">
                    <img src="../../assets/logo.png">
                    <div class="list-list-lis-centent">
                        <div class="list-list-lis-centent-top">这里是姓名</div>
                        <div class="list-list-lis-centent-bottom">这里是最后一条留言</div>
                    </div>
                    <div class="list-list-lis-time">
                        2019-12-02
                    </div>
                </div>
                <div class="list-list-lis">
                    <img src="../../assets/logo.png">
                    <div class="list-list-lis-centent">
                        <div class="list-list-lis-centent-top">这里是姓名</div>
                        <div class="list-list-lis-centent-bottom">这里是最后一条留言</div>
                    </div>
                    <div class="list-list-lis-time">
                        2019-12-02
                    </div>
                </div>
                <div class="list-list-lis">
                    <img src="../../assets/logo.png">
                    <div class="list-list-lis-centent">
                        <div class="list-list-lis-centent-top">这里是姓名</div>
                        <div class="list-list-lis-centent-bottom">这里是最后一条留言</div>
                    </div>
                    <div class="list-list-lis-time">
                        2019-12-02
                    </div>
                </div>
                <div class="list-list-lis">
                    <img src="../../assets/logo.png">
                    <div class="list-list-lis-centent">
                        <div class="list-list-lis-centent-top">这里是姓名</div>
                        <div class="list-list-lis-centent-bottom">这里是最后一条留言</div>
                    </div>
                    <div class="list-list-lis-time">
                        2019-12-02
                    </div>
                </div>
                <div class="list-list-lis">
                    <img src="../../assets/logo.png">
                    <div class="list-list-lis-centent">
                        <div class="list-list-lis-centent-top">这里是姓名</div>
                        <div class="list-list-lis-centent-bottom">这里是最后一条留言</div>
                    </div>
                    <div class="list-list-lis-time">
                        2019-12-02
                    </div>
                </div>
                <div class="list-list-lis">
                    <img src="../../assets/logo.png">
                    <div class="list-list-lis-centent">
                        <div class="list-list-lis-centent-top">这里是姓名</div>
                        <div class="list-list-lis-centent-bottom">这里是最后一条留言</div>
                    </div>
                    <div class="list-list-lis-time">
                        2019-12-02
                    </div>
                </div>
                <div class="list-list-lis">
                    <img src="../../assets/logo.png">
                    <div class="list-list-lis-centent">
                        <div class="list-list-lis-centent-top">这里是姓名</div>
                        <div class="list-list-lis-centent-bottom">这里是最后一条留言</div>
                    </div>
                    <div class="list-list-lis-time">
                        2019-12-02
                    </div>
                </div>
                <div class="list-list-lis">
                    <img src="../../assets/logo.png">
                    <div class="list-list-lis-centent">
                        <div class="list-list-lis-centent-top">这里是姓名</div>
                        <div class="list-list-lis-centent-bottom">这里是最后一条留言</div>
                    </div>
                    <div class="list-list-lis-time">
                        2019-12-02
                    </div>
                </div>

                <div class="list-list-lis">
                    <img src="../../assets/logo.png">
                    <div class="list-list-lis-centent">
                        <div class="list-list-lis-centent-top">这里是姓名</div>
                        <div class="list-list-lis-centent-bottom">这里是最后一条留言</div>
                    </div>
                    <div class="list-list-lis-time">
                        2019-12-02
                    </div>
                </div><div class="list-list-lis">
                    <img src="../../assets/logo.png">
                    <div class="list-list-lis-centent">
                        <div class="list-list-lis-centent-top">这里是姓名</div>
                        <div class="list-list-lis-centent-bottom">这里是最后一条留言</div>
                    </div>
                    <div class="list-list-lis-time">
                        2019-12-02
                    </div>
                </div>
                <div class="list-list-lis">
                    <img src="../../assets/logo.png">
                    <div class="list-list-lis-centent">
                        <div class="list-list-lis-centent-top">这里是姓名</div>
                        <div class="list-list-lis-centent-bottom">这里是最后一条留言</div>
                    </div>
                    <div class="list-list-lis-time">
                        2019-12-02
                    </div>
                </div>
                <div class="list-list-lis">
                    <img src="../../assets/logo.png">
                    <div class="list-list-lis-centent">
                        <div class="list-list-lis-centent-top">这里是姓名</div>
                        <div class="list-list-lis-centent-bottom">这里是最后一条留言</div>
                    </div>
                    <div class="list-list-lis-time">
                        2019-12-02
                    </div>
                </div>
                <!-- </happy-scroll> -->
                </vue-scroll>
            </div>
        </div>
        <!-- 右侧 聊天界面-->
        <div class="list-right">
            <!-- 顶部 -->
            <div class="list-right-title">
                <div class="list-right-title-top">
                    <div class="list-right-title-top-left"></div>
                    <div class="list-right-title-top-right">
                        <i @click="mins" class="el-icon-minus" title="最小化"></i>
                        <i @click="tags" :class="showMax == false ? 'el-icon-full-screen' : 'el-icon-copy-document'"  :title="showMax == false ? '最大化' : '还原' "></i>
                        <i @click="close" class="el-icon-close"  title="关闭"></i>
                    </div>
                </div>
                <div class="list-right-title-bottom">
                    <span class="list-right-title-bottom-left">
                        这里是名字
                    </span>
                    <span class="list-right-title-bottom-centent">

                    </span>
                    <span @click="showDrawer" class="list-right-title-bottom-right el-icon-more">

                    </span>
                </div>
            </div>
            <!-- 聊天区域 -->
            <div class="list-right-centent">
                <!-- 聊天区域 -->
                <div class="list-right-centent-char">
                    <!-- 内容区域 -->
                    <div class="list-right-centent-char-list">
                        <vue-scroll :ops="ops">
                            <div class="list-right-centent-char-list-li">
                                <!-- 右侧 文字聊天内容 -->
                                    <div class="chars-left">
                                        <div class="chars-left-text">
                                            <div class="chars-left-text-icon"></div>
                                            哈喽,你好呀,欢迎光临,这里竭诚为你服务,哈喽
                                        </div>
                                        <div class="chars-left-imgs">
                                            <img src="../../assets/logo.png">
                                        </div>
                                    </div>
                                <!-- 时间 -->
                                    <div class="chars-times">
                                            <span>今天14:35</span>
                                    </div>
                                <!-- 左侧 文字聊天内容 -->
                                    <div class="chars-right">
                                        <div class="chars-right-imgs">
                                            <img src="../../assets/logo.png">
                                        </div>
                                        <div class="chars-right-text">
                                            <div class="chars-right-text-icon"></div>
                                            哈喽,你好呀,欢迎光临,这里竭诚为你服务,哈喽
                                        </div>
                                    </div>
                                <!--左侧 图片 -->
                                    <div class="chars-right">
                                        <div class="chars-right-imgs">
                                            <img src="../../assets/logo.png">
                                        </div>
                                        <div class="chars-right-text">
                                            <div class="chars-right-text-icon"></div>
                                            <!-- <img @click="showImgs" :src="imgSrc" /> -->
                                            <el-image 
                                                @click="showImgs(imgSrc)"                            
                                                :src="imgSrc" 
                                                :preview-src-list="srcList">
                                            </el-image>
                                        </div>
                                    </div>
                                 <!--右侧 图片 -->
                                    <div class="chars-left">
                                        <div class="chars-left-text">
                                            <div class="chars-left-text-icon"></div>
                                            <el-image 
                                                @click="showImgs(imgSrc)"                            
                                                :src="imgSrc" 
                                                :preview-src-list="srcList">
                                            </el-image>

                                        </div>
                                        <div class="chars-left-imgs">
                                            <img src="../../assets/logo.png">
                                        </div>
                                    </div>
                                    <!--左侧 视频 -->
                                    <div class="chars-right">
                                        <div class="chars-right-imgs">
                                            <img src="../../assets/logo.png">
                                        </div>
                                        <div class="chars-right-text">
                                            <div class="chars-right-text-icon"></div>
                                            <video src="../../assets/video/ceshi.mp4" controls="controls"></video>
                                        </div>
                                    </div>
                                     <!--右侧 视频 -->
                                    <div class="chars-left">
                                        <div class="chars-left-text">
                                            <div class="chars-left-text-icon"></div>
                                            <video src="../../assets/video/ceshi.mp4" controls="controls"></video>
                                        </div>
                                        <div class="chars-left-imgs">
                                            <img src="../../assets/logo.png">
                                        </div>
                                    </div>
                            </div>
                        </vue-scroll>
                    </div>
                    <!-- 功能区域 -->
                    <div class="list-right-centent-char-cant">
                        <!-- 表情\文件 -->
                        <div class="list-right-centent-char-cant-icons">
                            <i class="iconfont icon-biaoqing"></i>
                            <i class="iconfont icon-wenjian1"></i>
                            <i @click="screen" class="el-icon-scissors"></i>
                            <i class="iconfont icon-xiaoxi3"></i>
                        </div>
                        <div class="list-right-centent-char-cant-text">
                            <vue-scroll :ops="ops"> 
                                <!-- 输入 内容区域 -->
                                <div contenteditable="true" class="list-right-centent-char-cant-text-input">
                                    
                                </div>
                            </vue-scroll>
                        </div>
                        <div class="list-right-centent-char-cant-btns">
                            <div class="list-right-centent-char-cant-btns-s">发送(S)</div>
                        </div>
                        <!-- 表情包 -->
                        <!-- <div class="list-right-centent-char-cant-iconBox">
                            <VEmojiPicker :pack="pack" @select="selectEmoji" />
                        </div> -->
                    </div>
                </div>
                <!-- 抽屉 -->
                 <div class="list-right-centent-drawer" :style=" drawer ? 'transform: translateX(0%)' : 'transform: translateX(100%)'">
                    12225
                </div>
             </div>
        </div>
        <!-- 截屏弹出层 -->
        <div class="dialogs" v-show="dialogsShow">
                <!-- <img :src="dialogsSrcName"/> -->
                <vueCropper
                    ref="cropper"
                    :img="dialogsSrcName"
                    :outputSize="option.size"
                    :outputType="option.outputType"
                    :info="true"
                    :full="option.full"
                    :canMove="option.canMove"
                    :canMoveBox="option.canMoveBox"
                    :canScale="option.canScale"
                    :original="option.original"
                    :autoCrop="option.autoCrop"
                    :fixed="option.fixed"
                    :fixedNumber="option.fixedNumber"
                    :centerBox="option.centerBox"
                    :infoTrue="option.infoTrue"
                    :fixedBox="option.fixedBox"
                    :substr='123'
                ></vueCropper>
                <div class="dialogs-cans">
                    <i @click="dblclick" class="el-icon-check"></i>
                    <i @click="dialogsShow = false" class="el-icon-close"></i>
                </div>
        </div>
    </div>
</template>

<script>
// import VEmojiPicker from 'v-emoji-picker';
import packData from 'v-emoji-picker/data/emojis.json';
//截屏
export default {
    data(){
        return {
            input4: '',
            ops: {    //联系人列表滚动条
                vuescroll: {
                     mode: 'native',
                    sizeStrategy: 'percent',
                    detectResize: true
                },
                scrollPanel: {
                    scrollingX: false,
                    scrollingY: true
                },
                rail: {
                   
                },
                bar: {
                    keepShow:true,
                    background: '#A0A0A0',
                    opacity: 0.7
                }
            },
            drawer: false,  //抽屉
            imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573704250362&di=5e01cd91e9a5830cb128685da4b7ce7d&imgtype=0&src=http%3A%2F%2Fwww.86ps.com%2FimgWeb%2Fpsd%2Fgg_cy%2FYE-085.jpg',
            srcList:[],
            videoSrc: '../../assets/video/ceshi.mp4',
            pack: packData.data,
            showMax: false,
            dialogsShow:false,
            dialogsSrc:null,
            dialogsSrcName: null,
            option: {
                img: '', // 裁剪图片的地址
                info: true, // 裁剪框的大小信息
                outputSize: 1.0, // 裁剪生成图片的质量
                outputType: 'png', // 裁剪生成图片的格式
                canScale: true, // 图片是否允许滚轮缩放
                autoCrop: true, // 是否默认生成截图框
                autoCropWidth: 300, // 默认生成截图框宽度
                autoCropHeight: 200, // 默认生成截图框高度
                fixedBox: false, // 固定截图框大小 不允许改变
                fixed: false, // 是否开启截图框宽高固定比例
                // fixedNumber: [7, 5], // 截图框的宽高比例
                full: true, // 是否输出原图比例的截图
                canMoveBox: true, // 截图框能否拖动
                original: true, // 上传图片按照原始比例渲染
                centerBox: false, // 截图框是否被限制在图片里面
                infoTrue: true // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
            }
        }
    },
    methods:{
        showDrawer:function(){
            this.drawer = !this.drawer
        },
        showImgs:function(src){ //预览图片
           let arr=[]
                arr.push(src)
             this.srcList = arr 
                
        },
        selectEmoji:function(emoji){
            console.log(emoji)
        },
        mins:function(){  //最小化
            this.$electron.ipcRenderer.send('window-min') 
        },
        tags:function(){  //最大化或者还原
            this.$electron.ipcRenderer.send('window-tag') 
        },
        close:function(){   //关闭
            this.$electron.ipcRenderer.send('window-close') 
        },
        screen:function(){  //截屏
           // this.$electron.ipcRenderer.send('window-screen') 
           this.capturer()
        },
        capturer:function(){   //截屏函数
        let This = this
        let width = window.screen.width
        let height = window.screen.height

            this.$electron.desktopCapturer.getSources({
                        types: ['screen'],
                        thumbnailSize: {
                            width: width,
                            height: height,
                        }
                    }, (error, sources) => {
                         let imgSrc = sources[0].thumbnail.toDataURL()
                      //  console.log(imgSrc)
                      //  This.base(imgSrc,This)
                      This.dialogsSrcName = imgSrc
                      This.dialogsShow = true
                    })
        },
        dblclick:function(){
            const that=this
				let formData = new FormData();
				this.$refs.cropper.startCrop()
				this.$refs.cropper.getCropData((data) => {
                     let fileName ='wx'+parseInt(Math.random()*10000000) + ".png";
                   
                    let type = "image/png";
                    let file=that.dataURLtoFile(data,fileName,type);
                    var formData = new FormData();
                    formData.append("file", file);
                  

                    //添加请求头 通过form添加的图片和文件的格式必须是multipart/form-data
                    let config = {
                        headers: {
                        "Content-Type": "multipart/form-data"
                        }
                    };
                     console.log(formData)
                    that.dialogsShow = false
                    // this.axios.post("上传地址", formData, config).then(res => {
                    //     // console.log(res);
                    //     console.log(res)
                    // });
            })
        },
        dataURLtoFile(dataurl, filename,type) {//将base64转换为文件
                    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
                        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
                    while(n--){
                        u8arr[n] = bstr.charCodeAt(n);
                    }
                    return new File([u8arr], filename, {type:mime});
        }


    },
    components: {
        // VEmojiPicker
    },
    watch:{
        // showMax:{
        //     handler(news,olds){
        //         console.log(news)
        //     },
        //     immediate: true
        // }
    },
    mounted(){
        let This = this
        //监听最大化或者还原
            this.$electron.ipcRenderer.on('resizeWin',function(event,data){
                 
                 This.showMax = data
              
            })
        // 监听截屏
         this.$electron.ipcRenderer.on('man-screen',(event,data)=>{
                    console.log(data)
            }) 
  }
}
</script>

<style scoped>
.list{
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    position: relative;
}
/* 左侧 */
.list-list{
    height: 100%;
    width: 265px;
    background: #ECEAE8;
}
.list-list-title{
    width: 100%;
    height: 62px;
}
.list-list-title-top{
    width: 100%;
    height: 26px;
    -webkit-app-region: drag;
}
.list-list-title-bottom{
    width: 100%;
    height: 36px;
    display: flex;
    justify-content: space-around;
}
.list-list-title-bottom-input{
    width: 188px;
    height: 30px;
}
.list-list-title-bottom-btns{
    width: 30px;
    height: 30px;
    background: #DCD9D8;
    border-radius: 3px;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
    font-weight: 100;
}

.list-list-box{
    width: 100%;
    height: calc(100% - 62px);
    -webkit-user-select: none;
    /* overflow: hidden; */
    /* overflow-y: auto; */
}
.happyScroll{
    width: 265px;
    display: flex;
    justify-content: space-between;
}
.list-list-lis{
    width: 100%;
    height: 68px;
    padding: 14px 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
}
.list-list-lis img{
    width: 40px;
    height: 40px;
    border-radius: 3px;
}
.list-list-lis-centent{
    width: 120px;
    text-overflow: ellipsis;
    height: 40px;
}
.list-list-lis-centent-top{
    width: 100%;
    height: 20px;
    line-height: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 14px;
    color: #000000;
}
.list-list-lis-centent-bottom{
    width: 100%;
    height: 20px;
    line-height: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 12px;
    color: #999999;
}
.list-list-lis-time{
    width: 70px;
    height: 100%;
    font-size: 12px;
    line-height: 20px;
    color: #B9B9B9;
}

/* 右侧聊天界面 */
.list-right{
    width: calc(100% - 265px);
    background: #F5F5F5;
    height: 100%;
}
.list-right-title{
    width: 100%;
    height: 62px;  
}
.list-right-title-top{
    width: 100%;
    height: 26px;
    display: flex;
    justify-content: space-between;

}
.list-right-title-top-left{
    height: 26px;
    flex: 1;
    -webkit-app-region: drag;
}
.list-right-title-top-right{
    height: 26px;
    width: 165px;
}
.list-right-title-top-right i{
  display: inline-block;
  width: 45px;
  height: 26px;
  margin-right: 5px;
  text-align: center;
  line-height: 26px;
  cursor: pointer;
  color: #000000 !important;
  font-size: 12px;
}
.list-right-title-top-right i:hover{
  color: #1BDDDF;
  background: #D4D5D5;
}


.list-right-title-bottom{
    width: 100%;
    height: 36px;
    display: flex;
    justify-content: space-around;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    border-bottom: 1px solid #E7E7E7;
    box-sizing: border-box;
}
.list-right-title-bottom-left{
    /* width: 100px; */
    height: 36px;
    font-size: 20px;
    text-align: left;
    line-height: 36px;
    color: #000000;
    -webkit-user-select: none;
}
.list-right-title-bottom-centent{
    flex: 1;
    -webkit-app-region: drag;
}
.list-right-title-bottom-right{
    width: 50px;
    height: 36px;
    text-align: center;
    font-size: 26px;
    line-height: 36px;
    color: #5E5E5E;
    cursor: pointer;
}

/* 聊天区域 */
.list-right-centent{
    width: 100%;
    height: calc(100% - 62px);
    overflow: hidden;
    position: relative;
}
/* 聊天区域 */
.list-right-centent-char{
    width: 100%;
    height: 100%;
}
.list-right-centent-char-list{
    width: 100%;
    height: calc(100% - 185px);
}
.list-right-centent-char-list-li{
    width: 100%;
    min-height: 100%;
    padding: 10px 30px;
    box-sizing: border-box;
}

.list-right-centent-char-cant{
    width: 100%;
    height: 185px;
    border-top: 1px solid #ECECEC;
    box-sizing: border-box;
    background: #ffffff;
    position: relative;
}
.list-right-centent-char-cant-icons{
    width: 100%;
    height: 34px;
    padding: 0 30px;
}
.list-right-centent-char-cant-icons i{
    font-size: 24px;
    line-height: 34px;
    margin-right: 15px;
    color: #5E5E5E;
    cursor: pointer;
}
.list-right-centent-char-cant-text{
    width: 100%;
    height: 104px;
}
.list-right-centent-char-cant-text-input{
    display: inline-block;
    width: 100%;
    min-height: 104px;
    border: none !important;
    outline: none;
    padding: 0 30px;
    font-size: 16px;
    resize:none;
    padding: 10px 30px;
    box-sizing: border-box;
    line-height: 30px;
}
.list-right-centent-char-cant-iconBox{
    position: absolute;
    left: 10px;
    top: -429px;
    width: 327px;
    height: 429px;
    /* background: #1BDDDF; */
    border-radius: 5px;
    box-shadow: 0px 0px 5px #EFEFEF;
    background: #ffffff;
}
/* 左侧文字聊天 */
.chars-left{
    width: 100%;
    min-height: 45px;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
}
.chars-left-text{
    max-width: 35%;
    min-height: 45px;
    padding: 10px;
    background: #39B54A;
    box-sizing: border-box;
    margin-right: 20px;
    border-radius: 2px;
    /* box-shadow: 2px -2px 15px 5px #C1E0C5; */
    box-shadow:2px 2px 4px #68B673;
    line-height: 25px;
    color: #ffffff;
    position: relative;
    font-size: 14px;
}
.chars-left-text img{
    width: 100%;
    cursor: pointer;
}
.chars-left-text video{
    width: 100%;
    cursor: pointer;
}
.chars-left-text-icon{
    position: absolute;
    width: 15px;
    height: 15px;
    background: #39B54A;
    right: -7px;
    top: 12px;
    transform:rotate(45deg);
}
.chars-left-imgs{
    width: 35px;
    height: 35px;
    border-radius: 3px;
    overflow: hidden;
    padding-top: 5px;
    box-sizing: border-box;
}
.chars-left-imgs img{
    width: 35px;
    height: 35px;
}
/* 右侧文字聊天 */
.chars-right{
    width: 100%;
    min-height: 45px;
    display: flex;
    justify-content: flex-start;
    font-size: 14px;
    margin-bottom: 10px;
}
.chars-right-text{
    max-width: 35%;
    min-height: 45px;
    padding: 10px;
    background: #FFFFFF;
    box-sizing: border-box;
    margin-left: 20px;
    border-radius: 2px;
    /* box-shadow: 2px -2px 15px 5px #C1E0C5; */
    /* box-shadow:2px 2px 4px #FFFFFF; */
    line-height: 25px;
    color: #333333;
    position: relative;
}
.chars-right-text img{
    width: 100%;
    cursor: pointer;
}
.chars-right-text video{
    width: 100%;
    cursor: pointer;
}
.chars-right-text-icon{
    position: absolute;
    width: 15px;
    height: 15px;
    background: #FFFFFF;
    left: -7px;
    top: 12px;
    transform:rotate(45deg);
}
.chars-right-imgs{
    width: 35px;
    height: 35px;
    border-radius: 3px;
    overflow: hidden;
    padding-top: 5px;
    box-sizing: border-box;
}
.chars-right-imgs img{
    width: 35px;
    height: 35px;
}
/* 聊天时间 */
.chars-times{
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    text-align: center;
    line-height: 40px;
    user-select: none;
}
.chars-times span{
    padding: 5px 8px;
    background: rgba(218,218,218,0.9);
    color: #ffffff;
    font-size: 12px;
    border-radius: 3px;
}
/* 按钮 */
.list-right-centent-char-cant-btns{
    width: 100%;
    height: 36px;
    /* background: #1BDDDF; */
    padding: 0 30px;
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
}
.list-right-centent-char-cant-btns-s{
    width: 70px;
    height: 25px;
    border-radius: 2px;
    border: 1px solid #E5E5E5;
    background: #F5F5F5;
    font-size: 14px;
    text-align: center;
    line-height: 25px;
    cursor: pointer;
}
/* 编辑功能区 */
.list-right-centent-drawer{
    width: 30%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: #ffffff;
    transform: translateX(0%);
    transition: .5s;
}

.dialogs{
    position: fixed;
    left: 0;
    top: 0;
    /* opacity: 0.7; */
    background: #333333;
    width: 100vw;
    height: 100vh;

}
.dialogs img{
    width: 100%;
    height: 100%;
}
.dialogs-cans{
    width: 100%;
    height: 35px;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    padding: 0 50px;
    box-sizing: border-box;
}
.dialogs-cans i{
    font-weight: 600;
    font-size: 28px;
    margin: 0 20px;
}
.dialogs-cans i:nth-child(1){
   color: #1FFEF8;
}
.dialogs-cans i:nth-child(2){
    color: #FE311F;
}
</style>
webpackJsonp([18],{ErLe:function(e,t,a){var s=a("b+tW");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("0bb85a22",s,!0,{})},FP3a:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("YgNb"),l={name:"index",data:function(){return{userName:"",goldNumber:0,tableData:[],fileList:[],hotAnchor:0,hotAnchor1:0,sortType:0,hotNum:0,userCover:"",vipLevelList:[],type:"0",time:"",phone:"",desc:"",deviceId:"",userType:0,nickName:"",channel:"",channelId:"",currents:{currentPage:1,currentTotal:0},ps:{pageNo:1,pageSize:15},userId:0,dialogFormVisible:!1,form:{vipid:0,ybAccount:""},headers:{token:s.a.get("token")},rules:{vipid:[{validator:function(e,t,a){if(!t)return a(new Error("VIP卡名称不能为空"));setTimeout(function(){t<0?a(new Error("请选择VIP卡名称")):a()},1e3)},trigger:"blur"}]}}},mounted:function(){this.getInfo()},methods:{clear:function(){this.userId=0,this.fileList=[],this.userCover="",this.dialogFormVisible=!1},update:function(e){this.userId=e.id,this.userCover=e.avatarUrl,this.hotAnchor=e.hotAnchor,this.userType=e.type,this.nickName=e.userName,this.hotNum=e.hotNum,this.desc=e.desc,this.isAdd=!1,this.dialogFormVisible=!0},handleChange:function(e,t){this.fileList=t.slice(-1)},handleRemove:function(e,t){console.log(e,t)},detele:function(e){var t=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a={id:e};t.$axios("post","/backUser/delUserById",a).then(function(e){200===e.code?(t.$message({type:"success",message:"删除成功!"}),t.getInfo()):t.$message({type:"warning",message:e.code})})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},getInfo:function(){var e=this,t="",a="";""!==this.time&&(t=this.fromDate(this.time[0]),a=this.fromDate(this.time[1]));var s={channel:this.channel,pageNum:this.ps.pageNo,pageSize:this.ps.pageSize,hotAnchor:this.hotAnchor1,sortType:this.sortType,userName:this.userName,type:this.type,phone:this.phone,registerStartTime:t,registerEndTime:a};this.$axios("post","/backUser/backGetUserList",s).then(function(t){200===t.code&&(e.tableData=t.data.dataList,e.currents.currentTotal=t.data.countSize)})},handleSizeChange:function(e){this.ps.pageSize=e,this.getInfo()},handleCurrentChange:function(e){this.ps.pageNo=e,this.getInfo()},updateSumbit:function(){var e=this,t="";if(0!==this.fileList.length){for(var a=[],s=0;s<this.fileList.length;s++)a.push(this.fileList[s].response.data);t=a.join(",")}else t=this.userCover;var l={avatarUrl:t,id:this.userId,hotAnchor:this.hotAnchor,nickName:this.nickName,hotNum:this.hotNum,desc:this.desc};this.$axios("post","/backUser/editUserInfo",l).then(function(t){200===t.code&&(e.getInfo(),e.clear())})},fromDate:function(e){var t=e.getFullYear(),a=e.getMonth()+1;a=a<10?"0"+a:a;var s=e.getDate();s=s<10?"0"+s:s;var l=e.getHours();l=l<10?"0"+l:l;var i=e.getMinutes();i=i<10?"0"+i:i;var o=e.getSeconds();return t+"-"+a+"-"+s+" "+l+":"+i+":"+(o=o<10?"0"+o:o)}}},i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"info-table"},[s("div",{staticClass:"fx align-items justify-between mt-15 mb-15 ml-10 mr-10"},[s("div",{staticClass:"fs-18 fw-600"},[e._v("用户管理")]),e._v(" "),s("div",{staticClass:"fx align-items",staticStyle:{"margin-right":"60px"}},[s("div",{staticClass:"ml-10"},[e._v("时间类型：")]),e._v(" "),s("div",{staticClass:"ml-10"},[s("el-select",{staticStyle:{width:"80px"},attrs:{placeholder:"请选择",size:"small"},model:{value:e.sortType,callback:function(t){e.sortType=t},expression:"sortType"}},[s("el-option",{attrs:{value:"0",label:"最后登录时间"}}),e._v(" "),s("el-option",{attrs:{value:"1",label:"注册时间"}})],1)],1),e._v(" "),s("div",{staticClass:"ml-10"},[s("el-date-picker",{attrs:{type:"datetimerange",size:"small","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1)])]),e._v(" "),s("div",{staticClass:"fx align-items fx-end mt-15 mb-15 ml-10 mr-10"},[s("div",{staticClass:"fx align-items"},[s("div",{},[s("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入用户昵称",size:"small"},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),e._v(" "),s("div",{staticClass:"ml-10"},[s("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入手机号查询",size:"small"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),e._v(" "),s("div",{staticClass:"ml-10"},[e._v("是否热门：")]),e._v(" "),s("div",{staticClass:"ml-10"},[s("el-select",{staticStyle:{width:"80px"},attrs:{placeholder:"请选择",size:"small"},model:{value:e.hotAnchor1,callback:function(t){e.hotAnchor1=t},expression:"hotAnchor1"}},[s("el-option",{attrs:{value:"0",label:"否"}}),e._v(" "),s("el-option",{attrs:{value:"1",label:"是"}})],1)],1),e._v(" "),s("div",{staticClass:"ml-10"},[s("el-select",{staticClass:"w-150",attrs:{placeholder:"请选择",size:"small"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[s("el-option",{attrs:{value:"",label:"全部"}}),e._v(" "),s("el-option",{attrs:{value:"0",label:"注册用户"}}),e._v(" "),s("el-option",{attrs:{value:"1",label:"主播"}}),e._v(" "),s("el-option",{attrs:{value:"2",label:"游客"}})],1)],1),e._v(" "),s("div",{staticClass:"ml-10"},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.getInfo}},[e._v("查询")])],1)])]),e._v(" "),s("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"header-cell-class-name":"bg-f5"}},[s("el-table-column",{attrs:{fixed:"",type:"index",label:"序号",align:"center",width:"150"}}),e._v(" "),s("el-table-column",{attrs:{label:"头像图片"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.avatarUrl?s("div",[s("img",{attrs:{src:t.row.avatarUrl,width:"100px",height:"55px"}})]):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"userName",label:"昵称"}}),e._v(" "),s("el-table-column",{attrs:{prop:"gold",label:"金币"}}),e._v(" "),s("el-table-column",{attrs:{label:"性别",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[2===t.row.sex?s("span",{staticClass:"c-green"},[e._v("女")]):e._e(),e._v(" "),1===t.row.sex?s("span",{staticClass:"c-green"},[e._v("男")]):e._e(),e._v(" "),0===t.row.sex?s("span",{staticClass:"c-red"},[e._v("保密")]):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"phone",label:"手机号"}}),e._v(" "),s("el-table-column",{attrs:{prop:"desc",label:"描述"}}),e._v(" "),s("el-table-column",{attrs:{label:"类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.type?s("span",[e._v("注册用户")]):e._e(),e._v(" "),1===t.row.type?s("span",[e._v("主播")]):e._e(),e._v(" "),2===t.row.type?s("span",[e._v("游客")]):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"是否热门",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.hotAnchor?s("span",[e._v("否")]):e._e(),e._v(" "),1===t.row.hotAnchor?s("span",[e._v("是")]):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"热度",prop:"hotNum",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{label:"注册时间",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(t.row.createTime))])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"最后登录时间",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(t.row.lastLoginTime))])]}}])}),e._v(" "),s("el-table-column",{attrs:{fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("div",{staticClass:"fx cursor"},[s("div",{staticClass:"update w-32 bg-f2",on:{click:function(a){return e.update(t.row)}}},[s("img",{attrs:{src:a("OqpS")}})]),e._v(" "),s("div",{staticClass:"ml-10",on:{click:function(a){return e.detele(t.row.id)}}},[s("img",{attrs:{src:a("lCGE")}})])])]}}])})],1),e._v(" "),s("el-pagination",{staticClass:"pagination",attrs:{background:"","hide-on-single-page":!0,"current-page":e.currents.currentPage,"page-size":15,layout:"total, prev, pager, next, jumper",total:e.currents.currentTotal},on:{"current-change":e.handleCurrentChange}}),e._v(" "),s("el-dialog",{attrs:{title:"用户管理",visible:e.dialogFormVisible,width:"490px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[s("el-form",[s("el-form-item",{attrs:{label:"用户头像","label-width":"160px",prop:"userCover"}},[s("img",{attrs:{src:e.userCover,width:"100px"}}),e._v(" "),s("div",[s("el-upload",{staticClass:"upload-demo",attrs:{action:"http://hszhibo.live/sequoiaBack/file/fileUpload","on-remove":e.handleRemove,"on-change":e.handleChange,"file-list":e.fileList,headers:e.headers,"list-type":"picture"}},[s("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1)]),e._v(" "),1===e.userType?s("el-form-item",{attrs:{label:"主播昵称","label-width":"160px",prop:"nickName"}},[s("el-input",{staticStyle:{width:"200px","margin-right":"10px"},model:{value:e.nickName,callback:function(t){e.nickName=t},expression:"nickName"}})],1):e._e(),e._v(" "),1===e.userType?s("el-form-item",{attrs:{label:"是否热门","label-width":"160px",prop:"hotAnchor"}},[s("el-radio",{attrs:{label:0},model:{value:e.hotAnchor,callback:function(t){e.hotAnchor=t},expression:"hotAnchor"}},[e._v("否")]),e._v(" "),s("el-radio",{attrs:{label:1},model:{value:e.hotAnchor,callback:function(t){e.hotAnchor=t},expression:"hotAnchor"}},[e._v("是")])],1):e._e(),e._v(" "),1===e.userType?s("el-form-item",{attrs:{label:"热度","label-width":"160px",prop:"hotNum"}},[s("el-input",{staticStyle:{width:"200px","margin-right":"10px"},model:{value:e.hotNum,callback:function(t){e.hotNum=e._n(t)},expression:"hotNum"}})],1):e._e(),e._v(" "),1===e.userType?s("el-form-item",{attrs:{label:"主播描述","label-width":"160px",prop:"desc"}},[s("el-input",{staticStyle:{width:"200px","margin-right":"10px"},model:{value:e.desc,callback:function(t){e.desc=t},expression:"desc"}})],1):e._e()],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:e.clear}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.updateSumbit}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")(l,i,!1,function(e){a("ErLe")},"data-v-21ac23d8",null);t.default=o.exports},OqpS:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAAEhcmxxAAAABGdBTUEAALGPC/xhBQAAAQVJREFUKBVjYIi5/Z8BCJhABARARYAcGCvmTgCEE3c7BaSGEaww9vZLBkZWDzAbRjCC9SxRhagAiYJUMTDsZoGpAAq4MzAySTMwMHswLFI4j7AFrgLCgBgFE0Q2EiYGpuMeGDLE3jkNYiP8ABL890eegeG/HEgCYfn/39OBrldkWKwqDvcdSAUKAHobYRSKDIgDCxQMCahAzD19oINqGEL/M4NEcJsEdjkodP4pAtXdYeC484oh9gU3poaE+wrgYAT56D9jOgPj/5kMjCw3gZ4QZmD66oDwHdQFDIx/uBj+MzwD+rQYqDAPGMziMCmGv/+2YGqYr3oNqMAQrgiNgRoVaJLYuADPkFNl/SoURwAAAABJRU5ErkJggg=="},"b+tW":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.w-150[data-v-21ac23d8]{\n  width: 110px;\n}\n",""])},lCGE:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAYCAYAAAHooR+fAAAABGdBTUEAALGPC/xhBQAAAixJREFUSA21VrlKBEEQne4dUQQDwUATdyM1FQw9PsAjNRT8BxOPRMTE1FTBUMw8PsAj9ANcIw9wQwNFREfHeo011PZ2z0zrbsNu1/HqdVVf0yqi9nl3k6JH66qNKc2G561lY4SujUR/3eMzLEYqub95StNoiC0aCsI41IQhpDIwaEAtIRwqe0PDhrezgyhp3EXoZQPTMY03L422rNKH+lTynV7YDuhKRSeKi3UBYIulg8uCrX9937iymZFGdsLWBEAVcgoBKMwhtwowFDWl1HfsmwYEuwqzSdM01U2zIQGoSxYNvXd2SUIyuWlCMqsQsNwyI+HKxMJJy5A5goIvua9/obYcnNeltVr7JSnejDYL7b9GRalFNTx6Sbv571mAONZqms7N38rgzGgeDr1LDJBcFbncTIAed4BzdWSwDPAROTMB2N5c0H0td1k5I2y4vJZLkhcofc5yAEge6+ZOyCuDiZwTy86y/b/Lwc2pqa2XHdHGmQupOrZgzs7XQ32VNs0W7V6j2+BO6UiCKtmoDI9ul/qadCoR5i31QWJwp3vvdi0a2HeY4qFaUajTH5QIBn+/OjVEPZNzTsLXo93MH5JU0LEBse7tMz/IL3ubZlApS78zU48xKBEPR1vMQUtjjyivfZY/onMbVkoPTiSujtCH/7blVSlHAya0lXrfhpKG4vGw0OZlQTdcaHC78LhdTQ5MiKc4PTBWSJ/AG4HtnegxA8R7TQns4HmFMX4AXlLrAv1GZXoAAAAASUVORK5CYII="}});
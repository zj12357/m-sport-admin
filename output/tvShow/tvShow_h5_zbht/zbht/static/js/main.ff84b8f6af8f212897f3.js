webpackJsonp([31],{0:function(n,t,e){e("j1ja"),n.exports=e("NHnr")},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={};e.d(o,"userData",function(){return l});var a=e("7+uW"),i=e("/ocq");a.default.use(i.a);var r=i.a.prototype.push;i.a.prototype.push=function(n,t,e){return t||e?r.call(this,n,t,e):r.call(this,n).catch(function(n){return n})};var u=new i.a({routes:[{path:"/demo",name:"demo",component:function(){return e.e(24).then(e.bind(null,"/1AV"))}},{path:"/login",name:"login",component:function(){return e.e(22).then(e.bind(null,"jT7l"))}},{path:"/",name:"index",component:function(){return e.e(0).then(e.bind(null,"2NXm"))},children:[{path:"/home",name:"home",component:function(){return e.e(18).then(e.bind(null,"FP3a"))}},{path:"/userInfo",name:"userInfo",component:function(){return e.e(4).then(e.bind(null,"tMdk"))}},{path:"/moveDeatil",name:"moveDeatil",component:function(){return e.e(29).then(e.bind(null,"DOy1"))}},{path:"/matchInfo",name:"matchInfo",component:function(){return e.e(15).then(e.bind(null,"7d2R"))}},{path:"/startType",name:"startType",component:function(){return e.e(27).then(e.bind(null,"AxJC"))}},{path:"/payOrder",name:"payOrder",component:function(){return e.e(28).then(e.bind(null,"Ch1g"))}},{path:"/vip",name:"vip",component:function(){return e.e(3).then(e.bind(null,"rxtO"))}},{path:"/down",name:"down",component:function(){return e.e(16).then(e.bind(null,"XJpv"))}},{path:"/config",name:"config",component:function(){return e.e(9).then(e.bind(null,"9OZM"))}},{path:"/statistics",name:"statistics",component:function(){return e.e(13).then(e.bind(null,"cvct"))}},{path:"/operation",name:"operation",component:function(){return e.e(6).then(e.bind(null,"Awpy"))}},{path:"/winning",name:"winning",component:function(){return e.e(2).then(e.bind(null,"lLkJ"))}},{path:"/icon",name:"icon",component:function(){return e.e(20).then(e.bind(null,"t4RU"))}},{path:"/notice",name:"notice",component:function(){return e.e(21).then(e.bind(null,"BEmm"))}},{path:"/role",name:"role",component:function(){return e.e(17).then(e.bind(null,"bWCI"))}},{path:"/account",name:"account",component:function(){return e.e(12).then(e.bind(null,"FGjL"))}},{path:"/column",name:"column",component:function(){return e.e(5).then(e.bind(null,"/rKP"))}},{path:"/advertising",name:"advertising",component:function(){return e.e(14).then(e.bind(null,"PldI"))}},{path:"/exchange",name:"exchange",component:function(){return e.e(7).then(e.bind(null,"YR89"))}},{path:"/navigate",name:"navigate",component:function(){return e.e(11).then(e.bind(null,"rhRx"))}},{path:"/promote",name:"promote",component:function(){return e.e(8).then(e.bind(null,"NZ2L"))}},{path:"/withdrawal",name:"withdrawal",component:function(){return e.e(23).then(e.bind(null,"C3Ae"))}},{path:"/robot",name:"robot",component:function(){return e.e(10).then(e.bind(null,"/0l5"))}},{path:"/financial",name:"financial",component:function(){return e.e(1).then(e.bind(null,"ADW+"))}},{path:"/liveInfo",name:"liveInfo",component:function(){return e.e(25).then(e.bind(null,"aPai"))}},{path:"/byGold",name:"byGold",component:function(){return e.e(26).then(e.bind(null,"frXD"))}},{path:"/label",name:"label",component:function(){return e.e(19).then(e.bind(null,"Qcz4"))}}]}]}),c=e("NYxO"),l={state:{tagList:[]},mutations:{setTagList:function(n,t){n.tagList=t}},getters:{getTagList:function(n){return n.tagList}}};a.default.use(c.a);var p=new c.a.Store({modules:o}),m={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var h=e("VU/8")({name:"App",data:function(){return{}}},m,!1,function(n){e("ZaDr")},null,null).exports,f=(e("j1ja"),e("cPo0"),e("//Fk")),d=e.n(f),s=e("mtWM"),v=e.n(s),g=e("1nuA"),b=e.n(g),y=v.a.create({timeout:6e5});y.interceptors.request.use(function(n){return"get"!==n.method&&"post"!==n.method&&"put"!==n.method&&"delete"!==n.method&&"patch"!==n.method||"application/json"!==n.headers["Content-Type"]&&(n.data=b.a.stringify(n.data)),n},function(n){return d.a.reject(n)}),y.interceptors.response.use(function(n){return n},function(n){return"ECONNABORTED"===n.code&&-1!==n.message.indexOf("timeout")&&(alert("请求超时！请重新登陆"),u.push({name:"login"})),d.a.reject(n)});var w=y,x=e("YgNb"),k={install:function(n){var t=this;n.prototype.$axios=function(n,e,o,a){return t.axiosRequest(n,e,o,a)}},axiosRequest:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"post",t=arguments[1],e=arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.ax(n,t,e,o)},ax:function(n,t,e,o){var a=t;"get"===n&&(a+=e||"");var i={headers:x.a.get("token")?{token:x.a.get("token"),"Content-Type":"application/json"}:{"Content-Type":"application/json"}},r="/sequoiaBack"+a;return new d.a(function(t,o){w[n](r,e,i).then(function(n){var e=n.data;t(e),"10002"===e.code&&u.push({name:"login"})}).catch(function(n){o(n)})})}},T=e("zL8q"),D=e.n(T);e("tvR6");a.default.use(k),a.default.use(D.a),a.default.config.productionTip=!1,a.default.prototype.$Platform=e("SJ63"),new a.default({router:u,store:p,el:"#app",render:function(n){return n(h)}})},SJ63:function(n,t){n.exports={name:"tvShow",title:"TVSHOW",desc:"tvShow",nickname:"tvShow"}},YgNb:function(n,t,e){"use strict";e.d(t,"a",function(){return u});var o=e("Zrlr"),a=e.n(o),i=e("wxAW"),r=e.n(i),u=function(){function n(){a()(this,n)}return r()(n,null,[{key:"get",value:function(n){var t=void 0,e=void 0;return"string"==typeof n&&""!==n&&(e=String(document.cookie).match(new RegExp("(?:^| )"+n+"(?:(?:=([^;]*))|;|$)")))&&(t=e[1]?decodeURIComponent(e[1]):""),t}},{key:"set",value:function(n,t,e,o,a,i){var r=String(encodeURIComponent(t)),u=e;"number"==typeof u&&(u=new Date).setTime(u.getTime()+864e5*e),u instanceof Date&&(r+="; expires="+u.toUTCString()),"string"==typeof o&&""!==o&&(r+="; domain="+o),"string"==typeof a&&""!==a&&(r+="; path="+a),i&&(r+="; secure"),document.cookie=n+"="+r}},{key:"remove",value:function(n,t,e,o){this.set(n,"",-1,t,e,o)}},{key:"DATEDAY",get:function(){return 864e5}}]),n}()},ZaDr:function(n,t){},cPo0:function(n,t){},tvR6:function(n,t){}},[0]);
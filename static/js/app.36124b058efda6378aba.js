webpackJsonp([4],{"+BTi":function(t,e){},"/I4U":function(t,e){},"0iPh":function(t,e){t.exports=window.$},"1etf":function(t,e){},"2Yby":function(t,e){},"9rs/":function(t,e){},EjmG:function(t,e){},GDpP:function(t,e,n){var o={"./baseButton.vue":"xPqM"};function r(t){return n(i(t))}function i(t){var e=o[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id="GDpP"},K5CO:function(t,e){},K6of:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("lRwf"),r=n.n(o),i=n("Dd8w"),a=n.n(i),s=n("NYxO"),c=new r.a,u={data:function(){return{project:"dave admin"}},computed:a()({},Object(s.b)({userInfo:"getUserInfo"})),methods:{handleCommand:function(t){"logout"===t&&console.log(t)},logout:function(){this.$confirm("确认退出吗？","提示",{}).then(function(){localStorage.removeItem("token"),window.location.reload()}).catch(function(){})},collapseChage:function(){this.collapse=!this.collapse,c.$emit("collapse",this.collapse)}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"collapse-btn",on:{click:t.collapseChage}},[n("i",{staticClass:"el-icon-menu"})]),t._v(" "),n("div",{staticClass:"logo"},[t._v(t._s(t.project))]),t._v(" "),n("div",{staticClass:"header-right"},[n("div",{staticClass:"header-user-con"},[t._m(0),t._v(" "),n("el-dropdown",{staticClass:"user-name",on:{command:t.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[t._v("\n                      "+t._s(t.userInfo.name)+" "),n("i",{staticClass:"el-icon-caret-bottom"})]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{nativeOn:{click:function(e){return t.logout(e)}}},[t._v("退出登录")])],1)],1)],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user-avator"},[e("img",{attrs:{src:"https://avatars3.githubusercontent.com/u/28003460?s=40&v=4"}})])}]};var p=n("VU/8")(u,l,!1,function(t){n("2Yby")},"data-v-0b966842",null).exports,f={data:function(){return{collapse:!1}},computed:a()({},Object(s.b)({menus:"getMenus"})),mounted:function(){var t=this;c.$on("collapse",function(e){t.collapse=e})}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("el-menu",{staticClass:"sidebar-el-menu",attrs:{"unique-opened":"",router:"","default-active":t.$route.path,collapse:t.collapse}},[t._l(t.menus,function(e,o){return[e.children&&!e.hidden?[n("el-submenu",{key:o,attrs:{index:o+""}},[n("template",{slot:"title"},[n("i",{class:e.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.name))])]),t._v(" "),t._l(e.children,function(e,o){return n("el-menu-item",{key:o,attrs:{index:e.path}},[t._v(t._s(e.name)+"\n          ")])})],2)]:t._e(),t._v(" "),e.children?t._e():[n("el-menu-item",{key:o,attrs:{index:o+""}},[n("i",{class:e.icon}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.name))])])]]})],2)],1)},staticRenderFns:[]};var h={components:{dHeader:p,dSidebar:n("VU/8")(f,d,!1,function(t){n("1etf")},"data-v-35eb51dc",null).exports},data:function(){return{collapse:!1}},mounted:function(){var t=this;c.$on("collapse",function(e){t.collapse=e})}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("d-header"),this._v(" "),e("d-sidebar"),this._v(" "),e("div",{staticClass:"content-wrap",class:{"content-collapse":this.collapse}},[e("div",{staticClass:"content"},[e("transition",{attrs:{name:"move",mode:"out-in"}},[e("keep-alive",[e("router-view")],1)],1)],1)])],1)},staticRenderFns:[]};var v=n("VU/8")(h,m,!1,function(t){n("Q2cp")},null,null).exports,g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-col",{attrs:{span:6}},[n("BaseButton",{attrs:{type:"success",txt:t.text,icon:t.icon,round:"true"},on:{click:function(e){t.check("welcome to VPC")}}})],1)],1)},staticRenderFns:[]};var _=n("VU/8")({data:function(){return{icon:"el-icon-check",text:"首页"}},methods:{check:function(t){this.$notify.info(t)}}},g,!1,function(t){n("zW8x")},null,null).exports,y=n("L6bb"),w=n.n(y),b=n("0iPh"),x={name:"watch",data:function(){return{English:"",config:{appKey:"3124a8d08c4cb840",key:"8KhfwfVSUqZ8HOVoBsb5Lw5Y9flzzYdm",salt:(new Date).getTime(),from:"auto",to:"en",q:""}}},methods:{getWeather:function(){var t=this;if(!this.config.q)return this.English="",!1;var e=a()({},this.config),n=this.config.appKey+this.config.q+this.config.salt+this.config.key;e.sign=w()(n),b.ajax({url:"http://openapi.youdao.com/api",type:"post",dataType:"jsonp",data:e,success:function(e){t.English=e.translation[0]}})}},watch:{"config.q":{handler:"getWeather",immediate:!0}}},E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",{staticClass:"title"},[t._v("Vue 高级用法 (案列：翻译)")]),t._v(" "),n("el-row",[n("el-col",{attrs:{span:6}},[n("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.config.q,callback:function(e){t.$set(t.config,"q",e)},expression:"config.q"}})],1),t._v(" "),n("el-col",{staticStyle:{"margin-left":"100px"},attrs:{span:6}})],1),t._v(" "),n("el-row",{staticStyle:{"margin-top":"10px"}},[t.English?n("el-col",{attrs:{span:12}},[n("div",[t._v(t._s(t.English))])]):t._e()],1)],1)},staticRenderFns:[]};var k=n("VU/8")(x,E,!1,function(t){n("9rs/")},"data-v-0ddbc9ad",null).exports,R={render:function(t){return t("el-button",{class:{"el-button--success":"success"===this.type,"el-button--info":"info"===this.type,"el-button--warning":"warning"===this.type,"el-button--primary":"primary"===this.type,"el-button--danger":"danger"===this.type},domProps:{innerHTML:this.$slots.default[0].text},on:{click:this.clickHandle}})},methods:{clickHandle:function(){}},props:{type:{type:String,default:""},text:{type:String,default:""}}};var $={components:{btnRender:n("VU/8")(R,null,!1,function(t){n("WYlv")},null,null).exports},data:function(){return{testData:[{type:"success",text:"成功"},{type:"info",text:"信息"},{type:"warning",text:"警告"},{type:"primary",text:"默认"},{type:"danger",text:"危险"}]}}},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.testData,function(e,o){return n("btn-render",{key:o,attrs:{type:e.type,text:e.text}},[t._v(t._s(e.text)+"\n  ")])}))},staticRenderFns:[]};var C={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  You are the best one\n")])},staticRenderFns:[]};var O=[{path:"/",name:"首页",component:v,hidden:!0,children:[{path:"/index",component:_,meta:{permit:!0}}]},{path:"/",name:"高级用法",icon:"el-icon-message",component:v,children:[{path:"/watch",component:k,meta:{permission:"high-watch"},name:"vue观察"},{path:"/render",name:"render渲染",component:n("VU/8")($,S,!1,function(t){n("K6of")},null,null).exports,meta:{permission:"high-render"}}]},{path:"/",name:"权限管理",icon:"el-icon-tickets",component:v,children:[{path:"/allocation",name:"权限",component:n("VU/8")({data:function(){return{}}},C,!1,function(t){n("EjmG")},null,null).exports,meta:{permission:"root-allocation"}}]}],U=n("l/JR"),I={name:"App",created:function(){localStorage.getItem("token")?this.$store.dispatch("GET_USER_INFO",this.signin):this.$router.push({path:"/login",query:{from:this.$router.currentRoute.path}})},computed:a()({},Object(s.b)({userInfo:"getUserInfo"})),methods:{login:function(t){var e=this;this.loading=!0,this.$store.dispatch("GET_USER_INFO",function(){e.loading=!1,e.signin(function(){e.$router.push({path:t||"/index"})})})},signin:function(t){if(Array.isArray(this.userInfo.permis)&&0===this.userInfo.permis.length)return this.$router.push({path:"/403"}),!1;var e=this.getAllowRoute(O,this.userInfo.permis);this.$router.addRoutes(e.concat([{path:"*",redirect:"/404"}])),this.$store.commit("SET_MENUS",e),"function"==typeof t&&t&&t()},getAllowRoute:function(t,e){var n=this,o=[];return t.forEach(function(t){if(e.indexOf("*")>-1)return o.push(t),!1;Array.isArray(t.children)?(t.children=n.getAllowRoute(t.children,e),t.children.length>0&&o.push(t)):(t.meta.permit||e.indexOf(t.meta.permission)>-1)&&o.push(t)}),o},clearData:function(){delete U.a.config.headers.Authorization,localStorage.removeItem("token"),this.$store.dispatch("CLEAR_STORE")}}},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view",{on:{login:this.login,clearData:this.clearData}})],1)],1)},staticRenderFns:[]};var T=n("VU/8")(I,D,!1,function(t){n("QDQL")},null,null).exports,q=n("/ocq");r.a.use(q.a);var V=[{path:"/login",name:"login",component:function(){return n.e(2).then(n.bind(null,"XPtW"))}},{path:"/404",name:"404",component:function(){return n.e(0).then(n.bind(null,"7Gzs"))}},{path:"/403",name:"403",component:function(){return n.e(1).then(n.bind(null,"Z4lJ"))}}],A=new q.a({routes:V});A.beforeEach(function(t,e,n){var o=t.name;window.document.title=t.name?o:"VPC",n()});var G,P=A,F=n("Gu7T"),M=n.n(F),j={SET_DEMO:function(t,e){t.demo=e},SET_USER_INFO:function(t,e){t.userInfo=a()({},e)},SET_MENUS:function(t,e){t.menus=[].concat(M()(e))},CLEAR_STORE:function(t){t.userInfo={},t.menus=[]}},z=n("Xxa5"),L=n.n(z),N=n("exGp"),Y=n.n(N),B=n("t5DY"),H=this,K={GET_DEMO:(G=Y()(L.a.mark(function t(e,n){var o,r=e.commit;return L.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B.a.getMock();case 3:o=t.sent,r("SET_DEMO",o.data.msg),"function"==typeof n&&n(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}},t,H,[[0,8]])})),function(t,e){return G.apply(this,arguments)}),GET_USER_INFO:function(t,e){var n=t.commit;B.a.getUser(function(t){n("SET_USER_INFO",t.userInfo),"function"==typeof e&&e()})},CLEAR_STORE:function(t,e){(0,t.commit)("CLEAR_STORE"),"function"==typeof e&&e()}};r.a.use(s.a);var W=new s.a.Store({state:{demo:"",userInfo:{},menus:[]},mutations:j,actions:K,getters:{getDemo:function(t){return t.demo},getUserInfo:function(t){return t.userInfo},getMenus:function(t){return t.menus}}});var Q=n("GDpP");Q.keys().forEach(function(t){var e,n=Q(t),o=(e=t.replace(/^\.\//,"").replace(/\.\w+$/,"")).charAt(0).toUpperCase()+e.slice(1);r.a.component(o,n.default||n)});var J={install:function(t){t.prototype.flag=!1,t.prototype.disabledDate={disabledDate:function(t){return t.getTime()<Date.now()-864e5}},t.prototype.verifyPhone=function(t){return/^1[3-9][0-9]{9}$/.test(t)}}},Z=n("zDGp"),X=n.n(Z);n("K5CO");X.a.configure({showSpinner:!1}),r.a.use(J),r.a.config.productionTip=!1,r.a.prototype.$store=W,new r.a({router:P,render:function(t){return t(T)}}).$mount("#app")},Q2cp:function(t,e){},QDQL:function(t,e){},WYlv:function(t,e){},"l/JR":function(t,e,n){"use strict";var o=n("/I4U"),r=(n.n(o),n("+BTi")),i=(n.n(r),n("yg6k")),a=n.n(i),s=n("lRwf"),c=n.n(s),u=n("c1Z7"),l=n.n(u),p=n("zDGp"),f=n.n(p),d=new l.a;c.a.prototype.$http=d,d.config.headers.Authorization=localStorage.getItem("token"),d.config.baseURL="https://www.easy-mock.com/mock/5af52ce18efab658654cbbfa/dave/",d.interceptors.request.use(function(t){return f.a.start(),t}),d.interceptors.response.use(function(t,e){return t.data.msg&&a.a.success(t.data.msg),f.a.done(),e.resolve(t.data)},function(t,e){return 401===t.response.status?window.location.href="/#/login":a.a.error({title:t.status,message:t.response.data.msg||t.message}),f.a.done(),e.resolve()}),e.a=d},lRwf:function(t,e){t.exports=Vue},t5DY:function(t,e,n){"use strict";var o=n("l/JR"),r={getMock:function(){return o.a.get("demo")},getLogin:function(t,e){return o.a.post("login",t).then(e)},getUser:function(t){return o.a.get("sign").then(t)}};e.a=r},xPqM:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={props:{tp:{type:String,default:"primary"},icon:{type:String,default:""},txt:{type:String,default:""},round:{type:Boolean,default:!1}},data:function(){return{}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-button",{attrs:{type:t.tp,icon:t.icon,round:t.round},on:{click:function(e){t.$emit("click",arguments[0])}}},[t._v("\n    "+t._s(t.txt)+"\n  ")])],1)},staticRenderFns:[]};var i=n("VU/8")(o,r,!1,function(t){n("zoOq")},null,null);e.default=i.exports},zDGp:function(t,e){t.exports=NProgress},zW8x:function(t,e){},zoOq:function(t,e){}},["NHnr"]);
var e=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,r=(a,s,t)=>s in a?e(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t,n=(e,a)=>{for(var s in a||(a={}))o.call(a,s)&&r(e,s,a[s]);if(t)for(var s of t(a))c.call(a,s)&&r(e,s,a[s]);return e},i=(e,t)=>a(e,s(t));"undefined"!=typeof require&&require;import{p as l,a as d,o as p,c as u,r as m,b as k,d as y,F as v,k as f,u as g,e as w,f as h,g as b,t as C,h as x,w as j,i as P,_,j as S,l as K,m as A,n as W,q as L,s as I,v as O,x as V}from"./vendor.4eb73c88.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&a(e)})).observe(document,{childList:!0,subtree:!0})}function a(e){if(e.ep)return;e.ep=!0;const a=function(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?a.credentials="include":"anonymous"===e.crossorigin?a.credentials="omit":a.credentials="same-origin",a}(e);fetch(e.href,a)}}();l("data-v-4b23e37a"),d();const Q={},q={class:"NinjaLogo",src:"/assets/logo.03d6d6da.png",alt:"logo"};Q.render=function(e,a){return p(),u("img",q)};const R={components:{Logo:Q}};l("data-v-1f23ce5f");const U={class:"header"},N={class:"header-wrapper"},z={class:"flex items-center"},D=k("p",{class:"pl-3 select-none"},"Ninja",-1);d(),R.render=function(e,a,s,t,o,c){const r=m("Logo");return p(),u("div",U,[k("div",N,[k("div",z,[y(r,{class:"h-10 w-10"}),D])])])},R.__scopeId="data-v-1f23ce5f";const E={class:"main"},J={setup:e=>(e,a)=>{const s=m("router-view");return p(),u(v,null,[y(R),k("div",E,[y(s)])],64)}};const T=f.create({prefixUrl:"/api",retry:{limit:0}});function $(e){return T.post("WSCKLogin",{json:e}).json()}const Z={setup(){const e=g();w();let a=h({remark:"",WSCKbody:void 0,jdwsck:void 0,nickName:void 0,timestamp:void 0});const s=async()=>{try{const e=localStorage.getItem("eid");if(!e)return void t();const s=await function(e){const a=new URLSearchParams;return a.set("eid",e),T.get("userinfo",{searchParams:a}).json()}(e);if(!s)return _.error("获取用户信息失败，请重重新登录"),void t();a.nickName=s.data.nickName,a.timestamp=new Date(s.data.timestamp).toLocaleString()}catch(e){console.error(e)}};b(s);const t=()=>{localStorage.removeItem("eid"),e.push("/login")};return i(n({},C(a)),{activity:[{name:"玩一玩（可找到大多数活动）",address:"京东 APP 首页-频道-边玩边赚",href:"https://funearth.m.jd.com/babelDiy/Zeus/3BB1rymVZUo4XmicATEUSDUgHZND/index.html"},{name:"宠汪汪",address:"京东APP-首页/玩一玩/我的-宠汪汪"},{name:"东东萌宠",address:"京东APP-首页/玩一玩/我的-东东萌宠"},{name:"东东农场",address:"京东APP-首页/玩一玩/我的-东东农场"},{name:"东东工厂",address:"京东APP-首页/玩一玩/我的-东东工厂"},{name:"东东超市",address:"京东APP-首页/玩一玩/我的-东东超市"},{name:"领现金",address:"京东APP-首页/玩一玩/我的-领现金"},{name:"东东健康社区",address:"京东APP-首页/玩一玩/我的-东东健康社区"},{name:"京喜农场",address:"京喜APP-我的-京喜农场"},{name:"京喜牧场",address:"京喜APP-我的-京喜牧场"},{name:"京喜工厂",address:"京喜APP-我的-京喜工厂"},{name:"京喜财富岛",address:"京喜APP-我的-京喜财富岛"},{name:"京东极速版红包",address:"京东极速版APP-我的-红包"}],getInfo:s,logout:t,delAccount:async()=>{try{const e=localStorage.getItem("eid"),a=await function(e){return T.post("delaccount",{json:e}).json()}({eid:e});200!==a.code?_.error(a.message):(_.success(a.message),setTimeout((()=>{t()}),1e3))}catch(e){console.error(e)}},changeremark:async()=>{try{const e=localStorage.getItem("eid"),s=a.remark,t=await function(e){return T.post("update/remark",{json:e}).json()}({eid:e,remark:s});200!==t.code?_.success(t.message):_.error(t.message)}catch(e){console.error(e)}},WSCKLogin:async()=>{try{const e=a.jdwsck.match(/wskey=(.*?);/)&&a.jdwsck.match(/wskey=(.*?);/)[1],s=a.jdwsck.match(/pin=(.*?);/)&&a.jdwsck.match(/pin=(.*?);/)[1];if(e&&s){const a=await $({wskey:e,pin:s});a.data.eid?_.success(a.message):_.error(a.message||"wskey 解析失败，请检查后重试！")}else _.error("wskey 解析失败，请检查后重试！")}catch(e){console.error(e)}},openUrlWithJD:e=>{const a=encodeURIComponent(`{"category":"jump","des":"m","action":"to","url":"${e}"}`);window.location.href=`openapp.jdmobile://virtual?params=${a}`,console.log(window.location.href)}})}};l("data-v-0f5651b5");const B={class:"content"},G={class:"card"},H=k("div",{class:"card-header"},[k("p",{class:"card-title"},"个人中心")],-1),F={class:"card-body"},M={class:"card-footer"},X=A("退出登录"),Y=A("删除账号"),ee={class:"card"},ae=S('<div class="card-header" data-v-0f5651b5><p class="card-title" data-v-0f5651b5>WSCK 录入</p><div class="card-body text-base leading-6" data-v-0f5651b5><b data-v-0f5651b5>wskey有效期长达一年，请联系管理员确认使用，慎重！</b><p data-v-0f5651b5>代码没空改了，鸽了，想删WSCK改密码。</p><p data-v-0f5651b5>用户须手动提取pin和wskey，格式如：&quot;pt_pin=xxxxxx;wskey=xxxxxxxxxx;&quot;。</p><p class="card-subtitle" data-v-0f5651b5>——IOS用户手机抓包APP <a style="" href="https://apps.apple.com/cn/app/stream/id1312141691" target="_blank" id="downiOSApp" data-v-0f5651b5>点击跳转安装</a></p><p class="card-subtitle" data-v-0f5651b5>——在api.m.jd.com域名下找POST请求大概率能找到wskey。</p><p class="card-subtitle" data-v-0f5651b5>wskey在录入后立马上线，系统会在指定时间检查wskey，有效则自动转换出cookie登录</p><p class="card-subtitle" data-v-0f5651b5>cookie失效后，也会在系统设定的指定时间内自动转换出新的cookie，实现一次录入长期有效</p></div></div>',1),se={class:"card-body text-center"},te={class:"card-footer"},oe=A("录入WSCK"),ce={class:"card"},re=k("div",{class:"card-header"},[k("p",{class:"card-title"},"修改备注")],-1),ne={class:"card-body text-center"},ie={class:"card-footer"},le=A("修改"),de={class:"card"},pe=k("div",{class:"card-header"},[k("p",{class:"card-title"},"常见活动位置"),k("span",{class:"card-subtitle"},"下面是一些常见活动的位置")],-1),ue={class:"card-body"},me={class:"pr-2"},ke=["onClick"];d(),Z.render=function(e,a,s,t,o,c){const r=m("el-button"),n=m("el-input");return p(),u("div",B,[k("div",G,[H,k("div",F,[k("p",null,"昵称："+x(e.nickName),1),k("p",null,"更新时间："+x(e.timestamp),1)]),k("div",M,[y(r,{size:"small",auto:"",onClick:t.logout},{default:j((()=>[X])),_:1},8,["onClick"]),y(r,{type:"danger",size:"small",auto:"",onClick:t.delAccount},{default:j((()=>[Y])),_:1},8,["onClick"])])]),k("div",ee,[ae,k("div",se,[y(n,{modelValue:e.jdwsck,"onUpdate:modelValue":a[0]||(a[0]=a=>e.jdwsck=a),size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"])]),k("div",te,[y(r,{type:"success",size:"small",auto:"",onClick:t.WSCKLogin},{default:j((()=>[oe])),_:1},8,["onClick"])])]),k("div",ce,[re,k("div",ne,[y(n,{modelValue:e.remark,"onUpdate:modelValue":a[1]||(a[1]=a=>e.remark=a),size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"])]),k("div",ie,[y(r,{type:"success",size:"small",auto:"",onClick:t.changeremark},{default:j((()=>[le])),_:1},8,["onClick"])])]),k("div",de,[pe,k("div",ue,[k("ul",null,[(p(!0),u(v,null,P(t.activity,((e,a)=>(p(),u("li",{key:a,class:"leading-normal"},[k("span",null,x(e.name)+"：",1),k("span",me,x(e.address),1),e.href?(p(),u("a",{key:0,class:"text-blue-400",href:"#",onClick:a=>t.openUrlWithJD(e.href)},"直达链接",8,ke)):K("",!0)])))),128))])])])])},Z.__scopeId="data-v-0f5651b5";const ye={setup(){const e=g();w();let a=h({marginCount:0,allowAdd:!0,cookie:"",QRCode:void 0,qrCodeVisibility:!1,token:void 0,okl_token:void 0,cookies:void 0,timer:void 0,waitLogin:!1,marginWSCKCount:0,allowWSCKAdd:!0,jdwsck:void 0,showQR:!1,showWSCK:!1,showCK:!0});const s=async()=>{try{const e=(await T.get("info").json()).data;a.marginCount=e.marginCount,a.allowAdd=e.allowAdd,a.marginWSCKCount=e.marginWSCKCount,a.allowWSCKAdd=e.allowWSCKAdd,a.showQR=e.showQR,a.showWSCK=e.showWSCK,a.showCK=e.showCK}catch(e){console.error(e)}},t=async()=>{if(this.showQR)try{const e=await T.get("qrcode").json();a.token=e.data.token,a.okl_token=e.data.okl_token,a.cookies=e.data.cookies,a.QRCode=e.data.QRCode,a.QRCode&&(a.waitLogin=!0,clearInterval(a.timer),a.timer=setInterval(o,3e3))}catch(e){console.error(e),_.error("生成二维码失败！请重试或放弃")}else _.warning("扫码已禁用请手动抓包")},o=async()=>{try{const s=await function(e){return T.post("check",{json:e}).json()}({token:a.token,okl_token:a.okl_token,cookies:a.cookies});switch(null==s?void 0:s.data.errcode){case 0:localStorage.setItem("eid",s.data.eid),_.success(s.message),clearInterval(a.timer),e.push("/");break;case 176:break;default:_.error(s.message),a.waitLogin=!1,clearInterval(a.timer)}}catch(s){clearInterval(a.timer),a.waitLogin=!1}};return b((()=>{s(),t()})),i(n({},C(a)),{getInfo:s,getQrcode:t,showQrcode:async()=>{a.qrCodeVisibility=!0},ckeckLogin:o,jumpLogin:async()=>{const e=`openapp.jdmobile://virtual/ad?params={"category":"jump","des":"ThirdPartyLogin","action":"to","onekeylogin":"return","url":"https://plogin.m.jd.com/cgi-bin/m/tmauth?appid=300&client_type=m&token=${a.token}","authlogin_returnurl":"weixin://","browserlogin_fromurl":"${window.location.host}"}`;window.location.href=e},CKLogin:async()=>{try{const s=a.cookie.match(/pt_key=(.*?);/)&&a.cookie.match(/pt_key=(.*?);/)[1],t=a.cookie.match(/pt_pin=(.*?);/)&&a.cookie.match(/pt_pin=(.*?);/)[1];if(s&&t){const a=await function(e){return T.post("cklogin",{json:e}).json()}({pt_key:s,pt_pin:t});a.data.eid?(localStorage.setItem("eid",a.data.eid),_.success(a.message),e.push("/")):_.error(a.message||"cookie 解析失败，请检查后重试！")}else _.error("cookie 解析失败，请检查后重试！")}catch(s){console.error(s)}},WSCKLogin:async()=>{try{const s=a.jdwsck.match(/wskey=(.*?);/)&&a.jdwsck.match(/wskey=(.*?);/)[1],t=a.jdwsck.match(/pin=(.*?);/)&&a.jdwsck.match(/pin=(.*?);/)[1];if(s&&t){const a=await $({wskey:s,pin:t});a.data.eid?(localStorage.setItem("eid",a.data.eid),_.success(a.message),e.push("/")):_.error(a.message||"wskey 解析失败，请检查后重试！")}else _.error("wskey 解析失败，请检查后重试！")}catch(s){console.error(s)}}})}};l("data-v-ae481426");const ve={class:"content"},fe=S('<div class="card" data-v-ae481426><div class="card-header" data-v-ae481426><div class="flex items-center justify-between" data-v-ae481426><p class="card-title" data-v-ae481426>Waikiki提醒您</p></div></div><div class="card-body text-base leading-6" data-v-ae481426><p data-v-ae481426>为了您的财产安全请关闭免密支付以及打开支付验密（京东-设置-支付设置-支付验密设置）。</p><p data-v-ae481426>建议京东账户绑定微信以保证提现能到账。</p><p data-v-ae481426>由于京东异地登录限制，扫码获取cookie只有2小时有效期，因此暂时关闭扫码功能，现需手动抓取Cookie。</p><p data-v-ae481426>且有效期不长，平均3-5天，因此需要及时更新。</p><b data-v-ae481426>安全起见，WSCK可以在CK登录后录入，期限半永久。</b></div><div class="card-footet" data-v-ae481426></div></div>',1),ge={key:0,class:"card"},we={class:"card-header"},he={class:"flex items-center justify-between"},be=k("p",{class:"card-title"},"扫码登录",-1),Ce={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},xe=k("span",{class:"card-subtitle"}," 请点击下方按钮登录，点击按钮后回到本网站查看是否登录成功，京东的升级提示不用管。 ",-1),je={class:"card-body text-center"},Pe={key:0,class:"flex flex-col w-48 m-auto mt-4"},_e=A("扫描二维码登录"),Se=A("跳转到京东 App 登录"),Ke=["src"],Ae=k("div",{class:"card-footer"},null,-1),We={key:1,class:"card"},Le={class:"card-header"},Ie={class:"flex items-center justify-between"},Oe=k("p",{class:"card-title"},"WSCK 录入",-1),Ve={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},Qe=S('<div class="card-body text-base leading-6" data-v-ae481426><b data-v-ae481426>wskey有效期长达一年，请联系管理员确认使用（删不掉，慎用）</b><p data-v-ae481426>用户须手动提取pin和wskey，格式如：&quot;pt_pin=xxxxxx;wskey=xxxxxxxxxx;&quot;。</p><p class="card-subtitle" data-v-ae481426>——IOS用户手机抓包APP <a style="" href="https://apps.apple.com/cn/app/stream/id1312141691" target="_blank" id="downiOSApp" data-v-ae481426>点击跳转安装</a></p><p class="card-subtitle" data-v-ae481426>——在api.m.jd.com域名下找POST请求大概率能找到wskey。</p><p class="card-subtitle" data-v-ae481426>wskey在录入后立马上线，系统会在指定时间检查wskey，有效则自动转换出cookie登录</p><p class="card-subtitle" data-v-ae481426>cookie失效后，也会在系统设定的指定时间内自动转换出新的cookie，实现一次录入长期有效</p></div><span class="card-subtitle" data-v-ae481426> 请在下方输入您的 WSCK </span>',2),qe={class:"card-body text-center"},Re=A("录入"),Ue=k("div",{class:"card-footet"},null,-1),Ne={key:2,class:"card"},ze={class:"card-header"},De={class:"flex items-center justify-between"},Ee=k("p",{class:"card-title"},"CK 登录",-1),Je={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},Te=k("div",{class:"card-body text-base leading-6"},[k("p",null,[A("PC用户建议使用开源工具"),k("a",{style:{},href:"https://github.com/Waikkii/JD_Get_Cookie",target:"_blank",id:"waikiki"},"JD_Get_Cookie"),A("获取cookie并在下方填写。")]),k("p",null,[A("手机用户可以使用Alook浏览器登录"),k("a",{style:{},href:"https://m.jd.com/",target:"_blank",id:"jd"},"JD官网"),A("，并在菜单-工具箱-开发者工具-Cookies中获取（Android和iPhone通用）。")]),k("p",null,"另外也可以使用抓包工具（iPhone：Stream，Android：HttpCanary）抓取京东app的ck，要注意pt_key和pt_pin字段是以app_open开头的。"),k("p",null,"cookie直接填入输入框即可，Ninja会自动正则提取pt_key和pt_pin。")],-1),$e=k("span",{class:"card-subtitle"}," 请在下方输入您的 cookie 登录。 ",-1),Ze={class:"card-body text-center"},Be=A("登录"),Ge=k("div",{class:"card-footet"},null,-1);d(),ye.render=function(e,a,s,t,o,c){const r=m("el-button"),n=m("el-input");return p(),u("div",ve,[fe,e.showQR?(p(),u("div",ge,[k("div",we,[k("div",he,[be,k("span",Ce,"余量："+x(e.marginCount),1)]),xe]),k("div",je,[e.qrCodeVisibility?(p(),u("img",{key:1,src:e.QRCode,width:256,class:"m-auto"},null,8,Ke)):(p(),u("div",Pe,[y(r,{type:"primary",round:"",onClick:t.showQrcode},{default:j((()=>[_e])),_:1},8,["onClick"]),y(r,{class:"mt-4 ml-0",type:"primary",round:"",onClick:t.jumpLogin},{default:j((()=>[Se])),_:1},8,["onClick"])]))]),Ae])):K("",!0),e.showWSCK?(p(),u("div",We,[k("div",Le,[k("div",Ie,[Oe,k("span",Ve,"余量："+x(e.marginWSCKCount),1)]),Qe]),k("div",qe,[y(n,{modelValue:e.jdwsck,"onUpdate:modelValue":a[0]||(a[0]=a=>e.jdwsck=a),size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"]),y(r,{type:"primary",size:"small",round:"",onClick:t.WSCKLogin},{default:j((()=>[Re])),_:1},8,["onClick"])]),Ue])):K("",!0),e.showCK?(p(),u("div",Ne,[k("div",ze,[k("div",De,[Ee,k("span",Je,"余量："+x(e.marginCount),1)]),Te,$e]),k("div",Ze,[y(n,{modelValue:e.cookie,"onUpdate:modelValue":a[1]||(a[1]=a=>e.cookie=a),size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"]),y(r,{type:"primary",size:"small",round:"",onClick:t.CKLogin},{default:j((()=>[Be])),_:1},8,["onClick"])]),Ge])):K("",!0)])},ye.__scopeId="data-v-ae481426";const He=[{path:"/",component:Z},{path:"/login",component:ye}],Fe=W({history:L(),routes:He}),Me=[O,V,_],Xe=[_],Ye=I(J);Me.forEach((e=>{Ye.component(e.name,e)})),Xe.forEach((e=>{Ye.use(e)})),Ye.use(Fe),Ye.mount("#app");
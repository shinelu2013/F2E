(function(t){function s(s){for(var a,i,o=s[0],l=s[1],u=s[2],d=0,p=[];d<o.length;d++)i=o[d],n[i]&&p.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(s);while(p.length)p.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var t,s=0;s<r.length;s++){for(var e=r[s],a=!0,o=1;o<e.length;o++){var l=e[o];0!==n[l]&&(a=!1)}a&&(r.splice(s--,1),t=i(i.s=e[0]))}return t}var a={},n={1:0},r=[];function i(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=a,i.d=function(t,s,e){i.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,s){if(1&s&&(t=i(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)i.d(e,a,function(s){return t[s]}.bind(null,a));return e},i.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(s,"a",s),s},i.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},i.p="./";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=s,o=o.slice();for(var u=0;u<o.length;u++)s(o[u]);var c=l;r.push([3,0]),e()})({3:function(t,s,e){t.exports=e("Vtdi")},"6XIg":function(t,s,e){"use strict";var a=e("daGK"),n=e.n(a);n.a},BSAY:function(t,s,e){"use strict";var a=e("vORg"),n=e.n(a);n.a},Vtdi:function(t,s,e){"use strict";e.r(s);e("yt8O"),e("VRzm");var a=e("Kw5r"),n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("page1",{attrs:{stages:t.stages}})],1)},r=[],i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"page"},[e("progressBar",{attrs:{stages:t.stages}}),t._m(0),e("div",{staticClass:"field"},[e("label",[t._v("Account")]),e("input",{attrs:{model:t.account,placeHolder:"example@email.com"},on:{input:function(s){t.validField(s,"email")}}})]),e("div",{staticClass:"field"},[e("label",[t._v("Password")]),e("input",{attrs:{model:t.password,type:"password",placeHolder:"******"}})]),e("div",{staticClass:"field"},[e("label",[t._v("Confirm Password")]),e("input",{attrs:{model:t.confirm_password,type:"password",placeHolder:"******"}})]),e("div",{staticClass:"field"},[e("button",{staticClass:"submitButton",attrs:{disabled:!t.formValid}},[t._v("SUBMIT & NEXT")])])],1)},o=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"title"},[e("div",{staticClass:"bigTitle"},[t._v("Create Account")]),e("div",{staticClass:"smallTitle"},[t._v("Glad to sess you here!    ")])])}],l=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"progressBar"},[e("div",{staticClass:"stage",class:t.getStageClass(t.stages[0])}),e("div",{staticClass:"line",class:{linepass:t.currentStage>1}}),e("div",{staticClass:"stage",class:t.getStageClass(t.stages[1])}),e("div",{staticClass:"line",class:{linepass:t.currentStage>2}}),e("div",{staticClass:"stage",class:t.getStageClass(t.stages[2])}),e("div",{staticClass:"line",class:{linepass:t.currentStage>3}}),e("div",{staticClass:"stage",class:t.getStageClass(t.stages[3])})])},u=[],c={props:{stages:{type:Array,default:[{id:1,status:"current"},{id:3,status:"wait"},{id:2,status:"wait"},{id:4,status:"wait"}]}},data:function(){return{currentStage:1}},mounted:function(){for(var t in console.log("ProgressBar stages:",this.stages),this.stages){var s=this.stages[t];"current"===s.status&&(this.currentStage=++t)}},methods:{getStageClass:function(t,s){var e=["stage"];switch(t.status){case"current":e.push("current");break;case"passed":e.push("passed");break;case"wait":e.push("wait");break;default:e.push("wait");break}return e.join(" ")}}},d=c,p=(e("BSAY"),e("KHd+")),f=Object(p["a"])(d,l,u,!1,null,"7be06450",null),g=f.exports,v={props:{stages:{type:Array}},data:function(){return{account:"",password:"",confirm_password:""}},components:{progressBar:g},mounted:function(){var t=this;this.$nextTick(function(){t.init()})},methods:{init:function(){console.log("page1 stages:",this.stages)},validField:function(t,s){var e=t.target;console.log(e.value,s)}},computed:{formValid:function(){return!1}},filters:{}},m=v,h=(e("6XIg"),Object(p["a"])(m,i,o,!1,null,"2e2d6999",null)),b=h.exports,w={name:"app",components:{page1:b},data:function(){return{stages:[{id:1,status:"current"},{id:2,status:"wait"},{id:3,status:"wait"},{id:4,status:"wait"}]}},mounted:function(){var t=this;this.$nextTick(function(){t.init()})},methods:{init:function(){}},computed:{},filters:{}},C=w,y=(e("nNx0"),Object(p["a"])(C,n,r,!1,null,null,null)),_=y.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(_)}}).$mount("#app")},boi5:function(t,s,e){},daGK:function(t,s,e){},nNx0:function(t,s,e){"use strict";var a=e("boi5"),n=e.n(a);n.a},vORg:function(t,s,e){}});
//# sourceMappingURL=app.js.map
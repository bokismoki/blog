(function(t){function e(e){for(var s,r,i=e[0],c=e[1],l=e[2],p=0,f=[];p<i.length;p++)r=i[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},o=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0305":function(t,e,a){"use strict";var s=a("57fc"),n=a.n(s);n.a},"0673":function(t,e,a){"use strict";var s=a("589d"),n=a.n(s);n.a},"0ad3":function(t,e,a){"use strict";var s=a("2201"),n=a.n(s);n.a},"1e74":function(t,e,a){"use strict";var s=a("8afd"),n=a.n(s);n.a},"21bb":function(t,e,a){"use strict";var s=a("7a98"),n=a.n(s);n.a},2201:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"nav"},[a("h1",{staticClass:"nav-title"},[t._v("Moon")]),a("p",{staticClass:"nav-desc"},[t._v("\n      I'm a simple responsive blog template. Easily add new blog posts using the\n      Webflow Editor or customize your layout/design using the Weblof Designer.\n    ")]),a("hr",{attrs:{size:"1"}}),a("div",{staticClass:"views"},[a("router-link",{staticClass:"view",attrs:{to:{name:"home"}}},[t._v("Home")]),a("router-link",{staticClass:"view",attrs:{to:{name:"all-posts"}}},[t._v("All Posts")]),a("router-link",{staticClass:"view",attrs:{to:{name:"about"}}},[t._v("About")]),a("router-link",{staticClass:"view",attrs:{to:{name:"contact"}}},[t._v("Contact")])],1),a("hr",{attrs:{size:"1"}}),t._m(0)]),a("router-view")],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"socials"},[a("i",{staticClass:"fab fa-facebook-square icon"}),a("i",{staticClass:"fab fa-twitter icon"}),a("i",{staticClass:"fas fa-globe icon"}),a("i",{staticClass:"fab fa-github icon"}),a("i",{staticClass:"fab fa-instagram icon"}),a("i",{staticClass:"fab fa-linkedin-in icon"})])}],r=(a("5c0b"),a("2877")),i={},c=Object(r["a"])(i,n,o,!1,null,null,null),l=c.exports,u=a("8c4f"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("h1",{staticClass:"home-title"},[t._v("Home")]),a("p",[t._v("Hard-coded text, not interesting.")])])}],m={name:"home"},d=m,v=(a("21bb"),Object(r["a"])(d,p,f,!1,null,null,null)),h=v.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all-posts"},[a("h1",{staticClass:"all-posts-title"},[t._v("All Posts")]),a("hr",{attrs:{size:"1"}}),t._l(t.allPosts,(function(e){return a("div",{key:e.id,staticClass:"post"},[a("h1",{staticClass:"post-title"},[t._v(t._s(e.title))]),a("span",{staticClass:"post-date"},[t._v(t._s(e.date)+" --- ")]),a("span",{staticClass:"post-filter"},[t._v(t._s(e.filter))]),a("p",{staticClass:"post-description"},[t._v(t._s(e.description))]),a("button",{staticClass:"continue-reading-btn",on:{click:function(a){return t.$router.push({name:"post",params:{post_id:e.id}})}}},[t._v("Continue Reading")])])}))],2)},_=[],g=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),C=a("2f62");function w(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function y(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?w(a,!0).forEach((function(e){Object(g["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):w(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var O={name:"all-posts",data:function(){return{}},computed:y({},Object(C["b"])(["allPosts"]))},P=O,j=(a("6125"),Object(r["a"])(P,b,_,!1,null,null,null)),k=j.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"post"},[a("div",{staticClass:"post-title"},[t._v(t._s(t.post.title))]),a("p",{staticClass:"post-date"},[t._v(t._s(t.post.date)+" --- "+t._s(t.post.filter))]),a("hr",{attrs:{size:"1"}}),a(t.component,{tag:"component"})],1)},$=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"post-1"},[a("h1",{staticClass:"post-1-title"},[t._v("Random Text from Post-1")]),a("button",{staticClass:"view-posts-btn",on:{click:function(e){return t.$router.push({name:"all-posts"})}}},[t._v("View all posts")])])},M=[],S={},A=S,T=(a("0ad3"),Object(r["a"])(A,E,M,!1,null,null,null)),z=T.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"post-2"},[a("h1",{staticClass:"post-2-title"},[t._v("Random Text from Post-2")]),a("button",{staticClass:"view-posts-btn",on:{click:function(e){return t.$router.push({name:"all-posts"})}}},[t._v("View all posts")])])},q=[],D={},V=D,H=(a("85e9"),Object(r["a"])(V,R,q,!1,null,null,null)),W=H.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"post-3"},[a("h1",{staticClass:"post-3-title"},[t._v("Random Text from Post-3")]),a("button",{staticClass:"view-posts-btn",on:{click:function(e){return t.$router.push({name:"all-posts"})}}},[t._v("View all posts")])])},J=[],B={},F=B,I=(a("1e74"),Object(r["a"])(F,G,J,!1,null,null,null)),L=I.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"post-4"},[a("h1",{staticClass:"post-4-title"},[t._v("Random Text from Post-4")]),a("button",{staticClass:"view-posts-btn",on:{click:function(e){return t.$router.push({name:"all-posts"})}}},[t._v("View all posts")])])},K=[],Q={},U=Q,X=(a("9387"),Object(r["a"])(U,N,K,!1,null,null,null)),Y=X.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"post-5"},[a("h1",{staticClass:"post-5-title"},[t._v("Random Text from Post-5")]),a("button",{staticClass:"view-posts-btn",on:{click:function(e){return t.$router.push({name:"all-posts"})}}},[t._v("View all posts")])])},tt=[],et={},at=et,st=(a("ad5a"),Object(r["a"])(at,Z,tt,!1,null,null,null)),nt=st.exports,ot={name:"post",components:{Post1:z,Post2:W,Post3:L,Post4:Y,Post5:nt},data:function(){return{post:{},component:""}},mounted:function(){this.post=this.$store.state.allPosts[this.$route.params.post_id],this.component="Post".concat(this.$store.state.allPosts[this.$route.params.post_id].id+1)}},rt=ot,it=(a("0305"),Object(r["a"])(rt,x,$,!1,null,null,null)),ct=it.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",{staticClass:"about-title"},[t._v("About")]),a("p",[t._v("Hard-coded text, not interesting.")]),a("button",{staticClass:"get-in-touch-btn",on:{click:function(e){return t.$router.push({name:"contact"})}}},[t._v("Get in touch")])])},ut=[],pt={name:"about"},ft=pt,mt=(a("f26d"),Object(r["a"])(ft,lt,ut,!1,null,null,null)),dt=mt.exports,vt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ht=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact"},[a("h1",{staticClass:"contact-title"},[t._v("Get in touch")]),a("p",{staticClass:"contact-p"},[t._v("Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.")]),a("form",{staticClass:"contact-form"},[a("label",{attrs:{for:"name"}},[t._v("Name")]),a("input",{staticClass:"name",attrs:{type:"text",id:"name",placeholder:"Enter your name"}}),a("label",{attrs:{for:"email"}},[t._v("Email Address")]),a("input",{staticClass:"email",attrs:{type:"text",id:"email",placeholder:"Enter your email address"}}),a("label",{attrs:{for:"message"}},[t._v("Message")]),a("textarea",{staticClass:"message",attrs:{name:"message",id:"message",placeholder:"Enter your message"}}),a("button",{staticClass:"submit-btn",attrs:{type:"submit"}},[t._v("Submit")])])])}],bt={name:"contact"},_t=bt,gt=(a("0673"),Object(r["a"])(_t,vt,ht,!1,null,null,null)),Ct=gt.exports;s["a"].use(u["a"]);var wt=new u["a"]({routes:[{path:"/",name:"home",component:h},{path:"/all_posts",name:"all-posts",component:k},{path:"/post/:post_id",name:"post",component:ct},{path:"/about",name:"about",component:dt},{path:"/contact",name:"contact",component:Ct}]});s["a"].use(C["a"]);var yt=new C["a"].Store({state:{allPosts:[{title:"Coffee variety macchiato as organic",date:"March 2, 2016",filter:"Travel",description:"Saucer, crema carajillo, bar, mocha medium, latte cappuccino and espresso acerbic to go. Coffee, irish foam turkish coffee blue mountain seasonal. Turkish grinder medium, plunger pot, coffee viennese crema galão macchiato. Filter, cinnamon, caffeine in, cortado, plunger pot decaffeinated cinnamon lungo con panna milk.",id:0},{title:"Wherever far wow thus a squirrel",date:"March 2, 2016",filter:"Art",description:"Cup, caramelization viennese, cultivar macchiato flavour percolator ristretto frappuccino. Lungo extra macchiato cream chicory turkish caramelization.",id:1},{title:"Coffee sugar and chicory seasonal",date:"March 2, 2016",filter:"Music",description:"Arista, percolator, cream, aromatic, fair trade, breve body instant lungo blue mountain cappuccino. Americano aroma mug espresso latte crema milk redeye acerbic. Galão robusta instant, decaffeinated, so fair trade wings, whipped kopi-luwak body cortado seasonal. Mug roast, café au lait affogato lungo viennese decaffeinated. Cultivar, redeye brewed seasonal, java as french press et sweet cup mazagran.",id:2},{title:"According a funnily until animals",date:"March 2, 2016",filter:"Tech",description:"Single shot cultivar beans as chicory caffeine. Medium brewed, milk extra that froth pumpkin spice mocha. Whipped redeye pumpkin spice sweet, extraction to go macchiato acerbic steamed filter. Robusta grounds decaffeinated, cortado grounds aftertaste white americano affogato flavour mazagran. Aged eu, extraction, cup seasonal frappuccino in seasonal saucer wings.",id:3},{title:"Overlaid the jeepers uselessly twice",date:"March 2, 2016",filter:"Art",description:"Saucer dark cup french press. Barista beans, organic eu variety skinny acerbic flavour caffeine white. Steamed, plunger pot ut dripper decaffeinated, caramelization, sit barista mug con panna shop turkish.",id:4}]},getters:{allPosts:function(t){return t.allPosts}},mutations:{},actions:{}});s["a"].config.productionTip=!1,new s["a"]({router:wt,store:yt,render:function(t){return t(l)}}).$mount("#app")},"57fc":function(t,e,a){},"589d":function(t,e,a){},"5c0b":function(t,e,a){"use strict";var s=a("e332"),n=a.n(s);n.a},6077:function(t,e,a){},6125:function(t,e,a){"use strict";var s=a("7e60"),n=a.n(s);n.a},"7a98":function(t,e,a){},"7e60":function(t,e,a){},"85e9":function(t,e,a){"use strict";var s=a("6077"),n=a.n(s);n.a},"8afd":function(t,e,a){},9387:function(t,e,a){"use strict";var s=a("f74e"),n=a.n(s);n.a},ad5a:function(t,e,a){"use strict";var s=a("cf58"),n=a.n(s);n.a},cf58:function(t,e,a){},e332:function(t,e,a){},e9ad:function(t,e,a){},f26d:function(t,e,a){"use strict";var s=a("e9ad"),n=a.n(s);n.a},f74e:function(t,e,a){}});
//# sourceMappingURL=app.86dc1eb1.js.map
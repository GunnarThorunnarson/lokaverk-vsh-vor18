webpackJsonp([1],{0:function(t,e,s){t.exports=s("NHnr")},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("/5sW"),i=s("cTzj"),a=s.n(i),n=s("+MUj"),o=s.n(n),c={name:"header",data:function(){return{barHidden:!0,categories:["dresses","jackets","tops","jeans","pants"]}},methods:{toggleBar:function(){this.barHidden=!this.barHidden,this.barHidden||this.$refs.sinp.focus()}}},l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header-grid-item bg-black",attrs:{role:"header"}},[s("div",{staticClass:"header-nav h-100 center flex justify-between items-center"},[s("router-link",{staticClass:"db link white hover-red",attrs:{to:"/"}},[s("div",{staticClass:"subheadline pt1"},[t._v("late")])]),s("div",{staticClass:"flex justify-end"},[s("div",{staticClass:"dn flex-l justify-between pv2"},t._l(t.categories,function(e){return s("router-link",{staticClass:"link btn-white mr3",attrs:{to:{path:"/search",query:{cat:e}}}},[s("div",{staticClass:"btn-child ui"},[t._v(t._s(e))])])})),s("form",{staticClass:"search-bar absolute pt2-ns",class:{searchBarHidden:t.barHidden},attrs:{action:"/search"}},[s("input",{ref:"sinp",staticClass:"h2 w-100 ui ph2",attrs:{type:"text",name:"term"}})]),s("svg",{staticClass:"z-999 pv2 h2 w2 pointer dib search-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},on:{click:t.toggleBar}},[s("path",{attrs:{d:"M22.89,20.63a12.79,12.79,0,1,0-2.26,2.26L29.74,32,32,29.74ZM6,19.57a9.59,9.59,0,1,1,14.6-1.23,9.49,9.49,0,0,1-2.26,2.26A9.6,9.6,0,0,1,6,19.57Z"}})]),s("svg",{staticClass:"dn-l ml3 pv2 h2 w2 pointer dib search-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"}},[s("rect",{attrs:{width:"32",height:"4"}}),s("rect",{attrs:{y:"14",width:"32",height:"4"}}),s("rect",{attrs:{y:"28",width:"32",height:"4"}})])])],1)])},u=[],d=s("XyMi"),h=!1,p=null,m=null,f=null,v=Object(d["a"])(c,l,u,h,p,m,f),g=v.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"bg-black footer-grid-item",attrs:{role:"footer"}},[s("div",{staticClass:"footer-container cf ph2 pv3 center"},[s("p",{staticClass:"ui fl-ns white"},[t._v("Örn Óli Strange & Elmar Ólafsson © 2018")]),s("p",{staticClass:"ui fr-ns tr-ns white"},[t._v("This is not a real website!")])])])}],w=null,_=!1,y=null,x=null,k=null,j=Object(d["a"])(w,b,C,_,y,x,k),O=j.exports,$={components:{Header:g,Footer:O}},P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"body-grid vh-100",attrs:{id:"app"}},[s("Header"),s("router-view"),s("Footer")],1)},T=[],z=!1,M=null,q=null,H=null,E=Object(d["a"])($,P,T,z,M,q,H),L=E.exports,B=s("/ocq"),N=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"main-grid-item",attrs:{role:"main"}},[r("div",{staticClass:"h-100 mw9 center flex-l justify-around items-center"},[r("router-link",{staticClass:"dim w-100 tc pa3 pb0 pa4-l pr3-l",attrs:{to:"/search?cat=tops"}},[r("img",{attrs:{src:s("UO+i"),alt:"hero-red"}})]),r("router-link",{staticClass:"dim w-100 tc pa3 pa4-l pl3-l",attrs:{to:"/search?cat=dresses"}},[r("img",{attrs:{src:s("sDLt"),alt:"hero-blue"}})])],1)])},A=[],I=null,U=!1,D=null,W=null,F=null,S=Object(d["a"])(I,N,A,U,D,W,F),V=S.exports,Y={name:"product-thumb",props:{prod:Object},data:function(){return{hover:!1,pid:this.prod.id,thumb1:this.prod.images[0],thumb2:this.prod.images[1]}}},Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-link",{staticClass:"link black product-thumb h-100",attrs:{to:{path:"/product/"+t.prod.id}}},[s("div",{staticClass:"flex flex-column justify-between h-100"},[s("div",{staticClass:"overflow-hidden ba",on:{mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}},[t.hover?s("div",[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.thumb2,expression:"thumb2"}],staticClass:"prod-thumb-img",attrs:{alt:""}})]):s("div",[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.thumb1,expression:"thumb1"}],staticClass:"prod-thumb-img",attrs:{alt:""}})])]),s("div",{staticClass:"flex-column tc h3 bg-white bb br bl"},[s("p",{staticClass:"pv2 ui"},[t._v(t._s(t.prod.title))]),s("p",{staticClass:"pb2 ui"},[t._v(t._s(t.prod.price)+"$")])])])])},J=[],R=!1,X=null,G=null,K=null,Q=Object(d["a"])(Y,Z,J,R,X,G,K),tt=Q.exports,et=(s("y9m4"),s("mtWM")),st=s.n(et),rt=!0,it=rt?"/api/":"http://eaglemac.local:5000/api/",at=st.a.create({baseURL:it,timeout:1e4,headers:{"Content-Type":"application/json"}});at.interceptors.request.use(function(t){return t.headers["Authorization"]="Fake Token",t}),at.interceptors.response.use(function(t){return t},function(t){return console.log(t),Promise.reject(t)});var nt={fetchProducts:function(t){var e="products",s=!0;for(var r in t)void 0!==t[r]&&"page"!==r&&(s?(e+="?"+r+"="+t[r]+"&",s=!1):e+=r+"="+t[r]+"&");return"&"===e.slice(-1)&&(e=e.slice(0,-1)),at.get(e).then(function(t){return t.data})},fetchProduct:function(t){var e="products/"+t;return at.get(e).then(function(t){return t.data})}},ot={name:"search",components:{ProductThumb:tt},data:function(){return{prods:[],cToHex:{},loading:!1,error:!1,errorMessage:"",colFilter:!1,saveColors:[]}},methods:{fetchProducts:function(){var t=this;this.loading=!0,nt.fetchProducts(this.$route.query).then(function(e){t.prods=e,t.loading=!1}).catch(function(e){t.error=!0,t.errorMessage=e.message})},updateAll:function(){this.prods={},this.error=!1,this.errorMessage="",this.query=this.$route.query,this.fetchProducts()},pageIndex:function(){return this.query.page?this.query.page-1:0}},watch:{$route:"updateAll"},computed:{chunkedProds:function(){return this.prods[this.pageIndex()]},howManyChunks:function(){return this.prods.length},empty:function(){return 0===this.prods.length}},created:function(){this.updateAll()}},ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"main-grid-item"},[s("div",{staticClass:"cf h-100 search-main-grid"},[s("div",{staticClass:"search-filter db h-100 br b--black"},[s("div",{staticClass:"fixed w5 tc mt6"},[s("router-link",{staticClass:"dib link ui black pb2 bb",attrs:{to:{path:t.$route.fullPath,query:{sort:"hilo"}}}},[t._v("\n        Highest - Lowest\n      ")]),s("router-link",{staticClass:"dib link ui black pt2",attrs:{to:{path:t.$route.fullPath,query:{sort:"lohi"}}}},[t._v("\n        Lowest - Highest\n      ")])],1)]),t.loading?s("div",{staticClass:"subheadline pa4 search-grid"},[t._v("\n    Loading...\n  ")]):s("div",{staticClass:"pt3 ph3 search-grid"},[t.empty?s("div",{staticClass:"subheadline"},[t._v("\n      sorry, i got nothing...\n    ")]):t._l(t.chunkedProds,function(t){return s("div",[s("ProductThumb",{staticClass:"tc",attrs:{prod:t}})],1)})],2),t.error?s("div",{staticClass:"subheadline pa4"},[t._v(t._s(t.errorMessage))]):t._e(),s("div",{staticClass:"search-pages h-100 pa3 dt"},[s("div",{staticClass:"dtc v-mid center tc"},t._l(t.howManyChunks,function(e){return s("router-link",{staticClass:"link black pa2 bt bb b--black hover-bg-red hover-white",attrs:{to:{path:t.$route.fullPath,query:{page:e}}}},[t._v("\n        "+t._s(e)+"\n      ")])}))])])])},lt=[],ut=!1,dt=null,ht=null,pt=null,mt=Object(d["a"])(ot,ct,lt,ut,dt,ht,pt),ft=mt.exports,vt={name:"product",data:function(){return{prod:{},pid:this.$route.params.id,loading:!1,error:!1,errorMessage:"",iOne:0,iTwo:1}},methods:{fetchProduct:function(){var t=this;this.loading=!0,nt.fetchProduct(this.pid).then(function(e){t.prod=e,t.loading=!1}).catch(function(e){t.error=!0,t.errorMessage=e.message})},incrementImgs:function(){var t=this.prod.images.length;this.iTwo+1<t&&(this.iTwo+=1,this.iOne+=1)},decrementImgs:function(){this.iOne-1>=0&&(this.iTwo-=1,this.iOne-=1)}},created:function(){this.fetchProduct()}},gt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-100"},[t.error?s("div",{staticClass:"dt w-100 h-100"},[s("div",{staticClass:"subheadline tc dtc v-mid"},[t._v("\n      This product does not exist...\n    ")])]):s("div",{staticClass:"flex w-100 h-100 items-center justify-center"},[t.loading?s("div",[s("h2",{staticClass:"tc mt5"},[t._v("loading...")])]):s("div",{staticClass:"single-product-grid mw9 center"},[s("div",{staticClass:"single-prod-img-grid pt3 pl3 pb3"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.prod.images[t.iOne],expression:"prod.images[iOne]"}],staticClass:"ba box-sizing",attrs:{alt:t.prod.id},on:{click:function(e){t.decrementImgs()}}}),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.prod.images[t.iTwo],expression:"prod.images[iTwo]"}],staticClass:"ba box-sizing",attrs:{alt:t.prod.id},on:{click:function(e){t.incrementImgs()}}})]),s("div",{staticClass:"flex flex-column pa3 h-100 justify-center"},[s("p",{staticClass:"mv3 ba tc pv2 ui-big"},[t._v(t._s(t.prod.title))]),s("p",{staticClass:"mv3 ba tc pv2 headline"},[t._v(t._s(t.prod.price)+"$")]),s("button",{staticClass:"mv3 outline btn-white btn-wide ui-big"},[t._v("BUY NOW")])])])])])},bt=[],Ct=!1,wt=null,_t=null,yt=null,xt=Object(d["a"])(vt,gt,bt,Ct,wt,_t,yt),kt=xt.exports;r["a"].use(B["a"]);var jt=new B["a"]({routes:[{path:"/",name:"home",component:V},{path:"/search",name:"search",component:ft},{path:"/product/:id",name:"product",component:kt}],mode:"history"}),Ot=s("NYxO");r["a"].use(Ot["a"]);var $t=new Ot["a"].Store({state:{},mutations:{},actions:{}}),Pt=(s("uDYd"),{formatTimestamp:function(t){var e=new Date(t);return e.toLocaleTimeString("en-US")},sortAsc:function(t){return t.sort(function(t,e){return t.price-e.price})},sortDes:function(t){return t.sort(function(t,e){return e.price-t.price})}});Object.keys(Pt).forEach(function(t){r["a"].filter(t,Pt[t])}),s("uWVs"),s("VaBq"),r["a"].config.productionTip=!0,r["a"].use(a.a,{preLoad:1,error:"dist/error.png",loading:"./assets/loading.gif",attempt:1,lazyComponent:!0}),r["a"].use(o.a),new r["a"]({router:jt,store:$t,render:function(t){return t(L)}}).$mount("#app")},"UO+i":function(t,e,s){t.exports=s.p+"img/hero-red.ba6c30ea.jpg"},VaBq:function(t,e){},sDLt:function(t,e,s){t.exports=s.p+"img/hero-blue.9cc0147c.jpg"},uWVs:function(t,e){}},[0]);
//# sourceMappingURL=app.01976a95.js.map
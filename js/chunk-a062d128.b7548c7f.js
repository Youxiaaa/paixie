(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a062d128"],{"057f":function(t,e,a){var i=a("fc6a"),s=a("241c").f,n={}.toString,r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return s(t)}catch(e){return r.slice()}};t.exports.f=function(t){return r&&"[object Window]"==n.call(t)?c(t):s(i(t))}},1799:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.pageHide?t._e():a("div",{staticClass:"d-flex justify-content-center my-5"},[a("ul",{staticClass:"pagination"},[a("li",[a("span",[a("a",{class:{pageDisabled:!t.pages.has_pre},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toPage(t.pages.current_page-1)}}},[t._v("⬅")])])]),t._l(t.pages.total_pages,(function(e){return a("li",{key:e.id,class:{pageActive:t.pages.current_page===e}},[a("a",{class:{"text-white":t.pages.current_page===e},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.toPage(e)}}},[t._v(" "+t._s(e)+" ")])])})),a("li",[a("span",[a("a",{class:{pageDisabled:!t.pages.has_next},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toPage(t.pages.current_page+1)}}},[t._v("➡")])])])],2)])])},s=[],n={data:function(){return{pages:{},pageHide:!1}},methods:{toPage:function(t){var e=this;e.$bus.$emit("toPage",t)}},created:function(){var t=this;t.$bus.$on("updatePagination",(function(e){t.pages=e})),t.$bus.$on("pageHide",(function(e){t.pageHide=e}))}},r=n,c=a("2877"),o=Object(c["a"])(r,i,s,!1,null,null,null);e["a"]=o.exports},5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b");function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},"746f":function(t,e,a){var i=a("428f"),s=a("5135"),n=a("e538"),r=a("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});s(e,t)||r(e,t,{value:n.f(t)})}},8418:function(t,e,a){"use strict";var i=a("c04e"),s=a("9bf2"),n=a("5c6c");t.exports=function(t,e,a){var r=i(e);r in t?s.f(t,r,n(0,a)):t[r]=a}},"99af":function(t,e,a){"use strict";var i=a("23e7"),s=a("d039"),n=a("e8b5"),r=a("861d"),c=a("7b0b"),o=a("50c4"),l=a("8418"),u=a("65f0"),d=a("1dde"),p=a("b622"),f=a("2d00"),m=p("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",g=f>=51||!s((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),b=d("concat"),y=function(t){if(!r(t))return!1;var e=t[m];return void 0!==e?!!e:n(t)},C=!g||!b;i({target:"Array",proto:!0,forced:C},{concat:function(t){var e,a,i,s,n,r=c(this),d=u(r,0),p=0;for(e=-1,i=arguments.length;e<i;e++)if(n=-1===e?r:arguments[e],y(n)){if(s=o(n.length),p+s>h)throw TypeError(v);for(a=0;a<s;a++,p++)a in n&&l(d,p,n[a])}else{if(p>=h)throw TypeError(v);l(d,p++,n)}return d.length=p,d}})},a434:function(t,e,a){"use strict";var i=a("23e7"),s=a("23cb"),n=a("a691"),r=a("50c4"),c=a("7b0b"),o=a("65f0"),l=a("8418"),u=a("1dde"),d=a("ae40"),p=u("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,h=Math.min,v=9007199254740991,g="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!p||!f},{splice:function(t,e){var a,i,u,d,p,f,b=c(this),y=r(b.length),C=s(t,y),_=arguments.length;if(0===_?a=i=0:1===_?(a=0,i=y-C):(a=_-2,i=h(m(n(e),0),y-C)),y+a-i>v)throw TypeError(g);for(u=o(b,i),d=0;d<i;d++)p=C+d,p in b&&l(u,d,b[p]);if(u.length=i,a<i){for(d=C;d<y-i;d++)p=d+i,f=d+a,p in b?b[f]=b[p]:delete b[f];for(d=y;d>y-i+a;d--)delete b[d-1]}else if(a>i)for(d=y-i;d>C;d--)p=d+i-1,f=d+a-1,p in b?b[f]=b[p]:delete b[f];for(d=0;d<a;d++)b[d+C]=arguments[d+2];return b.length=y-i+a,u}})},a4d3:function(t,e,a){"use strict";var i=a("23e7"),s=a("da84"),n=a("d066"),r=a("c430"),c=a("83ab"),o=a("4930"),l=a("fdbf"),u=a("d039"),d=a("5135"),p=a("e8b5"),f=a("861d"),m=a("825a"),h=a("7b0b"),v=a("fc6a"),g=a("c04e"),b=a("5c6c"),y=a("7c73"),C=a("df75"),_=a("241c"),x=a("057f"),w=a("7418"),P=a("06cf"),S=a("9bf2"),O=a("d1e7"),D=a("9112"),$=a("6eeb"),k=a("5692"),j=a("f772"),M=a("d012"),E=a("90e3"),T=a("b622"),A=a("e538"),L=a("746f"),N=a("d44e"),H=a("69f3"),U=a("b727").forEach,I=j("hidden"),J="Symbol",R="prototype",q=T("toPrimitive"),F=H.set,Q=H.getterFor(J),W=Object[R],z=s.Symbol,B=n("JSON","stringify"),G=P.f,K=S.f,V=x.f,X=O.f,Y=k("symbols"),Z=k("op-symbols"),tt=k("string-to-symbol-registry"),et=k("symbol-to-string-registry"),at=k("wks"),it=s.QObject,st=!it||!it[R]||!it[R].findChild,nt=c&&u((function(){return 7!=y(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,a){var i=G(W,e);i&&delete W[e],K(t,e,a),i&&t!==W&&K(W,e,i)}:K,rt=function(t,e){var a=Y[t]=y(z[R]);return F(a,{type:J,tag:t,description:e}),c||(a.description=e),a},ct=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},ot=function(t,e,a){t===W&&ot(Z,e,a),m(t);var i=g(e,!0);return m(a),d(Y,i)?(a.enumerable?(d(t,I)&&t[I][i]&&(t[I][i]=!1),a=y(a,{enumerable:b(0,!1)})):(d(t,I)||K(t,I,b(1,{})),t[I][i]=!0),nt(t,i,a)):K(t,i,a)},lt=function(t,e){m(t);var a=v(e),i=C(a).concat(mt(a));return U(i,(function(e){c&&!dt.call(a,e)||ot(t,e,a[e])})),t},ut=function(t,e){return void 0===e?y(t):lt(y(t),e)},dt=function(t){var e=g(t,!0),a=X.call(this,e);return!(this===W&&d(Y,e)&&!d(Z,e))&&(!(a||!d(this,e)||!d(Y,e)||d(this,I)&&this[I][e])||a)},pt=function(t,e){var a=v(t),i=g(e,!0);if(a!==W||!d(Y,i)||d(Z,i)){var s=G(a,i);return!s||!d(Y,i)||d(a,I)&&a[I][i]||(s.enumerable=!0),s}},ft=function(t){var e=V(v(t)),a=[];return U(e,(function(t){d(Y,t)||d(M,t)||a.push(t)})),a},mt=function(t){var e=t===W,a=V(e?Z:v(t)),i=[];return U(a,(function(t){!d(Y,t)||e&&!d(W,t)||i.push(Y[t])})),i};if(o||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),a=function(t){this===W&&a.call(Z,t),d(this,I)&&d(this[I],e)&&(this[I][e]=!1),nt(this,e,b(1,t))};return c&&st&&nt(W,e,{configurable:!0,set:a}),rt(e,t)},$(z[R],"toString",(function(){return Q(this).tag})),$(z,"withoutSetter",(function(t){return rt(E(t),t)})),O.f=dt,S.f=ot,P.f=pt,_.f=x.f=ft,w.f=mt,A.f=function(t){return rt(T(t),t)},c&&(K(z[R],"description",{configurable:!0,get:function(){return Q(this).description}}),r||$(W,"propertyIsEnumerable",dt,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!o,sham:!o},{Symbol:z}),U(C(at),(function(t){L(t)})),i({target:J,stat:!0,forced:!o},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var a=z(e);return tt[e]=a,et[a]=e,a},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){st=!0},useSimple:function(){st=!1}}),i({target:"Object",stat:!0,forced:!o,sham:!c},{create:ut,defineProperty:ot,defineProperties:lt,getOwnPropertyDescriptor:pt}),i({target:"Object",stat:!0,forced:!o},{getOwnPropertyNames:ft,getOwnPropertySymbols:mt}),i({target:"Object",stat:!0,forced:u((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(h(t))}}),B){var ht=!o||u((function(){var t=z();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))}));i({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,a){var i,s=[t],n=1;while(arguments.length>n)s.push(arguments[n++]);if(i=e,(f(e)||void 0!==t)&&!ct(t))return p(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!ct(e))return e}),s[1]=e,B.apply(null,s)}})}z[R][q]||D(z[R],q,z[R].valueOf),N(z,J),M[I]=!0},c975:function(t,e,a){"use strict";var i=a("23e7"),s=a("4d64").indexOf,n=a("a640"),r=a("ae40"),c=[].indexOf,o=!!c&&1/[1].indexOf(1,-0)<0,l=n("indexOf"),u=r("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:o||!l||!u},{indexOf:function(t){return o?c.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(t,e,a){var i=a("23e7"),s=a("83ab"),n=a("56ef"),r=a("fc6a"),c=a("06cf"),o=a("8418");i({target:"Object",stat:!0,sham:!s},{getOwnPropertyDescriptors:function(t){var e,a,i=r(t),s=c.f,l=n(i),u={},d=0;while(l.length>d)a=s(i,e=l[d++]),void 0!==a&&o(u,e,a);return u}})},e439:function(t,e,a){var i=a("23e7"),s=a("d039"),n=a("fc6a"),r=a("06cf").f,c=a("83ab"),o=s((function(){r(1)})),l=!c||o;i({target:"Object",stat:!0,forced:l,sham:!c},{getOwnPropertyDescriptor:function(t,e){return r(n(t),e)}})},e538:function(t,e,a){var i=a("b622");e.f=i},f61e:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("section",[a("div",{staticClass:"curtain",class:{curtainShow:t.productsIsLoading}}),a("div",{staticClass:"rightCurtain1"}),a("div",{staticClass:"rightCurtain2"})]),a("section",[a("div",{staticClass:"products-banner preProductShow",class:{productShow:t.bannerShow}},[a("vue-typer",{staticClass:"h2 product-title",attrs:{text:["不斷突破光學極限","只為了登峰造極"],repeat:1/0,shuffle:!1,"initial-action":"typing","pre-type-delay":300,"type-delay":200,"pre-erase-delay":3e3,"erase-delay":150,"erase-style":"backspace","erase-on-complete":!1,"caret-animation":"blink"}})],1)]),a("section",[a("div",{staticClass:"px-3 mt-3"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-3 preProductShow",class:{productShow:t.productShow}},[a("div",{staticClass:"sticky-top"},[a("div",{staticClass:"d-flex justify-content-center"},[a("div",{staticClass:"card sideMenu w-100 bg-light border-0 mb-5"},[a("div",{staticClass:"card-body"},[a("ul",{staticClass:"pl-0"},[a("li",{staticClass:"list-unstyled"},[a("a",{staticClass:"h5",class:{sideMenuActive:""===t.selected},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.selected=""}}},[t._v("全部商品")])]),a("li",{staticClass:"list-unstyled"},[a("a",{staticClass:"h5",class:{sideMenuActive:"相機"===t.selected},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.selected="相機"}}},[t._v("相機類")])]),a("li",{staticClass:"list-unstyled"},[a("a",{staticClass:"h5",class:{sideMenuActive:"鏡頭"===t.selected},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.selected="鏡頭"}}},[t._v("鏡頭類")])]),a("li",{staticClass:"list-unstyled"},[a("a",{staticClass:"h5",class:{sideMenuActive:"保護鏡"===t.selected},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.selected="保護鏡"}}},[t._v("濾鏡類")])]),a("li",{staticClass:"list-unstyled"},[a("a",{staticClass:"h5",class:{sideMenuActive:"攝影包"===t.selected},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.selected="攝影包"}}},[t._v("攝影包")])]),a("li",{staticClass:"list-unstyled"},[a("a",{staticClass:"h5",class:{sideMenuActive:"腳架"===t.selected},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.selected="腳架"}}},[t._v("腳架類")])]),a("li",{staticClass:"list-unstyled"},[a("a",{staticClass:"h5",class:{sideMenuActive:"記憶卡"===t.selected},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.selected="記憶卡"}}},[t._v("記憶卡")])]),a("li",{staticClass:"list-unstyled"},[a("a",{staticClass:"h5",class:{sideMenuActive:"清潔用品/防潮箱"===t.selected},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.selected="清潔用品/防潮箱"}}},[t._v("清潔用品/防潮箱")])])])])])])])]),a("div",{staticClass:"col-lg-9 my-5 pt-2 px-0"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(t.updateProducts,(function(e){return a("div",{key:e.id,staticClass:"col-6 col-md-4 col-xl-3 pt-4 px-0 preProductShow",class:{productShow:t.productShow}},[a("div",{staticClass:"products-item px-3 d-flex flex-column h-100"},[a("div",{staticClass:"d-flex justify-content-center",on:{click:function(a){return a.preventDefault(),t.openProductModal(e)}}},[a("img",{attrs:{src:e.imageUrl,alt:"",height:"130px"}})]),a("div",{staticClass:"my-2 mt-auto",on:{click:function(a){return t.openProductModal(e)}}},[a("h2",{staticClass:"h5 text-primary mt-2 titleEllipsis"},[t._v(" "+t._s(e.title)+" ")]),a("span",{staticClass:"ellipsis"},[t._v(" "+t._s(e.description)+" ")])]),a("div",{staticClass:"my-3 d-flex mt-auto",on:{click:function(a){return t.openProductModal(e)}}},[a("del",{staticClass:"h5 mr-auto align-self-center computer-item-price"},[t._v(" "+t._s(t._f("dollarSign")(e.origin_price))+" ")]),a("small",{staticClass:"text-danger h5 align-self-center computer-item-price"},[t._v(" "+t._s(t._f("dollarSign")(e.price))+" ")])]),a("del",{staticClass:"h5 ml-auto phone-item-price",on:{click:function(a){return t.openProductModal(e)}}},[t._v(" NTD"+t._s(t._f("dollarSign")(e.origin_price))+" ")]),a("small",{staticClass:"text-danger ml-auto h5 phone-item-price",on:{click:function(a){return t.openProductModal(e)}}},[t._v(" NTD"+t._s(t._f("dollarSign")(e.price))+" ")]),a("button",{staticClass:"btn btn-primary text-white py-2 mb-3",on:{click:function(a){return a.preventDefault(),t.addToCart(e)}}},[t._v("加入購物車")])])])})),0)]),a("pagination")],1)])])])]),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-xl"},[a("div",{staticClass:"modal-content product-item-modal"},[a("div",{staticClass:"modal-body"},[a("button",{staticClass:"close product-item-close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:t.closeModal}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-5 d-flex flex-column"},[a("img",{staticClass:"d-flex mx-auto mt-auto model-img",attrs:{src:t.tempProduct.imageUrl,height:"270px",alt:"商品圖片"}}),a("h2",{staticClass:"h3 text-primary mt-auto px-3 mt-auto"},[t._v(" "+t._s(t.tempProduct.title)+" ")]),a("p",{staticClass:"h6 text-secondary my-4 px-3"},[t._v(" "+t._s(t.tempProduct.description)+" ")]),a("div",{staticClass:"d-flex justify-content-end"},[a("del",{staticClass:"h5 text-secondary mr-5 d-flex align-self-center"},[t._v("原價 "+t._s(t._f("dollarSign")(t.tempProduct.origin_price*t.tempProduct.num))+" ")]),a("span",{staticClass:"h2 text-primary"},[t._v(" "+t._s(t._f("dollarSign")(t.tempProduct.price*t.tempProduct.num))+" ")])]),a("div",{staticClass:"d-flex"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.num,expression:"tempProduct.num"}],staticClass:"w-50",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.tempProduct,"num",e.target.multiple?a:a[0])}}},t._l(5,(function(e){return a("option",{key:e.id,domProps:{value:e}},[t._v("選購 "+t._s(e)+" "+t._s(t.tempProduct.unit)+" ")])})),0),a("button",{staticClass:"btn btn-primary text-white w-50 ml-3",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.addToCart(t.tempProduct,t.tempProduct.num)}}},[t._v(" 加入購物車")])])]),a("div",{staticClass:"col-xl-7 mt-3 px-5 product-content"},[a("p",{staticClass:"text-white d-inline h2 text-primary"},[t._v("產品介紹")]),a("p",{staticClass:"h6 text-secondary mt-1 lh-global my-4"},[t._v(" "+t._s(t.tempProduct.content)+" ")]),a("h3",{staticClass:"text-white d-inline h2 text-primary"},[t._v(" 購 買 前 須 知 ")]),t._m(0),a("h3",{staticClass:"text-white d-inline h2 text-primary"},[t._v("購 物 流 程")]),t._m(1),a("h3",{staticClass:"text-white d-inline h2 text-primary"},[t._v("付 款 方 式")]),t._m(2),a("h3",{staticClass:"text-white d-inline h2 text-primary"},[t._v("注 意 事 項")]),t._m(3),a("h2",{staticClass:"h6 text-danger mt-5"},[t._v("《購買前請先詳細閱讀以上事項,購買商品視同100%同意內容》")])])])])])])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"mt-4 text-secondary pl-0"},[a("li",{staticClass:"mb-4 list-unstyled"},[t._v("本賣場販售「現貨」&「追加」商品，追加款需追加7-21個工作天，工作天不包含假日，不能等待請勿下單。")]),a("li",{staticClass:"mb-4 list-unstyled"},[t._v("下單就會進行追加，下單後不接受隨意取消訂單!!!（超過追加期除外）")]),a("li",{staticClass:"mb-4 list-unstyled"},[t._v("若商品有瑕疵或寄錯問題請於24小時內私訊客服，有分尺寸商品若不合可以辦理換貨（來回運費需自付）")]),a("li",{staticClass:"mb-4 list-unstyled"},[t._v("不接受因個人因素(色差.不喜歡.不適合等問題)退貨，詳情請點 : 退換貨政策")]),a("li",{staticClass:"mb-4 list-unstyled"},[t._v('商品頁面皆提供尺寸表，請下單前仔細測量再下單，客服僅提供"建議尺寸"，但決定權在消費者。')]),a("li",{staticClass:"mb-4 list-unstyled"},[t._v("隨意棄單或無故未取包裹一律加入黑名單，若有任何問題都可以私訊客服。")]),a("li",{staticClass:"mb-4 list-unstyled"},[t._v("特價商品皆屬特賣，售出不做退換貨請見諒。")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"mt-4 text-secondary pl-0"},[a("li",{staticClass:"mb-4 list-unstyled"},[t._v("選購商品加入購物車→結帳付款(期限內繳款完畢)→等待追加7-21工作天→出貨通知(2-3日取貨)")]),a("li",{staticClass:"mb-4 list-unstyled"},[t._v("匯款完畢請務必至訂單內容留言匯款資訊(日期/金額/後五碼)")]),a("li",{staticClass:"mb-4 list-unstyled"},[t._v("下單記得登入會員，才會收到出貨的mail通知唷~")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"mt-4 text-secondary pl-0"},[a("li",{staticClass:"mb-4 list-unstyled"},[t._v("線上刷卡")]),a("li",{staticClass:"mb-4 list-unstyled"},[t._v("貨到付款")]),a("li",{staticClass:"mb-4 list-unstyled"},[t._v("ATM轉帳")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"mt-4 text-secondary pl-0"},[a("li",{staticClass:"mb-4 list-unstyled"},[t._v("請勿濫用七天鑑賞期，下單前請務必三思並詳閱退換貨政策，勿衝動購買。")]),a("li",{staticClass:"mb-4 list-unstyled"},[t._v("若尺寸不合提供一次更換尺寸的服務（自行負擔來回運費）")])])}],n=(a("99af"),a("4de4"),a("4160"),a("c975"),a("a434"),a("159b"),a("5530")),r=a("1157"),c=a.n(r),o=a("1799"),l={components:{pagination:o["a"]},data:function(){return{allProducts:[],products:[],tempProduct:{},productsIsLoading:!1,addToCartLoading:!1,selected:"",isLoading:!1,cartsData:JSON.parse(localStorage.getItem("cartsData"))||[],isClick:!1,bannerShow:!1,productShow:!1}},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("youxiaaa","/products/all"),i="".concat("https://vue-course-api.hexschool.io","/api/").concat("youxiaaa","/products?page=").concat(t);e.$http.get(a).then((function(t){e.allProducts=t.data.products,e.productsIsLoading=!0,setTimeout((function(){e.bannerShow=!0}),500),setTimeout((function(){e.productShow=!0}),1e3)})),e.$http.get(i).then((function(t){e.products=t.data.products,e.pages=t.data.pagination,e.$bus.$emit("updatePagination",t.data.pagination),setTimeout((function(){e.productShow=!0}),1e3)}))},toPage:function(t){var e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("youxiaaa","/products?page=").concat(t);e.productShow=!1,e.isLoading=!0,e.$http.get(a).then((function(t){setTimeout((function(){e.productShow=!0,e.bannerShow=!0}),200),e.isLoading=!1,e.products=t.data.products,e.pages=t.data.pagination,document.body.scrollTop=400,document.documentElement.scrollTop=400,e.$bus.$emit("updatePagination",t.data.pagination)}))},openProductModal:function(t){var e=this;e.tempProduct=Object(n["a"])({},t),e.tempproductNum=1,c()("#productModal").modal("show"),setTimeout((function(){e.productContentShow=!0}),500)},closeModal:function(){var t=this;t.tempProduct={},t.addToCartLoading=!1,c()("#productModal").modal("hide")},addToCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=this,i=[];if(!0!==a.isClick)if(a.isClick=!0,setTimeout((function(){a.isClick=!1}),1e3),a.cartsData.forEach((function(t){i.push(t.product_id)})),-1===i.indexOf(t.id)){var s={product_id:t.id,qty:e,title:t.title,imageUrl:t.imageUrl,unit:t.unit,price:t.price,content:t.content};a.cartsData.push(s),localStorage.setItem("cartsData",JSON.stringify(a.cartsData)),this.$noty.success("".concat(t.title," 已加入購物車")),c()("#productModal").modal("hide"),a.$bus.$emit("updateCart",a.cartsData)}else a.cartsData.forEach((function(e,i){if(e.product_id===t.id){var s=e.qty,n={product_id:t.id,qty:s+=a.tempProduct.num,title:t.title,imageUrl:t.imageUrl,unit:t.unit,price:t.price,content:t.content};a.cartsData.splice(i,1),a.cartsData.push(n),localStorage.setItem("cartsData",JSON.stringify(a.cartsData)),a.$noty.success("".concat(t.title," 已加入購物車")),c()("#productModal").modal("hide"),a.$bus.$emit("updateCart",a.cartsData)}}))}},computed:{updateProducts:function(){var t=this;return""===t.selected?(t.pageHide=!1,t.$bus.$emit("pageHide",!1),t.products):(t.pageHide=!0,t.$bus.$emit("pageHide",!0),t.allProducts.filter((function(e){return e.category===t.selected})))}},created:function(){var t=this;t.getProducts(),t.$bus.$on("getProducts",(function(e){t.selected=e,document.body.scrollTop=400,document.documentElement.scrollTop=400})),t.$bus.$on("toPage",(function(e){t.toPage(e)})),t.$bus.$emit("getPathName"),history.pushState(null,null,document.URL),window.addEventListener("popstate",(function(){return history.pushState(null,null,document.URL)}))}},u=l,d=a("2877"),p=Object(d["a"])(u,i,s,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-a062d128.b7548c7f.js.map
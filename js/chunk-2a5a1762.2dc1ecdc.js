(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a5a1762"],{"057f":function(t,e,a){var s=a("fc6a"),i=a("241c").f,r={}.toString,n="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return n.slice()}};t.exports.f=function(t){return n&&"[object Window]"==r.call(t)?c(t):i(s(t))}},"13d5":function(t,e,a){"use strict";var s=a("23e7"),i=a("d58f").left,r=a("a640"),n=a("ae40"),c=a("2d00"),o=a("605d"),l=r("reduce"),u=n("reduce",{1:0}),d=!o&&c>79&&c<83;s({target:"Array",proto:!0,forced:!l||!u||d},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},4127:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"content-area"},[a("navBar"),a("cart"),a("router-view"),a("backTop")],1),a("footerBar")],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",[a("nav",[a("div",{staticClass:"hamburgerMenu",class:{hamburgerMenuShow:t.hamburgerChange}},[a("div",{staticClass:"d-flex flex-column align-items-center justify-content-between hamburgerMenuList"},[a("div"),a("div",[a("ul",{staticClass:"mb-5 pl-0"},[a("li",{staticClass:"list-unstyled"},[a("a",{staticClass:"h4",class:{hamburgerTextShow:t.hamburgerChange},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toWhere("signin")}}},[t._v("登入")])]),a("li",{staticClass:"list-unstyled"},[a("a",{staticClass:"h4 my-5",class:{hamburgerTextShow:t.hamburgerChange},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toWhere("about")}}},[t._v("品牌故事")])]),a("li",{staticClass:"list-unstyled"},[a("a",{staticClass:"h4",class:{hamburgerTextShow:t.hamburgerChange},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toWhere("products")}}},[t._v("商品")])])])]),t._m(0)])]),a("div",{staticClass:"hamburgerIcon",on:{click:function(e){t.hamburgerChange=!t.hamburgerChange}}},[a("div",{staticClass:"hamburgerLine1",class:{hamburgerLine1Change:t.hamburgerChange}}),a("div",{staticClass:"hamburgerLine2",class:{hamburgerLine2Change:t.hamburgerChange}}),a("div",{staticClass:"hamburgerLine3",class:{hamburgerLine3Change:t.hamburgerChange}})]),a("div",{staticClass:"navBar",class:{navBarChange:t.isPageover10px}},[t.isHomepage?a("h1",{staticClass:"logo d-flex justify-content-center mt-1"},[a("a",{class:{logoDark:t.isPageover10px},attrs:{href:"#",title:"拍謝"},on:{click:function(e){return e.preventDefault(),t.toWhere("")}}},[t._v(" 拍謝 ")])]):t._e(),t.isHomepage?t._e():a("h1",{staticClass:"logo d-flex justify-content-center mt-1"},[a("a",{staticClass:"logoDark",attrs:{href:"#",title:"拍謝"},on:{click:function(e){return e.preventDefault(),t.toWhere("")}}},[t._v(" 拍謝 ")])]),t.isHomepage?a("div",{staticClass:"topMenu ml-auto"},[a("ul",{staticClass:"d-flex mb-0"},[a("li",{staticClass:"list-unstyled"},[a("a",{staticClass:"text-white",class:{"text-secondary":t.isPageover10px,topMenuActive:t.aboutisActive},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toWhere("about")},mouseover:function(e){t.aboutisHovering=!0},mouseout:function(e){t.aboutisHovering=!1}}},[t._v("品牌故事")])]),a("li",{staticClass:"list-unstyled"},[a("a",{staticClass:"text-white",class:{"text-secondary":t.isPageover10px,topMenuActive:t.productsisActive},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toWhere("products")},mouseover:function(e){t.productsisHovering=!0},mouseout:function(e){t.productsisHovering=!1}}},[t._v("商品")])]),a("li",{staticClass:"list-unstyled"},[a("a",{staticClass:"text-white",class:{"text-secondary":t.isPageover10px,topMenuActive:t.signinisActive},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toWhere("signin")},mouseover:function(e){t.signinisHovering=!0},mouseout:function(e){t.signinisHovering=!1}}},[t._v("登入")])])])]):t._e(),t.isHomepage?t._e():a("div",{staticClass:"topMenu ml-auto"},[a("ul",{staticClass:"d-flex mb-0"},[a("li",{staticClass:"list-unstyled"},[a("a",{class:{topMenuActive:t.aboutisActive},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toWhere("about")},mouseover:function(e){t.aboutisHovering=!0},mouseout:function(e){t.aboutisHovering=!1}}},[t._v("品牌故事")])]),a("li",{staticClass:"list-unstyled"},[a("a",{class:{topMenuActive:t.productsisActive},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toWhere("products")},mouseover:function(e){t.productsisHovering=!0},mouseout:function(e){t.productsisHovering=!1}}},[t._v("商品")])]),a("li",{staticClass:"list-unstyled"},[a("a",{class:{topMenuActive:t.signinisActive},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toWhere("signin")},mouseover:function(e){t.signinisHovering=!0},mouseout:function(e){t.signinisHovering=!1}}},[t._v("登入")])])])])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-white"},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-twitter-square fa-2x"})])])}],c=(a("baa5"),a("ac1f"),a("5319"),a("1157")),o=a.n(c),l={data:function(){return{isPageover10px:!1,isHomepage:!0,hamburgerChange:!1,aboutisHovering:!1,aboutisActive:!1,productsisHovering:!1,productsisActive:!1,signinisHovering:!1,signinisActive:!1,isTransition:!1}},methods:{toWhere:function(t){var e=this,a=window.location.href.replace(/^http:\/\/[^/]+/,""),s=a.substr(a.lastIndexOf("/",a.lastIndexOf("/")-1)+1),i=s.lastIndexOf("/"),r=decodeURI(s.substring(i+1,s.length));r!==t&&(e.hamburgerChange=!1,o()(".hamburgerMenu").removeClass("hamburgerMenuShow"),o()(".rightCurtain1").addClass("curtainShow"),o()(".rightCurtain2").addClass("curtain2Show"),setTimeout((function(){document.body.scrollTop=0,document.documentElement.scrollTop=0,e.$router.push("/".concat(t))}),1e3))},navBarchange:function(){var t=this,e=window.scrollY;o()(".navBar").each((function(){t.isPageover10px=e>10}))},onloadTopmenu:function(){var t=this,e=window.location.href.replace(/^http:\/\/[^/]+/,""),a=e.substr(e.lastIndexOf("/",e.lastIndexOf("/")-1)+1),s=a.lastIndexOf("/"),i=decodeURI(a.substring(s+1,a.length));switch(i){case"about":t.isHomepage=!1,t.aboutisActive=!0,t.productsisActive=!1,t.signinisActive=!1;break;case"products":t.isHomepage=!1,t.aboutisActive=!1,t.productsisActive=!0,t.signinisActive=!1;break;case"signin":t.isHomepage=!1,t.aboutisActive=!1,t.productsisActive=!1,t.signinisActive=!0;break;case"":t.isHomepage=!0,t.aboutisActive=!1,t.productsisActive=!1,t.signinisActive=!1;break;default:t.isHomepage=!1,t.aboutisActive=!1,t.productsisActive=!1,t.signinisActive=!1;break}}},created:function(){var t=this;t.$bus.$on("getPathName",(function(){t.onloadTopmenu()})),t.$bus.$on("toWhere",(function(e){t.toWhere(e)})),window.addEventListener("scroll",this.navBarchange),window.addEventListener("load",this.onloadTopmenu)}},u=l,d=a("2877"),f=Object(d["a"])(u,r,n,!1,null,null,null),p=f.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("footer",[s("div",{staticClass:"row footer"},[s("div",{staticClass:"col-md-4 text-center"},[s("h2",[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:a("dd8c"),alt:"footer logo",title:"拍謝"}})])]),s("p",{staticClass:"text-white my-2 h6"},[s("i",{staticClass:"fas fa-phone-alt"}),t._v(" (02)1234-5678")]),s("p",{staticClass:"text-white my-2 h6"},[s("i",{staticClass:"fas fa-map-marker-alt"}),t._v(" 台北市中山區行天宮附近")])]),s("div",{staticClass:"col-md-4 text-center d-flex justify-content-center align-items-center text-white"},[s("h2",{staticClass:"h6"},[t._v(" Copyright © 2020 YoYo游 ")])]),s("div",{staticClass:"col-md-4 d-flex justify-content-center align-items-center"},[s("a",{staticClass:"text-white socialIcon",attrs:{href:"https://www.facebook.com/YuTsungChih",target:"_blank",title:"link to facebook"}},[s("i",{staticClass:"fab fa-facebook-square fa-2x"})]),s("a",{staticClass:"text-white socialIcon",attrs:{href:"https://www.instagram.com/youxiaaaaaa/",target:"_blank",title:"link to instagram"}},[s("i",{staticClass:"fab fa-instagram fa-2x"})]),s("a",{staticClass:"text-white socialIcon",attrs:{href:"https://github.com/Youxiaaa",target:"_blank",title:"link to twitter"}},[s("i",{staticClass:"fab fa-github-square fa-2x"})])])])])])}],v={},g=Object(d["a"])(v,h,m,!1,null,null,null),b=g.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"cartIcon d-flex justify-content-center align-items-center",on:{click:function(e){t.cartIsActive=!t.cartIsActive}}},[a("i",{staticClass:"fas fa-shopping-cart text-primary"},[a("h6",[t.cartsData.length>0?a("span",{staticClass:"badge"},[t._v(" "+t._s(t.cartsData.length)+" ")]):t._e()])])]),a("div",{staticClass:"cartRight",class:{cartRightShow:t.cartIsActive}},[a("div",{staticClass:"cartArea d-flex justify-content-center"},[a("div",{staticClass:"container cartItem"},[a("div",{staticClass:"cartCloseBtn",on:{click:function(e){e.preventDefault(),t.cartIsActive=!t.cartIsActive}}},[a("i",{staticClass:"fas fa-chevron-right"})]),0!==t.cartsData.length?a("h2",{staticClass:"h2 d-flex justify-content-center text-primary my-5"},[t._v("購 物 車")]):t._e(),0===t.cartsData.length?a("div",{staticClass:"d-flex justify-content-center my-5 pt-5"},[a("vue-typer",{staticClass:"h3 typerColor",attrs:{text:["購物車目前是空的唷","點擊下方去看看新品吧"],repeat:1/0,shuffle:!1,"initial-action":"typing","pre-type-delay":300,"type-delay":200,"pre-erase-delay":3e3,"erase-delay":150,"erase-style":"backspace","erase-on-complete":!1,"caret-animation":"blink"}})],1):t._e(),t.cartsData.length>0?a("div",{staticClass:"cartOutside"},[0!==t.cartsData.length&&t.totalPrice&&t.totalPrice>1e6?a("div",{staticClass:"d-flex justify-content-center mb-3"},[a("span",{staticClass:"text-primary"},[t._v("單筆訂單金額上限為100萬元 超過100萬元仍需購買者請與我們聯絡")])]):t._e(),t.cartsData.length>0?a("table",{staticClass:"table computerSizeTable"},[t._m(0),a("tbody",t._l(t.cartsData,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"d-flex justify-content-center pt-3 pl-3"},[a("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.delCart(e)}}},[a("i",{staticClass:"fas fa-trash"})])]),a("td",{staticClass:"cartImg text-center"},[a("img",{attrs:{src:e.imageUrl,alt:"",width:"40px",height:"40px"}})]),a("td",[a("span",{staticClass:"text-secondary"},[t._v(" "+t._s(e.title)+" ")])]),a("td",{staticClass:"text-center"},[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-primary text-white",class:{pageDisabled:e.qty<=1},on:{click:function(a){return a.preventDefault(),t.onMinus(e)}}},[t._v(" - ")]),a("input",{staticClass:"text-center",attrs:{type:"number",min:"1",max:"10",disabled:""},domProps:{value:e.qty}}),a("button",{staticClass:"btn btn-primary text-white",class:{pageDisabled:t.totalPrice>1e6},on:{click:function(a){return a.preventDefault(),t.onPlus(e)}}},[t._v(" + ")])]),a("br")]),a("td",{staticClass:"text-primary text-right"},[t._v(" "+t._s(t._f("dollarSign")(e.price*e.qty))+" ")])])})),0),a("tfoot",[a("tr",[a("td",{attrs:{colspan:"5"}},[t.cartsData.length>0?a("div",{staticClass:"couponItem"},[a("div",{staticClass:"d-flex mb-2"},[a("h3",{staticClass:"d-flex align-self-center ml-auto h6 mr-5 text-secondary"},[t._v("總金額")]),a("span",{staticClass:"d-flex align-self-center h3 text-primary"},[t._v(" "+t._s(t._f("dollarSign")(t.totalPrice))+" 元整")])]),a("button",{staticClass:"btn btn-lg btn-primary text-white d-flex ml-auto",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.toCheckout(e)}}},[t._v("結帳去")])]):t._e()])])])]):t._e(),t.cartsData.length>0?a("table",{staticClass:"table phoneSizeTable"},[t._m(1),a("tbody",t._l(t.cartsData,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"d-flex justify-content-center pt-3 pl-3"},[a("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.delCart(e)}}},[a("i",{staticClass:"fas fa-trash"})])]),a("td",{staticClass:"cartImg text-center"},[a("img",{attrs:{src:e.imageUrl,alt:"",width:"40px",height:"40px"}})]),a("td",[a("span",{staticClass:"h6 mb-2 text-secondary"},[t._v(" "+t._s(e.title)+" ")]),a("br"),a("span",{staticClass:"text-primary"},[t._v(" "+t._s(t._f("dollarSign")(e.price*e.qty))+" ")]),a("br"),a("div",{staticClass:"btn-group mt-2"},[a("button",{staticClass:"btn btn-primary text-white",class:{pageDisabled:e.qty<=1},on:{click:function(a){return a.preventDefault(),t.onMinus(e)}}},[t._v(" - ")]),a("input",{staticClass:"text-center",attrs:{type:"number",min:"1",max:"10",disabled:""},domProps:{value:e.qty}}),a("button",{staticClass:"btn btn-primary text-white",class:{pageDisabled:t.totalPrice>1e6},on:{click:function(a){return a.preventDefault(),t.onPlus(e)}}},[t._v(" + ")])])])])})),0),a("tfoot",[a("tr",[a("td",{attrs:{colspan:"5"}},[t.cartsData.length>0?a("div",{staticClass:"couponItem"},[a("div",{staticClass:"d-flex mb-2"},[a("h3",{staticClass:"d-flex align-self-center ml-auto h6 mr-5 text-secondary"},[t._v("總金額")]),a("span",{staticClass:"d-flex align-self-center h4 text-primary"},[t._v(" "+t._s(t._f("dollarSign")(t.totalPrice))+" 元整")])]),a("button",{staticClass:"btn btn-lg btn-primary text-white d-flex ml-auto",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.toCheckout(e)}}},[t._v("結帳去")])]):t._e()])])])]):t._e()]):t._e(),0===t.cartsData.length?a("div",{staticClass:"cartBanner"},[a("button",{attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.toProductsPage(e)}}},[t._v("前 往 商 品 頁")])]):t._e(),0!==t.cartsData.length?a("h2",{staticClass:"d-flex justify-content-center my-5 h2 text-primary"},[t._v("推 薦 商 品")]):t._e(),0!==t.cartsData.length?a("div",{staticClass:"row"},t._l(t.products,(function(e){return a("div",{key:e.id,staticClass:"col-md-4 pt-4 px-0"},[a("div",{staticClass:"products-item px-3 mt-2 d-flex flex-column h-100"},[a("div",{staticClass:"d-flex justify-content-center",on:{click:function(a){return a.preventDefault(),t.openProductModal(e)}}},[a("img",{attrs:{src:e.imageUrl,alt:"",height:"180px"}})]),a("div",{on:{click:function(a){return t.openProductModal(e)}}},[a("h2",{staticClass:"h5 text-primary mt-2 titleEllipsis"},[t._v(" "+t._s(e.title)+" ")]),a("span",{staticClass:"ellipsis"},[t._v(" "+t._s(e.description)+" ")])]),a("div",{staticClass:"my-3 d-flex mb-auto",on:{click:function(a){return t.openProductModal(e)}}},[a("del",{staticClass:"h5 mr-auto align-self-center"},[t._v(" "+t._s(t._f("dollarSign")(e.origin_price))+" ")]),a("small",{staticClass:"text-danger h5 align-self-center"},[t._v(" "+t._s(t._f("dollarSign")(e.price))+" ")])]),a("button",{staticClass:"btn btn-primary text-white py-2 mb-3",on:{click:function(a){return a.preventDefault(),t.addToCart(e)}}},[t._v("加入購物車")])])])})),0):t._e()])])]),a("div",{staticClass:"modal fade",attrs:{id:"cartProductmodal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-xl"},[a("div",{staticClass:"modal-content product-item-modal"},[a("div",{staticClass:"modal-body"},[a("button",{staticClass:"close product-item-close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:t.closeModal}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-5 d-flex flex-column"},[a("img",{staticClass:"d-flex mx-auto mt-auto model-img",attrs:{src:t.tempProduct.imageUrl,height:"350px",alt:"..."}}),a("h2",{staticClass:"h3 text-primary mt-auto px-3"},[t._v(" "+t._s(t.tempProduct.title)+" ")]),a("p",{staticClass:"h6 text-secondary my-3 px-3"},[t._v(" "+t._s(t.tempProduct.description)+" ")]),a("div",{staticClass:"d-flex justify-content-end"},[a("del",{staticClass:"h5 text-secondary mr-5 d-flex align-self-center"},[t._v("原價 "+t._s(t._f("dollarSign")(t.tempProduct.origin_price*t.tempProduct.num))+" ")]),a("span",{staticClass:"h2 text-primary"},[t._v(" "+t._s(t._f("dollarSign")(t.tempProduct.price*t.tempProduct.num))+" ")])]),a("div",{staticClass:"d-flex"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.num,expression:"tempProduct.num"}],staticClass:"w-50",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.tempProduct,"num",e.target.multiple?a:a[0])}}},t._l(5,(function(e){return a("option",{key:e.id,domProps:{value:e}},[t._v("選購 "+t._s(e)+" "+t._s(t.tempProduct.unit)+" ")])})),0),a("button",{staticClass:"btn btn-primary text-white w-50 ml-3",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.addToCart(t.tempProduct,t.tempProduct.num)}}},[t._v(" 加入購物車")])])]),a("div",{staticClass:"col-xl-7 mt-3 px-2 product-content"},[a("p",{staticClass:"text-white d-inline px-3 h3 bg-primary"},[t._v("產 品 介 紹")]),a("p",{staticClass:"h6 text-secondary mt-1 lh-global my-4"},[t._v(" "+t._s(t.tempProduct.content)+" ")]),a("h3",{staticClass:"text-white d-inline px-3 h3 bg-primary"},[t._v("購 買 前 須 知")]),t._m(2),a("h3",{staticClass:"text-white d-inline px-3 h3 bg-primary"},[t._v("購 物 流 程")]),a("h4",{staticClass:"text-secondary h6 mt-4"},[t._v("選購商品加入購物車→結帳付款(期限內繳款完畢)→等待追加7-21工作天→出貨通知(2-3日取貨)")]),t._m(3),a("h3",{staticClass:"text-white d-inline px-3 h3 bg-primary"},[t._v("付 款 方 式")]),t._m(4),a("h3",{staticClass:"text-white d-inline px-3 h3 bg-primary"},[t._v("注 意 事 項")]),t._m(5),a("h2",{staticClass:"h6 text-danger mt-5"},[t._v("《購買前請先詳細閱讀以上事項,購買商品視同100%同意內容》")])])])])])])])],1)},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"bg-secondary text-white"},[a("th",{attrs:{width:"5%"}}),a("th",{staticClass:"cartImg",attrs:{width:"10%"}}),a("th",[t._v("品名")]),a("th",{staticClass:"text-center",attrs:{width:"15%"}},[t._v(" 數量 ")]),a("th",{attrs:{width:"10%"}},[t._v("金額")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"bg-secondary text-white"},[a("th",{attrs:{colspan:"3"}},[t._v("購物車資訊")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"mt-4 text-secondary pl-0"},[a("li",{staticClass:"mb-4 list-unstyled"},[t._v("本賣場販售「現貨」&「追加」商品，追加款需追加7-21個工作天，工作天不包含假日，不能等待請勿下單。")]),a("li",{staticClass:"mb-4 list-unstyled"},[t._v("下單就會進行追加，下單後不接受隨意取消訂單!!!（超過追加期除外）")]),a("li",{staticClass:"mb-4 list-unstyled"},[t._v("若商品有瑕疵或寄錯問題請於24小時內私訊客服，有分尺寸商品若不合可以辦理換貨（來回運費需自付）")]),a("li",{staticClass:"mb-4 list-unstyled"},[t._v("不接受因個人因素(色差.不喜歡.不適合等問題)退貨，詳情請點 : 退換貨政策")]),a("li",{staticClass:"mb-4 list-unstyled"},[t._v('商品頁面皆提供尺寸表，請下單前仔細測量再下單，客服僅提供"建議尺寸"，但決定權在消費者。')]),a("li",{staticClass:"mb-4 list-unstyled"},[t._v("隨意棄單或無故未取包裹一律加入黑名單，若有任何問題都可以私訊客服。")]),a("li",{staticClass:"mb-4 list-unstyled"},[t._v("特價商品皆屬特賣，售出不做退換貨請見諒。")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"mt-4 text-secondary pl-0"},[a("li",{staticClass:"mb-4 list-unstyled"},[t._v("匯款完畢請務必至訂單內容留言匯款資訊(日期/金額/後五碼)")]),a("li",{staticClass:"mb-4 list-unstyled"},[t._v("下單記得登入會員，才會收到出貨的mail通知唷~")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"mt-4 text-secondary pl-0"},[a("li",{staticClass:"mb-4 list-unstyled"},[t._v("線上刷卡")]),a("li",{staticClass:"mb-4 list-unstyled"},[t._v("貨到付款")]),a("li",{staticClass:"mb-4 list-unstyled"},[t._v("ATM轉帳")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"mt-4 text-secondary pl-0"},[a("li",{staticClass:"mb-4 list-unstyled"},[t._v("請勿濫用七天鑑賞期，下單前請務必三思並詳閱退換貨政策，勿衝動購買。")]),a("li",{staticClass:"mb-4 list-unstyled"},[t._v("若尺寸不合提供一次更換尺寸的服務（自行負擔來回運費）")])])}],x=(a("99af"),a("4de4"),a("4160"),a("c975"),a("13d5"),a("a434"),a("159b"),a("5530")),_={data:function(){return{carts:[],products:[],tempProduct:{},finalTotal:0,cartIsActive:!1,isLoading:!1,productsIsLoading:!1,addToCartLoading:!1,cartsData:JSON.parse(localStorage.getItem("cartsData"))||[]}},methods:{delCart:function(t){var e=this;e.cartsData.filter((function(a,s){a.product_id===t.product_id&&(e.cartsData.splice(s,1),localStorage.setItem("cartsData",JSON.stringify(e.cartsData)),e.$noty.warning("".concat(t.title," 已移除購物車")))}))},getProducts:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("youxiaaa","/products/all");t.$http.get(e).then((function(e){if(e.data.success){var a=[];e.data.products.forEach((function(e){e.price<5e3&&a.push(e),t.products=a})),t.productsIsLoading=!0}else t.$router.push("home")}))},addToCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=this,s=[];if(a.cartsData.forEach((function(t){s.push(t.product_id)})),-1===s.indexOf(t.id)){var i={product_id:t.id,qty:e,title:t.title,imageUrl:t.imageUrl,price:t.price,content:t.content};a.cartsData.push(i),localStorage.setItem("cartsData",JSON.stringify(a.cartsData)),a.$noty.success("".concat(t.title," 已加入購物車")),o()("#cartProductmodal").modal("hide")}else a.cartsData.forEach((function(e,s){if(e.product_id===t.id){var i=e.qty,r={product_id:t.id,qty:i+=1,title:t.title,imageUrl:t.imageUrl,price:t.price,content:t.content};a.cartsData.splice(s,1),a.cartsData.push(r),localStorage.setItem("cartsData",JSON.stringify(a.cartsData)),a.$noty.success("".concat(t.title," 已加入購物車")),o()("#cartProductmodal").modal("hide")}}))},openProductModal:function(t){var e=this;e.tempProduct=Object(x["a"])({},t),e.tempProduct.num=1,o()("#cartProductmodal").modal("show")},closeModal:function(){var t=this;t.tempProduct={},t.addToCartLoading=!1,o()("#cartProductmodal").modal("hide")},toCheckout:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("youxiaaa","/cart"),a=[],s=[];t.isLoading=!0,t.$http.get(e).then((function(t){s=t.data.data.carts,s.forEach((function(t){a.push(t.id)}))})).then((function(){a.forEach((function(e){t.$http.delete("".concat("https://vue-course-api.hexschool.io","/api/").concat("youxiaaa","/cart/").concat(e))}))})).then((function(){t.cartsData.forEach((function(a){var s={product_id:a.product_id,qty:a.qty};t.$http.post(e,{data:s}).then((function(e){t.isLoading=!1,t.cartIsActive=!1,t.cartsData=[],localStorage.removeItem("cartsData"),t.$router.push("checkout"),t.$bus.$emit("updateCheckout")}))}))}))},updateCart:function(t){var e=this;e.cartsData=t},onPlus:function(t){var e=this;e.cartsData.filter((function(a){a.product_id===t.product_id&&(a.qty=a.qty+1),localStorage.setItem("cartsData",JSON.stringify(e.cartsData))}))},onMinus:function(t){var e=this;t.qty<=1||e.cartsData.filter((function(a){a.product_id===t.product_id&&(a.qty=a.qty-1),localStorage.setItem("cartsData",JSON.stringify(e.cartsData))}))},toProductsPage:function(){var t=this;t.$bus.$emit("toWhere","products"),setTimeout((function(){t.cartIsActive=!1}),1e3)}},computed:{filterProducts:function(){var t=this;return t.products.filter((function(t){return t.price<5e3}))},totalPrice:function(){var t=this,e=[];return t.cartsData.forEach((function(t){e.push(parseInt(t.price*t.qty))})),e.reduce((function(t,e){return t+e}))}},created:function(){var t=this;t.getProducts(),t.$bus.$on("updateCart",(function(e){t.updateCart(e)})),history.pushState(null,null,document.URL),window.addEventListener("popstate",(function(){history.pushState(null,null,document.URL)}))}},w=_,D=Object(d["a"])(w,y,C,!1,null,null,null),A=D.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("a",{staticClass:"backTopIcon",class:{showScroolTop:t.showScrollTop},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.backTop(e)}}},[s("img",{attrs:{src:a("9b35"),alt:"backToTop-Icon",width:"60px",height:"60px"}})])])},P=[],k={data:function(){return{showScrollTop:!1}},methods:{backTop:function(){o()("html,body").animate({scrollTop:0},"500")},getScrollPos:function(){var t=this,e=o()(window).scrollTop();t.showScrollTop=e>300}},created:function(){window.addEventListener("scroll",this.getScrollPos)}},S=k,I=Object(d["a"])(S,O,P,!1,null,null,null),E=I.exports,j={components:{navBar:p,footerBar:b,cart:A,backTop:E}},T=j,M=Object(d["a"])(T,s,i,!1,null,null,null);e["default"]=M.exports},5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b");function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},"746f":function(t,e,a){var s=a("428f"),i=a("5135"),r=a("e538"),n=a("9bf2").f;t.exports=function(t){var e=s.Symbol||(s.Symbol={});i(e,t)||n(e,t,{value:r.f(t)})}},8418:function(t,e,a){"use strict";var s=a("c04e"),i=a("9bf2"),r=a("5c6c");t.exports=function(t,e,a){var n=s(e);n in t?i.f(t,n,r(0,a)):t[n]=a}},"99af":function(t,e,a){"use strict";var s=a("23e7"),i=a("d039"),r=a("e8b5"),n=a("861d"),c=a("7b0b"),o=a("50c4"),l=a("8418"),u=a("65f0"),d=a("1dde"),f=a("b622"),p=a("2d00"),h=f("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",g=p>=51||!i((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),b=d("concat"),y=function(t){if(!n(t))return!1;var e=t[h];return void 0!==e?!!e:r(t)},C=!g||!b;s({target:"Array",proto:!0,forced:C},{concat:function(t){var e,a,s,i,r,n=c(this),d=u(n,0),f=0;for(e=-1,s=arguments.length;e<s;e++)if(r=-1===e?n:arguments[e],y(r)){if(i=o(r.length),f+i>m)throw TypeError(v);for(a=0;a<i;a++,f++)a in r&&l(d,f,r[a])}else{if(f>=m)throw TypeError(v);l(d,f++,r)}return d.length=f,d}})},"9b35":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAABlBMVEUAAADsYQB5ecrtAAAAAXRSTlMAQObYZgAABEpJREFUaN7U2cFxnEAQQFFTVHmOhEAohAahEQohcNwDpl0uqfS989u0r5rj6s+Keb2WQfrxvda8/UfUIuIuqzH+rKvK4mOdz9UUn6t6M96ueLP67VayozpmVIedI1hb8T39Xf09WVdxzuqsy3u2P9pWwq3L7sdLYz1cWn1x0a+zVEPOl6ZVDFRj9UCLsQ7h9apOwBl8Aq/6BJzBM6jnoIQ56KDlUVua3T5ouqqDclQftD6qCx/VB/VRPVFP1R4WsYdX4YGIPGqR9V/ZIbYazmyGM5vhzGY4s3nVbMDBVsOZzXBmMxxsNZzZDFdnlS6+1vWqdfFFt/atM4ZQjyGiHkOdMat6Wh6Cx8AQ6jHUmWflpVk9T6vOmFU9rTpjpPVQw8vTqrN8pL801DR7KUsnf66afZYdS5q13mnW7LNsm5RlHxDtSyd/62K3LLsQSjOY0mzRbDq4PcuO9AY42ztro7MNorfMSi37JNl8TLLBgx5ElL9WZyenIvOFHKa8yN4tZ2dNbD3cnWR8UpXpozr6tUnXodOTdf8ok8xswJHNYhPcRgYbe9MMNq6EFxez9Uo7GUTAOYMNOGX+f0zZajY/+PoF4LrMbDCRmQ04MrEZ7iSDDThnsAHnDLYM7vS2DO5FBhtwzmADzhlshnOm+28yswFHNorNcJd2sZSJDTgysf0EzhlsE3DOYJs34MjEtuxfcGRNbOvRw91ksMUJHFnPNvAzzhlsY1zAkfVsLW7gyMQWARyZ2CKAIxNbBHBkYosAjkxsAZwz2AI4Z7AFcM5gC+CSDDbgyCazAQfVZDbgkgw24JzBBlySwQZclsEGHFkzG3B2g+0NjsxswJGZDThnsBmODLYOjkxswJGJzXBksHVwZGYDjsxswJGJzXBksBmODDbBfWSj2ATHz17YBEcmNuDIxCY4MtgMRwab4MjMBtxnNojNR3+RwfY3XCPzPTYbJzLfsbNxJvP9PxsXMj9NsHH9us7k2YSNnNpPOmwc+KKfm/jaGGR6CmNjI1v1TMfGSXeq6VPNrGyDDbhF2Q4bcCvZ8vAs7Dt8nqyBG5zxnA7c6IynfuBakM397xCAm5Ino+QvUHOSbf4L1BJkU//bEuB+V2sGJxDCQAA8sYAr4Uq50mJplqIdCH7yUOIzYALDwPow70FM9JOdSZ074NKKqtLBtnTH1orVD57Lfe292+5ZmtVgPPYbETsENiCW47EPYpvBEmGLwf6EzQb7ETY9gH0Jq7c9+N0ENgJ2KGwALAsseHrMI+vgOXn8DJ/FQaitcIqEhUu85WG1FO+zWKIZJceCL94qssrUYpQ1K0tboYD5fLWeZtnN6lyLeNb6HAmI5IAPTucQHFdwqmHCD85IRJTCJ6KDGc5vOOaxaRCHRrxVHUFxUsWBlsi9eA8mReOwTWRy/HIm4eMgUOSF/HI6feSQkrNMGXlyMsp7FTkrP06kthzuigyYo+JXrQuimTqKZGgtcwAAAABJRU5ErkJggg=="},a434:function(t,e,a){"use strict";var s=a("23e7"),i=a("23cb"),r=a("a691"),n=a("50c4"),c=a("7b0b"),o=a("65f0"),l=a("8418"),u=a("1dde"),d=a("ae40"),f=u("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,m=Math.min,v=9007199254740991,g="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!f||!p},{splice:function(t,e){var a,s,u,d,f,p,b=c(this),y=n(b.length),C=i(t,y),x=arguments.length;if(0===x?a=s=0:1===x?(a=0,s=y-C):(a=x-2,s=m(h(r(e),0),y-C)),y+a-s>v)throw TypeError(g);for(u=o(b,s),d=0;d<s;d++)f=C+d,f in b&&l(u,d,b[f]);if(u.length=s,a<s){for(d=C;d<y-s;d++)f=d+s,p=d+a,f in b?b[p]=b[f]:delete b[p];for(d=y;d>y-s+a;d--)delete b[d-1]}else if(a>s)for(d=y-s;d>C;d--)f=d+s-1,p=d+a-1,f in b?b[p]=b[f]:delete b[p];for(d=0;d<a;d++)b[d+C]=arguments[d+2];return b.length=y-s+a,u}})},a4d3:function(t,e,a){"use strict";var s=a("23e7"),i=a("da84"),r=a("d066"),n=a("c430"),c=a("83ab"),o=a("4930"),l=a("fdbf"),u=a("d039"),d=a("5135"),f=a("e8b5"),p=a("861d"),h=a("825a"),m=a("7b0b"),v=a("fc6a"),g=a("c04e"),b=a("5c6c"),y=a("7c73"),C=a("df75"),x=a("241c"),_=a("057f"),w=a("7418"),D=a("06cf"),A=a("9bf2"),O=a("d1e7"),P=a("9112"),k=a("6eeb"),S=a("5692"),I=a("f772"),E=a("d012"),j=a("90e3"),T=a("b622"),M=a("e538"),H=a("746f"),L=a("d44e"),N=a("69f3"),B=a("b727").forEach,q=I("hidden"),U="Symbol",J="prototype",z=T("toPrimitive"),Y=N.set,R=N.getterFor(U),W=Object[J],$=i.Symbol,F=r("JSON","stringify"),Q=D.f,G=A.f,Z=_.f,V=O.f,K=S("symbols"),X=S("op-symbols"),tt=S("string-to-symbol-registry"),et=S("symbol-to-string-registry"),at=S("wks"),st=i.QObject,it=!st||!st[J]||!st[J].findChild,rt=c&&u((function(){return 7!=y(G({},"a",{get:function(){return G(this,"a",{value:7}).a}})).a}))?function(t,e,a){var s=Q(W,e);s&&delete W[e],G(t,e,a),s&&t!==W&&G(W,e,s)}:G,nt=function(t,e){var a=K[t]=y($[J]);return Y(a,{type:U,tag:t,description:e}),c||(a.description=e),a},ct=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof $},ot=function(t,e,a){t===W&&ot(X,e,a),h(t);var s=g(e,!0);return h(a),d(K,s)?(a.enumerable?(d(t,q)&&t[q][s]&&(t[q][s]=!1),a=y(a,{enumerable:b(0,!1)})):(d(t,q)||G(t,q,b(1,{})),t[q][s]=!0),rt(t,s,a)):G(t,s,a)},lt=function(t,e){h(t);var a=v(e),s=C(a).concat(ht(a));return B(s,(function(e){c&&!dt.call(a,e)||ot(t,e,a[e])})),t},ut=function(t,e){return void 0===e?y(t):lt(y(t),e)},dt=function(t){var e=g(t,!0),a=V.call(this,e);return!(this===W&&d(K,e)&&!d(X,e))&&(!(a||!d(this,e)||!d(K,e)||d(this,q)&&this[q][e])||a)},ft=function(t,e){var a=v(t),s=g(e,!0);if(a!==W||!d(K,s)||d(X,s)){var i=Q(a,s);return!i||!d(K,s)||d(a,q)&&a[q][s]||(i.enumerable=!0),i}},pt=function(t){var e=Z(v(t)),a=[];return B(e,(function(t){d(K,t)||d(E,t)||a.push(t)})),a},ht=function(t){var e=t===W,a=Z(e?X:v(t)),s=[];return B(a,(function(t){!d(K,t)||e&&!d(W,t)||s.push(K[t])})),s};if(o||($=function(){if(this instanceof $)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=j(t),a=function(t){this===W&&a.call(X,t),d(this,q)&&d(this[q],e)&&(this[q][e]=!1),rt(this,e,b(1,t))};return c&&it&&rt(W,e,{configurable:!0,set:a}),nt(e,t)},k($[J],"toString",(function(){return R(this).tag})),k($,"withoutSetter",(function(t){return nt(j(t),t)})),O.f=dt,A.f=ot,D.f=ft,x.f=_.f=pt,w.f=ht,M.f=function(t){return nt(T(t),t)},c&&(G($[J],"description",{configurable:!0,get:function(){return R(this).description}}),n||k(W,"propertyIsEnumerable",dt,{unsafe:!0}))),s({global:!0,wrap:!0,forced:!o,sham:!o},{Symbol:$}),B(C(at),(function(t){H(t)})),s({target:U,stat:!0,forced:!o},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var a=$(e);return tt[e]=a,et[a]=e,a},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),s({target:"Object",stat:!0,forced:!o,sham:!c},{create:ut,defineProperty:ot,defineProperties:lt,getOwnPropertyDescriptor:ft}),s({target:"Object",stat:!0,forced:!o},{getOwnPropertyNames:pt,getOwnPropertySymbols:ht}),s({target:"Object",stat:!0,forced:u((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(m(t))}}),F){var mt=!o||u((function(){var t=$();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))}));s({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,a){var s,i=[t],r=1;while(arguments.length>r)i.push(arguments[r++]);if(s=e,(p(e)||void 0!==t)&&!ct(t))return f(e)||(e=function(t,e){if("function"==typeof s&&(e=s.call(this,t,e)),!ct(e))return e}),i[1]=e,F.apply(null,i)}})}$[J][z]||P($[J],z,$[J].valueOf),L($,U),E[q]=!0},baa5:function(t,e,a){var s=a("23e7"),i=a("e58c");s({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},c975:function(t,e,a){"use strict";var s=a("23e7"),i=a("4d64").indexOf,r=a("a640"),n=a("ae40"),c=[].indexOf,o=!!c&&1/[1].indexOf(1,-0)<0,l=r("indexOf"),u=n("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:o||!l||!u},{indexOf:function(t){return o?c.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},d58f:function(t,e,a){var s=a("1c0b"),i=a("7b0b"),r=a("44ad"),n=a("50c4"),c=function(t){return function(e,a,c,o){s(a);var l=i(e),u=r(l),d=n(l.length),f=t?d-1:0,p=t?-1:1;if(c<2)while(1){if(f in u){o=u[f],f+=p;break}if(f+=p,t?f<0:d<=f)throw TypeError("Reduce of empty array with no initial value")}for(;t?f>=0:d>f;f+=p)f in u&&(o=a(o,u[f],f,l));return o}};t.exports={left:c(!1),right:c(!0)}},dbb4:function(t,e,a){var s=a("23e7"),i=a("83ab"),r=a("56ef"),n=a("fc6a"),c=a("06cf"),o=a("8418");s({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,a,s=n(t),i=c.f,l=r(s),u={},d=0;while(l.length>d)a=i(s,e=l[d++]),void 0!==a&&o(u,e,a);return u}})},dd8c:function(t,e,a){t.exports=a.p+"img/footer-logo.490042ea.svg"},e439:function(t,e,a){var s=a("23e7"),i=a("d039"),r=a("fc6a"),n=a("06cf").f,c=a("83ab"),o=i((function(){n(1)})),l=!c||o;s({target:"Object",stat:!0,forced:l,sham:!c},{getOwnPropertyDescriptor:function(t,e){return n(r(t),e)}})},e538:function(t,e,a){var s=a("b622");e.f=s},e58c:function(t,e,a){"use strict";var s=a("fc6a"),i=a("a691"),r=a("50c4"),n=a("a640"),c=a("ae40"),o=Math.min,l=[].lastIndexOf,u=!!l&&1/[1].lastIndexOf(1,-0)<0,d=n("lastIndexOf"),f=c("indexOf",{ACCESSORS:!0,1:0}),p=u||!d||!f;t.exports=p?function(t){if(u)return l.apply(this,arguments)||0;var e=s(this),a=r(e.length),n=a-1;for(arguments.length>1&&(n=o(n,i(arguments[1]))),n<0&&(n=a+n);n>=0;n--)if(n in e&&e[n]===t)return n||0;return-1}:l}}]);
//# sourceMappingURL=chunk-2a5a1762.2dc1ecdc.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22bd1791"],{8418:function(t,e,a){"use strict";var s=a("c04e"),r=a("9bf2"),i=a("5c6c");t.exports=function(t,e,a){var o=s(e);o in t?r.f(t,o,i(0,a)):t[o]=a}},9574:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",[a("div",{staticClass:"rightCurtain1",class:{curtainShow:t.isCheckout}}),a("div",{staticClass:"rightCurtain2",class:{curtain2Show:t.isCheckout}})]),0!==t.cartsLen?a("div",{staticClass:"d-flex justify-content-center mt-3 mb-2 pt-5"},[a("h2",{staticClass:"text-primary h2 mt-5"},[t._v("S T E P 1 . 填 寫 訂 單")])]):t._e(),0==t.cartsLen?a("section",[a("div",{staticClass:"d-flex justify-content-center mt-5 py-5"},[a("vue-typer",{staticClass:"h3 typerColor",attrs:{text:["購物車是空的唷","點擊下方看看商品如何"],repeat:1/0,shuffle:!1,"initial-action":"typing","pre-type-delay":300,"type-delay":200,"pre-erase-delay":3e3,"erase-delay":150,"erase-style":"backspace","erase-on-complete":!1,"caret-animation":"blink"}})],1),a("div",{staticClass:"d-flex justify-content-center my-5 py-5"},[a("a",{staticClass:"h2",attrs:{href:"#"},on:{click:function(e){return t.toProductsPage("products")}}},[t._v("點我去看商品")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")])]):t._e(),0!==t.cartsLen?a("section",[a("div",{staticClass:"container my-4 pt-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-7 px-5 bg-light"},[a("validation-observer",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.invalid;return[a("form",{staticClass:"mt-5",on:{submit:function(e){return e.preventDefault(),t.checkOut(t.payMethods)}}},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("div",{staticClass:"form-group"},[a("label",{staticClass:"mb-2",attrs:{for:"name"}},[t._v("姓名")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.checkoutData.user.name,expression:"checkoutData.user.name"}],staticClass:"form-control",class:r,attrs:{id:"name",type:"text",name:"姓名"},domProps:{value:t.checkoutData.user.name},on:{input:function(e){e.target.composing||t.$set(t.checkoutData.user,"name",e.target.value)}}}),a("span",{staticClass:"invalid-feedback"},[t._v(" "+t._s(s[0])+" ")])])]}}],null,!0)}),a("validation-provider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("div",{staticClass:"form-group mt-3"},[a("label",{staticClass:"mb-2",attrs:{for:"email"}},[t._v("電子信箱")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.checkoutData.user.email,expression:"checkoutData.user.email"}],staticClass:"form-control",class:r,attrs:{id:"email",type:"email",name:"電子信箱"},domProps:{value:t.checkoutData.user.email},on:{input:function(e){e.target.composing||t.$set(t.checkoutData.user,"email",e.target.value)}}}),a("span",{staticClass:"invalid-feedback"},[t._v(" "+t._s(s[0])+" ")])])]}}],null,!0)}),a("validation-provider",{attrs:{rules:"required|min:8"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("div",{staticClass:"form-group mt-3"},[a("label",{staticClass:"mb-2",attrs:{for:"tel"}},[t._v("連絡電話")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.checkoutData.user.tel,expression:"checkoutData.user.tel"}],staticClass:"form-control",class:r,attrs:{id:"tel",maxlength:"10",type:"tel",name:"連絡電話"},domProps:{value:t.checkoutData.user.tel},on:{input:function(e){e.target.composing||t.$set(t.checkoutData.user,"tel",e.target.value)}}}),a("span",{staticClass:"invalid-feedback"},[t._v(" "+t._s(s[0])+" ")])])]}}],null,!0)}),a("div",{staticClass:"form-group mt-3"},[a("label",{staticClass:"mb-2",attrs:{for:""}},[t._v("付款方式")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.payMethods,expression:"payMethods"}],staticClass:"form-control",attrs:{name:"payMethods",id:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.payMethods=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("請選擇付款方式")]),a("option",{attrs:{value:"creditCard"}},[t._v("線上刷卡")]),a("option",{attrs:{value:"cash"}},[t._v("貨到付款")]),a("option",{attrs:{value:"ATM"}},[t._v("ATM轉帳")])])]),"creditCard"===t.payMethods?a("validation-provider",{attrs:{rules:"required|min:16"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group mt-3 col-md-12"},[a("label",{staticClass:"mb-2",attrs:{for:"creditcard"}},[t._v("信用卡卡號")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.creditCardCode,expression:"creditCardCode"}],staticClass:"form-control",class:r,attrs:{id:"creditcard",type:"tel",maxlength:"16",name:"信用卡卡號"},domProps:{value:t.creditCardCode},on:{input:function(e){e.target.composing||(t.creditCardCode=e.target.value)}}}),a("span",{staticClass:"invalid-feedback"},[t._v(" "+t._s(s[0])+" ")])])])]}}],null,!0)}):t._e(),"creditCard"===t.payMethods?a("validation-provider",{attrs:{rules:"required|min:3"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("div",{staticClass:"form-row d-flex flex-row-reverse"},[a("div",{staticClass:"form-group mt-3 col-md-4"},[a("label",{staticClass:"mb-2",attrs:{for:"securityCode"}},[t._v("安全碼")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.securityCode,expression:"securityCode"}],staticClass:"form-control",class:r,attrs:{id:"securityCode",type:"tel",maxlength:"3",name:"安全碼"},domProps:{value:t.securityCode},on:{input:function(e){e.target.composing||(t.securityCode=e.target.value)}}}),a("span",{staticClass:"invalid-feedback"},[t._v(" "+t._s(s[0])+" ")])]),a("div",{staticClass:"form-group mt-3 col-md-4"},[a("label",{staticClass:"mb-2"},[t._v("年")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.expiryYear,expression:"expiryYear"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.expiryYear=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"2021",selected:""}},[t._v("2021年")]),t._l(10,(function(e){return a("option",{key:e.id,domProps:{value:e}},[t._v(" "+t._s(e+2021)+"年")])}))],2)]),a("div",{staticClass:"form-group mt-3 col-md-4"},[a("label",{staticClass:"mb-2"},[t._v("月")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.expiryMonth,expression:"expiryMonth"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.expiryMonth=e.target.multiple?a:a[0]}}},t._l(12,(function(e){return a("option",{key:e.id,domProps:{value:e}},[t._v(" "+t._s(e)+"月")])})),0)])])]}}],null,!0)}):t._e(),a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("div",{staticClass:"form-group mt-3"},[a("label",{staticClass:"mb-2",attrs:{for:"address"}},[t._v("收件人地址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.checkoutData.user.address,expression:"checkoutData.user.address"}],staticClass:"form-control",class:r,attrs:{id:"address",type:"address",name:"收件人地址"},domProps:{value:t.checkoutData.user.address},on:{input:function(e){e.target.composing||t.$set(t.checkoutData.user,"address",e.target.value)}}}),a("span",{staticClass:"invalid-feedback"},[t._v(" "+t._s(s[0])+" ")])])]}}],null,!0)}),a("div",{staticClass:"form-group"},[a("label",{staticClass:"mb-2",attrs:{for:"textArea"}},[t._v("留言")]),a("br"),a("div",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.checkoutData.message,expression:"checkoutData.message"}],staticStyle:{width:"100%"},attrs:{name:"textArea",id:"textArea",cols:"30",rows:"10"},domProps:{value:t.checkoutData.message},on:{input:function(e){e.target.composing||t.$set(t.checkoutData,"message",e.target.value)}}})])]),a("div",{staticClass:"d-flex justify-content-end"},[a("button",{staticClass:"btn btn-primary text-white mb-3",class:{pageDisabled:!t.payMethods},attrs:{type:"submit",disabled:s}},[t._v("下一步 : 確認訂單")])])],1)]}}],null,!1,1577131593)})],1),a("div",{staticClass:"col-md-5"},[a("div",{staticClass:"card",staticStyle:{width:"100%"}},[t._m(0),a("div",{staticClass:"card-body"},[a("div",{staticClass:"d-flex justify-content-between px-3 my-4"},[a("h3",{staticClass:"card-subtitle text-muted"},[t._v("訂單數量")]),a("p",{staticClass:"card-subtitle text-muted"},[t._v(" "+t._s(t.cartsLen)+" / 件")])]),a("div",{staticClass:"d-flex justify-content-between px-3"},[a("h3",{staticClass:"card-subtitle text-muted"},[t._v("總金額")]),a("p",{staticClass:"card-subtitle text-muted"},[a("span",{staticClass:"text-primary h5 font-weight-bold"},[t._v(" "+t._s(t._f("dollarSign")(t.carts.final_total))+" ")]),t._v("元整")])])]),t._m(1)])])])])]):t._e()])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header p-3"},[a("h5",{staticClass:"card-title text-secondary h5 d-flex align-self-center mb-0"},[t._v("訂 單 說 明")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-footer bg-white"},[a("h2",{staticClass:"text-primary h5"},[t._v("配送注意事項")]),a("ul",{staticClass:"listFix"},[a("li",{staticClass:"my-3 text-secondary"},[t._v("依運送地區遠近不同，酌收運費")]),a("li",{staticClass:"my-3 text-secondary"},[t._v("特殊地形限制之偏遠山區鄉鎮無法送貨時，本公司保有出貨與否權利。")]),a("li",{staticClass:"my-3 text-secondary"},[t._v("須與貨運公司配送車次搭配安排。")]),a("li",{staticClass:"my-3 text-secondary"},[t._v("如無標註『免運』商品，均需酌收貨運費用。")]),a("li",{staticClass:"my-3 text-secondary"},[t._v("如有急件需求，請先與我們溝通貨品與運送時間，以免產生不必要的糾紛。")]),a("li",{staticClass:"my-3 text-secondary"},[t._v("若遇特殊情況不能配送(颱風、地震、水災等)，請體諒配送人員擇日再行運送。")])])])}],i=(a("99af"),{data:function(){return{checkoutData:{user:{name:"",email:"",tel:"",address:""},message:""},carts:[],cartsLen:1,payMethods:"",creditCardCode:"",securityCode:"",expiryMonth:1,expiryYear:2021,isCheckout:!1}},methods:{getCart:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("youxiaaa","/cart");t.$http.get(e).then((function(e){e.data.success&&(t.carts=e.data.data,t.cartsLen=e.data.data.carts.length)}))},checkOut:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("youxiaaa","/order");t.isCheckout=!0,t.$http.post(e,{data:t.checkoutData}).then((function(e){e.data.success?(t.$bus.$emit("updateCart"),setTimeout((function(){t.$router.push("checkOrder/".concat(e.data.orderId))}),500),setTimeout((function(){t.$bus.$emit("PayMethod",t.payMethods)}),520)):alert("訂單發生錯誤")}))},toProductsPage:function(t){var e=this;e.$bus.$emit("toWhere",t)}},created:function(){var t=this;t.getCart(),t.$bus.$on("updateCheckout",(function(){t.getCart()})),document.body.scrollTop=0,document.documentElement.scrollTop=0}}),o=i,c=a("2877"),l=Object(c["a"])(o,s,r,!1,null,null,null);e["default"]=l.exports},"99af":function(t,e,a){"use strict";var s=a("23e7"),r=a("d039"),i=a("e8b5"),o=a("861d"),c=a("7b0b"),l=a("50c4"),n=a("8418"),u=a("65f0"),d=a("1dde"),m=a("b622"),v=a("2d00"),p=m("isConcatSpreadable"),f=9007199254740991,h="Maximum allowed index exceeded",C=v>=51||!r((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),y=d("concat"),b=function(t){if(!o(t))return!1;var e=t[p];return void 0!==e?!!e:i(t)},_=!C||!y;s({target:"Array",proto:!0,forced:_},{concat:function(t){var e,a,s,r,i,o=c(this),d=u(o,0),m=0;for(e=-1,s=arguments.length;e<s;e++)if(i=-1===e?o:arguments[e],b(i)){if(r=l(i.length),m+r>f)throw TypeError(h);for(a=0;a<r;a++,m++)a in i&&n(d,m,i[a])}else{if(m>=f)throw TypeError(h);n(d,m++,i)}return d.length=m,d}})}}]);
//# sourceMappingURL=chunk-22bd1791.514b1742.js.map
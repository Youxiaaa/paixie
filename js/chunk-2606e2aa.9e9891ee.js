(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2606e2aa"],{"796f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("section",[a("div",{staticClass:"table-responsive mt-5 pt-5"},[a("table",{staticClass:"table table-hover tableResponsiveFix"},[t._m(0),a("tbody",t._l(t.orders,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"text-secondary"},[t._v(" "+t._s(e.id)+" ")]),a("td",{staticClass:"text-secondary"},[a("ul",t._l(e.products,(function(e){return a("li",{key:e.id},[t._v(" "+t._s(e.product.title)+" ")])})),0)]),a("td",{staticClass:"text-secondary"},[t._v(" "+t._s(t._f("filterDate")(e.paid_date))+" ")]),a("td",[e.is_paid?a("span",{staticClass:"text-success"},[t._v("已付款")]):t._e(),e.is_paid?t._e():a("span",{staticClass:"text-danger"},[t._v("未付款")])]),a("td",{staticClass:"text-right text-danger"},[t._v(" "+t._s(t._f("dollarSign")(e.total))+" ")])])})),0)])])]),a("section",[a("div",{staticClass:"d-flex justify-content-center mb-5"},[a("ul",{staticClass:"pagination"},[a("li",[a("span",[a("a",{class:{pageDisabled:!t.pagination.has_pre},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getOrders(t.pagination.current_page-1)}}},[t._v("⬅")])])]),t._l(t.pagination.total_pages,(function(e){return a("li",{key:e.id,class:{pageActive:t.pagination.current_page===e}},[a("a",{class:{"text-white":t.pagination.current_page===e},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getOrders(e)}}},[t._v(" "+t._s(e)+" ")])])})),a("li",[a("span",[a("a",{class:{pageDisabled:!t.pagination.has_next},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getOrders(t.pagination.current_page+1)}}},[t._v("➡")])])])],2)])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("訂單編號")]),a("th",[t._v("產品名稱")]),a("th",[t._v("訂購日期")]),a("th",[t._v("付款狀態")]),a("th",[t._v("總金額")])])])}],r=(a("99af"),{data:function(){return{isLoading:!1,orders:[],pagination:{}}},methods:{getOrders:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("youxiaaa","/admin/orders?page=").concat(t);e.isLoading=!0,e.$http.get(a).then((function(t){e.isLoading=!1,t.data.success&&(e.orders=t.data.orders,e.pagination=t.data.pagination)}))}},created:function(){this.getOrders()}}),s=r,c=a("2877"),o=Object(c["a"])(s,n,i,!1,null,null,null);e["default"]=o.exports},8418:function(t,e,a){"use strict";var n=a("c04e"),i=a("9bf2"),r=a("5c6c");t.exports=function(t,e,a){var s=n(e);s in t?i.f(t,s,r(0,a)):t[s]=a}},"99af":function(t,e,a){"use strict";var n=a("23e7"),i=a("d039"),r=a("e8b5"),s=a("861d"),c=a("7b0b"),o=a("50c4"),d=a("8418"),l=a("65f0"),u=a("1dde"),p=a("b622"),f=a("2d00"),g=p("isConcatSpreadable"),_=9007199254740991,v="Maximum allowed index exceeded",h=f>=51||!i((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),b=u("concat"),x=function(t){if(!s(t))return!1;var e=t[g];return void 0!==e?!!e:r(t)},y=!h||!b;n({target:"Array",proto:!0,forced:y},{concat:function(t){var e,a,n,i,r,s=c(this),u=l(s,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(r=-1===e?s:arguments[e],x(r)){if(i=o(r.length),p+i>_)throw TypeError(v);for(a=0;a<i;a++,p++)a in r&&d(u,p,r[a])}else{if(p>=_)throw TypeError(v);d(u,p++,r)}return u.length=p,u}})}}]);
//# sourceMappingURL=chunk-2606e2aa.9e9891ee.js.map
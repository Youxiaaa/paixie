(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-adb7f2a2"],{8418:function(t,e,a){"use strict";var o=a("c04e"),i=a("9bf2"),s=a("5c6c");t.exports=function(t,e,a){var r=o(e);r in t?i.f(t,r,s(0,a)):t[r]=a}},"99af":function(t,e,a){"use strict";var o=a("23e7"),i=a("d039"),s=a("e8b5"),r=a("861d"),c=a("7b0b"),n=a("50c4"),d=a("8418"),l=a("65f0"),u=a("1dde"),p=a("b622"),m=a("2d00"),v=p("isConcatSpreadable"),f=9007199254740991,g="Maximum allowed index exceeded",h=m>=51||!i((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),b=u("concat"),_=function(t){if(!r(t))return!1;var e=t[v];return void 0!==e?!!e:s(t)},P=!h||!b;o({target:"Array",proto:!0,forced:P},{concat:function(t){var e,a,o,i,s,r=c(this),u=l(r,0),p=0;for(e=-1,o=arguments.length;e<o;e++)if(s=-1===e?r:arguments[e],_(s)){if(i=n(s.length),p+i>f)throw TypeError(g);for(a=0;a<i;a++,p++)a in s&&d(u,p,s[a])}else{if(p>=f)throw TypeError(g);d(u,p++,s)}return u.length=p,u}})},d8be:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"container-fluid mt-5 pt-5"},[a("div",{staticClass:"d-flex justify-content-end mb-3"},[a("button",{staticClass:"btn btn-info text-white px-4",on:{click:function(e){return e.preventDefault(),t.openProductModal(!0)}}},[t._v("新增商品")])]),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-hover tableResponsiveFix"},[t._m(0),a("tbody",t._l(t.products,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"tableSmRemove"},[a("img",{attrs:{src:e.imageUrl,alt:"",width:"100px",height:"100px"}})]),a("td",[t._v(" "+t._s(e.title)+" ")]),a("td",{staticClass:"text-right"},[t._v(" "+t._s(t._f("dollarSign")(e.origin_price))+" ")]),a("td",{staticClass:"text-right text-primary font-weight-bold"},[t._v(" "+t._s(t._f("dollarSign")(e.price))+" ")]),a("td",{staticClass:"text-center"},[e.is_enabled?a("span",{staticClass:"text-success"},[t._v("是")]):t._e(),e.is_enabled?t._e():a("span",{staticClass:"text-danger"},[t._v("否")])]),a("td",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-info text-white",on:{click:function(a){return a.preventDefault(),t.openProductModal(!1,e)}}},[t._v(" 編輯 ")]),a("button",{staticClass:"btn btn-outline-danger",on:{click:function(a){return a.preventDefault(),t.openDelproductModal(e)}}},[t._v(" 刪除 ")])])])})),0)])])]),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"mb-2",attrs:{for:"image"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl,expression:"tempProduct.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"imageUrl",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"mb-2",attrs:{for:"customFile"}},[t._v("或 上傳圖片 ")]),t.fileUploadedStatus?a("i",{staticClass:"fas fa-spinner fa-pulse"}):t._e(),a("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFile}})]),a("img",{staticClass:"img-fluid",attrs:{src:t.tempProduct.imageUrl,alt:""}})]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入分類"},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入產品描述"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("說明內容")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入產品說明內容"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_enabled","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t._q(t.tempProduct.is_enabled,1)},on:{change:function(e){var a=t.tempProduct.is_enabled,o=e.target,i=o.checked?1:0;if(Array.isArray(a)){var s=null,r=t._i(a,s);o.checked?r<0&&t.$set(t.tempProduct,"is_enabled",a.concat([s])):r>-1&&t.$set(t.tempProduct,"is_enabled",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.tempProduct,"is_enabled",i)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v(" 是否啟用 ")])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary text-white",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.updateProduct(e)}}},[t.updateProductLoadingIcon?a("i",{staticClass:"fas fa-spinner fa-pulse"}):t._e(),t._v(" 確認")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),a("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" 商品(刪除後將無法恢復)。 ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.delProduct(t.tempProduct.id)}}},[t._v("確認刪除")])])])])]),a("section",[a("div",{staticClass:"d-flex justify-content-center mb-5"},[a("ul",{staticClass:"pagination"},[a("li",[a("span",[a("a",{class:{pageDisabled:!t.pagination.has_pre},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getProducts(t.pagination.current_page-1)}}},[t._v("⬅")])])]),t._l(t.pagination.total_pages,(function(e){return a("li",{key:e.id,class:{pageActive:t.pagination.current_page===e}},[a("a",{class:{"text-white":t.pagination.current_page===e},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getProducts(e)}}},[t._v(" "+t._s(e)+" ")])])})),a("li",[a("span",[a("a",{class:{pageDisabled:!t.pagination.has_next},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getProducts(t.pagination.current_page+1)}}},[t._v("➡")])])])],2)])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"tableSmRemove",attrs:{width:"15%"}}),a("th",[t._v("商品名稱")]),a("th",{attrs:{width:"10%"}},[t._v("原價")]),a("th",{attrs:{width:"10%"}},[t._v("售價")]),a("th",{staticClass:"text-center",attrs:{width:"15%"}},[t._v("是否啟用")]),a("th",{staticClass:"text-center",attrs:{width:"15%"}},[t._v("編輯")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-primary text-white"},[a("h5",{staticClass:"modal-title h4",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("新增產品")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],s=(a("99af"),a("1157")),r=a.n(s),c={data:function(){return{isNew:!1,products:[],tempProduct:{},pagination:{},fileUploadedStatus:!1,updateProductLoadingIcon:!1,isLoading:!1}},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("youxiaaa","/admin/products?page=").concat(t),a=this;a.isLoading=!0,a.$http.get(e).then((function(t){a.isLoading=!1,t.data.success?(a.products=t.data.products,a.pagination=t.data.pagination,r()(".curtain").addClass("curtainShow")):alert("商品資料讀取失敗")}))},openProductModal:function(t,e){var a=this;t?(a.tempProduct={},a.isNew=!0):(a.tempProduct=Object.assign({},e),a.isNew=!1),r()("#productModal").modal("show")},openDelproductModal:function(t){var e=this;e.tempProduct=t,r()("#delProductModal").modal("show")},updateProduct:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("youxiaaa","/admin/product"),a="post";t.isLoading=!0,t.updateProductLoadingIcon=!0,!1===t.isNew&&(e="".concat("https://vue-course-api.hexschool.io","/api/").concat("youxiaaa","/admin/product/").concat(this.tempProduct.id),a="put"),t.$http[a](e,{data:t.tempProduct}).then((function(e){t.isLoading=!1,e.data.success?(t.updateProductLoadingIcon=!1,r()("#productModal").modal("hide"),t.getProducts()):(t.updateProductLoadingIcon=!1,r()("#productModal").modal("hide"),alert("商品更新失敗"))}))},delProduct:function(t){var e=this,a=this,o="".concat("https://vue-course-api.hexschool.io","/api/").concat("youxiaaa","/admin/product/").concat(t);a.isLoading=!0,a.$http.delete(o).then((function(t){a.isLoading=!1,t.data.success?(console.log(t.data.message),e.getProducts(),r()("#delProductModal").modal("hide")):(r()("#delProductModal").modal("hide"),console.log(t.data.message))}))},uploadFile:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("youxiaaa","/admin/upload"),a=t.$refs.files.files[0],o=new FormData;t.fileUploadedStatus=!0,t.tempProduct.imageUrl="",o.append("file-to-upload",a),t.$http.post(e,o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){e.data.success?(t.fileUploadedStatus=!1,t.$set(t.tempProduct,"imageUrl",e.data.imageUrl)):(t.fileUploadedStatus=!1,alert(e.data.message.message))}))}},created:function(){this.getProducts()}},n=c,d=a("2877"),l=Object(d["a"])(n,o,i,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-adb7f2a2.3bdfe07c.js.map
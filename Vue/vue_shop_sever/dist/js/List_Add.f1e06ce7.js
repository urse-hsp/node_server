(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["List_Add"],{1276:function(e,t,a){"use strict";var r=a("d784"),n=a("44e7"),o=a("825a"),s=a("1d80"),i=a("4840"),l=a("8aa5"),c=a("50c4"),u=a("14c3"),d=a("9263"),p=a("d039"),g=[].push,m=Math.min,f=4294967295,h=!p((function(){return!RegExp(f,"y")}));r("split",2,(function(e,t,a){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,a){var r=String(s(this)),o=void 0===a?f:a>>>0;if(0===o)return[];if(void 0===e)return[r];if(!n(e))return t.call(r,e,o);var i,l,c,u=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,h=new RegExp(e.source,p+"g");while(i=d.call(h,r)){if(l=h.lastIndex,l>m&&(u.push(r.slice(m,i.index)),i.length>1&&i.index<r.length&&g.apply(u,i.slice(1)),c=i[0].length,m=l,u.length>=o))break;h.lastIndex===i.index&&h.lastIndex++}return m===r.length?!c&&h.test("")||u.push(""):u.push(r.slice(m)),u.length>o?u.slice(0,o):u}:"0".split(void 0,0).length?function(e,a){return void 0===e&&0===a?[]:t.call(this,e,a)}:t,[function(t,a){var n=s(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,n,a):r.call(String(n),t,a)},function(e,n){var s=a(r,e,this,n,r!==t);if(s.done)return s.value;var d=o(e),p=String(this),g=i(d,RegExp),b=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(h?"y":"g"),x=new g(h?d:"^(?:"+d.source+")",v),_=void 0===n?f:n>>>0;if(0===_)return[];if(0===p.length)return null===u(x,p)?[p]:[];var y=0,w=0,k=[];while(w<p.length){x.lastIndex=h?w:0;var I,E=u(x,h?p:p.slice(w));if(null===E||(I=m(c(x.lastIndex+(h?0:w)),p.length))===y)w=l(p,w,b);else{if(k.push(p.slice(y,w)),k.length===_)return k;for(var R=1;R<=E.length-1;R++)if(k.push(E[R]),k.length===_)return k;w=y=I}}return k.push(p.slice(y)),k}]}),!h)},"14c3":function(e,t,a){var r=a("c6b6"),n=a("9263");e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var o=a.call(e,t);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"273e":function(e,t,a){},"44e7":function(e,t,a){var r=a("861d"),n=a("c6b6"),o=a("b622"),s=o("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==n(e))}},"4f9b":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("商品管理")]),a("el-breadcrumb-item",[e._v("添加商品")])],1),a("el-card",[a("el-alert",{attrs:{title:"添加商品信息",type:"info",center:"","show-icon":"",closable:!1}}),a("el-steps",{attrs:{space:200,active:e.activeIndex-0,"finish-status":"success","align-center":""}},[a("el-step",{attrs:{title:"基本信息"}}),a("el-step",{attrs:{title:"商品参数"}}),a("el-step",{attrs:{title:"商品属性"}}),a("el-step",{attrs:{title:"商品图片"}}),a("el-step",{attrs:{title:"商品内容"}}),a("el-step",{attrs:{title:"完成"}})],1),a("el-form",{ref:"addFormRef",attrs:{model:e.addForm,rules:e.addFormRules,"label-width":"100px","label-position":"top"}},[a("el-tabs",{attrs:{"tab-position":"left","before-leave":e.beforeTabLeave},on:{"tab-click":e.tabClicked},model:{value:e.activeIndex,callback:function(t){e.activeIndex=t},expression:"activeIndex"}},[a("el-tab-pane",{attrs:{label:"基本信息",name:"0"}},[a("el-form-item",{attrs:{label:"商品名称",prop:"goods_name"}},[a("el-input",{model:{value:e.addForm.goods_name,callback:function(t){e.$set(e.addForm,"goods_name",t)},expression:"addForm.goods_name"}})],1),a("el-form-item",{attrs:{label:"商品价格",prop:"goods_price"}},[a("el-input",{attrs:{type:"number"},model:{value:e.addForm.goods_price,callback:function(t){e.$set(e.addForm,"goods_price",t)},expression:"addForm.goods_price"}})],1),a("el-form-item",{attrs:{label:"商品重量",prop:"goods_weight"}},[a("el-input",{model:{value:e.addForm.goods_weight,callback:function(t){e.$set(e.addForm,"goods_weight",t)},expression:"addForm.goods_weight"}})],1),a("el-form-item",{attrs:{label:"商品数量",prop:"goods_number"}},[a("el-input",{model:{value:e.addForm.goods_number,callback:function(t){e.$set(e.addForm,"goods_number",t)},expression:"addForm.goods_number"}})],1),a("el-form-item",{attrs:{label:"商品分类",prop:"goods_cat"}},[a("el-cascader",{attrs:{options:e.cateList,props:e.cateProps},on:{change:e.handleChange},model:{value:e.addForm.goods_cat,callback:function(t){e.$set(e.addForm,"goods_cat",t)},expression:"addForm.goods_cat"}})],1)],1),a("el-tab-pane",{attrs:{label:"商品参数",name:"1"}},e._l(e.manyTableData,(function(t){return a("el-form-item",{key:t.attr_id,attrs:{label:t.attr_name}},[a("el-checkbox-group",{model:{value:t.attr_vals,callback:function(a){e.$set(t,"attr_vals",a)},expression:"item.attr_vals"}},e._l(t.attr_vals,(function(e,t){return a("el-checkbox",{key:t,attrs:{label:e,border:""}})})),1)],1)})),1),a("el-tab-pane",{attrs:{label:"商品属性",name:"2"}},e._l(e.onlyTableData,(function(t){return a("el-form-item",{key:t.attr_id,attrs:{label:t.attr_name}},[a("el-input",{model:{value:t.attr_vals,callback:function(a){e.$set(t,"attr_vals",a)},expression:"item.attr_vals"}})],1)})),1),a("el-tab-pane",{attrs:{label:"商品图片",name:"3"}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:e.uploadUr,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"list-type":"picture",headers:e.headerObj,"on-success":e.handleSuccess}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1),a("el-tab-pane",{attrs:{label:"商品内容",name:"4"}},[a("quill-editor",{model:{value:e.addForm.goods_introduce,callback:function(t){e.$set(e.addForm,"goods_introduce",t)},expression:"addForm.goods_introduce"}}),a("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.add}},[e._v("添加商品")])],1)],1)],1)],1),a("el-dialog",{attrs:{title:"图片预览",visible:e.previewVisible,width:"40%"},on:{"update:visible":function(t){e.previewVisible=t}}},[a("img",{staticClass:"previewImg",attrs:{src:e.previwPath,alt:""}})])],1)},n=[],o=(a("c740"),a("4160"),a("a15b"),a("a434"),a("ac1f"),a("1276"),a("159b"),a("96cf"),a("1da1")),s=a("60bb"),i=a.n(s),l={data:function(){return{activeIndex:"0",addForm:{goods_name:"",goods_price:"",goods_weight:"",goods_number:"",goods_cat:[],pics:[],goods_introduce:"",attrs:[]},addFormRules:{goods_name:[{required:!0,message:"请输入商品名称",trigger:"blur"}],goods_price:[{required:!0,message:"请输入商品价格",trigger:"blur"}],goods_weight:[{required:!0,message:"请输入商品重量",trigger:"blur"}],goods_number:[{required:!0,message:"请输入商品数量",trigger:"blur"}],goods_cat:[{required:!0,message:"请选择商品分类",trigger:"blur"}]},cateList:[],cateProps:{expandTrigger:"hover",label:"cat_name",value:"cat_id",children:"children"},manyTableData:[],onlyTableData:[],uploadUr:"http://127.0.0.1:8888/api/private/v1/upload",headerObj:{Authorization:window.sessionStorage.getItem("token")},previwPath:"",previewVisible:!1}},created:function(){this.getCateList()},methods:{getCateList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("categories");case 2:if(a=t.sent,r=a.data,200===r.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error(r.meta.msg));case 6:e.cateList=r.data;case 7:case"end":return t.stop()}}),t)})))()},handleChange:function(){3!==this.addForm.goods_cat.length&&(this.addForm.goods_cat=[])},beforeTabLeave:function(e,t){if(0!==t&&3!==this.addForm.goods_cat.length)return this.$message.error("请选择分类"),!1},tabClicked:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("1"!==e.activeIndex){t.next=11;break}return t.next=3,e.$http.get("categories/".concat(e.catrid,"/attributes"),{params:{sel:"many"}});case 3:if(a=t.sent,r=a.data,200===r.meta.status){t.next=7;break}return t.abrupt("return",e.$message.error(r.meta.msg));case 7:r.data.forEach((function(e){e.attr_vals=0===e.attr_vals.length?[]:e.attr_vals.split(",")})),e.manyTableData=r.data,t.next=19;break;case 11:if("2"!==e.activeIndex){t.next=19;break}return t.next=14,e.$http.get("categories/".concat(e.catrid,"/attributes"),{params:{sel:"only"}});case 14:if(n=t.sent,o=n.data,200===o.meta.status){t.next=18;break}return t.abrupt("return",e.$message.error(o.meta.msg));case 18:e.onlyTableData=o.data;case 19:case"end":return t.stop()}}),t)})))()},handlePreview:function(e){this.previwPath=e.response.data.url,this.previewVisible=!0},handleRemove:function(e,t){var a=e.response.data.tmp_path,r=this.addForm.pics.findIndex((function(e){e.pic=a}));this.addForm.pics.splice(r,1)},handleSuccess:function(e){var t={pic:e.data.tmp_path};this.addForm.pics.push(t)},add:function(){var e=this;this.$refs.addFormRef.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(a){var r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a){t.next=2;break}return t.abrupt("return",e.$message.error("请填写基本信息必要的表单项"));case 2:return r=i.a.cloneDeep(e.addForm),r.goods_cat=r.goods_cat.join(","),e.manyTableData.forEach((function(t){var a=0===t.attr_vals.length?"":t.attr_vals.join(","),r={attr_id:t.attr_id,attr_value:a};e.addForm.attrs.push(r)})),e.onlyTableData.forEach((function(t){var a={attr_id:t.attr_id,attr_value:t.attr_vals};e.addForm.attrs.push(a)})),r.attrs=e.addForm.attrs,t.next=9,e.$http.post("goods",r);case 9:if(n=t.sent,o=n.data,201===o.meta.status){t.next=13;break}return t.abrupt("return",e.$message.error(o.meta.msg));case 13:e.$message.success("商品成功"),e.$router.push("/goods");case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},computed:{catrid:function(){return 3===this.addForm.goods_cat.length?this.addForm.goods_cat[2]:null}}},c=l,u=(a("f9e8"),a("2877")),d=Object(u["a"])(c,r,n,!1,null,"1662260e",null);t["default"]=d.exports},"8aa5":function(e,t,a){"use strict";var r=a("6547").charAt;e.exports=function(e,t,a){return t+(a?r(e,t).length:1)}},9263:function(e,t,a){"use strict";var r=a("ad6d"),n=a("9f7f"),o=RegExp.prototype.exec,s=String.prototype.replace,i=o,l=function(){var e=/a/,t=/b*/g;return o.call(e,"a"),o.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),c=n.UNSUPPORTED_Y||n.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=l||u||c;d&&(i=function(e){var t,a,n,i,d=this,p=c&&d.sticky,g=r.call(d),m=d.source,f=0,h=e;return p&&(g=g.replace("y",""),-1===g.indexOf("g")&&(g+="g"),h=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(m="(?: "+m+")",h=" "+h,f++),a=new RegExp("^(?:"+m+")",g)),u&&(a=new RegExp("^"+m+"$(?!\\s)",g)),l&&(t=d.lastIndex),n=o.call(p?a:d,h),p?n?(n.input=n.input.slice(f),n[0]=n[0].slice(f),n.index=d.lastIndex,d.lastIndex+=n[0].length):d.lastIndex=0:l&&n&&(d.lastIndex=d.global?n.index+n[0].length:t),u&&n&&n.length>1&&s.call(n[0],a,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(n[i]=void 0)})),n}),e.exports=i},"9f7f":function(e,t,a){"use strict";var r=a("d039");function n(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a434:function(e,t,a){"use strict";var r=a("23e7"),n=a("23cb"),o=a("a691"),s=a("50c4"),i=a("7b0b"),l=a("65f0"),c=a("8418"),u=a("1dde"),d=a("ae40"),p=u("splice"),g=d("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,f=Math.min,h=9007199254740991,b="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!p||!g},{splice:function(e,t){var a,r,u,d,p,g,v=i(this),x=s(v.length),_=n(e,x),y=arguments.length;if(0===y?a=r=0:1===y?(a=0,r=x-_):(a=y-2,r=f(m(o(t),0),x-_)),x+a-r>h)throw TypeError(b);for(u=l(v,r),d=0;d<r;d++)p=_+d,p in v&&c(u,d,v[p]);if(u.length=r,a<r){for(d=_;d<x-r;d++)p=d+r,g=d+a,p in v?v[g]=v[p]:delete v[g];for(d=x;d>x-r+a;d--)delete v[d-1]}else if(a>r)for(d=x-r;d>_;d--)p=d+r-1,g=d+a-1,p in v?v[g]=v[p]:delete v[g];for(d=0;d<a;d++)v[d+_]=arguments[d+2];return v.length=x-r+a,u}})},ac1f:function(e,t,a){"use strict";var r=a("23e7"),n=a("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},c740:function(e,t,a){"use strict";var r=a("23e7"),n=a("b727").findIndex,o=a("44d2"),s=a("ae40"),i="findIndex",l=!0,c=s(i);i in[]&&Array(1)[i]((function(){l=!1})),r({target:"Array",proto:!0,forced:l||!c},{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),o(i)},cb38:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("商品管理")]),a("el-breadcrumb-item",[e._v("商品列表")])],1),a("el-card",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{placeholder:"请输入内容",clearable:""},on:{clear:e.getGoodsList},model:{value:e.queryInfo.query,callback:function(t){e.$set(e.queryInfo,"query",t)},expression:"queryInfo.query"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getGoodsList},slot:"append"})],1)],1),a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{type:"primary"},on:{click:e.goAddage}},[e._v("添加商品")])],1)],1),a("el-table",{attrs:{data:e.goodsList,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{label:"商品名称",prop:"goods_name"}}),a("el-table-column",{attrs:{label:"商品价格(元)",prop:"goods_price",width:"95px"}}),a("el-table-column",{attrs:{label:"商品重量",prop:"goods_weight",width:"75px"}}),a("el-table-column",{attrs:{label:"商品创建时间",prop:"add_time",width:"155px"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("dataFormat")(t.row.add_time))+" ")]}}])}),a("el-table-column",{attrs:{label:"操作",width:"130px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit"}}),a("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(a){return e.removeById(t.row.goods_id)}}})]}}])})],1),a("el-pagination",{attrs:{"current-page":e.queryInfo.pagenum,"page-sizes":[5,10,15,20],"page-size":e.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.tatal,background:""},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},n=[],o=(a("96cf"),a("1da1")),s={data:function(){return{queryInfo:{query:"",pagenum:1,pagesize:10},goodsList:[],tatal:0}},created:function(){this.getGoodsList()},methods:{getGoodsList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("goods",{params:e.queryInfo});case 2:if(a=t.sent,r=a.data,200===r.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error(r.meta.msg));case 6:e.$message.success(r.meta.msg),e.goodsList=r.data.goods,e.tatal=r.data.total;case 9:case"end":return t.stop()}}),t)})))()},handleSizeChange:function(e){this.queryInfo.pagesize=e,this.getGoodsList()},handleCurrentChange:function(e){this.queryInfo.pagenum=e,this.getGoodsList()},removeById:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r,n,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$confirm("此操作将永久删除该商品, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(r=a.sent,"confirm"===r){a.next=5;break}return a.abrupt("return",t.$message.info("已取消删除"));case 5:return a.next=7,t.$http.delete("goods/".concat(e));case 7:n=a.sent,o=n.data,200!==o.meta.status&&t.$message.error(o.meta.msg),t.$message.success(o.meta.msg),t.getGoodsList();case 12:case"end":return a.stop()}}),a)})))()},goAddage:function(){this.$router.push("/goods/add")}}},i=s,l=a("2877"),c=Object(l["a"])(i,r,n,!1,null,"d108f73c",null);t["default"]=c.exports},d784:function(e,t,a){"use strict";a("ac1f");var r=a("6eeb"),n=a("d039"),o=a("b622"),s=a("9263"),i=a("9112"),l=o("species"),c=!n((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=o("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),g=!n((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));e.exports=function(e,t,a,d){var m=o(e),f=!n((function(){var t={};return t[m]=function(){return 7},7!=""[e](t)})),h=f&&!n((function(){var t=!1,a=/a/;return"split"===e&&(a={},a.constructor={},a.constructor[l]=function(){return a},a.flags="",a[m]=/./[m]),a.exec=function(){return t=!0,null},a[m](""),!t}));if(!f||!h||"replace"===e&&(!c||!u||p)||"split"===e&&!g){var b=/./[m],v=a(m,""[e],(function(e,t,a,r,n){return t.exec===s?f&&!n?{done:!0,value:b.call(t,a,r)}:{done:!0,value:e.call(a,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),x=v[0],_=v[1];r(String.prototype,e,x),r(RegExp.prototype,m,2==t?function(e,t){return _.call(e,this,t)}:function(e){return _.call(e,this)})}d&&i(RegExp.prototype[m],"sham",!0)}},f9e8:function(e,t,a){"use strict";var r=a("273e"),n=a.n(r);n.a}}]);
//# sourceMappingURL=List_Add.f1e06ce7.js.map
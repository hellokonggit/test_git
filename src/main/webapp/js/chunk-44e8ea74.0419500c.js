(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44e8ea74"],{1775:function(e,t,l){},"44e3":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticClass:"crumbs"},[l("el-breadcrumb",{attrs:{separator:"/"}},[l("el-breadcrumb-item",[l("i",{staticClass:"el-icon-lx-recharge"}),e._v(" 结算管理")]),l("el-breadcrumb-item",[e._v(" 单价管理")])],1)],1),l("div",{staticClass:"container"},[l("el-form",{attrs:{inline:!0,model:e.form,"label-width":"80px"}},[l("el-form-item",{attrs:{label:"客户类别"}},[l("el-select",{model:{value:e.form.proname,callback:function(t){e.$set(e.form,"proname",t)},expression:"form.proname"}},[l("el-option",{attrs:{label:"中国银行",value:"zgyh"}}),l("el-option",{attrs:{label:"中国人寿",value:"zgrs"}})],1)],1),l("el-form-item",{attrs:{label:"选择日期"}},[l("el-date-picker",{staticStyle:{width:"140px"},attrs:{type:"date",placeholder:"开始日期"},model:{value:e.form.startDate,callback:function(t){e.$set(e.form,"startDate",t)},expression:"form.startDate"}}),e._v(" -\r\n                "),l("el-date-picker",{staticStyle:{width:"140px"},attrs:{type:"date",placeholder:"结束日期"},model:{value:e.form.endDate,callback:function(t){e.$set(e.form,"endDate",t)},expression:"form.endDate"}})],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"}},[e._v("查询")]),l("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("新增单价")])],1)],1),l("el-table",{staticClass:"table",attrs:{data:e.data,border:"",height:"260"}},[l("el-table-column",{attrs:{prop:"customerCategory",label:"客户类别"}}),l("el-table-column",{attrs:{prop:"workCategory",label:"工作类别"}}),l("el-table-column",{attrs:{prop:"level",label:"技术等级"}}),l("el-table-column",{attrs:{prop:"levelUnitPrice",label:"等级单价"}}),l("el-table-column",{attrs:{prop:"startDate",label:"开始日期"}}),l("el-table-column",{attrs:{prop:"endDate",label:"结束日期"}}),l("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(l){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),l("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(l){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1),l("el-dialog",{attrs:{title:"新增单价",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[l("el-form",{staticStyle:{width:"500px"},attrs:{model:e.form}},[l("el-form-item",{attrs:{label:"客户类别","label-width":e.formLabelWidth}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.custtype,callback:function(t){e.$set(e.form,"custtype",t)},expression:"form.custtype"}},[l("el-option",{attrs:{label:"中国银行",value:"01"}}),l("el-option",{attrs:{label:"中国人寿",value:"02"}}),l("el-option",{attrs:{label:"农业银行",value:"03"}})],1)],1),l("el-form-item",{attrs:{label:"工作类别","label-width":e.formLabelWidth}},[l("el-select",{attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"请选择"},model:{value:e.form.worktype,callback:function(t){e.$set(e.form,"worktype",t)},expression:"form.worktype"}},[l("el-option",{attrs:{label:"开发",value:"01"}}),l("el-option",{attrs:{label:"测试",value:"02"}})],1)],1),l("el-form-item",{attrs:{label:"技术等级","label-width":e.formLabelWidth}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.level,callback:function(t){e.$set(e.form,"level",t)},expression:"form.level"}},[l("el-option",{attrs:{label:"初级",value:"01"}}),l("el-option",{attrs:{label:"中级",value:"02"}}),l("el-option",{attrs:{label:"高级",value:"03"}})],1)],1),l("el-form-item",{attrs:{label:"等级单价","label-width":e.formLabelWidth}},[l("el-input",{staticStyle:{width:"210px"},attrs:{type:"input"},model:{value:e.addForm.levelPrice,callback:function(t){e.$set(e.addForm,"levelPrice",t)},expression:"addForm.levelPrice"}}),e._v(" 元\r\n            ")],1),l("el-form-item",{attrs:{label:"起始日期","label-width":e.formLabelWidth}},[l("el-date-picker",{staticStyle:{width:"160px"},attrs:{type:"date",placeholder:"开始日期"},model:{value:e.addForm.startDate,callback:function(t){e.$set(e.addForm,"startDate",t)},expression:"addForm.startDate"}}),e._v(" -\r\n                "),l("el-date-picker",{staticStyle:{width:"160px"},attrs:{type:"date",placeholder:"结束日期"},model:{value:e.addForm.endDate,callback:function(t){e.$set(e.addForm,"endDate",t)},expression:"addForm.endDate"}})],1)],1),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("确 定")])],1)],1)],1)},o=[],r=l("d4aa"),i={data:function(){return{form:{proname:"",startDate:"",endDate:""},dialogFormVisible:!1,formLabelWidth:"120px",addForm:{startDate:"",endDate:""},data:[]}},mounted:function(){this.getDate()},methods:{getDate:function(){var e=this;this.$axios.post(r["a"].settlement.query).then(function(t){e.data=t.data.list})},proNameFmt:function(e,t){return e.customerCategory+"资源一部"}}},s=i,n=(l("887b"),l("5be0")),c=Object(n["a"])(s,a,o,!1,null,"ee6f0b0c",null);t["default"]=c.exports},"887b":function(e,t,l){"use strict";var a=l("1775"),o=l.n(a);o.a}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c34e1fc"],{3162:function(e,l,t){"use strict";t.r(l);var a=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"table"},[t("div",{staticClass:"crumbs"},[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",[t("i",{staticClass:"el-icon-lx-settings"}),e._v(" 系统管理")]),t("el-breadcrumb-item",[e._v(" 用户管理")])],1)],1),t("div",{staticClass:"container"},[t("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formSearch}},[t("el-form-item",{attrs:{label:"所在项目"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formSearch.group,callback:function(l){e.$set(e.formSearch,"group",l)},expression:"formSearch.group"}},[t("el-option",{attrs:{label:"中国银行",value:"01"}}),t("el-option",{attrs:{label:"中国人寿",value:"02"}}),t("el-option",{attrs:{label:"中国邮政储蓄",value:"03"}})],1)],1),t("el-form-item",{attrs:{label:"用户名"}},[t("el-input",{attrs:{placeholder:"用户名"},model:{value:e.formSearch.username,callback:function(l){e.$set(e.formSearch,"username",l)},expression:"formSearch.username"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"}},[e._v("查询")]),t("el-button",{attrs:{type:"danger"},on:{click:e.addRole}},[e._v("添加用户")])],1)],1),t("el-table",{staticClass:"table mgb10",attrs:{data:e.roleData,border:""}},[t("el-table-column",{attrs:{prop:"userName",label:"用户名"}}),t("el-table-column",{attrs:{prop:"password",label:"密码"}}),t("el-table-column",{attrs:{prop:"roleLevel",label:"技术"}}),t("el-table-column",{attrs:{prop:"project",label:"所在项目"}}),t("el-table-column",{attrs:{label:"操作",width:"220",align:"center"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(t){e.handleEdit(l.$index,l.row)}}},[e._v("编辑")]),t("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(t){e.handleDelete(l.$index,l.row)}}},[e._v("删除")]),t("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-refresh"}},[e._v("重置密码")])]}}])})],1),t("el-dialog",{attrs:{title:"添加用户",visible:e.dialogFormVisible},on:{"update:visible":function(l){e.dialogFormVisible=l}}},[t("el-form",{attrs:{model:e.formInline,"label-width":e.formLabelWidth}},[t("el-form-item",{attrs:{label:"用户名称"}},[t("el-input",{attrs:{disabled:e.userNameEditable},model:{value:e.formInline.name,callback:function(l){e.$set(e.formInline,"name",l)},expression:"formInline.name"}})],1),t("el-form-item",{attrs:{label:"密码"}},[t("el-input",{attrs:{disabled:""},model:{value:e.formInline.password,callback:function(l){e.$set(e.formInline,"password",l)},expression:"formInline.password"}})],1),t("el-form-item",{attrs:{label:"级别"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formInline.role,callback:function(l){e.$set(e.formInline,"role",l)},expression:"formInline.role"}},[t("el-option",{attrs:{label:"普通用户",value:"03"}}),t("el-option",{attrs:{label:"系统管理员",value:"02"}}),t("el-option",{attrs:{label:"超级管理员",value:"01"}})],1)],1),t("el-form-item",{attrs:{label:"所在项目"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formInline.group,callback:function(l){e.$set(e.formInline,"group",l)},expression:"formInline.group"}},[t("el-option",{attrs:{label:"中国银行",value:"01"}}),t("el-option",{attrs:{label:"中国人寿",value:"02"}}),t("el-option",{attrs:{label:"中国邮政储蓄",value:"03"}})],1)],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(l){e.dialogFormVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:function(l){e.dialogFormVisible=!1}}},[e._v("确 定")])],1)],1)],1)])},o=[],r=(t("d582"),t("98f3"),t("0b30"),t("d4aa"),{name:"basetable",data:function(){return{formSearch:{},date:"",roleData:[{userName:"周吴",password:"******",roleLevel:"普通用户",dept:"软件资源二中心",project:"中国银行"},{userName:"王瑜",password:"******",roleLevel:"普通用户",dept:"软件资源二中心",project:"中国人寿"},{userName:"张青",password:"******",roleLevel:"普通用户",dept:"软件资源二中心",project:"中国金币"}],formInline:{name:"",password:"nt000000",level:""},userNameEditable:!0,dialogFormVisible:!1,formLabelWidth:"120px"}},methods:{handleEdit:function(e,l){this.dialogFormVisible=!0,this.userNameEditable=!0,this.formInline.name=l.userName,this.formInline.password=l.password,this.formInline.level=l.roleLevel},addRole:function(){this.userNameEditable=!1,this.dialogFormVisible=!0,this.formInline.name="",this.formInline.password="nt000000",this.formInline.level=""}}}),s=r,n=(t("fb31"),t("b0be")),i=Object(n["a"])(s,a,o,!1,null,"5bff96fc",null);i.options.__file="Users.vue";l["default"]=i.exports},6452:function(e,l,t){},fb31:function(e,l,t){"use strict";var a=t("6452"),o=t.n(a);o.a}}]);
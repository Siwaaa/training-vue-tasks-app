(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58d99abc"],{"78ce":function(t,e,i){var s=i("5ca1");s(s.S,"Date",{now:function(){return(new Date).getTime()}})},d879:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col s6 offset-s3"},[i("h1",[t._v("Create task")]),i("form",{on:{submit:function(e){return e.preventDefault(),t.submitHandler(e)}}},[i("div",{staticClass:"input-field"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"validate",attrs:{id:"title",type:"text",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),i("label",{attrs:{for:"title"}},[t._v("Title")]),i("span",{staticClass:"helper-text",attrs:{"data-error":"Title is required"}})]),i("div",{ref:"chips",staticClass:"chips"}),i("div",{staticClass:"input-field"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"materialize-textarea",attrs:{id:"description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),i("label",{attrs:{for:"description"}},[t._v("Description")]),i("span",{staticClass:"character-counter",staticStyle:{float:"right","font-size":"12px"}},[t._v(t._s(t.description.length)+"/2048")])]),i("input",{ref:"datepicker",attrs:{type:"text"}}),i("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Create task")])])])])},a=[],r=(i("78ce"),{name:"create",data:function(){return{description:"",title:"",chips:null,date:null}},mounted:function(){this.chips=M.Chips.init(this.$refs.chips,{placeholder:"Task tags"}),this.date=M.Datepicker.init(this.$refs.datepicker,{format:"dd.mm.yyyy",defaultDate:new Date,setDefaultDate:!0})},methods:{submitHandler:function(){var t={title:this.title,description:this.description,id:Date.now(),status:"active",tags:this.chips.chipsData,date:this.date.date};this.$store.dispatch("createTask",t),this.$router.push("/list")}},destroyed:function(){this.date&&this.date.destroy&&this.date.destroy(),this.chips&&this.chips.destroy&&this.chips.destroy()}}),n=r,c=i("2877"),o=Object(c["a"])(n,s,a,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-58d99abc.2ffddf21.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{22:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{class:"wrapper test-"+t.test.id},[e("div",{staticClass:"wrapper-left content-wrapper"},[e("div",{staticClass:"test-block test-block-left"},[e("p",{staticClass:"left-text-caption"},[t._v("Вопрос "+t._s(t.test.id)+"/6")]),e("p",{staticClass:"left-text-title",domProps:{innerHTML:t._s(t.test.ask)}}),e("div",{staticClass:"answers"},[t._l(t.test.answers,(function(s){return e("p",{staticClass:"answers-item",attrs:{dataId:s.answerId},on:{click:t.isClickedNow}},[t._v(t._s(s.item)+" ")])})),e("br")],2),e("p")])]),e("div",{staticClass:"wrapper-right content-wrapper"},[e("div",{staticClass:"test-block test-block-right"},[e("img",{ref:"rightImg",staticClass:"test-right-img",attrs:{src:t.test.image,id:"rightImg"}})])]),e("transition",{attrs:{name:"fade"}},[t.isOpen?e("app-child",{staticClass:"overlay"},[e("div",{staticClass:"modal-text"},[e("p",{staticClass:"modal-text-p",domProps:{innerHTML:t._s(t.test.tiketName)}}),e("a",{staticClass:"next-link"},[t._v("Дальше                         ")])])]):t._e()],1)],1)};i._withStripped=!0;var a={name:"test",data:function(){return{isOpen:!1,isTimer:null}},methods:{isClickedNow:function(t){clearTimeout(this.isTimer),globalNameOfItog[Number(t.currentTarget.getAttribute("dataId"))-1]++,this.isOpen=!1;var s=Number(this.id)+1;if(this.test.btnFinally){var e=globalNameOfItog.indexOf(Math.max.apply(Math,globalNameOfItog))+1;this.isOpen=!1,this.$router.push({path:"/final/".concat(e,"/").concat(this.getPublicUtm)})}else this.isOpen=!1,this.$router.push({path:"/test/".concat(s,"/").concat(this.getPublicUtm)})},isClicked:function(t){globalNameOfItog[Number(t.currentTarget.getAttribute("dataId"))-1]++,this.$refs.rightImg.src="",this.isOpen=!0}},computed:{id:function(){return console.log(this.$store.state.route.params.id),this.$store.state.route.params.id},test:function(){return this.$store.getters.getTestById(this.id)},getPublicUtm:function(){return window.globalUtm}}},r=e(5),n=Object(r.a)(a,i,[],!1,null,null,null);n.options.__file="src/components/Test.vue";s.default=n.exports}}]);
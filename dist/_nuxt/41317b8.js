(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{213:function(e,t,n){"use strict";var l=n(2),o=n(30).find,r=n(110),c=n(20),d=!0,f=c("find");"find"in[]&&Array(1).find((function(){d=!1})),l({target:"Array",proto:!0,forced:d||!f},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r("find")},214:function(e,t,n){"use strict";var l=n(2),o=n(108),r=n(36),c=n(11),d=n(21),f=n(109),h=n(51),m=n(52),v=n(20),x=m("splice"),w=v("splice",{ACCESSORS:!0,0:0,1:2}),_=Math.max,C=Math.min;l({target:"Array",proto:!0,forced:!x||!w},{splice:function(e,t){var n,l,m,v,x,w,y=d(this),k=c(y.length),A=o(e,k),E=arguments.length;if(0===E?n=l=0:1===E?(n=0,l=k-A):(n=E-2,l=C(_(r(t),0),k-A)),k+n-l>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(m=f(y,l),v=0;v<l;v++)(x=A+v)in y&&h(m,v,y[x]);if(m.length=l,n<l){for(v=A;v<k-l;v++)w=v+n,(x=v+l)in y?y[w]=y[x]:delete y[w];for(v=k;v>k-l+n;v--)delete y[v-1]}else if(n>l)for(v=k-l;v>A;v--)w=v+n-1,(x=v+l-1)in y?y[w]=y[x]:delete y[w];for(v=0;v<n;v++)y[v+A]=arguments[v+2];return y.length=k-l+n,m}})},216:function(e,t,n){"use strict";n.r(t);n(53),n(213),n(78),n(157),n(214),n(31),n(14),n(37),n(79);var l={data:function(){return{deleteModal:!1,name:null,weight:null,units:0,reps:null,exercises:[],showAutoComplete:!1}},computed:{searchExercise:function(){var e=this;return["Squat","Leg press","Romanian deadlift","Hanging leg raises","Leg extension","Scull crushers","Close grip bench press","Cable fly","Dumbbell fly","Pec dec","Standing calve raises","Seated calve extension","Bench press","Incline bench press","Deadlift","Shoulder press"].filter((function(option){var t;return option.toString().toLowerCase().includes((null===(t=e.name)||void 0===t?void 0:t.toLowerCase())||"")}))}},methods:{addExercise:function(){var e,t=this,n=this.exercises.find((function(e){return e.name===t.name}));if(null!=this.name&&null!=this.reps&&null!=this.weight){if(null==n){var l={name:this.name,sets:[]};this.exercises.push(l),n=this.exercises.find((function(e){return e.name===t.name}))}if(null==(e=n.sets.find((function(e){return e.weight===t.weight&&e.units===t.units})))){var o={weight:this.weight,units:this.units,reps:[]};n.sets.push(o),e=o}e.reps.push(this.reps)}},showDeleteModal:function(e){this.selectedExercise=e,this.deleteModal=!0},closeDeleteModal:function(){this.deleteModal=!1},deleteExercise:function(){var e=this,t=this.exercises.find((function(t){return t.name===e.selectedExercise}));if(null!=t){var n=this.exercises.indexOf(t);this.exercises.splice(n,1)}this.closeDeleteModal()},clearForm:function(){this.name=null,this.weight=null,this.reps=null},onSearchInput:function(){this.showAutoComplete=this.name.length>0&&" "!==this.name},setByAutoComplete:function(e){this.name=e,this.showAutoComplete=!1}},filters:{unitsToDisplay:function(e){return 0===e?"kg":1===e?"lbs":void 0}}},o=n(18),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col"},[n("div",{staticClass:"w-full flex flex-1 flex-col"},[n("div",{staticClass:"w-full px-5 pt-3 pb-6 bg-blue-500 rounded-b-xl shadow-lg"},[n("div",{staticClass:"text-white text-1.2r flex justify-between"},[n("n-link",{attrs:{to:"/"}},[n("font-awesome-icon",{attrs:{icon:"arrow-left"}})],1),e._v(" "),n("button",{staticClass:"font-semibold focus:outline-none"},[e._v("Save")])],1),e._v(" "),n("h1",{staticClass:"text-2xl font-bold"},[e._v("Add exercise")]),e._v(" "),n("div",{staticClass:"mb-3 w-full relative"},[n("div",{staticClass:"relative"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"w-full h-10 px-3 py-0 mb-1 bg-white border border-gray-300 text-lg rounded-sm focus:outline-none",attrs:{type:"text",placeholder:"Exercise",required:""},domProps:{value:e.name},on:{input:[function(t){t.target.composing||(e.name=t.target.value)},e.onSearchInput]}}),e._v(" "),e.showAutoComplete&&e.searchExercise.length>0?n("button",{staticClass:"absolute right-0 top-0 mr-2 mt-2 bg-gray-300 px-2 rounded-sm opacity-75 focus:outline-none",on:{click:function(t){e.showAutoComplete=!1}}},[n("font-awesome-icon",{attrs:{icon:"times"}})],1):e._e()]),e._v(" "),e.showAutoComplete&&e.searchExercise.length>0?n("ul",{staticClass:"absolute bg-white w-full max-h-25r overflow-scroll px-2 py-1 shadow-md rounded-sm z-50"},e._l(e.searchExercise,(function(t,i){return n("li",{key:i,staticClass:"py-1",on:{click:function(n){return e.setByAutoComplete(t)}}},[e._v("\n            "+e._s(t)+"\n          ")])})),0):e._e()]),e._v(" "),n("div",{staticClass:"w-full flex flex-col"},[n("ul",{staticClass:"mb-4 flex flex-row"},[e._m(0),e._v(" "),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.weight,expression:"weight"}],staticClass:"py-2 px-2 rounded-sm w-24 mr-2 text-black focus:outline-none",attrs:{type:"text",placeholder:"30",required:""},domProps:{value:e.weight},on:{input:function(t){t.target.composing||(e.weight=t.target.value)}}})]),e._v(" "),n("li",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.units,expression:"units"}],staticClass:"py-2 px-2 rounded-sm bg-white text-black focus:outline-none",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.units=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"0"}},[e._v("kg")]),e._v(" "),n("option",{attrs:{value:"1"}},[e._v("lbs")])])])]),e._v(" "),n("ul",{staticClass:"mb-4 flex flex-row"},[e._m(1),e._v(" "),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.reps,expression:"reps"}],staticClass:"py-2 px-2 rounded-sm w-24 text-black focus:outline-none",attrs:{type:"text",placeholder:"8",required:""},domProps:{value:e.reps},on:{input:function(t){t.target.composing||(e.reps=t.target.value)}}})])]),e._v(" "),n("ul",{staticClass:"flex flex-row"},[n("li",{staticClass:"w-10/12 mr-1"},[n("button",{staticClass:"w-full py-2 bg-green-500 rounded-sm font-bold text-white focus:outline-none active:shadow-none",on:{click:e.addExercise}},[e._v("\n              Add "),n("font-awesome-icon",{attrs:{icon:"plus"}})],1)]),e._v(" "),n("li",{staticClass:"w-2/12"},[n("button",{staticClass:"w-full py-2 bg-red-500 rounded-sm font-bold text-white focus:outline-none active:shadow-none",on:{click:e.clearForm}},[n("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)])])])]),e._v(" "),e.exercises.length>0?n("div",{staticClass:"overflow-y-scroll pb-4 flex-auto"},e._l(e.exercises.slice().reverse(),(function(t,i){return n("div",{key:i,staticClass:"w-11/12 px-3 py-2 mt-4 m-auto bg-teal-600 text-white rounded-md shadow-lg relative"},[n("p",{staticClass:"font-bold"},[e._v(e._s(t.name)+":")]),e._v(" "),e._l(t.sets,(function(t,i){return n("ul",{key:i,staticClass:"flex flex-row"},[n("li",{staticClass:"mr-2 font-bold"},[e._v("\n            "+e._s(t.weight)+e._s(e._f("unitsToDisplay")(t.units))+"\n          ")]),e._v(" "),e._l(t.reps,(function(t,i){return n("li",{key:i,staticClass:"font-bold mr-1"},[e._v("\n            "+e._s(t)+"x\n          ")])}))],2)})),e._v(" "),n("div",{staticClass:"absolute bottom-0 right-0 mr-2 mb-1 text-red-500",on:{click:function(n){return e.showDeleteModal(t.name)}}},[n("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)],2)})),0):e._e(),e._v(" "),e.deleteModal?n("div",[n("div",{staticClass:"fixed top-0 w-full h-screen z-10 bg-gray-800 opacity-50 transition duration-300 ease-in-out"}),e._v(" "),n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.closeDeleteModal,expression:"closeDeleteModal"}],staticClass:"w-10/12 py-2 px-5 pb-6 fixed top-50 left-50 right-50 z-30 rounded-md shadow-lg text-white bg-blue-900 transform translate-x-m50 translate-y-m50"},[n("span",{staticClass:"text-2xl"},[e._v("Are you sure you want to delete this item?")]),e._v(" "),n("ul",{staticClass:"w-full mt-3 flex flex-row justify-center items-center"},[n("li",[n("button",{staticClass:"bg-red-500 py-2 mr-10 px-5 font-semibold rounded-sm shadow-lg focus:outline-none active:shadow-none",on:{click:e.deleteExercise}},[e._v("\n              Yes\n            ")])]),e._v(" "),n("li",[n("button",{staticClass:"bg-blue-500 py-2 px-5 font-semibold rounded-sm shadow-lg focus:outline-none active:shadow-none",on:{click:e.closeDeleteModal}},[e._v("\n              No\n            ")])])])])]):e._e()])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"w-20 mt-2"},[t("label",{staticClass:"font-bold"},[this._v("Weight")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"w-20 mt-2"},[t("label",{staticClass:"font-bold"},[this._v("Reps")])])}],!1,null,null,null);t.default=component.exports}}]);
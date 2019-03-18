(function(t){function e(e){for(var o,i,r=e[0],l=e[1],c=e[2],u=0,h=[];u<r.length;u++)i=r[u],n[i]&&h.push(n[i][0]),n[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(h.length)h.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],o=!0,i=1;i<s.length;i++){var l=s[i];0!==n[l]&&(o=!1)}o&&(a.splice(e--,1),t=r(r.s=s[0]))}return t}var o={},n={app:0},a=[];function i(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"39085d93"}[t]+".js"}function r(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.e=function(t){var e=[],s=n[t];if(0!==s)if(s)e.push(s[2]);else{var o=new Promise(function(e,o){s=n[t]=[e,o]});e.push(s[2]=o);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=i(t),a=function(e){l.onerror=l.onload=null,clearTimeout(c);var s=n[t];if(0!==s){if(s){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+o+": "+a+")");i.type=o,i.request=a,s[1](i)}n[t]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:l})},12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=o,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(s,o,function(e){return t[e]}.bind(null,o));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0734":function(t,e,s){"use strict";var o=s("dad4"),n=s.n(o);n.a},1:function(t,e){},2221:function(t,e,s){"use strict";var o=s("a710"),n=s.n(o);n.a},3277:function(t,e,s){"use strict";var o=s("d2ba"),n=s.n(o);n.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var o=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},a=[],i=(s("5c0b"),s("2877")),r={},l=Object(i["a"])(r,n,a,!1,null,null,null),c=l.exports,u=(s("7f7f"),s("8c4f")),d=(s("96cf"),s("3b8d")),h=s("2f62"),m=s("8055"),f=s.n(m);o["a"].use(h["a"]);var v=new h["a"].Store({state:{socket:f()("https://pinturillo3.herokuapp.com"),localPlayer:null,isLoggedIn:!1,room_id:null,players:null},mutations:{set_localplayer:function(t,e){t.localPlayer=e},set_room_id:function(t,e){t.room_id=e},set_playerlist:function(t,e){t.players=e},set_logged:function(t,e){t.isLoggedIn=e}},actions:{create_room:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(e,s){var o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:o=e.state,console.log(o+s);case 2:case"end":return t.stop()}},t,this)}));function e(e,s){return t.apply(this,arguments)}return e}()}}),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero is-dark is-fullheight"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container is-mobile"},[s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column is-half"},[s("h1",{staticClass:"title is-size-1 has-text-centered"},[t._v("Pinturillo3")]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showErr,expression:"showErr"}],staticClass:"notification is-danger"},[s("button",{staticClass:"delete",on:{click:function(e){t.showErr=!1}}}),t._v("\n            Player nick cannot be empty!\n          ")]),s("div",{staticClass:"box"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Nick:")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.localPlayer,expression:"localPlayer"}],staticClass:"input",attrs:{type:"text",placeholder:"player"},domProps:{value:t.localPlayer},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.verify_user()},input:function(e){e.target.composing||(t.localPlayer=e.target.value)}}})])]),t._m(0),s("button",{staticClass:"button is-large is-fullwidth is-success is-outlined",on:{click:function(e){return t.verify_user()}}},[s("p",[t._v("Play!")])])])])])])]),s("Footer")],1)},_=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("div",{staticClass:"select is-info"},[s("select",[s("option",[t._v("Español")])])])])}],g=s("cebc"),y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hero-foot"},[s("div",{staticClass:"section"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"is-3 has-text-centered"},[t._v("\n        Made by "),s("a",{attrs:{href:"https://github.com/jordigoyanes"}},[t._v("Jordi Goyanes")])])])])])}],w={},C=Object(i["a"])(w,y,b,!1,null,null,null),x=C.exports,k={name:"home",components:{Footer:x},data:function(){return{localPlayer:"",showErr:!1}},methods:Object(g["a"])({verify_user:function(){""===this.localPlayer?this.showErr=!0:(this.set_localplayer(this.localPlayer),this.$router.push({path:"select-room"}))}},Object(h["c"])({set_localplayer:"set_localplayer"})),computed:{}},P=k,j=Object(i["a"])(P,p,_,!1,null,null,null),O=j.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("section",{staticClass:"section has-background-warning"},[s("div",{staticClass:"level"},[s("div",{staticClass:"level-item level-left"},[s("button",{staticClass:"button is-danger",on:{click:function(e){return t.leave()}}},[t._v("Leave Room")])]),s("h1",{staticClass:"is-size-3 level-item has-text-centered"},[t._v("\n        Pinturillo 3\n      ")]),s("div",{staticClass:"level-item level-right"},[s("h4",{staticClass:"title is-size-4"},[t._v("Room ID: "+t._s(this.room_id))])])])]),s("div",{staticClass:"hero is-mobile is-dark is-fullheight"},[s("div",{attrs:{id:"game-columns"}},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-fifth"},[s("div",{staticClass:"box"},[t._v("\n            usuarios y puntuacion\n            "),s("Scores")],1)]),s("div",{staticClass:"column is-half"},[s("div",{attrs:{id:"canvas-wrapper"}},[s("DrawingArea")],1)]),s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("p",{staticClass:"is-primary"},[t._v("chat")]),s("Chatbox")],1)])])])])])},$=[],M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("canvas",{ref:"canvas",attrs:{id:"canvas"},on:{mousedown:function(e){return t.onMouseDown(e)},mouseup:function(e){return t.onMouseUp(e)},mousemove:function(e){return t.onMouseMove(e)}}})},S=[],z={name:"drawingArea",data:function(){return{canvas:null,context:null,rect:null,drawing:!1,current:{color:"red",lineWidth:2,x:0,y:0}}},computed:Object(g["a"])({},Object(h["d"])({socket:"socket"})),methods:{onMouseDown:function(t){console.log("x:"+t.offsetX),console.log("y:"+t.offsetY),this.drawing=!0,this.current.x=t.offsetX,this.current.y=t.offsetY},onMouseUp:function(t){var e=t.offsetX,s=t.offsetY;this.drawing&&(this.drawLine(this.current.x,this.current.y,e,s,this.current.color,!0),this.drawing=!1)},onMouseMove:function(t){if(this.drawing){var e=t.offsetX,s=t.offsetY;this.drawLine(this.current.x,this.current.y,e,s,this.current.color,!0),this.current.x=e,this.current.y=s}},drawLine:function(t,e,s,o,n,a){console.log("x0:"+t+",y0:"+e+",x1:"+s+",y1:"+o),this.context.beginPath(),this.context.moveTo(t,e),this.context.lineTo(s,o),this.context.strokeStyle=n,this.context.lineWidth=2,this.context.stroke(),this.context.closePath(),a&&this.socket.emit("drawing",{x0:t,y0:e,x1:s,y1:o,color:n})},onDrawingEvent:function(t){this.drawLine(t.x0,t.y0,t.x1,t.y1,t.color)},onResize:function(){this.canvas.width=this.canvas.parentElement.clientWidth,this.canvas.height=this.canvas.parentElement.clientHeight}},mounted:function(){this.canvas=this.$refs.canvas,this.context=this.$refs.canvas.getContext("2d"),this.context.fillStyle="#333",this.context.strokeStyle=this.color,this.context.lineWidth=this.lineWidth,this.context.lineCap="round",this.context.fillRect(0,0,this.canvas.width,this.canvas.height),window.addEventListener("resize",this.onResize,!1),this.onResize(),this.socket.on("drawing",this.onDrawingEvent)}},R=z,L=(s("3277"),Object(i["a"])(R,M,S,!1,null,null,null)),N=L.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"field"},[s("div",{staticClass:"chatbox"},[s("ul",t._l(t.chat_messages,function(e,o){return s("li",{key:o},[s("p",[s("strong",[t._v(t._s(e.username))]),t._v(": "+t._s(e.message)+"\n          ")])])}),0)])]),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.guess,expression:"guess"}],staticClass:"input is-danger",attrs:{type:"text",placeholder:"Enter guess..."},domProps:{value:t.guess},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.send_message(e)},input:function(e){e.target.composing||(t.guess=e.target.value)}}})])])])},T=[],F=s("75fc"),W={name:"Chatbox",data:function(){return{guess:"",chat_messages:[{username:"jordi",message:"i don't know"}]}},methods:{log:function(){console.log(this.guess)},send_message:function(){""!=this.guess&&(this.socket.emit("new_message",{username:this.localPlayer,message:this.guess}),this.guess="")}},mounted:function(){var t=this;this.socket.on("new_message",function(e){t.chat_messages=[].concat(Object(F["a"])(t.chat_messages),[e])})},computed:Object(g["a"])({},Object(h["d"])({socket:"socket",localPlayer:"localPlayer"}))},A=W,U=(s("6298"),Object(i["a"])(A,D,T,!1,null,null,null)),X=U.exports,Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"scores"}},[s("ul",t._l(t.orderedUsers,function(e,o){return s("li",{key:o},[e.username==t.localPlayer?s("div",[s("strong",[t._v(t._s(e.username))])]):s("div",[t._v("\n        "+t._s(e.username)+"\n      ")]),t._v("\n      - Score: "+t._s(e.score)+"\n    ")])}),0)])},I=[],J=s("2ef0"),q=s.n(J),B={name:"scores",computed:Object(g["a"])({},Object(h["d"])({players:"players",localPlayer:"localPlayer"}),{orderedUsers:function(){return q.a.orderBy(this.players,"score")}})},G=B,H=(s("0734"),Object(i["a"])(G,Y,I,!1,null,null,null)),K=H.exports,Q={name:"game",components:{DrawingArea:N,Chatbox:X,Scores:K},methods:Object(g["a"])({leave:function(){this.socket.emit("unsubscribe",this.room_id),this.set_logged(!1),this.$router.push({name:"home"})}},Object(h["c"])({set_room_id:"set_room_id",set_playerlist:"set_playerlist",set_logged:"set_logged"})),computed:Object(g["a"])({},Object(h["d"])({socket:"socket",room_id:"room_id",localPlayer:"localPlayer",players:"players"})),mounted:function(){}},V=Q,Z=(s("2221"),Object(i["a"])(V,E,$,!1,null,null,null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero is-dark is-fullheight"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container is-mobile"},[s("h1",{staticClass:"title is-size-1 has-text-centered"},[t._v("Pinturillo3")]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"box has-background-success game-select",on:{click:function(e){return t.goPublic()}}},[s("h1",{staticClass:" is-size-1 has-text-centered"},[t._v("Play public")])])]),s("div",{staticClass:"column"},[s("div",{staticClass:"box has-background-warning game-select",on:{click:function(e){return t.goPrivate()}}},[s("h1",{staticClass:" is-size-1 has-text-centered"},[t._v("Private Room")])])])])])]),s("Footer")],1)},st=[],ot={components:{Footer:x},data:function(){return{showErr:!1,room_name:"",room_password:""}},methods:Object(g["a"])({goPublic:function(){this.socket.emit("join_public_room",{player:this.localPlayer})},goPrivate:function(){this.$router.push({name:"private"})}},Object(h["b"])({join_public_room:"join_public_room"}),Object(h["c"])({set_room_id:"set_room_id",set_playerlist:"set_playerlist",set_logged:"set_logged",set_localplayer:"set_localplayer"})),mounted:function(){var t=this;this.socket.on("joined_room",function(e){console.log("this is original: "+e.original_joiner_name),console.log("localplayer: "+t.localPlayer),e.original_joiner_name===t.localPlayer&&(console.log("localplayer joined"),t.set_logged(!0),t.set_room_id(e.id),t.set_localplayer(e.new_joiner_name),t.$router.push({path:"/room/"+t.room_id})),console.log("this is players: "+e.players),t.set_playerlist(e.players)})},computed:Object(g["a"])({},Object(h["d"])({socket:"socket",localPlayer:"localPlayer",room_id:"room_id"}))},nt=ot,at=(s("5fae"),Object(i["a"])(nt,et,st,!1,null,null,null)),it=at.exports,rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero is-dark is-fullheight"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container is-mobile"},[s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column is-half"},[s("h1",{staticClass:"title is-size-1 has-text-centered"},[t._v("Pinturillo3")]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showErr,expression:"showErr"}],staticClass:"notification is-danger"},[s("button",{staticClass:"delete",on:{click:function(e){t.showErr=!1}}}),t._v("\n            Password cannot be empty\n          ")]),s("div",{staticClass:"box"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Room Name:")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.room_name,expression:"room_name"}],staticClass:"input",attrs:{type:"text",placeholder:"room name"},domProps:{value:t.room_name},on:{input:function(e){e.target.composing||(t.room_name=e.target.value)}}})])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Room Password:")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.room_password,expression:"room_password"}],staticClass:"input",attrs:{type:"text",placeholder:"password"},domProps:{value:t.room_password},on:{input:function(e){e.target.composing||(t.room_password=e.target.value)}}})])]),s("button",{staticClass:"button is-fullwidth is-success is-outlined",on:{click:function(e){return t.setLocalPlayer()}}},[s("p",[t._v("OK")])])])])])])]),s("Footer")],1)},lt=[],ct={components:{Footer:x},data:function(){return{showErr:!1,room_name:"",room_password:""}},created:function(){console.log("hi")}},ut=ct,dt=Object(i["a"])(ut,rt,lt,!1,null,null,null),ht=dt.exports;o["a"].use(u["a"]);var mt=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:O},{path:"/room/:id",name:"game",component:tt},{path:"/select-room",name:"room-select",component:it},{path:"/private",name:"private",component:ht},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}]});mt.beforeEach(function(t,e,s){"home"==t.name||v.state.localPlayer?s():s({path:"/"})});var ft=mt;o["a"].config.productionTip=!1,new o["a"]({router:ft,store:v,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var o=s("5e27"),n=s.n(o);n.a},"5e27":function(t,e,s){},"5fae":function(t,e,s){"use strict";var o=s("7092"),n=s.n(o);n.a},6298:function(t,e,s){"use strict";var o=s("ecce"),n=s.n(o);n.a},7092:function(t,e,s){},a710:function(t,e,s){},d2ba:function(t,e,s){},dad4:function(t,e,s){},ecce:function(t,e,s){}});
//# sourceMappingURL=app.009b5189.js.map
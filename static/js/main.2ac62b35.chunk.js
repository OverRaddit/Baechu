(this.webpackJsonpopen_source=this.webpackJsonpopen_source||[]).push([[0],{199:function(e,t,a){e.exports=a(458)},205:function(e,t,a){},212:function(e,t,a){},436:function(e,t,a){},455:function(e,t,a){},457:function(e,t,a){},458:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(51),s=a.n(c),l=(a(204),a(205),a(23)),m=a(42);a(206),a(208);m.initializeApp({apiKey:"AIzaSyAfqV5djtFo724NgMvdr9lMuRdW8lhHG9k",authDomain:"baechu-e1beb.firebaseapp.com",databaseURL:"https://baechu-e1beb.firebaseio.com",projectId:"baechu-e1beb",storageBucket:"baechu-e1beb.appspot.com",messagingSenderId:"1076266227992",appId:"1:1076266227992:web:27b0ba14cc01459df8666d",measurementId:"G-GK4XSNZSFV"}),m.auth().setPersistence(m.auth.Auth.Persistence.SESSION);var i=m,u=m.auth(),o=(m.firestore(),a(40)),b=a(5),d=a(62),p=a.n(d),E=a(196),g=a.n(E),f=(a(212),function(e){e.context;var t=e.isLoggedIn;return r.a.createElement("div",{className:"GNB"},r.a.createElement(g.a,null,r.a.createElement(p.a,{className:"GNB__Inner",tabular:!0},t?r.a.createElement(o.b,{className:"item",to:"/My_page"},"MY PAGE"):r.a.createElement(o.b,{className:"item",to:"/Login"},"JoIn&Login"),r.a.createElement(o.b,{className:"item",to:"/Board"},"BOARD"),r.a.createElement(o.b,{className:"item",to:"/Q&A"},"Q&A"),t&&r.a.createElement("button",{className:"item",onClick:function(){return u.signOut()}},"Log Out"))))}),h=a(39),v=a.n(h),N=a(198),O=a.n(N),j=(a(436),function(e){var t=e.tableList;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Header"},r.a.createElement("div",{className:"Header__Inner"},r.a.createElement(v.a,{className:"menu",name:"bars",size:"big"}),r.a.createElement("span",null,"\ubc30\ucd94\ud130"),r.a.createElement(O.a,{icon:r.a.createElement(v.a,{name:"search"}),type:"text",name:"search",placeholder:"search",fluid:!0}))),r.a.createElement(p.a,{className:"table"},t.map((function(e,t){return r.a.createElement(p.a.Item,{key:t},e.name)}))))}),_=(a(455),function(e){var t=e.item,a=t.name,n=t.images;return r.a.createElement("div",{className:"Card"},r.a.createElement("div",{className:"Card__header"},r.a.createElement("span",null,a),r.a.createElement("span",null,"\uc804\uccb4\ubcf4\uae30 ",r.a.createElement(v.a,{name:"angle right"}))),r.a.createElement("div",{className:"Card__content"},n.map((function(e,t){return r.a.createElement("div",{className:"Card_content__item",key:t},r.a.createElement("img",{className:"Card__content__item__img",key:t,src:e.src,alt:"test"}),r.a.createElement("div",{className:"Card__content__item__desc"},e.desc))}))))}),S=[{name:"\uc6b0\ub9ac\ub3d9\ub124 \ucde8\ubbf8",images:[{src:"images/test2.png",desc:"[\ub728\uac1c\uc9c8] \uc9c1\uc811 \ub9cc\ub4dc\ub294 \ubaa9\ub3c4\ub9ac"},{src:"images/test.jpg",desc:"[\uc190\uc218\uac74 \ub9cc\ub4e4\uae30] kit \ubd09\uc0ac \ud6c4\uc6d0"},{src:"images/test1.png",desc:"[\uac00\ubc29 \ub9cc\ub4e4\uae30] \ube44\uc988, \ub728\uac1c\uc9c8, \ucf54\ubc14\ub298 \ubb34\ub8cc \ub4dc\ub9bc"}]},{name:"\ud648\ucde8\ubbf8 & DIY \ud0a4\ud2b8",images:[{src:"images/test2.png",desc:"[\ub728\uac1c\uc9c8] \uc9c1\uc811 \ub9cc\ub4dc\ub294 \ubaa9\ub3c4\ub9ac"},{src:"images/test.jpg",desc:"[\uc190\uc218\uac74 \ub9cc\ub4e4\uae30] kit \ubd09\uc0ac \ud6c4\uc6d0"},{src:"images/test1.png",desc:"[\uac00\ubc29 \ub9cc\ub4e4\uae30] \ube44\uc988, \ub728\uac1c\uc9c8, \ucf54\ubc14\ub298 \ubb34\ub8cc \ub4dc\ub9bc"}]},{name:"BEST",images:[{src:"images/test2.png",desc:"[\ub728\uac1c\uc9c8] \uc9c1\uc811 \ub9cc\ub4dc\ub294 \ubaa9\ub3c4\ub9ac"},{src:"images/test.jpg",desc:"[\uc190\uc218\uac74 \ub9cc\ub4e4\uae30] kit \ubd09\uc0ac \ud6c4\uc6d0"},{src:"images/test1.png",desc:"[\uac00\ubc29 \ub9cc\ub4e4\uae30] \ube44\uc988, \ub728\uac1c\uc9c8, \ucf54\ubc14\ub298 \ubb34\ub8cc \ub4dc\ub9bc"}]}],I=function(){var e=r.a.useState(null),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),m=Object(l.a)(s,2),i=(m[0],m[1]),o=Object(n.useState)(u.currentUser),b=Object(l.a)(o,2),d=b[0],p=b[1];return Object(n.useEffect)((function(){u.onAuthStateChanged((function(e){p(!!e),i(!0)}))}),[]),r.a.createElement("div",{className:"Home",ref:function(e){return c(e)}},r.a.createElement(f,{context:a,isLoggedIn:d}),r.a.createElement(j,{tableList:S}),S.map((function(e,t){return r.a.createElement(_,{key:t,item:e})})))},k=a(63),w=a.n(k),y=a(129),x=(a(457),function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),m=Object(l.a)(s,2),o=m[0],b=m[1],d=Object(n.useState)(!1),p=Object(l.a)(d,2),E=p[0],g=(p[1],Object(n.useState)("")),f=Object(l.a)(g,2),h=f[0],v=f[1],N=Object(n.useState)(u.currentUser),O=Object(l.a)(N,2),j=(O[0],O[1],function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&b(n)}),_=function(){var e=Object(y.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!E){e.next=8;break}return e.next=5,u.createUserWithEmailAndPassword(a,o);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,u.signInWithEmailAndPassword(a,o);case 10:n=e.sent;case 11:console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),v(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(y.a)(w.a.mark((function e(t){var a,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new i.auth.GoogleAuthProvider:"github"===a&&(n=new i.auth.GithubAuthProvider),e.next=4,u.signInWithPopup(n);case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"login"},r.a.createElement("section",{className:"login-form"},r.a.createElement("h1",null,E?"JOIN":"LOGIN"),r.a.createElement("h2",null,h)," ",r.a.createElement("br",null),r.a.createElement("form",{onSubmit:_},r.a.createElement("div",{className:"int-area"},r.a.createElement("input",{type:"text",name:"email",id:"id",autocomplete:"off",onChange:j,required:!0}),r.a.createElement("label",{for:"id"}," USER NAME")),r.a.createElement("div",{className:"int-area"},r.a.createElement("input",{type:"password",name:"password",id:"pw",autocomplete:"off",onChange:j,required:!0}),r.a.createElement("label",{for:"pw"}," PASSWORD")),r.a.createElement("div",{className:"btn-area"},r.a.createElement("button",{type:"submit"},E?"Join":"Login")," ",r.a.createElement("br",null),r.a.createElement("br",null))),r.a.createElement("div",{className:"caption"},r.a.createElement("a",{href:""}," Forgot Password?")),r.a.createElement("button",{type:"submit",onClick:S,name:"google"},"LOGIN by Google")," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",onClick:S,name:"github"},"LOGIN by Github ")))}),A=function(e){var t=e.isLoggedIn;return r.a.createElement(o.a,{basename:"/Baechu"},r.a.createElement(b.c,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{exact:!0,path:"/"},r.a.createElement(I,null)),r.a.createElement(b.a,{exact:!0,path:"/My_page",component:x}),r.a.createElement(b.a,{exact:!0,path:"/Board",component:x}),r.a.createElement(b.a,{exact:!0,path:"/Q&A",component:x})):r.a.createElement(b.a,{exact:!0,path:"/"},r.a.createElement(x,null))))};var L=function(){console.log(u.currentUser);var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),m=Object(l.a)(s,2),i=m[0],o=m[1];return Object(n.useEffect)((function(){u.onAuthStateChanged((function(e){o(!!e),c(!0)}))}),[]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement(A,{isLoggedIn:i}):"Initializing...",r.a.createElement("footer",null,"\xa9 ",(new Date).getFullYear()," Nwitter"))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root"))}},[[199,1,2]]]);
//# sourceMappingURL=main.2ac62b35.chunk.js.map
(this["webpackJsonpurban-smart"]=this["webpackJsonpurban-smart"]||[]).push([[0],{80:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(28),i=n.n(c),s=(n(80),n(38)),o=n(37),d=n(145),j=n(144),l=n(142),b=n(141),u=n(2),p=Object(b.a)({paper:{margin:"1em auto",padding:"1em",width:"50vw",textAlign:"center"}}),O=function(){var e=p(),t=Object(o.c)((function(e){return e.loginValid.login}));return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(j.a,{className:e.paper,children:[Object(u.jsxs)(d.a,{variant:"h1",color:"initial",children:["Login: ",t]}),Object(u.jsx)(l.a,{component:s.b,to:"/",variant:"outlined",children:"Back to main page"})]})})},g=function(){return Object(u.jsx)(O,{})},m=n(14),h=n(140),x=n(138),f=n(49),v=Object(f.b)({name:"validation",initialState:{login:"",password:""},reducers:{loginValid:function(e,t){e.login=t.payload},passwordValid:function(e,t){e.password=t.payload}}}),w=v.actions,V=w.loginValid,k=w.passwordValid,y=v.reducer,S=Object(b.a)({paper:{margin:"1em auto",padding:"1em",width:"20em"}}),C=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(m.a)(c,2),d=i[0],b=i[1],p=Object(o.b)(),O=S();return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(j.a,{className:O.paper,children:Object(u.jsxs)(x.a,{children:[Object(u.jsx)(h.a,{required:!0,id:"login",label:"Login",margin:"dense",onChange:function(e){r(e.currentTarget.value)}}),Object(u.jsx)(h.a,{required:!0,id:"pass",label:"Password",type:"password",onChange:function(e){b(e.currentTarget.value)},margin:"dense"}),Object(u.jsx)(l.a,{component:s.b,to:"/profile/",disabled:"developer21"!==n||"123456"!==d,onClick:function(){p(k(d)),p(V(n))},sx:{my:"1em"},variant:"contained",children:"Submit"})]})})})},q=function(){return Object(u.jsx)(C,{})},B=n(16),F=Object(f.a)({reducer:{loginValid:y,passwordValid:y}});var J=function(){return Object(u.jsx)(o.a,{store:F,children:Object(u.jsx)(s.a,{basename:"/ustask/",children:Object(u.jsxs)(B.c,{children:[Object(u.jsx)(B.a,{path:"/",exact:!0,children:Object(u.jsx)(q,{})}),Object(u.jsx)(B.a,{path:"/profile/",children:Object(u.jsx)(g,{})})]})})})};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(J,{})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.7ab23780.chunk.js.map
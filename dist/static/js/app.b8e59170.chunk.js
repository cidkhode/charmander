(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{45:function(e,t,o){"use strict";o.d(t,"a",(function(){return p}));var n=o(17),a=o.n(n),r=o(0),l=o.n(r),i=o(6),c=o(36),d=o(20),s=o(42),u=o(11),b=o(68),g=o(48),f=i.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},title:{flex:1,fontSize:42,position:"relative",alignSelf:"center",top:.3*c.a.get("window").height},buttons:{position:"relative",bottom:.05*c.a.get("window").height},generateButton:{borderWidth:2,borderColor:"red",padding:20,borderRadius:10,color:"red",marginBottom:30},enabledButton:{opacity:1},generatedCode:{color:"red",position:"absolute",top:-20,fontSize:25},disabledButton:{opacity:.2,borderColor:"blue"},tooltip:{color:"white",position:"absolute",bottom:.1*c.a.get("window").height,fontSize:15,padding:10,backgroundColor:"#D3D3D3",opacity:.9,borderRadius:10,borderColor:"#D3D3D3",borderWidth:2,overflow:"hidden"}});function p(){var e=Object(r.useState)(""),t=a()(e,2),o=t[0],n=t[1],i=Object(r.useState)(!1),c=a()(i,2),p=c[0],m=c[1],h=function(e){e?(b.a(o),m(!0),setTimeout((function(){m(!1),n("")}),2e3)):n(function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",t="",o=0;o<10;o++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}())};return l.a.createElement(g.a,null,l.a.createElement(u.a,{style:f.container},l.a.createElement(d.a,{style:[f.title]},"ily \u2764\ufe0f"),l.a.createElement(u.a,{style:f.container},l.a.createElement(s.a,{style:f.buttons,onPress:function(){return h(!1)}},l.a.createElement(d.a,{style:f.generateButton},"Generate Text Code")),l.a.createElement(s.a,{style:[f.buttons,0===o.length?f.disabledButton:f.enabledButton],onPress:function(){return h(!0)},disabled:0===o.length},l.a.createElement(d.a,{style:f.generateButton},"Copy & Clear Code")),o.length>0?l.a.createElement(d.a,{style:f.generatedCode},o):l.a.createElement(l.a.Fragment,null),p?l.a.createElement(d.a,{style:f.tooltip},"Copied to clipboard babez \ud83d\ude0e"):l.a.createElement(l.a.Fragment,null))))}},71:function(e,t,o){e.exports=o(95)}},[[71,1,2]]]);
//# sourceMappingURL=app.b8e59170.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),s=a(2),u=a(3),i=a(5),l=a(4),m=a(1),d=a(6),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={color:e.color,sound:e.sound,name:e.name,playing:!1},a.activate=a.activate.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"activate",value:function(){var e=this,t=document.getElementById(this.state.name+"Sound");1==this.state.playing?(t.pause(),t.currentTime=0,this.setState({playing:!1})):(t.volume=.3,t.play(),this.setState({playing:!0}),setTimeout(function(){e.setState({playing:!1})},1e3*t.duration))}},{key:"render",value:function(){return r.a.createElement("div",{className:"note",id:this.state.name,onMouseUp:this.activate},r.a.createElement("div",{className:"uk-card uk-card-default uk-card-body",style:{backgroundColor:this.state.color}},r.a.createElement("p",{style:{color:"white"}},this.state.name)),r.a.createElement("audio",{className:"noteAudio",id:this.state.name+"Sound"},r.a.createElement("source",{src:this.state.sound})))}}]),t}(r.a.Component),h=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={all_sounds:[],route:"base"},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;return fetch("https://aituglo.com/api/soundBox.json").then(function(e){return e.json()}).then(function(t){e.setState({all_sounds:t})}).catch(function(e){console.error("Error"+e)})}},{key:"render",value:function(){var e=this,t=this.state,a=t.route,n=t.all_sounds;return r.a.createElement("div",null,r.a.createElement("nav",{class:"uk-navbar uk-navbar-container uk-margin"},r.a.createElement("div",{class:"uk-navbar-left"},r.a.createElement("a",{class:"uk-navbar-toggle","uk-toggle":"target: #offcanvas-nav",href:"#"},r.a.createElement("span",{"uk-navbar-toggle-icon":!0})," ",r.a.createElement("span",{class:"uk-margin-small-left"},"Menu")))),r.a.createElement("div",{id:"offcanvas-nav","uk-offcanvas":"mode: push"},r.a.createElement("div",{className:"uk-offcanvas-bar"},r.a.createElement("ul",{className:"uk-nav uk-nav-default"},n.map(function(t){return r.a.createElement("li",{className:"uk-nav-header"},r.a.createElement("a",{href:"#",onClick:function(){return e.setState({route:t.route})}},t.name))})))),r.a.createElement("div",{className:"uk-container uk-padding"},r.a.createElement("h1",{className:"uk-heading-line uk-text-center"},r.a.createElement("span",null,"Aitubox")),r.a.createElement("div",{className:"uk-grid-column-small uk-grid-row-large uk-child-width-1-5@s uk-text-center","uk-grid":"true"},n.map(function(e){if(e.route===a)return e.sounds.map(function(e){return r.a.createElement(v,{sound:e.url,key:e.id,name:e.title,color:e.color})})}))))}}]),t}(r.a.Component);var f=function(){return r.a.createElement(h,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.0bb35635.chunk.js.map
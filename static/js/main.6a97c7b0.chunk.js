(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{250:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),i=n(14),o=n.n(i),s=(n(93),n(22)),c=n(23),l=n(26),u=n(24),p=n(25),m=n(32),h=(n(95),n(84)),y=n.n(h),d=n(86),f=n.n(d),v={container:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},text:{margin:10},button:{margin:10}},b=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={value:""},n.onInput=function(t){n.setState({value:t.target.value})},n.onSubmit=function(t){n.state.value.length>0&&n.props.onInputSubmit(n.state.value.toLowerCase())},n}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{style:v.container},r.a.createElement(y.a,{id:"outlined-full-width",label:"Name or Number",style:v.text,placeholder:"Charmander",margin:"normal",variant:"outlined",InputLabelProps:{shrink:!0},onChange:this.onInput,value:this.state.value}),r.a.createElement(f.a,{variant:"contained",color:"secondary",style:v.button,onClick:this.onSubmit},"Submit"))}}]),e}(a.Component),g=n(87),k=n.n(g),j={card:{margin:20,width:200,height:200,display:"flex",flexDirection:"column",backgroundColor:"#eee",alignItems:"center"},top:{margin:10},sprite:{margin:-15},bottom:{margin:10}},w=function(t){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(c.a)(e,[{key:"firstUpper",value:function(t){return t.charAt(0).toUpperCase()+t.substr(1)}},{key:"attachPound",value:function(t){return isNaN(t)||0===t.length?t:"#"+t}},{key:"renderTypes",value:function(){var t=this;return r.a.createElement("div",{style:j.bottom},this.props.types.map(function(e,n){return n!==t.props.types.length-1?t.firstUpper(e)+", ":t.firstUpper(e)}))}},{key:"render",value:function(){return r.a.createElement(k.a,{style:j.card},r.a.createElement("div",{style:j.top},this.attachPound(this.props.number)," ",this.firstUpper(this.props.name)),r.a.createElement("div",{style:j.sprite},r.a.createElement("img",{style:{width:150,height:150},src:this.props.sprite,alt:"pokemon sprite"})),this.renderTypes())}}]),e}(a.Component),O={container:{display:"flex",flexDirection:"column",alignItems:"center"},title:{margin:20},inputs:{padding:10}},P=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={entry:"",name:"",sprite:"",types:[]},n.PokeAPI=n.PokeAPI.bind(Object(m.a)(Object(m.a)(n))),n.PokeAPIitem("4"),n}return Object(p.a)(e,t),Object(c.a)(e,[{key:"PokeAPI",value:function(t){var e=this;fetch("https://pokeapi.co/api/v2/pokemon/".concat(t,"/")).then(function(t){if(t.ok)return t.json();console.log("caught")}).then(function(t){e.setState({types:[]}),e.setState({name:t.name,sprite:t.sprites.front_default,entry:t.id}),t.types.map(function(n,a){var r=e.state.types;r.push(t.types[a].type.name),e.setState({types:r})})})}},{key:"PokeAPIitem",value:function(t){var e=this;fetch("https://pokeapi.co/api/v2/item/".concat(t,"/")).then(function(t){return t.json()}).then(function(t){e.setState({name:t.name,sprite:t.sprites.default,entry:"",types:[]})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App",style:O.container},r.a.createElement("div",{style:O.title},"Pokedex Lookup"),r.a.createElement("div",{style:O.inputs},r.a.createElement(b,{onInputSubmit:this.PokeAPI})),r.a.createElement(w,{name:this.state.name,number:this.state.entry,sprite:this.state.sprite,types:this.state.types}))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},88:function(t,e,n){t.exports=n(250)},93:function(t,e,n){},95:function(t,e,n){}},[[88,2,1]]]);
//# sourceMappingURL=main.6a97c7b0.chunk.js.map
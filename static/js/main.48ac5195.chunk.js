(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},52:function(e,t,n){e.exports=n(71)},57:function(e,t,n){},58:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(8),s=n.n(o),r=(n(57),n(28)),l=n(21),c=n(22),p=n(25),h=n(23),u=n(29),m=n(26),d=(n(58),n(103)),f=n(104),v={container:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},input:{margin:"10px"},button:{backgroundColor:"#ee1515",color:"white",margin:"0px 5px",textTransform:"none"}},g=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).onInput=function(e){n.setState({value:e.target.value})},n.onSubmit=function(e){n.state.value.length>0&&n.props.onInputSubmit(n.state.value.toLowerCase())},n.state={value:""},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{style:v.container},a.a.createElement(d.a,{label:"Name or Number",style:v.input,placeholder:"Charmander",margin:"normal",variant:"outlined",InputLabelProps:{shrink:!0},onChange:this.onInput,value:this.state.value,onKeyPress:function(t){"Enter"===t.key&&(t.preventDefault(),e.onSubmit())}}),a.a.createElement(f.a,{variant:"outlined",style:v.button,onClick:this.onSubmit},"Submit"))}}]),t}(i.Component),y=n(102),w=n(47),k=n.n(w),x=n(48),b=n.n(x),E={card:{margin:"20px",width:"400px",height:"300px",display:"flex",backgroundColor:"#f0f0f0",flexDirection:"row",justifyContent:"space-evenly"},logo:{animation:"App-logo-spin infinite 20s linear",height:"100%"},left:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},top:{width:"90%",display:"flex",justifyContent:"space-between",margin:"10px"},sprite:{},bottom:{height:"100%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",margin:"0px 0px 10px 0px"},typeList:{textAlign:"center"},type:{margin:"0px 0px 10px 0px"},right:{margin:"10px 0px 10px 0px",width:"100%",display:"flex",flexDirection:"column"},moveHeader:{fontWeight:"bold",textAlign:"center"},moveList:{overflow:"scroll"},move:{}},j=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"firstUpper",value:function(e){return"undefined"===typeof e?null:e.charAt(0).toUpperCase()+e.substr(1)}},{key:"attachPound",value:function(e){return isNaN(e)||0===e.length?e:"#"+e}},{key:"render",value:function(){var e=this,t=this.props,n=t.name,i=t.number,o=t.sprite,s=t.types,l=t.moves,c=t.height,p=t.weight,h=t.loaded;return a.a.createElement(y.a,{style:this.props.shrink?Object(r.a)({},E.card,{margin:"0px"}):E.card},a.a.createElement("div",{style:E.left},a.a.createElement("div",{style:E.top},a.a.createElement("div",null,this.attachPound(i)," "),a.a.createElement("div",null,this.firstUpper(n)),a.a.createElement(b.a,{onClick:function(){var e="https://pokeapi.co/api/v2/pokemon/".concat(i,"/");i||(e="https://pokeapi.co/api/v2/item/".concat(n,"/")),window.open(e,"_blank")},style:{width:"20px",height:"20px"}})),a.a.createElement("div",{style:E.sprite},h?a.a.createElement("img",{style:{width:"150px",height:"150px"},src:o,alt:"pokemon sprite"}):a.a.createElement("img",{src:k.a,className:"App-logo",style:h?Object(r.a)({},E.logo,{hidden:!0}):E.logo,alt:"react logo"})),a.a.createElement("div",{style:E.bottom},a.a.createElement("div",{style:E.typeList},s.map(function(t,n){return a.a.createElement("div",{style:E.type,key:n},e.firstUpper(t))})),a.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"}},a.a.createElement("div",null,"Height: ",c),a.a.createElement("div",null,"Weight: ",p)))),a.a.createElement("div",{style:E.right},a.a.createElement("div",{style:E.moveHeader},"Moves"),a.a.createElement("div",{style:E.moveList},l.map(function(t,n){return a.a.createElement("div",{style:E.move,key:n},n,".",e.firstUpper(t.name))}))))}}]),t}(i.Component),O={container:{display:"flex",flexDirection:"column",alignItems:"center"},title:{margin:"20px",fontSize:"24px"},inputs:{padding:"10px"}},P={loaded:!1,entry:"",name:"",sprite:"",types:["-"],stats:[],moves:[],height:"",weight:""},I=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).PokeAPI=n.PokeAPI.bind(Object(u.a)(n)),n.updateWindowDimensions=n.updateWindowDimensions.bind(Object(u.a)(n)),n.PokeAPIitem("4"),n.state=Object(r.a)({},P,{windowWidth:0,windowHeight:0,shrink:!1}),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){window.innerHeight<500?this.state.shrink||this.setState({shrink:!0}):this.state.shrink&&this.setState({shrink:!1}),this.setState({windowWidth:window.innerWidth,windowHeight:window.innerHeight})}},{key:"PokeAPI",value:function(e){var t=this;this.setState(Object(r.a)({},{LOADING_STATE:P})),fetch("https://pokeapi.co/api/v2/pokemon/".concat(e,"/")).then(function(e){if(!e.ok){var t=["You missed the Pokemon!","Darn! The Pokemon broke free!","Aww! It appeared to be caught!","Shoot! It was so close too!"];return console.log(t[Math.floor(Math.random()*t.length)]),!1}return e.json()}).then(function(e){if(e){var n=[];e.types.forEach(function(e){n.push(e.type.name)});var i=[];e.stats.forEach(function(e){i.push({name:e.stat.name,base_stat:e.base_stat,effort:e.effort})});var a=[];e.moves.forEach(function(e,t){a.push({name:e.move.name,version_group_details:e.version_group_details})}),t.setState({name:e.name,sprite:e.sprites.front_default,entry:e.id,types:n,stats:i,moves:a,height:e.height,weight:e.weight,loaded:!0}),console.log("All right! ".concat(e.name.charAt(0).toUpperCase()+e.name.substr(1)," was caught!"))}})}},{key:"PokeAPIitem",value:function(e){var t=this;fetch("https://pokeapi.co/api/v2/item/".concat(e,"/")).then(function(e){return e.json()}).then(function(e){t.setState({name:e.name,sprite:e.sprites.default,entry:"",types:[],loaded:!0})})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App",style:O.container},this.state.shrink?a.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},a.a.createElement("div",{style:{margin:"10px",fontSize:"24px"}},"Pok\xe9dex"),a.a.createElement("div",{style:{padding:"5px"}},a.a.createElement(g,{onInputSubmit:this.PokeAPI,shrink:this.state.shrink}))):null,this.state.shrink?null:a.a.createElement("div",{style:O.title},"Pok\xe9dex Lookup"),this.state.shrink?null:a.a.createElement("div",{style:O.inputs},a.a.createElement(g,{onInputSubmit:this.PokeAPI})),a.a.createElement(j,{name:this.state.name,number:this.state.entry,sprite:this.state.sprite,types:this.state.types,stats:this.state.stats,moves:this.state.moves,height:this.state.height,weight:this.state.weight,loaded:this.state.loaded,shrink:this.state.shrink}))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[52,1,2]]]);
//# sourceMappingURL=main.48ac5195.chunk.js.map
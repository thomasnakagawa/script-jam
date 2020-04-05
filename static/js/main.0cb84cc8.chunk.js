(this.webpackJsonplofi=this.webpackJsonplofi||[]).push([[0],{24:function(e,t,n){e.exports=n.p+"static/media/KICK1.226fbf2c.wav"},25:function(e,t,n){e.exports=n.p+"static/media/HIHAT1.7cb09c75.wav"},26:function(e,t,n){e.exports=n.p+"static/media/SNARE4.3efa79aa.wav"},27:function(e,t,n){e.exports=n.p+"static/media/synth_note.3c1ccfc4.ogg"},28:function(e,t,n){e.exports=n.p+"static/media/synth2.3fb56212.ogg"},29:function(e,t,n){e.exports=n(47)},34:function(e,t,n){},35:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},36:function(e,t,n){},45:function(e,t,n){e.exports=n.p+"static/media/jazz_sample_django.900acd2d.wav"},46:function(e,t,n){e.exports=n.p+"static/media/bass.bc3432be.wav"},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(23),l=n.n(s),i=(n(34),n(2));n(35),n(36);function o(e){return r.a.createElement("div",{className:"Keypad"},e.keyRows.map((function(t,n){return r.a.createElement("div",{key:t,className:"row"},t.map((function(t,n){return r.a.createElement(c,{key:n,keyName:t,isPressed:!!e.pressedKeys[t],isVirtuallyPressed:!!e.virtualKeys.includes(t),onClickDown:e.onUIClickDown.bind(null,t),onClickUp:e.onUIClickUp.bind(null,t)})})))})))}function c(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),s=n[0],l=n[1];return r.a.createElement("div",{className:"drum-pad"+(e.isPressed||s?" pressed":"")+(e.isVirtuallyPressed?" virtual-pressed":""),onMouseDown:function(){e.onClickDown(),l(!0)},onMouseUp:function(){e.onClickUp(),l(!1)}},r.a.createElement("p",null,e.keyName))}var u=n(10),p=n(14),h=n(3),d=n(4),y=n(1),v=n(5),f=n(6),b=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={pressedKeys:{}},a.handleKeyPress=a.handleKeyPress.bind(Object(y.a)(a)),a.handleKeyRelease=a.handleKeyRelease.bind(Object(y.a)(a)),a.handleUIClickDown=a.handleUIClickDown.bind(Object(y.a)(a)),a.handleUIClickUp=a.handleUIClickUp.bind(Object(y.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress),document.addEventListener("keyup",this.handleKeyRelease)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress),document.removeEventListener("keyup",this.handleKeyRelease)}},{key:"handleKeyPress",value:function(e){this.state.pressedKeys[e.key]||(this.props.onKeyDown(e.key),this.setState({pressedKeys:Object(p.a)({},this.state.pressedKeys,Object(u.a)({},e.key,!0))}))}},{key:"handleKeyRelease",value:function(e){this.props.onKeyUp(e.key),this.setState({pressedKeys:Object(p.a)({},this.state.pressedKeys,Object(u.a)({},e.key,!1))})}},{key:"handleUIClickDown",value:function(e){this.props.onKeyDown(e)}},{key:"handleUIClickUp",value:function(e){this.props.onKeyUp(e)}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.Children.map(this.props.children,(function(t){return r.a.cloneElement(t,{pressedKeys:e.state.pressedKeys,virtualKeys:e.props.virtualKeys,onUIClickDown:e.handleUIClickDown,onUIClickUp:e.handleUIClickUp})})))}}]),n}(r.a.Component),k=n(9);function m(e){return r.a.createElement("div",{className:"Sampler"},r.a.createElement(b,{onKeyDown:e.onKeyDown,onKeyUp:e.onKeyUp,virtualKeys:e.virtualKeys},r.a.createElement(o,{keyRows:Object(k.reverse)(Object(k.chunk)(e.playableKeys,4))})))}var K=n(12),g=n.n(K);n(21),n(22);var j=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).getMarkers=a.getMarkers.bind(Object(y.a)(a)),a}return Object(d.a)(n,[{key:"getMarkers",value:function(){return console.log(this.props.markerConfig),[{startRow:this.props.markerConfig.line,endRow:this.props.markerConfig.line,startCol:this.props.markerConfig.char,endCol:this.props.markerConfig.char+1,className:this.props.markerConfig.show?"line-highlight":"",type:"background"}]}},{key:"render",value:function(){return r.a.createElement(g.a,{value:this.props.code,mode:"java",theme:"github",onChange:this.props.onCodeChange,name:"UNIQUE_ID_OF_DIV",editorProps:{$blockScrolling:!0},markers:this.getMarkers()})}}]),n}(a.Component),O=n(7),w=n.n(O),I=(r.a.Component,n(24)),C=n.n(I),E=n(25),U=n.n(E),S=n(26),P=n.n(S),D=(n(45),n(46),n(27)),L=n.n(D),M=n(28),x=n.n(M),N=function(e){return Math.pow(2,e/12)},R=[N(-12),N(-10),N(-9),N(-7),N(-5),N(-4),N(-2),N(-1),N(0),N(2),N(3),N(5),N(7),N(8),N(10),N(11)],V=new w.a.Sound(L.a,(function(){})),A=new w.a.Sound(x.a,(function(){})),_=new w.a.Sound(C.a,(function(){})),W=new w.a.Sound(P.a,(function(){})),z=new w.a.Sound(U.a,(function(){}));function F(e){function t(e,t){e.stop(),e.attack=0,e.play(),e.sourceNode.playbackRate.value=t||1}function n(n){if(n&&" "!==n){var a=Object(k.indexOf)(e.playableKeys,n),r=Object(k.indexOf)(e.playableKeys2,n);if(-1!==a)t(V,R[a]);else if(-1!==r)t(A,R[r]);else{var s=n.charCodeAt(0);t((s-1)%4===0?_:s%4===0?W:z,1+Math.floor(s/30))}}}return Object(a.useEffect)((function(){e.virtualKeys.forEach((function(e){n(e)}))}),[e.virtualKeys]),Object(a.useEffect)((function(){n(e.userKey)}),[e.userKey]),r.a.createElement(r.a.Fragment,null)}var q=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={isPlaying:!1,currentPlayingLine:-1,playbackInterval:null,runInterval:null},a.handlePlay=a.handlePlay.bind(Object(y.a)(a)),a.handleStop=a.handleStop.bind(Object(y.a)(a)),a.handleLine=a.handleLine.bind(Object(y.a)(a)),a}return Object(d.a)(n,[{key:"componentWillUnmount",value:function(){this.state.playbackInterval&&clearInterval(this.state.playbackInterval),this.state.runInterval&&clearInterval(this.state.runInterval)}},{key:"handlePlay",value:function(){this.state.playbackInterval&&(clearInterval(this.state.playbackInterval),this.setState({playbackInterval:null})),this.handleLine(),this.setState({isPlaying:!0,playbackInterval:setInterval(this.handleLine,6e4/this.props.tempo)})}},{key:"handleStop",value:function(){clearInterval(this.state.playbackInterval),clearInterval(this.state.runInterval),this.setState({isPlaying:!1,currentPlayingLine:-1,playbackInterval:null,runInterval:null}),this.props.onVirtualKeys([])}},{key:"handleLine",value:function(){var e=this;this.runInterval&&(clearInterval(this.runInterval),this.setState({runInterval:null}));var t=this.props.tracks[0].code.split(/\r\n|\r|\n/),n=(this.state.currentPlayingLine+1)%t.length;this.setState({currentPlayingLine:n});var a=t[n];if(a.length>0&&(this.props.onVirtualKeys([a.charAt(0)]),this.props.onMarkerChange({line:n,char:0,show:!0}),a.length>1)){var r=6e4/this.props.tempo/a.length,s=0,l=setInterval((function(){(s+=1)<a.length&&(e.props.onVirtualKeys([a.charAt(s)]),e.props.onMarkerChange({line:n,char:s,show:!0}))}),r);this.setState({runInterval:l})}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.handlePlay},"Play"),r.a.createElement("button",{onClick:this.handleStop},"Stop"))}}]),n}(a.Component),B=["z","x","c","v","a","s","d","f","q","w","e","r","1","2","3","4"],H=["b","n","m",",","g","h","j","k","t","y","u","i","5","6","7","8"];var J=function(){var e=Object(a.useState)(120),t=Object(i.a)(e,2),n=t[0],s=(t[1],Object(a.useState)(0)),l=Object(i.a)(s,2),o=l[0],c=(l[1],Object(a.useState)([])),u=Object(i.a)(c,2),p=u[0],h=u[1],d=Object(a.useState)(null),y=Object(i.a)(d,2),v=y[0],f=y[1],b=Object(a.useState)({line:0,char:0,show:!1}),k=Object(i.a)(b,2),K=k[0],g=k[1],O=Object(a.useState)([{type:"pitch",code:"q\n e\nd\n s\n s\nd f \nd  d\n 1"}]),w=Object(i.a)(O,2),I=w[0],C=w[1];return r.a.createElement("div",{className:"App"},r.a.createElement(m,{playableKeys:B,virtualKeys:p,onKeyDown:function(e){f(e)},onKeyUp:function(e){f(null)}}),r.a.createElement(q,{tempo:n,onVirtualKeys:h,tracks:I,onMarkerChange:g}),r.a.createElement(j,{code:I[o].code,onCodeChange:function(e){var t=I;t[o].code=e,C(t)},markerConfig:K}),r.a.createElement(F,{playableKeys:B,playableKeys2:H,userKey:v,virtualKeys:p}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.0cb84cc8.chunk.js.map
import{a as l,T as ne,P as a,r as g,j as e}from"./mui-CVeSmhdP.js";import{V as R,m as N,i as C,t as Re,U as Ve,G as Le,f as $e,R as oe,C as w,g as k,n as T,h as O}from"./index-BH8F5Bwl.js";import{p as ie}from"./23-j9baV60P.js";import{p as se,a as ae}from"./12-BoA7j2qL.js";import{p as le}from"./1-ByF5TeA1.js";import{p as ce}from"./2-6Nq-NWjX.js";import{p as he,a as de}from"./4-DCgG1vGv.js";import{p as pe,a as ue}from"./6-BJINFi2J.js";import{p as fe}from"./7-BJrHVSNn.js";import{p as ve}from"./8-BKozVxKV.js";import{p as me,a as Be}from"./14-Cty3GH_X.js";import{p as De}from"./15-B8m0TEgW.js";import{p as Ue}from"./18-_lBha22h.js";import{p as xe}from"./11-CXMNXrrx.js";import{p as ye}from"./9-6adv4okN.js";import{p as ge}from"./10-D5yevdwQ.js";import{C as E}from"./CardTitle-DfjUI6oT.js";import"./vendor-CC_ZIGTP.js";import"./utils-ngrFHoWO.js";var $=l.createContext({});function W(n){"@babel/helpers - typeof";return W=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},W(n)}var Ae=["in","children","cssModule","slide","tag","className"];function je(n,r){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);r&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),i.push.apply(i,o)}return i}function B(n){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?je(Object(i),!0).forEach(function(o){qe(n,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):je(Object(i)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(i,o))})}return n}function qe(n,r,i){return r in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i,n}function X(){return X=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])}return n},X.apply(this,arguments)}function We(n,r){if(n==null)return{};var i=Xe(n,r),o,t;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(t=0;t<s.length;t++)o=s[t],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}function Xe(n,r){if(n==null)return{};var i={},o=Object.keys(n),t,s;for(s=0;s<o.length;s++)t=o[s],!(r.indexOf(t)>=0)&&(i[t]=n[t]);return i}function Ke(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function Ye(n,r){for(var i=0;i<r.length;i++){var o=r[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function Ge(n,r,i){return r&&Ye(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function Fe(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),r&&K(n,r)}function K(n,r){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,t){return o.__proto__=t,o},K(n,r)}function Je(n){var r=Ze();return function(){var o=D(n),t;if(r){var s=D(this).constructor;t=Reflect.construct(o,arguments,s)}else t=o.apply(this,arguments);return Qe(this,t)}}function Qe(n,r){if(r&&(W(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return H(n)}function H(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Ze(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function D(n){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},D(n)}var L=(function(n){Fe(i,n);var r=Je(i);function i(o){var t;return Ke(this,i),t=r.call(this,o),t.state={startAnimation:!1},t.onEnter=t.onEnter.bind(H(t)),t.onEntering=t.onEntering.bind(H(t)),t.onExit=t.onExit.bind(H(t)),t.onExiting=t.onExiting.bind(H(t)),t.onExited=t.onExited.bind(H(t)),t}return Ge(i,[{key:"onEnter",value:function(t,s){this.setState({startAnimation:!1}),this.props.onEnter(t,s)}},{key:"onEntering",value:function(t,s){var c=t.offsetHeight;return this.setState({startAnimation:!0}),this.props.onEntering(t,s),c}},{key:"onExit",value:function(t){this.setState({startAnimation:!1}),this.props.onExit(t)}},{key:"onExiting",value:function(t){this.setState({startAnimation:!0}),t.dispatchEvent(new CustomEvent("slide.bs.carousel")),this.props.onExiting(t)}},{key:"onExited",value:function(t){t.dispatchEvent(new CustomEvent("slid.bs.carousel")),this.props.onExited(t)}},{key:"render",value:function(){var t=this,s=this.props,c=s.in,d=s.children,p=s.cssModule,u=s.slide,h=u===void 0?!0:u,v=s.tag,x=v===void 0?"div":v,m=s.className,f=We(s,Ae);return l.createElement(ne,X({},f,{enter:h,exit:h,in:c,onEnter:this.onEnter,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),function(b){var P=t.context.direction,y=b===R.ENTERED||b===R.EXITING,z=(b===R.ENTERING||b===R.EXITING)&&t.state.startAnimation&&(P==="end"?"carousel-item-start":"carousel-item-end"),M=b===R.ENTERING&&(P==="end"?"carousel-item-next":"carousel-item-prev"),q=N(C(m,"carousel-item",y&&"active",z,M),p);return l.createElement(x,{className:q},d)})}}]),i})(l.Component);L.propTypes=B(B({},ne.propTypes),{},{tag:Re,in:a.bool,cssModule:a.object,children:a.node,slide:a.bool,className:a.string});L.defaultProps=B(B({},ne.defaultProps),{},{timeout:Ve.Carousel});L.contextType=$;function Y(n){"@babel/helpers - typeof";return Y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Y(n)}function V(){return V=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])}return n},V.apply(this,arguments)}function et(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function be(n,r){for(var i=0;i<r.length;i++){var o=r[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function tt(n,r,i){return r&&be(n.prototype,r),i&&be(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}function nt(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),r&&G(n,r)}function G(n,r){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,t){return o.__proto__=t,o},G(n,r)}function rt(n){var r=it();return function(){var o=U(n),t;if(r){var s=U(this).constructor;t=Reflect.construct(o,arguments,s)}else t=o.apply(this,arguments);return ot(this,t)}}function ot(n,r){if(r&&(Y(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _(n)}function _(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function it(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function U(n){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},U(n)}var st=40,Ne={activeIndex:a.number,next:a.func.isRequired,previous:a.func.isRequired,keyboard:a.bool,pause:a.oneOf(["hover",!1]),ride:a.oneOf(["carousel"]),interval:a.oneOfType([a.number,a.string,a.bool]),children:a.array,mouseEnter:a.func,mouseLeave:a.func,slide:a.bool,dark:a.bool,fade:a.bool,cssModule:a.object,className:a.string,enableTouch:a.bool},at=Object.keys(Ne),lt={interval:5e3,pause:"hover",keyboard:!0,slide:!0,enableTouch:!0,fade:!1},re=(function(n){nt(i,n);var r=rt(i);function i(o){var t;return et(this,i),t=r.call(this,o),t.handleKeyPress=t.handleKeyPress.bind(_(t)),t.renderItems=t.renderItems.bind(_(t)),t.hoverStart=t.hoverStart.bind(_(t)),t.hoverEnd=t.hoverEnd.bind(_(t)),t.handleTouchStart=t.handleTouchStart.bind(_(t)),t.handleTouchEnd=t.handleTouchEnd.bind(_(t)),t.touchStartX=0,t.touchStartY=0,t.state={activeIndex:t.props.activeIndex,direction:"end",indicatorClicked:!1},t}return tt(i,[{key:"componentDidMount",value:function(){this.props.ride==="carousel"&&this.setInterval(),document.addEventListener("keyup",this.handleKeyPress)}},{key:"componentDidUpdate",value:function(t,s){s.activeIndex!==this.state.activeIndex&&this.setInterval()}},{key:"componentWillUnmount",value:function(){this.clearInterval(),document.removeEventListener("keyup",this.handleKeyPress)}},{key:"handleKeyPress",value:function(t){this.props.keyboard&&(t.keyCode===37?this.props.previous():t.keyCode===39&&this.props.next())}},{key:"handleTouchStart",value:function(t){this.props.enableTouch&&(this.touchStartX=t.changedTouches[0].screenX,this.touchStartY=t.changedTouches[0].screenY)}},{key:"handleTouchEnd",value:function(t){if(this.props.enableTouch){var s=t.changedTouches[0].screenX,c=t.changedTouches[0].screenY,d=Math.abs(this.touchStartX-s),p=Math.abs(this.touchStartY-c);d<p||d<st||(s<this.touchStartX?this.props.next():this.props.previous())}}},{key:"getContextValue",value:function(){return{direction:this.state.direction}}},{key:"setInterval",value:(function(o){function t(){return o.apply(this,arguments)}return t.toString=function(){return o.toString()},t})(function(){var o=this;this.clearInterval(),this.props.interval&&(this.cycleInterval=setInterval(function(){o.props.next()},parseInt(this.props.interval,10)))})},{key:"clearInterval",value:(function(o){function t(){return o.apply(this,arguments)}return t.toString=function(){return o.toString()},t})(function(){clearInterval(this.cycleInterval)})},{key:"hoverStart",value:function(){if(this.props.pause==="hover"&&this.clearInterval(),this.props.mouseEnter){var t;(t=this.props).mouseEnter.apply(t,arguments)}}},{key:"hoverEnd",value:function(){if(this.props.pause==="hover"&&this.setInterval(),this.props.mouseLeave){var t;(t=this.props).mouseLeave.apply(t,arguments)}}},{key:"renderItems",value:function(t,s){var c=this,d=this.props.slide;return l.createElement("div",{className:s},t.map(function(p,u){var h=u===c.state.activeIndex;return l.cloneElement(p,{in:h,slide:d})}))}},{key:"render",value:function(){var t=this,s=this.props,c=s.cssModule,d=s.slide,p=s.className,u=s.dark,h=s.fade,v=Le(this.props,at),x=N(C(p,"carousel",h&&"carousel-fade",d&&"slide",u&&"carousel-dark"),c),m=N(C("carousel-inner"),c),f=this.props.children.filter(function(S){return S!=null&&typeof S!="boolean"}),b=f.every(function(S){return S.type===L});if(b)return l.createElement("div",V({},v,{className:x,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd}),l.createElement($.Provider,{value:this.getContextValue()},this.renderItems(f,m)));if(f[0]instanceof Array){var P=f[0],y=f[1],z=f[2];return l.createElement("div",V({},v,{className:x,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd}),l.createElement($.Provider,{value:this.getContextValue()},this.renderItems(P,m),y,z))}var M=f[0],q=function(Me){typeof M.props.onClickHandler=="function"&&t.setState({indicatorClicked:!0},function(){return M.props.onClickHandler(Me)})},Se=l.cloneElement(M,{onClickHandler:q}),He=f[1],Ie=f[2],ze=f[3];return l.createElement("div",V({},v,{className:x,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd}),l.createElement($.Provider,{value:this.getContextValue()},Se,this.renderItems(He,m),Ie,ze))}}],[{key:"getDerivedStateFromProps",value:function(t,s){var c=null,d=s.activeIndex,p=s.direction,u=s.indicatorClicked;return t.activeIndex!==d&&(t.activeIndex===d+1?p="end":t.activeIndex===d-1?p="start":t.activeIndex<d?p=u?"start":"end":t.activeIndex!==d&&(p=u?"end":"start"),c={activeIndex:t.activeIndex,direction:p,indicatorClicked:!1}),c}}]),i})(l.Component);re.propTypes=Ne;re.defaultProps=lt;var ct=["direction","onClickHandler","cssModule","directionText","className"];function F(){return F=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])}return n},F.apply(this,arguments)}function ht(n,r){if(n==null)return{};var i=dt(n,r),o,t;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(t=0;t<s.length;t++)o=s[t],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}function dt(n,r){if(n==null)return{};var i={},o=Object.keys(n),t,s;for(s=0;s<o.length;s++)t=o[s],!(r.indexOf(t)>=0)&&(i[t]=n[t]);return i}function J(n){var r=n.direction,i=n.onClickHandler,o=n.cssModule,t=n.directionText,s=n.className,c=ht(n,ct),d=N(C(s,"carousel-control-".concat(r)),o),p=N(C("carousel-control-".concat(r,"-icon")),o),u=N(C("visually-hidden"),o);return l.createElement("a",F({},c,{className:d,style:{cursor:"pointer"},role:"button",tabIndex:"0",onClick:function(v){v.preventDefault(),i()}}),l.createElement("span",{className:p,"aria-hidden":"true"}),l.createElement("span",{className:u},t||r))}J.propTypes={direction:a.oneOf(["prev","next"]).isRequired,onClickHandler:a.func.isRequired,cssModule:a.object,directionText:a.string,className:a.string};var pt=["items","activeIndex","cssModule","onClickHandler","className"];function Q(){return Q=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])}return n},Q.apply(this,arguments)}function ut(n,r){if(n==null)return{};var i=ft(n,r),o,t;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(t=0;t<s.length;t++)o=s[t],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}function ft(n,r){if(n==null)return{};var i={},o=Object.keys(n),t,s;for(s=0;s<o.length;s++)t=o[s],!(r.indexOf(t)>=0)&&(i[t]=n[t]);return i}function Ce(n){var r=n.items,i=n.activeIndex,o=n.cssModule,t=n.onClickHandler,s=n.className,c=ut(n,pt),d=N(C(s,"carousel-indicators"),o),p=r.map(function(u,h){var v=N(C({active:i===h}),o);return l.createElement("button",{"aria-label":u.caption,"data-bs-target":!0,type:"button",key:"".concat(u.key||Object.values(u).join("")),onClick:function(m){m.preventDefault(),t(h)},className:v})});return l.createElement("div",Q({className:d},c),p)}Ce.propTypes={activeIndex:a.number.isRequired,className:a.string,cssModule:a.object,items:a.array.isRequired,onClickHandler:a.func.isRequired};function _e(n){var r=n.captionHeader,i=n.captionText,o=n.cssModule,t=n.className,s=N(C(t,"carousel-caption","d-none","d-md-block"),o);return l.createElement("div",{className:s},l.createElement("h3",null,r),l.createElement("p",null,i))}_e.propTypes={captionHeader:a.node,captionText:a.node.isRequired,className:a.string,cssModule:a.object};function Z(n){"@babel/helpers - typeof";return Z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Z(n)}var vt=["defaultActiveIndex","autoPlay","indicators","controls","items","goToIndex"];function ee(){return ee=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])}return n},ee.apply(this,arguments)}function mt(n,r){if(n==null)return{};var i=xt(n,r),o,t;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(t=0;t<s.length;t++)o=s[t],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}function xt(n,r){if(n==null)return{};var i={},o=Object.keys(n),t,s;for(s=0;s<o.length;s++)t=o[s],!(r.indexOf(t)>=0)&&(i[t]=n[t]);return i}function yt(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function gt(n,r){for(var i=0;i<r.length;i++){var o=r[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function jt(n,r,i){return r&&gt(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function bt(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),r&&te(n,r)}function te(n,r){return te=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,t){return o.__proto__=t,o},te(n,r)}function wt(n){var r=Tt();return function(){var o=A(n),t;if(r){var s=A(this).constructor;t=Reflect.construct(o,arguments,s)}else t=o.apply(this,arguments);return kt(this,t)}}function kt(n,r){if(r&&(Z(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return I(n)}function I(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Tt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function A(n){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},A(n)}var Ot={items:a.array.isRequired,indicators:a.bool,controls:a.bool,autoPlay:a.bool,defaultActiveIndex:a.number,activeIndex:a.number,next:a.func,previous:a.func,goToIndex:a.func},j=(function(n){bt(i,n);var r=wt(i);function i(o){var t;return yt(this,i),t=r.call(this,o),t.animating=!1,t.state={activeIndex:o.defaultActiveIndex||0},t.next=t.next.bind(I(t)),t.previous=t.previous.bind(I(t)),t.goToIndex=t.goToIndex.bind(I(t)),t.onExiting=t.onExiting.bind(I(t)),t.onExited=t.onExited.bind(I(t)),t}return jt(i,[{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){var t=this;this.animating||this.setState(function(s){var c=s.activeIndex===t.props.items.length-1?0:s.activeIndex+1;return{activeIndex:c}})}},{key:"previous",value:function(){var t=this;this.animating||this.setState(function(s){var c=s.activeIndex===0?t.props.items.length-1:s.activeIndex-1;return{activeIndex:c}})}},{key:"goToIndex",value:function(t){this.animating||this.setState({activeIndex:t})}},{key:"render",value:function(){var t=this,s=this.props;s.defaultActiveIndex;var c=s.autoPlay,d=c===void 0?!0:c,p=s.indicators,u=p===void 0?!0:p,h=s.controls,v=h===void 0?!0:h,x=s.items,m=s.goToIndex,f=mt(s,vt),b=this.state.activeIndex,P=x.map(function(y){var z=y.key||y.src;return l.createElement(L,{onExiting:t.onExiting,onExited:t.onExited,key:z},l.createElement("img",{className:"d-block w-100",src:y.src,alt:y.altText}),l.createElement(_e,{captionText:y.caption,captionHeader:y.header||y.caption}))});return l.createElement(re,ee({activeIndex:b,next:this.next,previous:this.previous,ride:d?"carousel":void 0},f),u&&l.createElement(Ce,{items:x,activeIndex:f.activeIndex||b,onClickHandler:m||this.goToIndex}),P,v&&l.createElement(J,{direction:"prev",directionText:"Previous",onClickHandler:f.previous||this.previous}),v&&l.createElement(J,{direction:"next",directionText:"Next",onClickHandler:f.next||this.next}))}}]),i})(g.Component);j.propTypes=Ot;const we="/apps/nsh/assets/19-DhcAyuFG.jpg",ke="/apps/nsh/assets/21-zXwe9KmP.jpg",Te="/apps/nsh/assets/22-HvQqch9R.jpg",Oe="/apps/nsh/assets/24-DH_QmqKP.jpg",Ee="/apps/nsh/assets/25-D0cyLg1B.jpg",Et="/apps/nsh/assets/16-DMvJt1Fr.jpg",Nt="/apps/nsh/assets/17-cV06A5Jg.jpg",Ct="/apps/nsh/assets/blue-elBADNrm.jpg",_t="/apps/nsh/assets/green-Cxfh9fBm.jpg",Pt="/apps/nsh/assets/red-BJPkdvrx.jpg",Pe=()=>{const n=g.useRef(),r=g.useRef(),i=g.useRef(),o=g.useRef(),t=g.useRef(),s=g.useRef(),c=g.useRef(),d=g.useRef(),p=g.useRef(),u=g.useRef();let h=v=>{var m;let x=(m=v.current)==null?void 0:m.innerText;navigator.clipboard.writeText(x),alert("Text copied successfully")};return e.jsxs("div",{children:[e.jsx($e,{title:"Carousel",home:"Home",name:"Elements",fonticonsname:"Carousel"}),e.jsxs(oe,{children:[e.jsx(w,{md:"6",lg:"6",children:e.jsxs(k,{children:[e.jsx(T,{children:e.jsx(E,{tag:"h3",children:"Carousel"})}),e.jsx(O,{children:e.jsx("div",{id:"carousel-default",className:"carousel slide","data-bs-ride":"carousel",children:e.jsx(j,{indicators:!1,interval:4e3,controls:!1,items:[{key:1,altText:" ",caption:" ",src:we},{key:2,altText:" ",caption:" ",src:se},{key:3,altText:" ",caption:" ",src:ke},{key:4,altText:" ",caption:" ",src:Te},{key:5,altText:" ",caption:" ",src:ie}]})})}),e.jsxs("div",{className:"html-code",children:[e.jsxs("svg",{className:"svg-icon me-2",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"})]})," ","Show Code"," "]}),e.jsxs("figure",{className:"highlight mb-0",id:"element1",children:[e.jsx("pre",{ref:n,children:e.jsx("code",{className:"language-markup mb-0",children:`<UncontrolledCarousel
                indicators={false}
                interval={4000}
                controls={false}
                items={[
                  {
                    key: 1,
                    altText: " ",
                    caption: " ",
                    src: photo19,
                  },
                  {
                    key: 2,
                    altText: " ",
                    caption: " ",
                    src: photo20,
                  },
                  {
                    key: 3,
                    altText: " ",
                    caption: " ",
                    src: photo21,
                  },
                  {
                    key: 4,
                    altText: " ",
                    caption: " ",
                    src: photo22,
                  },
                  {
                    key: 5,
                    altText: " ",
                    caption: " ",
                    src: photo23,
                  },
                ]}
              />`})}),e.jsx("div",{className:"clipboard-icon","data-clipboard-target":"#element1",children:e.jsxs("svg",{onClick:()=>{h(n)},className:"svg-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"}),e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"})]})})]})]})}),e.jsx(w,{md:"6",lg:"6",children:e.jsxs(k,{children:[e.jsx(T,{children:e.jsx(E,{tag:"h3",children:"Carousel with indicators"})}),e.jsx(O,{children:e.jsx("div",{id:"carousel-indicators",className:"carousel slide carouselindicators","data-bs-ride":"carousel",children:e.jsx(j,{interval:4e3,controls:!1,items:[{key:1,altText:" ",caption:" ",src:Oe},{key:2,altText:" ",caption:" ",src:Ee},{key:3,altText:" ",caption:" ",src:le},{key:4,altText:" ",caption:" ",src:ce},{key:5,altText:" ",caption:" ",src:he}]})})}),e.jsxs("div",{className:"html-code",children:[e.jsxs("svg",{className:"svg-icon me-2",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"})]})," ","Show Code"," "]}),e.jsxs("figure",{className:"highlight mb-0",id:"element2",children:[e.jsx("pre",{ref:r,children:e.jsx("code",{className:"language-markup mb-0",children:`<UncontrolledCarousel
                interval={4000}
                controls={false}
                items={[
                  {
                    key: 1,
                    altText: " ",
                    caption: " ",
                    src: photo24,
                  },
                  {
                    key: 2,
                    altText: " ",
                    caption: " ",
                    src: photo25,
                  },
                  {
                    key: 3,
                    altText: " ",
                    caption: " ",
                    src: photo1,
                  },
                  {
                    key: 4,
                    altText: " ",
                    caption: " ",
                    src: photo2,
                  },
                  {
                    key: 5,
                    altText: " ",
                    caption: " ",
                    src: photo3,
                  },
                ]}
              />`})}),e.jsx("div",{className:"clipboard-icon","data-clipboard-target":"#element2",children:e.jsxs("svg",{onClick:()=>{h(r)},className:"svg-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"}),e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"})]})})]})]})}),e.jsx(w,{md:"6",lg:"6",children:e.jsxs(k,{children:[e.jsx(T,{children:e.jsx(E,{tag:"h3",children:"Carousel with controls"})}),e.jsx(O,{children:e.jsx("div",{id:"carousel-controls",className:"carousel slide","data-bs-ride":"carousel",children:e.jsx(j,{indicators:!1,interval:4e3,items:[{key:1,altText:" ",caption:" ",src:de},{key:2,altText:" ",caption:" ",src:pe},{key:3,altText:" ",caption:" ",src:ue},{key:4,altText:" ",caption:" ",src:fe},{key:5,altText:" ",caption:" ",src:ve}]})})}),e.jsxs("div",{className:"html-code",children:[e.jsxs("svg",{className:"svg-icon me-2",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"})]})," ","Show Code"," "]}),e.jsxs("figure",{className:"highlight mb-0",id:"element3",children:[e.jsx("pre",{ref:i,children:e.jsx("code",{className:"language-markup mb-0",children:`<UncontrolledCarousel
                indicators={false}
                interval={4000}
                items={[
                  {
                    key: 1,
                    altText: " ",
                    caption: " ",
                    src: photo4,
                  },
                  {
                    key: 2,
                    altText: " ",
                    caption: " ",
                    src: photo5,
                  },
                  {
                    key: 3,
                    altText: " ",
                    caption: " ",
                    src: photo6,
                  },
                  {
                    key: 4,
                    altText: " ",
                    caption: " ",
                    src: photo7,
                  },
                  {
                    key: 5,
                    altText: " ",
                    caption: " ",
                    src: photo8,
                  },
                ]}
              />`})}),e.jsx("div",{className:"clipboard-icon","data-clipboard-target":"#element3",children:e.jsxs("svg",{onClick:()=>{h(i)},className:"svg-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"}),e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"})]})})]})]})}),e.jsx(w,{md:"6",lg:"6",children:e.jsxs(k,{children:[e.jsx(T,{children:e.jsx(E,{tag:"h3",children:"Carousel with captions"})}),e.jsx(O,{children:e.jsx("div",{id:"carousel-captions",className:"carousel slide","data-bs-ride":"carousel",children:e.jsx(j,{indicators:!1,interval:4e3,items:[{key:1,altText:"Slide label",caption:"Slide label",src:ye},{key:2,altText:"Slide label",caption:"Slide label",src:ge},{key:3,altText:"Slide label",caption:"Slide label",src:xe},{key:4,altText:"Slide label",caption:"Slide label",src:ae},{key:5,altText:"Slide label",caption:"Slide label",src:me}]})})}),e.jsxs("div",{className:"html-code",children:[e.jsxs("svg",{className:"svg-icon me-2",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"})]})," ","Show Code"," "]}),e.jsxs("figure",{className:"highlight mb-0",id:"element4",children:[e.jsx("pre",{ref:o,children:e.jsx("code",{className:"language-markup mb-0",children:`<UncontrolledCarousel
                indicators={false}
                interval={4000}
                items={[
                  {
                    key: 1,
                    altText: "Slide label",
                    caption: "Slide label",
                    src: photo9,
                  },
                  {
                    key: 2,
                    altText: "Slide label",
                    caption: "Slide label",
                    src: photo10,
                  },
                  {
                    key: 3,
                    altText: "Slide label",
                    caption: "Slide label",
                    src: photo11,
                  },
                  {
                    key: 4,
                    altText: "Slide label",
                    caption: "Slide label",
                    src: photo12,
                  },
                  {
                    key: 5,
                    altText: "Slide label",
                    caption: "Slide label",
                    src: photo13,
                  },
                ]}
              />`})}),e.jsx("div",{className:"clipboard-icon","data-clipboard-target":"#element4",children:e.jsxs("svg",{onClick:()=>{h(o)},className:"svg-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"}),e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"})]})})]})]})}),e.jsx(w,{md:"6",lg:"6",children:e.jsxs(k,{children:[e.jsx(T,{children:e.jsx(E,{tag:"h3",children:"Carousel with top controls"})}),e.jsx(O,{children:e.jsx("div",{id:"carousel-indicators1",className:"carousel slide","data-bs-ride":"carousel",children:e.jsx(j,{controls:!1,indicators:!0,interval:4e3,items:[{key:1,altText:"",caption:"",src:Be},{key:2,altText:"",caption:"",src:De},{key:3,altText:"",caption:"",src:Et},{key:4,altText:"",caption:"",src:Nt},{key:5,altText:"",caption:"",src:Ue}]})})}),e.jsxs("div",{className:"html-code",children:[e.jsxs("svg",{className:"svg-icon me-2",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"})]})," ","Show Code"," "]}),e.jsxs("figure",{className:"highlight mb-0",id:"element5",children:[e.jsx("pre",{ref:t,children:e.jsx("code",{className:"language-markup mb-0",children:`<UncontrolledCarousel
                controls={false}
                indicators={true}
                interval={4000}
                items={[
                  {
                    key: 1,
                    altText: "",
                    caption: "",
                    src: photo14,
                  },
                  {
                    key: 2,
                    altText: "",
                    caption: "",
                    src: photo15,
                  },
                  {
                    key: 3,
                    altText: "",
                    caption: "",
                    src: photo16,
                  },
                  {
                    key: 4,
                    altText: "",
                    caption: "",
                    src: photo17,
                  },
                  {
                    key: 5,
                    altText: "",
                    caption: "",
                    src: photo18,
                  },
                ]}
              />`})}),e.jsx("div",{className:"clipboard-icon","data-clipboard-target":"#element5",children:e.jsxs("svg",{onClick:()=>{h(t)},className:"svg-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"}),e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"})]})})]})]})}),e.jsx(w,{md:"6",lg:"6",children:e.jsxs(k,{children:[e.jsx(T,{children:e.jsx(E,{tag:"h3",children:"Carousel with top-right controls"})}),e.jsx(O,{children:e.jsx("div",{id:"carousel-indicators2",className:"carousel slide","data-bs-ride":"carousel",children:e.jsx(j,{controls:!1,indicators:!0,interval:4e3,items:[{key:1,altText:"",caption:"",src:we},{key:2,altText:"",caption:"",src:se},{key:3,altText:"",caption:"",src:ke},{key:4,altText:"",caption:"",src:Te},{key:5,altText:"",caption:"",src:ie}]})})}),e.jsxs("div",{className:"html-code",children:[e.jsxs("svg",{className:"svg-icon me-2",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"})]})," ","Show Code"," "]}),e.jsxs("figure",{className:"highlight mb-0",id:"element6",children:[e.jsx("pre",{ref:s,children:e.jsx("code",{className:"language-markup mb-0",children:` <UncontrolledCarousel
                controls={false}
                indicators={true}
                interval={4000}
                items={[
                  {
                    key: 1,
                    altText: "",
                    caption: "",
                    src:photo19,
                  },
                  {
                    key: 2,
                    altText: "",
                    caption: "",
                    src:photo20,
                  },
                  {
                    key: 3,
                    altText: "",
                    caption: "",
                    src:photo21,
                  },
                  {
                    key: 4,
                    altText: "",
                    caption: "",
                    src:photo22,
                  },
                  {
                    key: 5,
                    altText: "",
                    caption: "",
                    src:photo23,
                  },
                ]}
              />`})}),e.jsx("div",{className:"clipboard-icon","data-clipboard-target":"#element6",children:e.jsxs("svg",{onClick:()=>{h(s)},className:"svg-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"}),e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"})]})})]})]})})]}),e.jsxs(oe,{children:[e.jsx(w,{md:"6",lg:"6",children:e.jsxs(k,{children:[e.jsx(T,{children:e.jsx(E,{tag:"h3",children:"Carousel with top-left controls"})}),e.jsx(O,{children:e.jsx("div",{id:"carousel-indicators3",className:"carousel slide","data-bs-ride":"carousel",children:e.jsx(j,{controls:!1,indicators:!0,interval:4e3,items:[{key:1,altText:"",caption:"",src:Oe},{key:2,altText:"",caption:"",src:Ee},{key:3,altText:"",caption:"",src:le},{key:4,altText:"",caption:"",src:ce},{key:5,altText:"",caption:"",src:he}]})})}),e.jsxs("div",{className:"html-code",children:[e.jsxs("svg",{className:"svg-icon me-2",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"})]})," ","Show Code"," "]}),e.jsxs("figure",{className:"highlight mb-0",id:"element7",children:[e.jsx("pre",{ref:c,children:e.jsx("code",{className:"language-markup mb-0",children:`<UncontrolledCarousel
                controls={false}
                indicators={true}
                interval={4000}
                items={[
                  {
                    key: 1,
                    altText: "",
                    caption: "",
                    src:photo24,
                  },
                  {
                    key: 2,
                    altText: "",
                    caption: "",
                    src:photo25,
                  },
                  {
                    key: 3,
                    altText: "",
                    caption: "",
                    src:photo1,
                  },
                  {
                    key: 4,
                    altText: "",
                    caption: "",
                    src:photo2,
                  },
                  {
                    key: 5,
                    altText: "",
                    caption: "",
                    src:photo3,
                  },
                ]}
              />`})}),e.jsx("div",{className:"clipboard-icon","data-clipboard-target":"#element7",children:e.jsxs("svg",{onClick:()=>{h(c)},className:"svg-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"}),e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"})]})})]})]})}),e.jsx(w,{md:"6",lg:"6",children:e.jsxs(k,{children:[e.jsx(T,{children:e.jsx(E,{tag:"h3",children:"Carousel with bottom-right controls"})}),e.jsx(O,{children:e.jsx("div",{id:"carousel-indicators4",className:"carousel slide","data-bs-ride":"carousel",children:e.jsx(j,{controls:!1,indicators:!0,interval:4e3,items:[{key:1,altText:"",caption:"",src:de},{key:2,altText:"",caption:"",src:pe},{key:3,altText:"",caption:"",src:ue},{key:4,altText:"",caption:"",src:fe},{key:5,altText:"",caption:"",src:ve}]})})}),e.jsxs("div",{className:"html-code",children:[e.jsxs("svg",{className:"svg-icon me-2",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"})]})," ","Show Code"," "]}),e.jsxs("figure",{className:"highlight mb-0",id:"element8",children:[e.jsx("pre",{ref:d,children:e.jsx("code",{className:"language-markup mb-0",children:`<UncontrolledCarousel
                controls={false}
                indicators={true}
                interval={4000}
                items={[
                  {
                    key: 1,
                    altText: "",
                    caption: "",
                    src:photo4,
                  },
                  {
                    key: 2,
                    altText: "",
                    caption: "",
                    src:photo5,
                  },
                  {
                    key: 3,
                    altText: "",
                    caption: "",
                    src:photo6,
                  },
                  {
                    key: 4,
                    altText: "",
                    caption: "",
                    src:photo7,
                  },
                  {
                    key: 5,
                    altText: "",
                    caption: "",
                    src:photo8,
                  },
                ]}
              />`})}),e.jsx("div",{className:"clipboard-icon","data-clipboard-target":"#element8",children:e.jsxs("svg",{onClick:()=>{h(d)},className:"svg-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"}),e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"})]})})]})]})}),e.jsx(w,{md:"6",lg:"6",children:e.jsxs(k,{children:[e.jsx(T,{children:e.jsx(E,{tag:"h3",children:"Carousel with bottom-left controls"})}),e.jsx(O,{children:e.jsx("div",{id:"carousel-indicators5",className:"carousel slide","data-bs-ride":"carousel",children:e.jsx(j,{controls:!1,indicators:!0,interval:4e3,items:[{key:1,altText:"",caption:"",src:ye},{key:2,altText:"",caption:"",src:ge},{key:3,altText:"",caption:"",src:xe},{key:4,altText:"",caption:"",src:ae},{key:5,altText:"",caption:"",src:me}]})})}),e.jsxs("div",{className:"html-code",children:[e.jsxs("svg",{className:"svg-icon me-2",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"})]})," ","Show Code"," "]}),e.jsxs("figure",{className:"highlight mb-0",id:"9",children:[e.jsx("pre",{ref:p,children:e.jsxs("code",{className:"language-markup mb-0",children:[`
              <UncontrolledCarousel
                controls={false}
                indicators={true}
                interval={4000}
                items={[
                  {
                    key: 1,
                    altText: "",
                    caption: "",
                    src:photo9,
                  },
                  {
                    key: 2,
                    altText: "",
                    caption: "",
                    src:photo10,
                  },
                  {
                    key: 3,
                    altText: "",
                    caption: "",
                    src:photo11,
                  },
                  {
                    key: 4,
                    altText: "",
                    caption: "",
                    src:photo12,
                  },
                  {
                    key: 5,
                    altText: "",
                    caption: "",
                    src:photo13,
                  },
                ]}
              />
               `," "]})}),e.jsx("div",{className:"clipboard-icon","data-clipboard-target":"#element9",children:e.jsxs("svg",{onClick:()=>{h(p)},className:"svg-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"}),e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"})]})})]})]})}),e.jsx(w,{md:"6",lg:"6",children:e.jsxs(k,{children:[e.jsx(T,{children:e.jsx(E,{tag:"h3",children:"Carousel with Background color captions"})}),e.jsx(O,{children:e.jsx("div",{id:"carousel-captions2",className:"carousel slide","data-bs-ride":"carousel",children:e.jsx(j,{controls:!0,indicators:!1,interval:4e3,items:[{key:1,caption:"The wise man therefore always holds in these matters to this principle.",altText:"",src:Pt},{key:2,caption:"The wise man therefore always holds in these matters to this principle.",altText:"",src:Ct},{key:3,caption:"The wise man therefore always holds in these matters to this principle.",altText:"",src:_t}]})})}),e.jsxs("div",{className:"html-code",children:[e.jsxs("svg",{className:"svg-icon me-2",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"})]})," ","Show Code"," "]}),e.jsxs("figure",{className:"highlight mb-0",id:"element10",children:[e.jsx("pre",{ref:u,children:e.jsx("code",{className:"language-markup mb-0",children:`
                 <UncontrolledCarousel
                 controls={true}
                 indicators={false}
                 interval={4000}
                 items={[
                   {
                     key: 1,
                     caption: "The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.",
                     altText: "",
                     src:photored,
                   },
                   {
                     key: 2,
                     caption: "The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.",
                     altText: "",
                     src:photoblue,
                   },
                   {
                     key: 3,
                     caption: "The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.",
                     altText: "",
                     src:photogreen,
                   },
                 ]}
               />`})}),e.jsx("div",{className:"clipboard-icon","data-clipboard-target":"#element10",children:e.jsxs("svg",{onClick:()=>{h(u)},className:"svg-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"}),e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"})]})})]})]})})]})]})};Pe.propTypes={};Pe.defaultProps={};export{Pe as default};

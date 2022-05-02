(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[21],{1014:function(e,t,r){"use strict";var n=r(664);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.BigButton=t.Button=void 0;var o,i,a=n(r(957)),s=r(677),l=r(661),u=r(684),c=n(r(999)).default.withComponent((0,l.styled)("button")(o||(o=(0,a.default)(["\n  border: none;\n  display: inline-block;\n  text-align: center;\n  text-decoration: none;\n  background: transparent;\n  transition: 0.1s color;\n  cursor: pointer;\n\n  font-family: ",";\n\n  &:active,\n  &:focus {\n    outline: none;\n  }\n\n  ",";\n\n  &:disabled {\n    opacity: 0.4;\n  }\n\n  ","\n"])),(function(e){return e.theme.fonts.main}),(function(e){return e.disabled?"pointer-events: none;":""}),(0,l.variant)({primary:{color:u.colors.tomato,"&:hover":{color:u.colors.black}},secondary:{color:u.colors.black,"&:hover":{color:u.colors.tomato,"& path":{fill:u.colors.tomato}}},tertiary:{color:u.colors.gray,"&:hover":{color:u.colors.tomato,"& path":{fill:u.colors.tomato}}},bordered:{color:u.colors.black,"&:hover":{color:u.colors.tomato,"& svg":{color:u.colors.tomato},"& path":{fill:u.colors.tomato}},border:"1px solid ".concat((0,s.transparentize)(.92,u.colors.black)),"border-radius":"8px","&:disabled":{opacity:"1 !important",color:"".concat((0,s.transparentize)(.6,u.colors.black)),border:"1px solid ".concat((0,s.transparentize)(.92,u.colors.black))}},unstyled:{},clean:{"&:hover":{opacity:.8}}})),{target:"e7poe9e0"});t.Button=c,c.defaultProps={textStyle:"regular",variant:"secondary",margin:0,padding:0};var d=(0,l.styled)(c)(i||(i=(0,a.default)(["\n  transition: color 0.1s, background 0.1s;\n\n  margin-left: ",";\n  padding: ",";\n  background: ",";\n  @media (pointer: fine) {\n    &:hover {\n      color: ",";\n      background: ",";\n    }\n  }\n"])),(function(e){return void 0!==e.marginLeft?e.marginLeft:"-34px"}),(function(e){return e.padding?e.padding:"8px 34px 18px"}),(function(e){return e.theme.colors.lightGray}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.tomato}));t.BigButton=d,d.defaultProps={textStyle:"heading",color:"tomato",borderRadius:40};var f=c;t.default=f},1013:function(e,t,r){"use strict";var n=r(984);Object.defineProperty(t,"__esModule",{value:!0});var o={};Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}});var i=n(r(1014));Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||e in t&&t[e]===i[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}}))}))},998:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.r(t),r.d(t,{Globals:function(){return C},a:function(){return Fe},animated:function(){return Fe},apply:function(){return Se},config:function(){return $},interpolate:function(){return I},update:function(){return M},useChain:function(){return L},useSpring:function(){return W},useSprings:function(){return K},useTrail:function(){return H},useTransition:function(){return ee}});var i=r(353);const a={arr:Array.isArray,obj:e=>"[object Object]"===Object.prototype.toString.call(e),fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e,nul:e=>null===e,set:e=>e instanceof Set,map:e=>e instanceof Map,equ(e,t){if(typeof e!=typeof t)return!1;if(a.str(e)||a.num(e))return e===t;if(a.obj(e)&&a.obj(t)&&Object.keys(e).length+Object.keys(t).length===0)return!0;let r;for(r in e)if(!(r in t))return!1;for(r in t)if(e[r]!==t[r])return!1;return!a.und(r)||e===t}};function s(){const e=(0,i.useState)(!1)[1];return(0,i.useCallback)((()=>e((e=>!e))),[])}function l(e,t){return a.und(e)||a.nul(e)?t:e}function u(e){return a.und(e)?[]:a.arr(e)?e:[e]}function c(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return a.fun(e)?e(...r):e}function d(e){const t=function(e){return e.to,e.from,e.config,e.onStart,e.onRest,e.onFrame,e.children,e.reset,e.reverse,e.force,e.immediate,e.delay,e.attach,e.destroyed,e.interpolateTo,e.ref,e.lazy,o(e,["to","from","config","onStart","onRest","onFrame","children","reset","reverse","force","immediate","delay","attach","destroyed","interpolateTo","ref","lazy"])}(e);if(a.und(t))return n({to:t},e);const r=Object.keys(e).reduce(((r,o)=>a.und(t[o])?n({},r,{[o]:e[o]}):r),{});return n({to:t},r)}class f{constructor(){this.payload=void 0,this.children=[]}getAnimatedValue(){return this.getValue()}getPayload(){return this.payload||this}attach(){}detach(){}getChildren(){return this.children}addChild(e){0===this.children.length&&this.attach(),this.children.push(e)}removeChild(e){const t=this.children.indexOf(e);this.children.splice(t,1),0===this.children.length&&this.detach()}}class h extends f{constructor(){super(...arguments),this.payload=[],this.attach=()=>this.payload.forEach((e=>e instanceof f&&e.addChild(this))),this.detach=()=>this.payload.forEach((e=>e instanceof f&&e.removeChild(this)))}}class p extends f{constructor(){super(...arguments),this.payload={},this.attach=()=>Object.values(this.payload).forEach((e=>e instanceof f&&e.addChild(this))),this.detach=()=>Object.values(this.payload).forEach((e=>e instanceof f&&e.removeChild(this)))}getValue(e){void 0===e&&(e=!1);const t={};for(const r in this.payload){const n=this.payload[r];(!e||n instanceof f)&&(t[r]=n instanceof f?n[e?"getAnimatedValue":"getValue"]():n)}return t}getAnimatedValue(){return this.getValue(!0)}}let m,g;function y(e,t){m={fn:e,transform:t}}function v(e){g=e}let b,k=e=>"undefined"!=typeof window?window.requestAnimationFrame(e):-1,w=e=>{"undefined"!=typeof window&&window.cancelAnimationFrame(e)};function x(e){b=e}let V,A=()=>Date.now();function E(e){V=e}let j,O,P=e=>e.current;function S(e){j=e}var C=Object.freeze({get applyAnimatedValues(){return m},injectApplyAnimatedValues:y,get colorNames(){return g},injectColorNames:v,get requestFrame(){return k},get cancelFrame(){return w},injectFrame:function(e,t){k=e,w=t},get interpolation(){return b},injectStringInterpolator:x,get now(){return A},injectNow:function(e){A=e},get defaultElement(){return V},injectDefaultElement:E,get animatedApi(){return P},injectAnimatedApi:function(e){P=e},get createAnimatedStyle(){return j},injectCreateAnimatedStyle:S,get manualFrameloop(){return O},injectManualFrameloop:function(e){O=e}});class q extends p{constructor(e,t){super(),this.update=void 0,this.payload=e.style?n({},e,{style:j(e.style)}):e,this.update=t,this.attach()}}let F=!1;const R=new Set,M=()=>{if(!F)return!1;let e=A();for(let t of R){let r=!1;for(let n=0;n<t.configs.length;n++){let o,i,a=t.configs[n];for(let t=0;t<a.animatedValues.length;t++){let n=a.animatedValues[t];if(n.done)continue;let s=a.fromValues[t],l=a.toValues[t],u=n.lastPosition,c=l instanceof f,d=Array.isArray(a.initialVelocity)?a.initialVelocity[t]:a.initialVelocity;if(c&&(l=l.getValue()),a.immediate)n.setValue(l),n.done=!0;else if("string"!=typeof s&&"string"!=typeof l){if(void 0!==a.duration)u=s+a.easing((e-n.startTime)/a.duration)*(l-s),o=e>=n.startTime+a.duration;else if(a.decay)u=s+d/(1-.998)*(1-Math.exp(-(1-.998)*(e-n.startTime))),o=Math.abs(n.lastPosition-u)<.1,o&&(l=u);else{i=void 0!==n.lastTime?n.lastTime:e,d=void 0!==n.lastVelocity?n.lastVelocity:a.initialVelocity,e>i+64&&(i=e);let t=Math.floor(e-i);for(let e=0;e<t;++e){d+=1*((-a.tension*(u-l)+-a.friction*d)/a.mass)/1e3,u+=1*d/1e3}let r=!(!a.clamp||0===a.tension)&&(s<l?u>l:u<l),c=Math.abs(d)<=a.precision,f=0===a.tension||Math.abs(l-u)<=a.precision;o=r||c&&f,n.lastVelocity=d,n.lastTime=e}c&&!a.toValues[t].done&&(o=!1),o?(n.value!==l&&(u=l),n.done=!0):r=!0,n.setValue(u),n.lastPosition=u}else n.setValue(l),n.done=!0}t.props.onFrame&&(t.values[a.name]=a.interpolation.getValue())}t.props.onFrame&&t.props.onFrame(t.values),r||(R.delete(t),t.stop(!0))}return R.size?O?O():k(M):F=!1,F};function T(e,t,r){if("function"==typeof e)return e;if(Array.isArray(e))return T({range:e,output:t,extrapolate:r});if(b&&"string"==typeof e.output[0])return b(e);const n=e,o=n.output,i=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,o,i,a,s,l){let u=l?l(e):e;if(u<t){if("identity"===a)return u;"clamp"===a&&(u=t)}if(u>r){if("identity"===s)return u;"clamp"===s&&(u=r)}if(n===o)return n;if(t===r)return e<=t?n:o;t===-1/0?u=-u:r===1/0?u-=t:u=(u-t)/(r-t);u=i(u),n===-1/0?u=-u:o===1/0?u+=n:u=u*(o-n)+n;return u}(e,i[t],i[t+1],o[t],o[t+1],l,a,s,n.map)}}class z extends h{constructor(e,t,r,n){super(),this.calc=void 0,this.payload=e instanceof h&&!(e instanceof z)?e.getPayload():Array.isArray(e)?e:[e],this.calc=T(t,r,n)}getValue(){return this.calc(...this.payload.map((e=>e.getValue())))}updateConfig(e,t,r){this.calc=T(e,t,r)}interpolate(e,t,r){return new z(this,e,t,r)}}const I=(e,t,r)=>e&&new z(e,t,r),$={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}};function L(e,t,r){void 0===r&&(r=1e3);const o=(0,i.useRef)();(0,i.useEffect)((()=>{a.equ(e,o.current)?e.forEach((e=>{let t=e.current;return t&&t.start()})):t?e.forEach(((e,o)=>{let i=e.current;if(i){const e=i.controllers;if(e.length){const i=r*t[o];e.forEach((e=>{e.queue=e.queue.map((e=>n({},e,{delay:e.delay+i}))),e.start()}))}}})):e.reduce(((e,t,r)=>{let n=t.current;return e.then((()=>n.start()))}),Promise.resolve()),o.current=e}))}function N(e,t){"update"in e?t.add(e):e.getChildren().forEach((e=>N(e,t)))}class _ extends f{constructor(e){var t;super(),t=this,this.animatedStyles=new Set,this.value=void 0,this.startPosition=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.startTime=void 0,this.lastTime=void 0,this.done=!1,this.setValue=function(e,r){void 0===r&&(r=!0),t.value=e,r&&t.flush()},this.value=e,this.startPosition=e,this.lastPosition=e}flush(){0===this.animatedStyles.size&&N(this,this.animatedStyles),this.animatedStyles.forEach((e=>e.update()))}clearStyles(){this.animatedStyles.clear()}getValue(){return this.value}interpolate(e,t,r){return new z(this,e,t,r)}}class G extends h{constructor(e){super(),this.payload=e.map((e=>new _(e)))}setValue(e,t){void 0===t&&(t=!0),Array.isArray(e)?e.length===this.payload.length&&e.forEach(((e,r)=>this.payload[r].setValue(e,t))):this.payload.forEach((r=>r.setValue(e,t)))}getValue(){return this.payload.map((e=>e.getValue()))}interpolate(e,t){return new z(this,e,t)}}let B=0;class D{constructor(){this.id=void 0,this.idle=!0,this.hasChanged=!1,this.guid=0,this.local=0,this.props={},this.merged={},this.animations={},this.interpolations={},this.values={},this.configs=[],this.listeners=[],this.queue=[],this.localQueue=void 0,this.getValues=()=>this.interpolations,this.id=B++}update(e){if(!e)return this;const t=d(e),r=t.delay,i=void 0===r?0:r,s=t.to,l=o(t,["delay","to"]);if(a.arr(s)||a.fun(s))this.queue.push(n({},l,{delay:i,to:s}));else if(s){let e={};Object.entries(s).forEach((t=>{let r=t[0];const o=n({to:{[r]:t[1]},delay:c(i,r)},l),a=e[o.delay]&&e[o.delay].to;e[o.delay]=n({},e[o.delay],o,{to:n({},a,o.to)})})),this.queue=Object.values(e)}return this.queue=this.queue.sort(((e,t)=>e.delay-t.delay)),this.diff(l),this}start(e){if(this.queue.length){this.idle=!1,this.localQueue&&this.localQueue.forEach((e=>{let t=e.from,r=void 0===t?{}:t,o=e.to,i=void 0===o?{}:o;a.obj(r)&&(this.merged=n({},r,this.merged)),a.obj(i)&&(this.merged=n({},this.merged,i))}));const t=this.local=++this.guid,r=this.localQueue=this.queue;this.queue=[],r.forEach(((n,i)=>{let s=n.delay,l=o(n,["delay"]);const u=n=>{i===r.length-1&&t===this.guid&&n&&(this.idle=!0,this.props.onRest&&this.props.onRest(this.merged)),e&&e()};let c=a.arr(l.to)||a.fun(l.to);s?setTimeout((()=>{t===this.guid&&(c?this.runAsync(l,u):this.diff(l).start(u))}),s):c?this.runAsync(l,u):this.diff(l).start(u)}))}else a.fun(e)&&this.listeners.push(e),this.props.onStart&&this.props.onStart(),t=this,R.has(t)||R.add(t),F||(F=!0,k(O||M));var t;return this}stop(e){return this.listeners.forEach((t=>t(e))),this.listeners=[],this}pause(e){var t;return this.stop(!0),e&&(t=this,R.has(t)&&R.delete(t)),this}runAsync(e,t){var r=this;e.delay;let i=o(e,["delay"]);const s=this.local;let l=Promise.resolve(void 0);if(a.arr(i.to))for(let e=0;e<i.to.length;e++){const t=e,r=n({},i,d(i.to[t]));a.arr(r.config)&&(r.config=r.config[t]),l=l.then((()=>{if(s===this.guid)return new Promise((e=>this.diff(r).start(e)))}))}else if(a.fun(i.to)){let e,t=0;l=l.then((()=>i.to((r=>{const o=n({},i,d(r));if(a.arr(o.config)&&(o.config=o.config[t]),t++,s===this.guid)return e=new Promise((e=>this.diff(o).start(e)))}),(function(e){return void 0===e&&(e=!0),r.stop(e)})).then((()=>e))))}l.then(t)}diff(e){this.props=n({},this.props,e);let t=this.props,r=t.from,o=void 0===r?{}:r,i=t.to,s=void 0===i?{}:i,d=t.config,f=void 0===d?{}:d,h=t.reverse,p=t.attach,m=t.reset,y=t.immediate;if(h){var v=[s,o];o=v[0],s=v[1]}this.merged=n({},o,this.merged,s),this.hasChanged=!1;let k=p&&p(this);if(this.animations=Object.entries(this.merged).reduce(((e,t)=>{let r=t[0],i=t[1],s=e[r]||{};const d=a.num(i),h=a.str(i)&&!i.startsWith("#")&&!/\d/.test(i)&&!g[i],p=a.arr(i),v=!d&&!p&&!h;let w=a.und(o[r])?i:o[r],x=d||p||h?i:1,V=c(f,r);k&&(x=k.animations[r].parent);let E,j=s.parent,O=s.interpolation,P=u(k?x.getPayload():x),S=i;v&&(S=b({range:[0,1],output:[i,i]})(1));let C=O&&O.getValue();const q=!a.und(j)&&s.animatedValues.some((e=>!e.done)),F=!a.equ(S,C),R=!a.equ(S,s.previous),M=!a.equ(V,s.config);if(m||R&&F||M){if(d||h)j=O=s.parent||new _(w);else if(p)j=O=s.parent||new G(w);else if(v){let e=s.interpolation&&s.interpolation.calc(s.parent.value);e=void 0===e||m?w:e,s.parent?(j=s.parent,j.setValue(0,!1)):j=new _(0);const t={output:[e,i]};s.interpolation?(O=s.interpolation,s.interpolation.updateConfig(t)):O=j.interpolate(t)}return P=u(k?x.getPayload():x),E=u(j.getPayload()),m&&!v&&j.setValue(w,!1),this.hasChanged=!0,E.forEach((e=>{e.startPosition=e.value,e.lastPosition=e.value,e.lastVelocity=q?e.lastVelocity:void 0,e.lastTime=q?e.lastTime:void 0,e.startTime=A(),e.done=!1,e.animatedStyles.clear()})),c(y,r)&&j.setValue(v?x:i,!1),n({},e,{[r]:n({},s,{name:r,parent:j,interpolation:O,animatedValues:E,toValues:P,previous:S,config:V,fromValues:u(j.getValue()),immediate:c(y,r),initialVelocity:l(V.velocity,0),clamp:l(V.clamp,!1),precision:l(V.precision,.01),tension:l(V.tension,170),friction:l(V.friction,26),mass:l(V.mass,1),duration:V.duration,easing:l(V.easing,(e=>e)),decay:V.decay})})}return F?e:(v&&(j.setValue(1,!1),O.updateConfig({output:[S,S]})),j.done=!0,this.hasChanged=!0,n({},e,{[r]:n({},e[r],{previous:S})}))}),this.animations),this.hasChanged){this.configs=Object.values(this.animations),this.values={},this.interpolations={};for(let e in this.animations)this.interpolations[e]=this.animations[e].interpolation,this.values[e]=this.animations[e].interpolation.getValue()}return this}destroy(){this.stop(),this.props={},this.merged={},this.animations={},this.interpolations={},this.values={},this.configs=[],this.local=0}}const K=(e,t)=>{const r=(0,i.useRef)(!1),n=(0,i.useRef)(),o=a.fun(t),s=(0,i.useMemo)((()=>{let r;return n.current&&(n.current.map((e=>e.destroy())),n.current=void 0),[new Array(e).fill().map(((e,n)=>{const i=new D,a=o?c(t,n,i):t[n];return 0===n&&(r=a.ref),i.update(a),r||i.start(),i})),r]}),[e]),l=s[0],u=s[1];n.current=l;(0,i.useImperativeHandle)(u,(()=>({start:()=>Promise.all(n.current.map((e=>new Promise((t=>e.start(t)))))),stop:e=>n.current.forEach((t=>t.stop(e))),get controllers(){return n.current}})));const d=(0,i.useMemo)((()=>e=>n.current.map(((t,r)=>{t.update(o?c(e,r,t):e[r]),u||t.start()}))),[e]);(0,i.useEffect)((()=>{r.current?o||d(t):u||n.current.forEach((e=>e.start()))})),(0,i.useEffect)((()=>(r.current=!0,()=>n.current.forEach((e=>e.destroy())))),[]);const f=n.current.map((e=>e.getValues()));return o?[f,d,e=>n.current.forEach((t=>t.pause(e)))]:f},W=e=>{const t=a.fun(e),r=K(1,t?e:[e]),n=r[0],o=r[1],i=r[2];return t?[n[0],o,i]:n},H=(e,t)=>{const r=(0,i.useRef)(!1),o=a.fun(t),s=c(t),l=(0,i.useRef)(),u=K(e,((e,t)=>(0===e&&(l.current=[]),l.current.push(t),n({},s,{config:c(s.config,e),attach:e>0&&(()=>l.current[e-1])})))),d=u[0],f=u[1],h=u[2],p=(0,i.useMemo)((()=>e=>f(((t,r)=>{e.reverse;const o=e.reverse?t+1:t-1,i=l.current[o];return n({},e,{config:c(e.config||s.config,t),attach:i&&(()=>i)})}))),[e,s.reverse]);return(0,i.useEffect)((()=>{r.current&&!o&&p(t)})),(0,i.useEffect)((()=>{r.current=!0}),[]),o?[d,p,h]:d};let Q=0;const U="enter",Z="leave",J="update",X=(e,t)=>("function"==typeof t?e.map(t):u(t)).map(String),Y=e=>{let t=e.items,r=e.keys,i=void 0===r?e=>e:r,a=o(e,["items","keys"]);return t=u(void 0!==t?t:null),n({items:t,keys:X(t,i)},a)};function ee(e,t,r){const a=n({items:e,keys:t||(e=>e)},r),l=Y(a),u=l.lazy,d=void 0!==u&&u,f=(l.unique,l.reset),h=void 0!==f&&f,p=(l.enter,l.leave,l.update,l.onDestroyed),m=(l.keys,l.items,l.onFrame),g=l.onRest,y=l.onStart,v=l.ref,b=o(l,["lazy","unique","reset","enter","leave","update","onDestroyed","keys","items","onFrame","onRest","onStart","ref"]),k=s(),w=(0,i.useRef)(!1),x=(0,i.useRef)({mounted:!1,first:!0,deleted:[],current:{},transitions:[],prevProps:{},paused:!!a.ref,instances:!w.current&&new Map,forceUpdate:k});return(0,i.useImperativeHandle)(a.ref,(()=>({start:()=>Promise.all(Array.from(x.current.instances).map((e=>{let t=e[1];return new Promise((e=>t.start(e)))}))),stop:e=>Array.from(x.current.instances).forEach((t=>t[1].stop(e))),get controllers(){return Array.from(x.current.instances).map((e=>e[1]))}}))),x.current=function(e,t){let r=e.first,i=e.prevProps,a=o(e,["first","prevProps"]),s=Y(t),l=s.items,u=s.keys,d=s.initial,f=s.from,h=s.enter,p=s.leave,m=s.update,g=s.trail,y=void 0===g?0:g,v=s.unique,b=s.config,k=s.order,w=void 0===k?[U,Z,J]:k,x=Y(i),V=x.keys,A=x.items,E=n({},a.current),j=[...a.deleted],O=Object.keys(E),P=new Set(O),S=new Set(u),C=u.filter((e=>!P.has(e))),q=a.transitions.filter((e=>!e.destroyed&&!S.has(e.originalKey))).map((e=>e.originalKey)),F=u.filter((e=>P.has(e))),R=-y;for(;w.length;){switch(w.shift()){case U:C.forEach(((e,t)=>{v&&j.find((t=>t.originalKey===e))&&(j=j.filter((t=>t.originalKey!==e)));const n=u.indexOf(e),o=l[n],i=r&&void 0!==d?"initial":U;E[e]={slot:i,originalKey:e,key:v?String(e):Q++,item:o,trail:R+=y,config:c(b,o,i),from:c(r&&void 0!==d?d||{}:f,o),to:c(h,o)}}));break;case Z:q.forEach((e=>{const t=V.indexOf(e),r=A[t],o=Z;j.unshift(n({},E[e],{slot:o,destroyed:!0,left:V[Math.max(0,t-1)],right:V[Math.min(V.length,t+1)],trail:R+=y,config:c(b,r,o),to:c(p,r)})),delete E[e]}));break;case J:F.forEach((e=>{const t=u.indexOf(e),r=l[t],o=J;E[e]=n({},E[e],{item:r,slot:o,trail:R+=y,config:c(b,r,o),to:c(m,r)})}))}}let M=u.map((e=>E[e]));return j.forEach((e=>{let t,r=e.left,n=(e.right,o(e,["left","right"]));-1!==(t=M.findIndex((e=>e.originalKey===r)))&&(t+=1),t=Math.max(0,t),M=[...M.slice(0,t),n,...M.slice(t)]})),n({},a,{changed:C.length||q.length||F.length,first:r&&0===C.length,transitions:M,current:E,deleted:j,prevProps:t})}(x.current,a),x.current.changed&&x.current.transitions.forEach((e=>{const t=e.slot,r=e.from,o=e.to,i=e.config,a=e.trail,s=e.key,l=e.item;x.current.instances.has(s)||x.current.instances.set(s,new D);const u=x.current.instances.get(s),c=n({},b,{to:o,from:r,config:i,ref:v,onRest:r=>{if(x.current.mounted){e.destroyed&&(v||d||te(x,s),p&&p(l));!Array.from(x.current.instances).some((e=>!e[1].idle))&&(v||d)&&x.current.deleted.length>0&&te(x),g&&g(l,t,r)}},onStart:y&&(()=>y(l,t)),onFrame:m&&(e=>m(l,t,e)),delay:a,reset:h&&t===U});u.update(c),x.current.paused||u.start()})),(0,i.useEffect)((()=>(x.current.mounted=w.current=!0,()=>{x.current.mounted=w.current=!1,Array.from(x.current.instances).map((e=>e[1].destroy())),x.current.instances.clear()})),[]),x.current.transitions.map((e=>{let t=e.item,r=e.slot,n=e.key;return{item:t,key:n,state:r,props:x.current.instances.get(n).getValues()}}))}function te(e,t){const r=e.current.deleted;for(let n of r){let r=n.key;const o=e=>e.key!==r;(a.und(t)||t===r)&&(e.current.instances.delete(r),e.current.transitions=e.current.transitions.filter(o),e.current.deleted=e.current.deleted.filter(o))}e.current.forceUpdate()}class re extends p{constructor(e){void 0===e&&(e={}),super(),!e.transform||e.transform instanceof f||(e=m.transform(e)),this.payload=e}}const ne={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},oe="[-+]?\\d*\\.?\\d+",ie=oe+"%";function ae(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}const se=new RegExp("rgb"+ae(oe,oe,oe)),le=new RegExp("rgba"+ae(oe,oe,oe,oe)),ue=new RegExp("hsl"+ae(oe,ie,ie)),ce=new RegExp("hsla"+ae(oe,ie,ie,oe)),de=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,fe=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,he=/^#([0-9a-fA-F]{6})$/,pe=/^#([0-9a-fA-F]{8})$/;function me(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function ge(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,o=2*r-n,i=me(o,n,e+1/3),a=me(o,n,e),s=me(o,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function ye(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function ve(e){return(parseFloat(e)%360+360)%360/360}function be(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function ke(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function we(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=he.exec(e))?parseInt(t[1]+"ff",16)>>>0:ne.hasOwnProperty(e)?ne[e]:(t=se.exec(e))?(ye(t[1])<<24|ye(t[2])<<16|ye(t[3])<<8|255)>>>0:(t=le.exec(e))?(ye(t[1])<<24|ye(t[2])<<16|ye(t[3])<<8|be(t[4]))>>>0:(t=de.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=pe.exec(e))?parseInt(t[1],16)>>>0:(t=fe.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=ue.exec(e))?(255|ge(ve(t[1]),ke(t[2]),ke(t[3])))>>>0:(t=ce.exec(e))?(ge(ve(t[1]),ke(t[2]),ke(t[3]))|be(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const xe=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ve=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Ae=new RegExp(`(${Object.keys(ne).join("|")})`,"g");let Ee={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const je=["Webkit","Ms","Moz","O"];function Oe(e,t,r){return null==t||"boolean"==typeof t||""===t?"":r||"number"!=typeof t||0===t||Ee.hasOwnProperty(e)&&Ee[e]?(""+t).trim():t+"px"}Ee=Object.keys(Ee).reduce(((e,t)=>(je.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Ee);const Pe={};S((e=>new re(e))),E("div"),x((e=>{const t=e.output.map((e=>e.replace(Ve,we))).map((e=>e.replace(Ae,we))),r=t[0].match(xe).map((()=>[]));t.forEach((e=>{e.match(xe).forEach(((e,t)=>r[t].push(+e)))}));const o=t[0].match(xe).map(((t,o)=>T(n({},e,{output:r[o]}))));return e=>{let r=0;return t[0].replace(xe,(()=>o[r++](e))).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,((e,t,r,n,o)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`))}})),v(ne),y(((e,t)=>{if(!e.nodeType||void 0===e.setAttribute)return!1;{const i=t.style,a=t.children,s=t.scrollTop,l=t.scrollLeft,u=o(t,["style","children","scrollTop","scrollLeft"]),c="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName;void 0!==s&&(e.scrollTop=s),void 0!==l&&(e.scrollLeft=l),void 0!==a&&(e.textContent=a);for(let t in i)if(i.hasOwnProperty(t)){var r=0===t.indexOf("--"),n=Oe(t,i[t],r);"float"===t&&(t="cssFloat"),r?e.style.setProperty(t,n):e.style[t]=n}for(let t in u){const r=c?t:Pe[t]||(Pe[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())));void 0!==e.getAttribute(r)&&e.setAttribute(r,u[t])}}}),(e=>e));const Se=(Ce=e=>(0,i.forwardRef)(((t,r)=>{const l=s(),u=(0,i.useRef)(!0),c=(0,i.useRef)(null),d=(0,i.useRef)(null),f=(0,i.useCallback)((e=>{const t=c.current;c.current=new q(e,(()=>{let e=!1;d.current&&(e=m.fn(d.current,c.current.getAnimatedValue())),d.current&&!1!==e||l()})),t&&t.detach()}),[]);(0,i.useEffect)((()=>()=>{u.current=!1,c.current&&c.current.detach()}),[]),(0,i.useImperativeHandle)(r,(()=>P(d,u,l))),f(t);const h=c.current.getValue(),p=(h.scrollTop,h.scrollLeft,o(h,["scrollTop","scrollLeft"])),g=(y=e,!a.fun(y)||y.prototype instanceof i.Component?e=>d.current=function(e,t){return t&&(a.fun(t)?t(e):a.obj(t)&&(t.current=e)),e}(e,r):void 0);var y;return i.createElement(e,n({},p,{ref:g}))})),void 0===(qe=!1)&&(qe=!0),e=>(a.arr(e)?e:Object.keys(e)).reduce(((e,t)=>{const r=qe?t[0].toLowerCase()+t.substring(1):t;return e[r]=Ce(r),e}),Ce));var Ce,qe;const Fe=Se(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"])}}]);
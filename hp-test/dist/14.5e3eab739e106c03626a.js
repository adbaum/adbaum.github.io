(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[14],{1535:function(e,t,a){"use strict";a.r(t),a.d(t,{Shots:function(){return V}});var n=a(353),r=a(955),i=a(1054),o=a.n(i),s=a(1070),l=a.n(s),c=a.p+"21d4a47d8bae157b66dc5496e76e1464.svg",u=a(689),d=a(322),g=a(339),f=a(345);function m(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){return void a(e)}s.done?t(l):Promise.resolve(l).then(n,r)}function h(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var v=(0,f._)("constructor.shotsDecode")&&window.createImageBitmap,b=function(){function e(t,a,n,r){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,"onAllImagesLoaded",void 0),p(this,"imageInstances",[]),p(this,"imagesLoaded",0),p(this,"isLoading",!1),p(this,"areAllImagesLoaded",!1),p(this,"seekCallbackData",void 0),this.onAllImagesLoaded=r,(0,d.range)(1,a+1).map((function(e){return function(e,t,a){return"".concat(e,"/").concat(t.toString().padStart(6,"0"),".").concat(a||"jpg")}(t,e,n)})).forEach((function(e){i.imageInstances.push({image:new Image,isLoaded:!1,url:e})}))}var t,a,n,r,i;return t=e,(a=[{key:"preloadFirstImage",value:function(){this.loadImage(0)}},{key:"loadImage",value:function(e){var t=this,a=this.imageInstances[e];a&&!a.isLoaded&&(a.image.onload=function(){v?createImageBitmap(a.image).then((function(n){a.imageBitmap=n,a.isLoaded=!0,t.imagesLoaded++,t.imageInstances.length===t.imagesLoaded&&(t.areAllImagesLoaded=!0,t.isLoading=!1,t.onAllImagesLoaded&&t.onAllImagesLoaded()),t.seekCallbackData&&t.seekCallbackData.index===e&&(t.seekCallbackData.callback(a.imageBitmap),t.seekCallbackData=void 0)})):(a.isLoaded=!0,t.imagesLoaded++,t.imageInstances.length===t.imagesLoaded&&(t.areAllImagesLoaded=!0,t.isLoading=!1,t.onAllImagesLoaded&&t.onAllImagesLoaded()),t.seekCallbackData&&t.seekCallbackData.index===e&&(t.seekCallbackData.callback(a.image),t.seekCallbackData=void 0))},g.default.requestIdleCallback((function(){a.image.src=a.url})))}},{key:"startLoad",value:function(){var e=this;if(!this.isLoading){this.areAllImagesLoaded=!1,this.isLoading=!0;for(var t=[0],a=Math.ceil(Math.log(this.imageInstances.length)/Math.log(2)),n=1;n<=a;n++)for(var r=Math.pow(2,n),i=Math.ceil(this.imageInstances.length/r),o=1;o<=r;o++){var s=o*i;t.push(s)}(t=(0,d.uniq)(t).filter((function(t){return t<e.imageInstances.length}))).forEach((function(t){return e.loadImage(t)}))}}},{key:"stopLoad",value:function(){this.isLoading&&(this.imageInstances.forEach((function(e){e.isLoaded||g.default.requestIdleCallback((function(){e.image.onload=null,e.image.src=""}))})),this.isLoading=!1)}},{key:"seekImageByIndex",value:(r=regeneratorRuntime.mark((function e(t){var a,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.seekCallbackData&&(this.seekCallbackData.callback(void 0),this.seekCallbackData=void 0),a=t,e.abrupt("return",new Promise((function(e){t>n.imageInstances.length-1&&(a=n.imageInstances.length-1),t<0&&(a=0);var r=n.imageInstances[a];if(r.isLoaded)return e(v?r.imageBitmap:r.image);n.seekCallbackData={index:a,callback:e}})));case 3:case"end":return e.stop()}}),e,this)})),i=function(){var e=this,t=arguments;return new Promise((function(a,n){var i=r.apply(e,t);function o(e){m(i,a,n,o,s,"next",e)}function s(e){m(i,a,n,o,s,"throw",e)}o(void 0)}))},function(e){return i.apply(this,arguments)})},{key:"getImageIndexByTimelinePercent",value:function(e){return Math.floor(this.imageInstances.length*e)}},{key:"getNumberOfImages",value:function(){return this.imageInstances.length}}])&&h(t.prototype,a),n&&h(t,n),e}(),y=a(1370),I=a(640),w=a(308),k=a(696),x=a(636);function S(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function L(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var P,O=400,C=16.66,D=Math.floor(24.009603841536613);!function(e){e[e.Precise=0]="Precise",e[e.Lazy=1]="Lazy"}(P||(P={}));var j,B=window.requestAnimationFrame||function(e){(0,d.defer)(e)},E=function(){function e(t,a,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),L(this,"canvas",void 0),L(this,"imageLoader",void 0),L(this,"easingType",P.Lazy),L(this,"lastDrawnFrameIndex",void 0),L(this,"easingSequenceId",void 0),L(this,"lastEasingCallTime",0),L(this,"lastTargetIndex",0),L(this,"isPlayingAnimation",!1),L(this,"isPaused",!1),L(this,"byStepReverse",!1),this.canvas=t,this.imageLoader=a,this.easingType=n}var t,a,n;return t=e,(a=[{key:"drawImageByIndex",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a?this.startEasingSequence(e):this.imageLoader.seekImageByIndex(e).then((function(a){return t.drawImage(a,e)}))}},{key:"drawImageByTimelinePercent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=this.imageLoader.getImageIndexByTimelinePercent(e);return this.drawImageByIndex(a,t)}},{key:"startDrawingByStep",value:function(e,t){var a=this,n=t.speed,r=t.loop,i=t.spring,o=function(e){return e*C/n},s=o(e),l=null;this.isPlayingAnimation=!0,B((function t(n){if(!l&&a.isPaused&&a.lastDrawnFrameIndex){var c=a.byStepReverse?e-a.lastDrawnFrameIndex:a.lastDrawnFrameIndex;l=n-o(c+1),a.isPaused=!1}else l||(l=n);var u=Math.min((n-l)/s,1),d=Math.floor(u*(e-0)+0)/1;a.drawImageByIndex(a.byStepReverse?e-d:d).then((function(){1===u&&r?(l=n,i&&(a.byStepReverse=!a.byStepReverse)):1===u&&(a.isPlayingAnimation=!1),a.isPlayingAnimation&&B(t)}))}))}},{key:"stopDrawingByStep",value:function(){this.isPlayingAnimation=!1}},{key:"pauseDrawingByStep",value:function(){this.isPlayingAnimation=!1,this.isPaused=!0}},{key:"drawImage",value:function(e,t){var a=this;return new Promise((function(n,r){if(!e||t===a.lastDrawnFrameIndex)return n();var i,o,s=a.canvas.getContext("2d");if(!s)return r(new Error("Cannot find context to paint on"));var l=0,c=0,u=e.height/e.width;a.canvas.height/a.canvas.width>u?(i=a.canvas.height/u,o=a.canvas.height,l=(a.canvas.width-i)/2):(i=a.canvas.width,o=a.canvas.width*u,c=(a.canvas.height-o)/2),B((function(){s.clearRect(0,0,a.canvas.width,a.canvas.height),s.drawImage(e,0,0,e.width,e.height,l,c,i,o),a.lastDrawnFrameIndex=t,n()}))}))}},{key:"startEasingSequence",value:function(e){var t=this;clearInterval(this.easingSequenceId);var a=this.lastDrawnFrameIndex||0;return new Promise((function(n){var r=Date.now(),i=r-t.lastEasingCallTime,o=Math.abs(t.lastTargetIndex-e)/i,s=Math.round(o/i*t.imageLoader.getNumberOfImages()*2),l=Math.min(Math.round(.05*t.imageLoader.getNumberOfImages()),D,t.easingType===P.Precise?s:Math.ceil(O/i));t.lastEasingCallTime=r,t.lastTargetIndex=e;var c=e-a,u=e-Math.sign(c)*Math.min(l,Math.abs(e-a)),d=e-u,g=r,f=g+O;t.drawImageByIndex(u),t.easingSequenceId=setInterval((function(){var e=Date.now();if(e>f)return clearInterval(t.easingSequenceId),t.easingSequenceId=void 0,n();var a=(e-g)/O,r=x.Z.easeOutCubic(a),i=Math.round(d*r)+u;t.drawImageByIndex(i)}),C)}))}}])&&S(t.prototype,a),n&&S(t,n),e}(),M=a(1426),F=a(1369),A=a.p+"img/constructor/blocks/shots/background-shots.svg",T=a(661),R=a(651);function z(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){return void a(e)}s.done?t(l):Promise.resolve(l).then(n,r)}function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(Object(a),!0).forEach((function(t){H(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function H(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return W(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return W(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var N=window.devicePixelRatio||1,Z={top:1,center:.5,bottom:0},G=[{},function(){}],V=function(e){var t=(0,n.useContext)(u.BackboneContext),a=t.model,i=a._id,s=a.w,d=a.h,g=a.basePath,f=a.numberOfImages,m=a.scrollSpeed,h=void 0===m?1:m,p=a.imageWidth,v=void 0===p?0:p,x=a.imageHeight,S=void 0===x?0:x,L=a.fixed_position,O=a.scrollStartPoint,C=void 0===O?y.FU.bottom:O,D=a.playbackType,B=a.startPointOffset,U=a.scrollDelay,H=a.is_full_width,W=a.is_full_height,V=a.useEasing,Y=void 0!==V&&V,$=a.fileExtension,J=a.pausable,K=a.byStepSpeed,Q=a.byStepLoop,X=a.byStepSpringLoop,ee=a.firstFrameLambdaUrl,te=t.modelSave,ae=(0,n.useContext)(M.n),ne=ae.model,re=ne.currentScrollOffset,ie=ne.hoverPercent,oe=ne.mouseIn,se=ne.pageScale,le=void 0===se?1:se,ce=ne.viewport,ue=ne.canDirectLinkBeUsed,de=ne.pageContentTop,ge=void 0===de?0:de,fe=ne.magContainerHeight,me=void 0===fe?0:fe,he=ne.widgetBoxTop,pe=void 0===he?0:he,ve=ne.isStarted,be=void 0!==ve&&ve,ye=ae.model,Ie=_(e.useSharedState?e.useSharedState():G,2),we=Ie[0],ke=we.isUploading,xe=we.files,Se=we.url,Le=Ie[1],Pe="viewer"===e.mode,Oe=_((0,n.useState)(!1),2),Ce=Oe[0],De=Oe[1],je=_((0,n.useState)(!1),2),Be=je[0],Ee=je[1],Me=(0,n.useRef)(null),Fe=(0,n.useRef)(null),Ae=Fe.current,Te=(0,n.useRef)(null),Re=Te.current,ze=(0,n.useMemo)((function(){if(ee){var e=new URL(ee);return e.searchParams.append("w","40"),e.toString()}}),[ee]);(0,n.useEffect)((function(){g&&f&&(Fe.current=new b(g,Pe?f:1,$,(function(){Ee(!0),e.onAllImagesLoaded&&e.onAllImagesLoaded()})),Fe.current.preloadFirstImage(),Te.current=new E(Me.current,Fe.current,D===y.i2.mousemove?P.Lazy:P.Precise),Te.current.drawImageByIndex(0).then((function(){e.onFirstFrameLoaded&&e.onFirstFrameLoaded()})))}),[g]);var Ue,qe,He=_((0,n.useState)(null),2),_e=He[0],We=He[1];return(0,n.useEffect)((function(){if(_e){te(q({basePath:_e.basePath,imageWidth:_e.imageWidth,imageHeight:_e.imageHeight,numberOfImages:_e.numberOfImages,fileExtension:_e.fileExtension,totalSize:_e.totalSize,firstFrameLambdaUrl:_e.firstFrameLambdaUrl},function(e,t){return e===w.Z.widget.defaults.w&&t===w.Z.widget.defaults.h}(s,d)?function(e,t){if(H||W)return{w:s,h:d};var a=e<=480?e:Math.round(480*e/e);return{w:a,h:t*a/e}}(_e.imageWidth||s,_e.imageHeight||s):{}))}}),[_e]),(0,n.useEffect)((function(){var e=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t,a,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!Se||!Se.length){e.next=7;break}return e.next=4,(0,I.Dv)(Se,i);case 4:t=e.sent,e.next=15;break;case 7:if(a=(0,F.L)(xe),n=a.errorMsg,r=a.validated,!n&&r){e.next=12;break}return Le({isUploading:!1,uploadError:n}),setTimeout((function(){return alert(n)}),0),e.abrupt("return");case 12:return e.next=14,(0,F.t)(r,i);case 14:t=e.sent;case 15:t&&t.basePath&&t.imageHeight&&t.imageWidth&&t.numberOfImages&&t.totalSize&&!ye.isDestroyed&&!Ce?(We({basePath:t.basePath,imageWidth:t.imageWidth,imageHeight:t.imageHeight,numberOfImages:t.numberOfImages,totalSize:t.totalSize,fileExtension:t.fileExtension,firstFrameLambdaUrl:t.firstFrameLambdaUrl}),Le({isUploading:!1}),k.ZP.sendEvent(k.RM.ShotsWidgetActions,{eventLabel:"Video ".concat(Se&&Se.length?"link pasted":"file uploaded")})):Le({isUploading:!1,uploadError:"Error uploading video"}),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),Le({isUploading:!1,uploadError:"Error uploading video"});case 21:case"end":return e.stop()}}),e,null,[[0,18]])})),function(){var t=this,a=arguments;return new Promise((function(n,r){var i=e.apply(t,a);function o(e){z(i,n,r,o,s,"next",e)}function s(e){z(i,n,r,o,s,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}();ke&&(Se||xe)&&!ye.isDestroyed&&e()}),[ke]),(0,n.useEffect)((function(){Pe&&Fe.current&&(be?Fe.current.startLoad():Fe.current.stopLoad())}),[be]),(0,n.useEffect)((function(){var e;if(Ae)if(Pe)if(void 0!==re)e=function(e){var t=e.currentScrollOffset,a=e.pageContentTop,n=e.pageScale,r=e.magContainerHeight,i=e.widgetBoxTop,o=e.scrollStartPoint,s=e.startPointOffset,l=e.scrollSpeed,c=e.scrollDelay,u=a/n,d=r/n,g=t/n;if(e.isFixed)return Math.round((g-c)*l/10);var f=i+u,m=f-d,h=Z[o]*(f-m)+m+s;return Math.round((g-h)*l/10)}({currentScrollOffset:re,pageContentTop:ge,pageScale:le,magContainerHeight:me,widgetBoxTop:pe,scrollStartPoint:C,startPointOffset:B,scrollSpeed:h,scrollDelay:U,isFixed:!!L}),null==Re||Re.drawImageByIndex(e,Y);else if(void 0!==ie)null==Re||Re.drawImageByTimelinePercent(ie,Y);else{if(void 0===oe)return;oe&&(null==Re||Re.startDrawingByStep(f,{speed:K,loop:Q,spring:X})),!oe&&J?null==Re||Re.pauseDrawingByStep():oe||null==Re||Re.stopDrawingByStep()}else null==Re||Re.drawImageByIndex(0)}),[re,ce,s,d,ie,oe]),(0,n.useEffect)((function(){return Le({canDirectLinkBeUsed:ue}),e.onFirstRender&&e.onFirstRender(),function(){De(!0)}}),[]),(0,R.jsx)(r.Cover,{alignItems:"center",justifyContent:"center",backgroundRepeat:"no-repeat",css:(0,T.css)(j||(Ue=["\n        label {\n          position: absolute;\n          cursor: default;\n          z-index: 1001;\n          width: 100%;\n          height: 100%;\n        }\n      "],qe||(qe=Ue.slice(0)),j=Object.freeze(Object.defineProperties(Ue,{raw:{value:Object.freeze(qe)}})))),backgroundColor:"constructor"!==e.mode||g?"transparent":"lightGray",backgroundImage:g||"constructor"!==e.mode||ke?"":"url(".concat(c,")"),width:"100%",height:"100%",backgroundPosition:"center",className:"shots-cover"},"constructor"===e.mode&&g&&(0,R.jsx)(r.Cover,{position:"absolute",zIndex:1e3,backgroundImage:"url(".concat(A,")"),backgroundRepeat:"repeat",width:"100%",height:"100%",opacity:.4}),"constructor"===e.mode&&(0,R.jsx)(l(),{id:"rm-shots-widget-file-upload-".concat(i),onClick:function(e){e.preventDefault()},readFileData:!1,onChangeMultiple:function(e){Le({files:e,isUploading:!0})},position:"absolute",zIndex:1001,dropFile:!ke,accept:"image/png, image/jpeg, video/*, .mkv",multiple:!0}),ke&&(0,R.jsx)(r.Flex,{position:"absolute",top:"50%",left:"50%",cursor:"default",transform:"translate(-50%, -50%)"},(0,R.jsx)(o(),{bgColor:"gray",size:"big"})),(0,R.jsx)("canvas",{id:i,width:"constructor"===e.mode||le>1?v:Math.min(v,Math.floor(s*N)),height:"constructor"===e.mode||le>1?S:Math.min(S,Math.floor(d*N)),ref:Me,style:q({objectFit:"cover",userSelect:"none",width:"100%",height:"100%",zIndex:1e3},Be||!ee?{opacity:1,visibility:"visible"}:{opacity:0,visibility:"hidden"})},"Your browser does not support Canvas element")," ",ee&&!Be&&(0,R.jsx)(r.Box,{position:"absolute",left:"0",right:"0",bottom:"0",top:"0",zIndex:1001,backgroundImage:"url(".concat(ze,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",filter:"blur(5px)"}))}}}]);
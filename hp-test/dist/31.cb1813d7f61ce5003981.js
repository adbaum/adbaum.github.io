(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[31,14],{1535:function(e,t,n){"use strict";n.r(t),n.d(t,{Shots:function(){return V}});var a=n(353),r=n(955),i=n(1054),o=n.n(i),s=n(1070),u=n.n(s),l=n.p+"21d4a47d8bae157b66dc5496e76e1464.svg",c=n(689),d=n(322),f=n(339),g=n(345);function m(e,t,n,a,r,i,o){try{var s=e[i](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(a,r)}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=(0,g._)("constructor.shotsDecode")&&window.createImageBitmap,b=function(){function e(t,n,a,r){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,"onAllImagesLoaded",void 0),p(this,"imageInstances",[]),p(this,"imagesLoaded",0),p(this,"isLoading",!1),p(this,"areAllImagesLoaded",!1),p(this,"seekCallbackData",void 0),this.onAllImagesLoaded=r,(0,d.range)(1,n+1).map((function(e){return function(e,t,n){return"".concat(e,"/").concat(t.toString().padStart(6,"0"),".").concat(n||"jpg")}(t,e,a)})).forEach((function(e){i.imageInstances.push({image:new Image,isLoaded:!1,url:e})}))}var t,n,a,r,i;return t=e,(n=[{key:"preloadFirstImage",value:function(){this.loadImage(0)}},{key:"loadImage",value:function(e){var t=this,n=this.imageInstances[e];n&&!n.isLoaded&&(n.image.onload=function(){v?createImageBitmap(n.image).then((function(a){n.imageBitmap=a,n.isLoaded=!0,t.imagesLoaded++,t.imageInstances.length===t.imagesLoaded&&(t.areAllImagesLoaded=!0,t.isLoading=!1,t.onAllImagesLoaded&&t.onAllImagesLoaded()),t.seekCallbackData&&t.seekCallbackData.index===e&&(t.seekCallbackData.callback(n.imageBitmap),t.seekCallbackData=void 0)})):(n.isLoaded=!0,t.imagesLoaded++,t.imageInstances.length===t.imagesLoaded&&(t.areAllImagesLoaded=!0,t.isLoading=!1,t.onAllImagesLoaded&&t.onAllImagesLoaded()),t.seekCallbackData&&t.seekCallbackData.index===e&&(t.seekCallbackData.callback(n.image),t.seekCallbackData=void 0))},f.default.requestIdleCallback((function(){n.image.src=n.url})))}},{key:"startLoad",value:function(){var e=this;if(!this.isLoading){this.areAllImagesLoaded=!1,this.isLoading=!0;for(var t=[0],n=Math.ceil(Math.log(this.imageInstances.length)/Math.log(2)),a=1;a<=n;a++)for(var r=Math.pow(2,a),i=Math.ceil(this.imageInstances.length/r),o=1;o<=r;o++){var s=o*i;t.push(s)}(t=(0,d.uniq)(t).filter((function(t){return t<e.imageInstances.length}))).forEach((function(t){return e.loadImage(t)}))}}},{key:"stopLoad",value:function(){this.isLoading&&(this.imageInstances.forEach((function(e){e.isLoaded||f.default.requestIdleCallback((function(){e.image.onload=null,e.image.src=""}))})),this.isLoading=!1)}},{key:"seekImageByIndex",value:(r=regeneratorRuntime.mark((function e(t){var n,a=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.seekCallbackData&&(this.seekCallbackData.callback(void 0),this.seekCallbackData=void 0),n=t,e.abrupt("return",new Promise((function(e){t>a.imageInstances.length-1&&(n=a.imageInstances.length-1),t<0&&(n=0);var r=a.imageInstances[n];if(r.isLoaded)return e(v?r.imageBitmap:r.image);a.seekCallbackData={index:n,callback:e}})));case 3:case"end":return e.stop()}}),e,this)})),i=function(){var e=this,t=arguments;return new Promise((function(n,a){var i=r.apply(e,t);function o(e){m(i,n,a,o,s,"next",e)}function s(e){m(i,n,a,o,s,"throw",e)}o(void 0)}))},function(e){return i.apply(this,arguments)})},{key:"getImageIndexByTimelinePercent",value:function(e){return Math.floor(this.imageInstances.length*e)}},{key:"getNumberOfImages",value:function(){return this.imageInstances.length}}])&&h(t.prototype,n),a&&h(t,a),e}(),y=n(1370),I=n(640),w=n(308),S=n(696),k=n(636);function x(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L,O=400,D=16.66,E=Math.floor(24.009603841536613);!function(e){e[e.Precise=0]="Precise",e[e.Lazy=1]="Lazy"}(L||(L={}));var C,M=window.requestAnimationFrame||function(e){(0,d.defer)(e)},j=function(){function e(t,n,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),P(this,"canvas",void 0),P(this,"imageLoader",void 0),P(this,"easingType",L.Lazy),P(this,"lastDrawnFrameIndex",void 0),P(this,"easingSequenceId",void 0),P(this,"lastEasingCallTime",0),P(this,"lastTargetIndex",0),P(this,"isPlayingAnimation",!1),P(this,"isPaused",!1),P(this,"byStepReverse",!1),this.canvas=t,this.imageLoader=n,this.easingType=a}var t,n,a;return t=e,(n=[{key:"drawImageByIndex",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n?this.startEasingSequence(e):this.imageLoader.seekImageByIndex(e).then((function(n){return t.drawImage(n,e)}))}},{key:"drawImageByTimelinePercent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.imageLoader.getImageIndexByTimelinePercent(e);return this.drawImageByIndex(n,t)}},{key:"startDrawingByStep",value:function(e,t){var n=this,a=t.speed,r=t.loop,i=t.spring,o=function(e){return e*D/a},s=o(e),u=null;this.isPlayingAnimation=!0,M((function t(a){if(!u&&n.isPaused&&n.lastDrawnFrameIndex){var l=n.byStepReverse?e-n.lastDrawnFrameIndex:n.lastDrawnFrameIndex;u=a-o(l+1),n.isPaused=!1}else u||(u=a);var c=Math.min((a-u)/s,1),d=Math.floor(c*(e-0)+0)/1;n.drawImageByIndex(n.byStepReverse?e-d:d).then((function(){1===c&&r?(u=a,i&&(n.byStepReverse=!n.byStepReverse)):1===c&&(n.isPlayingAnimation=!1),n.isPlayingAnimation&&M(t)}))}))}},{key:"stopDrawingByStep",value:function(){this.isPlayingAnimation=!1}},{key:"pauseDrawingByStep",value:function(){this.isPlayingAnimation=!1,this.isPaused=!0}},{key:"drawImage",value:function(e,t){var n=this;return new Promise((function(a,r){if(!e||t===n.lastDrawnFrameIndex)return a();var i,o,s=n.canvas.getContext("2d");if(!s)return r(new Error("Cannot find context to paint on"));var u=0,l=0,c=e.height/e.width;n.canvas.height/n.canvas.width>c?(i=n.canvas.height/c,o=n.canvas.height,u=(n.canvas.width-i)/2):(i=n.canvas.width,o=n.canvas.width*c,l=(n.canvas.height-o)/2),M((function(){s.clearRect(0,0,n.canvas.width,n.canvas.height),s.drawImage(e,0,0,e.width,e.height,u,l,i,o),n.lastDrawnFrameIndex=t,a()}))}))}},{key:"startEasingSequence",value:function(e){var t=this;clearInterval(this.easingSequenceId);var n=this.lastDrawnFrameIndex||0;return new Promise((function(a){var r=Date.now(),i=r-t.lastEasingCallTime,o=Math.abs(t.lastTargetIndex-e)/i,s=Math.round(o/i*t.imageLoader.getNumberOfImages()*2),u=Math.min(Math.round(.05*t.imageLoader.getNumberOfImages()),E,t.easingType===L.Precise?s:Math.ceil(O/i));t.lastEasingCallTime=r,t.lastTargetIndex=e;var l=e-n,c=e-Math.sign(l)*Math.min(u,Math.abs(e-n)),d=e-c,f=r,g=f+O;t.drawImageByIndex(c),t.easingSequenceId=setInterval((function(){var e=Date.now();if(e>g)return clearInterval(t.easingSequenceId),t.easingSequenceId=void 0,a();var n=(e-f)/O,r=k.Z.easeOutCubic(n),i=Math.round(d*r)+c;t.drawImageByIndex(i)}),D)}))}}])&&x(t.prototype,n),a&&x(t,a),e}(),A=n(1426),T=n(1369),B=n.p+"img/constructor/blocks/shots/background-shots.svg",F=n(661),R=n(651);function U(e,t,n,a,r,i,o){try{var s=e[i](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(a,r)}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){H(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==s.return||s.return()}finally{if(r)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var N=window.devicePixelRatio||1,W={top:1,center:.5,bottom:0},G=[{},function(){}],V=function(e){var t=(0,a.useContext)(c.BackboneContext),n=t.model,i=n._id,s=n.w,d=n.h,f=n.basePath,g=n.numberOfImages,m=n.scrollSpeed,h=void 0===m?1:m,p=n.imageWidth,v=void 0===p?0:p,k=n.imageHeight,x=void 0===k?0:k,P=n.fixed_position,O=n.scrollStartPoint,D=void 0===O?y.FU.bottom:O,E=n.playbackType,M=n.startPointOffset,_=n.scrollDelay,H=n.is_full_width,Z=n.is_full_height,V=n.useEasing,$=void 0!==V&&V,J=n.fileExtension,Q=n.pausable,Y=n.byStepSpeed,K=n.byStepLoop,X=n.byStepSpringLoop,ee=n.firstFrameLambdaUrl,te=t.modelSave,ne=(0,a.useContext)(A.n),ae=ne.model,re=ae.currentScrollOffset,ie=ae.hoverPercent,oe=ae.mouseIn,se=ae.pageScale,ue=void 0===se?1:se,le=ae.viewport,ce=ae.canDirectLinkBeUsed,de=ae.pageContentTop,fe=void 0===de?0:de,ge=ae.magContainerHeight,me=void 0===ge?0:ge,he=ae.widgetBoxTop,pe=void 0===he?0:he,ve=ae.isStarted,be=void 0!==ve&&ve,ye=ne.model,Ie=q(e.useSharedState?e.useSharedState():G,2),we=Ie[0],Se=we.isUploading,ke=we.files,xe=we.url,Pe=Ie[1],Le="viewer"===e.mode,Oe=q((0,a.useState)(!1),2),De=Oe[0],Ee=Oe[1],Ce=q((0,a.useState)(!1),2),Me=Ce[0],je=Ce[1],Ae=(0,a.useRef)(null),Te=(0,a.useRef)(null),Be=Te.current,Fe=(0,a.useRef)(null),Re=Fe.current,Ue=(0,a.useMemo)((function(){if(ee){var e=new URL(ee);return e.searchParams.append("w","40"),e.toString()}}),[ee]);(0,a.useEffect)((function(){f&&g&&(Te.current=new b(f,Le?g:1,J,(function(){je(!0),e.onAllImagesLoaded&&e.onAllImagesLoaded()})),Te.current.preloadFirstImage(),Fe.current=new j(Ae.current,Te.current,E===y.i2.mousemove?L.Lazy:L.Precise),Fe.current.drawImageByIndex(0).then((function(){e.onFirstFrameLoaded&&e.onFirstFrameLoaded()})))}),[f]);var _e,ze,He=q((0,a.useState)(null),2),qe=He[0],Ze=He[1];return(0,a.useEffect)((function(){if(qe){te(z({basePath:qe.basePath,imageWidth:qe.imageWidth,imageHeight:qe.imageHeight,numberOfImages:qe.numberOfImages,fileExtension:qe.fileExtension,totalSize:qe.totalSize,firstFrameLambdaUrl:qe.firstFrameLambdaUrl},function(e,t){return e===w.Z.widget.defaults.w&&t===w.Z.widget.defaults.h}(s,d)?function(e,t){if(H||Z)return{w:s,h:d};var n=e<=480?e:Math.round(480*e/e);return{w:n,h:t*n/e}}(qe.imageWidth||s,qe.imageHeight||s):{}))}}),[qe]),(0,a.useEffect)((function(){var e=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t,n,a,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!xe||!xe.length){e.next=7;break}return e.next=4,(0,I.Dv)(xe,i);case 4:t=e.sent,e.next=15;break;case 7:if(n=(0,T.L)(ke),a=n.errorMsg,r=n.validated,!a&&r){e.next=12;break}return Pe({isUploading:!1,uploadError:a}),setTimeout((function(){return alert(a)}),0),e.abrupt("return");case 12:return e.next=14,(0,T.t)(r,i);case 14:t=e.sent;case 15:t&&t.basePath&&t.imageHeight&&t.imageWidth&&t.numberOfImages&&t.totalSize&&!ye.isDestroyed&&!De?(Ze({basePath:t.basePath,imageWidth:t.imageWidth,imageHeight:t.imageHeight,numberOfImages:t.numberOfImages,totalSize:t.totalSize,fileExtension:t.fileExtension,firstFrameLambdaUrl:t.firstFrameLambdaUrl}),Pe({isUploading:!1}),S.ZP.sendEvent(S.RM.ShotsWidgetActions,{eventLabel:"Video ".concat(xe&&xe.length?"link pasted":"file uploaded")})):Pe({isUploading:!1,uploadError:"Error uploading video"}),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),Pe({isUploading:!1,uploadError:"Error uploading video"});case 21:case"end":return e.stop()}}),e,null,[[0,18]])})),function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){U(i,a,r,o,s,"next",e)}function s(e){U(i,a,r,o,s,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}();Se&&(xe||ke)&&!ye.isDestroyed&&e()}),[Se]),(0,a.useEffect)((function(){Le&&Te.current&&(be?Te.current.startLoad():Te.current.stopLoad())}),[be]),(0,a.useEffect)((function(){var e;if(Be)if(Le)if(void 0!==re)e=function(e){var t=e.currentScrollOffset,n=e.pageContentTop,a=e.pageScale,r=e.magContainerHeight,i=e.widgetBoxTop,o=e.scrollStartPoint,s=e.startPointOffset,u=e.scrollSpeed,l=e.scrollDelay,c=n/a,d=r/a,f=t/a;if(e.isFixed)return Math.round((f-l)*u/10);var g=i+c,m=g-d,h=W[o]*(g-m)+m+s;return Math.round((f-h)*u/10)}({currentScrollOffset:re,pageContentTop:fe,pageScale:ue,magContainerHeight:me,widgetBoxTop:pe,scrollStartPoint:D,startPointOffset:M,scrollSpeed:h,scrollDelay:_,isFixed:!!P}),null==Re||Re.drawImageByIndex(e,$);else if(void 0!==ie)null==Re||Re.drawImageByTimelinePercent(ie,$);else{if(void 0===oe)return;oe&&(null==Re||Re.startDrawingByStep(g,{speed:Y,loop:K,spring:X})),!oe&&Q?null==Re||Re.pauseDrawingByStep():oe||null==Re||Re.stopDrawingByStep()}else null==Re||Re.drawImageByIndex(0)}),[re,le,s,d,ie,oe]),(0,a.useEffect)((function(){return Pe({canDirectLinkBeUsed:ce}),e.onFirstRender&&e.onFirstRender(),function(){Ee(!0)}}),[]),(0,R.jsx)(r.Cover,{alignItems:"center",justifyContent:"center",backgroundRepeat:"no-repeat",css:(0,F.css)(C||(_e=["\n        label {\n          position: absolute;\n          cursor: default;\n          z-index: 1001;\n          width: 100%;\n          height: 100%;\n        }\n      "],ze||(ze=_e.slice(0)),C=Object.freeze(Object.defineProperties(_e,{raw:{value:Object.freeze(ze)}})))),backgroundColor:"constructor"!==e.mode||f?"transparent":"lightGray",backgroundImage:f||"constructor"!==e.mode||Se?"":"url(".concat(l,")"),width:"100%",height:"100%",backgroundPosition:"center",className:"shots-cover"},"constructor"===e.mode&&f&&(0,R.jsx)(r.Cover,{position:"absolute",zIndex:1e3,backgroundImage:"url(".concat(B,")"),backgroundRepeat:"repeat",width:"100%",height:"100%",opacity:.4}),"constructor"===e.mode&&(0,R.jsx)(u(),{id:"rm-shots-widget-file-upload-".concat(i),onClick:function(e){e.preventDefault()},readFileData:!1,onChangeMultiple:function(e){Pe({files:e,isUploading:!0})},position:"absolute",zIndex:1001,dropFile:!Se,accept:"image/png, image/jpeg, video/*, .mkv",multiple:!0}),Se&&(0,R.jsx)(r.Flex,{position:"absolute",top:"50%",left:"50%",cursor:"default",transform:"translate(-50%, -50%)"},(0,R.jsx)(o(),{bgColor:"gray",size:"big"})),(0,R.jsx)("canvas",{id:i,width:"constructor"===e.mode||ue>1?v:Math.min(v,Math.floor(s*N)),height:"constructor"===e.mode||ue>1?x:Math.min(x,Math.floor(d*N)),ref:Ae,style:z({objectFit:"cover",userSelect:"none",width:"100%",height:"100%",zIndex:1e3},Me||!ee?{opacity:1,visibility:"visible"}:{opacity:0,visibility:"hidden"})},"Your browser does not support Canvas element")," ",ee&&!Me&&(0,R.jsx)(r.Box,{position:"absolute",left:"0",right:"0",bottom:"0",top:"0",zIndex:1001,backgroundImage:"url(".concat(Ue,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",filter:"blur(5px)"}))}},1369:function(e,t,n){"use strict";n.d(t,{L:function(){return l},t:function(){return c}});var a=n(640),r=n(308),i=n(339);function o(e,t,n,a,r,i,o){try{var s=e[i](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(a,r)}function s(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw i}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var l=function(e){var t,n=["image/png","image/jpeg"],a=/(png|jpg|jpeg)/i;if(!e.length)return{errorMsg:"No suitable files to upload. Please use JPEG or PNG files."};if(1===e.length){var o=e[0];return/^image\//.test(o.type)||n.includes(o.type)||a.test(i.default.getFileExt(o.name))?{errorMsg:"Please upload single Video file or multiple Image files"}:o.size>r.Z.UPLOAD_SHOTS_SIZE_LIMIT?{errorMsg:"Video file size must be less than ".concat(Math.floor(r.Z.UPLOAD_SHOTS_SIZE_LIMIT/1024/1024)," mb")}:{validated:e}}if(e.reduce((function(e,t){return e+t.size}),0)>r.Z.UPLOAD_SHOTS_SEQUENCE_SIZE_LIMIT)return{errorMsg:"Total size of sequence files must be less than ".concat(Math.floor(r.Z.UPLOAD_SHOTS_SEQUENCE_SIZE_LIMIT/1024/1024)," mb")};var u=e.filter((function(e){return n.includes(e.type)||a.test(i.default.getFileExt(e.name))}));if(!u.length)return{errorMsg:"No suitable files to upload. Please use JPEG or PNG files."};var l,c=s(u);try{for(c.s();!(l=c.n()).done;){var d=l.value;if(t&&t!==d.type)return{errorMsg:"All image files in sequence must be of the same type"};t=d.type}}catch(e){c.e(e)}finally{c.f()}return{validated:u}},c=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.length){e.next=2;break}return e.abrupt("return");case 2:if(1!==t.length){e.next=6;break}return e.abrupt("return",(0,a.P6)(t[0],n));case 6:return e.abrupt("return",(0,a.D$)(t,n));case 7:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function s(e){o(i,a,r,s,u,"next",e)}function u(e){o(i,a,r,s,u,"throw",e)}s(void 0)}))});return function(e,n){return t.apply(this,arguments)}}()}}]);
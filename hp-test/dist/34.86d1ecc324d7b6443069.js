(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[34],{1373:function(t,e,n){"use strict";var o;n.d(e,{Y:function(){return o}}),function(t){t.visual="visual",t.standard="standard",t.minimal="minimal"}(o||(o={}))},1384:function(t,e,n){"use strict";var o=n(353),r=n(1373),i=n(651);function c(t){var e=(0,o.useMemo)((function(){var e=new URLSearchParams({auto_play:"false",hide_related:"true",auto_advance:"true",show_user:"true",url:t.url,color:"".concat(t.color),show_comments:"".concat(t.comments),buying:"".concat(t.socials),liking:"".concat(t.socials),download:"".concat(t.socials),sharing:"".concat(t.socials),show_artwork:"".concat(t.artwork),visual:"".concat(t.type===r.Y.visual||t.type===r.Y.minimal)});return"https://w.soundcloud.com/player/?".concat(e.toString())}),[t]);return(0,i.jsx)("iframe",{"data-testid":"soundcloud-player-iframe",width:"100%",height:"100%",scrolling:"no",frameBorder:"no",src:e})}var u=o.memo(c);e.Z=u},1383:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return b}});var o=n(336),r=n.n(o),i=n(1380),c=n(689),u=n(353),a=n(1384),l=n(651);var s=function(){var t=(0,u.useContext)(c.BackboneContext).model;return t.url?(0,l.jsx)(a.Z,{url:t.url,socials:t.socials,artwork:t.artwork,type:t.current_type,color:t.color,comments:t.comments}):null},f=n(339);function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=v(t);if(e){var r=v(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return w(this,n)}}function w(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(a,t);var e,n,o,u=h(a);function a(){return p(this,a),u.apply(this,arguments)}return e=a,(n=[{key:"initialize",value:function(t,e,n){this.model=new(r().Model)(t),i.Z.prototype.initialize.apply(this,[t,e,n])}},{key:"render",value:function(){var t=this;return this.makeBox("audio"),f.default.loadScript("https://w.soundcloud.com/player/api.js",{cache:!0}).catch((function(){})).finally((function(){if((0,c.renderReact)({component:s,domElement:t.$el[0],model:t.model}),void 0!==window.SC){var e=window.SC.Widget(t.$el.find("iframe")[0]);e.bind(window.SC.Widget.Events.READY,t.widgetIsLoaded),e.bind(window.SC.Widget.Events.ERROR,t.widgetIsLoaded)}else t.widgetIsLoaded()})),this.rendered=!0,this}},{key:"isValid",value:function(){return!!this.model.get("url")}}])&&y(e.prototype,n),o&&y(e,o),a}(i.Z)}}]);
(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[35],{1381:function(t,e,i){"use strict";i.d(e,{Z:function(){return b}});var s,r,o,n=i(312),a=i(336),c=i.n(a),h=i(321),d=i(339),l=i(308),u=i(351);function f(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function g(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var p=(f(o={},"template-common-add-to-cart-wrap",(0,u.f)(s||(s=g(['\n\t\t<div class="add-to-cart-wrap">\n\t\t\t<div class="add-to-cart-attributes"></div>\n\t\t\t<div class="button-wrap">\n\t\t\t\t<div class="add-to-cart-button">\n\t\t\t\t\t<div class="add-to-cart-error-block"></div>\n\t\t\t\t\t<div class="button-icon"></div>\n\t\t\t\t\t<input type="text" class="button-text" autocapitalize="off" autocorrect="off" autocomplete="off" spellcheck="false" readonly="readonly"/>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="sizes-calculating-block"></div>\n\t\t</div>\n\t'])))),f(o,"template-common-add-to-cart-wrap-viewer",(0,u.f)(r||(r=g(['\n\t\t<div class="add-to-cart-wrap">\n\t\t\t<div class="add-to-cart-attributes"></div>\n\t\t\t<div class="button-wrap">\n\t\t\t\t<div class="add-to-cart-button">\n\t\t\t\t\t<div class="add-to-cart-error-block"></div>\n\t\t\t\t\t<div class="button-icon"></div>\n\t\t\t\t\t<div class="button-text not-input"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="sizes-calculating-block"></div>\n\t\t</div>\n\t'])))),o),v=i(1267),b=c().View.extend({selectIconRight:4,selectIconTextMargin:2,initialize:function(t){h.Z.bindAll(this),this.data=t.data,this.$container=t.$container,this.environment=t.environment,this.block=t.block,this.eCommerceManager=t.eCommerceManager,this.template="constructor"!==this.environment?p["template-common-add-to-cart-wrap-viewer"]:p["template-common-add-to-cart-wrap"],this.product=null,this.selects=[],this.selectsMap={},this.attributes=[],this.selectsValues={},this.restrictions={},this.constraints={width:0,height:0},this.showSkus=!1,this.longestAttribute="",this.selectPadding=0,this.setData_debounced=h.Z.debounce(this.setData,100),this.setModel_debounced=h.Z.debounce(this.setModel,200),this.$container.html(this.template),this.setElement(this.$container.find(".add-to-cart-wrap")),this.$button=this.$el.find(".add-to-cart-button"),this.$buttonIcon=this.$button.find(".button-icon"),this.$errorBlock=this.$button.find(".add-to-cart-error-block"),this.$buttonText=this.$button.find(".button-text"),this.$attrsContainer=this.$el.find(".add-to-cart-attributes"),this.$sizesCalculatingBlock=this.$el.find(".sizes-calculating-block")},render:function(t){if(!this.rendered){if(this.provider=this.eCommerceManager.getConnectedProvider(),this.eCommerceManager.events.on("ecommerce:update:provider",this.onProviderChanged.bind(this)),!this.provider||"default"===this.data.selected_product_id)return this.rendered=!1,this.showSkus=!1,this.renderButton(this.data,t),this.generateIndividualStyleCSS(this.data),this.rendered=!0,this.recalcDimensions({width:this.data.w,height:this.data.h}),this.trigger("loaded"),void this.setMinimalDimensions();this.getProduct()}},destroy:function(){this.unbindDOMEvents(),this.eCommerceManager.events.off("ecommerce:update:provider",this.onProviderChanged.bind(this))},onProviderChanged:function(t){this.provider!==t&&(this.provider=t,this.rerender())},rerender:function(t){t&&(this.data=t),this.rendered=!1,this.render()},getProduct:function(){this.product=this.eCommerceManager.getProductById(this.data.selected_product_id),this.eCommerceManager.events.on("ecommerce:loadproducts:complete",this.getProduct.bind(this)),this.product?(this.showSkus=this.checkSkus(null,this.product),this.renderAttributes(this.data),this.renderButton(this.data),this.renderMargins(),"horizontal"===this.data.layout&&this.setHorizontalLayoutClass(),this.generateIndividualStyleCSS(this.data),this.rendered=!0,this.recalcDimensions({width:this.data.w,height:this.data.h}),this.trigger("loaded"),this.setMinimalDimensions(),this.bindDOMEvents()):(this.eCommerceManager.productsLoaded||this.eCommerceManager.productsLoadingError)&&(this.showSkus=!1,this.renderButton(this.data),this.generateIndividualStyleCSS(this.data),this.rendered=!0,this.recalcDimensions({width:this.data.w,height:this.data.h}),this.trigger("loaded"),this.setMinimalDimensions())},checkSkus:function(t,e){return!!this.provider&&(e?i=e:t?i=this.eCommerceManager.getProductById(t):this.data.selected_product_id&&"default"!==this.data.selected_product_id&&(i=this.eCommerceManager.getProductById(this.data.selected_product_id)),!!i&&(this.product=i,this.eCommerceManager.productHasActiveSku(i)));var i},renderButton:function(t,e){this.showSkus||(this.$attrsContainer.empty().css({"margin-bottom":0,"margin-right":0}),this.selects=[],this.selectsMap={},this.attributes=[]),this.setButtonText(t.text),"constructor"!==this.environment&&this.$button.addClass("viewer-button"),this.renderButtonIcon(t),e&&e.isNew||this.checkOutOfStock()},setButtonText:function(t){this.$buttonText&&("constructor"!==this.environment?this.$buttonText.text(t):this.$buttonText.val(t))},getButtonText:function(){if(this.$buttonText)return"constructor"!==this.environment?this.$buttonText.text().trim():this.$buttonText.val().trim()},renderButtonIcon:function(t){if(t.icon_enabled){var e="left"===t.icon_pos?"row":"row-reverse";this.$button.css("flex-direction",e),this.$buttonIcon.css({display:"inline-block",height:t.icon_h,width:t.icon_w})}else this.$buttonIcon.css({display:"none"})},renderAttributes:function(t){var e=this;if(this.$attrsContainer.empty().css({"margin-bottom":0,"margin-right":0}),this.selects=[],this.selectsMap={},this.attributes=[],this.showSkus){var i=this.product?this.product:this.eCommerceManager.getProductById(t.selected_product_id);i&&(this.product||(this.product=i),("constructor"===this.environment||i.active)&&("constructor"!==this.environment&&this.calculateSelectRestrictions(),"stripe"===this.provider&&i.attributes.forEach((function(t){t.length>e.longestAttribute.length&&(e.longestAttribute=t);var i=e.renderStripeSelect(t);e.selects.push(i),e.selectsMap[t]=i,e.attributes.push(t)})),"ecwid"===this.provider&&i.options.forEach((function(t){if(e.eCommerceManager.isOptionValid(t)){t.name.length>e.longestAttribute.length&&(e.longestAttribute=t.name);var i=e.renderEcwidSelect(t);e.selects.push(i),e.selectsMap[t.name]=i,e.attributes.push(t.name)}}))))}},renderStripeSelect:function(t){var e;if("constructor"===this.environment){e=(0,n.ZP)("<select>",{class:"attributes-input",value:t}).attr("name",t);var i=(0,n.ZP)("<option>").attr("value",t).addClass("attributes-option default-option").text(t);e.append(i)}else e=(0,n.ZP)("<select>").attr("name",t).addClass("attributes-input"),this.renderSelectOptions(t,e,!0),e.on("change",this.onSelectChange.bind(this));return this.addSelectToPage(e,t),e},renderEcwidSelect:function(t){var e,i,s=(null===(e=t.nameTranslated)||void 0===e?void 0:e[this.eCommerceManager.userLocale])||t.name;if("constructor"===this.environment){i=(0,n.ZP)("<select>",{value:t.name}).attr("name",t.name).addClass("attributes-input");var r=(0,n.ZP)("<option>").attr("value",t.name).addClass("attributes-option default-option").text(s);i.append(r)}else i=(0,n.ZP)("<select>").attr("name",t.name).addClass("attributes-input"),this.renderEcwidSelectOptions(t.name,i,!0),i.on("change",this.onSelectChange.bind(this));return this.addSelectToPage(i,s),i},addSelectToPage:function(t,e){var i=(0,n.ZP)("<div>",{class:"select-container"});i.append('<div class="add-to-cart-error-block"></div>');var s=(0,n.ZP)("<input>",{type:"text",class:"fake-select",readonly:!0,tabindex:-1,value:e}),r=(0,n.ZP)('<svg class="select-dropdown-triangle" width="10px" height="16px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="dev" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="E-comm-W-01.4" transform="translate(-632.000000, -263.000000)" fill="#FFFFFF"><g transform="translate(494.500000, 247.000000)"><g><g transform="translate(136.000000, 15.500000)"><path d="M3.88579937,12.2407434 L8.34920863,8.41496403 C8.76853447,8.05554188 9.39983445,8.10410342 9.7592566,8.52342926 C9.91460784,8.70467237 10,8.93550936 10,9.17422064 L10,16.8257794 C10,17.3780641 9.55228475,17.8257794 9,17.8257794 C8.76128873,17.8257794 8.53045174,17.7403872 8.34920863,17.585036 L3.88579937,13.7592566 C3.46647353,13.3998345 3.41791199,12.7685345 3.77733414,12.3492086 C3.81065883,12.3103298 3.84692056,12.2740681 3.88579937,12.2407434 Z" id="arrow-copy" transform="translate(6.500000, 13.000000) scale(-1, -1) rotate(-270.000000) translate(-6.500000, -13.000000) "></path><path d="M3.88579937,3.2407434 L8.34920863,-0.585035966 C8.76853447,-0.944458116 9.39983445,-0.895896579 9.7592566,-0.476570737 C9.91460784,-0.295327627 10,-0.0644906353 10,0.174220637 L10,7.82577936 C10,8.37806411 9.55228475,8.82577936 9,8.82577936 C8.76128873,8.82577936 8.53045174,8.7403872 8.34920863,8.58503597 L3.88579937,4.7592566 C3.46647353,4.39983445 3.41791199,3.76853447 3.77733414,3.34920863 C3.81065883,3.31032982 3.84692056,3.27406809 3.88579937,3.2407434 Z" id="arrow-copy" transform="translate(6.500000, 4.000000) scale(-1, 1) rotate(-270.000000) translate(-6.500000, -4.000000) "></path></g></g></g></g></g></svg>');this.$attrsContainer.append(i),i.append(s,r,t),"constructor"===this.environment&&i.append((0,n.ZP)("<div>",{class:"select-overlay"}))},renderSelectOptions:function(t,e,i){var s=this,r=this.getAllSelectOptions();e.empty();var o=(0,n.ZP)("<option>").attr("value","default").addClass("attributes-option default-option").text(t);e.append(o),r[t]&&r[t].forEach((function(i){var r=(0,n.ZP)("<option>").attr("value",i).addClass("attributes-option").text(i);s.restrictions[t]&&!s.restrictions[t].includes(i)&&r.attr("disabled",!0),e.append(r)})),i?this.selectsValues[t]="default":e.val(this.selectsValues[t])},renderEcwidSelectOptions:function(t,e,i){var s=this.getTranslatedOptions(t);e.empty();var r=(0,n.ZP)("<option>").attr("value","default").addClass("attributes-option default-option").text(s[t].tanslatedName);e.append(r),s[t]&&s[t].values.forEach((function(i){var r=(0,n.ZP)("<option>").attr("value",i).addClass("attributes-option").text(s[t].translatedValues[i]);e.append(r)})),i?this.selectsValues[t]="default":e.val(this.selectsValues[t])},getAllSelectOptions:function(){var t={};return"stripe"===this.provider&&this.product.articles.forEach((function(e){Object.keys(e.attributes).forEach((function(i){t[i]=t[i]||[],t[i].includes(e.attributes[i])||t[i].push(e.attributes[i])}))})),"ecwid"===this.provider&&this.product.options.forEach((function(e){t[e.name]=[],e.choices.forEach((function(i){return t[e.name].push(i.text)}))})),t},getTranslatedOptions:function(t){var e=this,i={};return this.product.options.forEach((function(s){var r;if(!t||s.name===t){var o=(null===(r=s.nameTranslated)||void 0===r?void 0:r[e.eCommerceManager.userLocale])||s.name;i[s.name]={tanslatedName:o,values:[],translatedValues:{}},s.choices.forEach((function(t){i[s.name].values.push(t.text);var r=t.textTranslated&&t.textTranslated[e.eCommerceManager.userLocale]?t.textTranslated[e.eCommerceManager.userLocale]:t.text;i[s.name].translatedValues[t.text]=r}))}})),i},calculateSelectRestrictions:function(){if("ecwid"===this.provider)return this.getAllSelectOptions();this.restrictions={};var t,e={},i=0;for(var s in this.selectsValues)"default"!==this.selectsValues[s]&&(e[s]=this.selectsValues[s],t=s,i+=1);this.product.articles.forEach(function(s){if(h.Z.isMatch(s.attributes,e))for(var r in s.attributes)this.restrictions[r]?-1===this.restrictions[r].indexOf(s.attributes[r])&&this.restrictions[r].push(s.attributes[r]):this.restrictions[r]=[s.attributes[r]];1===i&&(this.restrictions[t]?-1===this.restrictions[t].indexOf(s.attributes[t])&&this.restrictions[t].push(s.attributes[t]):this.restrictions[t]=[s.attributes[t]])}.bind(this))},renderMargins:function(t){var e=t||this.data.layout;if(this.$attrsContainer.css({"margin-bottom":0,"margin-right":0}),this.showSkus&&this.selects.length){var i=this.selects.length-1;"horizontal"===e?(this.$attrsContainer.css({"margin-right":this.data.select_btn_margin}),this.selects.forEach(function(t,e){t.parent().css({"margin-bottom":0,"margin-right":e<i?this.data.attributes_margin:0})}.bind(this))):(this.$attrsContainer.css({"margin-bottom":this.data.select_btn_margin}),this.selects.forEach(function(t,e){t.parent().css({"margin-bottom":e<i?this.data.attributes_margin:0,"margin-right":0})}.bind(this)))}},generateIndividualStyleCSS:function(t,e,i){var s=e||"default",r=i||"both";"constructor"===this.environment?this.generateStyleCSS(t,s,r):(this.generateStyleCSS(t,s,r),this.generateHoverStyleCSS(t))},bindDOMEvents:function(){this.eCommerceManager.events.on("ecommerce:cartdata:changed",this.checkOutOfStock),"constructor"!==this.environment&&this.$button.on("click",this.onAddToCartClick)},unbindDOMEvents:function(){this.eCommerceManager.events.off("ecommerce:cartdata:changed",this.checkOutOfStock),"constructor"!==this.environment&&this.$button.off("click",this.onAddToCartClick)},getSimpleMinimalDimensions:function(){return this.showSkus?"vertical"===this.data.layout?{width:50,height:100}:{width:190,height:30}:{width:42,height:16}},getHorizontalTextMargin:function(t){return Math.ceil(t/4)},getVerticalTextMargin:function(t){return Math.ceil(t/6)},getHorizontalIconMargin:function(t){return Math.ceil(t/4)},getVerticalIconMargin:function(t){return Math.ceil(t/6)},getMinimalDimensions:function(){var t=0,e=0,i=this.data.icon_h+2*this.getVerticalIconMargin(this.data.icon_h);if("text"===this.data.tp?(t=this.data.text_w,e=this.data.text_h):"icon"===this.data.tp?(t=this.data.icon_w+2*this.getHorizontalIconMargin(this.data.icon_w),e=i):(t=this.data.text_w+this.data.icon_w+this.getHorizontalTextMargin(this.data["font-size"]),e=this.data.text_h>i?this.data.text_h:i),this.showSkus){var s=this.data["attrs-icon-h"]+2*this.getVerticalIconMargin(this.data["attrs-icon-h"]),r=this.data["attrs-text_w"]+2*this.getSelectsPadding(),o=this.data["attrs-text_h"]>s?this.data["attrs-text_h"]:s,n=t>r?t:r,a=e>o?e:o,c=(this.selects.length-1)*this.data.attributes_margin,h=0,d=0;return"vertical"===this.data.layout?(h=n,d=a*(this.selects.length+1)+c+this.data.select_btn_margin):(h=n*(this.selects.length+1)+c+this.data.select_btn_margin,d=a),{width:h,height:d}}return{width:t,height:e}},setMinimalDimensions:function(t,e){if(!h.Z.isUndefined(t)&&!h.Z.isUndefined(e))return this.constraints={width:t,height:e},void(this.block&&this.block.setSizeConstraints(t,e));if("constructor"===this.environment){var i=this.getMinimalDimensions();this.constraints=i,this.block.setSizeConstraints(i.width,i.height)}},recalcDimensions:function(t){if(this.rendered){var e=this.showSkus?this.data.select_btn_margin:0,i=this.showSkus?this.selects.length+1:1,s=this.showSkus?(this.selects.length-1)*this.data.attributes_margin:0;if("vertical"===this.data.layout){if(!t.height)return;var r=t.height-e-s,o=Math.round(r/i);this.$button.css({height:o+"px",width:"100%"}),this.showSkus&&this.selects.forEach((function(t){t.parent().css({height:o+"px",width:"100%"})}))}else{if(!t.width)return;var n=t.width-e-s,a=Math.round(n/i);this.$button.css({width:a+"px",height:"100%"}),this.showSkus&&this.selects.forEach((function(t){t.parent().css({width:a+"px",height:"100%"})}))}}},updateRecalcDimensionsOnProductChange:function(){var t=this.recalcDimensionsOnProductChange();this.block.updateBlockSizes(t)},recalcDimensionsOnProductChange:function(){var t,e,i=this.showSkus?this.data.select_btn_margin:0,s=this.showSkus?this.selects.length+1:1,r=this.showSkus?(this.selects.length-1)*this.data.attributes_margin:0,o=this.data.btn_h,n=this.data.btn_w;return"vertical"===this.data.layout?(t=o*s+r+i,e=n):(t=o,e=n*s+r+i),this.$button.css({height:o+"px",width:n+"px"}),this.showSkus&&this.selects.forEach((function(t){t.parent().css({height:o+"px",width:n+"px"})})),{width:e,height:t}},recalcWidgetSizesAfterChangeLayout:function(t){var e=t||this.data.layout,i=this.data.btn_h,s=this.data.btn_w,r=i,o=s;return this.showSkus&&("horizontal"===e?o=s+s*this.selects.length+this.data.select_btn_margin+this.data.attributes_margin*(this.selects.length-1):r=i+i*this.selects.length+this.data.select_btn_margin+this.data.attributes_margin*(this.selects.length-1)),this.block.updateBlockSizes({width:o,height:r}),{width:o,height:r}},isAllSelectsNotDefault:function(){var t=!0;for(var e in this.selectsValues)if("default"===this.selectsValues[e]){t=!1;break}return t},getArticleBySelectsValues:function(){return this.product?1===this.product.articles.length?this.product.articles[0]:this.product.articles.find(function(t){return h.Z.isMatch(t.attributes,this.selectsValues)}.bind(this)):null},getProductPrice:function(){return this.product&&this.product.prices&&this.product.prices.length?this.product.prices.find((function(t){return t.active&&"per_unit"===t.billing_scheme})):null},onSelectChange:function(t){this.hideError();var e=(0,n.ZP)(t.target),i=e.find("option:selected"),s=e.attr("name");this.selectsValues[s]=e.val(),e.parent().find(".fake-select").attr("value","default"===e.val()?e.find("[value=default]").text():i.text()),this.calculateSelectRestrictions(),"stripe"===this.provider&&this.product.attributes.forEach(function(t){this.renderSelectOptions(t,this.selectsMap[t])}.bind(this))},onAddToCartClick:function(){var t=this;if(this.hideError(),this.product||this.showError(),this.isAllSelectsNotDefault()){var e=this.eCommerceManager.getProductForAddToCart(this.product,this.selectsValues);if(e){var i=this.eCommerceManager.addProductToCart(e);if(i instanceof v.ib)return void(i.type===v.Kq.outOfStock?this.showOutOfStockError():this.showError());this.environment===l.Z.environment.viewer&&RM.analytics&&RM.analytics.sendEvent("Item added to cart",e.id),Object.keys(this.selectsMap).forEach((function(e){var i=t.selectsMap[e];i.find("option").prop("selected",!1),i.find("option[value=default]").prop("selected",!0),t.selectsValues[e]="default",i.parent().find(".fake-select").attr("value",i.find("option[value=default]").text()),t.calculateSelectRestrictions()})),Object.keys(this.selectsMap).length&&"stripe"===this.provider&&this.product.attributes.forEach((function(e){return t.renderSelectOptions(e,t.selectsMap[e])}))}else this.showError()}else this.showError("select")},showError:function(t){"select"!==t?this.$button.addClass("add-to-cart-error"):this.selects.map((function(t){t.parents(".select-container").toggleClass("add-to-cart-error","default"===t.val())}))},showOutOfStockError:function(){this.showError(),this.setButtonText(this.eCommerceManager.getTextValue("out_of_stock"))},showInvalidError:function(){this.showError(),"constructor"===this.environment||RM.screenshot||this.setButtonText("No product")},checkOutOfStock:function(){if(!RM.screenshot){if(!this.product||void 0===this.eCommerceManager.checkProductActive(this.product.id))return this.showInvalidError();if("stripe"===this.provider){var t=this.getArticleBySelectsValues();if("constructor"!==this.environment&&!RM.screenshot&&t&&!this.eCommerceManager.checkItemQuantity(t))return this.showOutOfStockError()}if("ecwid"===this.provider){var e=this.eCommerceManager.isProductAvailable(this.eCommerceManager.getProductForAddToCart(this.product,this.selectsValues));if("constructor"!==this.environment&&!RM.screenshot&&!e)return this.showOutOfStockError()}this.setButtonText(this.data.text),this.hideError()}},hideError:function(){this.$button.removeClass("add-to-cart-error"),this.selects.map((function(t){return t.parents(".select-container").removeClass("add-to-cart-error")})),this.setButtonText(this.data.text)},onProductChange:function(t){t&&(this.data=t),this.rendered=!1,this.showSkus=this.checkSkus(this.data.selected_product_id),this.showSkus?this.product&&(this.renderAttributes(this.data),this.renderButton(this.data),this.renderMargins(),this.generateIndividualStyleCSS(this.data),this.rendered=!0,this.updateRecalcDimensionsOnProductChange()):(this.renderButton(this.data),this.generateIndividualStyleCSS(this.data),this.rendered=!0,this.updateRecalcDimensionsOnProductChange())},setHorizontalLayoutClass:function(){this.$el.hasClass("horizontal-layout")||this.$el.addClass("horizontal-layout")},removeHorizontalLayoutClass:function(){this.$el.hasClass("horizontal-layout")&&this.$el.removeClass("horizontal-layout")},onLayoutChange:function(t){if(this.rendered){this.data=t;var e=t.layout,i=this.recalcWidgetSizesAfterChangeLayout(e);this.renderMargins(e),"horizontal"===e?this.setHorizontalLayoutClass():this.removeHorizontalLayoutClass(),this.recalcDimensions(i),this.setMinimalDimensions()}},applyButtonTextSize:function(t){this.data=t,this.$buttonText.css({height:t.text_h+"px",width:t.text_w+"px"})},applyButtonIconSize:function(t){this.data=t,this.$buttonIcon.css({height:t.icon_h+"px",width:t.icon_w+"px"})},applyButtonIconPosition:function(t){this.data=t;var e="left"===t.icon_pos?"row":"row-reverse";this.$button.css("flex-direction",e)},applySelectsIconSize:function(t){var e=this;this.data=t,this.showSkus&&(this.selectPadding=t["attrs-icon-w"]+this.selectIconRight+this.selectIconTextMargin,this.selects.forEach((function(i){var s=i.parent();s.find(".fake-select").css({padding:"0 ".concat(e.selectPadding,"px")}),s.find(".select-dropdown-triangle").css({width:t["attrs-icon-w"]+"px",height:t["attrs-icon-h"]+"px"})})))},enterEditMode:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.$buttonText.removeAttr("readonly").addClass("editing"),t.selectText?this.$buttonText.select():this.$buttonText.focus().setCursorPos(0),this.block.selectEditControl()},leaveEditMode:function(){this.$buttonText.blur().attr("readonly",!0).removeClass("editing")},setData:function(t){this.data=t},setModel:function(t,e){this.block.model.set(t),e&&this.block.model.save()},getColorForErrorBorder:function(t){return t.isBorderSet?d.default.getRGBA(t.border,t.borderOpacity/100):d.default.getRGBA(t.bg,t.bgOpacity/100)},getDropdownTriangleSizeFromFontSize:function(t){return{h:16*t/18,w:10*t/18}},getSelectsPadding:function(){return this.selectPadding},getLongestAttribute:function(){return this.longestAttribute},generateStyleCSS:function(t,e,i){function s(t){return(!e||"default"===e||"both"!==i&&"button"!==i?"":"hover-")+t}function r(t){return(!e||"default"===e||"both"!==i&&"selects"!==i?"attrs-":"attrs-hover-")+t}var o=this.getColorForErrorBorder({bg:t[s("background-color")],bgOpacity:t[s("background-color-opacity")],border:t[s("border-color")],borderOpacity:t[s("border-color-opacity")],isBorderSet:!!t[s("border-width")]});if(this.$errorBlock.css({borderColor:o}),this.$button.css({color:d.default.getRGBA(t[s("color")],t[s("color-opacity")]/100),"background-color":d.default.getRGBA(t[s("background-color")],t[s("background-color-opacity")]/100),"border-radius":t[s("border-radius")]+"px","box-shadow":d.default.getRGBA(t[s("border-color")],t[s("border-color-opacity")]/100)+"0px 0px 0px "+t[s("border-width")]+"px inset"}),"constructor"===this.environment)this.$button.find(".button-icon svg path").css({fill:d.default.getRGBA(t[s("icon_color")],t[s("icon_color_opacity")]/100)});else{var n=t[s("icon_raster2xUrl")]?t[s("icon_raster2xUrl")]:t[s("icon_rasterUrl")];n&&this.$buttonIcon.css({"background-image":"url("+n+")"})}this.$buttonText.css({width:t.text_w+"px",height:t.text_h+"px","line-height":t.text_h+"px","font-family":t[s("font-family")],"font-size":t[s("font-size")]+"px","font-weight":t[s("font-weight")],"font-style":t[s("font-style")],"letter-spacing":t[s("letter-spacing")],"text-align":t[s("text-align")]}),this.showSkus&&(this.selectPadding=t["attrs-icon-w"]+this.selectIconRight+this.selectIconTextMargin,this.selects.forEach(function(e){var i=e.parent();i.find(".add-to-cart-error-block").css({borderColor:o}),i.css({"background-color":d.default.getRGBA(t[r("background-color")],t[r("background-color-opacity")]/100),"border-radius":t[r("border-radius")]+"px","box-shadow":d.default.getRGBA(t[r("border-color")],t[r("border-color-opacity")]/100)+"0px 0px 0px "+t[r("border-width")]+"px inset"}),i.find(".fake-select").css({padding:"0 ".concat(this.selectPadding,"px"),"border-radius":t[r("border-radius")]+"px",color:d.default.getRGBA(t[r("color")],t[r("color-opacity")]/100),"font-family":t[r("font-family")],"font-size":t[r("font-size")]+"px","font-weight":t[r("font-weight")],"font-style":t[r("font-style")],"letter-spacing":t[r("letter-spacing")],"text-align":t[r("text-align")],"text-align-last":t[r("text-align")]}),i.find(".select-dropdown-triangle path").css({fill:d.default.getRGBA(t[r("color")],t[r("color-opacity")]/100)}),i.find(".select-dropdown-triangle").css({width:t["attrs-icon-w"],height:t["attrs-icon-h"]})}.bind(this)))},generateHoverStyleCSS:function(t){var e=this.$buttonText,i=this.$buttonIcon;this.$button.hover((function(){if((0,n.ZP)(this).css({color:d.default.getRGBA(t["hover-color"],t["hover-color-opacity"]/100),"background-color":d.default.getRGBA(t["hover-background-color"],t["hover-background-color-opacity"]/100),"border-radius":t["hover-border-radius"]+"px","box-shadow":d.default.getRGBA(t["hover-border-color"],t["hover-border-color-opacity"]/100)+"0px 0px 0px "+t["hover-border-width"]+"px inset"}),"constructor"!==this.environment){var s=t["hover-icon_raster2xUrl"]?t["hover-icon_raster2xUrl"]:t["hover-icon_rasterUrl"];s&&i.css({"background-image":"url("+s+")"})}else(0,n.ZP)(this).find(".button-icon svg path").css({fill:d.default.getRGBA(t["hover-icon_color"],t["hover-icon_color_opacity"]/100)});e.css({"font-family":t["hover-font-family"],"font-size":t["hover-font-size"]+"px","font-weight":t["hover-font-weight"],"font-style":t["hover-font-style"],"letter-spacing":t["hover-letter-spacing"],"text-align":t["hover-text-align"]})}),(function(){if((0,n.ZP)(this).css({color:d.default.getRGBA(t.color,t["color-opacity"]/100),"background-color":d.default.getRGBA(t["background-color"],t["background-color-opacity"]/100),"border-radius":t["border-radius"]+"px","box-shadow":d.default.getRGBA(t["border-color"],t["border-color-opacity"]/100)+"0px 0px 0px "+t["border-width"]+"px inset"}),"constructor"!==this.environment){var s=t.icon_raster2xUrl?t.icon_raster2xUrl:t.icon_rasterUrl;s&&i.css({"background-image":"url("+s+")"})}else(0,n.ZP)(this).find(".button-icon svg path").css({fill:d.default.getRGBA(t.color,t["color-opacity"]/100)});e.css({"font-family":t["font-family"],"font-size":t["font-size"]+"px","font-weight":t["font-weight"],"font-style":t["font-style"],"letter-spacing":t["letter-spacing"],"text-align":t["text-align"]})})),this.showSkus&&this.selects.forEach(function(e){e.hover((function(){(0,n.ZP)(this).parent().css({"background-color":d.default.getRGBA(t["attrs-hover-background-color"],t["attrs-hover-background-color-opacity"]/100),"border-radius":t["attrs-hover-border-radius"]+"px","box-shadow":d.default.getRGBA(t["attrs-hover-border-color"],t["attrs-hover-border-color-opacity"]/100)+"0px 0px 0px "+t["attrs-hover-border-width"]+"px inset"}),(0,n.ZP)(this).parent().find(".fake-select").css({"border-radius":t["attrs-hover-border-radius"]+"px",color:d.default.getRGBA(t["attrs-hover-color"],t["attrs-hover-color-opacity"]/100),"font-family":t["attrs-hover-font-family"],"font-size":t["attrs-hover-font-size"]+"px","font-weight":t["attrs-hover-font-weight"],"font-style":t["attrs-hover-font-style"],"letter-spacing":t["attrs-hover-letter-spacing"],"text-align":t["attrs-hover-text-align"],"text-align-last":t["attrs-hover-text-align"]}),(0,n.ZP)(this).parent().find(".select-dropdown-triangle path").css({fill:d.default.getRGBA(t["attrs-hover-color"],t["attrs-hover-color-opacity"]/100)})}),(function(){(0,n.ZP)(this).parent().css({"background-color":d.default.getRGBA(t["attrs-background-color"],t["attrs-background-color-opacity"]/100),"border-radius":t["attrs-border-radius"]+"px","box-shadow":d.default.getRGBA(t["attrs-border-color"],t["attrs-border-color-opacity"]/100)+"0px 0px 0px "+t["attrs-border-width"]+"px inset"}),(0,n.ZP)(this).parent().find(".fake-select").css({"border-radius":t["attrs-border-radius"]+"px",color:d.default.getRGBA(t["attrs-color"],t["attrs-color-opacity"]/100),"font-family":t["attrs-font-family"],"font-size":t["attrs-font-size"]+"px","font-weight":t["attrs-font-weight"],"font-style":t["attrs-font-style"],"letter-spacing":t["attrs-letter-spacing"],"text-align":t["attrs-text-align"],"text-align-last":t["attrs-text-align"]}),(0,n.ZP)(this).parent().find(".select-dropdown-triangle path").css({fill:d.default.getRGBA(t["attrs-color"],t["attrs-color-opacity"]/100)})})),setTimeout(function(){e.parent().css({transition:"all "+t["hover-tansition-duration"]+"s ease-out"}),e.parent().find(".fake-select").css({transition:"all "+t["hover-tansition-duration"]+"s ease-out"})}.bind(this),100),e.parent().find(".select-dropdown-triangle path").css({transition:"all "+t["hover-tansition-duration"]+"s ease-out"})}.bind(this)),setTimeout(function(){this.$button.css({transition:"all "+t["hover-tansition-duration"]+"s ease-out"}),e.css({transition:"all "+t["hover-tansition-duration"]+"s ease-out"}),i.css({transition:"all "+t["hover-tansition-duration"]+"s ease-out"})}.bind(this),100)}},{DEFAULT_ROW_HEIGHT:50,DEFAULT_ROW_WIDTH:168})},1379:function(t,e,i){"use strict";i.r(e);var s=i(1380),r=i(1381),o=i(1382),n=s.Z.extend({initialize:function(){s.Z.prototype.initialize.apply(this,arguments)},render:function(){var t=this,e=!1;if(RM.screenshot)window.ServerData.userPermissions&&window.ServerData.userPermissions.can_use_e_commerce&&(e=!0);else{var i=o.Z.getPermissions();i&&i.can_use_e_commerce&&(e=!0)}if(e)return this.makeBox("widget-add-to-cart"),this.seamlessFontsShow(function(){this.$el.removeClass("fonts-pending")}.bind(this),function(){this.$el.addClass("fonts-pending")}.bind(this)),this.addToCartWidget=new r.Z({data:this,environment:"viewer",$container:this.$el,eCommerceManager:this.mag.eCommerceManager}),RM.screenshot?(this.addToCartWidget.on("loaded",(function(){t.widgetIsLoaded()})),setTimeout((function(){t.widgetIsLoaded()}),1e4)):this.widgetIsLoaded(),this.addToCartWidget.render(),this.rendered=!0,this.trigger("rendered"),this},destroy:function(){return this.addToCartWidget&&this.addToCartWidget.destroy(),this.addToCartWidget=null,s.Z.prototype.destroy.apply(this,arguments)}});e.default=n}}]);
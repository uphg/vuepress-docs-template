(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{363:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"i",(function(){return a})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return u})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return d})),n.d(e,"k",(function(){return p})),n.d(e,"l",(function(){return f})),n.d(e,"c",(function(){return v})),n.d(e,"j",(function(){return m}));n(38),n(51),n(122),n(124),n(194),n(86),n(71),n(88),n(37),n(53),n(72);var i=/#.*$/,s=/\.(md|html)$/,r=/\/$/,a=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(i,"").replace(s,"")}function l(t){return a.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function h(t){if(l(t))return t;var e=t.match(i),n=e?e[0]:"",s=o(t);return r.test(s)?t:s+".html"+n}function d(t,e){var n=decodeURIComponent(t.hash),s=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!s||n===s)&&o(t.path)===o(e)}function p(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var s=e.split("/");n&&s[s.length-1]||s.pop();for(var r=t.replace(/^\//,"").split("/"),a=0;a<r.length;a++){var o=r[a];".."===o?s.pop():"."!==o&&s.push(o)}""!==s[0]&&s.unshift("");return s.join("/")}(e,n));for(var i=o(e),s=0;s<t.length;s++)if(o(t[s].regularPath)===i)return Object.assign({},t[s],{type:"page",path:h(t[s].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function f(t,e,n,i){var s=n.pages,r=n.themeConfig,a=i&&r.locales&&r.locales[i]||r;if("auto"===(t.frontmatter.sidebar||a.sidebar||r.sidebar))return g(t);var o=a.sidebar||r.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,o),c=l.base,u=l.config;return"auto"===u?g(t):u?u.map((function(t){return function t(e,n,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return p(n,e,i);if(Array.isArray(e))return Object.assign(p(n,e[0],i),{title:e[1]});var r=e.children||[];return 0===r.length&&e.path?Object.assign(p(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:r.map((function(e){return t(e,n,i,s+1)})),collapsable:!1!==e.collapsable}}(t,s,c)})):[]}return[]}function g(t){var e=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}function v(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},364:function(t,e,n){},368:function(t,e,n){},369:function(t,e,n){},370:function(t,e,n){},371:function(t,e,n){},372:function(t,e,n){},373:function(t,e,n){},374:function(t,e,n){},375:function(t,e,n){},376:function(t,e,n){},378:function(t,e,n){},379:function(t,e,n){},380:function(t,e,n){},381:function(t,e,n){},382:function(t,e,n){},383:function(t,e,n){},388:function(t,e,n){"use strict";n.r(e);n(121);var i=n(390),s=n(363),r=n(389),a={name:"SidebarGroup",components:{ArrowRight:i.a,DropdownTransition:r.a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(388).default},methods:{isActive:s.e}},o=(n(416),n(70)),l=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("arrow-right",{staticClass:"page-index-icon arrow-right",class:{"is-down":t.open}}):t._e()],1):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("arrow-right",{staticClass:"sidebar-icon arrow-right",class:{"is-down":t.open}}):t._e()],1),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(417),n(86);function c(t,e,n,i,s){var r={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}};return s>2&&(r.style={"padding-left":s+"rem"}),t("RouterLink",r,n)}function u(t,e,n,i,r){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||a>r?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var o=Object(s.e)(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[c(t,n+"#"+e.slug,e.title,o,e.level-1),u(t,e.children,n,i,r,a+1)])})))}var h={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,i=n.$page,r=(n.$site,n.$route),a=n.$themeConfig,o=n.$themeLocaleConfig,l=e.props,h=l.item,d=l.sidebarDepth,p=Object(s.e)(r,h.path),f="auto"===h.type?p||h.children.some((function(t){return Object(s.e)(r,h.basePath+"#"+t.slug)})):p,g="external"===h.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,h.path,h.title||h.path):c(t,h.path,h.title||h.path,f),v=[i.frontmatter.sidebarDepth,d,o.sidebarDepth,a.sidebarDepth,1].find((function(t){return void 0!==t})),m=o.displayAllHeaders||a.displayAllHeaders;return"auto"===h.type?[g,u(t,h.children,h.basePath,r,v)]:(f||m)&&h.headers&&!s.d.test(h.path)?[g,u(t,Object(s.c)(h.headers),h.path,r,v)]:g}};n(418);function d(t,e){if("group"===e.type){var n=e.path&&Object(s.e)(t,e.path),i=e.children.some((function(e){return"group"===e.type?d(t,e):"page"===e.type&&Object(s.e)(t,e.path)}));return n||i}return!1}var p={name:"SidebarLinks",components:{SidebarGroup:l,SidebarLink:Object(o.a)(h,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data:function(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if(d(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(s.e)(this.$route,t.regularPath)}}},f=Object(o.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=f.exports},389:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},s=(n(401),n(70)),r=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},390:function(t,e,n){"use strict";n(406);var i=n(70),s=Object(i.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{"aria-hidden":"true",id:"icon-arrow-right",viewBox:"0 0 1024 1024"}},[e("path",{attrs:{d:"M797.21457646 444.0233542C639.18078066 323.41640029 481.14698487 202.80944727 323.13223847 82.18344394 266.85068662 39.24639688 185.76131065 79.36563623 185.76131065 150.16009062v723.67823145c0 70.7944544 81.08937597 110.91528018 137.37092782 67.95918369 158.01474638-120.60854033 316.04854219-241.21390605 474.08233799-361.83832207 44.83410644-34.21851065 44.83410644-101.69985674 0-135.93582949z"}})])}),[],!1,null,null,null);e.a=s.exports},394:function(t,e,n){"use strict";n(364)},399:function(t,e,n){"use strict";n(368)},400:function(t,e,n){"use strict";n(369)},401:function(t,e,n){"use strict";n(370)},402:function(t,e,n){"use strict";n(371)},403:function(t,e,n){"use strict";n(372)},404:function(t,e,n){"use strict";n(373)},405:function(t,e,n){"use strict";n(374)},406:function(t,e,n){"use strict";n(375)},410:function(t,e,n){"use strict";n(376)},412:function(t,e,n){"use strict";n(378)},414:function(t,e,n){"use strict";n(379)},415:function(t,e,n){"use strict";n(380)},416:function(t,e,n){"use strict";n(381)},418:function(t,e,n){"use strict";n(382)},419:function(t,e,n){"use strict";n(383)},420:function(t,e,n){},428:function(t,e,n){"use strict";n.r(e);n(391),n(121),n(87);var i=n(363),s={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(i.g)(this.link)||Object(i.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(i.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction:function(){this.$emit("focusout")}}},r=n(70),a=Object(r.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null).exports,o={name:"Home",components:{NavLink:a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},l=(n(394),Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),c=(n(395),n(365),n(72),n(53),n(37),n(38),n(122),n(131),n(132),n(194),n(51),n(366),n(367),n(86),n(124),n(398),n(201)),u=n.n(c),h=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=u()(e,"title","");return u()(e,"frontmatter.tags")&&(i+=" ".concat(e.frontmatter.tags.join(" "))),n&&(i+=" ".concat(n)),d(t,i)},d=function(t,e){var n=function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},i=new RegExp("[^\0-]"),s=t.split(/\s+/g).map((function(t){return t.trim()})).filter((function(t){return!!t}));if(i.test(t))return s.some((function(t){return e.toLowerCase().indexOf(t)>-1}));var r=t.endsWith(" ");return new RegExp(s.map((function(t,e){return s.length!==e+1||r?"(?=.*\\b".concat(n(t),"\\b)"):"(?=.*\\b".concat(n(t),")")})).join("")+".+","gi").test(e)},p={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,i=this.$localePath,s=[],r=0;r<e.length&&!(s.length>=n);r++){var a=e[r];if(this.getPageLocalePath(a)===i&&this.isSearchable(a))if(h(t,a))s.push(a);else if(a.headers)for(var o=0;o<a.headers.length&&!(s.length>=n);o++){var l=a.headers[o];l.title&&h(t,a,l.title)&&s.push(Object.assign({},a,{path:a.path+"#"+l.slug,header:l}))}}return s}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},f=(n(399),Object(r.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box",class:{acitve:t.focused}},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,i){return n("li",{key:i,staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e(),t._v(" "),n("svg",{staticClass:"icon search-icon",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"}})])])}),[],!1,null,null,null).exports),g=(n(400),Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),v=n(68),m=(n(90),n(389)),b=n(202),_=n.n(b),k={name:"DropdownLink",components:{NavLink:a,DropdownTransition:m.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return _()(e)===t},handleDropdown:function(){0===event.detail&&this.setOpen(!this.open)}}},x=(n(402),{name:"NavLinks",components:{NavLink:a,DropdownLink:Object(r.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow down"})]),t._v(" "),n("button",{staticClass:"mobile-dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(i){return n("li",{key:i.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:i},on:{focusout:function(n){t.isLastItemOfArray(i,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,s=this.$site.themeConfig.locales||{},r={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(r){var a,o=e[r],l=s[r]&&s[r].label||o.lang;return o.lang===t.$lang?a=n:(a=n.replace(t.$localeConfig.path,r),i.some((function(t){return t.path===a}))||(a=r)),{text:l,link:a}}))};return[].concat(Object(v.a)(this.userNav),[r])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(i.j)(t),{items:(t.items||[]).map(i.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),C=(n(403),Object(r.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function w(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var $={name:"Navbar",components:{SidebarButton:g,NavLinks:C,SearchBox:f},data:function(){return{linksWrapMaxWidth:null}},computed:{},mounted:function(){var t=this,e=parseInt(w(this.$el,"paddingLeft"))+parseInt(w(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)}},y=(n(404),Object(r.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),L={data:function(){return{showIndex:!1,indexText:"目录",inTouch:!1}},computed:{showCatalog:function(){return!!(this.$page.headers&&this.$page.headers.length>0)},indexState:function(){return this.$frontmatter.hideIndex}},mounted:function(){this.autoTouch()},methods:{clickIndex:function(){this.showIndex=!this.showIndex},autoTouch:function(){this.inTouch=void 0!==document.body.ontouchstart}}},O=(n(405),Object(r.a)(L,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"re-page-top"},[e("h2",{staticClass:"title"},[e("span",[this._v(this._s(this.$frontmatter.title?this.$frontmatter.title:this.$page.title))])])])}),[],!1,null,null,null).exports),I=n(390),T=n(426),S=(n(409),n(52),{name:"TableOfContents",props:{includeLevel:{type:Array,required:!1,default:function(){return[2,3]}}},computed:{headers:function(){if(this.$page&&this.$page.headers){var t=this.includeLevel[0],e=this.includeLevel[1];return function n(i){for(var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=[],a=0;a!==i.length;){var o=i.slice(a+1).findIndex((function(t){return t.level===s})),l=-1===o?i.length:o+a+1,c=i[a];if(c.level>=s&&c.level<=e){var u=i.slice(a+1,l),h=s<e&&u.length>0?n(u,s+1):null;r.push(Object(T.a)(Object(T.a)({},c),{},{children:h}))}a=l}return r}(this.$page.headers)}return null}},render:function(t){if(!this.headers)return null;return t("div",{attrs:{class:"synopsis-wrap"}},[function e(n){return t("ul",{attrs:{class:"synopsis-ul"}},n.map((function(n){return t("li",{attrs:{class:"synopsis-li"}},[t("RouterLink",{class:{"synopsis-link":!0},props:{to:"#".concat(n.slug)}},n.title),n.children?e(n.children):null])})))}(this.headers)])}}),j={components:{ArrowRight:I.a,TOC:S},data:function(){return{showIndex:!1,indexText:"目录",inTouch:!1}},computed:{showCatalog:function(){return!!(this.$page.headers&&this.$page.headers.length>0)},indexState:function(){return this.$frontmatter.hideIndex}},mounted:function(){this.autoTouch()},methods:{clickIndex:function(){this.showIndex=!this.showIndex},autoTouch:function(){this.inTouch=void 0!==document.body.ontouchstart}}},E=(n(410),Object(r.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showCatalog||t.inTouch?n("div",{staticClass:"page-index",class:{"hide-index":t.indexState}},[n("div",{staticClass:"page-index-title",on:{click:function(e){return t.clickIndex()}}},[n("span",{staticClass:"open-catalog",class:{active:t.showIndex}},[n("arrow-right",{staticClass:"page-index-icon arrow-right",class:{"is-down":t.showIndex}}),t._v(" "),n("span",{staticClass:"text"},[t._v(t._s(t.indexText))])],1)]),t._v(" "),t.showCatalog?n("div",{staticClass:"page-index-content"},[n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showIndex,expression:"showIndex"}],staticClass:"page-catalog"},[n("TOC")],1)])],1):t._e()]):t._e()}),[],!1,null,null,null).exports),N=n(377),P=n.n(N),A=n(411),H=n.n(A),D={name:"PageEdit",computed:{lastUpdated:function(){var t=this.$page.lastUpdated;return H()(t).format("YYYY-MM-DD HH:mm")},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=P()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,i=e.docsDir,s=void 0===i?"":i,r=e.docsBranch,a=void 0===r?"master":r,o=e.docsRepo,l=void 0===o?n:o;return t&&l&&this.$page.relativePath?this.createEditLink(n,l,s,a,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,s,r){if(/bitbucket.org/.test(e))return e.replace(i.a,"")+"/src"+"/".concat(s,"/")+(n?n.replace(i.a,"")+"/":"")+r+"?mode=edit&spa=0&at=".concat(s,"&fileviewer=file-view-default");return/gitlab.com/.test(e)?e.replace(i.a,"")+"/-/edit"+"/".concat(s,"/")+(n?n.replace(i.a,"")+"/":"")+r:(i.i.test(e)?e:"https://github.com/".concat(e)).replace(i.a,"")+"/edit"+"/".concat(s,"/")+(n?n.replace(i.a,"")+"/":"")+r}}},R=(n(412),Object(r.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),B=n(413),U=n.n(B),G={name:"PageNav",components:{ChevronLeft:Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"bi bi-chevron-left",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"}})])}),[],!1,null,null,null).exports,ChevronRight:Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"bi bi-chevron-right",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}})])}),[],!1,null,null,null).exports},props:["sidebarItems"],computed:{prev:function(){return z(M.PREV,this)},next:function(){return z(M.NEXT,this)}}};var M={NEXT:{resolveLink:function(t,e){return W(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return W(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function z(t,e){var n=e.$themeConfig,s=e.$page,r=e.$route,a=e.$site,o=e.sidebarItems,l=t.resolveLink,c=t.getThemeLinkConfig,u=t.getPageLinkConfig,h=c(n),d=u(s),p=P()(d)?h:d;return!1===p?void 0:U()(p)?Object(i.k)(a.pages,p,r.path):l(s,o)}function W(t,e,n){var i=[];!function t(e,n){for(var i=0,s=e.length;i<s;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var s=0;s<i.length;s++){var r=i[s];if("page"===r.type&&r.path===decodeURIComponent(t.path))return i[s+n]}}var q=G,Y=(n(414),{components:{PageTop:O,PageIndex:E,PageEdit:R,PageNav:Object(r.a)(q,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[n("ChevronLeft"),t._v(" "),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v(" "),n("ChevronRight")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),V=(n(415),Object(r.a)(Y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("PageTop"),t._v(" "),n("PageIndex"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),Z={name:"Sidebar",components:{SidebarLinks:n(388).default,NavLinks:C},props:["items"]},X=(n(419),Object(r.a)(Z,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("t-scrollbar",{attrs:{"wrap-class":"scrollbar-wrapper"}},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)],1)}),[],!1,null,null,null).exports),J=n(31),F=n(181),K={mounted:function(){this.scrollbar.addEventListener("scroll",this.onScroll)},methods:{onScroll:n.n(F)()((function(t){this.setActiveHash()}),300),setActiveHash:function(){for(var t=this,e=[].slice.call(document.querySelectorAll(".synopsis-link")),n=[].slice.call(document.querySelectorAll(".header-anchor")).filter((function(t){return e.some((function(e){return e.hash===t.hash}))})),i=this.scrollbar.scrollTop,s=this.scrollbar.scrollHeight,r=this.scrollbar.clientHeight+i,a=0;a<n.length;a++){var o=n[a],l=n[a+1],c=0===a&&0===i||i>=o.parentElement.offsetTop+10&&(!l||i<l.parentElement.offsetTop-10),u=decodeURIComponent(this.$route.hash);if(c&&u!==decodeURIComponent(o.hash)){var h=function(){var e=o;if(r===s)for(var i=a+1;i<n.length;i++)if(u===decodeURIComponent(n[i].hash))return{v:void 0};var l=t.scrollbar.scrollTop;return t.scrollbar.style.scrollBehavior="auto",t.$router.replace(decodeURIComponent(e.hash),(function(){t.$nextTick((function(){t.scrollbar.scrollTo(0,l),t.scrollbar.style.scrollBehavior="smooth"}))})),{v:void 0}}();if("object"===Object(J.a)(h))return h.v}}}},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)}},Q=(n(420),n(421)),tt={name:"Layout",mixins:[K,{data:function(){return{zoom:null}},mounted:function(){this.updateZoom()},updated:function(){this.updateZoom()},methods:{updateZoom:function(){var t=this;this.$nextTick((function(){t.zoom&&t.zoom.detach(),t.zoom=Object(Q.a)(".page img",{margin:24,background:"rgba(0, 0, 0, 0.6)",scrollOffset:0}),t.zoom.on("open",t.addHidden),t.zoom.on("opened",t.removeHidden),t.zoom.on("close",t.addHidden),t.zoom.on("closed",t.removeHidden)}))},addHidden:function(){document.body.style["overflow-y"]="hidden"},removeHidden:function(){document.body.style["overflow-y"]=""}}}],components:{Home:l,Page:V,Sidebar:X,Navbar:y},data:function(){return{isSidebarOpen:!1}},watch:{$route:function(){this.scrollTo(location.hash)}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(i.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]},scrollbar:function(){return this.$el.querySelector("#app > .tulp-scrollbar > .tulp-scrollbar__wrap")}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1})),this.initScrollTo()},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))},initScrollTo:function(){this.closeBehavior(),this.scrollTo(location.hash),this.$nextTick(this.openBehavior)},scrollTo:function(t){if(!t||"#"===t)return this.closeBehavior(),this.scrollbar.scrollTo(0,0),void this.$nextTick(this.openBehavior);var e=document.querySelector(decodeURIComponent(t));e&&e.offsetTop&&this.scrollbar.scrollTo(0,e.offsetTop)},closeBehavior:function(){this.scrollbar.style.scrollBehavior="auto"},openBehavior:function(){this.scrollbar.style.scrollBehavior="smooth"}}},et=Object(r.a)(tt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("t-scrollbar",{attrs:{"wrap-class":"scrollbar-wrapper"}},[n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)])}),[],!1,null,null,null);e.default=et.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"1OyB":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return a}))},JX7q:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},Ji7U:function(e,t,n){"use strict";function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}n.d(t,"a",(function(){return r}))},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("/GRZ"),r=n("i2R6"),o=n("48fX"),l=n("tCBg"),c=n("T0f4");function i(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return l(this,n)}}var s=n("AroE"),u=n("7KCV");t.__esModule=!0,t.default=void 0;var f,p=u(n("q1tI")),v=n("QmWs"),m=n("g/15"),d=s(n("nOHt")),h=n("elyg");function b(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var y=new Map,g=window.IntersectionObserver,N={};function w(){return f||(g?f=new g((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var O=function(e){o(n,e);var t=i(n);function n(e){var r;return a(this,n),(r=t.call(this,e)).p=void 0,r.cleanUpListeners=function(){},r.formatUrls=function(e){var t=null,n=null,a=null;return function(r,o){if(a&&r===t&&o===n)return a;var l=e(r,o);return t=r,n=o,a=l,l}}((function(e,t){return{href:(0,h.addBasePath)(b(e)),as:t?(0,h.addBasePath)(b(t)):t}})),r.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,a=t.target;if("A"!==n||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=r.formatUrls(r.props.href,r.props.as),l=o.href,c=o.as;if(function(e){var t=(0,v.parse)(e,!1,!0),n=(0,v.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(l)){var i=window.location.pathname;l=(0,v.resolve)(i,l),c=c?(0,v.resolve)(i,c):l,e.preventDefault();var s=r.props.scroll;null==s&&(s=c.indexOf("#")<0),d.default[r.props.replace?"replace":"push"](l,c,{shallow:r.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},r.p=!1!==e.prefetch,r}return r(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,a=t.as,r=(0,v.resolve)(e,n);return[r,a?(0,v.resolve)(e,a):r]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),N[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();d.default.prefetch(t[0],t[1],e).catch((function(e){0})),N[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,r=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var o=p.Children.only(t),l={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(l.href=r||a),p.default.cloneElement(o,l)}}]),n}(p.Component);t.default=O},foSv:function(e,t,n){"use strict";function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return a}))},g7ta:function(e,t,n){"use strict";var a=n("1OyB"),r=n("vuIU"),o=n("Ji7U"),l=n("md7G"),c=n("foSv"),i=n("q1tI"),s=n.n(i),u=n("YFqc"),f=n.n(u),p=s.a.createElement;function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(c.a)(e);if(t){var r=Object(c.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(e){Object(o.a)(n,e);var t=v(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=(new Date).getFullYear();return p(s.a.Fragment,null,p("footer",{className:"footer-section ptb-100"},p("div",{className:"container"},p("div",{className:"row"},p("div",{className:"col-lg-4 col-md-6 col-sm-6"},p("div",{className:"single-footer-widget"},p("div",{className:"footer-heading"},p("h3",null,"About Us")),p("p",null,p("ul",null,p("li",null,"Korea Online Biodatabase of Yonsei (KOBY)\uc5d0 \uc624\uc2e0\uac78 \ud658\uc601\ud569\ub2c8\ub2e4."),p("li",null,"KOBY\uac00 \ubcf4\uc720\ud55c \uc720\uc804\uccb4 \ubc0f \ub300\uc0ac\uccb4 \ube45\ub370\uc774\ud130\ub97c \uae30\ubc18\uc73c\ub85c,\v\uae30\ucd08\ud1b5\uacc4\ubd84\uc11d \ubc0f neural network \ub4f1 \ub2e4\uc591\ud55c \ubd84\uc11d\uc744 \ud1b5\ud574 \ubc14\uc774\uc624\ub9c8\ucee4 \uad00\ub828 \uc5f0\uad6c \ubc0f \uac1c\ubc1c\uc5d0 \ud65c\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))))),p("div",{className:"col-lg-2 col-md-6 col-sm-6"},p("div",{className:"single-footer-widget"},p("div",{className:"footer-heading"},p("h3",null,"Important Links")),p("ul",{className:"footer-quick-links"},p("li",null,p(f.a,{href:"/about-us"},p("a",null,"About Us"))),p("li",null,p(f.a,{href:"/projects"},p("a",null,"Project"))),p("li",null,p(f.a,{href:"services"},p("a",null,"Services"))),p("li",null,p(f.a,{href:"/team"},p("a",null,"Team"))),p("li",null,p(f.a,{href:"/contact"},p("a",null,"Contact")))))),p("div",{className:"col-lg-2 col-md-6 col-sm-6"},p("div",{className:"single-footer-widget"},p("div",{className:"footer-heading"},p("h3",null,"Featured Service")),p("ul",{className:"footer-quick-links"},p("li",null,p(f.a,{href:"/"},p("a",null,"Home"))),p("li",null,p(f.a,{href:"/blog"},p("a",null,"Blog"))),p("li",null,p(f.a,{href:"/services"},p("a",null,"Services"))),p("li",null,p(f.a,{href:"/partner"},p("a",null,"Client"))),p("li",null,p(f.a,{href:"/contact"},p("a",null,"Contact")))))),p("div",{className:"col-lg-4 col-md-6 col-sm-6"},p("div",{className:"single-footer-widget"},p("div",{className:"footer-heading"},p("h3",null,"Contact Info")),p("div",{className:"footer-info-contact"},p("i",{className:"flaticon-call-answer"}),p("h3",null,"Phone"),p("span",null,"+123(456)123")),p("div",{className:"footer-info-contact"},p("i",{className:"flaticon-envelope"}),p("h3",null,"Email"),p("span",null,"hello@raxr.com")),p("div",{className:"footer-info-contact"},p("i",{className:"flaticon-maps-and-flags"}),p("h3",null,"Address"),p("span",null,"32 st Kilda Road, Melbourne VIC, 3004 Australia")))))),p("div",{className:"lines"},p("div",{className:"line"}),p("div",{className:"line"}),p("div",{className:"line"})),p("div",{className:"partner-shape-img1"},p("img",{src:"/images/shape/partnar-shape-2.png",alt:"image"}))),p("div",{className:"copyright-area"},p("div",{className:"container"},p("div",{className:"row align-items-center"},p("div",{className:"col-lg-6 col-md-6"},p("p",null,"\xa9 ",e," Raxr. All Rights Reserved by",p("a",{href:"https://envytheme.com/",target:"_blank"},"EnvyTheme"))),p("div",{className:"col-lg-6 col-md-6"},p("ul",null,p("li",null,p(f.a,{href:"/terms-condition"},p("a",null,"Terms & Conditions"))),p("li",null,p(f.a,{href:"/privacy-policy"},p("a",null,"Privacy Policy")))))))))}}]),n}(i.Component);t.a=m},md7G:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return(r="function"===typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}n.d(t,"a",(function(){return l}));var o=n("JX7q");function l(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(o.a)(e):t}},pFRj:function(e,t,n){"use strict";var a=n("1OyB"),r=n("vuIU"),o=n("JX7q"),l=n("Ji7U"),c=n("md7G"),i=n("foSv"),s=n("rePB"),u=n("q1tI"),f=n.n(u);function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var v=n("nOHt"),m=n("YFqc"),d=n.n(m),h=f.a.createElement,b=Object(v.withRouter)((function(e){var t=e.router,n=e.children,a=p(e,["router","children"]),r=u.Children.only(n),o=r.props.className||"";return t.pathname===a.href&&a.activeClassName&&(o="".concat(o," ").concat(a.activeClassName).trim()),delete a.activeClassName,h(d.a,a,f.a.cloneElement(r,{className:o}))})),y=f.a.createElement;function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(i.a)(e);if(t){var r=Object(i.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(c.a)(this,n)}}var N=function(e){Object(l.a)(n,e);var t=g(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return e=t.call.apply(t,[this].concat(l)),Object(s.a)(Object(o.a)(e),"_isMounted",!1),Object(s.a)(Object(o.a)(e),"state",{display:!1,collapsed:!0}),Object(s.a)(Object(o.a)(e),"toggleNavbar",(function(){e.setState({collapsed:!e.state.collapsed})})),e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=document.getElementById("navbar");document.addEventListener("scroll",(function(){window.scrollY>170?e.classList.add("is-sticky"):e.classList.remove("is-sticky")})),window.scrollTo(0,0)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this.state.collapsed,t=e?"collapse navbar-collapse":"collapse navbar-collapse show",n=e?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right";return y(f.a.Fragment,null,y("div",{id:"navbar",className:"navbar-area"},y("div",{className:"main-nav"},y("div",{className:"container"},y("nav",{className:"navbar navbar-expand-md navbar-light"},y(b,{href:"/"},y("a",{className:"navbar-brand"},y("img",{src:"/images/logo-white.png",className:"white-logo",alt:"logo"}),y("img",{src:"/images/logo-black.png",className:"black-logo",alt:"logo"}))),y("button",{onClick:this.toggleNavbar,className:n,type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},y("span",{className:"icon-bar top-bar"}),y("span",{className:"icon-bar middle-bar"}),y("span",{className:"icon-bar bottom-bar"})),y("div",{className:t,id:"navbarSupportedContent"},y("ul",{className:"navbar-nav"},y("li",{className:"nav-item"},y(b,{href:"/#"},y("a",{className:"nav-link"},"Home"))),y("li",{className:"nav-item"},y(b,{href:"/about-us",activeClassName:"active"},y("a",{className:"nav-link"},"About us"))),y("li",{className:"nav-item"},y(b,{href:"#"},y("a",{className:"nav-link"},"Services ",y("i",{className:"fas fa-chevron-down"}))),y("ul",{className:"dropdown-menu"},y("li",{className:"nav-item"},y(b,{href:"/statistics-details",activeClassName:"active"},y("a",{className:"nav-link"},"Statistics"))),y("li",{className:"nav-item"},y(b,{href:"/simplenn",activeClassName:"active"},y("a",{className:"nav-link"},"Simple Neural Network"))))),y("li",{className:"nav-item"},y(b,{href:"/contact",activeClassName:"active"},y("a",{className:"nav-link"},"Contact Us"))),y("li",{className:"nav-item"},y(b,{href:"#"},y("a",{className:"nav-link"},"Analytics ",y("i",{className:"fas fa-chevron-down"}))),y("ul",{className:"dropdown-menu"},y("li",{className:"nav-item"},y(b,{href:"/services",activeClassName:"active"},y("a",{className:"nav-link"},"Statistics"))),y("li",{className:"nav-item"},y(b,{href:"/service-details",activeClassName:"active"},y("a",{className:"nav-link"},"COX"))),y("li",{className:"nav-item"},y(b,{href:"/service-details",activeClassName:"active"},y("a",{className:"nav-link"},"Neural Network"))))))))))))}}]),n}(u.Component);t.a=N},rePB:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},vuIU:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",(function(){return r}))}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2qu3":function(e,t,n){"use strict";var r=n("oI91"),a=n("/GRZ"),i=n("i2R6");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw i}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.__esModule=!0,t.default=void 0;var c,d=(c=n("q1tI"))&&c.__esModule?c:{default:c},f=n("8L3h"),m=n("jwwS");var p=[],h=[],v=!1;function y(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function b(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var a=y(e[r]);a.loading?t.loading=!0:(t.loaded[r]=a.loaded,t.error=a.error),n.push(a.promise),a.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function g(e,t){return d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function O(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:g,webpack:null,modules:null},t),r=null;function a(){if(!r){var t=new _(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!v&&"function"===typeof n.webpack){var i=n.webpack();h.push((function(e){var t,n=l(i);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return a()}}catch(o){n.e(o)}finally{n.f()}}))}var o=function(e,t){a();var i=d.default.useContext(m.LoadableContext),o=(0,f.useSubscription)(r);return d.default.useImperativeHandle(t,(function(){return{retry:r.retry}}),[]),i&&Array.isArray(n.modules)&&n.modules.forEach((function(e){i(e)})),d.default.useMemo((function(){return o.loading||o.error?d.default.createElement(n.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:r.retry}):o.loaded?n.render(o.loaded,e):null}),[e,o])};return o.preload=function(){return a()},o.displayName="LoadableComponent",d.default.forwardRef(o)}var _=function(){function e(t,n){a(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return i(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=s(s({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function w(e){return O(y,e)}function j(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return j(e,t)}))}w.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return O(b,e)},w.preloadAll=function(){return new Promise((function(e,t){j(p).then(e,t)}))},w.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return v=!0,t()};j(h,e).then(n,n)}))},window.__NEXT_PRELOADREADY=w.preloadReady;var P=w;t.default=P},a6RD:function(e,t,n){"use strict";var r=n("oI91");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.__esModule=!0,t.noSSR=c,t.default=function(e,t){var n=s.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=i(i({},r),e));if(r=i(i({},r),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(r.render=function(t,n){return e.render(n,t)}),e.modules)){n=s.default.Map;var a={},o=e.modules();Object.keys(o).forEach((function(e){var t=o[e];"function"!==typeof t.then?a[e]=t:a[e]=function(){return t.then((function(e){return e.default||e}))}})),r.loader=a}r.loadableGenerated&&delete(r=i(i({},r),r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,c(n,r);delete r.ssr}return n(r)};var o=l(n("q1tI")),s=l(n("2qu3"));function l(e){return e&&e.__esModule?e:{default:e}}var u=!1;function c(e,t){if(delete t.webpack,delete t.modules,!u)return e(t);var n=t.loading;return function(){return o.default.createElement(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}},"bHh/":function(e,t,n){"use strict";var r=n("wx14"),a=n("1OyB"),i=n("vuIU"),o=n("JX7q"),s=n("Ji7U"),l=n("md7G"),u=n("foSv"),c=n("rePB"),d=n("q1tI"),f=n.n(d),m=n("a6RD"),p=n.n(m),h=f.a.createElement;function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var a=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=p()((function(){return n.e(6).then(n.t.bind(null,"Rst5",7))}),{loadableGenerated:{webpack:function(){return["Rst5"]},modules:["react-owl-carousel3"]}}),b={loop:!0,nav:!0,dots:!0,autoplayHoverPause:!0,autoplay:!0,smartSpeed:1e3,margin:20,navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],responsive:{0:{items:1},768:{items:2},1200:{items:1}}},g=function(e){Object(s.a)(n,e);var t=v(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return e=t.call.apply(t,[this].concat(i)),Object(c.a)(Object(o.a)(e),"_isMounted",!1),Object(c.a)(Object(o.a)(e),"state",{display:!1}),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.setState({display:!0})}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){return h("section",{className:"testimonial-section ptb-100"},h("div",{className:"container"},h("div",{className:"section-title"},h("span",null,"Testimonial"),h("h2",null,"What Our Client Say")),this.state.display?h(y,Object(r.a)({className:"testimonial-slider owl-carousel owl-theme"},b),h("div",{className:"testimonial-single-item"},h("div",{className:"testimonial-image"},h("img",{src:"/images/clients/client1.jpg",alt:"image"})),h("div",{className:"testimonial-info"},h("h3",null,"Richard Denial"),h("span",null,"IT Executive")),h("div",{className:"testimonial-content"},h("div",{className:"icon"},h("i",{className:"flaticon-quote"})),h("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."))),h("div",{className:"testimonial-single-item"},h("div",{className:"testimonial-image"},h("img",{src:"/images/clients/client2.jpg",alt:"image"})),h("div",{className:"testimonial-info"},h("h3",null,"Sarah Taylor"),h("span",null,"Lead Architecure")),h("div",{className:"testimonial-content"},h("div",{className:"icon"},h("i",{className:"flaticon-quote"})),h("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."))),h("div",{className:"testimonial-single-item"},h("div",{className:"testimonial-image"},h("img",{src:"/images/clients/client3.jpg",alt:"image"})),h("div",{className:"testimonial-info"},h("h3",null,"Alastair Cook"),h("span",null,"Marketing Manager")),h("div",{className:"testimonial-content"},h("div",{className:"icon"},h("i",{className:"flaticon-quote"})),h("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.")))):""),h("div",{className:"testimonial-shape"},h("img",{src:"/images/shape/testimonial-shape-1.png",alt:"main-image"})),h("div",{className:"testimonial-shape-img1"},h("img",{src:"/images/shape/testimonial-shape-2.png",alt:"main-image"})),h("div",{className:"testimonial-shape-img2"},h("img",{src:"/images/shape/testimonial-shape-3.png",alt:"main-image"})))}}]),n}(d.Component);t.a=g},jwwS:function(e,t,n){"use strict";var r;t.__esModule=!0,t.LoadableContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=a},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}}]);
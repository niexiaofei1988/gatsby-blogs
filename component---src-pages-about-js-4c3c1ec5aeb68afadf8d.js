(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{160:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(213),i=r(203),u=r(217).a.section.withConfig({displayName:"about__ImageWrapper",componentId:"sc-1t3p7pz-0"})(["img{display:block;width:100%;margin:0 auto;}"]),f=[{key:"panda",url:"https://images.unsplash.com/photo-1526716173434-a1b560f2065d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"},{key:"greatwall",url:"https://images.unsplash.com/photo-1529921879218-f99546d03a9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"},{key:"gril",url:"https://images.unsplash.com/photo-1524548209323-6fb4a0d4a4a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"},{key:"agirl",url:"https://images.unsplash.com/photo-1542841791-c3cc44abdbbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"},{key:"aagirl",url:"https://images.unsplash.com/photo-1495298599282-d8920eb5009b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"}];e.default=function(){return o.a.createElement(a.a,null,o.a.createElement(i.a,{title:"About"}),o.a.createElement(u,null,f.map(function(t){var e=t.key,r=t.url;return o.a.createElement("img",{src:r,key:e,alt:e})})))}},189:function(t,e,r){"use strict";r.d(e,"b",function(){return c});var n=r(0),o=r.n(n),a=r(4),i=r.n(a),u=r(33),f=r.n(u);r.d(e,"a",function(){return f.a});r(194);var s=o.a.createContext({}),c=function(t){return o.a.createElement(s.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},194:function(t,e,r){var n;t.exports=(n=r(201))&&n.default||n},195:function(t,e,r){"use strict";r.d(e,"e",function(){return i}),r.d(e,"b",function(){return u}),r.d(e,"d",function(){return f}),r.d(e,"a",function(){return s}),r.d(e,"c",function(){return c});r(198);var n=r(197),o=r.n(n),a=r(217),i=a.a.div.withConfig({displayName:"wrapper__LayoutWrapper",componentId:"sc-4hyxvf-0"})(["height:100vh;"]),u=a.a.main.withConfig({displayName:"wrapper__ContentWrapper",componentId:"sc-4hyxvf-1"})(["margin:0 auto;max-width:960px;height:calc(100% - 48px);padding:24px;"]),f=Object(a.a)(o.a).withConfig({displayName:"wrapper__HeaderWrapper",componentId:"sc-4hyxvf-2"})(["margin:0 auto;max-width:960px;margin-bottom:12px;"]),s=(a.a.a.withConfig({displayName:"wrapper__BlogButtonWrapper",componentId:"sc-4hyxvf-3"})(["padding:8px 12px;text-align:center;text-transform:uppercase;transition:0.5s;background-size:200% auto;color:white;box-shadow:0 0 20px #eee;border-radius:10px;bacgkround:",";background-image:",";&:hover{background-position:right center;}"],function(t){return t.bg||"transparent"},function(t){return t.bgImage}),a.a.nav.withConfig({displayName:"wrapper__BlogLeafWrapper",componentId:"sc-4hyxvf-4"})(["display:flex;flex-wrap:wrap;justify-content:space-between;padding:24px;a{transition:all 0.2s linear;&:hover{text-shadow:1px 1px currentColor;}}"])),c=a.a.div.withConfig({displayName:"wrapper__FlexWrapper",componentId:"sc-4hyxvf-5"})(["display:flex;"])},201:function(t,e,r){"use strict";r.r(e);r(35);var n=r(0),o=r.n(n),a=r(4),i=r.n(a),u=r(56),f=r(2),s=function(t){var e=t.location,r=f.default.getResourcesForPathnameSync(e.pathname);return r?o.a.createElement(u.a,Object.assign({location:e,pageResources:r},r.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},202:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,r,a){var i=o.default.unstable_batchedUpdates?function(t){o.default.unstable_batchedUpdates(r,t)}:r;return(0,n.default)(t,e,i,a)};var n=a(r(226)),o=a(r(34));function a(t){return t&&t.__esModule?t:{default:t}}t.exports=e.default},203:function(t,e,r){"use strict";var n=r(204),o=r(0),a=r.n(o),i=r(4),u=r.n(i),f=r(229),s=r.n(f),c=r(189);function l(t){var e=t.description,r=t.lang,o=t.meta,i=t.keywords,u=t.title;return a.a.createElement(c.b,{query:p,render:function(t){var n=e||t.site.siteMetadata.description;return a.a.createElement(s.a,{htmlAttributes:{lang:r},title:u,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:u},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(o)})},data:n})}l.defaultProps={lang:"zh",meta:[],keywords:[]},l.propTypes={description:u.a.string,lang:u.a.string,meta:u.a.array,keywords:u.a.arrayOf(u.a.string),title:u.a.string.isRequired},e.a=l;var p="1025518380"},204:function(t){t.exports={data:{site:{siteMetadata:{title:"个人博客",description:"学习使用 gatsby",author:"凝聚者"}}}}},208:function(t){t.exports={data:{site:{siteMetadata:{title:"个人博客"}}}}},209:function(t,e,r){"use strict";r(151),r(152)},210:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};n.get||n.set?Object.defineProperty(e,r,n):e[r]=t[r]}return e.default=t,e}(r(0)),o=r(55),a=p(r(183)),i=p(r(192)),u=r(184),f=r(211),s=p(r(228)),c=p(r(193)),l=r(212);function p(t){return t&&t.__esModule?t:{default:t}}function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function m(t,e){return!e||"object"!==v(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var b,w=function(t,e,r,n){var o,a=arguments.length,i=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"===("undefined"==typeof Reflect?"undefined":v(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,r,n);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(i=(a<3?o(i):a>3?o(e,r,i):o(e,r))||i);return a>3&&i&&Object.defineProperty(e,r,i),i};!function(t){t[t.None=0]="None",t[t.Prepare=1]="Prepare"}(b||(b={}));var x=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=m(this,y(e).apply(this,arguments))).state={status:b.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var e=t.props,r=e.offset,n=e.offsetBottom,o=t.props.offsetTop;return void 0===o&&(o=r,(0,c.default)(void 0===r,"Affix","`offset` is deprecated. Please use `offsetTop` instead.")),void 0===n&&void 0===o&&(o=0),o},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(e){t.placeholderNode=e},t.saveFixedNode=function(e){t.fixedNode=e},t.prepareMeasure=function(e){t.setState({status:b.Prepare,affixStyle:void 0,placeholderStyle:void 0})},t.measure=function(){var e=t.state,r=e.status,n=e.lastAffix,o=t.props,a=o.target,i=o.onChange;if(r===b.Prepare&&t.fixedNode&&t.placeholderNode&&a){var u=t.getOffsetTop(),f=t.getOffsetBottom(),s=a();if(s){var c={status:b.None},p=(0,l.getTargetRect)(s),d=(0,l.getTargetRect)(t.placeholderNode),h=(0,l.getFixedTop)(d,p,u),m=(0,l.getFixedBottom)(d,p,f);void 0!==h?(c.affixStyle={position:"fixed",top:h,width:d.width,height:d.height},c.placeholderStyle={width:d.width,height:d.height}):void 0!==m&&(c.affixStyle={position:"fixed",bottom:m,width:d.width,height:d.height},c.placeholderStyle={width:d.width,height:d.height}),c.lastAffix=!!c.affixStyle,i&&n!==c.lastAffix&&i(c.lastAffix),t.setState(c)}}},t.renderAffix=function(e){var r,o,u,f=e.getPrefixCls,c=t.state,l=c.affixStyle,p=c.placeholderStyle,h=c.status,m=t.props,y=m.prefixCls,g=m.style,v=m.children,w=(0,a.default)((r={},o=f("affix",y),u=l,o in r?Object.defineProperty(r,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[o]=u,r)),x=(0,i.default)(t.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);var O=d({},h===b.None?p:null,g);return n.createElement("div",d({},x,{style:O,ref:t.savePlaceholderNode}),n.createElement("div",{className:w,ref:t.saveFixedNode,style:t.state.affixStyle},n.createElement(s.default,{onResize:t.updatePosition},v)))},t}var r,o,f;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(e,n.Component),r=e,(o=[{key:"componentDidMount",value:function(){var t=this,e=this.props.target;e&&(this.timeout=setTimeout(function(){(0,l.addObserveTarget)(e(),t),t.updatePosition({})}))}},{key:"componentDidUpdate",value:function(t){var e=this.state.prevTarget,r=this.props.target,n=null;r&&(n=r()||null),e!==n&&((0,l.removeObserveTarget)(this),n&&((0,l.addObserveTarget)(n,this),this.updatePosition({})),this.setState({prevTarget:n})),t.offsetTop===this.props.offsetTop&&t.offsetBottom===this.props.offsetBottom||this.updatePosition({}),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),(0,l.removeObserveTarget)(this),this.updatePosition.cancel()}},{key:"updatePosition",value:function(t){this.prepareMeasure(t)}},{key:"lazyUpdatePosition",value:function(t){var e=this.props.target,r=this.state.affixStyle;if(e&&r){var n=this.getOffsetTop(),o=this.getOffsetBottom(),a=e();if(a){var i=(0,l.getTargetRect)(a),u=(0,l.getTargetRect)(this.placeholderNode),f=(0,l.getFixedTop)(u,i,n),s=(0,l.getFixedBottom)(u,i,o);if(void 0!==f&&r.top===f||void 0!==s&&r.bottom===s)return}}this.prepareMeasure(t)}},{key:"render",value:function(){return n.createElement(u.ConfigConsumer,null,this.renderAffix)}}])&&h(r.prototype,o),f&&h(r,f),e}();x.defaultProps={target:function(){return"undefined"!=typeof window?window:null}},w([(0,f.throttleByAnimationFrameDecorator)()],x.prototype,"updatePosition",null),w([(0,f.throttleByAnimationFrameDecorator)()],x.prototype,"lazyUpdatePosition",null),(0,o.polyfill)(x);var O=x;e.default=O},211:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=i,e.throttleByAnimationFrameDecorator=function(){return function(t,e,r){var n=r.value,o=!1;return{configurable:!0,get:function(){if(o||this===t.prototype||this.hasOwnProperty(e))return n;var r=i(n.bind(this));return o=!0,Object.defineProperty(this,e,{value:r,configurable:!0,writable:!0}),o=!1,r}}}};var n,o=(n=r(200))&&n.__esModule?n:{default:n};function a(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(t){var e,r=function(){if(null==e){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];e=(0,o.default)(function(r){return function(){e=null,t.apply(void 0,a(r))}}(n))}};return r.cancel=function(){return o.default.cancel(e)},r}},212:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getTargetRect=function(t){return t!==window?t.getBoundingClientRect():{top:0,bottom:window.innerHeight}},e.getFixedTop=function(t,e,r){if(void 0!==r&&e.top>t.top-r)return r+e.top;return},e.getFixedBottom=function(t,e,r){if(void 0!==r&&e.bottom<t.bottom+r){var n=window.innerHeight-e.bottom;return r+n}return},e.getObserverEntities=function(){return i},e.addObserveTarget=function(t,e){if(!t)return;var r=i.find(function(e){return e.target===t});r?r.affixList.push(e):(r={target:t,affixList:[e],eventHandlers:{}},i.push(r),a.forEach(function(e){r.eventHandlers[e]=(0,o.default)(t,e,function(t){r.affixList.forEach(function(e){e.lazyUpdatePosition(t)})})}))},e.removeObserveTarget=function(t){var e=i.find(function(e){var r=e.affixList.some(function(e){return e===t});return r&&(e.affixList=e.affixList.filter(function(e){return e!==t})),r});e&&0===e.affixList.length&&(i=i.filter(function(t){return t!==e}),a.forEach(function(t){var r=e.eventHandlers[t];r&&r.remove&&r.remove()}))};var n,o=(n=r(202))&&n.__esModule?n:{default:n};var a=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],i=[]},213:function(t,e,r){"use strict";var n=r(208),o=r(0),a=r.n(o),i=r(189),u=(r(209),r(210)),f=r.n(u),s=(r(198),r(197)),c=r.n(s),l=r(195);var p=function(){return a.a.createElement(f.a,null,a.a.createElement(l.d,{mode:"horizontal"},a.a.createElement(c.a.Item,{key:"home"},a.a.createElement(i.a,{to:"/"},"首页")),a.a.createElement(c.a.Item,{key:"blogs"},a.a.createElement(i.a,{to:"/blogs"},"博客")),a.a.createElement(c.a.Item,{key:"about"},a.a.createElement(i.a,{to:"/about"},"关于我"))))};e.a=function(t){var e=t.children,r=t.location;return a.a.createElement(i.b,{query:"2994927498",render:function(t){return a.a.createElement(l.e,null,a.a.createElement(p,{location:r,siteTitle:t.site.siteMetadata.title}),a.a.createElement(l.b,null,e))},data:n})}}}]);
//# sourceMappingURL=component---src-pages-about-js-4c3c1ec5aeb68afadf8d.js.map
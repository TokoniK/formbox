"use strict";var e=require("react"),t=require("antd"),n=function(){return n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};function r(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(e){a(e)}}function l(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}s((r=r.apply(e,t||[])).next())}))}function o(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(l){return function(s){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(6===l[0]&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],r=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}}"function"==typeof SuppressedError&&SuppressedError;var a,i={exports:{}},l={};var s,c={};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */"production"===process.env.NODE_ENV?i.exports=function(){if(a)return l;a=1;var t=e,n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var a,l={},c=null,d=null;for(a in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,a)&&!s.hasOwnProperty(a)&&(l[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===l[a]&&(l[a]=t[a]);return{$$typeof:n,type:e,key:c,ref:d,props:l,_owner:i.current}}return l.Fragment=r,l.jsx=c,l.jsxs=c,l}():i.exports=(s||(s=1,"production"!==process.env.NODE_ENV&&function(){var t=e,n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen"),m=Symbol.iterator,b="@@iterator",g=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function w(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];!function(e,t,n){var r=g.ReactDebugCurrentFrame.getStackAddendum();""!==r&&(t+="%s",n=n.concat([r]));var o=n.map((function(e){return String(e)}));o.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,o)}("error",e,n)}var v,x=!1,k=!1,S=!1,C=!1,j=!1;function N(e){return e.displayName||"Context"}function T(e){if(null==e)return null;if("number"==typeof e.tag&&w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case o:return"Fragment";case r:return"Portal";case i:return"Profiler";case a:return"StrictMode";case u:return"Suspense";case f:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case s:return N(e)+".Consumer";case l:return N(e._context)+".Provider";case d:return function(e,t,n){var r=e.displayName;if(r)return r;var o=t.displayName||t.name||"";return""!==o?n+"("+o+")":n}(e,e.render,"ForwardRef");case p:var t=e.displayName||null;return null!==t?t:T(e.type)||"Memo";case h:var n=e,c=n._payload,y=n._init;try{return T(y(c))}catch(e){return null}}return null}v=Symbol.for("react.module.reference");var _,R,O,E,z,P,F,L=Object.assign,I=0;function $(){}$.__reactDisabledLog=!0;var A,D=g.ReactCurrentDispatcher;function U(e,t,n){if(void 0===A)try{throw Error()}catch(e){var r=e.stack.trim().match(/\n( *(at )?)/);A=r&&r[1]||""}return"\n"+A+e}var B,q=!1,M="function"==typeof WeakMap?WeakMap:Map;function W(e,t){if(!e||q)return"";var n,r=B.get(e);if(void 0!==r)return r;q=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=D.current,D.current=null,function(){if(0===I){_=console.log,R=console.info,O=console.warn,E=console.error,z=console.group,P=console.groupCollapsed,F=console.groupEnd;var e={configurable:!0,enumerable:!0,value:$,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}I++}();try{if(t){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(i,[])}catch(e){n=e}Reflect.construct(e,[],i)}else{try{i.call()}catch(e){n=e}e.call(i.prototype)}}else{try{throw Error()}catch(e){n=e}e()}}catch(t){if(t&&n&&"string"==typeof t.stack){for(var l=t.stack.split("\n"),s=n.stack.split("\n"),c=l.length-1,d=s.length-1;c>=1&&d>=0&&l[c]!==s[d];)d--;for(;c>=1&&d>=0;c--,d--)if(l[c]!==s[d]){if(1!==c||1!==d)do{if(c--,--d<0||l[c]!==s[d]){var u="\n"+l[c].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),"function"==typeof e&&B.set(e,u),u}}while(c>=1&&d>=0);break}}}finally{q=!1,D.current=o,function(){if(0==--I){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:L({},e,{value:_}),info:L({},e,{value:R}),warn:L({},e,{value:O}),error:L({},e,{value:E}),group:L({},e,{value:z}),groupCollapsed:L({},e,{value:P}),groupEnd:L({},e,{value:F})})}I<0&&w("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var f=e?e.displayName||e.name:"",p=f?U(f):"";return"function"==typeof e&&B.set(e,p),p}function V(e,t,n){if(null==e)return"";if("function"==typeof e)return W(e,!(!(r=e.prototype)||!r.isReactComponent));var r;if("string"==typeof e)return U(e);switch(e){case u:return U("Suspense");case f:return U("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case d:return W(e.render,!1);case p:return V(e.type,t,n);case h:var o=e,a=o._payload,i=o._init;try{return V(i(a),t,n)}catch(e){}}return""}B=new M;var Y=Object.prototype.hasOwnProperty,G={},K=g.ReactDebugCurrentFrame;function J(e){if(e){var t=e._owner,n=V(e.type,e._source,t?t.type:null);K.setExtraStackFrame(n)}else K.setExtraStackFrame(null)}var X=Array.isArray;function H(e){return X(e)}function Q(e){return""+e}function Z(e){if(function(e){try{return Q(e),!1}catch(e){return!0}}(e))return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),Q(e)}var ee,te,ne,re=g.ReactCurrentOwner,oe={key:!0,ref:!0,__self:!0,__source:!0};ne={};var ae=function(e,t,r,o,a,i,l){var s={$$typeof:n,type:e,key:t,ref:r,props:l,_owner:i,_store:{}};return Object.defineProperty(s._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(s,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(s,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(s.props),Object.freeze(s)),s};function ie(e,t,n,r,o){var a,i={},l=null,s=null;for(a in void 0!==n&&(Z(n),l=""+n),function(e){if(Y.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}(t)&&(Z(t.key),l=""+t.key),function(e){if(Y.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}(t)&&(s=t.ref,function(e,t){if("string"==typeof e.ref&&re.current&&t&&re.current.stateNode!==t){var n=T(re.current.type);ne[n]||(w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',T(re.current.type),e.ref),ne[n]=!0)}}(t,o)),t)Y.call(t,a)&&!oe.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps){var c=e.defaultProps;for(a in c)void 0===i[a]&&(i[a]=c[a])}if(l||s){var d="function"==typeof e?e.displayName||e.name||"Unknown":e;l&&function(e,t){var n=function(){ee||(ee=!0,w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}(i,d),s&&function(e,t){var n=function(){te||(te=!0,w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}(i,d)}return ae(e,l,s,o,r,re.current,i)}var le,se=g.ReactCurrentOwner,ce=g.ReactDebugCurrentFrame;function de(e){if(e){var t=e._owner,n=V(e.type,e._source,t?t.type:null);ce.setExtraStackFrame(n)}else ce.setExtraStackFrame(null)}function ue(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}function fe(){if(se.current){var e=T(se.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}le=!1;var pe={};function he(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var n=function(e){var t=fe();if(!t){var n="string"==typeof e?e:e.displayName||e.name;n&&(t="\n\nCheck the top-level render call using <"+n+">.")}return t}(t);if(!pe[n]){pe[n]=!0;var r="";e&&e._owner&&e._owner!==se.current&&(r=" It was passed a child from "+T(e._owner.type)+"."),de(e),w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,r),de(null)}}}function ye(e,t){if("object"==typeof e)if(H(e))for(var n=0;n<e.length;n++){var r=e[n];ue(r)&&he(r,t)}else if(ue(e))e._store&&(e._store.validated=!0);else if(e){var o=function(e){if(null===e||"object"!=typeof e)return null;var t=m&&e[m]||e[b];return"function"==typeof t?t:null}(e);if("function"==typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)ue(a.value)&&he(a.value,t)}}function me(e){var t,n=e.type;if(null!=n&&"string"!=typeof n){if("function"==typeof n)t=n.propTypes;else{if("object"!=typeof n||n.$$typeof!==d&&n.$$typeof!==p)return;t=n.propTypes}if(t){var r=T(n);!function(e,t,n,r,o){var a=Function.call.bind(Y);for(var i in e)if(a(e,i)){var l=void 0;try{if("function"!=typeof e[i]){var s=Error((r||"React class")+": "+n+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw s.name="Invariant Violation",s}l=e[i](t,i,r,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){l=e}!l||l instanceof Error||(J(o),w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",r||"React class",n,i,typeof l),J(null)),l instanceof Error&&!(l.message in G)&&(G[l.message]=!0,J(o),w("Failed %s type: %s",n,l.message),J(null))}}(t,e.props,"prop",r,e)}else void 0===n.PropTypes||le||(le=!0,w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",T(n)||"Unknown"));"function"!=typeof n.getDefaultProps||n.getDefaultProps.isReactClassApproved||w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}var be={};function ge(e,t,r,c,m,b){var g=function(e){return"string"==typeof e||"function"==typeof e||!!(e===o||e===i||j||e===a||e===u||e===f||C||e===y||x||k||S)||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===p||e.$$typeof===l||e.$$typeof===s||e.$$typeof===d||e.$$typeof===v||void 0!==e.getModuleId)}(e);if(!g){var N,_="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(_+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),_+=fe(),null===e?N="null":H(e)?N="array":void 0!==e&&e.$$typeof===n?(N="<"+(T(e.type)||"Unknown")+" />",_=" Did you accidentally export a JSX literal instead of a component?"):N=typeof e,w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",N,_)}var R=ie(e,t,r,m,b);if(null==R)return R;if(g){var O=t.children;if(void 0!==O)if(c)if(H(O)){for(var E=0;E<O.length;E++)ye(O[E],e);Object.freeze&&Object.freeze(O)}else w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ye(O,e)}if(Y.call(t,"key")){var z=T(e),P=Object.keys(t).filter((function(e){return"key"!==e})),F=P.length>0?"{key: someKey, "+P.join(": ..., ")+": ...}":"{key: someKey}";be[z+F]||(w('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',F,z,P.length>0?"{"+P.join(": ..., ")+": ...}":"{}",z),be[z+F]=!0)}return e===o?function(e){for(var t=Object.keys(e.props),n=0;n<t.length;n++){var r=t[n];if("children"!==r&&"key"!==r){de(e),w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",r),de(null);break}}null!==e.ref&&(de(e),w("Invalid attribute `ref` supplied to `React.Fragment`."),de(null))}(R):me(R),R}var we=function(e,t,n){return ge(e,t,n,!1)},ve=function(e,t,n){return ge(e,t,n,!0)};c.Fragment=o,c.jsx=we,c.jsxs=ve}()),c);var d=i.exports;function u(e){if(!e)return"";var t=e.replace(/\B(?=(\d{3})+(?!\d))/g,",");if(t.indexOf(".")>0){var n=t.split(".");t=n[0]+"."+n[1].replace(/[^.\d]/g,"")}return t}function f(e){if(!e)return"";var t=e.replace(/[^.\d]/g,"");return t.indexOf(".")>0&&(t=parseFloat(t).toFixed(2)),t}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("/*\n! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}::before,\n::after {\n  --tw-content: '';\n}/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/html,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/body {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/hr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/abbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}/*\nRemove the default font size and weight for headings.\n*/h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/a {\n  color: inherit;\n  text-decoration: inherit;\n}/*\nAdd the correct font weight in Edge and Safari.\n*/b,\nstrong {\n  font-weight: bolder;\n}/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/code,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}/*\nAdd the correct font size in all browsers.\n*/small {\n  font-size: 80%;\n}/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/sub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}sub {\n  bottom: -0.25em;\n}sup {\n  top: -0.5em;\n}/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/table {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/button,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/button,\nselect {\n  text-transform: none;\n}/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/button,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}/*\nUse the modern Firefox focus style for all focusable elements.\n*/:-moz-focusring {\n  outline: auto;\n}/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/:-moz-ui-invalid {\n  box-shadow: none;\n}/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/progress {\n  vertical-align: baseline;\n}/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/::-webkit-search-decoration {\n  -webkit-appearance: none;\n}/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}/*\nAdd the correct display in Chrome and Safari.\n*/summary {\n  display: list-item;\n}/*\nRemoves the default spacing and border for appropriate elements.\n*/blockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}fieldset {\n  margin: 0;\n  padding: 0;\n}legend {\n  padding: 0;\n}ol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}/*\nReset default styling for dialogs.\n*/dialog {\n  padding: 0;\n}/*\nPrevent resizing textareas horizontally by default.\n*/textarea {\n  resize: vertical;\n}/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/input::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}input::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}/*\nSet the default cursor for buttons.\n*/button,\n[role=\"button\"] {\n  cursor: pointer;\n}/*\nMake sure disabled buttons don't get the pointer cursor.\n*/:disabled {\n  cursor: default;\n}/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/img,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/img,\nvideo {\n  max-width: 100%;\n  height: auto;\n}/* Make elements with the HTML hidden attribute stay hidden by default */[hidden] {\n  display: none;\n}*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}.block {\n  display: block;\n}.inline-block {\n  display: inline-block;\n}.flex {\n  display: flex;\n}.contents {\n  display: contents;\n}.w-full {\n  width: 100%;\n}.content-center {\n  align-content: center;\n}.items-center {\n  align-items: center;\n}.justify-center {\n  justify-content: center;\n}.gap-8 {\n  gap: 2rem;\n}.overflow-auto {\n  overflow: auto;\n}.rounded-3xl {\n  border-radius: 1.5rem;\n}.border-2 {\n  border-width: 2px;\n}.border-\\[\\#111111\\] {\n  --tw-border-opacity: 1;\n  border-color: rgb(17 17 17 / var(--tw-border-opacity));\n}.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}.pt-4 {\n  padding-top: 1rem;\n}.align-middle {\n  vertical-align: middle;\n}.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}.text-\\[\\#111111\\] {\n  --tw-text-opacity: 1;\n  color: rgb(17 17 17 / var(--tw-text-opacity));\n}.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}.shadow-\\[\\#000000\\] {\n  --tw-shadow-color: #000000;\n  --tw-shadow: var(--tw-shadow-colored);\n}.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}/* @tailwind base;\r\n@tailwind components;\r\n@tailwind utilities; */.bg-0A108F {\r\n  /* --tw-bg-opacity: 1; */\r\n  background-color: purple !important;\r\n}\r\n",{insertAt:"top"});var p=t.Input.TextArea,h=e.forwardRef((function(e,a){var i=e.form,l=e.submitAction,s=e.submitButtonTitle,c=void 0===s?"Submit":s,h=e.submitButtonStyle,y=e.hideSubmitButton,m=e.submitButtonClassName,b=e.resetButtonTitle,g=void 0===b?"Clear":b,w=e.resetButtonStyle,v=e.hideResetButton,x=e.resetButtonClassName,k=e.title,S=void 0===k?"":k,C=e.style,j=e.className,N=e.hideLabels,T=void 0!==N&&N,_=e.titleStyle,R=e.titleClassName,O=[{value:"1",label:"True",category:"1"},{value:"0",label:"False",category:"0"}],E=[{id:"f1x",fieldName:"ungrouped",fieldType:"InputText",fieldLength:"100%"},{fieldType:"Collapse",header:"Collapse",id:1},{id:"f10",fieldName:"field1",fieldType:"InputText",fieldLength:"50%"},{id:"f1",fieldName:"field123",fieldType:"Password",fieldLength:"100%"},{id:"f2",fieldName:"field123",fieldType:"Password",fieldLength:"100%"},{id:"f3",fieldName:"field12",fieldType:"Email",fieldLength:"100%",disabled:!0},{id:"f4",fieldName:"field1",fieldType:"TextArea",fieldLength:"100%"},{fieldType:"Collapse",header:"Collapse",id:2},{id:"f5",fieldName:"field3",fieldType:"InputNumber",fieldLength:"50%",disabled:!1},{id:"f6",fieldName:"field4",fieldType:"Currency",fieldLength:"100%",disabled:!0},{id:"f7",fieldName:"field5",fieldType:"DatePicker",fieldLength:"50%",block:!0,hideLabel:!1},{id:"f8",fieldName:"field5",fieldType:"Checkbox",fieldLength:"50%",block:!0,hideLabel:!1},{id:"f9",fieldName:"field8",fieldType:"Select",fieldLength:"33%",options:O},{id:"f11",fieldName:"field11",fieldType:"RadioGroup",fieldLength:"100%",options:O}],z=t.Form.useForm()[0],P=function(){z.resetFields()},F=function(){var e=i||E;return!!e&&e.filter((function(e){return"Collapse"===e.fieldType})).length>0},L=function(){var e=i||E,t=[],n=-1,r=[];if(!e)return[r,t];if("Collapse"!==e[0].fieldType)for(var o=0;o<e.length&&"Collapse"!==e[o].fieldType;o++)r.push(e[o]);return e.forEach((function(e){if("Collapse"===e.fieldType)return n++,void(t[n]=[e]);n>-1&&t[n].push(e)})),[r,t]},I=function(){return d.jsxs("div",{className:"flex gap-8 w-full px-4",children:[d.jsx(t.Button,{className:"text-xl align-middle shadow-[#000000] shadow-md rounded-3xl  border-[#111111] border-2 text-[#111111] ".concat(m),style:n(n({height:"40px",verticalAlign:"top"},h),y?{display:"none"}:{}),htmlType:"submit",children:c}),d.jsx(t.Button,{className:"text-xl align-middle shadow-[#000000] shadow-md rounded-3xl  border-[#111111] border-2 text-[#111111] ".concat(x),style:n(n({height:"40px",verticalAlign:"top"},w),v?{display:"none"}:{}),onClick:P,children:g})]})},$=function(e){return d.jsx(d.Fragment,{children:e.map((function(e,r){var o;if("Collapse"!==e.fieldType){e.disabled=!!e.disabled&&e.disabled,e.hideLabel=e.hideLabel?e.hideLabel:T;var a=new Object;"Checkbox"==e.fieldType&&(a=n(n({},a),{valuePropName:"checked",initialValue:e.checked})),"RadioGroup"==e.fieldType&&(a=n(n({},a),{valuePropName:"checked",initialValue:e.defaultValue}));var i=[];i="Email"==e.fieldType?[{required:e.required},{type:"email",message:"Insert valid email"}]:[{required:e.required}];var l=function(t){e.onChange&&e.onChange(t)};return d.jsxs(t.Form.Item,n({className:" ".concat(e.className)},e.hideLabel?{}:{label:e.fieldName},{style:n({display:e.block?"block":"inline-block",width:e.fieldLength},e.style),initialValue:e.initialValue,rules:i,name:e.id},a,{children:["InputText"==e.fieldType&&d.jsx(t.Input,{disabled:e.disabled,style:n({},e.controlStyle),placeholder:(e.required?"*":"")+e.fieldName,onChange:l,className:" ".concat(e.controlClassName)}),"Password"==e.fieldType&&d.jsx(t.Input.Password,{disabled:e.disabled,style:n({},e.controlStyle),placeholder:(e.required?"*":"")+e.fieldName,autoComplete:"password",onChange:l,className:" ".concat(e.controlClassName)}),"Email"==e.fieldType&&d.jsx(t.Input,{disabled:e.disabled,style:n({},e.controlStyle),placeholder:(e.required?"*":"")+"email@example.com",onChange:l,className:" ".concat(e.controlClassName)}),"InputNumber"==e.fieldType&&d.jsx(t.InputNumber,{disabled:e.disabled,style:n({},e.controlStyle),placeholder:(e.required?"*":"")+e.fieldName,onChange:l,className:" ".concat(e.controlClassName)}),"TextArea"==e.fieldType&&d.jsx(p,{rows:e.rows||2,disabled:e.disabled,style:n({},e.controlStyle),placeholder:(e.required?"*":"")+e.fieldName,onChange:l,className:" ".concat(e.controlClassName)}),"Currency"==e.fieldType&&d.jsx(t.InputNumber,{addonBefore:e.currencySymbol||"$",disabled:e.disabled,formatter:u,parser:f,style:n({},e.controlStyle),placeholder:(e.required?"*":"")+e.fieldName,onChange:l,className:" ".concat(e.controlClassName)}),"Select"==e.fieldType&&d.jsx(t.Select,{showSearch:!0,filterOption:function(e,t){return function(e,t,n){var r;return(null!==(r=null==n?void 0:n.label)&&void 0!==r?r:"").toLowerCase().includes(e.toLowerCase())&&!0}(e,0,t)},disabled:e.disabled,options:e.options,style:n({},e.controlStyle),onChange:l,className:" ".concat(e.controlClassName)}),"Checkbox"==e.fieldType&&d.jsx(t.Checkbox,{disabled:e.disabled,style:n({},e.controlStyle),onChange:l,className:" ".concat(e.controlClassName)}),"DatePicker"==e.fieldType&&d.jsx(t.Input,{type:"datetime-local",disabled:e.disabled,style:n({},e.controlStyle),onChange:l,className:" ".concat(e.controlClassName)}),"RadioGroup"==e.fieldType&&d.jsx(t.Radio.Group,{disabled:e.disabled,name:e.id,onChange:l,style:n({},e.controlStyle),value:e.defaultValue,className:" ".concat(e.controlClassName),children:null===(o=e.options)||void 0===o?void 0:o.map((function(e){return d.jsx(t.Radio,{value:e.value,defaultChecked:!0,children:e.label})}))})]}),r)}}))})};return d.jsxs(t.Form,{layout:"vertical",form:z,ref:a,onFinish:function(e){return r(void 0,void 0,void 0,(function(){return o(this,(function(t){return l(e),[2]}))}))},className:"py-4 overflow-auto ".concat(j),style:C,children:[d.jsx("div",{className:"px-4 text-2xl w-full ".concat(R),style:_,children:S}),function(e){var n=d.jsx(d.Fragment,{});if(F()){var r=L(),o=r[0],a=r[1],i=[],l=e.filter((function(e){return"Collapse"===e.fieldType}))[0].id;a.forEach((function(e){var t=e.filter((function(e){return"Collapse"===e.fieldType})),n=e.filter((function(e){return"Collapse"!==e.fieldType})),r=t[0],o={key:r.id||"1",label:r.header||"Region",children:$(n)};i.push(o)})),n=d.jsxs("div",{className:"justify-center mx-4 pt-4 items-center content-center ",children:[$(o),d.jsx(t.Collapse,{items:i,defaultActiveKey:[l]}),";",I()]})}else n=d.jsxs("div",{className:"justify-center mx-4 pt-4 items-center content-center ",children:[$(e),I()]});return n}(i||E)]})}));module.exports=h;
//# sourceMappingURL=index.js.map

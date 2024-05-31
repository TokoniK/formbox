import e from"react";import{Input as n,Form as t,InputNumber as r,Select as o,Checkbox as i,Radio as a,Button as s}from"antd";var l=function(){return l=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},l.apply(this,arguments)};function c(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function s(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}l((r=r.apply(e,n||[])).next())}))}function d(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=n.call(e,a)}catch(e){s=[6,e],r=0}finally{t=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}"function"==typeof SuppressedError&&SuppressedError;var f,u={exports:{}},p={};var h,y={};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */"production"===process.env.NODE_ENV?u.exports=function(){if(f)return p;f=1;var n=e,t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,r){var s,l={},c=null,d=null;for(s in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,s)&&!a.hasOwnProperty(s)&&(l[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===l[s]&&(l[s]=n[s]);return{$$typeof:t,type:e,key:c,ref:d,props:l,_owner:i.current}}return p.Fragment=r,p.jsx=s,p.jsxs=s,p}():u.exports=(h||(h=1,"production"!==process.env.NODE_ENV&&function(){var n=e,t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),u=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.for("react.offscreen"),b=Symbol.iterator,m="@@iterator",g=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function w(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];!function(e,n,t){var r=g.ReactDebugCurrentFrame.getStackAddendum();""!==r&&(n+="%s",t=t.concat([r]));var o=t.map((function(e){return String(e)}));o.unshift("Warning: "+n),Function.prototype.apply.call(console[e],console,o)}("error",e,t)}var v,x=!1,k=!1,S=!1,j=!1,C=!1;function _(e){return e.displayName||"Context"}function T(e){if(null==e)return null;if("number"==typeof e.tag&&w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case o:return"Fragment";case r:return"Portal";case a:return"Profiler";case i:return"StrictMode";case d:return"Suspense";case f:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case l:return _(e)+".Consumer";case s:return _(e._context)+".Provider";case c:return function(e,n,t){var r=e.displayName;if(r)return r;var o=n.displayName||n.name||"";return""!==o?t+"("+o+")":t}(e,e.render,"ForwardRef");case u:var n=e.displayName||null;return null!==n?n:T(e.type)||"Memo";case p:var t=e,h=t._payload,y=t._init;try{return T(y(h))}catch(e){return null}}return null}v=Symbol.for("react.module.reference");var R,O,E,N,z,P,F,L=Object.assign,$=0;function I(){}I.__reactDisabledLog=!0;var A,D=g.ReactCurrentDispatcher;function U(e,n,t){if(void 0===A)try{throw Error()}catch(e){var r=e.stack.trim().match(/\n( *(at )?)/);A=r&&r[1]||""}return"\n"+A+e}var M,q=!1,W="function"==typeof WeakMap?WeakMap:Map;function B(e,n){if(!e||q)return"";var t,r=M.get(e);if(void 0!==r)return r;q=!0;var o,i=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=D.current,D.current=null,function(){if(0===$){R=console.log,O=console.info,E=console.warn,N=console.error,z=console.group,P=console.groupCollapsed,F=console.groupEnd;var e={configurable:!0,enumerable:!0,value:I,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}$++}();try{if(n){var a=function(){throw Error()};if(Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(a,[])}catch(e){t=e}Reflect.construct(e,[],a)}else{try{a.call()}catch(e){t=e}e.call(a.prototype)}}else{try{throw Error()}catch(e){t=e}e()}}catch(n){if(n&&t&&"string"==typeof n.stack){for(var s=n.stack.split("\n"),l=t.stack.split("\n"),c=s.length-1,d=l.length-1;c>=1&&d>=0&&s[c]!==l[d];)d--;for(;c>=1&&d>=0;c--,d--)if(s[c]!==l[d]){if(1!==c||1!==d)do{if(c--,--d<0||s[c]!==l[d]){var f="\n"+s[c].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),"function"==typeof e&&M.set(e,f),f}}while(c>=1&&d>=0);break}}}finally{q=!1,D.current=o,function(){if(0==--$){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:L({},e,{value:R}),info:L({},e,{value:O}),warn:L({},e,{value:E}),error:L({},e,{value:N}),group:L({},e,{value:z}),groupCollapsed:L({},e,{value:P}),groupEnd:L({},e,{value:F})})}$<0&&w("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=i}var u=e?e.displayName||e.name:"",p=u?U(u):"";return"function"==typeof e&&M.set(e,p),p}function V(e,n,t){if(null==e)return"";if("function"==typeof e)return B(e,!(!(r=e.prototype)||!r.isReactComponent));var r;if("string"==typeof e)return U(e);switch(e){case d:return U("Suspense");case f:return U("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case c:return B(e.render,!1);case u:return V(e.type,n,t);case p:var o=e,i=o._payload,a=o._init;try{return V(a(i),n,t)}catch(e){}}return""}M=new W;var Y=Object.prototype.hasOwnProperty,G={},J=g.ReactDebugCurrentFrame;function K(e){if(e){var n=e._owner,t=V(e.type,e._source,n?n.type:null);J.setExtraStackFrame(t)}else J.setExtraStackFrame(null)}var X=Array.isArray;function H(e){return X(e)}function Q(e){return""+e}function Z(e){if(function(e){try{return Q(e),!1}catch(e){return!0}}(e))return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),Q(e)}var ee,ne,te,re=g.ReactCurrentOwner,oe={key:!0,ref:!0,__self:!0,__source:!0};te={};var ie=function(e,n,r,o,i,a,s){var l={$$typeof:t,type:e,key:n,ref:r,props:s,_owner:a,_store:{}};return Object.defineProperty(l._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(l,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(l,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(l.props),Object.freeze(l)),l};function ae(e,n,t,r,o){var i,a={},s=null,l=null;for(i in void 0!==t&&(Z(t),s=""+t),function(e){if(Y.call(e,"key")){var n=Object.getOwnPropertyDescriptor(e,"key").get;if(n&&n.isReactWarning)return!1}return void 0!==e.key}(n)&&(Z(n.key),s=""+n.key),function(e){if(Y.call(e,"ref")){var n=Object.getOwnPropertyDescriptor(e,"ref").get;if(n&&n.isReactWarning)return!1}return void 0!==e.ref}(n)&&(l=n.ref,function(e,n){if("string"==typeof e.ref&&re.current&&n&&re.current.stateNode!==n){var t=T(re.current.type);te[t]||(w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',T(re.current.type),e.ref),te[t]=!0)}}(n,o)),n)Y.call(n,i)&&!oe.hasOwnProperty(i)&&(a[i]=n[i]);if(e&&e.defaultProps){var c=e.defaultProps;for(i in c)void 0===a[i]&&(a[i]=c[i])}if(s||l){var d="function"==typeof e?e.displayName||e.name||"Unknown":e;s&&function(e,n){var t=function(){ee||(ee=!0,w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",n))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}(a,d),l&&function(e,n){var t=function(){ne||(ne=!0,w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",n))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}(a,d)}return ie(e,s,l,o,r,re.current,a)}var se,le=g.ReactCurrentOwner,ce=g.ReactDebugCurrentFrame;function de(e){if(e){var n=e._owner,t=V(e.type,e._source,n?n.type:null);ce.setExtraStackFrame(t)}else ce.setExtraStackFrame(null)}function fe(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}function ue(){if(le.current){var e=T(le.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}se=!1;var pe={};function he(e,n){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var t=function(e){var n=ue();if(!n){var t="string"==typeof e?e:e.displayName||e.name;t&&(n="\n\nCheck the top-level render call using <"+t+">.")}return n}(n);if(!pe[t]){pe[t]=!0;var r="";e&&e._owner&&e._owner!==le.current&&(r=" It was passed a child from "+T(e._owner.type)+"."),de(e),w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,r),de(null)}}}function ye(e,n){if("object"==typeof e)if(H(e))for(var t=0;t<e.length;t++){var r=e[t];fe(r)&&he(r,n)}else if(fe(e))e._store&&(e._store.validated=!0);else if(e){var o=function(e){if(null===e||"object"!=typeof e)return null;var n=b&&e[b]||e[m];return"function"==typeof n?n:null}(e);if("function"==typeof o&&o!==e.entries)for(var i,a=o.call(e);!(i=a.next()).done;)fe(i.value)&&he(i.value,n)}}function be(e){var n,t=e.type;if(null!=t&&"string"!=typeof t){if("function"==typeof t)n=t.propTypes;else{if("object"!=typeof t||t.$$typeof!==c&&t.$$typeof!==u)return;n=t.propTypes}if(n){var r=T(t);!function(e,n,t,r,o){var i=Function.call.bind(Y);for(var a in e)if(i(e,a)){var s=void 0;try{if("function"!=typeof e[a]){var l=Error((r||"React class")+": "+t+" type `"+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[a]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw l.name="Invariant Violation",l}s=e[a](n,a,r,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){s=e}!s||s instanceof Error||(K(o),w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",r||"React class",t,a,typeof s),K(null)),s instanceof Error&&!(s.message in G)&&(G[s.message]=!0,K(o),w("Failed %s type: %s",t,s.message),K(null))}}(n,e.props,"prop",r,e)}else void 0===t.PropTypes||se||(se=!0,w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",T(t)||"Unknown"));"function"!=typeof t.getDefaultProps||t.getDefaultProps.isReactClassApproved||w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}var me={};function ge(e,n,r,y,b,m){var g=function(e){return"string"==typeof e||"function"==typeof e||!!(e===o||e===a||C||e===i||e===d||e===f||j||e===h||x||k||S)||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===u||e.$$typeof===s||e.$$typeof===l||e.$$typeof===c||e.$$typeof===v||void 0!==e.getModuleId)}(e);if(!g){var _,R="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(R+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),R+=ue(),null===e?_="null":H(e)?_="array":void 0!==e&&e.$$typeof===t?(_="<"+(T(e.type)||"Unknown")+" />",R=" Did you accidentally export a JSX literal instead of a component?"):_=typeof e,w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",_,R)}var O=ae(e,n,r,b,m);if(null==O)return O;if(g){var E=n.children;if(void 0!==E)if(y)if(H(E)){for(var N=0;N<E.length;N++)ye(E[N],e);Object.freeze&&Object.freeze(E)}else w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ye(E,e)}if(Y.call(n,"key")){var z=T(e),P=Object.keys(n).filter((function(e){return"key"!==e})),F=P.length>0?"{key: someKey, "+P.join(": ..., ")+": ...}":"{key: someKey}";me[z+F]||(w('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',F,z,P.length>0?"{"+P.join(": ..., ")+": ...}":"{}",z),me[z+F]=!0)}return e===o?function(e){for(var n=Object.keys(e.props),t=0;t<n.length;t++){var r=n[t];if("children"!==r&&"key"!==r){de(e),w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",r),de(null);break}}null!==e.ref&&(de(e),w("Invalid attribute `ref` supplied to `React.Fragment`."),de(null))}(O):be(O),O}var we=function(e,n,t){return ge(e,n,t,!1)},ve=function(e,n,t){return ge(e,n,t,!0)};y.Fragment=o,y.jsx=we,y.jsxs=ve}()),y);var b=u.exports;function m(e){if(!e)return"";var n=e.replace(/\B(?=(\d{3})+(?!\d))/g,",");if(n.indexOf(".")>0){var t=n.split(".");n=t[0]+"."+t[1].replace(/[^.\d]/g,"")}return n}function g(e){if(!e)return"";var n=e.replace(/[^.\d]/g,"");return n.indexOf(".")>0&&(n=parseFloat(n).toFixed(2)),n}!function(e,n){void 0===n&&(n={});var t=n.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("/*\n! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}::before,\n::after {\n  --tw-content: '';\n}/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/html,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/body {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/hr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/abbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}/*\nRemove the default font size and weight for headings.\n*/h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/a {\n  color: inherit;\n  text-decoration: inherit;\n}/*\nAdd the correct font weight in Edge and Safari.\n*/b,\nstrong {\n  font-weight: bolder;\n}/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/code,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}/*\nAdd the correct font size in all browsers.\n*/small {\n  font-size: 80%;\n}/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/sub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}sub {\n  bottom: -0.25em;\n}sup {\n  top: -0.5em;\n}/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/table {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/button,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/button,\nselect {\n  text-transform: none;\n}/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/button,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}/*\nUse the modern Firefox focus style for all focusable elements.\n*/:-moz-focusring {\n  outline: auto;\n}/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/:-moz-ui-invalid {\n  box-shadow: none;\n}/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/progress {\n  vertical-align: baseline;\n}/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/::-webkit-search-decoration {\n  -webkit-appearance: none;\n}/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}/*\nAdd the correct display in Chrome and Safari.\n*/summary {\n  display: list-item;\n}/*\nRemoves the default spacing and border for appropriate elements.\n*/blockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}fieldset {\n  margin: 0;\n  padding: 0;\n}legend {\n  padding: 0;\n}ol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}/*\nReset default styling for dialogs.\n*/dialog {\n  padding: 0;\n}/*\nPrevent resizing textareas horizontally by default.\n*/textarea {\n  resize: vertical;\n}/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/input::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}input::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}/*\nSet the default cursor for buttons.\n*/button,\n[role=\"button\"] {\n  cursor: pointer;\n}/*\nMake sure disabled buttons don't get the pointer cursor.\n*/:disabled {\n  cursor: default;\n}/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/img,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/img,\nvideo {\n  max-width: 100%;\n  height: auto;\n}/* Make elements with the HTML hidden attribute stay hidden by default */[hidden] {\n  display: none;\n}*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}.block {\n  display: block;\n}.inline-block {\n  display: inline-block;\n}.flex {\n  display: flex;\n}.contents {\n  display: contents;\n}.w-full {\n  width: 100%;\n}.content-center {\n  align-content: center;\n}.items-center {\n  align-items: center;\n}.justify-center {\n  justify-content: center;\n}.gap-8 {\n  gap: 2rem;\n}.overflow-auto {\n  overflow: auto;\n}.rounded-3xl {\n  border-radius: 1.5rem;\n}.border {\n  border-width: 1px;\n}.border-2 {\n  border-width: 2px;\n}.border-\\[\\#111111\\] {\n  --tw-border-opacity: 1;\n  border-color: rgb(17 17 17 / var(--tw-border-opacity));\n}.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}.pt-4 {\n  padding-top: 1rem;\n}.align-middle {\n  vertical-align: middle;\n}.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}.text-\\[\\#111111\\] {\n  --tw-text-opacity: 1;\n  color: rgb(17 17 17 / var(--tw-text-opacity));\n}.shadow-inner {\n  --tw-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}.shadow-\\[\\#ffffff\\] {\n  --tw-shadow-color: #ffffff;\n  --tw-shadow: var(--tw-shadow-colored);\n}.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}/* @tailwind base;\r\n@tailwind components;\r\n@tailwind utilities; */.bg-0A108F {\r\n  /* --tw-bg-opacity: 1; */\r\n  background-color: purple !important;\r\n}\r\n",{insertAt:"top"});var w=n.TextArea,v=e.forwardRef((function(e,f){var u=e.form,p=e.submitAction,h=e.submitButtonTitle,y=void 0===h?"Submit":h,v=e.submitButtonStyle,x=e.hideSubmitButton,k=e.title,S=void 0===k?"":k,j=e.style,C=e.className,_=e.hideLabels,T=void 0!==_&&_,R=e.titleStyle,O=t.useForm()[0],E=function(){O.resetFields()};return b.jsxs(t,{layout:"vertical",form:O,ref:f,onFinish:function(e){return c(void 0,void 0,void 0,(function(){return d(this,(function(n){return console.log(e),p(e),[2]}))}))},className:"py-4 overflow-auto"+C,style:j,children:[b.jsx("div",{className:"px-4 text-2xl w-full ",style:R,children:S}),function(e){var c=b.jsxs("div",{className:"justify-center mx-4 pt-4 items-center content-center ",children:[e.map((function(e,s){var c;e.disabled=!!e.disabled&&e.disabled,e.hideLabel=e.hideLabel?e.hideLabel:T;var d=new Object;"Checkbox"==e.fieldType&&(d=l(l({},d),{valuePropName:"checked",initialValue:e.checked}));var f=[];f="Email"==e.fieldType?[{required:e.required},{type:"email",message:"Insert valid email"}]:[{required:e.required}];var u=function(n){e.onChange&&e.onChange(n)};return b.jsxs(t.Item,l({className:""},e.hideLabel?{}:{label:e.fieldName},{style:l({display:e.block?"block":"inline-block",width:e.fieldLength},e.fieldStyle),initialValue:e.initialValue,rules:f,name:e.id},d,{children:["InputText"==e.fieldType&&b.jsx(n,{disabled:e.disabled,style:l({},e.controlStyle),placeholder:(e.required?"*":"")+e.fieldName,onChange:u}),"Password"==e.fieldType&&b.jsx(n.Password,{disabled:e.disabled,style:l({},e.controlStyle),placeholder:(e.required?"*":"")+e.fieldName,autoComplete:"password",onChange:u}),"Email"==e.fieldType&&b.jsx(n,{disabled:e.disabled,style:l({},e.controlStyle),placeholder:(e.required?"*":"")+"email@example.com",onChange:u}),"InputNumber"==e.fieldType&&b.jsx(r,{disabled:e.disabled,style:l({},e.controlStyle),placeholder:(e.required?"*":"")+e.fieldName,onChange:u}),"TextArea"==e.fieldType&&b.jsx(w,{rows:e.rows||2,disabled:e.disabled,style:l({},e.controlStyle),placeholder:(e.required?"*":"")+e.fieldName,onChange:u}),"Currency"==e.fieldType&&b.jsx(r,{addonBefore:e.currencySymbol||"$",disabled:e.disabled,formatter:m,parser:g,style:l({},e.controlStyle),placeholder:(e.required?"*":"")+e.fieldName,onChange:u}),"Select"==e.fieldType&&b.jsx(o,{showSearch:!0,filterOption:function(e,n){return function(e,n,t){var r;return(null!==(r=null==t?void 0:t.label)&&void 0!==r?r:"").toLowerCase().includes(e.toLowerCase())&&!0}(e,0,n)},disabled:e.disabled,options:e.options,style:l({},e.controlStyle),onChange:u}),"Checkbox"==e.fieldType&&b.jsx(i,{disabled:e.disabled,style:l({},e.controlStyle),onChange:u}),"DatePicker"==e.fieldType&&b.jsx(n,{type:"datetime-local",disabled:e.disabled,style:l({},e.controlStyle),onChange:u}),"RadioGroup"==e.fieldType&&b.jsx(a.Group,{disabled:e.disabled,name:e.id,onChange:u,style:l({},e.controlStyle),children:null===(c=e.options)||void 0===c?void 0:c.map((function(e){return b.jsx(a,{checked:!1,value:e.value,children:e.label})}))})]}),s)})),b.jsxs("div",{className:"flex gap-8 w-full px-4",children:[b.jsx(s,{className:"text-xl shadow-inner align-middle shadow-[#ffffff] rounded-3xl  border-[#111111] border-2 text-[#111111] ",style:l(l({height:"40px",verticalAlign:"top"},v),x?{display:"none"}:{}),htmlType:"submit",children:y}),b.jsx(s,{className:"text-xl shadow-inner align-middle shadow-[#ffffff] rounded-3xl  border-[#111111] border-2 text-[#111111] ",style:l(l({height:"40px",verticalAlign:"top"},v),x?{display:"none"}:{}),onClick:E,children:"Clear"})]})]});return c}(u||[{id:"f1",fieldName:"field1",fieldType:"InputText",fieldLength:"50%"},{id:"f2",fieldName:"field2",fieldType:"InputText",fieldLength:"50%",disabled:!0},{id:"f3",fieldName:"field3",fieldType:"InputNumber",fieldLength:"50%",disabled:!1},{id:"f4",fieldName:"field4",fieldType:"Currency",fieldLength:"100%",disabled:!1},{id:"f5",fieldName:"field5",fieldType:"DatePicker",fieldLength:"50%",disabled:!1,block:!0},{id:"f6",fieldName:"field6",fieldType:"Checkbox",fieldLength:"50%",disabled:!1},{id:"f7",fieldName:"field7",fieldType:"RadioGroup",fieldLength:"50%",disabled:!1,value:2},{id:"f8",fieldName:"field8",fieldType:"Select",fieldLength:"33%",disabled:!1},{id:"f9",fieldName:"field9",fieldType:"Select",fieldLength:"33%",disabled:!1,options:[{value:1,label:"xxx"},{value:2,label:"xxx2"}],fieldStyle:{borderWidth:3},controlStyle:{borderWidth:3}},{id:"f10",fieldName:"field10",fieldType:"RadioGroup",fieldLength:"33%",disabled:!1,options:[{value:1,label:"xxx"},{value:2,label:"xxx2"}]}])]})}));export{v as default};
//# sourceMappingURL=index.js.map

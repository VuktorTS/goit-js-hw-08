function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,g=Math.min,p=function(){return l.Date.now()};function v(e,t,n){var i,o,r,f,u,a,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,c=t,f=e.apply(r,n)}function j(e){return c=e,u=setTimeout(h,t),l?b(e):f}function S(e){var n=e-a;return void 0===a||n>=t||n<0||s&&e-c>=r}function h(){var e=p();if(S(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-a);return s?g(n,r-(e-c)):n}(e))}function w(e){return u=void 0,v&&i?b(e):(i=o=void 0,f)}function O(){var e=p(),n=S(e);if(i=arguments,o=this,a=e,n){if(void 0===u)return j(a);if(s)return u=setTimeout(h,t),b(a)}return void 0===u&&(u=setTimeout(h,t)),f}return t=y(t)||0,m(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=a=o=u=void 0},O.flush=function(){return void 0===u?f:w(p())},O}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||f.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return m(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:i,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form"),j={getSrotage:e=>JSON.parse(localStorage.getItem(e)),setStorage(e,t){localStorage.setItem(e,JSON.stringify(t))}};b.addEventListener("input",e(t)((function(e){const t={email:b.elements.email.value,message:b.elements.message.value};j.setStorage("feedback-form-state",t)}),500));
//# sourceMappingURL=03-feedback.e7361722.js.map

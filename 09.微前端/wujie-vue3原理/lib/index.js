/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = vue;

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = wujie;

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const vue_1 = __webpack_require__(1);
const wujie_1 = __webpack_require__(2);
const wujie = (0, vue_1.defineComponent)({
    props: {
        width: { type: String, default: "" },
        height: { type: String, default: "" }, name: { type: String, default: "", required: true },
        loading: { type: HTMLElement, default: undefined },
        url: { type: String, default: "", required: true },
        sync: { type: Boolean, default: undefined },
        prefix: { type: Object, default: undefined },
        alive: { type: Boolean, default: undefined },
        props: { type: Object, default: undefined },
        attrs: { type: Object, default: undefined },
        replace: { type: Function, default: undefined },
        fetch: { type: Function, default: undefined },
        fiber: { type: Boolean, default: undefined },
        degrade: { type: Boolean, default: undefined },
        plugins: { type: Array, default: null },
        beforeLoad: { type: Function, default: null },
        beforeMount: { type: Function, default: null },
        afterMount: { type: Function, default: null },
        beforeUnmount: { type: Function, default: null },
        afterUnmount: { type: Function, default: null },
        activated: { type: Function, default: null },
        deactivated: { type: Function, default: null },
    },
    setup(props, { emit }) {
        // vue2 this.$refs.wujie
        const instance = (0, vue_1.getCurrentInstance)();
        const init = () => {
            // 微前端初始化方法就可以了
            (0, wujie_1.startApp)({
                name: props.name,
                url: props.url,
                el: instance === null || instance === void 0 ? void 0 : instance.refs.wujie,
                loading: props.loading,
                alive: props.alive,
                fetch: props.fetch,
                props: props.props,
                attrs: props.attrs,
                replace: props.replace,
                sync: props.sync,
                prefix: props.prefix,
                fiber: props.fiber,
                degrade: props.degrade,
                plugins: props.plugins,
                beforeLoad: props.beforeLoad,
                beforeMount: props.beforeMount,
                afterMount: props.afterMount,
                beforeUnmount: props.beforeUnmount,
                afterUnmount: props.afterUnmount,
                activated: props.activated,
                deactivated: props.deactivated,
            });
        };
        const eventHandler = (eventname, ...args) => {
            emit(eventname, ...args);
        };
        (0, vue_1.onMounted)(() => {
            wujie_1.bus.$onAll(eventHandler);
            init();
        });
        (0, vue_1.onBeforeUnmount)(() => {
            wujie_1.bus.$offAll(eventHandler);
        });
        // name 和 url 是动态绑定,值改变之后需要重载
        (0, vue_1.watch)([props.name, props.url], () => {
            init();
        });
        return () => (0, vue_1.h)('div', {
            style: {
                width: props.width,
                height: props.height
            },
            ref: "wujie", // 方便之后读取
        });
    }
});
wujie.install = function (app) {
    app.component('WuJieVue', wujie);
};
exports["default"] = wujie;

})();

/******/ })()
;
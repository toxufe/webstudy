(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.b = exports.a = void 0;
    exports.a = 1;
    exports.b = 2;
    var name = "Fly";
    var fn = function () {
        console.log('fn');
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBYSxRQUFBLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDTixRQUFBLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFbkIsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBRWpCLElBQU0sRUFBRSxHQUFHO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDLENBQUEifQ==
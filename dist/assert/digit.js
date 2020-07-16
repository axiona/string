(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/digit", "@dikac/t-function/assert/parameter", "./throwable/digit"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const digit_1 = require("../boolean/digit");
    const parameter_1 = require("@dikac/t-function/assert/parameter");
    const digit_2 = require("./throwable/digit");
    function Digit(value, error = digit_2.default) {
        parameter_1.default(value, digit_1.default, error);
    }
    exports.default = Digit;
});
//# sourceMappingURL=digit.js.map
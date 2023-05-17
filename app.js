"use strict";
/*
  Декораторы - паттерн, функция

  Декораторы позволяют добавить синтекс для аннотаций и мета программированию в TS для классов, методов свойст или параметров методов.

  Запись декоратора: @Название (@Component)

  Как только пишется декоратор, информация(метаинформация) о классе или и т.д. переходит в некую логику. В рамках этой логики можно модифицировать объект, выполнить доп действия.

  Виды декораторов:
  1. Декоратор класса: @Component
  2. Декоратор свойств: @Prop
  3. Декоратор метода: @Method
  4. Декоратор параметра: @Param
  
  Порядок исполнения:
  1. Декораторы на одном классе выполняются в обратном порядке (снизу вверх)
  2. Декораторы свойст, метода, параметра сверху вниз
*/
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = void 0;
function Component() {
}
exports.A = (() => {
    let _classDecorators = [Component];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _myName_decorators;
    let _myName_initializers = [];
    let _setName_decorators;
    var A = _classThis = class {
        constructor() {
            this.myName = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _myName_initializers, void 0));
        }
        setName(name) {
            this.myName = name;
        }
    };
    __setFunctionName(_classThis, "A");
    (() => {
        _myName_decorators = [Prop];
        _setName_decorators = [Method];
        __esDecorate(_classThis, null, _setName_decorators, { kind: "method", name: "setName", static: false, private: false, access: { has: obj => "setName" in obj, get: obj => obj.setName } }, null, _instanceExtraInitializers);
        __esDecorate(null, null, _myName_decorators, { kind: "field", name: "myName", static: false, private: false, access: { has: obj => "myName" in obj, get: obj => obj.myName, set: (obj, value) => { obj.myName = value; } } }, _myName_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        A = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return A = _classThis;
})();

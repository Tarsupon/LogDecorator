// function log(target: Object, method: string, descriptor: PropertyDescriptor){
//     let original = descriptor.value.bind(target);
//     if (typeof original === 'function'){
//         descriptor.value = function(...args){
//             console.log(JSON.stringify(args));
//             let returnValue = original.apply(this, args);
//             console.log(`ARGS: ${JSON.stringify(args)}`);
//             console.log(`RESULT:  ${returnValue}`);
//         }
//     }
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// class Test{
//     @log 
//     addNumbers(x: number, y: number): number{
//         return x + y;
//     }
//     @log 
//     sumStrings(x: string, y: string): string{
//         return `${x + y}`;
//     }
// }
// let temp = new Test();
// let a = temp.addNumbers(15, 5);
// let b = temp.sumStrings("I will be a ","Pirate's King!!!");
function log(target, name, descriptor) {
    var original = descriptor.value;
    if (typeof original === 'function') {
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Arguments: " + args);
            try {
                var result = original.apply(this, args);
                console.log("Result: " + result);
                return result;
            }
            catch (e) {
                console.log("Error: " + e);
                throw e;
            }
        };
    }
    return descriptor;
}
var Example = /** @class */ (function () {
    function Example() {
    }
    Example.prototype.sum = function (a, b) {
        return a + b;
    };
    __decorate([
        log
    ], Example.prototype, "sum");
    return Example;
}());
var e = new Example();
e.sum(1, 2);
e.sum(4, 2);
e.sum(7, 2);
e.sum(1, 235);
e.sum(32545, 2);

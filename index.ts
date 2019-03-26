function log(target: Object, method: string, descriptor: PropertyDescriptor){
    let original = descriptor.value.bind(target);
    if (typeof original === 'function'){
        descriptor.value = function(...args){
            console.log(JSON.stringify(args));
            let returnValue = original.apply(this, args);
            console.log(`ARGS: ${JSON.stringify(args)}`);
            console.log(`RESULT:  ${returnValue}`);
        }
    }
}
 
class Test{
 
    @log 
    addNumbers(x: number, y: number): number{
        return x + y;
    }

    @log 
    sumStrings(x: string, y: string): string{
        return `${x + y}`;
    }
}
 
let temp = new Test();
let a = temp.addNumbers(15, 5);
let b = temp.sumStrings("I will be a ","Pirate's King!!!");
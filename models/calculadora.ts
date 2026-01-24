function sum(arg1: any, arg2: any) {
    if(typeof arg1 !== "number") {
        return "Error";
    }
    return arg1 + arg2;
}

export default sum;
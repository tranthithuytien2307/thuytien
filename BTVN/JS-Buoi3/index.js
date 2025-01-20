//<---------map()------>
function Map(array, callback){
    const result = [];
    for (let i = 0; i < array.length; i++){
        result.push(callback(array[i], i, array));
    }
    return result;
}
const temp = [1, 3, 5];
const result = Map(temp, Num => Num * Num);
console.log("map(): " , result);

//<-------forEach()------>
function forEach(array, callback){
    for (let i = 0; i < array.length; i++){
        callback(array[i], i, array);
    }
}
forEach(temp, Num2 => console.log("forEach: ", Num2));

//<---------find-------->
function find(array, callback){
    for (let i = 0; i < array.length; i++){
        if (callback(array[i], i, array)){
            return array[i];
        }
    }
    return undefined;
}
let a = find(temp, Num3 => Num3 > 1);
console.log("find: ", a);

//<------findIndex()------>
function findIndex(array, callback){
    for (let i = 0; i < array.length; i++){
        if (callback(array[i], i, array)){
            return i;
        }
    }
    return -1;
}
let b = findIndex(temp, Num3 => Num3 > 1);
console.log("findIndex: ", b);

//<--------reduce()-------> 
function reduce(array, callback, initialValue){
    let previousValue;
    if (initialValue !== undefined){
        previousValue = initialValue;
    } else {
        previousValue = array[0];
    }
    let index;
    if (initialValue !== undefined){
        index = 0;
    } else {
        index = 1;
    }
    for (let i = index; i < array.length; i++){
        previousValue = callback(previousValue, array[i], i, array);
    }
    return previousValue;
}
let temp2 = reduce(temp, (previousValue, currentValue) => previousValue + currentValue, 0);
console.log("reduce(): ", temp2);

//<----------filter------>
function filter(array, callback){
    const result = [];
    for (let i = 0; i < array.length; i++){
        if (callback(array[i], i, array))
            result.push(array[i]);
    }
    return result;
}
let temp3 = filter(temp, Num => Num > 1);
console.log("filter(): ", temp3);

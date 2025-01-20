//<---------example----->
function bt1(arr1, arr2){
    const Print =[];
    arr1.forEach((value, i)=> {
        Print.push(value);
    });
    arr2.forEach((value, i) => {
        Print.push(value);
    });
    return Print;
}
const a = ['a', 'b', 'c'];
const b = [1,2,3];
let Print = bt1(b,a);
console.log("bt1: ", Print);

//<-------example---------->
function bt2(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            sum++;
        }
    }
    if (sum === array.length){
        console.log("YES");
    } else {
        console.log("NO");
    }
}
const data = [1,2,3,4,5];
bt2(data);
const data1 = [2,4,6];
bt2(data1);

//<-------example----->
function bt3(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            sum++;
        }
    }
    if (sum !== 0){
        console.log("YES");
    } else {
        console.log("NO");
    }
}
const data2 = [1,1,3,1,5];
bt3(data2);
const data3 = [1,2,3,4,5];
bt3(data3);
//<-------example----->
function bt4(array){
    let Print =[];
    Print = array.filter(Num => Num > 0);
    return Print;
}
const data4 = [1,-2,3,4,-5];
console.log(bt4(data4));

//<-----------example------->
function bt5(array){
    let value;
    value = array.find(Num => Num > 0);
    let index;
    index = array.findIndex(Num => Num > 0);
    if (value === undefined && index === -1){
        console.log("No result");
    } else {
        console.log(index, value);
    }
}
const data5 = [-1,-2,3,4,-5];
const data6 = [-1,2,3,4,-5];
const data7 = [-1, -2];
bt5(data5);
bt5(data6);
bt5(data7);

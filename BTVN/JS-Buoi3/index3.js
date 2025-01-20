//<--------example------>
function bt6(array){
    array.forEach((value, i)=> {
        if (value % 5 === 0){
            console.log(value);
        }
    });
}
const data8 = [1,5,30,26];
bt6(data8);

//<-------example----->
function bt7(array){
    let fisrtIndex;
    fisrtIndex = array.findIndex(Num => Num === 2);
    let lastIndex;
    lastIndex = array.lastIndexOf(2);
    if (fisrtIndex === -1 || lastIndex === -1){
        console.log("Không có kết quả");
    }  else {
        console.log(fisrtIndex, lastIndex);
    }  
}
const data9 = [-1,2,3,4,2,6];
const data10 = [0,6];
bt7(data9);
bt7(data10);

//<---------example------------->
function bt8(array){
    const result = array.join(", ");
    console.log(result);
}
const data11 = ["A", "B", "C"];
const data12 = [1,2,3];
bt8(data11);
bt8(data12);

//<--------------example------->
function bt9(array){
    const result = array.map(Num => Math.abs(Num));
    console.log(result);
}
const data13 = [2, -1, -8];
bt9(data13);
//<------Bai1------>

// tao doi tuong user
const user = new Object();
// them thuoc tinh name voi gia tri David
user.name = 'David';
//them thuoc tinh surname voi gia tri Xuan
user.surname = 'Xuan';
// thay đổi giá trị của name thành Cafedev
user.name = 'Cafedev';
// Xóa thuộc tính name
delete user.name;

// <------Bai 2 -------->
function isEmpty(obj){
    for (let key in obj){
        if( obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
//<-------Bai 3------->
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
function tinhTong(arr){
    let Tong = 0;
    for (let i in arr){
        if( arr.hasOwnProperty(i)){
            Tong = 0;
        }
        Tong += arr[i];
    }
    console.log('Tong luong: '+ Tong);
}
tinhTong(salaries);
// <--------bai 4------->
let menu = {
    width: 200,
    height: 300,
    title: "My menu cafedev"
};
function multiplyNumeric(obj){
    for (let i in obj){
        if (typeof obj[i] === "number"){
            obj[i] = obj[i] * 2;
        }
    }
}
multiplyNumeric(menu);
// <--------bai 5 -------->
const computer = {
    tt1: 0,
    tt2: 0,

    read(){
        this.tt1 = parseFloat(prompt("Nhap gia tri thu nhat: ",0));
        this.tt2 = parseFloat(prompt("Nhap gia tri thu hai: ", 0));
    },
    sum(){
        return this.tt1 + this.tt2;
    },
    mull(){
        return this.tt1 * this.tt2;
    }
};

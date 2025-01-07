// Bài tập 1
function baitap1 (day, month, year, hour, minute, second){
    let check = true
    if(day < 1 || month < 1 || year < 1 || hour < 0 || minute < 0 || second < 0){
        check = false
    }
    if(month == 1 || month == 3 || month == 5 || month == 7 || month == 9 || month == 10 || month == 12){
        if(day > 31){
            check = false
        }
    }
    else if (month == 4 || month == 6 || month == 9 || month == 11) {
        if (day > 30) {
            check = false;
        }
    }
    else if (month == 2) {
        const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        if ((isLeapYear && day > 29) || (!isLeapYear && day > 28)) {
            check = false;
        }
    }
    if(hour > 59 || minute > 59 || second > 59){
        check = false
    }
    if (check) {
        const date = 'Ngày: ' + day + '/' + month + '/' + year
        const time = 'Giờ: ' + hour + ':' + minute + ":" + second
        console.log(date);
        console.log(time);
    } else {
        console.log("Không hợp lệ.");
    }
}
console.log("Bài tập 1: ");
baitap1(23,7,2005,17,20,30);

// Bài tập 2
function baitap2(dd,mm,yyyy){
    let check=true;
    let CheckDate=true;
    if (mm<1 || mm>12) checkDate=false;
    else{
        if (mm==2){
            if (yyyy%4==0){
                if (yyyy%100==0){
                    if (yyyy%400==0){
                        check=true;
                    }else check=false;
                }else check=true;
            }else check=false;
        }else{
            if (mm==1 || mm==3 || mm==5 || mm==7 || mm==8 || mm==10 || mm==12){
                if (dd>31 || dd<1) CheckDate=false;
                else CheckDate=true;
            }
            else{
                if (dd>30 || dd<1) CheckDate=false;
                else CheckDate=true;
            }
        }
    }
    
    if (mm==2){
        if (check==true){
            if (dd>29) CheckDate=false;
            else CheckDate=true;
        }
        else{
            if (dd>28) CheckDate=false;
            else CheckDate=true;
        }
    }

    if (CheckDate==true){
        const format1=mm + '-' + dd + '-' + yyyy;
        const format2=mm + '/' + dd + '/' + yyyy;
        const format3=dd + '-' + mm + '-' + yyyy;
        const format4=dd + '/' + mm + '/' + yyyy;
        console.log(format1);
        console.log(format2);
        console.log(format3);
        console.log(format4);
    }
    else console.log('Ngày nhập bị lỗi định dạng.');
}
console.log("Bài tập 2: ");
baitap2(23,7,2005);

// Bài tập 3
function baitap3(a) {
    let b;
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] < a[i + 1]) b = true;
        else b = false;
    }
    console.log(b);
}
console.log("Bài tập 3: ");
baitap3('123');

// Bài tập 4
function baitap4(d){
    const lowercase="abcdefghijklmnopqrstuvwxyz";
    const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result ="";

    for (let i = 0; i <d.length; i++){
        let char = d[i];

        let IsLowerCase= false;
        for (let j = 0; j < lowercase.length; j++){
            if (char === lowercase[j]){
                IsLowerCase = true;
                result +=lowercase[(j+1)%26];
                break;
            }
        }
        let ISUpperCase = false;
        if (!IsLowerCase){
            for (let j = 0; j <uppercase.length; j++){
                if (char === uppercase[j]){
                    ISUpperCase = true;
                    result += uppercase[(j+1)%26];
                    break;
                }
            }
        }
        if (!ISUpperCase && !IsLowerCase){
            result += char;
        }
    }
    console.log("Kết quả: ", result);
}
console.log("Bài tập 4: ");
baitap4('bachkhoa 123');

// Bài tập 5
function baitap5(c) {
    if (c.length % 2 == 0) {
        console.log("Chuỗi có độ dài chẵn.");
    } else {
        const d = Math.floor(c.length / 2);
        console.log(c[d - 1], c[d], c[d + 1]);
    }
}
console.log("Bài tập 5: ");
baitap5('abcde');

// Bài tập 6
function baitap6(arr){
    let result=0
    let temp=0
    let arrayT = []
    arrayT.push(arr[0])
    arrayT[arr[0]]=1;
    for (i=1;i<arr.length;i++){
        if (arrayT[arr[i]]>0) arrayT[arr[i]]++;
        else {
            arrayT.push(arr[i])
            arrayT[arr[i]]=1;
        }
    }
    for (i=1;i<arr.length;i++){
        if (arrayT[arr[i]]> temp) {
            temp=arrayT[arr[i]]
            result=arr[i]
        }
    }
    console.log(result)
}
const array = [2,3,0,7,2,0,0,5];
console.log("Bài tập 6: ");
baitap6(array);

// Bài tập 7
function baitap7(e){
    const chuoi ="java";
    let found = false;

    for (let i = 0; i <= e.length - chuoi.length; i++){
        let temp = true;
        for (let j = 0; j < chuoi.length; j++){
            if (e[i + j] !== chuoi[j]){
                temp = false;
                break;
            }
        }
        if (temp){
            found = true;
            break;
        }
    }
    if (found){
        console.log("Chuỗi có chứa từ 'java'");
    } else{
        console.log("Chuỗi không có chứa từ 'java'");
    }
}
console.log("Bài tập 7: ");
baitap7('java muôn năm');
// bai tap 8

function baitap8(thang){
    if (thang<1 || thang>12) 
        console.log('Tháng nhập không hợp lệ');
    else if (thang==1) 
        console.log(thang, 'Tháng một');
    else if (thang==2) 
        console.log(thang,'Tháng hai');
    else if (thang==3) 
        console.log(thang,'Tháng ba') ;   
    else if (thang==4) 
        console.log(thang,'Tháng bốn');
    else if (thang==5) 
        console.log(thang,'Tháng năm');
    else if (thang==6) 
        console.log(thang,'Tháng sáu');
    else if (thang==7) 
        console.log(thang,'Tháng bảy');
    else if (thang==8) 
        console.log(thang,'Tháng tám');
    else if (thang==9) 
        console.log(thang,'Tháng chín');
    else if (thang==10) 
        console.log(thang,'Tháng mười');
    else if (thang==11) 
        console.log(thang,'Tháng mười một');
    else 
        console.log(thang,'Tháng mười hai');
}
console.log("Bài tập 8: ");
baitap8('7');

// bai tap 9
function baitap9(f) {
    const arr = f.split(' ');
    let y = 0;
    for (let k = 1; k < arr.length; k++) {
        if (arr[k].length > arr[y].length) y = k;
    }
    console.log("Từ dài nhất trong chuỗi:", arr[y]);
}
console.log("Bài tập 9: ");
baitap9('a bb ccc');

// bai tap 10
function baitap10 (k, l){
    let a = false;
    for(let i = k; i <= l; i++){
        let q = true;
        if(i<2){continue;}
        for(let j = 2; j < i; j++ ){
            if(i%j == 0){
                q = false;
                break;
            }
        }
        if(q){
            a = true;
            console.log("Số nguyên tố: ");
            console.log(i);
        }
    }
    if (!a){
        console.log("Giữa hai số không có số nguyên tố.");
    }
}
console.log("Bài tập 10: ");
baitap10(6,12);

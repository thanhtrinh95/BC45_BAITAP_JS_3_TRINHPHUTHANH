
//Thêm số 
var arrNumber = [];
document.querySelector('#btnThemSo').onclick = function () {
    var so = +document.getElementById('nhap-so').value;

    arrNumber.push(so);

    document.querySelector('#ket-qua-1').innerHTML = arrNumber;


}
//Tính tổng số dương
document.querySelector('#btnTinhTongSoDuong').onclick = function () {
    var tongSoDuong = 0;
    for (var index = 0; index < arrNumber.length; index++) {
        if (arrNumber[index] > 0) {
            tongSoDuong += arrNumber[index];
        }
    }

    document.querySelector('#ket-qua-2').innerHTML = tongSoDuong;
}
//Đếm số dương
document.querySelector('#btnDemSo').onclick = function () {
    var demso = 0;
    var tongso = arrNumber[demso];
    for (var index = 0; index < arrNumber.length; index++) {
        if (arrNumber[index] > 0) {
            tongso = arrNumber[index];
            demso = index + 1;
        }
    }
    document.querySelector('#ket-qua-3').innerHTML = demso;
}
//Tìm số nhỏ nhất
document.querySelector('#btnTimSoNho').onclick = function () {
    var sonho = 0;
    var soMin = arrNumber[sonho];
    for (var index = 0; index < arrNumber.length; index++) {
        if (arrNumber[index] < soMin) {
            soMin = arrNumber[index];
            sonho = index;
        }
    }
    document.querySelector('#ket-qua-4').innerHTML = arrNumber[sonho];
}
//Tìm số dương nhỏ nhất
document.querySelector('#btnTimSoDuongNho').onclick = function () {
    var mangsoduong = [];

    for (var index = 0; index < arrNumber.length; index++) {
        var num = arrNumber[index];
        if (num >= 0) {
            mangsoduong.push(num);
        }
    }

    var ketqua = '';
    if (mangsoduong.length) {
        ketqua = Math.min(...mangsoduong)
    } else {
        ketqua = 'khong co so duong'
    }



    document.querySelector('#ket-qua-5').innerHTML = ketqua;
}

//Tìm số chẳn 
document.querySelector('#btnTìmSoChan').onclick = function () {

    var sochancuoi = arrNumber[0];
    for (var index = 0; index < arrNumber.length; index++) {
        if (arrNumber[index] % 2 == 0) {
            sochancuoi = arrNumber[index];

        }
    }
    document.querySelector('#ket-qua-6').innerHTML = sochancuoi;

}

//Đổi chỗ
document.querySelector('#btnDoiCho').onclick = function () {
    var vitri1 = +document.getElementById('vitri1').value;
    var vitri2 = +document.getElementById('vitri2').value;
    var swap = arrNumber[vitri1];
    arrNumber[vitri1] = arrNumber[vitri2];
    arrNumber[vitri2] = swap;

    document.querySelector('#ket-qua-7').innerHTML = 'Mảng sau khi đổi chỗ' + arrNumber;
}



//Sắp xếp tăng dần
document.querySelector('#btnSapXepTang').onclick = function () {
    var ArraySortnum = _.sortBy(arrNumber);

    document.querySelector('#ket-qua-8').innerHTML = ArraySortnum;
}

// Tìm số nguyên tố đầu tiên

document.querySelector('#btnSoNguyenTo').onclick = function () {
    var snt = true;
    var n = arrNumber[0];
    if (n < 2) {
        snt = false;
    } else {
        for (var i = 2; i < arrNumber.length; i++) {
            if (n % i == 0) {
                snt = false;
                break;
            }
        }
    }
    document.querySelector('#ket-qua-9').innerHTML = 'Sô nguyên tố đầu tiên :' + n;

}

// Đếm só nguyên
document.querySelector('#btnDemSoNguyen').onclick = function () {
    var demsoNguyen = 0;
    var tongsoNguyen = arrNumber[0];
    for (var index = 0; index < arrNumber.length; index++) {
        if (Number.isInteger(tongsoNguyen)) {
            tongsoNguyen = arrNumber[index];
            demsoNguyen = index + 1;
        }
    }
    document.querySelector('#ket-qua-10').innerHTML = demsoNguyen;

}

//so sánh âm dương
document.querySelector('#btnSoSanh').onclick = function () {
    var soam = [];
    var soduong = [];


    for (var index = 0; index < arrNumber.length; index++) {
        if (arrNumber[index] < 0) {
            soam.push(arrNumber[index]);

        } else if (arrNumber[index] >= 0) {
            soduong.push(arrNumber[index]);
        }
    }
    var soAmLonHon = soam.length > soduong.length;
    var soDuongLonHon = soam.length < soduong.length;
    var StringAmDuong = "Số âm = số dương";
    if (soAmLonHon) {
        StringAmDuong = " Số âm > Số Dương"
    } else if (soDuongLonHon) {
        StringAmDuong = " Số âm < Số Dương"
    }

    document.querySelector('#ket-qua-11').innerHTML = StringAmDuong;

}

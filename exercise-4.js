var tanggal; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

tanggal = 2
bulan = 11
tahun = 2200


if (tanggal > 0 && tanggal <= 31 && bulan > 0  && bulan <=12 && tahun >=1990 && tahun <=2200)
{
switch (bulan){
    case 1 :
        bulan = 'January'
    break
    case 2 :
        bulan = 'February'
    break
    case 3 :
        bulan = 'March'
    break
    case 4 :
        bulan = 'April'
    break
    case 5 :
        bulan = 'May'
    break
    case 6 :
        bulan = 'June'
    break
    case 7 :
        bulan = 'July'
    break
    case 8 :
        bulan = 'August'
    break
    case 9:
        bulan = 'September'
    break
    case 10 :
        bulan = 'October'
    break
    case 11 :
        bulan = 'November'
    break
    case 12 :
        bulan = 'December'
    break
  }


  console.log(tanggal + ' ' + bulan +' '+ tahun)
}else{
    console.log('make sure to make valid tanggal(1-31), bulan(1-12) dan tahun (1900-2200)')
}


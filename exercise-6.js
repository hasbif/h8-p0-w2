//1. Melakukan Looping Menggunakan While
var i1 = 2   
console.log('Looping Pertama')
    while (i1 <= 20){
        console.log(i1 + ' - I love coding')
        i1 += 2
    }
console.log('Looping Kedua')
    while (i1 >= 4){
        i1 -= 2
        console.log(i1 + ' - I will become fullstack developer')
    }

//2. Melakukan Looping Menggunakan For
var i2 = 1
console.log('Looping Pertama')
for(i2;i2<21;i2++){
    console.log(i2 + ' - I love coding')
}
console.log('Looping Kedua')
for(i2;i2>0;i2--){
    console.log(i2 + ' - I will become fullstack developer')
}

//3. Angka Ganjil dan Genap
var i3
console.log('counter +1')
for(i3 = 0; i3<=100;i3++){
    if (i3%2 == 0){
        console.log('GENAP')

    }else console.log('GANJIL')
}


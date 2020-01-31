//1. Menyusun Barisan Bintang
console.log('No. 1')
var rows1
rows1 = 5 //change
var i
for(i = 1;i<=rows1;i++){
    console.log("*")
}

//2. Menyusun Barisan Bintang Dengan Nested Looping
console.log('No. 2')
var rows2
var output
rows2 = 5 //change
var i2
for(i=1;i<=rows2;i++){
    output = '*'
    for (i2 = 1;i2<rows2;i2++){
        output = output + '*'
    }
    console.log(output)
}



console.log('No. 3')
var rows3
rows3 = 5 //change
var cols3 = 1

for(i=1;i<=rows3;i++){
    output = ''
    for (i2 = 0;i2<cols3;i2++){
        output = output + '*'
    }
    cols3 = cols3 + 1
    console.log(output)
}
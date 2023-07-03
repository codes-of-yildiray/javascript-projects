
 function sayiUret(ustLimit){
    return Math.ceil( Math.random() * ustLimit)
}
sayiUret()

var not = sayiUret(100)
 console.log("Öğrencinin Notu:", not);

if(not > 50)
{
    console.log("geçti");
}
else
{
    console.log("kaldı");
}
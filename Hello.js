var viesti = "Moikka Mäntsälä!";
console.log(viesti);

var i = 5;
for (let i = 0; i < 10; i++){
    console.log("iin arvo on = " +i);
}

console.log("Silmukan ulkopuolella iin arvo on = " + i);


let luku1 = "3";
let luku2 = 3;
let summa = luku1 + luku2;

if(luku1 == luku2){
    console.log("Luvut ovat samat");
}else console.log("Luvut ovat erisuuret");

console.log("lukujen 1 ja 2 summa on = " + summa);

console.log("-------------------------------------------------------");

var puhelimet = ["Apple", "Samsung", "Huawei", "Nokia", "Oneplus", "Honor", "Xperia"];
for (var i = 0; i < puhelimet.length; i++){
    if(puhelimet[i] == "Oneplus"){
        console.log(puhelimet[i] + " <-- Minulla on tämä puhelin");
    }else console.log(puhelimet[i]);
}


console.log("-------------------------------------------------------");

console.log(typeof("Maisa"));
console.log(typeof("9"));
console.log(typeof(9));
console.log("Luvun 1 tyyppi on = " +typeof(luku1));
console.log("Luvun 2 tyyppi on = " +typeof(luku2));

console.log("-------------------------------------------------------");

var merkkijono = "Tämä on JavaScript -harjoittelua, eikös vain?";
var positio = merkkijono.indexOf("-");
console.log(merkkijono);
console.log("tavuviiva on positiossa: "+positio);

console.log(merkkijono.slice(positio+1,merkkijono.length));
let mindestLaenge = 10
let pw;
let pwArray;
let laenge = false
let grossbuchstaben = false
let kleinbuchstaben = false
let zahlen = false
let sonderzeichen = false

function berechnen(){
    pw = document.getElementById("eingabe");
    pwArray = pw.spilt("")
    console.log(pw)
    console.log(pwArray)

    laengePruefen()
    grossbuchstabenEnthalten()
    kleinbuchstabenEnthalten()
    zahlenEnthalten()
    sonderzeichenEnthalten()


}

function laengePruefen(){
    if(pwArray.length > mindestLaenge){
        laenge = true;
    }
}

function grossbuchstabenEnthalten(){
    if(/[A-Z]/.test(pw)){
        grossbuchstaben = true
    }
}
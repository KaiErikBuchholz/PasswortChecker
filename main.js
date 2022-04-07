let mindestLaenge = 10
let pw;
let pwArray;
let laenge = false
let grossbuchstaben = false
let kleinbuchstaben = false
let zahlen = false


function berechnen(){
    pw = document.getElementById("eingabe").value;
    pwArray = pw.split("")
    console.log(pw)
    console.log(pwArray)

    laengePruefen()
    grossbuchstabenEnthalten()
    kleinbuchstabenEnthalten()
    zahlenEnthalten()


    if(laenge && grossbuchstaben && kleinbuchstaben && zahlen){
        document.getElementById("Anmerkung").style.color = "green"
        document.getElementById("Anmerkung").innerHTML = "Das Passwort ist sicher!"

    }else{
        document.getElementById("Anmerkung").style.color = "red"
        document.getElementById("Anmerkung").innerHTML = "Das Passwort ist unsicher!"
    }


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

function kleinbuchstabenEnthalten(){
    if(/[a-z]/.test(pw)){
        kleinbuchstaben = true
    }
}

function zahlenEnthalten(){
    if(/[0-1]/.test(pw)){
        zahlen = true
    }
}
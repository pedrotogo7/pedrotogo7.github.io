var pares = [];
function isPar(numero) {
    if(numero%2 == 0){
        return true;
    } else{
        return false;
    }
}
function Q1() {
    console.log('Q1');
    var aux = document.getElementById('numeroQ1').value;
    for(let i = 0; i <= aux; i++){
        if (isPar(i)){
            pares.push(i);
        }
    }
    console.log(pares);
    document.getElementById('RQ1').innerHTML = pares;
}

var primos = [];
function Q2(){
    console.log('Q2');
    var aux = document.getElementById('numeroQ2').value;
    primos.push(2);
    for(let numero = 3; numero <= aux; numero += 2) {
        let chk = true;
        for(let i = 0; i < primos.length; i++) {
            if(numero % primos[i] === 0){
                chk = false;
                break;
            }
        }
        if(chk) { primos.push(numero); }
    }
    console.log(primos);
    document.getElementById('RQ2').innerHTML = primos;
}
function isPrimo(numero) {
    if(numero === 2) { return true; }
    else if (numero < 2 || numero % 2 === 0) { return false; }
    for(let i = 3; i <= Math.sqrt(numero); i += 2) {
        if(numero % i === 0) { return false; }
    }
    return true;
}

var listaStrings = [];
function Q3() {
    console.log('Q3');
    var novaString = document.getElementById('novaString').value;
    var caps = novaString.toUpperCase();
    listaStrings.push(caps);
    console.log(listaStrings);
    document.getElementById('RQ3').innerHTML = listaStrings;

    
}

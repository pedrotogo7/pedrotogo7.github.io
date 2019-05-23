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

function acrescentaSTR(){
var aux = document.getElementById('novaString').value;
listaStrings.push(aux);
document.getElementById('novaString').value = "";
document.getElementById('auxQ3').innerHTML = listaStrings;

}
function Q3(){
    console.log('Q3');
    for(let i = 0; i < listaStrings.length; i++) {
        listaStrings[i] = listaStrings[i].toUpperCase();
    }
    console.log(listaStrings);
    document.getElementById('RQ3').innerHTML = listaStrings;
}

function QuickSort_(X, IniVet, FimVet) { // X é array}
console.log('IniVet, FimVet')
var i = IniVet;
var j = FimVet;
var pivo = X[Math.floor((IniVet+FimVet)/2)];
var aux;

   while(i <= j){
       while (X[i] < pivo) {
           i++;
       }  
    while (X[j] > pivo) {
        j--;
    }
          if (i <= j) {
             aux  = X[i];
              X[i] = X[j];
              X[j] = aux;
              i++;
              j--;
          }
        }    

   
   if (IniVet < j) {
      QuickSort(X, IniVet, j);
   }
   if (i < FimVet) {
      QuickSort(X, i, FimVet);
   }
}
function Quicksort(X) {
    var Y = Array.from(X);
    Quicksort_(Y, 0, Y.length- 1);
    return Y;
}
function Q4(){
    console.log('Q4');
    var aux = document.getElementById('numerosQ4').value;
    var numerosQ4 = aux.split(';');
    var ordenados;
for (let i = 0; i < numerosQ4,length; i++) {
    numerosQ4[i] = Number.parseFloat(numerosQ4[i]);
}
console.log('++++' + numerosQ4);
ordenados = Quciksort(numerosQ4);
console.log(ordenados);
document.getElementById('RQ4').innerHTML = ordenados;
}
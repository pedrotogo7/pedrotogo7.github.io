function calculoarearetangulo(lado,altura){
    if (lado<0||altura<0){
        return 'ambos argumentos devem ser >=o para calcular a area';
    }
    return lado*altura;
}
console.log(calculoarearetangulo (6,7));
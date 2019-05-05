function Q1() {
    console.log('Q1');
    var x = Number.parseInt(document.getElementById('x').value);
    var y = Number.parseInt(document.getElementById('y').value);
    // Segue aqui seu código
    console.log('X = ' + x);
    console.log('Y = ' + y);
    console.log('Quociente = ' + Math.floor(x/y));
    console.log('Resto = ' + (x%y));


}
function Q2() {
    console.log('Q2');
    var x = Number.parseFloat(document.getElementById('b').value);
    var y = Number.parseFloat(document.getElementById('c').value);
    // Segue aqui seu código
    console.log('X = ' + x);
    console.log('Y = ' + y);
    console.log('Hipotenusa = ' + Math.sqrt((x * x) + (y * y)));

}
function Q3() {
    console.log('Q3');
    var aux = document.getElementById('profissoes');
    var profissao = aux.options[aux.selectedIndex].text;
    // Segue aqui seu código
    if
    (profissao == 'Presidente'){
        console.log('Ambos');
}
else if
(profissao.endsWith('a')||profissao.endsWith('z')){
    console.log('Feminino');
}
else
    console.log('Masculino');
}

function Q4() {
    console.log('Q4');
    var a_str = document.getElementById('a2').value;
    var b_str = document.getElementById('b2').value;
    var c_str = document.getElementById('c2').value;
    // Segue aqui seu código
    if(!a_str){
        let b2 = Number.parseFloat(b_str);
        let c2 = Number.parseFloat(c_str);
        console.log('Hipotenusa = ' + Math.sqrt((b2 * b2) + (c2 * c2)));
    }
    else if(!b_str)
    {
        let a2 = Number.parseFloat(a_str);
        let c2 = Number.parseFloat(c_str);
        console.log('Cateto = ' + Math.sqrt((a2 * a2) - (c2 * c2)));
    }
    else if(!c_str)
    {
        let a2 = Number.parseFloat(a_str);
        let b2 = Number.parseFloat(b_str);
        console.log('Cateto2 = ' + Math.sqrt((a2 * a2) - (b2 * b2)));
    }



}


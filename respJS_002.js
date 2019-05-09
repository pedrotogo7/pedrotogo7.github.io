function Q1() {
    console.log('Q1');
    var x = Number.parseInt(document.getElementById('x').value);
    var y = Number.parseInt(document.getElementById('y').value);
    document.getElementById('RQ1.1').innerHTML = "X: " + x; 
    document.getElementById('RQ1.2').innerHTML = "Y: " + y; 
    document.getElementById('RQ1.3').innerHTML = "Quociente: " + Math.floor(x/y); 
    document.getElementById('RQ1.4').innerHTML = "Resto: " + (x%y); 
    // Segue aqui seu código
    console.log('X = ' + x);
    console.log('Y = ' + y);
    console.log('Quociente = ' + Math.floor(x/y));
    console.log('Resto = ' + (x%y));}

function Q2() {
    console.log('Q2');
    var x = Number.parseFloat(document.getElementById('b').value);
    var y = Number.parseFloat(document.getElementById('c').value);
    document.getElementById('RQ1.5').innerHTML = "X: " + x; 
    document.getElementById('RQ1.6').innerHTML = "Y: " + y; 
    document.getElementById('RQ1.7').innerHTML = "Hipotenusa: " + Math.sqrt((x * x) + (y * y)); 
    // Segue aqui seu código
    console.log('X = ' + x);
    console.log('Y = ' + y);
    console.log('Hipotenusa = ' + Math.sqrt((x * x) + (y * y)));}

    function Q3() {
        console.log('Q3');
        var aux = document.getElementById('profissoes');
        var profissao = aux.options[aux.selectedIndex].text;
        document.getElementById('RQ1.8').innerHTML = "Profissão: " + profissao;
        // Segue aqui seu código
        if
        (profissao == 'Presidente'){
            console.log('Ambos');
            document.getElementById('RQ1.9').innerHTML = "Gênero: " ;
    }
    else if
    (profissao.endsWith('a')||profissao.endsWith('z')){
        console.log('Feminino');
    }
    else
        console.log('Masculino'); }
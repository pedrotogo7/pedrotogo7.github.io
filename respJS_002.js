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
            document.getElementById('RQ1.9').innerHTML = "Gênero: " + 'Ambos';
    }
    else if
    (profissao.endsWith('a')||profissao.endsWith('z')){
        console.log('Feminino');
        document.getElementById('RQ1.91').innerHTML = "Gênero: " + 'Feminino';
    }
    else
        console.log('Masculino'); 
        document.getElementById('RQ1.92').innerHTML = "Gênero: " + 'Masculino';}

        function Q4() {
            console.log('Q4');
            var a = document.getElementById('a2').value;
            var b = document.getElementById('b2').value;
            var c = document.getElementById('c2').value;
            var a_str = document.getElementById('a2').value;
            var b_str = document.getElementById('b2').value;
            var c_str = document.getElementById('c2').value;
            {if(!a_str){document.getElementById('RQ1.93').innerHTML = "Hipotenusa: " + 0; }
            else document.getElementById('RQ1.99').innerHTML = "Hipotenusa: " + a; }
            {if(!b_str){document.getElementById('RQ1.94').innerHTML = "Cateto: " + 0;}
            else document.getElementById('RQ1.991').innerHTML = "Cateto: " + b;}
            {if(!c_str){document.getElementById('RQ1.95').innerHTML = "Cateto2: " + 0;}
            else document.getElementById('RQ1.992').innerHTML = "Cateto2: " + c;}
            // Segue aqui seu código
            if(!a_str){
                let b2 = Number.parseFloat(b_str);
                let c2 = Number.parseFloat(c_str);
                console.log('Hipotenusa = ' + Math.sqrt((b2 * b2) + (c2 * c2)));
                document.getElementById('RQ1.96').innerHTML = "Hipotenusa: " + Math.sqrt((b2 * b2) + (c2 * c2)); 
            }
            else if(!b_str)
            {
                let a2 = Number.parseFloat(a_str);
                let c2 = Number.parseFloat(c_str);
                console.log('Cateto = ' + Math.sqrt((a2 * a2) - (c2 * c2)));
                document.getElementById('RQ1.97').innerHTML = "Cateto: " + Math.sqrt((a2 * a2) - (c2 * c2));
            }
            else if(!c_str)
            {
                let a2 = Number.parseFloat(a_str);
                let b2 = Number.parseFloat(b_str);
                console.log('Cateto2 = ' + Math.sqrt((a2 * a2) - (b2 * b2)));
                document.getElementById('RQ1.98').innerHTML = "Cateto2: " + Math.sqrt((a2 * a2) - (b2 * b2)); 
            }
        
        
        
        }

        function Q5() {
            console.log('Q5');
            var altura = Number.parseFloat(document.getElementById('altura').value);
            var peso = Number.parseFloat(document.getElementById('peso').value);
            var aux = document.getElementById('generos');
            var genero = aux.options[aux.selectedIndex].text;
            var imc = (peso/ (altura * altura));
            document.getElementById('RQ1.993').innerHTML = "IMC: " + imc; 
            // Segue aqui seu código
            console.log('Altura = ' +altura);
            console.log('Peso = ' + peso);
        
            if(genero == 'Masculino'){
            if(imc < 18.5){
                console.log('Magro');
                document.getElementById('RQ1.993').innerHTML = "Condição Física: " + 'Magro'; 
            }
            else if(imc >= 18.5 && imc < 24.9){
                console.log('Sarado');
                document.getElementById('RQ1.994').innerHTML = "Condição Física: " + 'Sarado'; 
            }
            else if(imc >= 25 && imc <= 29.9){
                console.log('Rechonchudo');
                document.getElementById('RQ1.995').innerHTML = "Condição Física: " + 'Rechonchudo'; 
            }
            else if(imc > 30){
                console.log('Obeso');
                document.getElementById('RQ1.996').innerHTML = "Condição Física: " + 'Obeso'; 
            }}
            
        
            else{
            if(imc < 18.5){
                console.log('Magra');
                document.getElementById('RQ1.997').innerHTML = "Condição Física: " + 'Magra'; 
            }
            else if(imc >= 18.5 && imc < 24.9){
                console.log('Sarada');
                document.getElementById('RQ1.998').innerHTML = "Condição Física: " + 'Sarada'; 
            }
            else if(imc >= 25 && imc <= 29.9){
                console.log('Rechonchuda');
                document.getElementById('RQ1.999').innerHTML = "Condição Física: " + 'Rechonchuda'; 
            }
            else if(imc > 30){
                console.log('Obesa');
                document.getElementById('RQ1.9991').innerHTML = "Condição Física: " + 'Obesa'; 
            }
            }}
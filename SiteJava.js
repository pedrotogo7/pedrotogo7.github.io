function Sintomas() {

    var aux = document.getElementById('Sintoma 01');
    var ax = document.getElementById('Sintoma 02');
    var ux = document.getElementById('Sintoma 03');
    var Sintoma_01 = aux.options[aux.selectedIndex].text;
    var Sintoma_02 = ax.options[ax.selectedIndex].text;
    var Sintoma_03 = ux.options[ux.selectedIndex].text;
    

    if(Sintoma_01 == 'Dor atrás dos olhos' && Sintoma_02 == 'Febre' && Sintoma_03 == 'Dores no corpo'||
    Sintoma_01 == 'Dor atrás dos olhos' && Sintoma_02 == 'Dores no corpo' && Sintoma_03 == 'Febre'||
    Sintoma_01 == 'Febre' && Sintoma_02 == 'Dor atrás dos olhos' && Sintoma_03 == 'Dores no corpo'||
    Sintoma_01 == 'Febre' && Sintoma_02 == 'Dores no corpo' && Sintoma_03 == 'Dor atrás dos olhos'||
    Sintoma_01 == 'Dores no corpo' && Sintoma_02 == 'Dor atrás dos olhos' && Sintoma_03 == 'Febre'||
    Sintoma_01 == 'Dores no corpo' && Sintoma_02 == 'Febre' && Sintoma_03 == 'Dor atrás dos olhos')
    {document.getElementById('RQ1').innerHTML = "Doença: " + 'Dengue' + "<br>" + "<br>" + "A dengue é uma doença viral transmitida pelo mosquito Aedes aegypti. A infecção por dengue pode ser assintomática, leve ou causar doença grave, levando à morte. Normalmente, a primeira manifestação da dengue é a febre alta (39° a 40°C), de início abrupto, que geralmente dura de 2 a 7 dias, acompanhada de dor de cabeça, dores no corpo e articulações, prostração, fraqueza, dor atrás dos olhos, erupção e coceira na pele. Perda de peso, náuseas e vômitos são comuns. Na fase febril inicial da doença pode ser difícil diferenciá-la. A forma grave da doença inclui dor abdominal intensa e contínua, vômitos persistentes, sangramento de mucosas, entre outros sintomas.";}
    
        
    else if(Sintoma_01 == 'Congestão nasal' && Sintoma_02 == 'Tosse' && Sintoma_03 == 'Náuseas e vômito'||
    Sintoma_01 == 'Congestão nasal' && Sintoma_02 == 'Náuseas e vômito' && Sintoma_03 == 'Tosse'||
    Sintoma_01 == 'Náuseas e vômito' && Sintoma_02 == 'Congestão nasal' && Sintoma_03 == 'Tosse'||
    Sintoma_01 == 'Náuseas e vômito' && Sintoma_02 == 'Tosse' && Sintoma_03 == 'Congestão nasal'||
    Sintoma_01 == 'Tosse' && Sintoma_02 == 'Congestão nasal' && Sintoma_03 == 'Náuseas e vômito'||
    Sintoma_01 == 'Tosse' && Sintoma_02 == 'Náuseas e vômito' && Sintoma_03 == 'Congestão nasal')     
        {document.getElementById('RQ1').innerHTML = "Doença: " + 'Virose' +"<br>" + "<br>" + "Os sintomas típicos de uma constipação aparecem após dois a três dias de incubação, por vezes menos, e começam habitualmente por desconforto ou dor na faringe, espirros e posteriormente congestão nasal, rinorreia, tosse, calafrios e garganta inflamada, sendo por vezes acompanhada de dores musculares, fadiga, dores de cabeça e perda de apetite." ;} 
        
    else if(Sintoma_01 == 'Falta de ar' && Sintoma_02 == 'Dores no peito' && Sintoma_03 == 'Tosse com excreção'||
    Sintoma_01 == 'Falta de ar' && Sintoma_02 == 'Tosse com excreção' && Sintoma_03 == 'Dores no peito'||
    Sintoma_01 == 'Dores no peito' && Sintoma_02 == 'Tosse com excreção' && Sintoma_03 == 'Falta de ar'||
    Sintoma_01 == 'Dores no peito' && Sintoma_02 == 'Falta de ar' && Sintoma_03 == 'Tosse com excreção'||
    Sintoma_01 == 'Tosse com excreção' && Sintoma_02 == 'Dores no peito' && Sintoma_03 == 'Falta de ar'||
    Sintoma_01 == 'Tosse com excreção' && Sintoma_02 == 'Falta de ar' && Sintoma_03 == 'Dores no peito')     
        {document.getElementById('RQ1').innerHTML = "Doença: " + 'Insuficiência Cardíaca' +"<br>" + "<br>" + "A insuficiência cardíaca, também chamada de insuficiência cardíaca congestiva, é uma doença na qual o coração não consegue mais bombear sangue suficiente para o resto do corpo, não conseguindo suprir as suas necessidades.";}
        
    else if(Sintoma_01 == 'Irritação na garganta' && Sintoma_02 == 'Falta de ar' && Sintoma_03 == 'Tosse com excreção'||
    Sintoma_01 == 'Irritação na garganta' && Sintoma_02 == 'Tosse com excreção' && Sintoma_03 == 'Falta de ar'||
    Sintoma_01 == 'Tosse com excreção' && Sintoma_02 == 'Falta de ar' && Sintoma_03 == 'Irritação na garganta'||
    Sintoma_01 == 'Tosse com excreção' && Sintoma_02 == 'Irritação na garganta' && Sintoma_03 == 'Falta de ar'||
    Sintoma_01 == 'Falta de ar' && Sintoma_02 == 'Tosse com excreção' && Sintoma_03 == 'Irritação na garganta'||
    Sintoma_01 == 'Falta de ar' && Sintoma_02 == 'Irritação na garganta' && Sintoma_03 == 'Tosse com excreção')     
        {document.getElementById('RQ1').innerHTML = "Doença: " + 'Asma' +"<br>" + "<br>" + "Asma é uma doença inflamatória crônica das vias aéreas, variável e reversível espontaneamente ou com tratamento. Durante a crise de asma, os brônquios se inflamam e reduzem a passagem de ar, causando os sintomas de tosse, falta de ar, chiado e aperto no peito.";}
    
    else if(Sintoma_01 == 'Irritação na garganta' && Sintoma_02 == 'Falta de ar' && Sintoma_03 == 'Congestão nasal'||
    Sintoma_01 == 'Irritação na garganta' && Sintoma_02 == 'Congestão nasal' && Sintoma_03 == 'Falta de ar'||
    Sintoma_01 == 'Congestão nasal' && Sintoma_02 == 'Falta de ar' && Sintoma_03 == 'Irritação na garganta'||
    Sintoma_01 == 'Congestão nasal' && Sintoma_02 == 'Irritação na garganta' && Sintoma_03 == 'Falta de ar'||
    Sintoma_01 == 'Falta de ar' && Sintoma_02 == 'Congestão nasal' && Sintoma_03 == 'Irritação na garganta'||
    Sintoma_01 == 'Falta de ar' && Sintoma_02 == 'Irritação na garganta' && Sintoma_03 == 'Congestão nasal')     
        {document.getElementById('RQ1').innerHTML = "Doença: " + 'Rinite alérgica' +"<br>" + "<br>" + "A inflamação da membrana mucosa na rinite pode ser causada por vírus, bactérias, irritantes ou alergénios. A inflamação faz com que o corpo produza grande quantidade de muco, que se acumula e congestiona o nariz e a garganta. No caso da rinite alérgica, a inflamação é causada pela degranulação dos mastócitos no nariz. Ao degranularem-se, estas células libertam histamina e outras substâncias químicas, o que dá origem a um processo inflamatório que pode causar sintomas fora do nariz, como a fadiga e mal estar. A rinite infecciosa pode por vezes levar a complicações como pneumonia, quer viral quer bacteriana.";}     
    
    else if(Sintoma_01 == 'Dores no peito' && Sintoma_02 == 'Falta de ar' && Sintoma_03 == 'Tosse com sangue'||
    Sintoma_01 == 'Dores no peito' && Sintoma_02 == 'Tosse com sangue' && Sintoma_03 == 'Falta de ar'||
    Sintoma_01 == 'Tosse com sangue' && Sintoma_02 == 'Falta de ar' && Sintoma_03 == 'Dores no peito'||
    Sintoma_01 == 'Tosse com sangue' && Sintoma_02 == 'Dores no peito' && Sintoma_03 == 'Falta de ar'||
    Sintoma_01 == 'Falta de ar' && Sintoma_02 == 'Dores no peito' && Sintoma_03 == 'Tosse com sangue'||
    Sintoma_01 == 'Falta de ar' && Sintoma_02 == 'Tosse com sangue' && Sintoma_03 == 'Dores no peito')     
        {document.getElementById('RQ1').innerHTML = "Doença: " + 'Tuberculose' +"<br>" + "<br>" + "A tuberculose é uma doença infecto-contagiosa causada por uma bactéria. Esse germe tem algumas características diferentes, sendo melhor chamada de micobactéria. A micobactéria pode infectar vários órgãos, como pulmão, pleura, ossos, sistema nervoso, linfonodos, intestinos, sistema genitourinário. A tuberculose acompanha o ser humano desde a pré história e é muito presente no Brasil.";}  
    
    else if(Sintoma_01 == 'Náuseas e vômito' && Sintoma_02 == 'Febre' && Sintoma_03 == 'Dores no corpo'||
    Sintoma_01 == 'Náuseas e vômito' && Sintoma_02 == 'Dores no corpo' && Sintoma_03 == 'Febre'||
    Sintoma_01 == 'Dores no corpo' && Sintoma_02 == 'Náuseas e vômito' && Sintoma_03 == 'Febre'||
    Sintoma_01 == 'Dores no corpo' && Sintoma_02 == 'Febre' && Sintoma_03 == 'Náuseas e vômito'||
    Sintoma_01 == 'Febre' && Sintoma_02 == 'Dores no corpo' && Sintoma_03 == 'Náuseas e vômito'||
    Sintoma_01 == 'Febre' && Sintoma_02 == 'Náuseas e vômito' && Sintoma_03 == 'Dores no corpo')     
        {document.getElementById('RQ1').innerHTML = "Doença: " + 'Infecção intestinal' +"<br>" + "<br>" + "A principal causa de infecção intestinal é a ingestão de alimentos mal lavados ou mal conservados com presença de micro-organismos (bactérias, vírus), substâncias químicas ou tóxicas, que podem causar uma intoxicação alimentar, também conhecida como gastroenterocolite aguda. A falta de higiene e o manuseio e armazenamento incorretos dos alimentos são as principais causas de contaminação dos mesmos, além do tempo que ficam expostos a essas substâncias ou micro-organismos."}   
        
    else if(Sintoma_01 == 'Dificuldade em urinar' && Sintoma_02 == 'Falta de ar' && Sintoma_03 == 'Inchaço'||
    Sintoma_01 == 'Dificuldade em urinar' && Sintoma_02 == 'Inchaço' && Sintoma_03 == 'Falta de ar'||
    Sintoma_01 == 'Inchaço' && Sintoma_02 == 'Dificuldade em urinar' && Sintoma_03 == 'Falta de ar'||
    Sintoma_01 == 'Inchaço' && Sintoma_02 == 'Falta de ar' && Sintoma_03 == 'Dificuldade em urinar'||
    Sintoma_01 == 'Falta de ar' && Sintoma_02 == 'Inchaço' && Sintoma_03 == 'Dificuldade em urinar'||
    Sintoma_01 == 'Falta de ar' && Sintoma_02 == 'Dificuldade em urinar' && Sintoma_03 == 'Inchaço')     
        {document.getElementById('RQ1').innerHTML = "Doença: " + 'Insuficiência renal' +"<br>" + "<br>" + "Insuficiência renal aguda é a perda súbita da capacidade de seus rins filtrarem resíduos, sais e líquidos do sangue. Quando isso acontece, os resíduos podem chegar a níveis perigosos e afetar a composição química do seu sangue, que pode ficar fora de equilíbrio. Também chamada de lesão renal aguda, a insuficiência é comum em pacientes que já estão no hospital com alguma outra condição. Pode desenvolver-se rapidamente ao longo de algumas horas ou mais lentamente, durante alguns dias. Pessoas que estão gravemente doentes e necessitam de cuidados intensivos estão em maior risco de desenvolver insuficiência renal aguda."}    
       
    else if(Sintoma_01 == 'Tosse com excreção' && Sintoma_02 == 'Congestão nasal' && Sintoma_03 == 'Dores no corpo'||
    Sintoma_01 == 'Tosse com excreção' && Sintoma_02 == 'Dores no corpo' && Sintoma_03 == 'Congestão nasal'||
    Sintoma_01 == 'Dores no corpo' && Sintoma_02 == 'Congestão nasal' && Sintoma_03 == 'Tosse com excreção'||
    Sintoma_01 == 'Dores no corpo' && Sintoma_02 == 'Tosse com excreção' && Sintoma_03 == 'Congestão nasal'||
    Sintoma_01 == 'Congestão nasal' && Sintoma_02 == 'Dores no corpo' && Sintoma_03 == 'Tosse com excreção'||
    Sintoma_01 == 'Congestão nasal' && Sintoma_02 == 'Tosse com excreção' && Sintoma_03 == 'Dores no corpo')     
        {document.getElementById('RQ1').innerHTML = "Doença: " + 'Influenza A' +"<br>" + "<br>" + "A gripe (Influenza) é uma infecção aguda do sistema respiratório, provocado pelo vírus da influenza, com grande potencial de transmissão. Inicia-se com febre, dor no corpo, e tosse seca. Normalmente, tem evolução por tempo limitado, durando de um a quatro dias, mas pode se apresentar forma grave. O Sistema Único de Saúde (SUS) concede de forma gratuita a vacina que protege contra os tipos A e B do vírus. O vírus da gripe (Influenza) propaga-se facilmente e é responsável por elevadas taxas de hospitalização. Idosos, crianças, gestantes e pessoas com doenças crônicas, como diabetes e hipertensão, ou imunodeficiência são mais vulneráveis aos vírus."}   
    
    else if(Sintoma_01 == 'Dores no rosto/testa' && Sintoma_02 == 'Dores de cabeça' && Sintoma_03 == 'Náuseas e vômito'||
    Sintoma_01 == 'Dores no rosto/testa' && Sintoma_02 == 'Náuseas e vômito' && Sintoma_03 == 'Dores de cabeça'||
    Sintoma_01 == 'Dores de cabeça' && Sintoma_02 == 'Dores no rosto/testa' && Sintoma_03 == 'Náuseas e vômito'||
    Sintoma_01 == 'Dores de cabeça' && Sintoma_02 == 'Náuseas e vômito' && Sintoma_03 == 'Dores no rosto/testa'||
    Sintoma_01 == 'Náuseas e vômito' && Sintoma_02 == 'Dores no rosto/testa' && Sintoma_03 == 'Dores de cabeça'||
    Sintoma_01 == 'Náuseas e vômito' && Sintoma_02 == 'Dores de cabeça' && Sintoma_03 == 'Dores no rosto/testa')     
        {document.getElementById('RQ1').innerHTML = "Doença: " + 'Enxaqueca' +"<br>" + "<br>" + "A enxaqueca é um dos tipos de cefaleia (dor de cabeça). A enxaqueca se caracteriza por uma dor pulsátil em um dos lados da cabeça (às vezes dos dois), geralmente acompanhada de fotofobia e fonofobia, náusea e vômito. A duração da crise varia de quatro a 72 horas, podendo ser mais curta em crianças. Segundo o Ministério da Saúde, de 5 a 25% das mulheres e 2 a 10% dos homens tem enxaqueca. A enxaqueca é predominante em pessoas com idades entre 25 e 45 anos, sendo que após os 50 anos essa porcentagem tende a diminuir, principalmente em mulheres. A doença ocorre em 3 a 10% das crianças, afetando igualmente ambos os gêneros antes da puberdade, mas com predomínio no sexo feminino após essa fase. A enxaqueca pode ser divida entre com aura ou sem aura, e essas em episódica ou crônica. Segundo dados do Ministério da Saúde, 64% do total desses pacientes apresentaram enxaqueca sem aura, 18% com aura e 13% com e sem aura. Os restantes 5% apresentaram aura sem cefaleia."}
        else {document.getElementById('RQ1').innerHTML = "Não identificado";}
        
}
        

function pulaLinha () {
    document.write ("<br>");
    document.write ("<br>");
}

function mostra (texto) {
    document.write (texto);
    pulaLinha();
}

function imcCalc (peso, altura) {
        
        return peso / (altura * altura);
}  
    var nome = prompt ("Olá, Qual é seu nome?")
    var infPeso = prompt(nome + ", informe seu Peso");
    var infAltura = prompt(nome + ", informe sua Altura");

    var imc = imcCalc (infPeso, infAltura);   
        
        mostra (nome + ", Seu IMC é " + Math.round(imc));

            if (imc >= 18.5  &&  imc <= 35) {
            
        mostra( "Você está no seu peso ideal!");
    }
        
            if (imc > 35) {
        mostra( "Você está acima do peso, vamos cuidar da saude?")
    }
            if (imc < 18.5)
        mostra(  "Você está abaixo do peso, que tal uma dieta saudavel para recupera-lo?")
   
    
    

    


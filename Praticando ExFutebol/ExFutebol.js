
function pulaLinha () {
    document.write ("<br>");
    document.write ("<br>");
}

function mostra (texto) {
    document.write (texto);
    pulaLinha();
}

var vitorias = parseInt(prompt ("Digite aqui o numero de vitorias"));
var empates = parseInt(prompt ("Digite aqui o numero de empates"));

var pontos = (vitorias * 3) + empates;

mostra("A quantidade de pontos do seu time são " + pontos);

    if (pontos > 28) {
mostra ("Seu time esta melhor do que o ano passado, vai ser campeão!.");
}   if (pontos < 28) {
mostra ("Seu time está pior do que o ano passado, se continuar assim vai cair!")
}    if (pontos == 28) {
mostra ("Seu time esta igual ao ano passado, não ganha nem perde.")
}
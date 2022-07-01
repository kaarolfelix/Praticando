class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;
}

const cliente1 = new Cliente();
cliente1.nome = "Karol";
cliente1.cpf = 123456489709;

const cliente2 = new Cliente();
cliente2.nome = "Pedro";
cliente2.cpf = 123456489709;

const contaCorrenteKarol = new ContaCorrente ();
contaCorrenteKarol.saldo = 0;
contaCorrenteKarol.agencia = 1001;


console.log(cliente1, cliente2);


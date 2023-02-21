class Cliente{
    Id: number;
    Nome: string;

    constructor(id: number, nome: string) { // construtor serve para instanciar objetos da classe, evita erro de referrencia nulas
        this.Nome = nome;
        this.Id = id;
    }
}

let c1 = new Cliente(1, 'Bruno'); // instancia do objeto

console.log(c1.Id, c1.Nome); // imprimindo as propriedades do objeto no console
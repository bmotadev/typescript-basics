class Elfo extends Personagem {
    constructor(nome: string) {
        super(nome, TipoPersonagem.Elfo);  //chama o constructor da classe pai
    }

    atacar(): void {
        console.log(`${this.nome} atacou com arco e flecha.`);
    }
}
import { TipoPersonagem } from "../enums/tipo_personagem";

export abstract class Personagem {
    nome: string;
    tipo: TipoPersonagem;

    constructor(nome: string, tipo: TipoPersonagem) {
        this.nome = nome;
        this.tipo = tipo;

    }

    caminhar() {
        console.log(`${this.nome} caminhou`);
    }

    abstract atacar() : void; // metodo abstrato precisa definir o tipo, no caso o void
}
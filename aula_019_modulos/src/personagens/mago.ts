import { TipoPersonagem } from "../enums/tipo_personagem";
import { Personagem } from "./personagem";

export class Mago extends Personagem {
    constructor(nome: string) {
        super(nome, TipoPersonagem.Mago);  //super chama o constructor da classe pai
    }

    caminhar() { // metodo/função
        console.log(`${this.nome} voou.`);
    }

    atacar(): void {
        console.log(`${this.nome} atacou com magia.`);
    }
}
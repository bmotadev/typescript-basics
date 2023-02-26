import { TipoPersonagem as Tipo } from "../enums/tipo_personagem";
import { Personagem, VIDA_MAX } from "./personagem";

export class Elfo extends Personagem {
    vida: number;

    constructor(nome: string) {
        super(nome, Tipo.Elfo);  //chama o constructor da classe pai
        this.vida = VIDA_MAX;
    }

    atacar(): void {
        console.log(`${this.nome} atacou com arco e flecha.`);
    }
}
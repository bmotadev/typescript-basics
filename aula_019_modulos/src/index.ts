// modulo: uma forma de dividir o codigo em porções que façam sentido contextualmente.
import { TipoPersonagem } from "./enums/tipo_personagem";


// uma classe abstrata contem caracteristicas e comportamentos que devem ser herdados por outras classes. Mas ela por si só, não pode ser instanciada.
abstract class Personagem {
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

class Mago extends Personagem {
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

class Elfo extends Personagem {
    constructor(nome: string) {
        super(nome, TipoPersonagem.Elfo);  //chama o constructor da classe pai
    }

    atacar(): void {
        console.log(`${this.nome} atacou com arco e flecha.`);
    }
}

let p1 = new Mago('Saruman');
let p2 = new Elfo('Elrond');


console.log(p1);
console.log(p2);

p1.caminhar();
p2.caminhar();

p1.atacar();
p2.atacar();
"use strict";
// generics: permite que uma classe ou interface manipulem um determinado tipo de dados. Porém esse tipo de dados só é definido no momento em que instanciamos a classe ou interface.
class OpcaoMenu {
    imprimir() {
        console.log(this);
    }
}
class Personagem extends OpcaoMenu {
    constructor(nome) {
        super(); // apos fazer a herança passar o metodo super
        this.nome = nome;
    }
    imprimir() {
        console.log(`${this.nome}`);
    }
}
class Armamento {
}
class Mapa {
    constructor(clima) {
        this.clima = clima;
    }
}
class Menu {
    constructor() {
        this.opcoes = [];
    }
    adicionarOpcao(opcao) {
        this.opcoes.push(opcao);
    }
    imprimirOpcoes() {
        this.opcoes.forEach(opcao => opcao.imprimir());
    }
}
let p1 = new Personagem('Saruman');
let p2 = new Personagem('Elrond');
let m1 = new Mapa('Deserto');
let m2 = new Mapa('Floresta');
let menu = new Menu(); // passando o tipo personagem. Tendo um menu generico
menu.adicionarOpcao(p1);
menu.adicionarOpcao(p2);
menu.imprimirOpcoes();

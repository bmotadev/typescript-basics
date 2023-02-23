"use strict";
class Personagem {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }
    caminhar(movimento) {
        console.log(`${this.nome} caminhou ${movimento.passos} passos para ${movimento.direcao}`);
    }
}
// new instancia uma classe
// uma instancia de uma classe é um objeto. No caso um objeto do tipo personagem
let gandalf = new Personagem('Gandalf', 'Mago');
let legolas = new Personagem('Legolas', 'Elfo');
gandalf.caminhar({ direcao: "cima", passos: 5 });
legolas.caminhar({ direcao: "baixo", passos: 3 });

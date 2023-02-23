"use strict";
let p1;
p1 = {
    nome: 'Gandalf',
    tipo: 'Mago',
    caminhar: () => {
        console.log('Personagem caminhou.');
    }
};
p1.caminhar();
class Mago {
    constructor(nome) {
        this.nome = nome;
        this.tipo = 'Mago';
    }
    caminhar() {
        console.log('O mago caminhou usando magia.');
    }
}
class Elfo {
    constructor(nome) {
        this.nome = nome;
        this.tipo = 'Elfo';
    }
    caminhar() {
        console.log('O elfo caminhou saltando.');
    }
}
let gandalf = new Mago('Gandalf');
gandalf.caminhar();
let player1;
player1 = new Mago('Gandalf');
player1 = new Elfo('Legolas');
player1.caminhar();

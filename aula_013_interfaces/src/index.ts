// INTERFACES é mais uma forma de definir um tipo customizado, declarando a sua forma. Caracteristicas e comportamentos.
// Interfaces podem ser implementadas pelas classes
interface Personagem {
    nome: string; //propriedades
    tipo: string;

    caminhar() : void; //comportamento
}

let p1 : Personagem;

p1 = { //objeto
    nome: 'Gandalf',
    tipo: 'Mago',
    caminhar: () => { // função anonima
        console.log('Personagem caminhou.');
    }
};

p1.caminhar();

class Mago implements Personagem { // classe que respeita a forma que foi definida na interface e especializa o comportamento
    nome: string;
    tipo: string;

    constructor(nome: string) {
        this.nome = nome;
        this.tipo = 'Mago';
    }

    caminhar(): void { 
        console.log('O mago caminhou usando magia.');
    }

}

class Elfo implements Personagem{
    nome: string;
    tipo: string;

    constructor(nome: string) {
        this.nome = nome;
        this.tipo = 'Elfo';
    }

    caminhar() : void{
        console.log('O elfo caminhou saltando.');
    }
}

let gandalf = new Mago('Gandalf');

gandalf.caminhar();

let player1 : Personagem;

player1 = new Mago('Gandalf');
player1 = new Elfo('Legolas');

player1.caminhar();
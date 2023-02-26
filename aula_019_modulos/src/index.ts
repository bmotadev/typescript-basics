// generics: permite que uma classe ou interface manipulem um determinado tipo de dados. Porém esse tipo de dados só é definido no momento em que instanciamos a classe ou interface.
abstract class OpcaoMenu {
    imprimir() {
        console.log(this);
    }
}


class Personagem extends OpcaoMenu {
    nome: string;
    constructor(nome: string) {
        super();// apos fazer a herança passar o metodo super
        this.nome = nome;
    }
    
    imprimir(): void {
        console.log(`${this.nome}`);
    }
}

class Armamento {

}

class Mapa {
    clima: string;
    constructor(clima: string) {
        this.clima = clima;
    }
}

class Menu<T extends OpcaoMenu> { //<T> define como tipo generico e herda imprimir do opcaomenu
    private opcoes: T[] = [];

    adicionarOpcao(opcao: T) {
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

let menu = new Menu<Personagem>(); // passando o tipo personagem. Tendo um menu generico

menu.adicionarOpcao(p1);
menu.adicionarOpcao(p2);

menu.imprimirOpcoes();
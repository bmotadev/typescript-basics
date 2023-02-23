// type é um tipo customizado com valores proprios. Podendendo ser definido no lugar do tipo string etc
type Direcao = "cima" | "baixo" | "esquerda" | "direita";

type Movimento = {
    direcao: Direcao;
    passos: number;
}

// function caminhar(direcao: Direcao, passos: number) {
//     if (direcao == "cima" || direcao == "baixo" || direcao == "esquerda" || direcao == "direita"){
//         console.log(`O personagem caminhou ${passos} passos para ${direcao}`);
//     }
// }

function caminhar(movimento: Movimento) {
        console.log(`O personagem caminhou ${movimento.passos} passos para ${movimento.direcao}`);
}

// caminhar("cima", 5);
// caminhar("baixo", 4);
// caminhar("esquerda", 8);

caminhar({ direcao: "cima", passos: 5});
caminhar({ direcao: "direita", passos: 6});
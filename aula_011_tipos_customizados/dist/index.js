"use strict";
// function caminhar(direcao: Direcao, passos: number) {
//     if (direcao == "cima" || direcao == "baixo" || direcao == "esquerda" || direcao == "direita"){
//         console.log(`O personagem caminhou ${passos} passos para ${direcao}`);
//     }
// }
function caminhar(movimento) {
    console.log(`O personagem caminhou ${movimento.passos} passos para ${movimento.direcao}`);
}
// caminhar("cima", 5);
// caminhar("baixo", 4);
// caminhar("esquerda", 8);
caminhar({ direcao: "cima", passos: 5 });
caminhar({ direcao: "direita", passos: 6 });

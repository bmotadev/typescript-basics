// modulo(importação/exportação): uma forma de dividir o codigo em porções que façam sentido contextualmente.
import { Elfo } from "./personagens/elfo";
import { Mago } from "./personagens/mago";


let p1 = new Mago('Saruman');
let p2 = new Elfo('Elrond');


console.log(p1);
console.log(p2);

p1.caminhar();
p2.caminhar();

p1.atacar();
p2.atacar();
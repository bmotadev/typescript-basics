// modulo: uma forma de dividir o codigo em porções que façam sentido contextualmente.
import { TipoPersonagem } from "./enums/tipo_personagem";
import { Mago } from "./personagens/mago";
import { Personagem } from "./personagens/personagem";



// uma classe abstrata contem caracteristicas e comportamentos que devem ser herdados por outras classes. Mas ela por si só, não pode ser instanciada.






let p1 = new Mago('Saruman');
let p2 = new Elfo('Elrond');


console.log(p1);
console.log(p2);

p1.caminhar();
p2.caminhar();

p1.atacar();
p2.atacar();
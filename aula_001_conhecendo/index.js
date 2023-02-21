var Cliente = /** @class */ (function () {
    function Cliente(id, nome) {
        this.Nome = nome;
        this.Id = id;
    }
    return Cliente;
}());
var c1 = new Cliente(1, 'Bruno'); // instancia do objeto
console.log(c1.Id, c1.Nome); // imprimindo as propriedades do objeto no console

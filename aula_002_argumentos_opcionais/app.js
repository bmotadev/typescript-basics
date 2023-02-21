var Cliente = /** @class */ (function () {
    function Cliente(id, nome) {
        this.Id = id;
        this.Nome = nome;
    }
    return Cliente;
}());
var c = new Cliente(1, 'Bruno');
console.log(c.Id, c.Nome);

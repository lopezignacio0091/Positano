export default class PedidoDto {

    static nombre;
    static id;
    static gustos;
    static precio;
    static idPedido;
    static color;

    constructor(nombre,id,idPedido,precio){
      this.nombre = nombre;
      this.precio = precio;
      this.id = id;
      this.gustos = [];
      this.idPedido = idPedido;
      this.color = "primary"

    }
  

     static getNombre() {
      return this.nombre;
    }

    static getIdPedido() {
        return this.idPedido;
      }
      static getNombre() {
        return this.nombre;
      }
   
  
    static getId(){
        return this.id;
    }

    static getGustos(){
        return this.gustos;
    }

    static getColor(){
        return this.color;
    }

    
    static remove(gusto){
       return  this.gustos.filter(elem => elem.Nombre == gusto);
    }

  }
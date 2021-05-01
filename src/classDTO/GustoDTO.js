

export default class GustoDto {

  static nombre;
  static id;
  static stock; 
  static seleccionado=false;

  constructor(nombre,stock,id){
    this.nombre = nombre;
    this.stock = stock;
    this.id = id;
  }
   

   static getNombre() {
    return this.nombre;
  }

  static getStock() {
    return this.stock;
  }
  
  static getId(){
      return this.id;
  }

  static getSeleccionado(){
      return this.seleccionado;
  }

  static setSeleccionado(val){
      this.seleccionado = val; 
  }

}

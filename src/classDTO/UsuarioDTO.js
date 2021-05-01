

export default class GustoDto {

    static nombre;
    static id;
    static telefono;
    static domicilio;
  
    constructor(nombre,telefono,domicilio,id){
      this.nombre = nombre;
      this.telefono = telefono;
      this.domicilio = domicilio;
      this.id = id;

    }

     static getNombre() {
      return this.nombre;
    }
    static getDomicilio() {
        return this.domicilio;
      }

      static getTelefono() {
        return this.telefono;
      }  
  
    static getId(){
        return this.id;
    }
  
  }
  
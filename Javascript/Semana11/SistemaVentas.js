class Producto{                                         //video 1 @RodriGBorges
    static contadorProductos = 0;
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    get nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this.precio;
    }

    toString(){ //Template literals: Nos permite insertar código dinamicamente
        return `idProducto : ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}`;
    }
}//Fin de la clase Producto

class Orden{                                            //video 4 @lucianocr21
    static contadorOrdenes = 0;
    static getMax_PRODUCTOS(){//Simula una constante
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get _idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.getMax_PRODUCTOS()){
            this._productos.push(producto); //Tenemos 2 tipos de sintaxis: 1
            //this._productos.[this._contadorProductosAgregados++] = producto; //segunda sintaxis
        }
        else{
            console.log('No se pueden agregar mas productos');
        }
    }//Fin del método agregarProducto

    cacularTtotal(){                                    // video 5-6 @23nicolas
        let totalVenta = 0;
        for(Let producto of this._productos){
            totalVenta += producto.precio;
        }//Fin ciclo for
        return totalVenta;
    }//Fin del método calcularTotal
    
    mostrarOrden(){
        let productosOrden = ' ';
        for(Let producto of this._productos){
            productosOrden += '[\n{ '+producto.toString()+' }';
            }//Fin del ciclo for
            console.log(`Orden: ${this._idOrden}, Total: $${this.calcularTotal()}, Productos: ${productosOrden}`);
    }//Fin método mostrarOrden
}//Fin de la clase Orden

let producto1 = new Producto('Pantalon', 200);          //video 3 @waltermoya
let producto2 = new Producto('Camisa', 150);
let producto3 = new Producto('Cinturón', 50);
let orden1 = new Orden();
let orden2 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden1.mostrarOrden();
orden2.mostrarOrden();

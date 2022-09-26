class producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

let productos = [];
productos.push(new producto("1", "Jabón exfoliante", 550));
productos.push(new producto("2", "Aceite de cutículas", 400));
productos.push(new producto("3", "Rimmel extra volumen", 799));
productos.push(new producto("4", "Set peine + colitas", 1200));

function operaciones(op) {
  if (op === "suma") {
    return (x, y) => x + y;
  }
  if (op === "iva") {
    return (x) => x * 0.21;
  }
  if (op === "multiplicacion") {
    return (x, y) => x * y;
  }
}

let suma = operaciones("suma");
let iva = operaciones("iva");
let multiplicacion = operaciones("multiplicacion");

const esResponsableInscripto = (precioNeto, calculoIva, precioBruto) => { //Bueeeena esa arrowFunction
  let sujeto = prompt("Es usted responsable inscripto?").toUpperCase();

  if (sujeto === "SI") {
    alert(`Su total es $${precioNeto}+ $${calculoIva} (iva) = $${precioBruto}`);
  } else if (sujeto === "NO") {                         //Esto es mas cortito
    alert(`Su total es $${precioBruto} (iva incluido)`);
  } else {
    alert("Por favor ingrese Si o No!");
    esResponsableInscripto(precioNeto, calculoIva, precioBruto);
  }
};

alert("Bienvenido a la tienda!");

let mensaje = "BeautyHome - Nuestros productos: \n";
productos.forEach((item) => {
  mensaje += ` ${item.id}- ${item.nombre} a $${item.precio},\n`;
});
alert(mensaje);

let eleccion = parseInt(prompt("Ingrese el número del producto deseado:"));
while (!eleccion || eleccion > 4) {
  alert("El numero ingresado no corresponde a ningún producto");
  cantidad = parseInt(prompt("Ingrese el número del producto deseado:"));
}
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades (máx 10.)"));
while (!cantidad || cantidad > 10) {
  alert("Seleccione una cantidad de 1 a 10");
  cantidad = parseInt(prompt("Ingrese la cantidad de unidades (máx 10.)"));
}

let anterior = (x) => x - 1;
let indice = anterior(eleccion);

let resumen = `Usted ha seleccionado ${cantidad} unidades de ${productos[indice].nombre}`;
alert(resumen);
let precio = productos[indice].precio;

let precioNeto = multiplicacion(precio, cantidad);
let calculoIva = iva(precioNeto);
let precioBruto = suma(precioNeto, calculoIva);

esResponsableInscripto(precioNeto, calculoIva, precioBruto);
const productos = [
  { id: "A", nombre: "jabon exfoliante", precio: 550 },
  { id: "B", nombre: "aceite de cuticulas", precio: 400 },
  { id: "C", nombre: "rimel extra volumen", precio: 799 },
  { id: "D", nombre: "set peine + colitas", precio: 1200 },
];
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

const esResponsableInscripto = (precioNeto, calculoIva, precioBruto) => {
  let sujeto = prompt("Es usted responsable inscripto?").toUpperCase();

  if (sujeto === "SI") {
    let recibo = `Su total es $${precioNeto}+ $${calculoIva} (iva) = $${precioBruto}`;
    alert(recibo);
  } else if (sujeto === "NO") {
    let recibo = `Su total es $${precioBruto} (iva incluido)`;
    alert(recibo);
  } else {
    alert("Por favor ingrese Si o No!");
    esResponsableInscripto(precioNeto, calculoIva, precioBruto);
  }
};

alert("Bienvenido a la tienda!");
let mensaje = "BeautyHome - Nuestros productos: \n;";
productos.forEach((item) => {
  mensaje += ` ${item.id}- ${item.nombre} a $${item.precio},\n`;
});
alert(mensaje);
let eleccion = prompt("Ingrese la inicial del producto:");

let cantidad = parseInt(prompt("Ingrese la cantidad de unidades (máx 10.)"));
while (!cantidad || cantidad > 10) {
  alert("Seleccione una cantidad de 1 a 10");
  cantidad = parseInt(prompt("Ingrese la cantidad de unidades (máx 10.)"));
}

if (eleccion.toUpperCase() === "A") {
  let resumen = ` Usted ha seleccionado ${cantidad} unidades de ${productos[0].nombre}`;
  alert(resumen);
  let precio = productos[0].precio;

  let precioNeto = multiplicacion(precio, cantidad);
  let calculoIva = iva(precioNeto);
  let precioBruto = suma(precioNeto, calculoIva);

  esResponsableInscripto(precioNeto, calculoIva, precioBruto);
} else if (eleccion.toUpperCase() === "B") {
  let resumen = ` Usted ha seleccionado ${cantidad} unidades de ${productos[1].nombre}`;
  alert(resumen);
  let precio = productos[1].precio;

  let precioNeto = multiplicacion(precio, cantidad);
  let calculoIva = iva(precioNeto);
  let precioBruto = suma(precioNeto, calculoIva);

  esResponsableInscripto(precioNeto, calculoIva, precioBruto);
} else if (eleccion.toUpperCase() === "C") {
  let resumen = ` Usted ha seleccionado ${cantidad} unidades de ${productos[2].nombre}`;
  alert(resumen);
  let precio = productos[2].precio;

  let precioNeto = multiplicacion(precio, cantidad);
  let calculoIva = iva(precioNeto);
  let precioBruto = suma(precioNeto, calculoIva);

  esResponsableInscripto(precioNeto, calculoIva, precioBruto);
} else if (eleccion.toUpperCase() === "D") {
  let resumen = ` Usted ha seleccionado ${cantidad} unidades de ${productos[3].nombre}`;
  alert(resumen);
  let precio = productos[3].precio;

  let precioNeto = multiplicacion(precio, cantidad);
  let calculoIva = iva(precioNeto);
  let precioBruto = suma(precioNeto, calculoIva);

  esResponsableInscripto(precioNeto, calculoIva, precioBruto);
} else {
  alert("La letra ingresada no corresponde a ningun producto");
}

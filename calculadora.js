// crearmos el evento form para que escuche los cambios en el formulario

sum = document.getElementById('suma');

let checkbox = document.getElementById('wantDiseño');

let unidades = document.getElementById('unitIs');

const form = document.getElementById('form');


form.addEventListener('change', function() {

    let costoDiseño = 0;

    if (checkbox.checked){
        costoDiseño = 35;
    }
    // Se agregara el valor adicional por el diseño
    sum.innerHTML = "Aditional value for the artwork: $" + costoDiseño + " dollars";

    //imprime la unidad seleccionada
    let units = document.getElementById('unit');
    let imprimeUnidad = units.value;
    unidades.innerHTML = "the unit in which you will measure your product is " + imprimeUnidad;

    console.log('algo paso en el formulario');

});

// Interaccion con html dentro de la funcion que va a sacar el resultado del calculo, se cambiara la ecuacion por una que calcule el precio del area cuadrada más el shipping

let pulgadasSobreCentimetro = 39e-2;
// pulgadaSobreCentimetro fue creada para multiplicar por cm y sacar pulgadas, le saque  de la ecuacion por que el cliente pone las unidades en pulgadas, en teoria

var precioPieAlCuadrado = 5;
let pulgadaSobrePie = 12;

var precioPulgadaAlCuadrado = precioPieAlCuadrado / pulgadaSobrePie;

function calculoX(){
    let l = document.getElementById("longitud");
    let w = document.getElementById("ancho");
    var length = l.value;
    var width = w.value;

    let units = document.getElementById('unit');
    let imprimeUnidad = units.value;

    var lengthPulgadas = length;
    var widthPulgadas = width;

    let areaPulgada = lengthPulgadas * widthPulgadas;
    let calcularAdhesive = calcAdhesiV(areaPulgada);

    y = document.getElementById("area");
    y.innerHTML = "The price at inches of your Adeshive Vinyl is: $" + calcularAdhesive + " Dollars";

    let imprimirArea = document.getElementById('areaPie');

    imprimirArea.innerHTML = "The area of your product is " + areaPulgada + " " + imprimeUnidad + "^2";
}

// calculamos el valor de y, o el area, utilizando la funcion Math.sqrt para calcular la raiz
//hare una funcion que calcule el valor total por la unidad seleccionada

function calcAdhesiV(areaPulgada){
    let units = document.getElementById('unit');
let imprimeUnidad = units.value;
    const precioXUnidad = () => {
    if(imprimeUnidad === 'Inches') {
        let precioPorAreaSeleccionada = precioPulgadaAlCuadrado;
        // inches varia el resultado debe ser dividido para 12;
        return precioPorAreaSeleccionada;
    }
    if(imprimeUnidad === 'Feets') {
        let precioPorAreaSeleccionada = precioPieAlCuadrado;
        return precioPorAreaSeleccionada;
    }
}
    let validarPrecioPorUnidad = precioXUnidad();

    const calculoPorUnidadSeleccionada = (validarPrecioPorUnidad) => {
        if(imprimeUnidad === 'Inches') {
            let parentesis = (areaPulgada * validarPrecioPorUnidad) / pulgadaSobrePie;
            return parentesis;
        }
        if(imprimeUnidad === 'Feets') {
            let parentesis = areaPulgada * validarPrecioPorUnidad;
            return parentesis;
        }
    }
    
    console.log("precio por unidad es " + validarPrecioPorUnidad);
    var resultado = calculoPorUnidadSeleccionada(validarPrecioPorUnidad);
    return resultado;
}


// voy a añadir respuesta al añadir una width y un heigth y limite segun unidad seleccionada


// crear una promesa que cuanto este este listo la respuesta crear una segunda respuesta más abajo
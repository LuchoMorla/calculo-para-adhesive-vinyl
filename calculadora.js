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
    sum.innerHTML = "Aditional value for the desing: " + costoDiseño + " dollars";

    //imprime la unidad seleccionada
    let units = document.getElementById('unit');
    let imprimeUnidad = units.value;
    unidades.innerHTML = imprimeUnidad;

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
    y.innerHTML = "The price at inches of your Adeshive Vinyl is: " + calcularAdhesive + " $ Dollars/" + imprimeUnidad + "^2";

}

//funcion para imprimir el valor en pies

function imprimirEnPies(calcularAdhesive) {
    let l = document.getElementById("longitud");
    let w = document.getElementById("ancho");
    var length = l.value;
    var width = w.value;

    var lengthPulgadas = length;
    var widthPulgadas = width;

    let units = document.getElementById('unit');
    let imprimeUnidad = units.value;
    
    let areaPulgada = lengthPulgadas * widthPulgadas;
    let calcularAdhesive2 = calcAdhesiV(areaPulgada);

    let enviarAImprimirEnPie =  calcularAdhesive2 / pulgadaSobrePie;

    var sitioParaValorEnPie = document.getElementById("areaPie");
    sitioParaValorEnPie.innerHTML = "resultado del precio en pies(Feets): " + enviarAImprimirEnPie + "$ Dollars/" + imprimeUnidad + "^2";
}

// calculamos el valor de y, o el area, utilizando la funcion Math.sqrt para calcular la raiz

function calcAdhesiV(areaPulgada){
    let units = document.getElementById('unit');
let imprimeUnidad = units.value;
    const precioXUnidad = () => {
    if(imprimeUnidad === 'Inches') {
        let precioPorAreaSeleccionada = precioPulgadaAlCuadrado;
        return precioPorAreaSeleccionada;
    }
    if(imprimeUnidad === 'Feets') {
        let precioPorAreaSeleccionada = precioPieAlCuadrado;
        return precioPorAreaSeleccionada;
    }
}
    let validarPrecioPorUnidad = precioXUnidad();
    console.log(validarPrecioPorUnidad);
    let parentesis = areaPulgada * validarPrecioPorUnidad;
    return parentesis
}

//hare una funcion que sume el total de los valores


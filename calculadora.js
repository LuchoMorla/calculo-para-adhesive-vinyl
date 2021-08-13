// Se agregara el valor adicional por el diseño

function sumar(respuesta){
    sum = document.getElementById('suma');
    if(respuesta > 0){
     sum.innerHTML = "Aditional value for the desing: " + respuesta + "dollars";
    } else if(respuesta = 0) {
     sum.innerHTML = "Aditional value for the desing: " + 0 + "dollars";
    }
 }
 

// Validaremos el checkbox en el que le preguntamos al cliente si quiere incluir el diseño de su producto

function validar() {
    var checkbox = document.getElementById('wantDiseño');
    checkbox.addEventListener('change', validar, false);
    var checked = checkbox.checked;
    if(checked){
        respuesta = 35;
    }else{
        respuesta = 0;
    }
    sumar(respuesta);
}
// funcion para imprimir el precio por


// hare una funcion que calcule el precio del shipping segun la cantidad querida
function theShippingPrice(areaPulgada) {
    var shippingPrice = getElementById("precioShipping");

    function elegirShipping(areaPulgada){
    if ( areaPulgada => 1 && areaPulgada <= 3 ) {
        return shippingUnoA3;
    } else if ( areaPulgada => 4 && areaPulgada <= 6 ) {
        return shipping4a6;
    } else if ( areaPulgada => 7 && areaPulgada <= 9 ) {
        return shipping7a9;
    } else if ( areaPulgada < 9 ) {
        return shipping10aDelante;
    }
}
    var theShippingIs = elegirShipping(areaPulgada);
    var imprimirShippingPrice = theShippingIs;
    shippingPrice.innerHTML = "El precio del shipping por la cantidad de area pulgada necesitada es: " + imprimirShippingPrice + " Pulgada";
} 

// Interaccion con html dentro de la funcion que va a sacar el resultado del calculo, se cambiara la ecuacion por una que calcule el precio del area cuadrada más el shipping

let pulgadasSobreCentimetro = 39e-2;
// pulgadaSobreCentimetro fue creada para multiplicar por cm y sacar pulgadas, le saque  de la ecuacion por que el cliente pone las unidades en pulgadas, en teoria
let shippingUnoA3 = 30;
let shipping4a6 = 20;
let shipping7a9 = 10;
let shipping10aDelante = 5;

var precioPieAlCuadrado = 5;
let pulgadaSobrePie = 12;

var precioPulgadaAlCuadrado = precioPieAlCuadrado / pulgadaSobrePie;

function calculoX(){
    let l = document.getElementById("longitud");
    let w = document.getElementById("ancho");
    var length = l.value;
    var width = w.value;

    var haveDesing = validar();

    var lengthPulgadas = length;
    var widthPulgadas = width;

    let areaPulgada = lengthPulgadas * widthPulgadas;
    let calcularAdhesive = calcAdhesiV(areaPulgada, haveDesing);

    y = document.getElementById("area");
    y.innerHTML = "The price in inches of your Adeshive Vinyl is: " + calcularAdhesive + " $ Dolares";
    
    var thePriceOfShipping =  theShippingPrice(areaPulgada);
}
console.log(imprimirShippingPrice);
// calculamos el valor de y, o el area, utilizando la funcion Math.sqrt para calcular la raiz

function calcAdhesiV(areaPulgada){
    let parentesis = areaPulgada * precioPulgadaAlCuadrado;
    return parentesis
}

//hare una funcion que sume el total de los valores


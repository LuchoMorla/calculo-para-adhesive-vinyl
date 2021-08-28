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

// creo que el haveDesing no deberia ir ahi ni tampoco más abajo

    var haveDesing = validar();

    var lengthPulgadas = length;
    var widthPulgadas = width;

    let areaPulgada = lengthPulgadas * widthPulgadas;
    let calcularAdhesive = calcAdhesiV(areaPulgada, haveDesing);

    y = document.getElementById("area");
    y.innerHTML = "The price at inches of your Adeshive Vinyl is: " + calcularAdhesive + " $ Dollars/Inches^2";

    var thePriceOfShipping =  theShippingPrice(areaPulgada);
}

//funcion para imprimir el valor en pies

function imprimirEnPies(calcularAdhesive) {
    let l = document.getElementById("longitud");
    let w = document.getElementById("ancho");
    var length = l.value;
    var width = w.value;

    var lengthPulgadas = length;
    var widthPulgadas = width;
    
    let areaPulgada = lengthPulgadas * widthPulgadas;
    let calcularAdhesive2 = calcAdhesiV(areaPulgada);

    let enviarAImprimirEnPie =  calcularAdhesive2 / pulgadaSobrePie;

    var sitioParaValorEnPie = document.getElementById("areaPie");
    sitioParaValorEnPie.innerHTML = "resultado del precio en pies(Feets): " + enviarAImprimirEnPie + "$ Dollars/Feet^2"
}

// calculamos el valor de y, o el area, utilizando la funcion Math.sqrt para calcular la raiz

function calcAdhesiV(areaPulgada){
    let parentesis = areaPulgada * precioPulgadaAlCuadrado;
    return parentesis
}

//hare una funcion que sume el total de los valores


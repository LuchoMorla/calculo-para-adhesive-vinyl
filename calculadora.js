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

// Interaccion con html dentro de la funcion que va a sacar el resultado del calculo

let pulgadasSobreCentimetro = 39e-2;

function calculoX(){
    let l = document.getElementById("longitud");
    let w = document.getElementById("ancho");
    var length = l.value;
    var width = w.value;

    var haveDesing = validar();

    var lengthPulgadas = length * pulgadasSobreCentimetro;
    var widthPulgadas = width * pulgadasSobreCentimetro;

    let x = lengthPulgadas * widthPulgadas;
    let calcularAdhesive = calcAdhesiV(x, haveDesing);

    y = document.getElementById("area");
    y.innerHTML = "The 'value:¿Cual era el resultado?' of your Adeshive Vinyl is: " + calcularAdhesive; + " Inches"
}

// calculamos el valor de y, o el area, utilizando la funcion Math.sqrt para calcular la raiz

function calcAdhesiV(x){
    let parentesis = (Math.sqrt(x * 2) * 21)
    return parentesis
}


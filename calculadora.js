// Interaccion con html dentro de la funcion que va a sacar el resultado del calculo

function calculoX(){
    let l = document.getElementById("longitud");
    let w = document.getElementById("ancho");
    let length = l.value;
    let width = w.value;

    let x = length * width;
    let calcularAdhesive = calcAdhesiV(x);

    console.log(calcularAdhesive);

    y = document.getElementById("area");
    y.innerHTML = "El resultado de Y o del area es: " + calcularAdhesive;
}

// calculamos el valor de y, o el area, utilizando la funcion Math.sqrt para calcular la raiz

function calcAdhesiV(x){
    let parentesis = (Math.sqrt(x * 2) * 21)
    return parentesis + 50;
    console.log(parentesis);
}
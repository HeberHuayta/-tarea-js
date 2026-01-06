
function verificarNumero(num){
    return (num !== null && (num.trim() === "" || isNaN(num)));
}




function solicitarNumero() {
    let numero = prompt("ingrese un numero");

        while (verificarNumero(numero)){

            numero = prompt("Error. ingrese un numero");

        }

    return numero;
}


function solicitarNumeroPositivo() {
    let numero = prompt("ingrese un numero positivo");

        while(verificarNumero(numero) || Number(numero) < 0){

            numero = prompt("Eror. ingrese un numero positivo");

        }

    return numero;
}


function promediar(){

    let sumatoria = 0;

    let cantidadNumeros = prompt("ingrese la cantidad de numeros a promediar");

    while(verificarNumero(cantidadNumeros)){

        cantidadNumeros = prompt("Eror. ingrese la cantidad de numeros a promediar");

    }

    for(let i = 1; i <= Number(cantidadNumeros); i++){

        let numeros = prompt("ingrese el " + i + "° numero");

        while(verificarNumero(numeros)){

            numeros = prompt("Error. ingrese el " + i + "° numero");

        }

        sumatoria = sumatoria + Number(numeros);
    }

    let promedio = sumatoria / Number(cantidadNumeros);

    return promedio;
}


function validarNumeroPostivoEntero(numero){  
    
    let bool= true;

    numero = String(numero);

    if(verificarNumero(numero) || Number(numero) < 0 || Number(numero) !== parseInt(numero)){
        
        bool = false;
    }

    return bool;
}


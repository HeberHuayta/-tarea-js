function solicitarNumero(){
    let numero = Number(prompt("ingrese un numero"));

    while( !numero || isNaN(numero) ){

        numero = Number(prompt("ingrese un numero"));

    }

    return numero;
}

let numero = solicitarNumero(); 

console.log(numero);
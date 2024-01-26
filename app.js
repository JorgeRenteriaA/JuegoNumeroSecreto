let numeroAleatorio = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
};

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    /*console.log(typeof(numeroUsuario));
    console.log(numeroUsuario);
    
    console.log(numeroUsuario === numeroAleatorio)
    console.log(intentos);*/
    if(numeroUsuario === numeroAleatorio){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez':'veces'}, felicidades!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intento').setAttribute('disabled','true');
    }else{
        //El usuario no acerto
        if (numeroUsuario > numeroAleatorio){
            asignarTextoElemento('p','El numero secreto es menor');
        }
        else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
};

//# es como getElementById
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumero() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumero();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function inicializacion(){
    asignarTextoElemento('h1',"Juego del número secreto");
    asignarTextoElemento('p',`Ingresa un número del 1 al ${numeroMaximo}`);
    intentos=1;
    numeroAleatorio = generarNumero();
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //generar numero aleatorio, reiniciar intentos
    inicializacion();
    //deshabilitar nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    document.getElementById('intento').removeAttribute('disabled');
}

inicializacion();

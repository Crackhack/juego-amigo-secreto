// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];

//aqui se agrega el nombre del amigo en el array
function agregarAmigo(){

    let nombreDeUsuario = document.getElementById('amigo').value;

    console.log(nombreDeUsuario);

    if (nombreDeUsuario == "" | nombreDeUsuario == " ") {
        alert("Por Favor, Inserte un Nombre");
        
    }else{
        amigos.push(nombreDeUsuario);// los nombres se agrega al array
        mostrarTexto();// mostrar  lista de nombres
        limpiarCaja();// limpiar caja
    }

}

//funcion limpiar 
function limpiarCaja() {
    document.querySelector('#amigo').value='';
}

// aqui se limpia el campo si es que hay algo  y 
// posterior se va agregando el texto de cada nombre 
// cada que se precione el boton "Anadir"
function mostrarTexto(){
    const lista=document.getElementById("listaAmigos");
    lista.innerHTML="";
    for (let i = 0; i < amigos.length; i++) {
        const elemento = document.createElement('li');
        elemento.textContent = amigos[i];
        lista.appendChild(elemento);
    }
    
}

//funcion de Math Random
function sortearAmigo() {
    const lista=document.getElementById("listaAmigos");
    lista.innerHTML=""; // Aqui vaciamos el texto

    if (amigos.length == "") {
        alert("Agrega un Amigo");// En caso que no haya nada y precionas manda una alerta
    }else{
        let amigoSecreto =Math.floor(Math.random()*amigos.length)+1;
        console.log(amigoSecreto) // Aqui se realiza el numero random de acuerdo a logitud del array

        let nombreAmigo =document.getElementById('resultado');
        nombreAmigo.innerHTML =`El amigo Screto Sorteado es: ${amigos[amigoSecreto-1]}`;

    }
}


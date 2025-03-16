// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    //Seleccionamos el input completo
    let inputAmigo = document.getElementById("amigo");
    //Obtenemos el valor del  input
    let nombreAmigo = inputAmigo.value;
    
    //validar si está vacio
    if(nombreAmigo === ""){
        alert("Por favor, inserte un nombre.")
    } else {
        //agregar el nombre  al array
            amigos.push(nombreAmigo);
            inputAmigo.value = "";
            listaDeAmigos(amigos);
        }
    
}
listaDeAmigos(amigos);

function listaDeAmigos(listaAmigos){
    let enlistados  = document.getElementById("listaAmigos")
    enlistados.innerHTML =  "";
    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement('li'); // Crear un nuevo <li>
        li.textContent = listaAmigos[i]; // Asignarle el nombre del amigo
        enlistados.appendChild(li); // Agregarlo a la lista en el HTML
    }       
}

listaDeAmigos(amigos);

function sorteSecreto (){
    if(amgios === ""){
        alert("No hay amigos para sortear);
            return;
    }
}
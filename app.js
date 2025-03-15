// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;
    
    if(nombreAmigo === ""){
        alert("Por favor, inserte un nombre.")
    } else {
            amigos.push(nombreAmigo);
            inputAmigo.value = "";
            listaDeAmigos(amigos);
        }
    
}
listaDeAmigos(amigos);

function listaDeAmigos(listaAmigos){
    let enlistados  = document.getElementById("listaAmigos")
    enlistados.innerHTML =  "";
    for(let i = 0; i < listaAmigos.length; i++)  {
        let li = document.createElement('li');
        li.textContent = listaAmigos[i];
        enlistados.appendChild(li);
        }
}

listaDeAmigos(amigos);

let amigos=[];


function agregarAmigo(){
    
    nombre = document.getElementById("amigo").value.trim(); // con el trim me aseguro de que no haya espacios
    if (nombre == ""){
        alert("El nombre no puede quedar vacío, por favor intente de nuevo.");
        return;
    }else{
        amigos.push(nombre);
        //console.log("Ingresé el amigo a la lista")
        //alert("El nombre se registró");
    } 

        //console.log("Presiono")

    //console.log(amigos);
    limpiarInput();
    mostrarListaPantalla();
        
}


function limpiarInput(){
    document.querySelector('#amigo').value="";
}

function mostrarListaPantalla(){


    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = ""; //si no la limpio, se van a ir duplicando datos

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`; //debo agregar al elemento del html la iteración en amigos, así puedo mostrar los elementos hacia abajo
        
    }
}


function sortearAmigo(){

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "";
    console.log("Área de resultados limpia.");
    listaAmigos.innerHTML = ""; 
    
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;  
    }

    nombreAleatorio= Math.floor(Math.random()*amigos.length);
    //console.log(nombreAleatorio);

    amigoSorteado= amigos[nombreAleatorio];

    resultado.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;

}


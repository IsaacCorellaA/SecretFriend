// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];


function agregarAmigo(){
    
    nombre = document.getElementById("amigo").value.trim(); // con el trim me aseguro de que no haya espacios
    if (nombre == ""){
        alert("El nombre no puede quedar vacío, por favor intente de nuevo.");
        return;
    }else{
        amigos.push(nombre);
        //console.log("Ingresé el amigo a la lista")
        alert("El nombre se registró");
    } 

        //console.log("Presiono")

    //console.log(amigos);
    limpiarInput();
        
}


function limpiarInput(){
    document.querySelector('#amigo').value="";
}
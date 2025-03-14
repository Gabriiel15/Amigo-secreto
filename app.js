
let Amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    if (nombre) { // Verifica que la lista contenga un elemento
        if (!Amigos.includes(nombre)) { // Corrige aquí: usa includes en lugar de incluides
            Amigos.push(nombre); // Agrega el elemento escrito al array Amigos
            document.getElementById("amigo").value = ""; // Limpia el campo de entrada
            mostrarAmigos(); // Llama a la función para mostrar amigos
        } else {
            alert("Ese nombre ya se agregó");
        }
    } else {
        alert("Favor de colocar un nombre");
    }
}

function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista antes de mostrar nuevos elementos

    // Itera sobre el arreglo Amigos y crea elementos <li>
    for (let i = 0; i < Amigos.length; i++) {
        const li = document.createElement("li"); // Crea un nuevo elemento <li>
        li.textContent = Amigos[i]; // Asigna el nombre del amigo al contenido del <li>
        lista.appendChild(li); // Agrega el <li> a la lista
    }
}

function sortearAmigo() {
    if (Amigos.length === 0) { // Verifica que haya amigos disponibles
        alert("No hay amigos disponibles para sortear.");
        return;
    }

    // Genera un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * Amigos.length);
    
    // Obtiene el nombre sorteado
    const amigoSorteado = Amigos[indiceAleatorio];
    
    // Muestra el resultado
    document.getElementById("resultado").innerHTML = "El amigo secreto es: " + amigoSorteado;
}



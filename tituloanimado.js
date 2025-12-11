// OBTENER LA REFERENCIA AL TÍTULO PRINCIPAL
const tituloPrincipal = document.getElementById('titulo-principal'); 

// 1. Función para activar el brillo
function activarBrilloPrincipal() {
    // Añade la clase CSS 'brillo-epico-activo'
    tituloPrincipal.classList.add('brillo-epico-activo');
    
    // Pausa el movimiento suave (la primera animación)
    tituloPrincipal.style.animationPlayState = 'paused, running'; 
}

// 2. Función para desactivar el brillo
function desactivarBrilloPrincipal() {
    // Remueve la clase CSS 'brillo-epico-activo'
    tituloPrincipal.classList.remove('brillo-epico-activo');
    
    // Reanuda el movimiento suave
    tituloPrincipal.style.animationPlayState = 'running, running';
}

// 3. Asignar los "escuchadores de eventos"
tituloPrincipal.addEventListener('mouseover', activarBrilloPrincipal);
tituloPrincipal.addEventListener('mouseout', desactivarBrilloPrincipal);
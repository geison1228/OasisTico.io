// // 1. Obtener las referencias (debes usar los IDs que están en el HTML)
const tituloEpico = document.getElementById('titulo-epico');
const ctaEpico = document.getElementById('cta-epico');
const slothEmojiEpico = document.getElementById('sloth-emoji-epico');

// 2. Funciones de activación (Activadas al mouseover)
function activarAnimacionEpica() {
    // 2.1 Animación del CTA (Efecto Humo/Vapor)
    ctaEpico.classList.add('cta-activo');
    
    // 2.2 Animación del perezoso (Selva)
    slothEmojiEpico.classList.add('perezoso-activo-epico');
    
    // 2.3 Efecto sutil en el contenedor principal (Brillo de contorno)
    tituloEpico.style.boxShadow = '0 0 20px rgba(94, 207, 19, 0.5)';
    tituloEpico.style.transform = 'scale(1.01)';
}

// 3. Funciones de desactivación (Activadas al mouseout)
function desactivarAnimacionEpica() {
    // 3.1 Restaurar CTA
    ctaEpico.classList.remove('cta-activo');
    
    // 3.2 Restaurar perezoso
    slothEmojiEpico.classList.remove('perezoso-activo-epico');
    
    // 3.3 Restaurar contenedor
    tituloEpico.style.boxShadow = 'none';
    tituloEpico.style.transform = 'scale(1)';
}

// 4. Asignar los "escuchadores de eventos" al título secundario completo
tituloEpico.addEventListener('mouseover', activarAnimacionEpica);
tituloEpico.addEventListener('mouseout', desactivarAnimacionEpica);

//titulo Oais Tico//


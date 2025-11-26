// js/modales.js - Sistema de modales para las etiquetas interactivas

/**
 * Crea y muestra un modal con información específica
 * @param {Object} config - Configuración del modal
 * @param {string} config.titulo - Título del modal
 * @param {string} config.contenido - Contenido del modal
 * @param {string} config.videoYoutube - ID del video de YouTube (opcional)
 */
export function mostrarModal({ titulo, contenido, videoYoutube = null }) {
    // Verificar si ya existe un modal y eliminarlo
    const modalExistente = document.querySelector('.modal-overlay');
    if (modalExistente) {
        modalExistente.remove();
    }

    // Crear el overlay del modal
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';

    // Crear el contenedor del modal
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container';

    // Crear el contenido del modal
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    // Botón de cerrar
    const botonCerrar = document.createElement('button');
    botonCerrar.className = 'modal-close';
    botonCerrar.innerHTML = '×';
    botonCerrar.setAttribute('aria-label', 'Cerrar modal');

    // Título del modal
    const tituloElemento = document.createElement('h2');
    tituloElemento.className = 'modal-titulo';
    tituloElemento.textContent = titulo;

    // Contenido del modal
    const contenidoElemento = document.createElement('p');
    contenidoElemento.className = 'modal-texto';
    contenidoElemento.textContent = contenido;

    // Agregar elementos al modal
    modalContent.appendChild(botonCerrar);
    modalContent.appendChild(tituloElemento);
    modalContent.appendChild(contenidoElemento);

    // Si hay un video de YouTube, agregarlo
    if (videoYoutube) {
        const videoContainer = document.createElement('div');
        videoContainer.className = 'modal-video-container';

        const iframe = document.createElement('iframe');
        iframe.className = 'modal-video';
        iframe.src = `https://www.youtube.com/embed/${videoYoutube}`;
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('loading', 'lazy');

        videoContainer.appendChild(iframe);
        modalContent.appendChild(videoContainer);
    }

    // Ensamblar el modal
    modalContainer.appendChild(modalContent);
    overlay.appendChild(modalContainer);

    // Agregar al DOM con animación
    document.body.appendChild(overlay);

    // Forzar reflow para activar la animación
    overlay.offsetHeight;

    // Activar animación de entrada
    requestAnimationFrame(() => {
        overlay.classList.add('activo');
        modalContainer.classList.add('activo');
    });

    // Configurar eventos de cierre
    configurarEventosCierre(overlay, botonCerrar);

    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';
}

/**
 * Cierra el modal activo
 */
export function cerrarModal() {
    const overlay = document.querySelector('.modal-overlay');
    
    if (overlay) {
        const modalContainer = overlay.querySelector('.modal-container');
        
        // Animación de salida
        overlay.classList.remove('activo');
        modalContainer.classList.remove('activo');

        // Eliminar después de la animación
        setTimeout(() => {
            overlay.remove();
            // Restaurar scroll del body
            document.body.style.overflow = '';
        }, 300);
    }
}

/**
 * Configura los eventos para cerrar el modal
 */
function configurarEventosCierre(overlay, botonCerrar) {
    // Cerrar al hacer clic en el botón X
    botonCerrar.addEventListener('click', cerrarModal);

    // Cerrar al hacer clic fuera del modal
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            cerrarModal();
        }
    });

    // Cerrar con la tecla Escape
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            cerrarModal();
            document.removeEventListener('keydown', handleEscape);
        }
    };

    document.addEventListener('keydown', handleEscape);
}

/**
 * Crea un badge interactivo (botón) que abre un modal
 * @param {string} texto - Texto del badge
 * @param {Object} infoModal - Información del modal
 * @returns {HTMLElement} - Elemento del badge
 */
export function crearBadgeInteractivo(texto, infoModal) {
    const badge = document.createElement('button');
    badge.className = 'badge badge-interactivo';
    badge.textContent = texto;
    badge.setAttribute('type', 'button');
    badge.setAttribute('aria-label', `Ver más información sobre ${texto}`);

    // Agregar ícono de información
    const icono = document.createElement('span');
    icono.className = 'badge-icono';
    icono.textContent = 'ℹ';
    badge.appendChild(icono);

    // Evento click para abrir modal
    badge.addEventListener('click', () => {
        mostrarModal(infoModal);
    });

    return badge;
}
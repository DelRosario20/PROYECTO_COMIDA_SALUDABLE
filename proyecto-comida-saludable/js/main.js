// js/main.js - Lógica principal del carrusel de comidas saludables con AUTOPLAY

// Importar el array de comidas desde data.js
import { comidas } from './data.js';

// Variables de estado
let itemActual = 0;
let bloqueadoScroll = false;
const TIEMPO_BLOQUEO = 800; // Tiempo de bloqueo en milisegundos para evitar scroll múltiple

// ========================================
// NUEVAS VARIABLES PARA AUTOPLAY
// ========================================
let autoplayInterval = null;
let autoplayActivo = true;
const TIEMPO_AUTOPLAY = 2700; // Tiempo entre cambios automáticos (4 segundos)
let botonPlayPause = null;

// Referencias a elementos del DOM
let paginacion = null;
let imagenPrincipal = null;
let tituloComida = null;

// Función de inicialización
function inicializar() {
    // Obtener referencias a los elementos del DOM
    paginacion = document.getElementById('paginacion');
    imagenPrincipal = document.getElementById('imagen-principal');
    tituloComida = document.getElementById('titulo-comida');

    // Verificar que los elementos existen
    if (!paginacion || !imagenPrincipal || !tituloComida) {
        console.error('Error: No se pudieron encontrar los elementos necesarios del DOM');
        return;
    }

    // Poblar la paginación con los números
    poblarPaginacion();

    // Mostrar el primer plato
    mostrarPlato(itemActual);

    // Configurar los event listeners
    configurarEventListeners();

    // ========================================
    // INICIAR AUTOPLAY
    // ========================================
    iniciarAutoplay();
    
    // Crear botón de play/pause
    crearBotonPlayPause();
    
    // Pausar autoplay al hacer hover sobre la imagen
    configurarPausaHover();
}

// ========================================
// FUNCIONES DE AUTOPLAY
// ========================================

/**
 * Inicia el autoplay automático
 */
function iniciarAutoplay() {
    // Limpiar intervalo existente si hay uno
    if (autoplayInterval) {
        clearInterval(autoplayInterval);
    }
    
    // Solo iniciar si autoplay está activo
    if (autoplayActivo) {
        autoplayInterval = setInterval(() => {
            siguientePlato();
        }, TIEMPO_AUTOPLAY);
    }
}

/**
 * Detiene el autoplay
 */
function detenerAutoplay() {
    if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
    }
}

/**
 * Alterna entre play y pause
 */
function toggleAutoplay() {
    autoplayActivo = !autoplayActivo;
    
    if (autoplayActivo) {
        iniciarAutoplay();
        actualizarBotonPlayPause('pause');
    } else {
        detenerAutoplay();
        actualizarBotonPlayPause('play');
    }
}

/**
 * Reinicia el autoplay (útil después de interacciones manuales)
 */
function reiniciarAutoplay() {
    if (autoplayActivo) {
        detenerAutoplay();
        iniciarAutoplay();
    }
}

/**
 * Configura la pausa automática al hacer hover
 */
function configurarPausaHover() {
    const fondoImagen = document.getElementById('fondo-imagen');
    
    if (fondoImagen) {
        // Pausar al entrar con el mouse
        fondoImagen.addEventListener('mouseenter', () => {
            detenerAutoplay();
        });
        
        // Reanudar al salir con el mouse (solo si autoplay está activo)
        fondoImagen.addEventListener('mouseleave', () => {
            if (autoplayActivo) {
                iniciarAutoplay();
            }
        });
    }
}

/**
 * Crea el botón de play/pause
 */
function crearBotonPlayPause() {
    botonPlayPause = document.createElement('button');
    botonPlayPause.id = 'boton-autoplay';
    botonPlayPause.className = 'boton-autoplay';
    botonPlayPause.innerHTML = '⏸'; // Emoji de pausa (porque inicia en play)
    botonPlayPause.title = 'Pausar/Reanudar autoplay';
    
    // Estilos en línea (puedes moverlos al CSS después)
    botonPlayPause.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 30px;
        width: 50px;
        height: 50px;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        color: #ffffff;
        font-size: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        z-index: 1000;
        backdrop-filter: blur(10px);
    `;
    
    // Efectos hover
    botonPlayPause.addEventListener('mouseenter', () => {
        botonPlayPause.style.background = 'rgba(255, 255, 255, 0.2)';
        botonPlayPause.style.transform = 'scale(1.1)';
        botonPlayPause.style.borderColor = 'rgba(76, 175, 80, 0.5)';
    });
    
    botonPlayPause.addEventListener('mouseleave', () => {
        botonPlayPause.style.background = 'rgba(255, 255, 255, 0.1)';
        botonPlayPause.style.transform = 'scale(1)';
        botonPlayPause.style.borderColor = 'rgba(255, 255, 255, 0.2)';
    });
    
    // Click para alternar
    botonPlayPause.addEventListener('click', () => {
        toggleAutoplay();
    });
    
    // Añadir al DOM
    document.body.appendChild(botonPlayPause);
}

/**
 * Actualiza el ícono del botón play/pause
 */
function actualizarBotonPlayPause(estado) {
    if (botonPlayPause) {
        if (estado === 'play') {
            botonPlayPause.innerHTML = '▶️';
            botonPlayPause.title = 'Reanudar autoplay';
        } else {
            botonPlayPause.innerHTML = '⏸';
            botonPlayPause.title = 'Pausar autoplay';
        }
    }
}

// ========================================
// FUNCIONES ORIGINALES (MODIFICADAS)
// ========================================

// Función para poblar la columna de paginación con los números
function poblarPaginacion() {
    paginacion.innerHTML = ''; // Limpiar contenido existente

    comidas.forEach((comida, indice) => {
        const numeroElemento = document.createElement('div');
        numeroElemento.className = 'numero-item';
        numeroElemento.textContent = comida.numero;
        numeroElemento.dataset.indice = indice;

        // Añadir evento click a cada número
        numeroElemento.addEventListener('click', () => {
            itemActual = indice;
            mostrarPlato(itemActual);
            reiniciarAutoplay(); // Reiniciar autoplay después de clic manual
        });

        paginacion.appendChild(numeroElemento);
    });
}

// Función principal para mostrar un plato específico
function mostrarPlato(indice) {
    // Validar índice
    if (indice < 0 || indice >= comidas.length) {
        console.error('Índice fuera de rango');
        return;
    }

    const comidaActual = comidas[indice];

    // Actualizar el número activo en la paginación
    actualizarPaginacionActiva(indice);

    // Añadir efecto de fade más suave a la imagen
    const fondoImagen = document.getElementById('fondo-imagen');
    fondoImagen.style.transition = 'opacity 0.5s ease';
    fondoImagen.style.opacity = '0.7';
    
    setTimeout(() => {
        // Actualizar la imagen
        imagenPrincipal.src = comidaActual.imagen;
        imagenPrincipal.alt = comidaActual.nombre;
        
        // Actualizar el título y su enlace
        tituloComida.textContent = comidaActual.nombre;
        tituloComida.href = `detalle.html?id=${comidaActual.id}`;
        
        // Mostrar la imagen con fade in
        setTimeout(() => {
            fondoImagen.style.opacity = '1';
        }, 50);
    }, 300);

    // Añadir animación al título
    animarTitulo();
}

// Función para actualizar el número activo en la paginación
function actualizarPaginacionActiva(indice) {
    const numeros = paginacion.querySelectorAll('.numero-item');
    
    numeros.forEach((numero, i) => {
        if (i === indice) {
            numero.classList.add('activo');
        } else {
            numero.classList.remove('activo');
        }
    });
}

// Función para animar el título cuando cambia
function animarTitulo() {
    tituloComida.style.animation = 'none';
    setTimeout(() => {
        tituloComida.style.animation = 'fadeIn 0.8s ease';
    }, 10);
}

// Configurar todos los event listeners
function configurarEventListeners() {
    // Event listener para la rueda del mouse
    window.addEventListener('wheel', manejarScroll, { passive: false });

    // Event listeners para teclas de flecha
    window.addEventListener('keydown', manejarTeclas);

    // Event listener para gestos táctiles en dispositivos móviles
    configurarGestosTactiles();

    // Prevenir el scroll predeterminado del navegador
    document.body.addEventListener('wheel', (e) => {
        e.preventDefault();
    }, { passive: false });
}

// Función para manejar el evento de scroll con la rueda del mouse
function manejarScroll(evento) {
    evento.preventDefault();

    // Si el scroll está bloqueado, no hacer nada
    if (bloqueadoScroll) return;

    // Bloquear temporalmente el scroll
    bloqueadoScroll = true;

    if (evento.deltaY > 0) {
        // Scroll hacia abajo - siguiente plato
        siguientePlato();
    } else if (evento.deltaY < 0) {
        // Scroll hacia arriba - plato anterior
        platoAnterior();
    }

    // Reiniciar autoplay después de interacción manual
    reiniciarAutoplay();

    // Desbloquear el scroll después del tiempo especificado
    setTimeout(() => {
        bloqueadoScroll = false;
    }, TIEMPO_BLOQUEO);
}

// Función para manejar navegación con teclas
function manejarTeclas(evento) {
    if (bloqueadoScroll) return;

    switch(evento.key) {
        case 'ArrowUp':
        case 'ArrowLeft':
            evento.preventDefault();
            bloqueadoScroll = true;
            platoAnterior();
            reiniciarAutoplay(); // Reiniciar autoplay
            setTimeout(() => bloqueadoScroll = false, TIEMPO_BLOQUEO);
            break;
        case 'ArrowDown':
        case 'ArrowRight':
            evento.preventDefault();
            bloqueadoScroll = true;
            siguientePlato();
            reiniciarAutoplay(); // Reiniciar autoplay
            setTimeout(() => bloqueadoScroll = false, TIEMPO_BLOQUEO);
            break;
        case 'Home':
            evento.preventDefault();
            itemActual = 0;
            mostrarPlato(itemActual);
            reiniciarAutoplay();
            break;
        case 'End':
            evento.preventDefault();
            itemActual = comidas.length - 1;
            mostrarPlato(itemActual);
            reiniciarAutoplay();
            break;
        case ' ': // Barra espaciadora para pausar/reanudar
            evento.preventDefault();
            toggleAutoplay();
            break;
    }
}

// Función para ir al siguiente plato (con bucle)
function siguientePlato() {
    itemActual++;
    if (itemActual >= comidas.length) {
        itemActual = 0; // Volver al primero
    }
    mostrarPlato(itemActual);
}

// Función para ir al plato anterior (con bucle)
function platoAnterior() {
    itemActual--;
    if (itemActual < 0) {
        itemActual = comidas.length - 1; // Ir al último
    }
    mostrarPlato(itemActual);
}

// Configurar gestos táctiles para dispositivos móviles
function configurarGestosTactiles() {
    let touchStartY = null;
    let touchStartX = null;

    document.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
        touchStartX = e.touches[0].clientX;
    });

    document.addEventListener('touchend', (e) => {
        if (!touchStartY || !touchStartX || bloqueadoScroll) return;

        const touchEndY = e.changedTouches[0].clientY;
        const touchEndX = e.changedTouches[0].clientX;
        
        const diffY = touchStartY - touchEndY;
        const diffX = touchStartX - touchEndX;

        // Determinar si el swipe es más vertical u horizontal
        if (Math.abs(diffY) > Math.abs(diffX)) {
            // Swipe vertical
            if (Math.abs(diffY) > 50) { // Umbral mínimo de 50px
                bloqueadoScroll = true;
                if (diffY > 0) {
                    // Swipe hacia arriba
                    siguientePlato();
                } else {
                    // Swipe hacia abajo
                    platoAnterior();
                }
                reiniciarAutoplay(); // Reiniciar autoplay
                setTimeout(() => bloqueadoScroll = false, TIEMPO_BLOQUEO);
            }
        } else {
            // Swipe horizontal
            if (Math.abs(diffX) > 50) { // Umbral mínimo de 50px
                bloqueadoScroll = true;
                if (diffX > 0) {
                    // Swipe hacia la izquierda
                    siguientePlato();
                } else {
                    // Swipe hacia la derecha
                    platoAnterior();
                }
                reiniciarAutoplay(); // Reiniciar autoplay
                setTimeout(() => bloqueadoScroll = false, TIEMPO_BLOQUEO);
            }
        }

        touchStartY = null;
        touchStartX = null;
    });
}

// Función para precargar imágenes para mejorar el rendimiento
function precargarImagenes() {
    comidas.forEach(comida => {
        const img = new Image();
        img.src = comida.imagen;
    });
}

// Inicializar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    inicializar();
    precargarImagenes(); // Precargar todas las imágenes para transiciones suaves
});

// Exportar funciones para posible uso externo o testing
export { mostrarPlato, siguientePlato, platoAnterior, toggleAutoplay };
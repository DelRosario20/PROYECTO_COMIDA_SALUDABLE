// js/detalle.js - Lógica mejorada para la página de detalles de cada comida
// Importar el array de comidas y los componentes
import { comidas } from './data.js';
import { 
    renderEtiquetas, 
    renderTodasLasSecciones 
} from './components.js';

// Función principal para cargar los detalles de la comida
function cargarDetalles() {
    // Obtener parámetros de la URL
    const parametrosURL = new URLSearchParams(window.location.search);
    const idComida = parametrosURL.get('id');
    
    // Verificar que se proporcionó un ID
    if (!idComida) {
        mostrarError('No se especificó ninguna comida.');
        return;
    }
    
    // Convertir el ID a número
    const idNumerico = parseInt(idComida, 10);
    
    // Buscar la comida en el array
    const comidaEncontrada = comidas.find(comida => comida.id === idNumerico);
    
    // Si se encuentra la comida, mostrar sus detalles
    if (comidaEncontrada) {
        mostrarDetallesComida(comidaEncontrada);
    } else {
        mostrarError('Comida no encontrada.');
    }
}

// Función para mostrar los detalles de la comida
function mostrarDetallesComida(comida) {
    // Obtener referencias a los elementos del DOM
    const contenedorImagen = document.getElementById('detalle-imagen');
    const tituloElemento = document.getElementById('detalle-titulo');
    const descripcionElemento = document.getElementById('detalle-descripcion');
    const infoAdicional = document.querySelector('.info-adicional');
    
    // Verificar que los elementos existen
    if (!contenedorImagen || !tituloElemento || !descripcionElemento) {
        console.error('Error: No se pudieron encontrar los elementos necesarios del DOM');
        return;
    }
    
    // Crear y configurar el elemento de imagen
    const imagen = document.createElement('img');
    imagen.src = comida.imagen;
    imagen.alt = comida.nombre;
    imagen.className = 'imagen-detalle fade-transition';
    
    // Añadir evento para cuando la imagen se carga
    imagen.addEventListener('load', () => {
        imagen.style.opacity = '0';
        setTimeout(() => {
            imagen.style.opacity = '1';
            imagen.style.transition = 'opacity 0.8s ease';
        }, 50);
    });
    
    // Añadir evento de error para la imagen
    imagen.addEventListener('error', () => {
        console.error('Error al cargar la imagen:', comida.imagen);
        // Mostrar imagen de respaldo
        imagen.src = 'https://placehold.co/800x600/1a1a1a/ffffff?text=Imagen+no+disponible';
    });
    
    // Limpiar el contenedor de imagen y añadir la nueva imagen
    contenedorImagen.innerHTML = '';
    contenedorImagen.appendChild(imagen);
    
    // Actualizar el título
    tituloElemento.textContent = comida.nombre;
    
    // Actualizar la descripción breve
    descripcionElemento.textContent = comida.descripcion;
    
    // Reemplazar las etiquetas con las interactivas (NUEVO - pasamos infoModales)
    if (infoAdicional) {
        const nuevasEtiquetas = renderEtiquetas(
            comida.etiquetas, 
            comida.calorias, 
            comida.tiempo,
            comida.infoModales  // <- IMPORTANTE: Pasar la info de modales
        );
        infoAdicional.parentNode.replaceChild(nuevasEtiquetas, infoAdicional);
    }
    
    // RENDERIZAR TODAS LAS SECCIONES EXPANDIDAS AUTOMÁTICAMENTE
    const contenedorPrincipal = document.querySelector('.detalle-info');
    if (contenedorPrincipal) {
        const seccionesExpandidas = renderTodasLasSecciones(comida);
        contenedorPrincipal.appendChild(seccionesExpandidas);
    }
    
    // Actualizar el título de la página
    document.title = `${comida.nombre} - Comida Saludable`;
    
    // Añadir navegación entre detalles
    configurarNavegacionDetalles(comida.id);
    
    // Añadir animaciones de entrada
    aplicarAnimacionesEntrada();
}

// Función para mostrar un mensaje de error
function mostrarError(mensaje) {
    const contenedorDetalle = document.getElementById('detalle-contenedor');
    
    if (contenedorDetalle) {
        contenedorDetalle.innerHTML = `
            <div class="mensaje-error">
                <h2>Error</h2>
                <p>${mensaje}</p>
                <a href="index.html" class="boton-volver">
                    <span class="flecha">←</span> Volver al inicio
                </a>
            </div>
        `;
    }
}

// Función para configurar navegación entre detalles
function configurarNavegacionDetalles(idActual) {
    // Encontrar el índice de la comida actual
    const indiceActual = comidas.findIndex(c => c.id === idActual);
    
    if (indiceActual === -1) return;
    
    // Crear botones de navegación
    const navegacion = document.createElement('div');
    navegacion.className = 'navegacion-detalles';
    navegacion.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        display: flex;
        gap: 15px;
        z-index: 100;
    `;
    
    // Botón anterior
    if (indiceActual > 0) {
        const botonAnterior = crearBotonNavegacion('←', comidas[indiceActual - 1].id, 'Anterior');
        navegacion.appendChild(botonAnterior);
    }
    
    // Botón siguiente
    if (indiceActual < comidas.length - 1) {
        const botonSiguiente = crearBotonNavegacion('→', comidas[indiceActual + 1].id, 'Siguiente');
        navegacion.appendChild(botonSiguiente);
    }
    
    // Añadir al DOM
    document.body.appendChild(navegacion);
}

// Función auxiliar para crear botones de navegación
function crearBotonNavegacion(texto, idDestino, titulo) {
    const boton = document.createElement('a');
    boton.href = `detalle.html?id=${idDestino}`;
    boton.className = 'boton-nav-detalle';
    boton.title = titulo;
    boton.textContent = texto;
    boton.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        color: #888;
        font-size: 20px;
        transition: all 0.3s ease;
        text-decoration: none;
    `;
    
    // Añadir efectos hover con JavaScript
    boton.addEventListener('mouseenter', () => {
        boton.style.background = 'rgba(255, 255, 255, 0.1)';
        boton.style.color = '#ffffff';
        boton.style.transform = 'scale(1.1)';
    });
    
    boton.addEventListener('mouseleave', () => {
        boton.style.background = 'rgba(255, 255, 255, 0.05)';
        boton.style.color = '#888';
        boton.style.transform = 'scale(1)';
    });
    
    return boton;
}

// Función para aplicar animaciones de entrada
function aplicarAnimacionesEntrada() {
    // Animar el título
    const titulo = document.getElementById('detalle-titulo');
    if (titulo) {
        titulo.style.opacity = '0';
        titulo.style.transform = 'translateY(20px)';
        setTimeout(() => {
            titulo.style.transition = 'all 0.8s ease';
            titulo.style.opacity = '1';
            titulo.style.transform = 'translateY(0)';
        }, 200);
    }
    
    // Animar la descripción
    const descripcion = document.getElementById('detalle-descripcion');
    if (descripcion) {
        descripcion.style.opacity = '0';
        descripcion.style.transform = 'translateY(20px)';
        setTimeout(() => {
            descripcion.style.transition = 'all 0.8s ease';
            descripcion.style.opacity = '1';
            descripcion.style.transform = 'translateY(0)';
        }, 400);
    }
    
    // Animar los badges
    const badges = document.querySelectorAll('.badge, .badge-interactivo');
    badges.forEach((badge, index) => {
        badge.style.opacity = '0';
        badge.style.transform = 'translateY(20px)';
        setTimeout(() => {
            badge.style.transition = 'all 0.8s ease';
            badge.style.opacity = '1';
            badge.style.transform = 'translateY(0)';
        }, 600 + (index * 100));
    });
    
    // Animar las secciones expandidas
    const secciones = document.querySelectorAll('.seccion-detalle');
    secciones.forEach((seccion, index) => {
        seccion.style.opacity = '0';
        seccion.style.transform = 'translateY(30px)';
        setTimeout(() => {
            seccion.style.transition = 'all 0.8s ease';
            seccion.style.opacity = '1';
            seccion.style.transform = 'translateY(0)';
        }, 800 + (index * 150));
    });
}

// Event listener para navegación con teclas
function configurarNavegacionTeclas() {
    document.addEventListener('keydown', (e) => {
        const parametrosURL = new URLSearchParams(window.location.search);
        const idActual = parseInt(parametrosURL.get('id'), 10);
        const indiceActual = comidas.findIndex(c => c.id === idActual);
        
        if (indiceActual === -1) return;
        
        switch(e.key) {
            case 'ArrowLeft':
                if (indiceActual > 0) {
                    window.location.href = `detalle.html?id=${comidas[indiceActual - 1].id}`;
                }
                break;
            case 'ArrowRight':
                if (indiceActual < comidas.length - 1) {
                    window.location.href = `detalle.html?id=${comidas[indiceActual + 1].id}`;
                }
                break;
            case 'Escape':
                window.location.href = 'index.html';
                break;
        }
    });
}

// Inicializar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    cargarDetalles();
    configurarNavegacionTeclas();
});

// Exportar funciones para posible uso externo
export { cargarDetalles, mostrarDetallesComida };
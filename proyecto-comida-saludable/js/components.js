// js/components.js - Componentes reutilizables para renderizar secciones de detalle

/**
 * Renderiza las etiquetas (badges) de una comida
 */
export function renderEtiquetas(etiquetas, calorias, tiempo) {
    const container = document.createElement('div');
    container.className = 'info-adicional';
    
    // Agregar etiquetas
    if (etiquetas && etiquetas.length > 0) {
        etiquetas.forEach(etiqueta => {
            const badge = document.createElement('div');
            badge.className = 'badge';
            badge.textContent = etiqueta;
            container.appendChild(badge);
        });
    }
    
    // Agregar calorías si existen
    if (calorias) {
        const badgeCalorias = document.createElement('div');
        badgeCalorias.className = 'badge';
        badgeCalorias.textContent = calorias;
        container.appendChild(badgeCalorias);
    }
    
    // Agregar tiempo total si existe
    if (tiempo && tiempo.total) {
        const badgeTiempo = document.createElement('div');
        badgeTiempo.className = 'badge';
        badgeTiempo.textContent = tiempo.total;
        container.appendChild(badgeTiempo);
    }
    
    return container;
}

/**
 * Renderiza la descripción detallada (múltiples párrafos)
 */
export function renderDescripcionDetallada(descripcionArray) {
    if (!descripcionArray || descripcionArray.length === 0) return null;
    
    const section = document.createElement('section');
    section.className = 'seccion-detalle';
    
    const titulo = document.createElement('h2');
    titulo.textContent = 'Sobre este plato';
    section.appendChild(titulo);
    
    const contenido = document.createElement('div');
    contenido.className = 'contenido-seccion';
    
    descripcionArray.forEach(parrafo => {
        const p = document.createElement('p');
        p.textContent = parrafo;
        p.className = 'parrafo-detalle';
        contenido.appendChild(p);
    });
    
    section.appendChild(contenido);
    return section;
}

/**
 * Renderiza la información básica (tiempo, porciones, dificultad)
 */
export function renderInfoBasica(comida) {
    const section = document.createElement('section');
    section.className = 'seccion-info-basica';
    
    const infoGrid = document.createElement('div');
    infoGrid.className = 'info-grid';
    
    // Tiempo de preparación
    if (comida.tiempo) {
        const tiempoCard = document.createElement('div');
        tiempoCard.className = 'info-card';
        tiempoCard.innerHTML = `
            <div class="info-icon">⏱️</div>
            <div class="info-content">
                <div class="info-label">Tiempo total</div>
                <div class="info-value">${comida.tiempo.total}</div>
            </div>
        `;
        infoGrid.appendChild(tiempoCard);
    }
    
    // Porciones
    if (comida.porciones) {
        const porcionesCard = document.createElement('div');
        porcionesCard.className = 'info-card';
        porcionesCard.innerHTML = `
            <div class="info-icon">🍽️</div>
            <div class="info-content">
                <div class="info-label">Porciones</div>
                <div class="info-value">${comida.porciones}</div>
            </div>
        `;
        infoGrid.appendChild(porcionesCard);
    }
    
    // Dificultad
    if (comida.dificultad) {
        const dificultadCard = document.createElement('div');
        dificultadCard.className = 'info-card';
        dificultadCard.innerHTML = `
            <div class="info-icon">👨‍🍳</div>
            <div class="info-content">
                <div class="info-label">Dificultad</div>
                <div class="info-value">${comida.dificultad}</div>
            </div>
        `;
        infoGrid.appendChild(dificultadCard);
    }
    
    section.appendChild(infoGrid);
    return section;
}

/**
 * Renderiza la lista de ingredientes
 */
export function renderIngredientes(ingredientes) {
    if (!ingredientes || ingredientes.length === 0) return null;
    
    const section = document.createElement('section');
    section.className = 'seccion-detalle';
    
    const titulo = document.createElement('h2');
    titulo.textContent = 'Ingredientes';
    section.appendChild(titulo);
    
    const lista = document.createElement('ul');
    lista.className = 'lista-ingredientes';
    
    ingredientes.forEach(ing => {
        const li = document.createElement('li');
        li.className = 'ingrediente-item';
        li.innerHTML = `
            <span class="ingrediente-cantidad">${ing.cantidad}</span>
            <span class="ingrediente-nombre">${ing.nombre}</span>
        `;
        lista.appendChild(li);
    });
    
    section.appendChild(lista);
    return section;
}

/**
 * Renderiza los pasos de preparación
 */
export function renderPasos(pasos) {
    if (!pasos || pasos.length === 0) return null;
    
    const section = document.createElement('section');
    section.className = 'seccion-detalle';
    
    const titulo = document.createElement('h2');
    titulo.textContent = 'Preparación';
    section.appendChild(titulo);
    
    const contenedor = document.createElement('div');
    contenedor.className = 'pasos-container';
    
    pasos.forEach(paso => {
        const pasoDiv = document.createElement('div');
        pasoDiv.className = 'paso-item';
        
        pasoDiv.innerHTML = `
            <div class="paso-numero">Paso ${paso.numero}</div>
            <div class="paso-contenido">
                <h3 class="paso-titulo">${paso.titulo}</h3>
                <p class="paso-descripcion">${paso.descripcion}</p>
                ${paso.consejo ? `<div class="paso-consejo">💡 <strong>Consejo:</strong> ${paso.consejo}</div>` : ''}
            </div>
        `;
        
        contenedor.appendChild(pasoDiv);
    });
    
    section.appendChild(contenedor);
    return section;
}

/**
 * Renderiza los beneficios
 */
export function renderBeneficios(beneficios) {
    if (!beneficios || beneficios.length === 0) return null;
    
    const section = document.createElement('section');
    section.className = 'seccion-detalle seccion-beneficios';
    
    const titulo = document.createElement('h2');
    titulo.textContent = 'Beneficios para tu salud';
    section.appendChild(titulo);
    
    const grid = document.createElement('div');
    grid.className = 'beneficios-grid';
    
    beneficios.forEach(beneficio => {
        const card = document.createElement('div');
        card.className = 'beneficio-card';
        card.innerHTML = `
            <h4 class="beneficio-titulo">${beneficio.titulo}</h4>
            <p class="beneficio-descripcion">${beneficio.descripcion}</p>
        `;
        grid.appendChild(card);
    });
    
    section.appendChild(grid);
    return section;
}

/**
 * Renderiza las variaciones
 */
export function renderVariaciones(variaciones) {
    if (!variaciones || variaciones.length === 0) return null;
    
    const section = document.createElement('section');
    section.className = 'seccion-detalle seccion-variaciones';
    
    const titulo = document.createElement('h2');
    titulo.textContent = 'Variaciones';
    section.appendChild(titulo);
    
    const contenedor = document.createElement('div');
    contenedor.className = 'variaciones-container';
    
    variaciones.forEach(variacion => {
        const card = document.createElement('div');
        card.className = 'variacion-card';
        card.innerHTML = `
            <h4 class="variacion-nombre">${variacion.nombre}</h4>
            <p class="variacion-cambios">${variacion.cambios}</p>
        `;
        contenedor.appendChild(card);
    });
    
    section.appendChild(contenedor);
    return section;
}

/**
 * Renderiza las notas adicionales
 */
export function renderNotasAdicionales(notas) {
    if (!notas || notas.length === 0) return null;
    
    const section = document.createElement('section');
    section.className = 'seccion-detalle seccion-notas';
    
    const titulo = document.createElement('h2');
    titulo.textContent = 'Notas y consejos';
    section.appendChild(titulo);
    
    const lista = document.createElement('ul');
    lista.className = 'notas-lista';
    
    notas.forEach(nota => {
        const li = document.createElement('li');
        li.className = 'nota-item';
        li.textContent = nota;
        lista.appendChild(li);
    });
    
    section.appendChild(lista);
    return section;
}

/**
 * Función principal que renderiza todas las secciones automáticamente
 */
export function renderTodasLasSecciones(comida) {
    const contenedor = document.createElement('div');
    contenedor.className = 'contenido-expandido';
    
    // Renderizar descripción detallada
    const descripcionDetallada = renderDescripcionDetallada(comida.descripcionDetallada);
    if (descripcionDetallada) contenedor.appendChild(descripcionDetallada);
    
    // Renderizar info básica (tiempo, porciones, dificultad)
    const infoBasica = renderInfoBasica(comida);
    if (infoBasica) contenedor.appendChild(infoBasica);
    
    // Renderizar ingredientes
    const ingredientes = renderIngredientes(comida.ingredientes);
    if (ingredientes) contenedor.appendChild(ingredientes);
    
    // Renderizar pasos
    const pasos = renderPasos(comida.pasos);
    if (pasos) contenedor.appendChild(pasos);
    
    // Renderizar beneficios
    const beneficios = renderBeneficios(comida.beneficios);
    if (beneficios) contenedor.appendChild(beneficios);
    
    // Renderizar variaciones
    const variaciones = renderVariaciones(comida.variaciones);
    if (variaciones) contenedor.appendChild(variaciones);
    
    // Renderizar notas adicionales
    const notas = renderNotasAdicionales(comida.notasAdicionales);
    if (notas) contenedor.appendChild(notas);
    
    return contenedor;
}
# Proyecto Comida Saludable - Portfolio Interactivo

## 📋 Descripción
Portfolio interactivo de pantalla completa con diseño oscuro y minimalista para mostrar comidas saludables. Incluye navegación por scroll/swipe y página de detalles para cada plato.

## 🚀 Características
- **Diseño oscuro minimalista** inspirado en portfolios premium
- **Navegación interactiva** con rueda del mouse, teclas y gestos táctiles
- **Transiciones suaves** con animaciones CSS
- **100% responsive** para todos los dispositivos
- **Sin frameworks** - HTML5, CSS3 y JavaScript vanilla

## 📁 Estructura del Proyecto
```
/proyecto-comida-saludable/
├── index.html            # Página principal con carrusel
├── detalle.html          # Plantilla de página de detalles
├── /css/
│   └── style.css         # Estilos únicos para todo el proyecto
├── /js/
│   ├── data.js           # Base de datos de comidas
│   ├── main.js           # Lógica del carrusel
│   └── detalle.js        # Lógica de página de detalles
└── /img/                 # Carpeta para imágenes (vacía)
```

## 🖼️ IMPORTANTE: Añadir Imágenes

### Ubicaciones marcadas para cada imagen:
1. **Bowl de Quinoa y Aguacate** (ID: 1) - Línea 6 de data.js
2. **Salmón al Horno con Espárragos** (ID: 2) - Línea 12 de data.js
3. **Smoothie Verde Détox** (ID: 3) - Línea 18 de data.js
4. **Tostada de Batata y Aguacate** (ID: 4) - Línea 24 de data.js
5. **Ensalada Mediterranean Power** (ID: 5) - Línea 30 de data.js
6. **Buddha Bowl Proteico** (ID: 6) - Línea 36 de data.js
7. **Wrap de Pollo y Vegetales** (ID: 7) - Línea 42 de data.js
8. **Açai Bowl Energético** (ID: 8) - Línea 48 de data.js

### Cómo añadir las imágenes:
1. Busca imágenes de alta calidad (recomendado: 800x1200px mínimo)
2. Guarda las imágenes en la carpeta `/img/`
3. En `data.js`, reemplaza las URLs de placeholder con las rutas:
   ```javascript
   imagen: "img/nombre-de-tu-imagen.jpg"
   ```

## 🎮 Controles de Navegación

### En la página principal:
- **Scroll del mouse**: Navega entre platos
- **Flechas ↑↓**: Navega entre platos
- **Flechas ←→**: Navega entre platos
- **Click en números**: Salta directamente a un plato
- **Swipe en móvil**: Desliza para navegar

### En la página de detalles:
- **Flechas ←→**: Navega entre detalles
- **ESC**: Vuelve a la página principal
- **Botones de navegación**: Anterior/Siguiente

## 🛠️ Instalación
1. Descarga todos los archivos
2. Coloca las imágenes en la carpeta `/img/`
3. Actualiza las rutas en `data.js`
4. Abre `index.html` en tu navegador

## 💡 Personalización

### Añadir más comidas:
En `data.js`, agrega nuevos objetos al array:
```javascript
{
  id: 9,
  numero: "24",
  nombre: "Tu Nueva Comida",
  imagen: "img/tu-imagen.jpg",
  descripcion: "Descripción de tu comida..."
}
```

### Modificar colores:
En `style.css`, busca las variables de color:
- Fondo: `#0a0a0a` y `#1a1a1a`
- Texto: `#e0e0e0`, `#888`, `#666`
- Acentos: `rgba(255, 255, 255, 0.1)`

### Ajustar animaciones:
Busca `transition` y `animation` en `style.css`
Modifica `TIEMPO_BLOQUEO` en `main.js` (línea 7)

## 📱 Responsive Design
- **Desktop**: Layout completo de 3 columnas
- **Tablet**: Columnas más estrechas
- **Móvil**: Versión simplificada con navegación táctil

## ⚡ Performance
- Precarga automática de imágenes
- Animaciones optimizadas con CSS
- Throttling en eventos de scroll
- Lazy loading nativo del navegador

## 🎨 Características del Diseño
- Tipografía moderna sans-serif
- Gradientes sutiles de fondo
- Efectos hover interactivos
- Transiciones suaves fade-in/fade-out
- Números estilo "m²" en la paginación activa

## 📝 Notas
- Las imágenes de placeholder son temporales
- Optimiza las imágenes antes de subirlas (formato WebP recomendado)
- El proyecto usa ES6 modules, requiere servidor local para desarrollo

## 🔧 Desarrollo Local
Para evitar problemas de CORS con los módulos ES6:
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# VS Code
Usar extensión "Live Server"
```

## 📄 Licencia
Proyecto educativo - Universidad 2025

---
**Desarrollado con HTML5, CSS3 y JavaScript vanilla**

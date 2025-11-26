// js/data.js - Base de datos expandida de contenido de comidas saludables con información de modales
export const comidas = [
  {
    id: 1,
    numero: "1",
    nombre: "Bowl de Quinoa y Aguacate",
    imagen: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&h=1600&fit=crop",
    descripcion: "Una base de quinoa nutritiva, cubierta con aguacate fresco, tomate cherry, maíz y un aderezo de lima-cilantro. Perfecto para un almuerzo ligero y energizante.",
    
    etiquetas: ["SALUDABLE", "ORGÁNICO", "NUTRITIVO"],
    calorias: "350-450 CAL",
    tiempo: {
      preparacion: "30 min",
      coccion: "10 min",
      total: "40 min"
    },
    porciones: 1,
    dificultad: "Principiante",
    mejorTemporada: "Adecuado durante todo el año",
    
    descripcionDetallada: [
      "La receta de Bowl de quinoa parisino que ahora te vamos a detallar está pensada para un desayuno tardío sin prisas, un momento para disfrutarlo y hacerlo sabiendo que además estás cuidando tu cuerpo.",
      "Todos los beneficios de la quinoa se ven potenciados por las proteínas saludables que nos aporta el huevo y las grasas de calidad del aguacate y el salmón.",
      "Texturas suaves pero llenas de sabor y propiedades.",
      "Y para un toque extra de glam, añádele una copita de mimosa y siéntete como si estuvieras en la misma Torre Eiffel."
    ],
    
    ingredientes: [
      { nombre: "Quinoa", cantidad: "1 taza", categoria: "base" },
      { nombre: "Agua", cantidad: "2 tazas", categoria: "base" },
      { nombre: "Aguacate", cantidad: "100g", categoria: "vegetales" },
      { nombre: "Huevos", cantidad: "4 unidades", categoria: "proteinas" },
      { nombre: "Sal y pimienta", cantidad: "al gusto", categoria: "condimentos" },
      { nombre: "Salmón ahumado", cantidad: "100g", categoria: "proteinas" },
      { nombre: "Vinagre", cantidad: "1 cucharada", categoria: "condimentos" },
      { nombre: "Aceite de oliva", cantidad: "1 cucharada", categoria: "condimentos" }
    ],
    
    pasos: [
      {
        numero: 1,
        titulo: "Cocemos la quinoa de nuestra receta",
        descripcion: "Lava bien la quinoa con agua fría para quitarle su característico amargor. Luego, colócala en una cacerola junto con dos tazas de agua y una pizca de sal. Llévala a ebullición a fuego medio y cocina durante unos 15 minutos, o hasta que los granos estén suaves y el agua se haya evaporado por completo. Retira del fuego y reserva.",
        consejo: "Lavar bien la quinoa elimina las saponinas que le dan sabor amargo."
      },
      {
        numero: 2,
        titulo: "Preparamos los huevos poché",
        descripcion: "Mientras se cuece la quinoa, prepara los huevos poché. Llena una olla grande con agua y llévala a hervir, añadiendo un chorrito de vinagre. Casca cada huevo en un recipiente pequeño y, con cuidado, deslízalos en el agua caliente. Cocínalos por unos 3 minutos, hasta que la clara esté firme pero la yema permanezca líquida. Sácalos con una espumadera y déjalos reposar.",
        consejo: "Si eliges huevos de gallina criadas en libertad, marcará una gran diferencia en cuanto a sabor y calidad del plato."
      },
      {
        numero: 3,
        titulo: "Saltear la quinoa",
        descripcion: "En una sartén con un poco de aceite de oliva caliente, saltea la quinoa cocida durante unos minutos. Ajusta el punto de sal y pimienta a tu gusto.",
        consejo: "Saltear la quinoa le da una textura más firme y realza su sabor."
      },
      {
        numero: 4,
        titulo: "Montamos el plato",
        descripcion: "Para servir, distribuye la quinoa en platos individuales y coloca un huevo poché sobre cada porción. Añade también el aguacate cortado en láminas y el salmón en taquitos. Si lo prefieres, espolvorea perejil fresco picado por encima.",
        consejo: "La presentación es clave: distribuye los ingredientes de forma colorida para hacerlo visualmente atractivo."
      }
    ],
    
    beneficios: [
      {
        titulo: "Proteínas completas de alta calidad",
        descripcion: "La combinación de quinoa, huevos y salmón proporciona todos los aminoácidos esenciales necesarios."
      },
      {
        titulo: "Grasas saludables Omega-3",
        descripcion: "El salmón ahumado y el aguacate aportan grasas esenciales que benefician la salud cardiovascular."
      },
      {
        titulo: "Alto contenido en nutrientes",
        descripcion: "Rico en vitaminas del complejo B, vitamina E, hierro, magnesio y antioxidantes."
      },
      {
        titulo: "Energía sostenida",
        descripcion: "La quinoa proporciona carbohidratos complejos que liberan energía de forma gradual durante el día."
      }
    ],
    
    notasAdicionales: [
      "En nuestra receta, hemos querido acompañar la quinoa de salmón, pero puedes añadir otros pescados con iguales propiedades utilizando atún (bien sea ligeramente marcado a la plancha o marinado) o incluso mejillones al natural.",
      "Puedes preparar la quinoa con anticipación y guardarla en el refrigerador hasta 3 días."
    ],
    
    variaciones: [
      {
        nombre: "Con atún a la plancha",
        cambios: "Sustituye el salmón ahumado por atún fresco ligeramente marcado."
      },
      {
        nombre: "Con mejillones",
        cambios: "Añade mejillones al natural en lugar del salmón para un toque marino diferente."
      },
      {
        nombre: "Versión vegetariana",
        cambios: "Omite el salmón y duplica la cantidad de aguacate, añade semillas de chía y nueces."
      }
    ],
    
    palabrasClave: ["quinoa", "desayuno", "salmón", "huevo", "cena", "parisino"],

    // ==================== INFORMACIÓN DE MODALES ====================
    infoModales: {
      etiquetas: {
        "SALUDABLE": {
          titulo: "¿Por qué es saludable este Bowl de Quinoa?",
          contenido: "Este bowl combina ingredientes naturales sin procesados que trabajan en sinergia para tu bienestar. La quinoa es un pseudocereal que proporciona proteína completa con todos los aminoácidos esenciales. Los huevos aportan colina para la salud cerebral, el salmón ofrece omega-3 antiinflamatorio, y el aguacate brinda grasas monoinsaturadas que protegen tu corazón. Cada componente fue seleccionado por su densidad nutricional, no por calorías vacías. Es una comida que nutre cada célula de tu cuerpo mientras te mantiene satisfecho y energizado durante horas."
        },
        "ORGÁNICO": {
          titulo: "Compromiso con Ingredientes Orgánicos",
          contenido: "Utilizamos quinoa orgánica certificada cultivada sin pesticidas sintéticos en los valles andinos, respetando las técnicas ancestrales de cultivo. Los huevos provienen de gallinas criadas en libertad con alimentación orgánica. El aguacate es de agricultura sostenible sin químicos dañinos. Al elegir orgánico, no solo proteges tu salud eliminando residuos tóxicos, sino que también apoyas prácticas agrícolas que cuidan el suelo, el agua y la biodiversidad. Cada bocado es un voto por un planeta más saludable y un cuerpo libre de contaminantes."
        },
        "NUTRITIVO": {
          titulo: "Perfil Nutricional Completo y Balanceado",
          contenido: "Este bowl es un ejemplo perfecto de nutrición balanceada: 30% proteínas de alta calidad (quinoa, huevos, salmón), 40% carbohidratos complejos de liberación lenta (quinoa), y 30% grasas saludables (aguacate, omega-3). Además, aporta vitaminas del complejo B para energía, vitamina E antioxidante, hierro para prevenir anemia, magnesio para músculos y huesos, y potasio para la función celular. Con un índice glucémico bajo, no produce picos de azúcar, manteniéndote saciado y enfocado. Es nutrición inteligente que alimenta tu rendimiento físico y mental."
        }
      },
      calorias: {
        titulo: "Información Calórica Detallada - 350-450 CAL",
        contenido: "El rango de 350-450 calorías está calculado para una porción generosa que funciona como comida principal. La quinoa aporta ~180 cal de carbohidratos energéticos, los huevos ~140 cal de proteína de alta biodisponibilidad, el salmón ~80 cal con omega-3, y el aguacate ~100 cal de grasas cardioprotectoras. Estas son calorías 'limpias' y funcionales, no vacías como las de alimentos procesados. Cada caloría trabaja para nutrir tus células, reparar tejidos, producir hormonas y mantener tu metabolismo activo. Perfecto para control de peso sin pasar hambre, ya que la combinación de proteína, fibra y grasas saludables genera saciedad prolongada de 4-6 horas."
      },
      tiempo: {
        titulo: "Desglose del Tiempo de Preparación - 40 minutos",
        contenido: "Los 40 minutos totales se dividen así: 5 min para lavar y preparar ingredientes, 15 min para cocinar la quinoa (mientras tanto puedes hacer otras cosas), 10 min para preparar los huevos poché (la técnica más delicada), 5 min para saltear y ensamblar el plato, y 5 min para el emplatado final. Es un tiempo razonable para un desayuno de fin de semana o un almuerzo entre semana cuando trabajas desde casa. Una vez que domines la técnica del huevo poché, podrás reducir el tiempo. Puedes preparar la quinoa con anticipación y guardarla refrigerada hasta 3 días, reduciendo el tiempo a solo 15 minutos. ¡Mira nuestro video tutorial para dominar la técnica perfecta del huevo poché!",
        videoYoutube: "FnbdXC2eBcw"  // Video tutorial de huevo poché
      }
    }
  },

  {
    id: 2,
    numero: "2",
    nombre: "Salmón al Horno con Espárragos",
    imagen: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=1200&h=1600&fit=crop",
    descripcion: "Filete de salmón tierno cocido al horno, sazonado con eneldo y limón, acompañado de espárragos crujientes. Rico en Omega-3.",
    
    etiquetas: ["PROTEÍNA", "OMEGA-3", "BAJO EN CARBOHIDRATOS"],
    calorias: "400-500 CAL",
    tiempo: {
      preparacion: "10 min",
      coccion: "20 min",
      total: "30 min"
    },
    porciones: 2,
    dificultad: "Fácil",
    mejorTemporada: "Todo el año",
    
    descripcionDetallada: [
      "El salmón al horno es una opción perfecta para quienes buscan una cena saludable y sofisticada sin complicaciones.",
      "Este pescado azul es conocido por su alto contenido en ácidos grasos omega-3, fundamentales para la salud cardiovascular y cerebral.",
      "La cocción al horno permite que el salmón conserve toda su jugosidad y sabor natural, mientras los espárragos aportan fibra y antioxidantes.",
      "Esta receta es ideal para cenas entre semana, ya que se prepara en menos de 30 minutos y requiere pocos ingredientes."
    ],
    
    ingredientes: [
      { nombre: "Filete de salmón fresco", cantidad: "2 piezas (150g c/u)", categoria: "proteinas" },
      { nombre: "Espárragos verdes", cantidad: "300g", categoria: "vegetales" },
      { nombre: "Limón", cantidad: "1 unidad", categoria: "condimentos" },
      { nombre: "Eneldo fresco", cantidad: "2 cucharadas", categoria: "hierbas" },
      { nombre: "Aceite de oliva", cantidad: "3 cucharadas", categoria: "grasas" },
      { nombre: "Ajo", cantidad: "2 dientes", categoria: "condimentos" },
      { nombre: "Sal marina", cantidad: "al gusto", categoria: "condimentos" },
      { nombre: "Pimienta negra", cantidad: "al gusto", categoria: "condimentos" }
    ],
    
    pasos: [
      {
        numero: 1,
        titulo: "Prepara los ingredientes y precalienta el horno",
        descripcion: "Precalienta el horno a 200°C (392°F). Lava los espárragos y corta aproximadamente 2-3 cm de la parte más dura del tallo. Corta el limón en rodajas finas. Pica finamente el eneldo fresco y el ajo.",
        consejo: "Para saber dónde cortar los espárragos, dóblalos suavemente; se romperán naturalmente en el punto donde comienza la parte tierna."
      },
      {
        numero: 2,
        titulo: "Sazona el salmón",
        descripcion: "Coloca los filetes de salmón en una bandeja para horno forrada con papel pergamino. Rocía generosamente con aceite de oliva, exprime un poco de jugo de limón sobre cada filete, espolvorea el eneldo, el ajo picado, sal marina y pimienta negra recién molida.",
        consejo: "Deja que el salmón esté a temperatura ambiente 10 minutos antes de hornear para una cocción más uniforme."
      },
      {
        numero: 3,
        titulo: "Prepara los espárragos",
        descripcion: "Coloca los espárragos alrededor de los filetes de salmón en la misma bandeja. Rocía los espárragos con aceite de oliva, sal y pimienta. Distribuye las rodajas de limón sobre el salmón y entre los espárragos.",
        consejo: "Los espárragos más gruesos necesitan un poco más de tiempo, así que puedes añadirlos unos minutos antes si tienes espárragos muy finos."
      },
      {
        numero: 4,
        titulo: "Hornea a la perfección",
        descripcion: "Hornea durante 15-20 minutos, dependiendo del grosor del salmón. El salmón está listo cuando se desmenuza fácilmente con un tenedor pero aún está jugoso en el centro. Los espárragos deben estar tiernos pero crujientes.",
        consejo: "Para salmón más jugoso, sácalo del horno cuando el centro aún esté ligeramente translúcido; seguirá cocinándose con el calor residual."
      },
      {
        numero: 5,
        titulo: "Emplatado y servir",
        descripcion: "Sirve el salmón con los espárragos al lado. Decora con rodajas de limón adicionales y una ramita de eneldo fresco. Puedes acompañar con arroz integral o una ensalada fresca.",
        consejo: "Un chorrito de aceite de oliva extra virgen al servir realza todos los sabores."
      }
    ],
    
    beneficios: [
      {
        titulo: "Rico en Omega-3",
        descripcion: "Los ácidos grasos EPA y DHA del salmón mejoran la salud cardiovascular, reducen la inflamación y benefician la función cerebral."
      },
      {
        titulo: "Proteína de alta calidad",
        descripcion: "El salmón proporciona proteínas completas esenciales para el mantenimiento muscular, la saciedad y la reparación celular."
      },
      {
        titulo: "Antioxidantes y vitaminas",
        descripcion: "Los espárragos son ricos en vitamina K, folato y antioxidantes que fortalecen el sistema inmune."
      },
      {
        titulo: "Bajo en carbohidratos",
        descripcion: "Ideal para dietas keto o bajas en carbohidratos, sin comprometer el sabor ni la nutrición."
      }
    ],
    
    notasAdicionales: [
      "El salmón salvaje tiene más omega-3 que el de cultivo, pero ambos son opciones saludables.",
      "Puedes preparar esta receta con otros pescados como trucha o bacalao.",
      "Los espárragos se conservan mejor si los guardas en el refrigerador con los tallos envueltos en una toalla húmeda."
    ],
    
    variaciones: [
      {
        nombre: "Salmón con costra de hierbas",
        cambios: "Mezcla pan rallado con perejil, tomillo y ajo, y cubre el salmón antes de hornear."
      },
      {
        nombre: "Versión asiática",
        cambios: "Sustituye el eneldo por jengibre fresco y el limón por salsa de soja y miel."
      },
      {
        nombre: "Con vegetales mediterráneos",
        cambios: "Añade tomates cherry, calabacín y aceitunas para un sabor mediterráneo."
      }
    ],
    
    palabrasClave: ["salmón", "pescado", "omega-3", "espárragos", "horno", "saludable", "proteína"],

    // ==================== INFORMACIÓN DE MODALES ====================
    infoModales: {
      etiquetas: {
        "PROTEÍNA": {
          titulo: "Proteína de Alta Calidad del Salmón",
          contenido: "El salmón es una de las mejores fuentes de proteína animal, proporcionando aproximadamente 25 gramos de proteína completa por cada 100g. Contiene todos los aminoácidos esenciales en las proporciones perfectas que tu cuerpo necesita para construir y reparar tejidos, músculos, piel, cabello y uñas. A diferencia de las carnes rojas, la proteína del salmón viene acompañada de grasas saludables omega-3, no de grasas saturadas. Esta combinación única acelera la recuperación muscular después del ejercicio, mantiene la saciedad prolongada previniendo antojos, y apoya la producción de enzimas y hormonas vitales. Ideal para deportistas, personas activas, o cualquiera que busque mantener masa muscular magra mientras envejece."
        },
        "OMEGA-3": {
          titulo: "Omega-3: El Superpoder del Salmón",
          contenido: "El salmón es la fuente natural más rica en ácidos grasos omega-3 EPA y DHA, proporcionando hasta 2,500 mg por porción. Estos ácidos grasos esenciales son 'esenciales' porque tu cuerpo no puede producirlos, debes obtenerlos de la dieta. El EPA reduce la inflamación sistémica asociada con enfermedades crónicas, artritis y dolor. El DHA constituye el 40% de las grasas del cerebro y es fundamental para la memoria, concentración, y prevención de depresión. Además, los omega-3 protegen el corazón reduciendo triglicéridos, mejorando el perfil de colesterol, y previniendo arritmias. Estudios muestran que consumir salmón 2-3 veces por semana reduce el riesgo de infarto en un 30%. Es medicina natural en forma de alimento delicioso."
        },
        "BAJO EN CARBOHIDRATOS": {
          titulo: "Perfecto para Dietas Bajas en Carbohidratos",
          contenido: "Esta receta contiene menos de 10g de carbohidratos totales, siendo ideal para dietas cetogénicas, low-carb, o para cualquiera que busque controlar sus niveles de azúcar en sangre. El salmón y los espárragos son naturalmente bajos en carbohidratos pero altos en nutrientes, permitiéndote mantenerte en cetosis o simplemente evitar picos de insulina. Los carbohidratos que sí contiene provienen exclusivamente de los espárragos, que son fibra saludable que no eleva la glucosa. Al eliminar los carbohidratos refinados, tu cuerpo quema grasa como combustible, lo que resulta en mayor claridad mental, energía estable sin crashes, y pérdida de grasa corporal sin perder músculo. Además, la ausencia de carbohidratos pesados evita la inflamación y la hinchazón post-comida, dejándote ligero y energizado."
        }
      },
      calorias: {
        titulo: "Desglose Calórico - 400-500 CAL",
        contenido: "El rango de 400-500 calorías por porción de 2 personas se distribuye así: El salmón (150g) aporta aproximadamente 280 calorías, ricas en proteína (25g) y grasas omega-3 (15g). Los espárragos (150g por persona) añaden solo 30 calorías pero con 4g de fibra que mejora la digestión. El aceite de oliva (1.5 cucharadas) contribuye 180 calorías de grasas monoinsaturadas cardioprotectoras. Las calorías restantes provienen de condimentos y hierbas que añaden sabor sin peso calórico significativo. Esta es una comida nutricionalmente densa pero calóricamente moderada, perfecta para pérdida de peso o mantenimiento. La alta proporción de proteína y grasa saludable genera saciedad extrema, evitando que necesites snacks entre comidas. Es el tipo de comida que te deja satisfecho con menos calorías que opciones menos nutritivas."
      },
      tiempo: {
        titulo: "Preparación Rápida - Solo 30 Minutos",
        contenido: "Este plato se completa en apenas 30 minutos totales: 10 minutos de preparación activa (lavar espárragos, sazonar salmón, cortar limón y ajo) y 20 minutos de cocción en el horno mientras puedes atender otras tareas. Lo que hace esta receta excepcionalmente práctica es que todo se cocina en una sola bandeja, eliminando múltiples ollas y sartenes. Durante la cocción, puedes preparar una ensalada, poner la mesa, o simplemente relajarte. No requiere habilidades culinarias avanzadas ni técnicas complicadas. Es la solución perfecta para cenas entre semana cuando llegas cansado pero no quieres sacrificar la nutrición por comida rápida. Una vez que pruebes lo fácil que es, se convertirá en tu go-to para comidas elegantes pero sin estrés. ¡Mira nuestro video para ver lo simple que es!",
        videoYoutube: "MfENP70qAiM"  // Video de salmón al horno
      }
    }
  },

  {
    id: 3,
    numero: "3",
    nombre: "Smoothie Verde Détox",
    imagen: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=1200&h=1600&fit=crop",
    descripcion: "Una mezcla vibrante de espinacas, kale, manzana verde, plátano y agua de coco. Ideal para limpiar el organismo y empezar el día.",
    
    etiquetas: ["DÉTOX", "VEGANO", "ENERGÉTICO", "RÁPIDO"],
    calorias: "200-250 CAL",
    tiempo: {
      preparacion: "5 min",
      coccion: "0 min",
      total: "5 min"
    },
    porciones: 1,
    dificultad: "Muy fácil",
    mejorTemporada: "Todo el año",
    
    descripcionDetallada: [
      "Este smoothie verde es la forma perfecta de comenzar tu día con energía limpia y natural.",
      "Combina hojas verdes repletas de clorofila con frutas que aportan dulzor natural, creando una bebida refrescante y nutritiva.",
      "Las espinacas y el kale son superalimentos ricos en hierro, calcio y antioxidantes, mientras que el plátano añade cremosidad y potasio.",
      "Ideal para desayunos rápidos, snacks post-entrenamiento o como parte de un plan de alimentación détox."
    ],
    
    ingredientes: [
      { nombre: "Espinacas frescas", cantidad: "2 tazas", categoria: "vegetales" },
      { nombre: "Kale (col rizada)", cantidad: "1 taza", categoria: "vegetales" },
      { nombre: "Plátano maduro", cantidad: "1 unidad", categoria: "frutas" },
      { nombre: "Manzana verde", cantidad: "1 unidad", categoria: "frutas" },
      { nombre: "Agua de coco", cantidad: "1 taza (250ml)", categoria: "líquidos" },
      { nombre: "Jugo de limón", cantidad: "1 cucharada", categoria: "condimentos" },
      { nombre: "Jengibre fresco", cantidad: "1 cm (opcional)", categoria: "especias" },
      { nombre: "Semillas de chía", cantidad: "1 cucharada", categoria: "extras" },
      { nombre: "Hielo", cantidad: "4-5 cubos", categoria: "extras" }
    ],
    
    pasos: [
      {
        numero: 1,
        titulo: "Prepara los ingredientes",
        descripcion: "Lava bien las espinacas y el kale. Pela el plátano y córtalo en rodajas. Corta la manzana en trozos, retirando el corazón. Si usas jengibre, pélalo y córtalo en trozos pequeños.",
        consejo: "Congela el plátano previamente para obtener un smoothie más cremoso y frío."
      },
      {
        numero: 2,
        titulo: "Licua los ingredientes verdes primero",
        descripcion: "Coloca las espinacas, el kale y el agua de coco en la licuadora. Licua durante 30 segundos hasta obtener una mezcla líquida y sin grumos.",
        consejo: "Licuar primero las hojas verdes con el líquido asegura una textura suave sin trozos."
      },
      {
        numero: 3,
        titulo: "Añade las frutas y mezcla final",
        descripcion: "Agrega el plátano, la manzana, el jugo de limón, el jengibre (si lo usas), las semillas de chía y el hielo. Licua a alta velocidad durante 1-2 minutos hasta obtener una consistencia cremosa y homogénea.",
        consejo: "Si el smoothie está muy espeso, añade más agua de coco. Si está muy líquido, agrega más plátano congelado."
      },
      {
        numero: 4,
        titulo: "Sirve inmediatamente",
        descripcion: "Vierte en un vaso alto. Puedes decorar con una rodaja de limón, hojas de menta o una pizca de semillas de chía por encima.",
        consejo: "Bébelo inmediatamente para aprovechar al máximo los nutrientes y evitar la oxidación."
      }
    ],
    
    beneficios: [
      {
        titulo: "Desintoxicación natural",
        descripcion: "La clorofila de las hojas verdes ayuda a limpiar el hígado y eliminar toxinas del organismo."
      },
      {
        titulo: "Energía sin cafeína",
        descripcion: "Los carbohidratos naturales de las frutas proporcionan energía sostenida sin el crash de la cafeína."
      },
      {
        titulo: "Mejora la digestión",
        descripcion: "Alto contenido de fibra que promueve la salud intestinal y mejora el tránsito digestivo."
      },
      {
        titulo: "Piel radiante",
        descripcion: "Rico en vitaminas A, C y E que promueven la salud de la piel y combaten los radicales libres."
      },
      {
        titulo: "Hidratación óptima",
        descripcion: "El agua de coco repone electrolitos naturalmente, perfecto después del ejercicio."
      }
    ],
    
    notasAdicionales: [
      "Puedes sustituir el agua de coco por agua regular, leche de almendras o leche de avena.",
      "Para un smoothie más dulce, añade dátiles o una cucharadita de miel.",
      "Si no tienes kale, usa más espinacas o prueba con acelgas.",
      "Las semillas de chía se pueden remojar previamente para mejor absorción."
    ],
    
    variaciones: [
      {
        nombre: "Smoothie tropical verde",
        cambios: "Añade piña y mango en lugar de manzana para un sabor más tropical."
      },
      {
        nombre: "Smoothie proteico verde",
        cambios: "Agrega una cucharada de proteína en polvo vegetal y mantequilla de almendras."
      },
      {
        nombre: "Smoothie verde cremoso",
        cambios: "Añade medio aguacate para obtener una textura ultra cremosa y grasas saludables."
      }
    ],
    
    palabrasClave: ["smoothie", "détox", "verde", "vegano", "desayuno", "energético", "saludable"],

    // ==================== INFORMACIÓN DE MODALES ====================
    infoModales: {
      etiquetas: {
        "DÉTOX": {
          titulo: "Propiedades Détox y Limpieza Profunda",
          contenido: "Este smoothie verde es una potente bebida desintoxicante gracias a su alto contenido de clorofila, el pigmento que da color verde a las plantas. La clorofila tiene una estructura molecular similar a la hemoglobina humana y ayuda a oxigenar la sangre, eliminar metales pesados, y limpiar el hígado de toxinas acumuladas por medicamentos, alcohol, o alimentos procesados. Las espinacas y el kale contienen glucosinolatos que activan enzimas hepáticas de fase 2, responsables de neutralizar y expulsar sustancias tóxicas. El limón estimula la producción de bilis para mejor digestión de grasas, mientras que el jengibre acelera el metabolismo y tiene propiedades antiinflamatorias. Beber este smoothie en ayunas potencia la limpieza, pero también funciona en cualquier momento para un reset nutricional. Es como darle a tu cuerpo un baño interno."
        },
        "VEGANO": {
          titulo: "100% Vegano y Plant-Based",
          contenido: "Este smoothie es completamente libre de ingredientes de origen animal, haciéndolo perfecto para veganos, vegetarianos, o cualquiera que busque reducir su consumo de productos animales. Todos los nutrientes provienen de fuentes vegetales: las hojas verdes aportan hierro, calcio y proteína vegetal; el plátano ofrece potasio y vitamina B6; la manzana contribuye antioxidantes y pectina; el agua de coco proporciona electrolitos naturales; y las semillas de chía añaden omega-3 y proteína completa. No contiene lácteos, miel, ni ningún derivado animal, pero está repleto de vitaminas, minerales, fitonutrientes y antioxidantes. Es la prueba de que la nutrición plant-based puede ser deliciosa, satisfactoria y nutricionalmente completa. Además, es más sostenible para el planeta, reduciendo la huella de carbono comparado con batidos con lácteos."
        },
        "ENERGÉTICO": {
          titulo: "Energía Natural Sin Crash",
          contenido: "A diferencia del café o bebidas energéticas que te dan un pico de energía seguido de un crash, este smoothie proporciona energía limpia y sostenida que dura horas. Los carbohidratos naturales del plátano y la manzana se liberan gradualmente gracias a la fibra de las hojas verdes, manteniendo tus niveles de glucosa estables. Las vitaminas del complejo B de las espinacas y el kale son cofactores esenciales para la producción de ATP (la moneda energética celular). El hierro previene la fatiga relacionada con anemia, y el agua de coco repone electrolitos perdidos que pueden causar cansancio. Además, la hidratación adecuada y los antioxidantes combaten el estrés oxidativo que agota tu energía. Es perfecto para comenzar el día, como pre-workout, o para un boost a media tarde sin alterar tu sueño nocturno."
        },
        "RÁPIDO": {
          titulo: "Listo en Solo 5 Minutos",
          contenido: "En nuestra vida acelerada, la nutrición no debería ser complicada, y este smoothie lo prueba. En apenas 5 minutos puedes preparar una comida nutricionalmente completa: 2 minutos para lavar y picar ingredientes, 2 minutos para licuar, y 1 minuto para servir. No requiere cocción, no ensucia múltiples ollas, y puedes beberlo en movimiento. Es la solución perfecta para mañanas ajetreadas cuando no tienes tiempo para un desayuno sentado, pero no quieres recurrir a opciones poco saludables. Puedes incluso preparar los ingredientes la noche anterior (excepto licuar) para reducir el tiempo matutino. Además, si usas una licuadora portátil tipo BlendJet, puedes prepararlo directamente en la oficina o en el gym. La limpieza también es rápida: solo enjuaga la licuadora con agua y jabón. Nutrición óptima sin excusas de tiempo."
        }
      },
      calorias: {
        titulo: "Calorías Ligeras pero Nutritivas - 200-250 CAL",
        contenido: "Con solo 200-250 calorías, este smoothie es increíblemente ligero pero sorprendentemente saciante y nutritivo. La mayoría de las calorías provienen del plátano (~100 cal) que aporta carbohidratos energéticos y potasio, y la manzana (~50 cal) con fibra soluble que mejora la saciedad. Las hojas verdes (espinacas y kale) apenas suman 20 calorías pero están cargadas de vitaminas A, C, K, hierro, calcio y antioxidantes. El agua de coco añade 45 calorías con electrolitos naturales, y las semillas de chía contribuyen 60 calorías con omega-3, proteína y fibra que se expande en tu estómago. Es perfecto para desayuno ligero, snack entre comidas, o post-entrenamiento para recuperación sin exceso calórico. A pesar de su bajo contenido calórico, te mantiene satisfecho gracias a la fibra y el alto contenido de agua. Ideal para pérdida de peso sin pasar hambre."
      },
      tiempo: {
        titulo: "Preparación Express - 5 Minutos Totales",
        contenido: "Este smoothie es la definición de comida rápida saludable. Los 5 minutos se desglosan así: 1 minuto para sacar ingredientes del refrigerador, 2 minutos para lavar y picar (las hojas verdes, la manzana y el plátano), 1-2 minutos para licuar (dependiendo de la potencia de tu licuadora), y 30 segundos para servir y decorar. No hay cocción involucrada, cero tiempo de horno, cero tiempos de espera. Es incluso más rápido que preparar café. Si congelas el plátano con anticipación y pre-lavas las hojas verdes el fin de semana, puedes reducir el tiempo a literalmente 2 minutos. Es perfecto para cuando tienes que salir corriendo de casa, necesitas algo nutritivo entre juntas, o quieres un snack saludable al instante. La eficiencia no significa sacrificar nutrición. ¡Ve nuestro video tutorial para ver lo fácil que es!",
        videoYoutube: "7At5vJUoiiM"  // Video de smoothie verde
      }
    }
  },

  {
    id: 4,
    numero: "4",
    nombre: "Tostada de Batata y Aguacate",
    imagen: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=1200&h=1600&fit=crop",
    descripcion: "Rodajas de batata horneadas hasta quedar firmes (como 'tostadas'), cubiertas con puré de aguacate, semillas de chía y un toque de pimentón.",
    
    etiquetas: ["SIN GLUTEN", "VEGANO", "CREATIVO", "PALEO"],
    calorias: "280-350 CAL",
    tiempo: {
      preparacion: "5 min",
      coccion: "25 min",
      total: "30 min"
    },
    porciones: 2,
    dificultad: "Fácil",
    mejorTemporada: "Otoño e invierno",
    
    descripcionDetallada: [
      "Esta receta revolucionaria sustituye el pan tradicional por rodajas de batata horneadas, creando una base naturalmente dulce y nutritiva.",
      "La batata (o boniato) es rica en betacarotenos, fibra y vitamina A, convirtiéndola en una alternativa superior al pan procesado.",
      "Perfecta para quienes siguen dietas sin gluten, paleo o simplemente buscan opciones más creativas y saludables para sus desayunos.",
      "El aguacate aporta cremosidad y grasas saludables, mientras que las semillas de chía añaden omega-3 y proteínas."
    ],
    
    ingredientes: [
      { nombre: "Batata grande", cantidad: "1 unidad (400g aprox)", categoria: "base" },
      { nombre: "Aguacate maduro", cantidad: "1 unidad", categoria: "proteinas" },
      { nombre: "Aceite de oliva", cantidad: "2 cucharadas", categoria: "grasas" },
      { nombre: "Semillas de chía", cantidad: "1 cucharada", categoria: "extras" },
      { nombre: "Limón", cantidad: "½ unidad", categoria: "condimentos" },
      { nombre: "Pimentón ahumado", cantidad: "½ cucharadita", categoria: "especias" },
      { nombre: "Sal marina", cantidad: "al gusto", categoria: "condimentos" },
      { nombre: "Pimienta negra", cantidad: "al gusto", categoria: "condimentos" },
      { nombre: "Hojas de cilantro o perejil", cantidad: "para decorar", categoria: "extras" }
    ],
    
    pasos: [
      {
        numero: 1,
        titulo: "Prepara y hornea las rodajas de batata",
        descripcion: "Precalienta el horno a 200°C. Lava y pela la batata. Córtala en rodajas de aproximadamente 1 cm de grosor. Colócalas en una bandeja forrada con papel pergamino, rocía con aceite de oliva, sal y pimienta. Hornea durante 20-25 minutos, volteándolas a mitad de cocción, hasta que estén doradas y firmes.",
        consejo: "Corta las rodajas con grosor uniforme para que se cocinen de manera pareja. Las rodajas más gruesas quedarán más suaves por dentro."
      },
      {
        numero: 2,
        titulo: "Prepara el puré de aguacate",
        descripcion: "Mientras se hornea la batata, corta el aguacate por la mitad, retira el hueso y extrae la pulpa con una cuchara. En un bowl, aplasta el aguacate con un tenedor hasta obtener un puré. Añade el jugo de medio limón, sal, pimienta y mezcla bien.",
        consejo: "El limón no solo añade sabor, sino que también evita que el aguacate se oxide y se ponga marrón."
      },
      {
        numero: 3,
        titulo: "Monta las tostadas",
        descripcion: "Saca las rodajas de batata del horno y déjalas enfriar 2-3 minutos. Unta generosamente cada rodaja con el puré de aguacate.",
        consejo: "Si las rodajas están muy calientes, espera un poco para que el aguacate no se derrita."
      },
      {
        numero: 4,
        titulo: "Decora y sirve",
        descripcion: "Espolvorea semillas de chía sobre el aguacate. Añade un toque de pimentón ahumado y decora con cilantro o perejil fresco. Sirve inmediatamente.",
        consejo: "Puedes añadir otros toppings como huevo pochado, tomates cherry, o queso feta para más variedad."
      }
    ],
    
    beneficios: [
      {
        titulo: "Libre de gluten naturalmente",
        descripcion: "Perfecto para celíacos o personas con sensibilidad al gluten, sin sacrificar textura o sabor."
      },
      {
        titulo: "Rico en vitamina A",
        descripcion: "La batata es una de las mejores fuentes de betacarotenos, esenciales para la salud ocular y la piel."
      },
      {
        titulo: "Bajo índice glucémico",
        descripcion: "A pesar de su dulzor, la batata libera energía gradualmente, evitando picos de azúcar en sangre."
      },
      {
        titulo: "Grasas saludables para el corazón",
        descripcion: "El aguacate proporciona grasas monoinsaturadas que mejoran el perfil lipídico y la salud cardiovascular."
      }
    ],
    
    notasAdicionales: [
      "Las rodajas de batata se pueden preparar con anticipación y guardar en el refrigerador hasta 3 días.",
      "Para una versión más crujiente, puedes tostarlas en una tostadora o sandwichera después de hornearlas.",
      "Si no tienes horno, puedes cocinar las rodajas en una sartén o parrilla.",
      "Las batatas naranjas son más dulces; las moradas tienen más antioxidantes."
    ],
    
    variaciones: [
      {
        nombre: "Tostada mediterránea",
        cambios: "Cubre con hummus, tomates secos, aceitunas y queso feta."
      },
      {
        nombre: "Tostada con huevo",
        cambios: "Añade un huevo pochado o revuelto encima del aguacate para más proteína."
      },
      {
        nombre: "Tostada dulce",
        cambios: "Omite el aguacate y cubre con mantequilla de almendras, plátano y canela."
      }
    ],
    
    palabrasClave: ["batata", "sin gluten", "aguacate", "vegano", "tostada", "paleo", "desayuno"],

    // ==================== INFORMACIÓN DE MODALES ====================
    infoModales: {
      etiquetas: {
        "SIN GLUTEN": {
          titulo: "Libre de Gluten de Forma Natural",
          contenido: "Esta tostada de batata es la solución perfecta para personas con enfermedad celíaca, sensibilidad al gluten no celíaca, o simplemente quienes eligen evitar el gluten por salud. A diferencia del pan sin gluten comercial que suele estar lleno de almidones refinados y aditivos, esta alternativa usa batata entera y natural que nunca ha contenido gluten. La batata proporciona carbohidratos complejos con fibra, vitaminas y minerales que el pan sin gluten procesado no puede igualar. No hay riesgo de contaminación cruzada como en productos manufacturados. Además, evitas los picos de azúcar en sangre causados por harinas refinadas. Es creatividad culinaria que transforma un tubérculo humilde en un vehículo delicioso para tus toppings favoritos, sin comprometer sabor, textura ni nutrición. La batata horneada queda firme como una tostada tradicional pero con un dulzor natural que complementa perfectamente el aguacate cremoso."
        },
        "VEGANO": {
          titulo: "100% Vegano y Plant-Based",
          contenido: "Esta receta es completamente libre de productos animales, perfecta para veganos estrictos o flexitarianos que buscan opciones plant-based deliciosas. La batata proporciona carbohidratos energéticos y fibra; el aguacate aporta grasas saludables y cremosidad sin necesidad de mantequilla o queso; las semillas de chía contribuyen omega-3 y proteína; y todos los condimentos son de origen vegetal. No sacrificas sabor, textura ni saciedad al eliminar productos animales. De hecho, esta combinación vegetal es más nutritiva que una tostada convencional con mantequilla. Obtienes vitamina A de la batata, vitamina E del aguacate, omega-3 de la chía, sin colesterol ni grasas saturadas. Además, es una opción más sostenible para el planeta, reduciendo significativamente la huella de carbono y el uso de agua comparado con productos animales. Es veganismo delicioso sin sentir que renuncias a nada."
        },
        "CREATIVO": {
          titulo: "Innovación Culinaria Saludable",
          contenido: "Esta tostada de batata representa una revolución creativa en la cocina saludable. En lugar de aceptar el pan procesado como la única opción para tostadas, reinventamos el concepto usando un vegetal entero como base. Es el tipo de creatividad que transforma ingredientes simples en algo extraordinario y nutritivo. La idea surgió del movimiento 'vegetales como vehículo' que incluye también calabacín como pasta, coliflor como arroz, y portobello como hamburguesa. Esta mentalidad creativa te libera de productos procesados y abre un mundo de posibilidades culinarias. La batata horneada funciona perfectamente: es robusta para sostener toppings, naturalmente dulce para contrastar sabores salados, y visualmente impresionante con su color naranja vibrante. Es el tipo de plato que sorprende en brunch, impresiona en Instagram, y satisface tu paladar mientras nutre tu cuerpo. Cocinar creativamente significa nunca aburrirse de comer saludable."
        },
        "PALEO": {
          titulo: "Compatible con la Dieta Paleo",
          contenido: "Esta receta sigue perfectamente los principios de la dieta paleolítica, basada en cómo comían nuestros ancestros cazadores-recolectores antes de la agricultura. Los ingredientes son alimentos enteros y naturales que existían en la era paleolítica: tubérculos (batata), frutas (aguacate técnicamente es una fruta), semillas (chía), aceite de oliva prensado en frío, y especias. No contiene granos (sin trigo, sin gluten), no hay lácteos, no hay legumbres, y definitivamente no hay alimentos procesados o azúcares añadidos. La dieta paleo se enfoca en alimentos densos en nutrientes que nuestros genes están adaptados a digerir óptimamente. La batata es un carbohidrato paleo-aprobado rico en betacarotenos y fibra. El aguacate proporciona grasas saludables similares a las que obtendrían de nueces y semillas. Esta combinación apoya la función metabólica óptima, reduce la inflamación, y proporciona energía sostenida sin los efectos negativos de granos y lácteos. Es como comer en la era paleolítica pero con sabor del siglo XXI."
        }
      },
      calorias: {
        titulo: "Contenido Calórico Moderado - 280-350 CAL",
        contenido: "Con 280-350 calorías por porción (2 tostadas), este plato ofrece un balance perfecto entre saciedad y control calórico. La batata (200g) aporta aproximadamente 180 calorías de carbohidratos complejos con alto contenido de fibra que te mantiene lleno. El aguacate (medio) contribuye 120 calorías de grasas monoinsaturadas cardioprotectoras que mejoran la absorción de vitaminas liposolubles. Las semillas de chía añaden 60 calorías con omega-3 y fibra que se expande en tu estómago. El aceite de oliva y condimentos suman 50 calorías más. Estas son calorías de calidad, no vacías: cada una viene acompañada de vitaminas, minerales, fibra y fitonutrientes. La combinación de fibra, grasas saludables y carbohidratos complejos genera una saciedad prolongada de 3-4 horas, evitando antojos. Es perfecto para desayuno o almuerzo ligero que te mantiene energizado sin pesadez. Ideal para control de peso sin pasar hambre."
      },
      tiempo: {
        titulo: "Tiempo de Preparación - 30 Minutos",
        contenido: "Los 30 minutos totales se desglosan en 5 minutos de preparación activa y 25 minutos de horneado pasivo. Durante la preparación activa, lavas y cortas la batata en rodajas uniformes (2 min), la sazonas y colocas en la bandeja (1 min), y preparas el puré de aguacate (2 min). Los 25 minutos de horneado son tiempo pasivo donde puedes ducharte, vestirte, preparar café, o atender otras tareas matutinas. Es importante voltear las batatas a mitad de cocción (12-13 minutos) para asegurar que se doren uniformemente. Una vez horneadas, el montaje final toma solo 2 minutos: untar aguacate, espolvorear chía, añadir pimentón y hierbas. Puedes preparar las rodajas de batata horneadas con anticipación (duran 3 días refrigeradas) y simplemente calentarlas y añadir toppings frescos, reduciendo el tiempo a 10 minutos. Es inversión mínima de tiempo para máximo retorno nutricional. ¡Mira el video tutorial!",
        videoYoutube: "Dd2_Hgl0QvI"  // Video de tostada de batata
      }
    }
  },

  {
    id: 5,
    numero: "5",
    nombre: "Ensalada Mediterranean Power",
    imagen: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=1600&fit=crop",
    descripcion: "Mezcla fresca de hojas verdes, tomates cherry, pepino, aceitunas kalamata, queso feta y aderezo de hierbas mediterráneas.",
    
    etiquetas: ["MEDITERRÁNEA", "FRESCA", "VEGETARIANA", "RÁPIDA"],
    calorias: "320-400 CAL",
    tiempo: {
      preparacion: "15 min",
      coccion: "0 min",
      total: "15 min"
    },
    porciones: 2,
    dificultad: "Muy fácil",
    mejorTemporada: "Primavera y verano",
    
    descripcionDetallada: [
      "Esta ensalada captura la esencia de la dieta mediterránea, considerada una de las más saludables del mundo.",
      "Combina vegetales frescos y crujientes con el sabor intenso de las aceitunas kalamata y la cremosidad del queso feta.",
      "Es una comida completa que proporciona fibra, proteínas, grasas saludables y una explosión de sabores que te transportarán a las costas griegas.",
      "Perfecta como plato principal para almuerzos ligeros o como acompañamiento sofisticado en cenas."
    ],
    
    ingredientes: [
      { nombre: "Mezcla de hojas verdes (lechuga, rúcula, espinaca)", cantidad: "4 tazas", categoria: "base" },
      { nombre: "Tomates cherry", cantidad: "250g", categoria: "vegetales" },
      { nombre: "Pepino", cantidad: "1 unidad grande", categoria: "vegetales" },
      { nombre: "Pimiento rojo", cantidad: "1 unidad", categoria: "vegetales" },
      { nombre: "Cebolla morada", cantidad: "½ unidad", categoria: "vegetales" },
      { nombre: "Aceitunas kalamata", cantidad: "½ taza", categoria: "extras" },
      { nombre: "Queso feta", cantidad: "150g", categoria: "proteinas" },
      { nombre: "Aceite de oliva extra virgen", cantidad: "4 cucharadas", categoria: "aderezo" },
      { nombre: "Vinagre de vino tinto", cantidad: "2 cucharadas", categoria: "aderezo" },
      { nombre: "Jugo de limón", cantidad: "1 cucharada", categoria: "aderezo" },
      { nombre: "Orégano seco", cantidad: "1 cucharadita", categoria: "especias" },
      { nombre: "Ajo", cantidad: "1 diente", categoria: "aderezo" },
      { nombre: "Sal y pimienta", cantidad: "al gusto", categoria: "condimentos" }
    ],
    
    pasos: [
      {
        numero: 1,
        titulo: "Prepara todos los vegetales",
        descripcion: "Lava bien todas las hojas verdes y sécalas con un centrifugador de ensaladas o con toallas de papel. Corta los tomates cherry por la mitad. Pela y corta el pepino en medias lunas. Corta el pimiento en tiras finas. Corta la cebolla morada en rodajas finas y sumérgelas en agua fría durante 5 minutos para suavizar su sabor.",
        consejo: "Secar bien las hojas es crucial para que el aderezo se adhiera correctamente y la ensalada no quede aguada."
      },
      {
        numero: 2,
        titulo: "Prepara el aderezo mediterráneo",
        descripcion: "En un frasco con tapa o en un bowl pequeño, combina el aceite de oliva, el vinagre de vino tinto, el jugo de limón, el ajo picado finamente, el orégano, sal y pimienta. Agita vigorosamente o mezcla con un batidor hasta emulsionar.",
        consejo: "Prepara el aderezo con 10-15 minutos de anticipación para que los sabores se integren mejor."
      },
      {
        numero: 3,
        titulo: "Ensambla la ensalada",
        descripcion: "En un bowl grande, coloca las hojas verdes como base. Distribuye encima los tomates, el pepino, el pimiento y la cebolla escurrida. Añade las aceitunas kalamata. Desmenuza el queso feta con las manos y distribúyelo sobre la ensalada.",
        consejo: "No mezcles aún; presenta los ingredientes de forma colorida para una presentación atractiva."
      },
      {
        numero: 4,
        titulo: "Aliña y sirve",
        descripcion: "Justo antes de servir, vierte el aderezo sobre la ensalada. Mezcla suavemente con pinzas o dos cucharas grandes para distribuir uniformemente. Decora con hojas de albahaca fresca si lo deseas.",
        consejo: "Aliña justo antes de servir para mantener las hojas crujientes. Si sobra ensalada, guarda el aderezo por separado."
      }
    ],
    
    beneficios: [
      {
        titulo: "Corazón saludable",
        descripcion: "El aceite de oliva y las aceitunas proporcionan grasas monoinsaturadas que reducen el colesterol malo."
      },
      {
        titulo: "Rica en antioxidantes",
        descripcion: "Los vegetales coloridos aportan licopeno, betacarotenos y vitamina C que combaten el envejecimiento."
      },
      {
        titulo: "Mejora la digestión",
        descripcion: "Alto contenido de fibra que promueve la salud intestinal y la saciedad."
      },
      {
        titulo: "Fortalece los huesos",
        descripcion: "El queso feta proporciona calcio y el aceite de oliva ayuda en su absorción."
      }
    ],
    
    notasAdicionales: [
      "Esta ensalada es más sabrosa si los vegetales están a temperatura ambiente, no fríos del refrigerador.",
      "Puedes añadir garbanzos o quinoa cocida para convertirla en una comida más completa.",
      "El queso feta se puede sustituir por queso de cabra o mozzarella fresca.",
      "Prepara el aderezo en mayor cantidad y guárdalo en el refrigerador hasta 1 semana."
    ],
    
    variaciones: [
      {
        nombre: "Ensalada griega clásica",
        cambios: "Omite las hojas verdes y aumenta la cantidad de pepino, tomate y feta. Sirve en cubos grandes."
      },
      {
        nombre: "Ensalada con proteína",
        cambios: "Añade pollo a la parrilla, atún en conserva o camarones para más proteína."
      },
      {
        nombre: "Ensalada de garbanzos mediterránea",
        cambios: "Agrega garbanzos cocidos y sustituye el queso por más aceitunas para una versión vegana."
      }
    ],
    
    palabrasClave: ["ensalada", "mediterránea", "griega", "vegetariana", "feta", "aceitunas", "fresca"],

    // ==================== INFORMACIÓN DE MODALES ====================
    infoModales: {
      etiquetas: {
        "MEDITERRÁNEA": {
          titulo: "La Dieta Mediterránea: Patrimonio de la Humanidad",
          contenido: "Esta ensalada encarna los principios de la dieta mediterránea, declarada Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO en 2013. No es solo una forma de comer, es un estilo de vida milenario de Grecia, Italia, España y otros países del Mediterráneo que ha demostrado ser una de las dietas más saludables del planeta. Se basa en aceite de oliva como grasa principal (en lugar de mantequilla), abundancia de vegetales frescos, consumo moderado de lácteos fermentados (como feta), y uso generoso de hierbas aromáticas. Estudios científicos demuestran que seguir la dieta mediterránea reduce el riesgo de enfermedad cardíaca en 30%, diabetes tipo 2 en 23%, y mejora la longevidad. Las poblaciones mediterráneas tienen menos obesidad, menos cáncer, y mejor salud cerebral en la vejez. Esta ensalada es medicina preventiva en un plato, con sabores que celebran la vida."
        },
        "FRESCA": {
          titulo: "Ingredientes Frescos de Temporada",
          contenido: "La frescura es fundamental en esta ensalada. Utilizamos vegetales de temporada en su pico de madurez y sabor: tomates cherry reventando de dulzura natural, pepinos crujientes y hidratantes, pimientos rojos llenos de vitamina C, y hojas verdes recién cosechadas que aún tienen vida en ellas. Los productos frescos contienen significativamente más nutrientes que los almacenados por semanas: las vitaminas como la C se degradan con el tiempo, los antioxidantes disminuyen, y los fitonutrientes se pierden. Además, el sabor es incomparable: un tomate maduro de mercado local sabe completamente diferente a uno refrigerado por días. La frescura también garantiza textura óptima: vegetales crujientes y vibrantes, no marchitos o blandos. Al elegir productos frescos, también apoyas la agricultura local y reduces la huella de carbono del transporte. Frescura es sinónimo de máxima nutrición, máximo sabor, máxima vitalidad."
        },
        "VEGETARIANA": {
          titulo: "Opción Vegetariana Completa",
          contenido: "Esta ensalada es completamente vegetariana, perfecta para vegetarianos ovo-lacto o cualquiera que busque reducir su consumo de carne. El queso feta proporciona proteína de alta calidad (8g por cada 50g), calcio para huesos fuertes, y probióticos beneficiosos de la fermentación. Las aceitunas aportan grasas saludables y antioxidantes únicos. Los vegetales diversos ofrecen un espectro completo de vitaminas, minerales y fitonutrientes. Es una comida nutricionalmente completa sin necesidad de carne: tienes proteína del queso, carbohidratos complejos de los vegetales, grasas saludables del aceite de oliva y aceitunas, y fibra abundante que mejora la digestión. Además, obtiene hierro de las hojas verdes, vitamina C de los tomates y pimientos (que mejora la absorción del hierro), y vitamina K para la coagulación. Es la prueba de que puedes estar perfectamente nutrido sin productos animales de músculo."
        },
        "RÁPIDA": {
          titulo: "Lista en 15 Minutos",
          contenido: "En apenas 15 minutos puedes tener esta ensalada mediterránea completa en la mesa, haciéndola perfecta para comidas entre semana cuando el tiempo es limitado. Los 15 minutos se dividen así: 3 minutos para lavar y secar las hojas verdes, 5 minutos para picar todos los vegetales (tomates, pepino, pimiento, cebolla), 2 minutos para preparar el aderezo en un frasco, 3 minutos para ensamblar todo en un bowl, y 2 minutos para servir y disfrutar. No hay cocción involucrada, cero tiempo de espera, cero técnicas complicadas. Es más rápido que ordenar comida a domicilio y infinitamente más saludable. Puedes pre-picar los vegetales la noche anterior y guardarlos en contenedores separados, reduciendo el tiempo matutino o del almuerzo a literalmente 5 minutos. Es la solución perfecta cuando llegas hambriento de trabajar pero no quieres recurrir a comida chatarra. Rapidez no significa sacrificar nutrición o sabor."
        }
      },
      calorias: {
        titulo: "Contenido Calórico - 320-400 CAL",
        contenido: "El rango de 320-400 calorías por porción (para 2 personas) está perfectamente equilibrado para una comida principal ligera o una cena satisfactoria. La distribución calórica es inteligente: los vegetales (hojas, tomates, pepino, pimiento) aportan solo 80 calorías pero volumen masivo que llena tu estómago. El queso feta (75g) contribuye 200 calorías con proteína saciante y calcio. Las aceitunas kalamata añaden 60 calorías de grasas monoinsaturadas antiinflamatorias. El aceite de oliva del aderezo (2 cucharadas) suma 240 calorías de grasas cardioprotectoras que mejoran la absorción de vitaminas liposolubles A, D, E, K. Aunque el aceite parece alto en calorías, estudios muestran que las grasas del aceite de oliva extra virgen aumentan la saciedad y el metabolismo, evitando que comas en exceso después. Es perfecto para pérdida de peso porque la fibra abundante y las grasas saludables te mantienen satisfecho con relativamente pocas calorías."
      },
      tiempo: {
        titulo: "Preparación Rápida - 15 Minutos",
        contenido: "Esta ensalada demuestra que comer saludable no tiene que consumir tu tiempo. Los 15 minutos totales no involucran cocción, solo preparación fresca. Puedes hacerla aún más rápida con estos trucos: compra hojas verdes pre-lavadas (ahorra 5 min), usa vegetales pre-cortados del supermercado (ahorra 3 min), prepara el aderezo en lotes grandes los domingos y guárdalo refrigerado (ahorra 2 min). Con estas optimizaciones, puedes tener la ensalada lista en literalmente 5 minutos. Es más rápido que hacer un sándwich y 100 veces más nutritivo. Perfecta para preparar a última hora cuando no planificaste la comida, cuando llegas tarde del trabajo, o cuando recibes visitas inesperadas. La belleza de esta ensalada es que siempre puedes tener los ingredientes base en tu refrigerador (duran una semana) listos para ser ensamblados al instante. ¡Mira nuestro video de preparación express!",
        videoYoutube: "EIOgi1VNCus"  // Video de ensalada mediterránea
      }
    }
  },

  {
    id: 6,
    numero: "6",
    nombre: "Buddha Bowl Proteico",
    imagen: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&h=1600&fit=crop",
    descripcion: "Bowl equilibrado con tofu marinado, edamame, arroz integral, zanahoria rallada, col morada y tahini de sésamo.",
    
    etiquetas: ["VEGANO", "PROTEICO", "COMPLETO", "COLORIDO"],
    calorias: "450-550 CAL",
    tiempo: {
      preparacion: "20 min",
      coccion: "25 min",
      total: "45 min"
    },
    porciones: 2,
    dificultad: "Intermedio",
    mejorTemporada: "Todo el año",
    
    descripcionDetallada: [
      "El Buddha Bowl, también conocido como 'bowl de Buda', es un plato completo y balanceado que combina proteínas, carbohidratos, grasas saludables y vegetales en un solo recipiente.",
      "Esta versión proteica está diseñada especialmente para veganos y vegetarianos que buscan una comida nutritiva y satisfactoria sin productos animales.",
      "El tofu marinado proporciona proteína de alta calidad, mientras que el edamame añade textura y aminoácidos esenciales.",
      "La salsa de tahini (pasta de sésamo) no solo aporta un sabor delicioso, sino también calcio, hierro y grasas saludables."
    ],
    
    ingredientes: [
      { nombre: "Tofu firme", cantidad: "200g", categoria: "proteinas" },
      { nombre: "Arroz integral", cantidad: "1 taza", categoria: "base" },
      { nombre: "Edamame cocido", cantidad: "1 taza", categoria: "proteinas" },
      { nombre: "Col morada", cantidad: "2 tazas ralladas", categoria: "vegetales" },
      { nombre: "Zanahoria", cantidad: "1 unidad grande", categoria: "vegetales" },
      { nombre: "Aguacate", cantidad: "1 unidad", categoria: "grasas" },
      { nombre: "Pepino", cantidad: "½ unidad", categoria: "vegetales" },
      { nombre: "Rábanos", cantidad: "4 unidades", categoria: "vegetales" },
      { nombre: "Semillas de sésamo", cantidad: "2 cucharadas", categoria: "extras" },
      { nombre: "Salsa de soja", cantidad: "3 cucharadas", categoria: "marinada" },
      { nombre: "Aceite de sésamo", cantidad: "1 cucharada", categoria: "marinada" },
      { nombre: "Jengibre fresco", cantidad: "1 cm", categoria: "marinada" },
      { nombre: "Ajo", cantidad: "2 dientes", categoria: "marinada" },
      { nombre: "Tahini (pasta de sésamo)", cantidad: "3 cucharadas", categoria: "salsa" },
      { nombre: "Jugo de limón", cantidad: "2 cucharadas", categoria: "salsa" },
      { nombre: "Agua", cantidad: "2-3 cucharadas", categoria: "salsa" }
    ],
    
    pasos: [
      {
        numero: 1,
        titulo: "Cocina el arroz integral",
        descripcion: "Enjuaga el arroz integral bajo agua fría. En una olla mediana, combina el arroz con 2 tazas de agua y una pizca de sal. Lleva a ebullición, reduce el fuego, tapa y cocina durante 25-30 minutos hasta que el agua se absorba. Retira del fuego y deja reposar tapado 5 minutos.",
        consejo: "Para arroz más esponjoso, no lo revuelvas durante la cocción y déjalo reposar tapado después de cocido."
      },
      {
        numero: 2,
        titulo: "Marina y cocina el tofu",
        descripcion: "Escurre el tofu y presiónalo con toallas de papel para eliminar el exceso de líquido. Córtalo en cubos de 2 cm. Prepara la marinada mezclando la salsa de soja, aceite de sésamo, jengibre rallado y ajo picado. Marina el tofu durante 10-15 minutos. Calienta una sartén a fuego medio-alto y cocina el tofu 3-4 minutos por cada lado hasta que esté dorado.",
        consejo: "Presionar el tofu es esencial para que absorba la marinada y quede más firme y sabroso al cocinarlo."
      },
      {
        numero: 3,
        titulo: "Prepara los vegetales",
        descripcion: "Mientras se cocina el arroz y el tofu, prepara los vegetales. Ralla la zanahoria en tiras finas. Corta la col morada en tiras delgadas. Corta el aguacate en láminas. Corta el pepino en rodajas finas y los rábanos en láminas.",
        consejo: "Usa un rallador juliana o un pelador de vegetales para crear tiras largas y elegantes."
      },
      {
        numero: 4,
        titulo: "Prepara la salsa de tahini",
        descripcion: "En un bowl pequeño, mezcla el tahini, el jugo de limón, una pizca de sal y 2-3 cucharadas de agua hasta obtener una consistencia cremosa pero líquida. Ajusta la consistencia añadiendo más agua si es necesario.",
        consejo: "El tahini se espesa al principio al mezclarlo con líquido, pero sigue batiendo y se volverá suave y cremoso."
      },
      {
        numero: 5,
        titulo: "Monta tu Buddha Bowl",
        descripcion: "En bowls amplios, coloca el arroz integral como base. Distribuye en secciones el tofu, edamame, col morada, zanahoria, aguacate, pepino y rábanos. Rocía generosamente con la salsa de tahini y espolvorea semillas de sésamo por encima.",
        consejo: "Presenta cada ingrediente en su propia sección para crear un plato visualmente atractivo y colorido."
      }
    ],
    
    beneficios: [
      {
        titulo: "Proteína completa vegetal",
        descripcion: "El tofu y el edamame proporcionan todos los aminoácidos esenciales, ideal para dietas vegetarianas."
      },
      {
        titulo: "Rico en fibra",
        descripcion: "El arroz integral y los vegetales crudos mejoran la digestión y mantienen la saciedad prolongada."
      },
      {
        titulo: "Fuente de calcio sin lácteos",
        descripcion: "El tahini, el tofu y el edamame son excelentes fuentes de calcio vegetal."
      },
      {
        titulo: "Antioxidantes y fitoquímicos",
        descripcion: "La col morada contiene antocianinas que combaten la inflamación y el envejecimiento celular."
      }
    ],
    
    notasAdicionales: [
      "Puedes preparar todos los componentes con anticipación y montarlos en el momento de servir.",
      "El tofu se puede sustituir por tempeh o garbanzos crujientes al horno.",
      "Si no tienes tahini, puedes usar mantequilla de almendras o de cacahuete.",
      "Añade más vegetales según tu preferencia: brócoli al vapor, kale, remolacha, etc."
    ],
    
    variaciones: [
      {
        nombre: "Buddha Bowl asiático",
        cambios: "Sustituye el tahini por salsa de maní picante y añade kimchi o vegetales fermentados."
      },
      {
        nombre: "Buddha Bowl mexicano",
        cambios: "Usa frijoles negros en lugar de edamame, añade maíz, salsa y aguacate."
      },
      {
        nombre: "Buddha Bowl de invierno",
        cambios: "Sustituye los vegetales crudos por batata asada, brócoli al vapor y calabaza."
      }
    ],
    
    palabrasClave: ["buddha bowl", "vegano", "tofu", "arroz integral", "edamame", "tahini", "proteico"],

    // ==================== INFORMACIÓN DE MODALES ====================
    infoModales: {
      etiquetas: {
        "VEGANO": {
          titulo: "100% Vegano y Nutricionalmente Completo",
          contenido: "Este Buddha Bowl es la respuesta perfecta a quien dice que 'los veganos no obtienen suficiente proteína o nutrientes'. Cada componente fue seleccionado estratégicamente para proporcionar una nutrición completa sin productos animales. El tofu (soja fermentada) ofrece los 9 aminoácidos esenciales que tu cuerpo no puede producir. El edamame (soja verde) añade más proteína completa, fibra y isoflavonas que benefician la salud hormonal. El arroz integral proporciona energía de liberación lenta y vitaminas del complejo B. El tahini (pasta de sésamo) aporta calcio, hierro, zinc y grasas saludables. Los vegetales coloridos ofrecen un arcoíris de antioxidantes, vitaminas y minerales. No hay colesterol, no hay grasas saturadas dañinas, no hay hormonas ni antibióticos de animales. Es 100% plant-based pero 200% delicioso y nutritivo. Además, es más sostenible, usando 90% menos agua y generando 90% menos gases de efecto invernadero que una comida equivalente con carne."
        },
        "PROTEICO": {
          titulo: "Alto en Proteína Vegetal de Calidad",
          contenido: "Este bowl proporciona aproximadamente 25-30 gramos de proteína completa por porción, equivalente a una pechuga de pollo pequeña pero sin grasas saturadas ni colesterol. El tofu (200g) aporta 16g de proteína con todos los aminoácidos esenciales, siendo una de las pocas fuentes vegetales de proteína completa. El edamame (1 taza) añade 18g más de proteína, convirtiéndolo en un snack proteico por sí solo. El tahini contribuye 5g de proteína junto con calcio y hierro. El arroz integral, aunque principalmente carbohidrato, suma 5g adicionales de proteína. La combinación de estas fuentes asegura que obtienes no solo cantidad, sino calidad de proteína con alto valor biológico. Es perfecto para deportistas veganos, personas en construcción muscular, o cualquiera que busque proteína sin carne. La proteína vegetal además viene con fibra que mejora la saciedad y la salud digestiva, algo que la proteína animal no ofrece."
        },
        "COMPLETO": {
          titulo: "Comida Nutricionalmente Completa",
          contenido: "Este Buddha Bowl es el ejemplo perfecto de una comida balanceada que incluye todos los macronutrientes y micronutrientes esenciales en proporciones ideales. PROTEÍNAS (25-30g): tofu y edamame proporcionan aminoácidos esenciales para reparación muscular. CARBOHIDRATOS COMPLEJOS (45-50g): arroz integral ofrece energía sostenida sin picos de glucosa. GRASAS SALUDABLES (20-25g): aguacate, tahini y aceite de sésamo aportan omega-3, omega-6 y grasas monoinsaturadas para salud cardiovascular y cerebral. FIBRA (12-15g): vegetales crudos y arroz integral mejoran la digestión. VITAMINAS Y MINERALES: obtienes vitamina A (zanahoria), vitamina C (col morada), vitamina K (vegetales verdes), calcio (tahini, tofu), hierro (edamame, tahini), magnesio, potasio, zinc. No necesitas complementar con nada más. Es una comida completa en un solo bowl que nutre cada célula de tu cuerpo."
        },
        "COLORIDO": {
          titulo: "Come el Arcoíris para Máxima Salud",
          contenido: "Los colores vibrantes de este bowl no son solo estética, son indicadores visuales de nutrición diversa. Cada color representa diferentes familias de fitonutrientes con beneficios únicos: NARANJA (zanahoria): betacarotenos para salud visual y piel. MORADO (col morada): antocianinas que combaten inflamación y protegen el cerebro. VERDE (edamame, pepino): clorofila para desintoxicación y folato para producción de células. BLANCO/BEIGE (tofu, arroz, tahini): flavonoides para salud cardiovascular. ROJO/ROSADO (rábanos): antioxidantes que estimulan el sistema inmune. AMARILLO (semillas de sésamo): lignanos con propiedades anticancerígenas. La ciencia nutricional demuestra que comer un espectro amplio de colores asegura que obtienes una variedad completa de antioxidantes, vitaminas y minerales. Es como un seguro de salud en forma de alimento. Cuantos más colores, más protección contra enfermedades crónicas, envejecimiento y estrés oxidativo. Este bowl es medicina preventiva que celebra la belleza natural de los alimentos vegetales."
        }
      },
      calorias: {
        titulo: "Contenido Calórico Sustancial - 450-550 CAL",
        contenido: "El rango de 450-550 calorías hace de este Buddha Bowl una comida principal completa y satisfactoria que te mantiene energizado durante 5-6 horas. La distribución calórica es inteligentemente balanceada: el arroz integral (1/2 taza cocida) aporta 110 calorías de carbohidratos complejos que liberan energía gradualmente. El tofu (200g) contribuye 160 calorías con 16g de proteína saciante. El edamame (1 taza) añade 190 calorías más con 18g de proteína adicional. El aguacate (1/2) suma 120 calorías de grasas monoinsaturadas que mejoran la absorción de vitaminas. El tahini (3 cucharadas) agrega 180 calorías de grasas saludables y calcio. Los vegetales crudos suman solo 50 calorías pero volumen masivo. Estas son calorías densas en nutrientes, no vacías como comida procesada. Cada caloría viene acompañada de proteína, fibra, vitaminas o minerales. Es perfecto para mantener peso saludable porque la combinación de proteína, fibra y grasas genera saciedad extrema, evitando antojos y snacking innecesario. Nutrición máxima, hambre mínima."
      },
      tiempo: {
        titulo: "Tiempo de Preparación - 45 Minutos",
        contenido: "Los 45 minutos totales pueden parecer largos, pero gran parte es tiempo pasivo de cocción. Desglose: 25-30 minutos para cocinar el arroz integral (tiempo pasivo, puedes hacer otras cosas), 10 minutos para marinar el tofu (también pasivo), 5-7 minutos para cocinar el tofu en la sartén (supervisión mínima), 10 minutos para picar todos los vegetales, 2 minutos para preparar la salsa de tahini, y 3 minutos para ensamblar el bowl. La belleza de este plato es que puedes preparar componentes con anticipación: cocina el arroz integral el domingo y guárdalo refrigerado hasta 5 días, marina y cocina el tofu con anticipación (dura 4 días), y pre-corta los vegetales (duran 2-3 días en contenedores herméticos). Con meal prep, puedes reducir el tiempo de ensamblaje a literalmente 5 minutos: sacar ingredientes del refrigerador, calentar arroz y tofu 1 minuto en microondas, ensamblar y comer. Es inversión inteligente de tiempo para comidas nutritivas toda la semana. ¡Mira nuestro video de meal prep!",
        videoYoutube: "WQm6Q7hA8ZU"  // Video de Buddha Bowl
      }
    }
  },

  {
    id: 7,
    numero: "7",
    nombre: "Wrap de Pollo y Vegetales",
    imagen: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=1200&h=1600&fit=crop",
    descripcion: "Tortilla integral rellena de pechuga de pollo a la parrilla, lechuga, tomate, pepino y hummus de garbanzo casero.",
    
    etiquetas: ["PROTEICO", "PORTÁTIL", "RÁPIDO", "COMPLETO"],
    calorias: "380-450 CAL",
    tiempo: {
      preparacion: "10 min",
      coccion: "15 min",
      total: "25 min"
    },
    porciones: 2,
    dificultad: "Fácil",
    mejorTemporada: "Todo el año",
    
    descripcionDetallada: [
      "El wrap de pollo es la solución perfecta para comidas rápidas, nutritivas y portátiles que puedes llevar al trabajo, la universidad o disfrutar en un picnic.",
      "Esta versión saludable utiliza tortillas integrales, pechuga de pollo magra y un hummus casero que aporta cremosidad sin exceso de calorías.",
      "El equilibrio entre proteína magra, carbohidratos complejos y vegetales frescos lo convierte en una comida completa y balanceada.",
      "Perfecto para meal prep: puedes preparar los componentes con anticipación y armar los wraps en minutos."
    ],
    
    ingredientes: [
      { nombre: "Pechuga de pollo", cantidad: "300g", categoria: "proteinas" },
      { nombre: "Tortillas integrales grandes", cantidad: "2 unidades", categoria: "base" },
      { nombre: "Lechuga romana o iceberg", cantidad: "2 tazas", categoria: "vegetales" },
      { nombre: "Tomate", cantidad: "1 unidad grande", categoria: "vegetales" },
      { nombre: "Pepino", cantidad: "½ unidad", categoria: "vegetales" },
      { nombre: "Zanahoria rallada", cantidad: "½ taza", categoria: "vegetales" },
      { nombre: "Cebolla morada", cantidad: "¼ unidad", categoria: "vegetales" },
      { nombre: "Garbanzos cocidos", cantidad: "1 taza (para hummus)", categoria: "extras" },
      { nombre: "Tahini", cantidad: "2 cucharadas", categoria: "extras" },
      { nombre: "Jugo de limón", cantidad: "2 cucharadas", categoria: "extras" },
      { nombre: "Ajo", cantidad: "2 dientes", categoria: "extras" },
      { nombre: "Comino molido", cantidad: "½ cucharadita", categoria: "especias" },
      { nombre: "Pimentón dulce", cantidad: "½ cucharadita", categoria: "especias" },
      { nombre: "Aceite de oliva", cantidad: "3 cucharadas", categoria: "grasas" },
      { nombre: "Sal y pimienta", cantidad: "al gusto", categoria: "condimentos" }
    ],
    
    pasos: [
      {
        numero: 1,
        titulo: "Prepara el hummus casero",
        descripcion: "En una procesadora de alimentos o licuadora, combina los garbanzos escurridos, el tahini, el jugo de limón, el ajo, 2 cucharadas de aceite de oliva, comino, sal y 3-4 cucharadas de agua. Procesa hasta obtener una pasta suave y cremosa. Ajusta la consistencia con más agua si es necesario.",
        consejo: "Para un hummus extra suave, pela los garbanzos antes de procesarlos o usa garbanzos de bote de alta calidad."
      },
      {
        numero: 2,
        titulo: "Cocina el pollo a la parrilla",
        descripcion: "Corta la pechuga de pollo en tiras o déjala entera. Sazónala con sal, pimienta, pimentón dulce y un chorrito de aceite de oliva. Calienta una sartén grill o parrilla a fuego medio-alto. Cocina el pollo 5-7 minutos por cada lado hasta que esté dorado y completamente cocido. Deja reposar 5 minutos y córtalo en tiras.",
        consejo: "El pollo está listo cuando alcanza una temperatura interna de 75°C y los jugos salen claros al pincharlo."
      },
      {
        numero: 3,
        titulo: "Prepara los vegetales",
        descripcion: "Mientras se cocina el pollo, lava y corta la lechuga en tiras. Corta el tomate en rodajas finas eliminando las semillas. Corta el pepino en bastones delgados. Ralla la zanahoria. Corta la cebolla morada en rodajas finas.",
        consejo: "Eliminar las semillas del tomate evita que el wrap se humedezca demasiado y se desarme."
      },
      {
        numero: 4,
        titulo: "Calienta las tortillas",
        descripcion: "Calienta las tortillas en una sartén seca durante 20-30 segundos por cada lado, solo para que estén tibias y flexibles.",
        consejo: "Las tortillas tibias son más fáciles de enrollar y no se rompen."
      },
      {
        numero: 5,
        titulo: "Ensambla los wraps",
        descripcion: "Coloca cada tortilla sobre una superficie plana. Unta una capa generosa de hummus en el centro, dejando 2-3 cm libres en los bordes. Coloca las tiras de lechuga, seguidas del pollo, tomate, pepino, zanahoria y cebolla. Dobla los lados hacia el centro y enrolla firmemente desde abajo hacia arriba.",
        consejo: "No sobrecargues el wrap de relleno o será difícil de enrollar y comer sin que se desarme."
      },
      {
        numero: 6,
        titulo: "Corta y sirve",
        descripcion: "Corta cada wrap diagonalmente por la mitad. Envuelve la parte inferior con papel pergamino o aluminio para facilitar su consumo. Sirve inmediatamente o envuelve bien para llevar.",
        consejo: "Si lo preparas con anticipación, envuélvelo bien en papel film y guárdalo en el refrigerador hasta 24 horas."
      }
    ],
    
    beneficios: [
      {
        titulo: "Alta en proteína magra",
        descripcion: "El pollo proporciona proteína de alta calidad con bajo contenido graso, ideal para mantener la masa muscular."
      },
      {
        titulo: "Energía sostenida",
        descripcion: "Las tortillas integrales aportan carbohidratos complejos que liberan energía de forma gradual."
      },
      {
        titulo: "Rico en fibra y vitaminas",
        descripcion: "Los vegetales frescos y el hummus proporcionan fibra, vitaminas y minerales esenciales."
      },
      {
        titulo: "Comida portátil perfecta",
        descripcion: "Ideal para llevar al trabajo, escuela o actividades al aire libre sin necesidad de refrigeración inmediata."
      }
    ],
    
    notasAdicionales: [
      "Puedes usar pollo precocido o rotisserie para ahorrar tiempo.",
      "El hummus casero se conserva en el refrigerador hasta 5 días en un recipiente hermético.",
      "Si no tienes tiempo para hacer hummus, usa hummus comercial de buena calidad.",
      "Añade queso rallado, aguacate o salsa picante según tu preferencia."
    ],
    
    variaciones: [
      {
        nombre: "Wrap César con pollo",
        cambios: "Sustituye el hummus por aderezo césar ligero, añade queso parmesano y crutones."
      },
      {
        nombre: "Wrap mediterráneo",
        cambios: "Usa queso feta, aceitunas, pepinos y salsa tzatziki en lugar de hummus."
      },
      {
        nombre: "Wrap vegetariano",
        cambios: "Omite el pollo y añade más garbanzos asados, falafel o tofu."
      }
    ],
    
    palabrasClave: ["wrap", "pollo", "hummus", "integral", "portátil", "almuerzo", "rápido"],

    // ==================== INFORMACIÓN DE MODALES ====================
    infoModales: {
      etiquetas: {
        "PROTEICO": {
          titulo: "Alto Contenido Proteico - 35-40g por Porción",
          contenido: "Este wrap es una bomba proteica diseñada para quienes necesitan mantener o construir masa muscular, recuperarse después del ejercicio, o simplemente mantenerse saciados por horas. La pechuga de pollo (150g) aporta 35g de proteína magra de alto valor biológico con todos los aminoácidos esenciales. El hummus de garbanzos añade 8g más de proteína vegetal junto con fibra que mejora la absorción. La tortilla integral contribuye 6g adicionales. En total, obtienes 45-50g de proteína por wrap completo, equivalente a 1.5 pechugas de pollo pequeñas. Esta cantidad es perfecta para una comida post-entrenamiento que maximiza la síntesis proteica muscular, o para un almuerzo que te mantiene lleno hasta la cena sin necesidad de snacks. La proteína también tiene el mayor efecto térmico de todos los macronutrientes, lo que significa que tu cuerpo quema más calorías digiriéndola. Es nutrición estratégica para atletas, personas activas, o cualquiera en programa de pérdida de peso que quiere mantener músculo."
        },
        "PORTÁTIL": {
          titulo: "La Comida Portátil Perfecta",
          contenido: "Este wrap fue diseñado pensando en movilidad y conveniencia sin sacrificar nutrición. Su formato enrollado y autocontenido lo hace perfecto para comer con una mano mientras conduces, caminas o trabajas. No necesita cubiertos, platos ni mantel. Envuélvelo en papel aluminio o pergamino y se mantiene intacto durante horas sin refrigeración inmediata (aunque es mejor refrigerarlo si pasarán más de 3-4 horas). Cabe perfectamente en loncheras, mochilas, bolsos o portafolio. Es la solución ideal para profesionales ocupados, estudiantes con horarios apretados, padres con niños activos, o aventureros que necesitan comidas en movimiento. A diferencia de las opciones de comida rápida que encuentras en la calle (hamburguesas, pizza), este wrap proporciona proteína de calidad, vegetales frescos, carbohidratos complejos y grasas saludables. Es fast food saludable hecho en casa. Prepara varios el domingo para tener almuerzos nutritivos listos toda la semana."
        },
        "RÁPIDO": {
          titulo: "Listo en Solo 25 Minutos",
          contenido: "Con apenas 25 minutos de principio a fin, este wrap demuestra que comer saludable no tiene que ser complicado ni consumir tu tiempo. Desglose del tiempo: 5 minutos para hacer el hummus en procesadora (o usa comprado para ahorrar tiempo), 7 minutos para cocinar el pollo a la parrilla (mientras tanto puedes picar vegetales), 5 minutos para picar todos los vegetales frescos, 5 minutos para ensamblar ambos wraps, y 3 minutos para limpiar. Es más rápido que ordenar delivery y esperar, más económico que comprar lunch fuera, e infinitamente más saludable que opciones de comida rápida. Con estrategias de meal prep, puedes reducir el tiempo dramáticamente: cocina varios pechugas de pollo el domingo (duran 4 días), prepara hummus en lote grande (dura 1 semana), y pre-corta vegetales (duran 2-3 días). Con estos componentes listos, ensamblar un wrap toma literalmente 3 minutos. Es la respuesta a 'no tengo tiempo para cocinar saludable'."
        },
        "COMPLETO": {
          titulo: "Comida Nutricionalmente Completa",
          contenido: "Este wrap no es solo un snack, es una comida completa y balanceada que proporciona todos los macronutrientes y micronutrientes esenciales en un solo paquete conveniente. PROTEÍNA (35-40g): pollo magro y hummus de garbanzos proveen aminoácidos para reparación muscular y saciedad prolongada. CARBOHIDRATOS COMPLEJOS (40-45g): tortilla integral ofrece energía sostenida con bajo índice glucémico, sin causar picos de azúcar. GRASAS SALUDABLES (12-15g): tahini del hummus y aceite de oliva aportan grasas monoinsaturadas para salud cardiovascular y absorción de vitaminas. FIBRA (10-12g): garbanzos, tortilla integral y vegetales crudos mejoran digestión y microbioma intestinal. VITAMINAS Y MINERALES: vitamina A (zanahoria), vitamina C (tomate, lechuga), vitamina K, hierro, calcio, magnesio, potasio. No necesitas acompañarlo con nada más. Es autosuficiente nutricionalmente. Una comida que te mantiene energizado, satisfecho y nutrido durante 4-5 horas sin crashes ni antojos."
        }
      },
      calorias: {
        titulo: "Contenido Calórico Moderado - 380-450 CAL",
        contenido: "El rango de 380-450 calorías por wrap lo convierte en una opción perfecta para control de peso sin pasar hambre. La distribución calórica es inteligente: la pechuga de pollo (150g) aporta 165 calorías de proteína pura con casi cero grasa. La tortilla integral (una grande) contribuye 180 calorías de carbohidratos complejos con fibra. El hummus (3-4 cucharadas) añade 120 calorías de proteína vegetal y grasas saludables del tahini. Los vegetales frescos (lechuga, tomate, pepino, zanahoria, cebolla) suman solo 40 calorías pero volumen masivo que llena tu estómago. A pesar del contenido calórico moderado, este wrap te mantiene increíblemente saciado gracias a los 40g de proteína, 10g de fibra, y grasas saludables que ralentizan la digestión. Es perfecto para dietas de 1,500-2,000 calorías diarias, funcionando como almuerzo principal que previene el picoteo de la tarde. Comparado con un wrap típico de cadena de comida rápida (800-1,200 calorías con grasas trans), este es nutrición superior con la mitad de calorías."
      },
      tiempo: {
        titulo: "Preparación Eficiente - 25 Minutos Totales",
        contenido: "Los 25 minutos de preparación están optimizados para máxima eficiencia. Así es como funciona el tiempo: Minuto 0-5: mientras precalientas la sartén grill, prepara el hummus en la procesadora (30 segundos activos, 4 minutos procesando). Minuto 5-12: cocina el pollo en la parrilla (7 minutos, voltea una vez). Minuto 7-12: mientras se cocina el pollo, pica todos los vegetales simultáneamente. Minuto 12-14: deja reposar el pollo y córtalo en tiras. Minuto 14-20: ensambla ambos wraps paso a paso. Minuto 20-25: corta, envuelve y guarda o sirve. Con multitasking, aprovechas cada minuto. Para acelerar más: usa pollo precocido (ahorra 12 min), usa hummus comprado (ahorra 5 min), compra vegetales pre-cortados (ahorra 5 min). Con estas optimizaciones, tiempo total: 3 minutos. Es la eficiencia máxima sin sacrificar calidad. ¡Mira nuestro video de preparación rápida!",
        videoYoutube: "vTbm0mP4yZ0"  // Video de wrap de pollo
      }
    }
  },

  {
    id: 8,
    numero: "8",
    nombre: "Açai Bowl Energético",
    imagen: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=1200&h=1600&fit=crop",
    descripcion: "Base cremosa de açai congelado cubierto con granola artesanal, plátano, fresas, arándanos y coco rallado.",
    
    etiquetas: ["ANTIOXIDANTE", "ENERGÉTICO", "DESAYUNO", "SUPERALIMENTO"],
    calorias: "350-450 CAL",
    tiempo: {
      preparacion: "10 min",
      coccion: "0 min",
      total: "10 min"
    },
    porciones: 1,
    dificultad: "Muy fácil",
    mejorTemporada: "Todo el año",
    
    descripcionDetallada: [
      "El açai bowl se ha convertido en el desayuno favorito de atletas, influencers de salud y cualquiera que busque comenzar el día con energía y nutrición.",
      "El açai (se pronuncia 'asaí') es una baya amazónica rica en antioxidantes, fibra y grasas saludables, considerada uno de los superalimentos más potentes del planeta.",
      "Esta receta crea una base cremosa similar a un helado suave, pero mucho más saludable, que sirve de lienzo para una variedad de toppings coloridos y nutritivos.",
      "Perfecta para desayunos, post-entrenamiento o como snack energético en cualquier momento del día."
    ],
    
    ingredientes: [
      { nombre: "Pulpa de açai congelada", cantidad: "200g (2 paquetes)", categoria: "base" },
      { nombre: "Plátano congelado", cantidad: "1 unidad", categoria: "base" },
      { nombre: "Leche de almendras o coco", cantidad: "½ taza (125ml)", categoria: "líquidos" },
      { nombre: "Plátano fresco", cantidad: "½ unidad", categoria: "toppings" },
      { nombre: "Fresas frescas", cantidad: "5-6 unidades", categoria: "toppings" },
      { nombre: "Arándanos", cantidad: "¼ taza", categoria: "toppings" },
      { nombre: "Granola artesanal", cantidad: "¼ taza", categoria: "toppings" },
      { nombre: "Coco rallado", cantidad: "2 cucharadas", categoria: "toppings" },
      { nombre: "Semillas de chía", cantidad: "1 cucharada", categoria: "extras" },
      { nombre: "Miel o jarabe de arce", cantidad: "1 cucharada (opcional)", categoria: "extras" },
      { nombre: "Mantequilla de almendras", cantidad: "1 cucharada (opcional)", categoria: "extras" }
    ],
    
    pasos: [
      {
        numero: 1,
        titulo: "Prepara la base de açai",
        descripcion: "Saca la pulpa de açai congelada del congelador y déjala reposar 3-5 minutos para que se ablande ligeramente (debe estar aún congelada pero no dura como una piedra). Corta el plátano congelado en rodajas.",
        consejo: "No dejes que el açai se descongele completamente o la textura será demasiado líquida en lugar de cremosa como helado."
      },
      {
        numero: 2,
        titulo: "Licúa hasta obtener consistencia cremosa",
        descripcion: "En una licuadora de alta potencia, combina la pulpa de açai, el plátano congelado y la leche vegetal. Licua a baja velocidad inicialmente, usando el émbolo si tu licuadora lo tiene, hasta obtener una mezcla muy espesa y cremosa similar a helado suave. Añade más leche solo si es absolutamente necesario para que las aspas se muevan.",
        consejo: "La clave es mantener la mezcla ESPESA. Si queda muy líquida, parecerá un smoothie y no tendrá la textura característica del açai bowl."
      },
      {
        numero: 3,
        titulo: "Sirve en un bowl",
        descripcion: "Vierte la mezcla de açai en un bowl amplio y poco profundo. Alisa la superficie con una cuchara para crear una base uniforme sobre la cual colocar los toppings.",
        consejo: "Usa un bowl frío para mantener la base de açai más firme por más tiempo."
      },
      {
        numero: 4,
        titulo: "Decora con los toppings",
        descripcion: "Ahora viene la parte divertida y artística. Corta el plátano fresco en rodajas y las fresas en láminas. Distribuye los toppings de forma decorativa: puedes hacer líneas, secciones o cualquier diseño creativo. Añade la granola, arándanos, coco rallado y semillas de chía. Si lo deseas, rocía con miel y añade mantequilla de almendras.",
        consejo: "Coloca primero los toppings más pesados (granola) y luego los más ligeros para evitar que se hundan en la base."
      },
      {
        numero: 5,
        titulo: "Sirve inmediatamente",
        descripcion: "El açai bowl debe consumirse inmediatamente mientras la base está firme y cremosa. Usa una cuchara para tomar bocados que incluyan la base y los toppings juntos.",
        consejo: "Toma una foto para Instagram antes de comer, ¡este bowl es digno de compartir!"
      }
    ],
    
    beneficios: [
      {
        titulo: "Súper rico en antioxidantes",
        descripcion: "El açai contiene más antioxidantes que arándanos, moras o fresas, protegiendo las células del daño oxidativo."
      },
      {
        titulo: "Energía natural y sostenida",
        descripcion: "Los carbohidratos naturales de las frutas y la granola proporcionan energía inmediata y prolongada."
      },
      {
        titulo: "Mejora la salud cardiovascular",
        descripcion: "Los ácidos grasos omega-3 del açai ayudan a reducir el colesterol malo y mejorar la circulación."
      },
      {
        titulo: "Fortalece el sistema inmune",
        descripcion: "Las vitaminas C y A de las frutas frescas fortalecen las defensas del organismo."
      },
      {
        titulo: "Piel radiante",
        descripcion: "Los antioxidantes combaten el envejecimiento prematuro y promueven una piel saludable."
      }
    ],
    
    notasAdicionales: [
      "La pulpa de açai se vende congelada en tiendas de alimentos saludables, supermercados o en línea.",
      "Si no encuentras pulpa de açai, puedes usar polvo de açai mezclado con frutas congeladas.",
      "Congela tus plátanos con anticipación: pélalos, córtalos en rodajas y guárdalos en bolsas en el congelador.",
      "La granola casera es más saludable que la comercial, que suele tener mucha azúcar añadida."
    ],
    
    variaciones: [
      {
        nombre: "Açai Bowl tropical",
        cambios: "Añade mango, piña, kiwi y coco fresco para un toque tropical."
      },
      {
        nombre: "Açai Bowl proteico",
        cambios: "Añade una cucharada de proteína en polvo a la base y cubre con mantequilla de maní y almendras."
      },
      {
        nombre: "Açai Bowl de chocolate",
        cambios: "Añade cacao en polvo a la base y cubre con chips de chocolate oscuro y avellanas."
      },
      {
        nombre: "Dragon fruit bowl",
        cambios: "Sustituye el açai por pitaya (dragon fruit) congelada para un color rosa vibrante."
      }
    ],
    
    palabrasClave: ["açai", "acai", "bowl", "superalimento", "desayuno", "antioxidante", "energético", "granola"],

    // ==================== INFORMACIÓN DE MODALES ====================
    infoModales: {
      etiquetas: {
        "ANTIOXIDANTE": {
          titulo: "Poder Antioxidante del Açai",
          contenido: "El açai es considerado uno de los alimentos con mayor capacidad antioxidante del planeta, midiendo 102,700 en la escala ORAC (Capacidad de Absorción de Radicales de Oxígeno) por cada 100g. Para poner esto en perspectiva, los arándanos miden 4,669 y las fresas 1,540 en la misma escala. Esta potencia antioxidante proviene principalmente de las antocianinas (los pigmentos morados oscuros) que combaten los radicales libres responsables del envejecimiento celular, enfermedades crónicas y estrés oxidativo. Los antioxidantes del açai protegen el ADN del daño, reducen la inflamación sistémica, mejoran la función cerebral y cardiovascular, y previenen el deterioro relacionado con la edad. Las frutas frescas del bowl (fresas, arándanos) añaden más antioxidantes como vitamina C y quercetina. Es literalmente medicina preventiva que sabe a helado. Un bowl de açai proporciona tu dosis diaria completa de antioxidantes, protegiendo cada célula de tu cuerpo contra el envejecimiento y las enfermedades."
        },
        "ENERGÉTICO": {
          titulo: "Energía Limpia y Sostenida",
          contenido: "Este açai bowl es la alternativa perfecta al café y bebidas energéticas, proporcionando energía natural sin nerviosismo, ansiedad o crash posterior. La energía proviene de múltiples fuentes sinérgicas: los carbohidratos naturales del plátano y las frutas se absorben rápidamente para energía inmediata, la granola aporta carbohidratos complejos de liberación lenta que mantienen los niveles de glucosa estables por horas, y las grasas saludables del açai ralentizan la digestión para energía prolongada. El açai también contiene pequeñas cantidades de cafeína natural (menos que el café) junto con teobromina, proporcionando alerta mental suave sin nerviosismo. Las vitaminas del complejo B de la granola y frutas son cofactores esenciales para la producción de ATP (energía celular). Es perfecto como desayuno pre-ejercicio, snack de media tarde cuando necesitas un boost, o post-entrenamiento para reponer glucógeno muscular. Energía que funciona con tu cuerpo, no contra él."
        },
        "DESAYUNO": {
          titulo: "El Desayuno Perfecto para Empezar el Día",
          contenido: "Este açai bowl representa la forma ideal de romper el ayuno nocturno y preparar tu cuerpo para un día productivo. A diferencia de desayunos pesados con huevos y tocino que te dejan somnoliento, o desayunos dulces con cereales azucarados que causan crashes, este bowl proporciona energía limpia y sostenida. Los carbohidratos de frutas y granola activan tu metabolismo inmediatamente, las proteínas de la granola y semillas de chía mantienen la saciedad hasta el almuerzo, y los antioxidantes del açai protegen tus células durante todo el día. La fibra (8-10g) mejora la digestión y el tránsito intestinal matutino. Es hidratante gracias al contenido de agua de las frutas frescas. Además, es visualmente atractivo y delicioso, lo que hace que realmente esperes el desayuno en lugar de saltártelo. Establece el tono nutricional para todo el día: cuando comienzas bien, tiendes a elegir mejor durante las comidas restantes."
        },
        "SUPERALIMENTO": {
          titulo: "Açai: El Superalimento Amazónico",
          contenido: "El açai (Euterpe oleracea) es una pequeña baya morado-oscura que crece en las palmeras de açaí nativas de las selvas tropicales de Brasil, principalmente en la región amazónica. Ha sido un alimento básico de las tribus indígenas durante siglos, valorado por su increíble densidad nutricional y capacidades energéticas. Se ganó el estatus de 'superalimento' por su perfil nutricional único: contiene antocianinas antioxidantes en niveles astronómicos, ácidos grasos omega-3, 6 y 9 para salud cardiovascular y cerebral, 19 aminoácidos (más que la mayoría de frutas), fibra para salud digestiva, vitaminas A, C y E, minerales como hierro, calcio y potasio, y fitoesteroles que reducen el colesterol. Estudios científicos han demostrado que el açai mejora la función cognitiva, protege contra enfermedades cardíacas, potencia el sistema inmune, y tiene propiedades anticancerígenas. No es exageración del marketing, es ciencia respaldada por investigación. Es uno de los pocos alimentos que realmente merece el término 'superalimento'."
        }
      },
      calorias: {
        titulo: "Contenido Calórico Equilibrado - 350-450 CAL",
        contenido: "El rango de 350-450 calorías hace de este açai bowl un desayuno o snack perfectamente calibrado que proporciona energía sin exceso. La distribución calórica es: la pulpa de açai (200g) aporta 140 calorías con antioxidantes y grasas omega, el plátano congelado añade 100 calorías de carbohidratos energéticos y potasio, las frutas frescas suman 60 calorías con vitaminas y fibra, la granola contribuye 120 calorías de carbohidratos complejos y proteína, el coco rallado y semillas de chía añaden 70 calorías de grasas saludables y omega-3. Estas son calorías nutricionalmente densas, no vacías: cada caloría viene acompañada de vitaminas, minerales, antioxidantes o fibra. A pesar del contenido calórico moderado, te mantiene lleno por 3-4 horas gracias a la fibra, grasas saludables y proteína de la granola. Es perfecto para personas activas, deportistas, o cualquiera que necesita energía sostenida. Comparado con un desayuno típico de pastelería o cereal azucarado (mismas calorías), este bowl proporciona nutrición 10 veces superior."
      },
      tiempo: {
        titulo: "Preparación Ultra Rápida - Solo 10 Minutos",
        contenido: "Los 10 minutos de preparación son tan rápidos que literalmente no tienes excusa para no desayunar saludablemente. Desglose exacto: Minuto 0-3: saca el açai del congelador y déjalo ablandar 3 minutos mientras preparas otros ingredientes. Minuto 3-5: corta el plátano congelado, saca frutas frescas y toppings del refrigerador. Minuto 5-7: licua la base de açai hasta consistencia cremosa (1-2 minutos de licuado). Minuto 7-8: vierte la base en el bowl y alisa la superficie. Minuto 8-10: decora artísticamente con todos los toppings en secciones coloridas. Es más rápido que ir a un café y ordenar un latte, más económico que comprar un açai bowl en restaurante ($12-15), e infinitamente más saludable que un desayuno de drive-through. Si congelas plátanos con anticipación y tienes açai en stock, puedes hacerlo cada mañana sin pensarlo. Es la inversión mínima de tiempo para retorno máximo de nutrición y energía. ¡Mira el video para ver lo simple que es!",
        videoYoutube: "63-9kcAz6yI"  // Video de açai bowl
      }
    }
  }
];
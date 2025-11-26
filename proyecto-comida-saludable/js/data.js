// js/data.js - Base de datos expandida de contenido de comidas saludables
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
    
    palabrasClave: ["quinoa", "desayuno", "salmón", "huevo", "cena", "parisino"]
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
    
    palabrasClave: ["salmón", "pescado", "omega-3", "espárragos", "horno", "saludable", "proteína"]
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
    
    palabrasClave: ["smoothie", "détox", "verde", "vegano", "desayuno", "energético", "saludable"]
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
    
    palabrasClave: ["batata", "sin gluten", "aguacate", "vegano", "tostada", "paleo", "desayuno"]
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
    
    palabrasClave: ["ensalada", "mediterránea", "griega", "vegetariana", "feta", "aceitunas", "fresca"]
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
    
    palabrasClave: ["buddha bowl", "vegano", "tofu", "arroz integral", "edamame", "tahini", "proteico"]
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
    
    palabrasClave: ["wrap", "pollo", "hummus", "integral", "portátil", "almuerzo", "rápido"]
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
    
    palabrasClave: ["açai", "acai", "bowl", "superalimento", "desayuno", "antioxidante", "energético", "granola"]
  }
];
    // =======================================================
    // 1. DATOS (ENVASES Y ESENCIAS)
    // =======================================================
    const ENVASES_DATA = {
      etoile: {
        nombre: "ÉTOILE",
        desc: "Vela vegetal y natural en envase de vidrio cristal reutilizable con pabilo 100% algodón. Medidas: 8.5 × 8.5 cm.",
        precio: 21000,
        img: "étoile.jpg"
      },
      etoile_tapa: {
        nombre: "ÉTOILE CON TAPA",
        desc: "Vela vegetal y natural en envase de vidrio cristal reutilizable con tapa dorada y pabilo 100% algodón. Medidas: 8.5 × 8.5 cm.",
        precio: 22000,
        img: "étoilecontapa.jpg"
      },
      espoir_mat: {
        nombre: "ESPOIR MAT",
        desc: "Vela vegetal y natural en envase de vidrio verde mate reutilizable con pabilo 100% algodón. Medidas: 8.5 × 8.5 cm.",
        precio: 22000,
        img: "espoirmat.jpg"
      },
      espoir_mat_tapa: {
        nombre: "ESPOIR MAT CON TAPA",
        desc: "Vela vegetal y natural en envase de vidrio verde mate reutilizable con tapa dorada y pabilo 100% algodón. Medidas: 8.5 × 8.5 cm.",
        precio: 23000,
        img: "espoirmatcontapa.jpg"
      },
      prune_mat: {
        nombre: "PRUNE MAT",
        desc: "Vela vegetal y natural en envase de vidrio color ciruela mate reutilizable con pabilo 100% algodón. Medidas: 8.5 × 8.5 cm.",
        precio: 22000,
        img: "prunemat.jpg"
      },
      prune_mat_tapa: {
        nombre: "PRUNE MAT CON TAPA",
        desc: "Vela vegetal y natural en envase de vidrio ciruela mate con tapa dorada reutilizable y pabilo 100% algodón. Medidas: 8.5 × 8.5 cm.",
        precio: 23000,
        img: "prunematcontapa.jpg"
      },
      noir_mat: {
        nombre: "NOIR MAT",
        desc: "Vela vegetal y natural en envase de vidrio negro mate reutilizable con pabilo 100% algodón. Medidas: 8.5 × 8.5 cm.",
        precio: 22000,
        img: "noirmat.jpg"
      },
      noir_mat_tapa: {
        nombre: "NOIR MAT CON TAPA",
        desc: "Vela vegetal y natural en envase de vidrio negro mate reutilizable con tapa dorada y pabilo 100% algodón. Medidas: 8.5 × 8.5 cm.",
        precio: 23000,
        img: "noirmatcontapa.jpg"
      },
      bleu: {
        nombre: "BLEU",
        desc: "Vela vegetal y natural en envase de aluminio azul reutilizable con tapa y pabilo 100% algodón. Medidas: 8.8 cm.",
        precio: 25000,
        img: "bleu.jpg"
      },
      petit_givre_mat: {
        nombre: "PETIT GIVRÉ MAT",
        desc: "Vela vegetal y natural en envase de vidrio esmerilado mate reutilizable con pabilo 100% algodón. Medidas: 7.8 cm.",
        precio: 21000,
        img: "petitgivremat.jpg"
      },
      petit_givre_mat_tapa: {
        nombre: "PETIT GIVRÉ MAT CON TAPA",
        desc: "Vela vegetal y natural en envase de vidrio esmerilado mate con tapa dorada y pabilo 100% algodón. Medidas: 7.8 cm.",
        precio: 22000,
        img: "petitgivrematcontapa.jpg"
      },
      soleil: {
        nombre: "SOLEIL",
        desc: "Vela vegetal y natural en envase de vidrio cristal reutilizable, disponible con o sin tapa. Medidas: 8.8 cm.",
        precio: 15000,
        img: "soleil.jpg"
      },
      jolie_tapa: {
        nombre: "JOLIE CON TAPA",
        desc: "Vela vegetal y natural en envase de vidrio beige reutilizable con tapa dorada y pabilo 100% algodón. Medidas: 7.5 cm.",
        precio: 22500,
        img: "joliecontapa.jpg"
      },
      jolie_mat_tapa: {
        nombre: "JOLIE MAT CON TAPA",
        desc: "Vela vegetal y natural en envase de vidrio negro mate reutilizable con tapa dorada. Medidas: 7.5 cm.",
        precio: 23500,
        img: "joliematcontapa.jpg"
      },
      compota: {
        nombre: "COMPOTA",
        desc: "Vela vegetal y natural en envase de cerámica artesanal reutilizable de 300 ml. Ideal como pieza decorativa o regalo. Medidas: 9 cm aprox.",
        precio: 46000,
        img: "assets/compota.jpg"
      },
      bulles: {
        nombre: "BULLES",
        desc: "Edición limitada. Vela vegetal y natural en envase de vidrio cristal labrado con tapa. Medidas: 6 × 8 cm.",
        precio: 15000,
        img: "bulles.jpg"
      },
      noir_ii: {
        nombre: "NOIR II",
        desc: "Vela vegetal y natural en envase de vidrio negro mate con tapa hermética ajustada y pabilo 100% algodón. Medidas: 8.5 × 8.5 cm.",
        precio: 23000,
        img: "noirII.jpg"
      },
      petit_noir_mat_ii: {
        nombre: "PETIT NOIR MAT II",
        desc: "Versión compacta del Noir Mat en vidrio negro mate con tapa dorada y pabilo 100% algodón. Medidas: 7.5 cm.",
        precio: 22500,
        img: "petitnoirmatII.jpg"
      },
      amour_tapa: {
        nombre: "AMOUR",
        desc: "Vela vegetal y natural en envase de vidrio cristal labrado reutilizable con tapa. Medidas: 10 × 10 cm.",
        precio: 30000,
        img: "amour.jpg"
      },
      petit_lumiere_tapa: {
        nombre: "PETIT LUMIÈRE CON TAPA",
        desc: "Vela vegetal y natural en envase de vidrio beige reutilizable con tapa dorada y pabilo 100% algodón. Medidas: 7.8 cm.",
        precio: 22000,
        img: "petitlumierecontapa.jpg"
      },
    };

    const RESENAS_BASE = [
      {
        nombre: "Julieta Pérez",
        texto: "Las velas Europa son un viaje directo a la costa italiana. La de limoncello es mi favorita.",
        estrellas: 5
      },
      {
        nombre: "Natalia Suárez",
        texto: "Compré la colección Caribe y fue un golazo para regalar. El aroma a mango y tiaré es espectacular.",
        estrellas: 5
      },
      {
        nombre: "Gonzalo Quiroga",
        texto: "La citronella de verano me salvó las noches en el balcón. Buen balance entre aroma y funcionalidad.",
        estrellas: 4
      },
      {
        nombre: "Ana Martínez",
        texto: "Las velas tienen un aroma increíble y transforman por completo el ambiente. Se nota la dedicación en cada detalle.",
        estrellas: 5
      },
      {
        nombre: "Sofía López",
        texto: "Hermosas presentaciones y fragancias suaves, ideales para regalar. Me encantó la inspiración viajera.",
        estrellas: 5
     },
      {
        nombre: "Lucía Fernández",
        texto: "Probé varias esencias y todas tienen una identidad propia. No es un aroma genérico: realmente se siente el concepto de viaje. La de lavanda y vainilla es mi favorita para la noche.",
        estrellas: 5
        },
      {
        nombre: "Mariano Gómez",
        texto: "Me sorprendió la duración del aroma incluso apagada la vela. El envase es hermoso y combina perfecto con la deco del living. Se nota que es un producto artesanal bien cuidado.",
        estrellas: 5
      },
      {
        nombre: "Florencia Rivas",
        texto: "Compré una como regalo y terminé quedándome otra. La presentación es impecable y el perfume no empalaga. Ideal para regalar algo distinto y con personalidad.",
        estrellas: 4
      }
    ];

    let ESENCIAS_API = {};
  
    const ESENCIAS = {
      africa: {
        "Vainilla Madagascar y Cacao": {
          corta: "Fondo cálido, envolvente y cremoso con notas de cacao profundo.",
          larga: "Inspirada en la tierra africana, esta esencia combina la dulzura natural de la vainilla de Madagascar con el carácter amargo del cacao. Perfecta para espacios donde buscás calidez y elegancia.",
          ingredientesImg: "Aromas/África/3.jpg",
          detalles: ["Notas de Salida: Vainilla de Madagascar", "Notas de Corazón: Cacao Tostado", "Notas de Fondo: Caramelo"]
        },
        "Vainilla dulce, Ylang-Ylang y Café": {
          corta: "Floral con carácter, dulce y con fuerza aromática.",
          larga: "Una combinación equilibrada de flores tropicales y vainilla suave con notas profundas de café recién molido. Floral con carácter, dulce y con fuerza aromática.",
          ingredientesImg: "assets/ingredientes/africa/vainilla-ylang-cafe.jpg",
          detalles: ["Notas de Salida: Ylang-Ylang", "Notas de Corazón: Vainilla Dulce", "Notas de Fondo: Café"]
        },
        "Flor de Loto y Sándalo": {
          corta: "Equilibrio entre serenidad floral y base amaderada exótica.",
          larga: "Una esencia calmante que mezcla la pureza del loto con la calidez del sándalo, evocando paz y equilibrio.",
          ingredientesImg: "assets/ingredientes/africa/loto-sandalo.jpg",
          detalles: ["Notas de Salida: Flor de Loto", "Notas de Corazón: Tilo", "Notas de Fondo: Sándalo"]
        },
        "Vainilla Madagascar y Café": {
          corta: "Conexión entre lo suave y lo intenso, de espíritu africano.",
          larga: "La suavidad de la vainilla se une al carácter del café africano en una fragancia de confort y fuerza.",
          ingredientesImg: "assets/ingredientes/africa/vainilla-cafe.jpg",
          detalles: ["Notas de Salida: Vainilla", "Notas de Corazón: Café", "Notas de Fondo: Caramelo"]
        },
        "Ylang-Ylang y Jazmín": {
          corta: "Notas florales voluptuosas con un toque oriental.",
          larga: "El Ylang-Ylang resalta su dulzura con el jazmín en una mezcla cálida y seductora.",
          ingredientesImg: "assets/ingredientes/africa/ylang-jazmin.jpg",
          detalles: ["Notas de Salida: Jazmín", "Notas de Corazón: Ylang-Ylang", "Notas de Fondo: Almizcle"]
        },
        "Frutas, madera y vainilla": {
          corta: "Cítricos brillantes sobre fondo de canela, ámbar y café.",
          larga: "Un equilibrio entre lo cítrico, lo especiado y lo dulce. Notas de canela, ámbar, café y vainilla en una mezcla profunda.",
          ingredientesImg: "assets/ingredientes/africa/frutas-madera-vainilla.jpg",
          detalles: ["Notas de Salida: Cítricos", "Notas de Corazón: Canela, Café", "Notas de Fondo: Ámbar, Vainilla"]
        },
        "Ámbar Rojo, Musk y Jazmín": {
          corta: "Inspiración egipcia: denso, místico y sofisticado.",
          larga: "Inspirada en Egipto, combina flores, resinas y maderas para una fragancia de lujo oriental con alma africana.",
          ingredientesImg: "assets/ingredientes/africa/ambar-rojo.jpg",
          detalles: ["Notas de Salida: Jazmín, Rosa", "Notas de Corazón: Ámbar Rojo", "Notas de Fondo: Sándalo, Musk"]
        },
        "Canela, Miel y Vainilla": {
          corta: "Dulzura especiada, evocando calor y hogar.",
          larga: "Notas doradas de miel con canela y un fondo cálido de vainilla, ideal para ambientes reconfortantes.",
          ingredientesImg: "assets/ingredientes/africa/canela-miel-vainilla.jpg",
          detalles: ["Notas de Salida: Canela", "Notas de Corazón: Miel", "Notas de Fondo: Vainilla"]
        },
        "Ylang-Ylang, Jazmín y Sándalo": {
          corta: "Floral cálido con un fondo amaderado sensual.",
          larga: "Flores exóticas que se funden en una base cremosa de sándalo, evocando atardeceres tropicales.",
          ingredientesImg: "assets/ingredientes/africa/ylang-jazmin-sandalo.jpg",
          detalles: ["Notas de Salida: Ylang-Ylang", "Notas de Corazón: Jazmín", "Notas de Fondo: Sándalo"]
        },
        "Naranja y Canela": {
          corta: "Brillante mezcla de frescura cítrica y especia vibrante.",
          larga: "Una fusión energizante de cítricos y canela que despierta el espíritu y alegra el ambiente.",
          ingredientesImg: "assets/ingredientes/africa/naranja-canela.jpg",
          detalles: ["Notas de Salida: Naranja", "Notas de Corazón: Canela", "Notas de Fondo: Ámbar"]
        }
      },

      america: {
        "Café y Cacao": {
          corta: "Intenso y envolvente, como un tostado recién molido con fondo de chocolate.",
          larga: "Café tostado y cacao puro se mezclan en una fragancia cálida y reconfortante, con espíritu latino.",
          ingredientesImg: "assets/ingredientes/america/cafe-cacao.jpg",
          detalles: ["Notas de Salida: Café Tostado", "Notas de Corazón: Cacao", "Notas de Fondo: Vainilla"]
        },
        "Vainilla y Caramelo": {
          corta: "Dulzor cremoso y reconfortante, ideal para ambientes cálidos.",
          larga: "El caramelo tostado y la vainilla se funden en un perfume gourmand de textura suave y deliciosa.",
          ingredientesImg: "assets/ingredientes/america/vainilla-caramelo.jpg",
          detalles: ["Notas de Salida: Azúcar Tostado", "Notas de Corazón: Caramelo", "Notas de Fondo: Vainilla"]
        },
        "Manzana y Canela": {
          corta: "Hogar al instante: fruta roja y especias suaves.",
          larga: "La manzana roja y la canela se combinan para dar una sensación cálida de hogar y dulzura.",
          ingredientesImg: "assets/ingredientes/america/manzana-canela.jpg",
          detalles: ["Notas de Salida: Manzana Roja", "Notas de Corazón: Canela", "Notas de Fondo: Vainilla"]
        },
        "Vainilla y Coco": {
          corta: "Tropical dulce con final cremoso.",
          larga: "Notas de coco suave y vainilla blanca crean un perfume cálido y luminoso.",
          ingredientesImg: "assets/ingredientes/america/vainilla-coco.jpg",
          detalles: ["Notas de Salida: Coco", "Notas de Corazón: Vainilla", "Notas de Fondo: Leche"]
        },
        "Café y Caramelo": {
          corta: "Gourmand moderno: amargor amable y azúcar tostada.",
          larga: "Café suave con un toque de azúcar caramelizada, moderno y acogedor.",
          ingredientesImg: "assets/ingredientes/america/cafe-caramelo.jpg",
          detalles: ["Notas de Salida: Café", "Notas de Corazón: Caramelo", "Notas de Fondo: Azúcar Tostado"]
        },
        "Frutos Rojos y Canela": {
          corta: "Bayas jugosas con chispa especiada.",
          larga: "Bayas frescas con un toque de canela que aportan energía y color al ambiente.",
          ingredientesImg: "assets/ingredientes/america/frutosrojos-canela.jpg",
          detalles: ["Notas de Salida: Frutos Rojos", "Notas de Corazón: Canela", "Notas de Fondo: Vainilla"]
        },
        "Caramelo y Chocolate": {
          corta: "Postre goloso, denso y elegante.",
          larga: "Un perfume de postre con matices de cacao y azúcar tostada.",
          ingredientesImg: "assets/ingredientes/america/caramelo-chocolate.jpg",
          detalles: ["Notas de Salida: Caramelo", "Notas de Corazón: Chocolate", "Notas de Fondo: Almendra"]
        },
        "Café y Canela": {
          corta: "Cuerpo cafetero con especias cálidas.",
          larga: "Una mezcla cálida de café suave y canela aromática que invita al descanso.",
          ingredientesImg: "assets/ingredientes/america/cafe-canela.jpg",
          detalles: ["Notas de Salida: Café", "Notas de Corazón: Canela", "Notas de Fondo: Cardamomo"]
        },
        "Chocolate y Limón": {
          corta: "Contraste brillante: cacao profundo con cítrico fresco.",
          larga: "El cacao oscuro se ilumina con un toque de limón, creando una fusión sorprendente.",
          ingredientesImg: "assets/ingredientes/america/chocolate-limon.jpg",
          detalles: ["Notas de Salida: Limón", "Notas de Corazón: Chocolate Amargo", "Notas de Fondo: Vainilla"]
        },
        "Frutos Tropicales y Cítricos": {
          corta: "Vibrante, jugosa y luminosa; espíritu latino en estado puro.",
          larga: "Piña, mango y cítricos frescos para una sensación de vitalidad y alegría.",
          ingredientesImg: "assets/ingredientes/america/tropicales-citricos.jpg",
          detalles: ["Notas de Salida: Piña, Mango", "Notas de Corazón: Cítricos", "Notas de Fondo: Coco"]
        }
      },

      europa: {
        "Vainilla Francesa y Lavanda": {
          corta: "Suavidad floral con fondo dulce y cremoso.",
          larga: "Equilibrio entre la dulzura de la vainilla y la calma floral de la lavanda francesa.",
          ingredientesImg: "assets/ingredientes/europa/vainilla-lavanda.jpg",
          detalles: ["Notas de Salida: Lavanda Francesa", "Notas de Corazón: Vainilla", "Notas de Fondo: Almizcle Blanco"]
        },
        "Rosas Búlgaras, Vainilla y Lavanda": {
          corta: "Romántico y atemporal, puro perfume europeo.",
          larga: "Rosas suaves con lavanda y un fondo dulce de vainilla mediterránea.",
          ingredientesImg: "assets/ingredientes/europa/rosas-bulgaras.jpg",
          detalles: ["Notas de Salida: Rosas Búlgaras", "Notas de Corazón: Lavanda", "Notas de Fondo: Vainilla"]
        },
        "Chocolate y Vainilla": {
          corta: "Placer gourmand con notas amaderadas sutiles.",
          larga: "La calidez del chocolate europeo combinada con la suavidad de la vainilla francesa.",
          ingredientesImg: "assets/ingredientes/europa/chocolate-vainilla.jpg",
          detalles: ["Notas de Salida: Chocolate", "Notas de Corazón: Vainilla", "Notas de Fondo: Pachulí"]
        },
        "Azahar de Naranjo y Miel": {
          corta: "Refrescante y cálido a la vez, típico del Mediterráneo.",
          larga: "Perfume floral con notas de miel y flores de naranjo, típico del Mediterráneo.",
          ingredientesImg: "assets/ingredientes/europa/azahar-miel.jpg",
          detalles: ["Notas de Salida: Azahar", "Notas de Corazón: Miel", "Notas de Fondo: Cítricos"]
        },
        "Rosas, Peonías y Limón Dulce": {
          corta: "Floral chispeante con toque cítrico femenino.",
          larga: "Flores europeas luminosas con un toque chispeante de limón dulce.",
          ingredientesImg: "assets/ingredientes/europa/rosas-peonias.jpg",
          detalles: ["Notas de Salida: Limón Dulce", "Notas de Corazón: Rosas, Peonías", "Notas de Fondo: Sándalo"]
        },
        "Bergamota": {
          corta: "Notas frescas y elegantes, símbolo de pureza.",
          larga: "Clásico cítrico europeo con notas limpias y sofisticadas.",
          ingredientesImg: "assets/ingredientes/europa/bergamota.jpg",
          detalles: ["Notas de Salida: Bergamota", "Notas de Corazón: Neroli", "Notas de Fondo: Madera de Cedro"]
        },
        "Limón y Azúcar (Limoncello)": {
          corta: "Cítrico dulce, festivo y luminoso.",
          larga: "Inspirada en el sur de Italia, un aroma festivo y veraniego.",
          ingredientesImg: "assets/ingredientes/europa/limoncello.jpg",
          detalles: ["Notas de Salida: Limón", "Notas de Corazón: Azúcar Tostado", "Notas de Fondo: Ron"]
        },
        "Té Verde, Jazmín y Pimienta": {
          corta: "Brisa portuguesa: luminosa y sofisticada.",
          larga: "Una fusión luminosa inspirada en Portugal: fresca, elegante y moderna.",
          ingredientesImg: "assets/ingredientes/europa/teverde.jpg",
          detalles: ["Notas de Salida: Té Verde", "Notas de Corazón: Jazmín", "Notas de Fondo: Pimienta"]
        },
        "Vainilla, Patchouli y Azúcar Tostado": {
          corta: "Fondo goloso con elegancia griega.",
          larga: "Fragancia griega intensa con toques dulces y maderas cálidas.",
          ingredientesImg: "assets/ingredientes/europa/vainilla-patchouli.jpg",
          detalles: ["Notas de Salida: Azúcar Tostado", "Notas de Corazón: Vainilla", "Notas de Fondo: Pachulí"]
        },
        "Lavanda, Ylang-Ylang y Jazmín": {
          corta: "Floral delicado con equilibrio entre calma y alegría.",
          larga: "Floral delicado con notas mediterráneas de calma y vitalidad.",
          ingredientesImg: "assets/ingredientes/europa/lavanda-ylang.jpg",
          detalles: ["Notas de Salida: Lavanda", "Notas de Corazón: Ylang-Ylang", "Notas de Fondo: Jazmín"]
        },
        "Naranja, Jazmín y Sándalo": {
          corta: "Armonía soleada y mediterránea.",
          larga: "Una fusión de flores y maderas suaves con un aire soleado.",
          ingredientesImg: "assets/ingredientes/europa/naranja-jazmin.jpg",
          detalles: ["Notas de Salida: Naranja", "Notas de Corazón: Jazmín", "Notas de Fondo: Sándalo"]
        },
        "Coco, Vainilla, Azúcar Tostado y Ámbar": {
          corta: "Sensual y envolvente, dulzor con profundidad ámbar.",
          larga: "Inspirada en Grecia: mezcla gourmand con profundidad ámbar.",
          ingredientesImg: "assets/ingredientes/europa/coco-vainilla.jpg",
          detalles: ["Notas de Salida: Coco, Azúcar Tostado", "Notas de Corazón: Vainilla", "Notas de Fondo: Ámbar"]
        },
        "Eucalipto": {
          corta: "Nota fresca y limpia, europea y atemporal.",
          larga: "Nota fresca y purificante con espíritu europeo clásico.",
          ingredientesImg: "assets/ingredientes/europa/eucalipto.jpg",
          detalles: ["Notas de Salida: Eucalipto", "Notas de Corazón: Menta", "Notas de Fondo: Notas Verdes"]
        }
      },

      asia: {
        "Benjuí, Sándalo dulce y Rosas": {
          corta: "Floral ambarado con toque balsámico, delicado y místico.",
          larga: "Rosas suaves sobre un fondo amaderado y cálido. Fragancia equilibrada y espiritual.",
          ingredientesImg: "assets/ingredientes/asia/benjui-rosas.jpg",
          detalles: ["Notas de Salida: Rosas", "Notas de Corazón: Benjuí", "Notas de Fondo: Sándalo Dulce"]
        },
        "Jazmín, Tilo y Magnolias": {
          corta: "Equilibrio entre frescura floral y suavidad oriental.",
          larga: "Flores blancas elegantes que evocan paz interior y serenidad oriental.",
          ingredientesImg: "assets/ingredientes/asia/jazmin-tilo-magnolia.jpg",
          detalles: ["Notas de Salida: Jazmín", "Notas de Corazón: Tilo, Magnolias", "Notas de Fondo: Almizcle"]
        },
        "Peras, Manzanas y Flores Blancas": {
          corta: "Fragancia luminosa con notas de jardín en flor.",
          larga: "Una combinación fresca y luminosa que recuerda jardines húmedos al amanecer.",
          ingredientesImg: "assets/ingredientes/asia/peras-manzanas.jpg",
          detalles: ["Notas de Salida: Peras, Manzanas", "Notas de Corazón: Flores Blancas", "Notas de Fondo: Almizcle"]
        },
        "Amapolas y Gardenias": {
          corta: "Fondo elegante, suave y sensual.",
          larga: "Floral intensa que combina amapolas silvestres con gardenias aterciopeladas.",
          ingredientesImg: "assets/ingredientes/asia/amapolas-gardenias.jpg",
          detalles: ["Notas de Salida: Amapolas", "Notas de Corazón: Gardenias", "Notas de Fondo: Vainilla"]
        },
        "Benjuí y Tilo": {
          corta: "Ambarado y fresco, una fusión de espiritualidad y calma.",
          larga: "Perfume armonioso de resina y flor que invita al descanso.",
          ingredientesImg: "assets/ingredientes/asia/benjui-tilo.jpg",
          detalles: ["Notas de Salida: Benjuí", "Notas de Corazón: Tilo", "Notas de Fondo: Sándalo"]
        },
        "Flor de Loto y Sándalo": {
          corta: "Paz y pureza con fondo levemente ahumado.",
          larga: "Equilibrio entre la serenidad floral del loto y la base cálida del sándalo.",
          ingredientesImg: "assets/ingredientes/asia/loto-sandalo.jpg",
          detalles: ["Notas de Salida: Flor de Loto", "Notas de Corazón: Tilo", "Notas de Fondo: Sándalo"]
        },
        "Jazmín Chino y Tilo": {
          corta: "Floral etéreo y refinado con alma oriental.",
          larga: "Notas orientales suaves de jazmín con el equilibrio del tilo.",
          ingredientesImg: "assets/ingredientes/asia/jazmin-chino.jpg",
          detalles: ["Notas de Salida: Jazmín Chino", "Notas de Corazón: Tilo", "Notas de Fondo: Almizcle"]
        },
        "Madreselva y Jazmín": {
          corta: "Dulce, radiante y femenina.",
          larga: "Una fragancia suave y primaveral que transmite romanticismo y frescura.",
          ingredientesImg: "assets/ingredientes/asia/madreselva-jazmin.jpg",
          detalles: ["Notas de Salida: Madreselva", "Notas de Corazón: Jazmín", "Notas de Fondo: Notas Verdes"]
        },
        "Gardenia y Tilo": {
          corta: "Natural, fresco y de elegancia atemporal.",
          larga: "Un floral blanco equilibrado que aporta luz y pureza.",
          ingredientesImg: "assets/ingredientes/asia/gardenia-tilo.jpg",
          detalles: ["Notas de Salida: Gardenia", "Notas de Corazón: Tilo", "Notas de Fondo: Almizcle"]
        },
        "Flores Blancas y Citrus": {
          corta: "Limpia y brillante, con chispa cítrica.",
          larga: "Flores delicadas con un toque cítrico que aporta vitalidad.",
          ingredientesImg: "assets/ingredientes/asia/flores-citrus.jpg",
          detalles: ["Notas de Salida: Citrus", "Notas de Corazón: Flores Blancas", "Notas de Fondo: Tilo"]
        },
        "Té Verde, Jazmín y Pimienta": {
          corta: "Toque vibrante y herbal con chispa especiada.",
          larga: "Una mezcla oriental que une frescura, sofisticación y un toque especiado.",
          ingredientesImg: "assets/ingredientes/asia/teverde-jazmin.jpg",
          detalles: ["Notas de Salida: Té Verde", "Notas de Corazón: Jazmín", "Notas de Fondo: Pimienta"]
        }
      },

      oceania: {
        "Coco y Coral Ocean": {
          corta: "Dulce y salino se entrelazan en una brisa oceánica limpia y envolvente.",
          larga: "Evoca playas cristalinas, con frescura marina y coco cremoso.",
          ingredientesImg: "assets/ingredientes/oceania/coco-coral.jpg",
          detalles: ["Notas de Salida: Sal marina, bergamota", "Notas de Corazón: Coco, flor de tiaré", "Notas de Base: Sándalo, almizcle blanco"]
        },
        "Eucalipto y Coco": {
          corta: "Equilibrio perfecto entre frescura herbal y suavidad tropical.",
          larga: "El aroma del eucalipto australiano con un toque cremoso de coco.",
          ingredientesImg: "assets/ingredientes/oceania/eucalipto-coco.jpg",
          detalles: ["Notas de Salida: Eucalipto, menta", "Notas de Corazón: Coco, hoja de té", "Notas de Base: Cedro, almizcle"]
        },
        "Ylang-Ylang (Jazmín, Gardenia)": {
          corta: "Exótica y elegante, flor blanca con alma de verano.",
          larga: "Flores blancas exóticas que aportan elegancia y serenidad.",
          ingredientesImg: "assets/ingredientes/oceania/ylang-gardenia.jpg",
          detalles: ["Notas de Salida: Ylang-Ylang", "Notas de Corazón: Jazmín, Gardenia", "Notas de Fondo: Sándalo"]
        },
        "Gardenia del Pacífico": {
          corta: "Ligera, floral y brillante como una mañana junto al mar.",
          larga: "Una fragancia suave y natural como una brisa oceánica.",
          ingredientesImg: "assets/ingredientes/oceania/gardenia-pacifico.jpg",
          detalles: ["Notas de Salida: Acordes Marinos", "Notas de Corazón: Gardenia", "Notas de Fondo: Sándalo"]
        },
        "Lemongrass y Bamboo Verde": {
          corta: "Refrescante y vivaz, ideal para revitalizar los espacios.",
          larga: "Cítricos verdes y hierbas frescas para un ambiente energizante.",
          ingredientesImg: "assets/ingredientes/oceania/lemongrass-bamboo.jpg",
          detalles: ["Notas de Salida: Lemongrass", "Notas de Corazón: Bamboo Verde", "Notas de Fondo: Pachulí"]
        }
      },

      caribe: {
        "Reina de la Noche y Coco": {
          corta: "Exótica y luminosa, con la dulzura del trópico.",
          larga: "Flores intensas que se mezclan con el coco fresco en una fragancia cálida y relajada.",
          ingredientesImg: "assets/ingredientes/caribe/reina-coco.jpg",
          detalles: ["Notas de Salida: Reina de la Noche", "Notas de Corazón: Coco", "Notas de Fondo: Almizcle"]
        },
        "Reina de la Noche y Vainilla": {
          corta: "Elegante, suave y seductora, con fondo cálido.",
          larga: "Una combinación cremosa y elegante, con notas tropicales y fondo dulce.",
          ingredientesImg: "assets/ingredientes/caribe/reina-vainilla.jpg",
          detalles: ["Notas de Salida: Reina de la Noche", "Notas de Corazón: Vainilla", "Notas de Fondo: Ámbar"]
        },
        "Orquídea Negra y Coco": {
          corta: "Compleja y sofisticada, con notas florales y frutales.",
          larga: "Perfume complejo con acordes frutales, florales y un fondo de coco suave.",
          ingredientesImg: "assets/ingredientes/caribe/orquidea-coco.jpg",
          detalles: ["Notas de Salida: Frutas Tropicales", "Notas de Corazón: Orquídea Negra", "Notas de Fondo: Coco"]
        },
        "Orquídea Negra y Magnolia": {
          corta: "Floral intensa con fondo aterciopelado.",
          larga: "Una fusión floral que transmite sofisticación y dulzura tropical.",
          ingredientesImg: "assets/ingredientes/caribe/orquidea-magnolia.jpg",
          detalles: ["Notas de Salida: Magnolia", "Notas de Corazón: Orquídea Negra", "Notas de Fondo: Vainilla"]
        },
        "Coco y Canela": {
          corta: "Mezcla cálida de dulzura tropical y especia sutil.",
          larga: "Un equilibrio entre dulzura tropical y especias suaves.",
          ingredientesImg: "assets/ingredientes/caribe/coco-canela.jpg",
          detalles: ["Notas de Salida: Coco", "Notas de Corazón: Canela", "Notas de Fondo: Azúcar"]
        },
        "Lemon Sugar": {
          corta: "Refrescante, chispeante y juvenil.",
          larga: "Una mezcla chispeante de limón azucarado que despierta los sentidos.",
          ingredientesImg: "assets/ingredientes/caribe/lemon-sugar.jpg",
          detalles: ["Notas de Salida: Limón", "Notas de Corazón: Azúcar", "Notas de Fondo: Vainilla"]
        },
        "Sandía y Melón": {
          corta: "Frutal fresco que despierta alegría.",
          larga: "Una explosión jugosa de frutas de verano con fondo dulce.",
          ingredientesImg: "assets/ingredientes/caribe/sandia-melon.jpg",
          detalles: ["Notas de Salida: Sandía", "Notas de Corazón: Melón", "Notas de Fondo: Notas de Agua"]
        },
        "Coco y Lima": {
          corta: "Vibrante equilibrio entre lo cremoso y lo cítrico.",
          larga: "Coco tropical equilibrado con el toque ácido de la lima verde.",
          ingredientesImg: "assets/ingredientes/caribe/coco-lima.jpg",
          detalles: ["Notas de Salida: Lima", "Notas de Corazón: Coco", "Notas de Fondo: Azúcar"]
        },
        "Mango y Flor de Tiaré": {
          corta: "Solar, sensual y profundamente veraniega.",
          larga: "Inspirada en los paraísos polinesios, mezcla mango maduro con flor de tiaré.",
          ingredientesImg: "assets/ingredientes/caribe/mango-tiare.jpg",
          detalles: ["Notas de Salida: Mango", "Notas de Corazón: Flor de Tiaré", "Notas de Fondo: Vainilla"]
        }
      },

      oriente: {
        "Rosas de Damasco, Miel y Sándalo": {
          corta: "Opulento y sensual, un clásico oriental.",
          larga: "El alma oriental en una fragancia que combina dulzura y misterio.",
          ingredientesImg: "assets/ingredientes/oriente/rosas-miel.jpg",
          detalles: ["Notas de Salida: Rosas de Damasco", "Notas de Corazón: Miel Dorada", "Notas de Fondo: Sándalo"]
        },
        "Naranja, Pimienta y Canela": {
          corta: "Brillante, picante y cálido: energía pura.",
          larga: "Cítricos energéticos con fondo especiado; alegre y elegante.",
          ingredientesImg: "assets/ingredientes/oriente/naranja-canela.jpg",
          detalles: ["Notas de Salida: Naranja", "Notas de Corazón: Pimienta", "Notas de Fondo: Canela"]
        },
        "Café y Canela": {
          corta: "Intenso y dulce con un fondo especiado envolvente.",
          larga: "Una combinación cálida y especiada con la intensidad del café oriental.",
          ingredientesImg: "assets/ingredientes/oriente/cafe-canela.jpg",
          detalles: ["Notas de Salida: Café", "Notas de Corazón: Canela", "Notas de Fondo: Cardamomo"]
        },
        "Ámbar y Especias de Arabia": {
          corta: "Rico, profundo y majestuoso.",
          larga: "Fragancia densa con resinas y un blend de especias exóticas que evocan los mercados árabes.",
          ingredientesImg: "assets/ingredientes/oriente/ambar-especias.jpg",
          detalles: ["Notas de Salida: Especias", "Notas de Corazón: Ámbar", "Notas de Fondo: Incienso"]
        },
        "Incienso y Vainilla Oriental": {
          corta: "Espiritual y cálido; equilibrio de misticismo y dulzura.",
          larga: "El humo sagrado del incienso combinado con la dulzura profunda y envolvente de la vainilla oriental.",
          ingredientesImg: "assets/ingredientes/oriente/incienso-vainilla.jpg",
          detalles: ["Notas de Salida: Incienso", "Notas de Corazón: Vainilla", "Notas de Fondo: Sándalo"]
        }
      },

      ediciones: {
        "Vainilla, Chocolate y Almendras Dulces": {
          corta: "Tradicional, goloso y reconfortante. El abrazo dulce de la temporada.",
          larga: "Un blend tradicional que combina dulzura y especias típicas de la temporada. Ideal para recrear el espíritu de las fiestas.",
          ingredientesImg: "assets/ingredientes/ediciones/navidad1.jpg",
          detalles: ["Notas de Salida: Almendras Dulces", "Notas de Corazón: Chocolate", "Notas de Fondo: Vainilla"]
        },
        "Naranja, Canela, Jengibre y Nuez Moscada": {
          corta: "Especia brillante y cítrica que perfuma el invierno.",
          larga: "La combinación clásica de especias invernales con un toque brillante y festivo de naranja.",
          ingredientesImg: "assets/ingredientes/ediciones/navidad2.jpg",
          detalles: ["Notas de Salida: Naranja, Jengibre", "Notas de Corazón: Canela, Nuez Moscada", "Notas de Fondo: Clavo"]
        },
        "Galletas y Especias Navideñas": {
          corta: "Dulce y festiva; recuerda a la repostería casera.",
          larga: "Recrea el perfume de la cocina navideña: galletas, azúcar y especias cálidas como la canela y la nuez moscada.",
          ingredientesImg: "assets/ingredientes/ediciones/navidad3.jpg",
          detalles: ["Notas de Salida: Azúcar Morena", "Notas de Corazón: Galleta", "Notas de Fondo: Canela"]
        },
        "Pino, Caramelo y Menta": {
          corta: "Refrescante y luminoso: la versión fresca de la Navidad.",
          larga: "Una fusión que combina la frescura del pino con la dulzura del caramelo y un toque de menta navideña.",
          ingredientesImg: "assets/ingredientes/ediciones/navidad4.jpg",
          detalles: ["Notas de Salida: Pino", "Notas de Corazón: Menta", "Notas de Fondo: Caramelo"]
        },
        "Citronella y Lemongrass": {
          corta: "Fresca y cítrica, ideal para tardes al aire libre.",
          larga: "Una esencia veraniega que combina citronella natural y lemongrass para mantener ambientes frescos y limpios.",
          ingredientesImg: "assets/ingredientes/ediciones/verano1.jpg",
          detalles: ["Notas de Salida: Lemongrass", "Notas de Corazón: Citronella", "Notas de Fondo: Notas Verdes"]
        },
        "Lima y Verbena": {
          corta: "Chispeante, herbal y luminosa; puro verano.",
          larga: "Fragancia refrescante con toques verdes de verbena y lima que revitalizan el ambiente.",
          ingredientesImg: "assets/ingredientes/ediciones/verano2.jpg",
          detalles: ["Notas de Salida: Lima", "Notas de Corazón: Verbena", "Notas de Fondo: Menta"]
        },
        "Coco y Flor de Loto": {
          corta: "Dulce, floral y tropical: la esencia del descanso.",
          larga: "La suavidad del coco se mezcla con la flor de loto para evocar días soleados y relajados.",
          ingredientesImg: "assets/ingredientes/ediciones/verano3.jpg",
          detalles: ["Notas de Salida: Flor de Loto", "Notas de Corazón: Coco", "Notas de Fondo: Sándalo"]
        }
      }
    };

    async function cargarEsenciasApi() {
      try {
        const resp = await fetch("api_esencias.json");
        if (!resp.ok) throw new Error("No se pudo cargar la API de esencias");

        ESENCIAS_API = await resp.json();
        console.log("API de esencias cargada:", ESENCIAS_API);

        validarEsenciasApi();
      } catch (error) {
        console.error("Error cargando API:", error);
      }
    }

    function validarEsenciasApi() {
      Object.entries(ESENCIAS_API).forEach(([continente, lista]) => {
        lista.forEach(nombre => {
          if (!ESENCIAS[continente] || !ESENCIAS[continente][nombre]) {
            console.warn(
              `La esencia "${nombre}" del continente "${continente}" existe en la API pero NO en ESENCIAS`
            );
          }
        });
      });
    }



    // =======================================================
    // 1. CARRITO DE COMPRAS
    // =======================================================
      const CART_KEY = "carritoBonVoyage_v1";

      // Estructura: [{ id, esencia, envaseKey, envaseNombre, precioUnit, img, qty }]
      let CARRITO = [];

      function makeCartId(esencia, envaseKey) {
        return `${encodeURIComponent(esencia)}__${envaseKey}`;
      }

      function cargarCarrito() {
        try {
          const raw = localStorage.getItem(CART_KEY);
          CARRITO = raw ? JSON.parse(raw) : [];
        } catch (e) {
          CARRITO = [];
        }
      }

      function guardarCarrito() {
        try {
          localStorage.setItem(CART_KEY, JSON.stringify(CARRITO));
        } catch (e) {
          console.warn("No se pudo guardar el carrito en localStorage", e);
        }
      }

      function getTotalQty() {
        return CARRITO.reduce((acc, it) => acc + (Number(it.qty) || 0), 0);
      }

      function getTotalPrice() {
        return CARRITO.reduce((acc, it) => acc + (Number(it.qty) || 0) * (Number(it.precioUnit) || 0), 0);
      }

      function agregarAlCarrito(nombreEsencia, envaseKey, qty = 1) {
        const envase = ENVASES_DATA[envaseKey];
        if (!envase) {
          alert("Seleccioná un envase válido.");
          return;
        }

        const id = makeCartId(nombreEsencia, envaseKey);
        const existente = CARRITO.find(it => it.id === id);

        if (existente) {
          existente.qty = Math.min(99, (Number(existente.qty) || 0) + Number(qty));
        } else {
          CARRITO.push({
            id,
            esencia: nombreEsencia,
            envaseKey,
            envaseNombre: envase.nombre,
            precioUnit: envase.precio,
            img: envase.img,
            qty: Math.min(99, Number(qty) || 1)
          });
        }

        guardarCarrito();
        actualizarCarrito();
      }

      function setQty(id, newQty) {
        const item = CARRITO.find(it => it.id === id);
        if (!item) return;

        const q = Math.max(1, Math.min(99, Number(newQty) || 1));
        item.qty = q;

        guardarCarrito();
        actualizarCarrito();
      }

      function incQty(id, delta) {
        const item = CARRITO.find(it => it.id === id);
        if (!item) return;

        item.qty = Math.max(1, Math.min(99, (Number(item.qty) || 1) + delta));

        guardarCarrito();
        actualizarCarrito();
      }

      function eliminarDelCarrito(id) {
        CARRITO = CARRITO.filter(it => it.id !== id);
        guardarCarrito();
        actualizarCarrito();
      }

      function vaciarCarrito() {
        CARRITO = [];
        guardarCarrito();
        actualizarCarrito();
      }


      function actualizarCarrito() {
        const lista = document.getElementById("carritoLista");
        const totalElem = document.getElementById("carritoTotal");
        const countElem = document.getElementById("carritoCount");

        if (!lista || !totalElem) return;

        if (CARRITO.length === 0) {
          lista.innerHTML = `<p class="carrito-vacio">Tu carrito está vacío.</p>`;
          totalElem.textContent = "$0";
          if (countElem) countElem.textContent = "0";
          return;
        }

        lista.innerHTML = "";

        CARRITO.forEach((item) => {
          const subtotal = (Number(item.qty) || 0) * (Number(item.precioUnit) || 0);

          const row = document.createElement("div");
          row.className = "item-carrito";
          row.innerHTML = `
            <img src="${item.img}" alt="${item.envaseNombre}">
            <div class="item-carrito-info">
              <p><strong>${item.esencia}</strong></p>
              <p>${item.envaseNombre}</p>
              <p>Precio unit.: $${item.precioUnit.toLocaleString("es-AR")}</p>

              <div class="item-carrito-qty">
                <button type="button" class="qty-btn" data-action="dec" data-id="${item.id}" aria-label="Restar">−</button>
                <input type="number" min="1" max="99" value="${item.qty}" class="qty-input" data-action="set" data-id="${item.id}">
                <button type="button" class="qty-btn" data-action="inc" data-id="${item.id}" aria-label="Sumar">+</button>
              </div>

              <p class="item-carrito-subtotal">
                Subtotal: <strong>$${subtotal.toLocaleString("es-AR")}</strong>
              </p>

              <button type="button" class="btn-quitar" data-action="remove" data-id="${item.id}">❌ Quitar</button>
            </div>
          `;
          lista.appendChild(row);
        });

        totalElem.textContent = `$${getTotalPrice().toLocaleString("es-AR")}`;

        if (countElem) {
          countElem.textContent = String(getTotalQty());
          countElem.style.transform = "scale(1.3)";
          setTimeout(() => (countElem.style.transform = "scale(1)"), 200);
        }
      }

      // Delegación de eventos del carrito (evita onclick inline)
      function bindCarritoEvents() {
        const lista = document.getElementById("carritoLista");
        if (!lista) return;

        lista.addEventListener("click", (e) => {
          const btn = e.target.closest("[data-action]");
          if (!btn) return;

          const action = btn.getAttribute("data-action");
          const id = btn.getAttribute("data-id");
          if (!id) return;

          if (action === "inc") incQty(id, +1);
          if (action === "dec") incQty(id, -1);
          if (action === "remove") eliminarDelCarrito(id);
        });

        lista.addEventListener("change", (e) => {
          const input = e.target.closest('input[data-action="set"]');
          if (!input) return;
          const id = input.getAttribute("data-id");
          setQty(id, input.value);
        });
      }


    //=========================================
    //  RESEÑAS – STORAGE Y CARRUSEL
    //=========================================
   let RESENAS = [];
   let indiceResena = 0;
   const RESENAS_POR_PANTALLA = 3;

    function cargarResenasDesdeStorage() {
      try {
        const guardadas = localStorage.getItem("resenasBonVoyage");
        if (guardadas) {
          RESENAS = JSON.parse(guardadas);
        } else {
          RESENAS = [...RESENAS_BASE];
        }
      } catch (e) {
        RESENAS = [...RESENAS_BASE];
      }
    }

    function guardarResenasEnStorage() {
      try {
        localStorage.setItem("resenasBonVoyage", JSON.stringify(RESENAS));
      } catch (e) {
        console.warn("No se pudieron guardar las reseñas en localStorage", e);
      }
    }

    let resenaInterval = null;

    function renderResenas() {
        const track = document.getElementById("resenasTrack");
        if (!track) return;

        track.innerHTML = "";

        RESENAS.forEach((r) => {
            const card = document.createElement("div");
            card.className = "resena-card";
           card.innerHTML = `
            <span class="resena-icon">“</span>

            <p class="resena-texto">"${r.texto}"</p>

            <div class="resena-footer">
                <span class="resena-nombre">– ${r.nombre}</span>
                <span class="resena-rating">
                ${"★".repeat(r.estrellas || 0)}
                </span>
            </div>
            `;

            track.appendChild(card);
        });

        // mover el carrusel
        const desplazamiento = indiceResena * (100 / RESENAS_POR_PANTALLA);
        track.style.transform = `translateX(-${desplazamiento}%)`;
        }

        function nextResena() {
            if (!RESENAS.length) return;

            indiceResena += RESENAS_POR_PANTALLA;

            if (indiceResena >= RESENAS.length) {
                indiceResena = 0;
            }

            renderResenas();
            }

            function prevResena() {
            if (!RESENAS.length) return;

            indiceResena -= RESENAS_POR_PANTALLA;

            if (indiceResena < 0) {
                indiceResena =
                Math.max(RESENAS.length - RESENAS_POR_PANTALLA, 0);
            }

            renderResenas();
            }

    let FRASES = [];
    let fraseInterval = null;
    let lastIndex = -1;

    async function cargarFrasesJson() {
      const el = document.getElementById("apiTexto");

      if (!el) {
        console.error("No existe #apiTexto en el DOM");
        return;
      }

      try {
        const resp = await fetch("./frases.json");
        if (!resp.ok) throw new Error("No se pudo cargar frases.json");

        const data = await resp.json();

        if (!data.frases || data.frases.length === 0) {
          el.textContent = "No hay frases disponibles.";
          return;
        }

        const fraseRandom =
          data.frases[Math.floor(Math.random() * data.frases.length)];

        el.textContent = fraseRandom;

        console.log("✅ Frase cargada:", fraseRandom);
      } catch (error) {
        console.error("Error:", error);
        el.textContent = "Error cargando frases.";
      }
    }

    // =======================================================
    // 2. NAVEGACIÓN Y FUNCIONES PRINCIPALES
    // =======================================================
    const bg = document.getElementById('bg');
    const pages = [...document.querySelectorAll('.pagina')];
    const volverBtnFicha = document.querySelector('#fichaEsencia .volver');
    let currentEsenciaBg = null;   // fondo actual de la ficha de esencia

    const fichaEsencia = document.getElementById('fichaEsencia');
    fichaEsencia.style.display = 'none';
    const fichaEsenciaNombre = document.getElementById('fichaEsenciaNombre');
    const fichaEsenciaCorta = document.getElementById('fichaEsenciaCorta');
    const fichaEsenciaDetalles = document.getElementById('fichaEsenciaDetalles');

    const envaseSelector = document.getElementById('envaseSelector');
    const envasePreviewImg = document.getElementById('fichaEsenciaImg');
    const envaseDesc = document.getElementById('envaseDesc');
    const envasePrecio = document.getElementById('envasePrecio');

    function setBackground(url) {
      bg.style.setProperty('--bg', `url('${url}')`);
      bg.classList.add('fade');
      setTimeout(() => bg.classList.remove('fade'), 850);
    }

    function showSection(id) {
      if (id === 'inicio') {
        pages.forEach(p => {
          if (p.id === 'fichaEsencia') {
            p.style.display = 'none';
            p.classList.remove('activa');
          }
          else if (['inicio','resenas', 'quienes','colecciones','ediciones','contacto'].includes(p.id)) {
            p.style.display = 'block';
            p.classList.add('activa');
          }
          else {
            p.style.display = 'none';
            p.classList.remove('activa');
          }
        });
      } else {
        pages.forEach(p => {
          if (p.id === id) {
            p.style.display = 'block';
            p.classList.add('activa');
          } else {
            p.style.display = 'none';
            p.classList.remove('activa');
          }
        });
      }

      // ===== Fondo =====
      let image;
      if (id === 'fichaEsencia' && currentEsenciaBg) {
        image = currentEsenciaBg;
      } else {
        const target = document.getElementById(id);
        image = target?.getAttribute('data-bg') || 'fondo.jpg';
      }
      setBackground(image);

      // ===== Scroll =====
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // ===== Nav activa =====
      document.querySelectorAll('.main-nav a').forEach(a => {
        a.classList.toggle('activa', a.getAttribute('data-nav') === id);
      });
    }

    // =======================================================
    // 3. LÓGICA DE DETALLE DE ESENCIA CON SELECTOR DE ENVASE
    // =======================================================
    function updateEnvasePreview(key) {
      const data = ENVASES_DATA[key];
      if (!data) return;
      envasePreviewImg.src = data.img;
      envasePreviewImg.alt = data.nombre;
      envasePrecio.textContent = `$${data.precio.toLocaleString('es-AR')}`;
      envaseDesc.textContent = data.desc;
    }

    function handleEnvaseChange() {
     const key = envaseSelector.value;
      const data = ENVASES_DATA[key];
      if (!data) return;

      // Solo cambiamos la foto del envase
      updateEnvasePreview(key);
      // No tocamos fichaEsencia.setAttribute('data-bg', ...)
      // No llamamos a setBackground aquí
    }


    function initializeEnvaseSelector() {
      envaseSelector.innerHTML = '';
      for (const key in ENVASES_DATA) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = ENVASES_DATA[key].nombre;
        envaseSelector.appendChild(option);
      }
      envaseSelector.removeEventListener('change', handleEnvaseChange);
      envaseSelector.addEventListener('change', handleEnvaseChange);
    }

    function showEsenciaDetail(continente, nombreEsencia) {
      const esencia = ESENCIAS[continente] ? ESENCIAS[continente][nombreEsencia] : null;
      if (!esencia) {
        console.error('Esencia no encontrada:', continente, nombreEsencia);
        return;
      }
        
      const btnAgregar = document.getElementById('btnAgregarCarrito');
      if (btnAgregar) {
        btnAgregar.replaceWith(btnAgregar.cloneNode(true));
        const btnNuevo = document.getElementById('btnAgregarCarrito');

        btnNuevo.addEventListener("click", () => {
            const envaseKey = envaseSelector?.value;
            if (!envaseKey) {
            alert("Elegí un envase.");
            return;
            }

            agregarAlCarrito(nombreEsencia, envaseKey);
            mostrarMiniCart(envaseKey, nombreEsencia);
        });
        }


      fichaEsenciaNombre.textContent = nombreEsencia;
      fichaEsenciaCorta.textContent = esencia.corta;

      fichaEsenciaDetalles.innerHTML = '';
      const detalles = esencia.detalles || [];
      if (detalles.length > 0) {
        detalles.forEach(detalle => {
          const li = document.createElement('li');
          li.textContent = detalle;
          fichaEsenciaDetalles.appendChild(li);
        });
      } else {
        fichaEsenciaDetalles.innerHTML = '<li>No hay detalles específicos de notas para este aroma.</li>';
      }

      initializeEnvaseSelector();
      const defaultEnvaseKey = Object.keys(ENVASES_DATA)[0];
      if (defaultEnvaseKey) {
        envaseSelector.value = defaultEnvaseKey;
        updateEnvasePreview(defaultEnvaseKey);
      }

        const parentSection = 
          (continente === 'ediciones' || continente === 'navidad' || continente === 'verano')
            ? 'ediciones'
            : continente;

        volverBtnFicha.setAttribute('data-nav', parentSection);
        volverBtnFicha.href = `#${parentSection}`;

        // Guardamos el fondo de la esencia para la ficha
        currentEsenciaBg = esencia.ingredientesImg || ENVASES_DATA[defaultEnvaseKey].img;

        // Mostramos la ficha; showSection usará currentEsenciaBg
        showSection('fichaEsencia');
        envaseSelector.focus();
      }
    // =======================================================
    // 4. INICIALIZACIÓN DE LISTENERS
    // =======================================================
    document.addEventListener('DOMContentLoaded', () => {
      cargarEsenciasApi();
      cargarCarrito();
      actualizarCarrito();
      bindCarritoEvents();
      const vaciar = document.getElementById("vaciarCarrito");
      const finalizar = document.getElementById("finalizarCompra");
      const pagoSection = document.getElementById("pagoSection");

      const seguirComprandoBtn = document.getElementById("continuarcomprando");
      if (seguirComprandoBtn) {
        seguirComprandoBtn.addEventListener("click", () => {
          // Lógica simple: siempre volver a Colecciones
          showSection("colecciones");
        });
      }

      // FIN NUEVO

      if (vaciar) {
        vaciar.addEventListener("click", () => {
          if (confirm("¿Vaciar todo el carrito?")) {
            CARRITO = [];
            actualizarCarrito();
            pagoSection.style.display = "none";
          }
        });
      }

      if (finalizar) {
        finalizar.addEventListener("click", () => {
          if (CARRITO.length === 0) {
            alert("Tu carrito está vacío.");
            return;
          }
          pagoSection.style.display = "block";
          pagoSection.scrollIntoView({ behavior: "smooth" });
        });
      }

      const logo = document.getElementById("logo");
      if (logo) {
        logo.addEventListener("click", () => {
          showSection("inicio");
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      }

      const navLinks = [...document.querySelectorAll('[data-nav]')];

      navLinks.forEach(a => {
        a.addEventListener('click', (e) => {
          e.preventDefault();
          const to = a.getAttribute('data-nav');
          if (to) showSection(to);
        });
      });

      const continentCards = [...document.querySelectorAll('.card[data-goto]')];
      continentCards.forEach(card => {
        const clickHandler = (ev) => {
          ev.preventDefault();
          const to = card.getAttribute('data-goto');
          if (to) showSection(to);
        };
        card.addEventListener('click', clickHandler);
        card.addEventListener('keydown', (ev) => {
          if (ev.key === 'Enter' || ev.key === ' ') clickHandler(ev);
        });
      });

      document.querySelectorAll('.card-simple').forEach(card => {
        const clickHandler = (ev) => {
          ev.preventDefault();
          const continente = card.getAttribute('data-continente');
          const esencia = card.getAttribute('data-esencia');
          if (continente && esencia) showEsenciaDetail(continente, esencia);
        };
        card.addEventListener('click', clickHandler);
        card.addEventListener('keydown', (ev) => {
          if (ev.key === 'Enter' || ev.key === ' ') clickHandler(ev);
        });
      });

      const form = document.getElementById('contactoForm');
      const campoEmail = document.getElementById('campoEmail');
      const campoWhats = document.getElementById('campoWhatsApp');
      const radios = [...document.querySelectorAll('input[name="contacto"]')];
      const msg = document.getElementById('formMsg');

      function toggleCampos() {
        const val = radios.find(r => r.checked)?.value;
        if (val === 'email') {
          campoEmail.style.display = 'block';
          campoWhats.style.display = 'none';
          document.getElementById('email').setAttribute('required', 'required');
          document.getElementById('whatsapp').removeAttribute('required');
        } else if (val === 'whatsapp') {
          campoWhats.style.display = 'block';
          campoEmail.style.display = 'none';
          document.getElementById('whatsapp').setAttribute('required', 'required');
          document.getElementById('email').removeAttribute('required');
        } else {
          campoEmail.style.display = 'none';
          campoWhats.style.display = 'none';
          document.getElementById('email').removeAttribute('required');
          document.getElementById('whatsapp').removeAttribute('required');
        }
      }
      radios.forEach(r => r.addEventListener('change', toggleCampos));

      form.addEventListener('submit', (e) => {
        msg.textContent = '';
        const nombre = document.getElementById('nombre').value.trim();
        const contacto = radios.find(r => r.checked)?.value;

        if (!nombre) {
          e.preventDefault();
          msg.textContent = 'Por favor, ingresá tu nombre.';
          return;
        }
        if (!contacto) {
          e.preventDefault();
          msg.textContent = 'Elegí si querés que te contactemos por Email o WhatsApp.';
          return;
        }
        if (contacto === 'email') {
          const email = document.getElementById('email').value.trim();
          if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            e.preventDefault();
            msg.textContent = 'Ingresá un email válido.';
            return;
          }
        }
        if (contacto === 'whatsapp') {
          const tel = document.getElementById('whatsapp').value.trim();
          if (!tel || tel.length < 6) {
            e.preventDefault();
            msg.textContent = 'Ingresá un WhatsApp válido.';
            return;
          }
        }
        msg.textContent = 'Enviando…';
      });

      // Reseñas: cargar y montar carrusel
      cargarResenasDesdeStorage();
      renderResenas();

      // Botones carrusel
      const btnPrev = document.getElementById("resPrev");
      const btnNext = document.getElementById("resNext");
      if (btnPrev) {
        btnPrev.addEventListener("click", () => {
          prevResena();
          resetResenaInterval();
        });
      }
      if (btnNext) {
        btnNext.addEventListener("click", () => {
          nextResena();
          resetResenaInterval();
        });
      }

            // Frase viajera desde la API: se carga siempre al entrar
            showSection('inicio');
            cargarFrasesJson();
      });  // 🟢 CORRECCIÓN: cierre del DOMContentLoaded


      function confirmarPago() {
        const medio = document.querySelector('input[name="medioPago"]:checked').value;
        const total = document.getElementById("carritoTotal").textContent;
        const pagoConfirmado = document.getElementById("pagoConfirmado");

        pagoConfirmado.style.display = "block";
        pagoConfirmado.innerHTML = `
          <h4>✅ Pago confirmado</h4>
          <p>Elegiste pagar con <strong>${medio.toUpperCase()}</strong> por un total de <strong>${total}</strong>.</p>
          <p>Tu pedido está siendo procesado. ¡Gracias por elegir Aromas Bon Voyage!</p>
        `;

        setTimeout(() => {
          CARRITO = [];
          actualizarCarrito();
          pagoConfirmado.style.display = "none";
          document.getElementById("pagoSection").style.display = "none";
          showSection("inicio");
        }, 5000);
      }

      function mostrarMiniCart(envaseKey, esenciaNombre) {
        const modal = document.getElementById("miniCartModal");
        const img = document.getElementById("miniCartImg");
        const nombre = document.getElementById("miniCartNombre");
        const precio = document.getElementById("miniCartPrecio");
        const cant = document.getElementById("miniCartCant");
        const total = document.getElementById("miniCartTotal");

        const envase = ENVASES_DATA[envaseKey];

        img.src = envase.img;
        nombre.textContent = `${esenciaNombre} (${envase.nombre})`;
        precio.textContent = `$${envase.precio.toLocaleString("es-AR")}`;

        cant.textContent = getTotalQty();
        const suma = getTotalPrice();
        total.textContent = `$${suma.toLocaleString("es-AR")}`;

        modal.style.display = "block";

        setTimeout(() => {
          modal.style.display = "none";
        }, 4500);
      }

      function cerrarMiniCart() {
        document.getElementById("miniCartModal").style.display = "none";
      }
        document.getElementById("miniCartClose")
        ?.addEventListener("click", cerrarMiniCart);

        document.getElementById("miniCartGoCart")
        ?.addEventListener("click", () => {
            showSection("carrito");
            cerrarMiniCart();
        });


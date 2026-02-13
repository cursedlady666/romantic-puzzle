document.addEventListener("DOMContentLoaded", () => {
    // Lista de 30 Poemas proporcionados por el usuario
    const poems = [
        {
            id: 1,
            title: "I. La Ciencia del Beso",
            stanza1: "Llegaron tus manos, sabias del frío,\ncomo quien busca en la materia inerte\nun átomo de luz, y sin herirme\nvencieron mi muerte.",
            stanza2: "No trajo tu llegada el vano alivio,\nni el bálsamo que cierra la herida;\nbesaste el mal, y al roce de tu boca...\n¡volvió la vida!",
            stanza3: "Ya mi dolor no sabe cómo hablarme,\nperdió su nombre en la desierta calma;\nhoy, si me duele, solo tiene un eco:\n¡tu nombre... y mi alma!",
            legend: "...mi médico..."
        },
        {
            id: 2,
            title: "II. El Instante Eterno",
            stanza1: "No fue un día marcado en el tiempo,\nni cifra que se pierde en la mañana;\nfue el punto en que las almas, a lo lejos,\nhallaron su calma.",
            stanza2: "El hado, fatigado de la espera,\ntrenzó en la sombra un lazo indivisible;\ny hoy la antigua soledad es un espectro...\n¡que cruzar no puede!",
            stanza3: "Vaga fuera, cual niebla en el cristal,\najena a la luz tibia de mi historia;\nporque al cerrar la puerta, amor mío,\n¡tú eres mi memoria!",
            legend: "...el trece de enero..."
        },
        {
            id: 3,
            title: "III. La Dulce Fiebre",
            stanza1: "Tú eres el vendaval que no rehúyo,\nla fuerza que al pasar todo lo arranca;\ndeshiciste el azar de mi destino...\n¡para darle un ancla!",
            stanza2: "Si es fiebre de amor, si es el delirio\nque a la razón la turba y la oscurece,\nno pido, Skan, a Dios que me lo quite\nni que el mal se cese.",
            stanza3: "Que si esto es enfermar, si es la locura\nperderse en la insondable desventura,\n¡maldiga el cielo la mano que intente\ndarme la cura!",
            legend: "...dices que estoy enferma por amarte tanto..."
        },
        {
            id: 4,
            title: "IV. La Sentencia del Instante",
            stanza1: "Miras con esa paz que al fondo llega,\ny el alma, sin ropaje, se adivina;\nsabes del fuego oculto antes que brote...\n¡y me dominas!",
            stanza2: "No hay dictamen escrito en el papel,\nni cura para el mal que nos abraza;\nsolo una ley se impone en el destino:\nque el tiempo pasa.",
            stanza3: "Y en esta brevedad de la existencia,\ndonde la sombra acecha nuestro grito,\namémonos, amor, cual si la sed...\n¡fuera infinito!",
            legend: "...me conoces más que yo, me calmas..."
        },
        {
            id: 5,
            title: "V. La Ley del Astro",
            stanza1: "Dicen que es paz amor, y que el sosiego\ncalma el latir del pecho que suspira;\n¡mentira! es un afán de siglos muertos...\n¡que hoy respira!",
            stanza2: "Soy para ti cual la obediente ola\nque al astro blanco su vaivén entrega;\nuna ley invisible y misteriosa...\n¡a ti me lleva!",
            stanza3: "Tuya por fuerza de un destino ciego,\nmía en tu ser, donde mi afán habita;\nque ya no soy quien fui, sino el reflejo...\n¡que en ti palpita!",
            legend: "...no podía evitar enamorarme de ti..."
        },
        {
            id: 6,
            title: "VI. El Rito en la Sombra",
            stanza1: "Cuando en la oscura noche tu voz vibra\ny leyendas de ayer al aire lanzas,\nmi espíritu rebelde, que no cree...\n¡se inclina y calla!",
            stanza2: "No hay altar para mí, ni fe sagrada,\nni rezo que mi orgullo no desdiga;\nmas tu acento es el único misterio...\n¡que me mitiga!",
            stanza3: "Los espectros que habitan mi memoria,\nal conjuro de tu voz profunda,\nya no me hieren; cual fantasmas leves...\n¡danzan su ronda!",
            legend: "...amo que leas para mi..."
        },
        {
            id: 7,
            title: "VII. La Memoria de la Piel",
            stanza1: "Entre la niebla cálida y difusa\nque al agua roba su calor secreto,\ndimos forma a un sentir que nadie sabe...\n¡solo el silencio!",
            stanza2: "No hubo el rubor que cubre la mirada,\nni la sombra de duda en el semblante;\nque ya nos conocíamos, mi vida...\n¡desde el 'antes'!",
            stanza3: "Antes de la luz y de la forma,\ncuando el mundo era un sueño no soñado,\nya mi espíritu andaba por el tiempo...\n¡a ti ligado!",
            legend: "...el jacuzzi..."
        },
        {
            id: 8,
            title: "VIII. El Cautiverio",
            stanza1: "Me nombras con ese acento que me rinde,\npalabra que es un lazo entre las flores;\ny yo, que soy el conejo en la espesura...\n¡busco tus redes!",
            stanza2: "Me encierro en tu decir, jaula de oro,\ndonde el alma se entrega al dueño suyo;\nno pido libertad, que mi orgullo...\n¡muere en tu pulso!",
            stanza3: "Voy hacia ti, cual la gama que busca\nla herida que la mate y le dé gloria;\nque morir en tus brazos es, bien mío...\n¡la única vida!",
            legend: "...conejita..."
        },
        {
            id: 9,
            title: "IX. El Rito Sagrado",
            stanza1: "Rompiste el sello de mi templo mudo,\nhiciste de mi carne un santuario\ndonde oficias con fuego y con delirio\ntu rito amargo.",
            stanza2: "No dejes sombra ni rincón oculto\nque no lleve la huella de tu mano;\nque el mundo vea que me habita un dueño\nferoz y humano.",
            stanza3: "Que digan al mirarme que he servido\na un dios que entre los hombres se detiene,\ny que en mi frente, con su hierro de oro,\n¡su marca tiene!",
            legend: "...profáname..."
        },
        {
            id: 10,
            title: "X. La Heredad del Dueño",
            stanza1: "No es cadena tu posesividad, mi cielo,\nes la sombra que el sauce me ofrece;\ndescanso en él del mundo que ignora\ncómo quererme.",
            stanza2: "Me reclamas con ansia de antiguo,\ncomo el que halla su joya en la bruma;\nsoy el tesoro que el tiempo devuelve...\n¡a tu fortuna!",
            stanza3: "¡Qué dulce es el yugo de tu mirada,\nqué bella la cárcel que tú me aseguras!\nTú eres el dueño que busca en mi alma...\n¡sus escrituras!",
            legend: "...tu posesividad..."
        },
        {
            id: 11,
            title: "XI. El Delirio de la Idea",
            stanza1: "Tú dominas mi mente con el arte\ncon que tu mano mi contorno traza;\ny en ese abismo de tu pensamiento...\n¡mi orgullo se deshace!",
            stanza2: "Eres el solo afán que no domino,\nveneno de luz que el alma solicita;\nla droga que en la sombra de mi lecho...\n¡mi sangre resucita!",
            stanza3: "Te pido a gritos cuando el alba asoma,\nbuscando en tu presencia mi alegría;\nque no hay mayor cordura que este vicio...\n¡de ser tuya y no mía!",
            legend: "...la conexión mental..."
        },
        {
            id: 12,
            title: "XII. La Comunión de las Sombras",
            stanza1: "No fue el sustento de la humilde mesa,\nni el humo que en el aire se perdía;\nfue tu mano, en su alquimia, la que puso...\n¡mi propia sed en la comida!",
            stanza2: "Me nutres de silencios y de fuego,\nmanjar de luz que mi deseo nombra;\ny es tal mi hambre de ti, que en mi locura...\n¡bebería hasta tu sombra!",
            stanza3: "Que en los restos que dejas en el suelo,\ndonde el sol tu perfil dibuja y miente,\nhallaría mi espíritu el consuelo...\n¡de poseerte eternamente!",
            legend: "...me cuidas y me alimentas..."
        },
        {
            id: 13,
            title: "XIII. El Libro de la Suerte",
            stanza1: "Aquel día de invierno, con letras de aire,\nfirmamos la suerte que el mundo no ve:\nser uno en el sueño, ser uno en la vida...\n¡sin saber por qué!",
            stanza2: "Vivir a tu lado es cruzar mil abismos,\nhabitar las sombras que el alma prestó;\nmas esta historia que hoy nos envuelve...\n¡es la verdad de los dos!",
            stanza3: "No hay página escrita, ni verso soñado\nque iguale el misterio de vernos aquí;\ntú eres el canto, yo soy la mirada...\n¡que se pierde en ti!",
            legend: "...el 22 de enero..."
        },
        {
            id: 14,
            title: "XIV. El Altar de la Ficción",
            stanza1: "Buscan su rastro sombras de la niebla\nen mundos que la pluma ayer trazó;\nmas son mis dedos los que al fin agitan...\n¡su propio temblor!",
            stanza2: "Soberanos somos de un cielo de sueños,\ndueños del soplo que da vida al ser;\nmas yo me rindo ante el genio que habita\ndentro de tu piel.",
            stanza3: "Tú eres el alma de la estrofa muda,\nyo el eco que se rinde en tu rincón;\nmi fe se postra ante el altar que forma...\n¡tu propia invención!",
            legend: "...soy devota de tu creación..."
        },
        {
            id: 15,
            title: "XV. El Libro sin Fin",
            stanza1: "Me abriste el laberinto de tu mente,\ndonde la luz y el genio se confunden;\ngracias por ser la mano que en la sombra...\n¡la mía sostiene!",
            stanza2: "No quiero el final que la fábula dicta,\nni el sosiego del cuento que se acaba;\nprefiero el borrón, el grito, el ansia...\n¡y la página blanca!",
            stanza3: "Sea nuestra historia un verso que no muere,\nun capítulo eterno y sin medida;\nque no busco el reposo, sino el fuego...\n¡de vivir en tu vida!",
            legend: "...gracias por elegirme como compañera de letras..."
        },
        {
            id: 16,
            title: "XVI. El Héroe de Verdad",
            stanza1: "Ardan los libros de los siglos muertos,\nfalsos héroes de seda y de leyenda;\nningún acero de papel me ha dado...\n¡lo que tú me entregas!",
            stanza2: "Eres mi sombra fiel, mi genio oscuro,\nel verso que al azar vino a mi mano;\nviniste a dar sentido a la tragedia...\n¡de mi pecho amargo!",
            stanza3: "Tú eres la rima que faltaba al mundo,\nel trazo de luz que corrigió mi vida;\nno quiero más leyendas que tu pecho...\ndonde el mío se abriga!",
            legend: "...eres mi héroe..."
        },
        {
            id: 17,
            title: "XVII. La Trama de la Vida",
            stanza1: "Si el mundo fuera una página desierta,\ncon tu nombre los bordes llenaría,\nhasta que ni un espacio se encontrara\n¡donde el vacío cupiera!",
            stanza2: "No se escribe este azar con la palabra,\nes la sangre quien dicta su medida;\nes un sudor de fuego que nos quema\n¡y nos da la caricia!",
            stanza3: "En cada surco que los dos abrimos,\nhay un llanto de gozo y de esperanza;\namarte es la leyenda más hermosa\n¡que el destino trazara!",
            legend: "...solo tu nombre llena el vacío..."
        },
        {
            id: 18,
            title: "XVIII. El Signo en la Mano",
            stanza1: "Leíste en las huellas de mi mano\nel secreto que el tiempo escondía;\ny enredaste tu nombre con el mío...\n¡para ser vida!",
            stanza2: "Yo, que de astros y agüeros dudaba,\nalzo ahora al cielo mi plegaria;\nque mi mañana empiece cada día...\n¡con tu mirada!",
            stanza3: "Tú eres el signo de mi suerte nueva,\nla luz que guía mi planta cansada;\nno quiero más futuro que el que habita...\nen tu palabra!",
            legend: "...mi futuro es tuyo..."
        },
        {
            id: 19,
            title: "XIX. El Latido en el Centro",
            stanza1: "Duerme una sombra leve entre nosotros,\npequeño ser de piel y de silencio;\ntestigo mudo de este amor que ruge...\n¡o es solo un sueño!",
            stanza2: "En lo pequeño, en la existencia humilde,\ndonde la luz sin ruido se aposenta,\nhallo la gloria que en el mundo falta...\n¡y en ti se encuentra!",
            stanza3: "No pido el brillo ni la voz del aire,\nni la grandeza que el orgullo ostenta;\nme basta el pulso de tu pecho, y esta...\npaz que nos rodea!",
            legend: "...skan jr. nuestro hurón..."
        },
        {
            id: 20,
            title: "XX. El Fuego Bajo el Mármol",
            stanza1: "Amo ese gesto de esquivez amarga,\nesa coraza de cristal e invierno;\npues sé que bajo el mármol de tu pecho\n¡un volcán se desata!",
            stanza2: "Es tu frialdad el velo de tu alma,\nque en el silencio por mi bien se agita;\nun fuego que se oculta de los hombres...\nbuscando mi sonrisa!",
            stanza3: "No me asusta la sombra de tu ceño,\nni el hielo que en tus ojos se adivina;\nque el rayo solo nace de la nube...\noscura y pensativa!",
            legend: "...mi bello arisco..."
        },
        {
            id: 21,
            title: "XXI. El Latido Fugitivo",
            stanza1: "No busco el juramento de los siglos,\nni el tiempo que no tiene fin ni orilla;\ndame el soplo de vida de este instante...\n¡y el otro que se arrima!",
            stanza2: "Es un abismo lo que en ti se encierra,\nun laberinto de luz y de sombra;\nno bastará mi paso para hallarte...\n¡si un mundo en ti se asoma!",
            stanza3: "Vagar quiero por todos tus silencios,\nbebiendo el aire que tu pecho agita;\nque cada pliegue es un misterio nuevo...\nque en mi alma se anida!",
            legend: "...temo que el tiempo se nos acabe..."
        },
        {
            id: 22,
            title: "XXII. El Refugio de la Sombra",
            stanza1: "Cuando en mi temblor posas tu mirada\ny velas mi pensamiento que languidece,\nel orbe en su vaivén parece quieto...\n¡por darme tu consuelo!",
            stanza2: "Eres el murmullo que me calma el alma\ncuando mi lámpara apagarse quiere;\ny mi salud es el hallarte cerca...\ny el ver que tú me quieres!",
            stanza3: "No hay más refugio que tu luz serena,\nni más amparo que el que tú me ofreces;\nque este mundo es un mar de vanas sombras...\ny tú mi peña recia!",
            legend: "...tu forma de cuidar mis inseguridades..."
        },
        {
            id: 23,
            title: "XXIII. El Milagro de la Carne",
            stanza1: "Pensé que eras delirio de mi fiebre,\nforma creada por mi propia mente;\nque en este siglo de cristal y fango...\n¡no eras posible!",
            stanza2: "Mas tu mano me arranca de la sombra,\ntu carne al tacto mi dudar deshace;\nque el milagro respira entre mis sábanas...\ny al fin se hace!",
            stanza3: "Ya no te busco en mundos de ideales,\nni en el vapor de la visión extraña;\nporque el cielo bajó hasta nuestro lecho...\ny en él descansa!",
            legend: "...aún no puedo creer que existas..."
        },
        {
            id: 24,
            title: "XXIV. El Verbo del Silencio",
            stanza1: "Dice más tu callar que el grito vano\nde la turba que el mundo va poblando;\nen tu mudez escucho las verdades...\n¡que andaba esperando!",
            stanza2: "Eres descanso de la lid amarga\ny eres la lid que el alma solicita;\npaz de mi sombra y guerra de mi sangre...\n¡que me resucita!",
            stanza3: "No pido tregua al brazo que me rinde,\nni busco el puerto donde el viento calla;\nque es mi mayor victoria, amado mío...\nlibrar tu batalla!",
            legend: "...me acompañas incluso en tu silencio..."
        },
        {
            id: 25,
            title: "XXV. La Fiesta del Aliento",
            stanza1: "¿Qué importa el día que el mundo señala\ncon fiestas de paso y flores de arena?\nSi somos dos almas que tras la tormenta...\n¡hallaron su orilla!",
            stanza2: "Cualquier aurora es sagrada en mi pecho,\nsi el aire que exhalas mi vida acompaña;\nmi pulso se ajusta al compás de tu sueño...\nbajo la mañana!",
            stanza3: "No busco en el tiempo razones de gloria,\nni fechas marcadas con letras de oro;\nmi fiesta es oír tu vivir junto al mío...\ny es ese mi tesoro!",
            legend: "...feliz san valentín..."
        },
        {
            id: 26,
            title: "XXVI. El Pecado del Tiempo",
            stanza1: "Que el tiempo nos perdone la osadía\nde querer detener su paso alado,\npor robarle a la sombra esas horas...\njunto a tu costado!",
            stanza2: "En el cerco de fuego de tus brazos,\nel metal del reloj guarda silencio;\nse deshace la cifra y el mañana...\n¡se vuelve un misterio!",
            stanza3: "No hay pasado ni luz en la memoria,\nsolo existe el presente en que me nombras;\ny el universo es solo tu boca...\ncontra mi boca!",
            legend: "...mis madrugadas son tuyas..."
        },
        {
            id: 27,
            title: "XXVII. El Nudo de la Eternidad",
            stanza1: "«No me sueltes jamás», fue tu mandato,\ny yo estreché mi vida con tu vida\nen nudo que no espera ni desea...\n¡la despedida!",
            stanza2: "Mía es la sombra que mi planta deja,\nmas tuya es la raíz de mi existencia;\ndesde el cabello al aire que respiro...\ntienes mi esencia!",
            stanza3: "Hoy y en los siglos que el azar nos guarde,\nen mundos que la luz aún no recorre,\nseguiré siendo el alma que te busca...\ny que te oye!",
            legend: "...no me sueltes nunca..."
        },
        {
            id: 28,
            title: "XXVIII. El Verbo y la Vida",
            stanza1: "Amo con esa fe de las leyendas,\nque al tiempo, al olvido y al mal vence;\nla que en las páginas de un libro viejo...\n¡siempre florece!",
            stanza2: "Mas amo más el rito de tu mano,\nel aroma del alba que nos guía;\nno quiero más leyendas que tu pecho...\ndonde el mío se abriga!",
            stanza3: "Que no hay pasión escrita con más fuerza\nque la que el labio en el silencio sella;\nprefiero tu vivir, a la memoria...\nde una epopeya!",
            legend: "...nos amo como escritores..."
        },
        {
            id: 29,
            title: "XXIX. El Origen y el Fin",
            stanza1: "Tú eres la voz que mi decir inicia,\ny el mudo fin que mi palabra aguarda;\nel alfabeto en que mi suerte escribe...\n¡su ley sagrada!",
            stanza2: "Fuera de ti, no hay luz, ni voz, ni huella,\nsolo el vacío que el olvido abraza;\nmas si te acercas, hasta el mismo abismo...\n¡se vuelve patria!",
            stanza3: "Eres el centro donde el todo nace,\nel horizonte donde el ser descansa;\nporque sin ti, bien mío, hasta la gloria...\n¡sería la nada!",
            legend: "...eres mi todo, te amo..."
        },
        {
            id: 30,
            title: "XXX. El Norte del Alma",
            stanza1: "Si un siglo de existencia me otorgaran,\nun siglo por hallarte vagaría;\nque ya no sabe mi alma por el mundo...\nir sin la tuya!",
            stanza2: "Eres el norte de mi planta incierta,\nla luz que mi camino solicita;\nsin el imán que de tu pecho nace...\ntodo es fatiga!",
            stanza3: "¡Feliz el mes, la vida y el destino!\n¡Feliz la eternidad que nos aguarda!\nMi amor, mi anhelo, mi refugio, Skan...\n¡mi fe sagrada!",
            legend: "...conocerte ha cambiado mi vida por completo..."
        }
    ];

    const puzzleContainer = document.getElementById('puzzle-container');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('poem-title');
    const stanza1 = document.getElementById('stanza-1');
    const stanza2 = document.getElementById('stanza-2');
    const stanza3 = document.getElementById('stanza-3');
    const poemLegend = document.getElementById('poem-legend');
    const modalPiecePreview = document.getElementById('modal-piece-preview');
    const closeModal = document.querySelector('.close-modal');
    const continueBtn = document.getElementById('continue-btn');
    const resetBtn = document.getElementById('reset-btn');
    const finalState = document.getElementById('final-state');
    const finalImage = document.getElementById('final-image');

    // Configuración del grid
    const cols = 5;
    const rows = 6;
    const totalPieces = cols * rows;

    // Estado del juego
    let solvedPieces = JSON.parse(localStorage.getItem('solvedPieces')) || [];

    // SVG Container for clip paths
    let svgDefs;

    // Inicializar
    init();

    function init() {
        // Resetear visualización
        finalState.classList.remove('visible');
        finalState.classList.add('hidden');
        puzzleContainer.style.display = 'block';

        createPuzzlePieces();

        // Verificar si ya está resuelto al cargar
        if (solvedPieces.length === totalPieces) {
             showFinalState();
        }
    }

    function createPuzzlePieces() {
        puzzleContainer.innerHTML = '';

        // Crear contenedor SVG invisible para los clip-paths
        if (!document.getElementById('puzzle-svg-defs')) {
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.id = 'puzzle-svg-defs';
            svg.style.position = 'absolute';
            svg.style.width = '0';
            svg.style.height = '0';
            svgDefs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
            svg.appendChild(svgDefs);
            document.body.appendChild(svg);
        } else {
            svgDefs = document.getElementById('puzzle-svg-defs').querySelector('defs');
            svgDefs.innerHTML = ''; // Limpiar anteriores
        }

        // Generar bordes aleatorios
        // verticalEdges[row][col] -> borde derecho de la pieza (row, col)
        const verticalEdges = [];
        for(let r=0; r<rows; r++) {
            const rowEdges = [];
            for(let c=0; c<cols-1; c++) {
                rowEdges.push(Math.random() > 0.5 ? 1 : -1);
            }
            verticalEdges.push(rowEdges);
        }

        // horizontalEdges[row][col] -> borde inferior de la pieza (row, col)
        const horizontalEdges = [];
        for(let r=0; r<rows-1; r++) {
            const rowEdges = [];
            for(let c=0; c<cols; c++) {
                rowEdges.push(Math.random() > 0.5 ? 1 : -1);
            }
            horizontalEdges.push(rowEdges);
        }

        // Configuraciones de tamaño (Porcentajes)
        // Core size: 20% width, 16.66% height
        const coreWidthPct = 100 / cols;
        const coreHeightPct = 100 / rows;

        // Padding para los tabs (Digamos 25% del tamaño del core)
        const paddingX = coreWidthPct * 0.25;
        const paddingY = coreHeightPct * 0.25;

        const pieceFullWidthPct = coreWidthPct + 2 * paddingX;
        const pieceFullHeightPct = coreHeightPct + 2 * paddingY;

        for (let i = 0; i < totalPieces; i++) {
            const r = Math.floor(i / cols);
            const c = i % cols;

            // Determinar formas de los bordes (0: flat, 1: out, -1: in)
            // Top: flat si r=0, sino opuesto al bottom del r-1
            let top = (r === 0) ? 0 : -horizontalEdges[r-1][c];
            // Right: flat si c=last, sino verticalEdges[r][c]
            let right = (c === cols-1) ? 0 : verticalEdges[r][c];
            // Bottom: flat si r=last, sino horizontalEdges[r][c]
            let bottom = (r === rows-1) ? 0 : horizontalEdges[r][c];
            // Left: flat si c=0, sino opuesto al right del c-1
            let left = (c === 0) ? 0 : -verticalEdges[r][c-1];

            // Crear path SVG
            const pathData = generatePuzzlePath(top, right, bottom, left);

            // Crear elemento clipPath
            const clipId = `clip-piece-${i}`;
            const clipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
            clipPath.id = clipId;
            clipPath.setAttribute("clipPathUnits", "objectBoundingBox");

            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", pathData);
            clipPath.appendChild(path);
            svgDefs.appendChild(clipPath);

            // Crear DIV de la pieza
            const piece = document.createElement('div');
            piece.classList.add('puzzle-piece');
            piece.dataset.id = i + 1;

            // Estilos de tamaño y posición
            piece.style.width = `${pieceFullWidthPct}%`;
            piece.style.height = `${pieceFullHeightPct}%`;

            // Posición "Correcta" (Core position - padding)
            const coreLeft = c * coreWidthPct;
            const coreTop = r * coreHeightPct;

            const finalLeft = coreLeft - paddingX;
            const finalTop = coreTop - paddingY;

            piece.dataset.correctLeft = `${finalLeft}%`;
            piece.dataset.correctTop = `${finalTop}%`;

            // Clip path
            piece.style.clipPath = `url(#${clipId})`;
            // Compatibilidad webkit
            piece.style.webkitClipPath = `url(#${clipId})`;

            // Background
            // Size: Container Width / Piece Width
            // Scale Factor X = 100 / pieceFullWidthPct
            // Scale Factor Y = 100 / pieceFullHeightPct
            const bgScaleX = (100 / pieceFullWidthPct) * 100;
            const bgScaleY = (100 / pieceFullHeightPct) * 100;

            piece.style.backgroundSize = `${bgScaleX}% ${bgScaleY}%`;

            // Position: -finalLeft, -finalTop (relative to piece)
            // Convert to percentages relative to the piece size? No, absolute pixels?
            // Wait, if we use percentages in background-position, it's tricky with the scaling.
            // Easier to use calculated percentage offsets based on the visual shift.
            // background-position: X% Y% aligns the point X% of image with point X% of container.
            // Let's rely on the formula:
            // We want (0,0) of image to be at (-finalLeft, -finalTop) of div.
            // In CSS percentage: `pos = (offset / (size - container))`.
            // It's complicated. Let's use calc() with pixels if we knew them, or easier:
            // Since everything is %, we can compute the position.
            // Actually, `background-position` relative to the ELEMENT.
            // We want to shift the background so that the correct slice shows.
            // Slice starts at `coreLeft - paddingX`.
            // So we need to shift the image left by `finalLeft`.
            // Value in %: `(finalLeft / (100 - pieceFullWidthPct)) * 100` ?? No.

            // Let's use a trick: `background-origin`. Or just simpler math.
            // Position X (pct) = (TargetX / (ContainerWidth - ImageWidth)) ??
            // If background-size is large, say 400%.
            // 0% -> Left edge of image at left edge of div.
            // 100% -> Right edge of image at right edge of div.
            // Image Width = `bgScaleX` % of div width.
            // We want Image Left = -finalLeft (where finalLeft is % of Container).
            // Div Width = pieceFullWidthPct (of Container).
            // Relation: `finalLeft_div = finalLeft / pieceFullWidthPct`. (ratio of div width)
            // We want the image to start at `-finalLeft_div` relative to div width.
            // `background-position-x` formula for CSS: $P$.
            // Position in px = $P% * (DivWidth - ImageWidth)$.
            // We want Position in px = $-finalLeft_div * DivWidth`.
            // So: $P/100 * (DivWidth - ImageWidth) = -finalLeft_div * DivWidth$.
            // $P/100 * (DivWidth - (bgScaleX/100)*DivWidth) = ...$
            // $P/100 * (1 - bgScaleX/100) = -finalLeft_div$.
            // $P = (-finalLeft_div * 100) / (1 - bgScaleX/100)$.

            const finalLeft_div = finalLeft / pieceFullWidthPct;
            const bgScaleX_ratio = bgScaleX / 100;
            const posX = ((-finalLeft_div) / (1 - bgScaleX_ratio)) * 100;

            const finalTop_div = finalTop / pieceFullHeightPct;
            const bgScaleY_ratio = bgScaleY / 100;
            const posY = ((-finalTop_div) / (1 - bgScaleY_ratio)) * 100;

            piece.style.backgroundPosition = `${posX}% ${posY}%`;
            piece.style.backgroundImage = "url('placeholder.svg')"; // CAMBIAR POR TU FOTO

            // Logic logic
            if (solvedPieces.includes(i + 1)) {
                placePieceCorrectly(piece);
                piece.classList.add('solved');
            } else {
                scatterPiece(piece);
            }

            piece.addEventListener('click', () => handlePieceClick(piece, i + 1));
            puzzleContainer.appendChild(piece);
        }
    }

    // Helper: Generate path data for a piece (0..1 coordinates)
    // top, right, bottom, left: 0 (flat), 1 (out), -1 (in)
    function generatePuzzlePath(top, right, bottom, left) {
        // Defined relative to a 100x100 grid where the "Core" is from 20 to 80.
        // Padding is 20. Total size 100.
        // Wait, earlier I said padding is 25% of core.
        // Let's standardize the coordinate system for the path generator to be 0..1.
        // Core Start X = 0.2, Core End X = 0.8 (Width 0.6). Padding 0.2.
        // Ratio: 0.2 / 0.6 = 1/3 = 33%. My code uses 25%.
        // Let's adjust coordinate system to match code.
        // Code: paddingX = core * 0.25. Total = core + 0.5*core = 1.5*core.
        // So Core is 1 / 1.5 = 2/3 = 0.666 of the width.
        // Padding is 0.1666 on each side.
        // Let's call start = 0.166, end = 0.833.

        const pad = 0.18; // Approx safety margin (slightly more than 0.166 to be safe or flexible)
        // Let's strictly calculate based on assumption: Tab depth is approx 0.15
        const s = pad;
        const e = 1 - pad;

        // Tab shape definition (relative to edge length 1.0)
        // We need a function to draw a tab from (x1, y1) to (x2, y2).

        let d = `M ${s} ${s}`; // Start at top-left of core

        // Top Edge
        if (top === 0) {
            d += ` L ${e} ${s}`;
        } else {
            d += drawHorizontalTab(s, s, e, s, top);
        }

        // Right Edge
        if (right === 0) {
            d += ` L ${e} ${e}`;
        } else {
            d += drawVerticalTab(e, s, e, e, right);
        }

        // Bottom Edge
        if (bottom === 0) {
            d += ` L ${s} ${e}`;
        } else {
            d += drawHorizontalTab(e, e, s, e, bottom); // Right to Left
        }

        // Left Edge
        if (left === 0) {
            d += ` L ${s} ${s}`;
        } else {
            d += drawVerticalTab(s, e, s, s, left); // Bottom to Top
        }

        d += " Z";
        return d;
    }

    function drawHorizontalTab(x1, y1, x2, y2, type) {
        // Draw from (x1,y1) to (x2,y2) with a tab in middle.
        // type 1: out (towards negative Y if on top, or depends on direction?)
        // Let's define "Out" as away from the center of the piece.
        // On Top edge (Left->Right): Out is -Y.
        // On Bottom edge (Right->Left): Out is +Y.

        // Midpoint
        const mx = (x1 + x2) / 2;
        const my = (y1 + y2) / 2;

        // Vector along edge
        const dx = x2 - x1;
        const dy = y2 - y1;
        const len = Math.sqrt(dx*dx + dy*dy);

        // Normal vector (pointing "Out")
        // If (dx, dy) is (1, 0) [Top], Normal is (0, -1).
        // If (dx, dy) is (-1, 0) [Bottom], Normal is (0, 1).
        const nx = dy / len;
        const ny = -dx / len;

        // Tab dimensions (approx 20% of core width)
        const tabW = 0.2 * len; // Neck width
        const tabH = 0.2 * len; // Height
        const headW = 0.3 * len; // Head width

        const sign = type; // 1 or -1

        // Control points
        // Simplified cubic bezier tab
        // p1: start of neck
        const p1x = x1 + dx * 0.35;
        const p1y = y1 + dy * 0.35;

        // p2: end of neck
        const p2x = x1 + dx * 0.65;
        const p2y = y1 + dy * 0.65;

        // Tip points
        const tipX = mx + nx * tabH * sign;
        const tipY = my + ny * tabH * sign;

        // Shoulder 1 (Outwards)
        const s1x = p1x + nx * tabH * 0.2 * sign;
        const s1y = p1y + ny * tabH * 0.2 * sign;

        // Shoulder 2
        const s2x = p2x + nx * tabH * 0.2 * sign;
        const s2y = p2y + ny * tabH * 0.2 * sign;

        // Curves
        // From (x1,y1) to p1 is a line (implied by just starting curve at p1? No, need L)
        // Actually we are at (x1, y1).

        // Build path string.
        // We use CurveTo (C) for smooth tabs.
        // Shape: Line to shoulder start, Curve to tip, Curve to shoulder end, Line to x2.

        // Basic jig shape:
        // L to Neck Start
        // C to Top Left
        // C to Top Right
        // C to Neck End

        // Neck base width is 30% of edge.
        const baseStart = 0.35;
        const baseEnd = 0.65;

        const cp1x = x1 + dx*baseStart + nx*tabH*0.05*sign; // slight bulge
        const cp1y = y1 + dy*baseStart + ny*tabH*0.05*sign;

        const tipLeftX = tipX - dx*0.1;
        const tipLeftY = tipY - dy*0.1;

        const tipRightX = tipX + dx*0.1;
        const tipRightY = tipY + dy*0.1;

        const cp2x = x1 + dx*baseEnd + nx*tabH*0.05*sign;
        const cp2y = y1 + dy*baseEnd + ny*tabH*0.05*sign;

        // Coordinates for Curviness
        // Random variation could be added here for "uniqueness" but let's keep it standard first.

        return ` L ${x1 + dx*0.35} ${y1 + dy*0.35}
                 C ${x1 + dx*0.45} ${y1 + dy*0.35 + ny*tabH*sign},
                   ${tipLeftX} ${tipLeftY},
                   ${tipX} ${tipY}
                 C ${tipRightX} ${tipRightY},
                   ${x1 + dx*0.55} ${y1 + dy*0.65 + ny*tabH*sign},
                   ${x1 + dx*0.65} ${y1 + dy*0.65}`;
    }

    function drawVerticalTab(x1, y1, x2, y2, type) {
        // Reuse logic? Yes, math works for any vector.
        return drawHorizontalTab(x1, y1, x2, y2, type);
    }

    function scatterPiece(piece) {
        // Posición aleatoria en porcentaje (0-80% aprox)
        const randomTop = Math.random() * 80;
        const randomLeft = Math.random() * 80;
        const randomRotate = Math.random() * 60 - 30;

        piece.style.top = `${randomTop}%`;
        piece.style.left = `${randomLeft}%`;
        piece.style.transform = `rotate(${randomRotate}deg)`;
        piece.style.zIndex = Math.floor(Math.random() * 10) + 10;
        piece.style.opacity = "0.85";
        piece.classList.remove('solved');
    }

    function placePieceCorrectly(piece) {
        piece.style.top = piece.dataset.correctTop;
        piece.style.left = piece.dataset.correctLeft;
        piece.style.transform = 'rotate(0deg)';
        // z-index y pointer-events se manejan en CSS con la clase .solved
        piece.style.opacity = "1";
        piece.style.cursor = "default";
        piece.style.boxShadow = "none";
    }

    function handlePieceClick(piece, id) {
        // Si la pieza ya está resuelta, no hacer nada (seguridad adicional al pointer-events:none del CSS)
        if (solvedPieces.includes(id)) {
            return;
        }

        openModal(id, () => {
            solvePiece(piece, id);
        });
    }

    let currentCallback = null;

    function openModal(id, onCloseCallback) {
        const poem = poems.find(p => p.id === id) || poems[0];

        modalTitle.textContent = poem.title;
        stanza1.textContent = poem.stanza1;
        stanza2.textContent = poem.stanza2;
        stanza3.textContent = poem.stanza3;
        poemLegend.textContent = poem.legend;

        // Configurar preview de la pieza
        const piece = document.querySelector(`.puzzle-piece[data-id="${id}"]`);
        if (piece) {
            modalPiecePreview.style.backgroundImage = piece.style.backgroundImage;
            modalPiecePreview.style.backgroundPosition = piece.style.backgroundPosition;
            modalPiecePreview.style.backgroundSize = piece.style.backgroundSize;
            modalPiecePreview.style.clipPath = piece.style.clipPath;
            modalPiecePreview.style.webkitClipPath = piece.style.webkitClipPath;
        }

        modal.classList.add('visible');
        modal.style.visibility = 'visible';

        currentCallback = onCloseCallback;
    }

    function closeModalFunc() {
        modal.classList.remove('visible');
        setTimeout(() => {
            modal.style.visibility = 'hidden';
        }, 300);

        if (currentCallback) {
            currentCallback();
            currentCallback = null;
        }
    }

    closeModal.addEventListener('click', closeModalFunc);
    continueBtn.addEventListener('click', closeModalFunc);

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunc();
        }
    });

    function solvePiece(piece, id) {
        if (!solvedPieces.includes(id)) {
            solvedPieces.push(id);
            localStorage.setItem('solvedPieces', JSON.stringify(solvedPieces));

            placePieceCorrectly(piece);
            piece.classList.add('solved');

            if (solvedPieces.length === totalPieces) {
                setTimeout(() => {
                    showFinalState();
                }, 800);
            }
        }
    }

    function showFinalState() {
        // Obtener la imagen de una pieza para usarla en el fondo final
        // Esto asegura que si el usuario cambió la foto, se use esa misma.
        let bgImage = "url('placeholder.svg')";
        const examplePiece = document.querySelector('.puzzle-piece');

        if (examplePiece) {
            bgImage = examplePiece.style.backgroundImage;
        }

        finalImage.style.backgroundImage = bgImage;

        // Transición
        puzzleContainer.style.display = 'none';
        finalState.classList.remove('hidden');
        finalState.classList.add('visible');
    }

    resetBtn.addEventListener('click', () => {
        if(confirm("¿Quieres reiniciar toda la historia? Las piezas volverán a desordenarse.")) {
            localStorage.removeItem('solvedPieces');
            solvedPieces = [];

            // Ocultar estado final si estaba visible
            finalState.classList.remove('visible');
            finalState.classList.add('hidden');
            puzzleContainer.style.display = 'block';

            init();
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Lista de 30 Poemas.
    // INSTRUCCIONES: Reemplaza el texto entre comillas con tus propios poemas.
    const poems = [
        {
            id: 1,
            title: "Poema 1: El Comienzo",
            stanza1: "En este espacio escribes la primera estrofa,",
            stanza2: "aquí va la segunda parte de tu sentir,",
            stanza3: "y cierras con la tercera estrofa llena de amor.",
            legend: "Lo que sentí al verte por primera vez."
        },
        {
            id: 2,
            title: "Poema 2: Tu Sonrisa",
            stanza1: "Tu sonrisa ilumina mis días oscuros,",
            stanza2: "es el faro que guía mi camino,",
            stanza3: "sin ella, el mundo sería gris.",
            legend: "Esa vez que fuimos al parque."
        },
        // Generaremos el resto automáticamente para no hacer este archivo gigante ahora,
        // pero tú puedes copiar y pegar la estructura anterior hasta tener 30.
    ];

    // Función para completar los 30 poemas (SOLO PARA PRUEBAS)
    for (let i = 3; i <= 30; i++) {
        poems.push({
            id: i,
            title: `Poema ${i}: Momentos`,
            stanza1: `Esta es la estrofa 1 del poema número ${i}.`,
            stanza2: `Aquí escribes más cosas bonitas para el poema ${i}.`,
            stanza3: `Y terminas con mucho amor en el poema ${i}.`,
            legend: `Recuerdo número ${i} de nuestra historia.`
        });
    }

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
        createPuzzlePieces();
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
        piece.style.zIndex = '1';
        piece.style.opacity = "1";
        // piece.style.border = "none"; // Border is handled by clip-path mostly
        piece.style.cursor = "default";
        piece.style.boxShadow = "none";
        // Ensure it's on top of background but below hovering
    }

    function handlePieceClick(piece, id) {
        if (solvedPieces.includes(id)) {
            openModal(id);
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
                    alert("¡Felicidades! Has completado nuestra historia. Te amo.");
                }, 500);
            }
        }
    }

    resetBtn.addEventListener('click', () => {
        if(confirm("¿Quieres reiniciar toda la historia? Las piezas volverán a desordenarse.")) {
            localStorage.removeItem('solvedPieces');
            solvedPieces = [];
            init();
        }
    });
});

// ---------- Data ----------
const MATCH_SET_SIZE = 10;

const equationCards = [
  { name: 'Weight', formula: 'W = mg', weight: 1, right: 0, wrong: 0 },
  { name: 'Speed', formula: 'v = d/t', weight: 1, right: 0, wrong: 0 },
  { name: 'Acceleration', formula: 'a = (v - u)/t', weight: 1, right: 0, wrong: 0 },
  { name: 'Force', formula: 'F = ma', weight: 1, right: 0, wrong: 0 },
  { name: 'Density', formula: 'ρ = m/V', weight: 1, right: 0, wrong: 0 },
  { name: 'Work done', formula: 'W = Fs', weight: 1, right: 0, wrong: 0 },
  { name: 'Power', formula: 'P = E/t', weight: 1, right: 0, wrong: 0 },
  { name: 'Current', formula: 'I = Q/t', weight: 1, right: 0, wrong: 0 },
  { name: 'Voltage', formula: 'V = IR', weight: 1, right: 0, wrong: 0 },
  { name: 'Energy transferred', formula: 'E = Pt', weight: 1, right: 0, wrong: 0 }
];

const scenarioData = [
  makeScenario(
    'Terminal velocity',
    terminalVelocitySVG(),
    [
      { text: 'Weight (downwards)', target: 'a' },
      { text: 'Air resistance (upwards)', target: 'b' },
      { text: 'Constant velocity', target: 'c' },
      { text: 'Resultant force = 0', target: 'd' },
      { text: 'Acceleration increasing', target: null }
    ],
    [
      { id: 'a', x: 18, y: 76 },
      { id: 'b', x: 18, y: 18 },
      { id: 'c', x: 79, y: 32 },
      { id: 'd', x: 79, y: 62 }
    ]
  ),
  makeScenario(
    'Reflection',
    reflectionSVG(),
    [
      { text: 'Incident ray', target: 'a' },
      { text: 'Reflected ray', target: 'b' },
      { text: 'Normal', target: 'c' },
      { text: 'Angle of incidence', target: 'd' },
      { text: 'Mirror surface', target: 'e' },
      { text: 'Refracted ray', target: null }
    ],
    [
      { id: 'a', x: 22, y: 28 },
      { id: 'b', x: 78, y: 28 },
      { id: 'c', x: 50, y: 18 },
      { id: 'd', x: 39, y: 44 },
      { id: 'e', x: 80, y: 76 }
    ]
  ),
  makeScenario(
    'Refraction',
    refractionSVG(),
    [
      { text: 'Incident ray', target: 'a' },
      { text: 'Refracted ray', target: 'b' },
      { text: 'Normal', target: 'c' },
      { text: 'Boundary', target: 'd' },
      { text: 'Ray bends towards the normal', target: 'e' },
      { text: 'Reflected ray only', target: null }
    ],
    [
      { id: 'a', x: 20, y: 26 },
      { id: 'b', x: 77, y: 74 },
      { id: 'c', x: 50, y: 18 },
      { id: 'd', x: 17, y: 52 },
      { id: 'e', x: 71, y: 38 }
    ]
  ),
  makeScenario(
    'Thermal conduction',
    thermalConductionSVG(),
    [
      { text: 'Hot end', target: 'a' },
      { text: 'Cool end', target: 'b' },
      { text: 'Metal rod', target: 'c' },
      { text: 'Energy transferred along rod', target: 'd' },
      { text: 'Convection current', target: null }
    ],
    [
      { id: 'a', x: 15, y: 54 },
      { id: 'b', x: 84, y: 54 },
      { id: 'c', x: 50, y: 72 },
      { id: 'd', x: 50, y: 22 }
    ]
  ),
  makeScenario(
    'Convection',
    convectionSVG(),
    [
      { text: 'Warm fluid rises', target: 'a' },
      { text: 'Cool fluid sinks', target: 'b' },
      { text: 'Heater', target: 'c' },
      { text: 'Convection current', target: 'd' },
      { text: 'Only conduction occurs', target: null }
    ],
    [
      { id: 'a', x: 22, y: 18 },
      { id: 'b', x: 80, y: 22 },
      { id: 'c', x: 50, y: 88 },
      { id: 'd', x: 50, y: 49 }
    ]
  ),
  makeScenario(
    'Diffraction',
    diffractionSVG(),
    [
      { text: 'Incoming plane wavefronts', target: 'a' },
      { text: 'Narrow gap', target: 'b' },
      { text: 'Wavefronts spread out after gap', target: 'c' },
      { text: 'Barrier', target: 'd' },
      { text: 'Longitudinal compression only', target: null }
    ],
    [
      { id: 'a', x: 17, y: 26 },
      { id: 'b', x: 47, y: 50 },
      { id: 'c', x: 81, y: 56 },
      { id: 'd', x: 36, y: 84 }
    ]
  ),
  makeScenario(
    'Dispersion',
    dispersionSVG(),
    [
      { text: 'White light enters prism', target: 'a' },
      { text: 'Glass prism', target: 'b' },
      { text: 'Red light (least deviation)', target: 'c' },
      { text: 'Violet light (most deviation)', target: 'd' },
      { text: 'Spectrum produced', target: 'e' },
      { text: 'Single colour enters prism', target: null }
    ],
    [
      { id: 'a', x: 18, y: 50 },
      { id: 'b', x: 49, y: 75 },
      { id: 'c', x: 83, y: 30 },
      { id: 'd', x: 82, y: 80 },
      { id: 'e', x: 74, y: 56 }
    ]
  ),
  makeScenario(
    'Conduction of electricity through a copper wire',
    electricityConductionSVG(),
    [
      { text: 'Battery / cell', target: 'a' },
      { text: 'Copper wire', target: 'b' },
      { text: 'Electron flow', target: 'c' },
      { text: 'Lamp / resistor', target: 'd' },
      { text: 'Protons move through the wire', target: null }
    ],
    [
      { id: 'a', x: 14, y: 52 },
      { id: 'b', x: 52, y: 18 },
      { id: 'c', x: 54, y: 74 },
      { id: 'd', x: 86, y: 52 }
    ]
  ),
  makeScenario(
    'Half-life of unstable nuclei',
    halfLifeSVG(),
    [
      { text: 'Parent nuclei', target: 'a' },
      { text: 'Daughter nuclei', target: 'b' },
      { text: 'Decay curve', target: 'c' },
      { text: 'One half-life', target: 'd' },
      { text: 'Number of undecayed nuclei', target: 'e' },
      { text: 'Linear increase', target: null }
    ],
    [
      { id: 'a', x: 22, y: 18 },
      { id: 'b', x: 80, y: 74 },
      { id: 'c', x: 56, y: 32 },
      { id: 'd', x: 40, y: 72 },
      { id: 'e', x: 10, y: 42 }
    ]
  )
];

const keywordBank = [
  { term: 'Momentum', def: 'The quantity of motion of an object, equal to mass × velocity.' },
  { term: 'Specific heat capacity', def: 'Energy needed to raise the temperature of 1 kg of a substance by 1°C.' },
  { term: 'Frequency', def: 'The number of complete waves passing a point each second.' },
  { term: 'Resistance', def: 'How much a component opposes electric current.' },
  { term: 'Half-life', def: 'The time taken for the number of undecayed nuclei to halve.' },
  { term: 'Refraction', def: 'The change in direction of a wave when it enters a different medium.' },
  { term: 'Power', def: 'The rate at which energy is transferred or work is done.' },
  { term: 'Density', def: 'Mass per unit volume.' },
  { term: 'Current', def: 'The rate of flow of electric charge.' },
  { term: 'Energy transfer', def: 'Movement of energy between stores by heating, working, electrical transfer, or radiation.' },
  { term: 'Acceleration', def: 'The change in velocity per unit time.' },
  { term: 'Voltage', def: 'The energy transferred per unit charge between two points in a circuit.' },
  { term: 'Wave speed', def: 'The distance travelled by a wave each second.' },
  { term: 'Diffraction', def: 'The spreading out of waves after passing through a gap or around an obstacle.' },
  { term: 'Dispersion', def: 'The splitting of white light into its component colours.' },
  { term: 'Convection', def: 'Thermal energy transfer in fluids caused by the movement of the fluid itself.' },
  { term: 'Conduction', def: 'Transfer of thermal energy through collisions and vibrations of particles.' },
  { term: 'Reflection', def: 'The bouncing back of a wave from a surface.' },
  { term: 'Terminal velocity', def: 'The constant speed reached when resistive forces equal the driving force.' },
  { term: 'Ion', def: 'An atom or group of atoms with an overall electric charge.' },
  { term: 'Isotope', def: 'Atoms of the same element with the same number of protons but different numbers of neutrons.' },
  { term: 'Resultant force', def: 'The overall force acting on an object after all forces are combined.' },
  { term: 'Work done', def: 'Energy transferred when a force moves an object through a distance.' },
  { term: 'Elastic potential energy', def: 'Energy stored when an object is stretched or compressed.' }
];

function makeScenario(name, svg, labels, targets) {
  return {
    name,
    svg,
    labels: labels.map((label, index) => ({ ...label, id: `${name}-${index}` })),
    targets
  };
}

// ---------- Global state ----------
let currentCard = null;
let attempts = 0;
let correctAttempts = 0;
let currentScenario = null;
let selectedLabelId = null;
let matchingState = [];

// ---------- Navigation ----------
const views = document.querySelectorAll('.view');
const backHomeBtn = document.getElementById('backHomeBtn');

function showView(viewId) {
  views.forEach(view => view.classList.toggle('active', view.id === viewId));
  backHomeBtn.style.visibility = viewId === 'homeView' ? 'hidden' : 'visible';
}

document.querySelectorAll('.home-card').forEach(button => {
  button.addEventListener('click', () => showView(button.dataset.target));
});
backHomeBtn.addEventListener('click', () => showView('homeView'));
backHomeBtn.style.visibility = 'hidden';

// ---------- Flashcards ----------
const flashcardEl = document.getElementById('flashcard');
const equationNameEl = document.getElementById('equationName');
const equationFormulaEl = document.getElementById('equationFormula');
const flashcardProgressEl = document.getElementById('flashcardProgress');
const flashcardAccuracyEl = document.getElementById('flashcardAccuracy');

function weightedPick(cards) {
  const totalWeight = cards.reduce((total, card) => total + card.weight, 0);
  let threshold = Math.random() * totalWeight;

  for (const card of cards) {
    threshold -= card.weight;
    if (threshold <= 0) return card;
  }

  return cards[cards.length - 1];
}

function renderCard() {
  currentCard = weightedPick(equationCards);
  flashcardEl.classList.remove('flipped');
  equationNameEl.textContent = currentCard.name;
  equationFormulaEl.textContent = currentCard.formula;
  flashcardProgressEl.textContent = `Card ${attempts + 1} • Focus deck: ${equationCards.length}`;

  const accuracy = attempts ? Math.round((correctAttempts / attempts) * 100) : 0;
  flashcardAccuracyEl.textContent = `Accuracy: ${accuracy}%`;
}

function markCard(isCorrect) {
  if (!flashcardEl.classList.contains('flipped')) return;

  attempts += 1;
  if (isCorrect) {
    correctAttempts += 1;
    currentCard.right += 1;
    currentCard.weight = Math.max(0.25, currentCard.weight * 0.72);
  } else {
    currentCard.wrong += 1;
    currentCard.weight = Math.min(3.2, currentCard.weight + 0.65);
  }

  renderCard();
}

flashcardEl.addEventListener('click', () => flashcardEl.classList.toggle('flipped'));
flashcardEl.addEventListener('keydown', event => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    flashcardEl.classList.toggle('flipped');
  }
});

document.getElementById('rightBtn').addEventListener('click', () => markCard(true));
document.getElementById('wrongBtn').addEventListener('click', () => markCard(false));

// ---------- Diagrams ----------
const scenarioMenu = document.getElementById('scenarioMenu');
const diagramBoard = document.getElementById('diagramBoard');
const labelPool = document.getElementById('labelPool');
const diagramFeedback = document.getElementById('diagramFeedback');

function initScenarioMenu() {
  scenarioData.forEach((scenario, index) => {
    const button = document.createElement('button');
    button.className = 'scenario-btn ghost-btn';
    button.textContent = scenario.name;
    button.addEventListener('click', () => {
      document.querySelectorAll('.scenario-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      loadScenario(index);
    });
    scenarioMenu.appendChild(button);
  });
}

function loadScenario(index) {
  currentScenario = structuredClone(scenarioData[index]);
  selectedLabelId = null;
  diagramBoard.innerHTML = currentScenario.svg;
  labelPool.innerHTML = '';

  currentScenario.targets.forEach(target => {
    const zone = document.createElement('button');
    zone.type = 'button';
    zone.className = 'dropzone';
    zone.dataset.target = target.id;
    zone.style.left = `${target.x}%`;
    zone.style.top = `${target.y}%`;
    zone.textContent = 'Place label';

    zone.addEventListener('dragover', event => event.preventDefault());
    zone.addEventListener('drop', event => {
      event.preventDefault();
      handleLabelDrop(event.dataTransfer.getData('text/plain'), zone);
    });
    zone.addEventListener('click', () => {
      if (!selectedLabelId || zone.classList.contains('correct')) return;
      handleLabelDrop(selectedLabelId, zone);
    });

    diagramBoard.appendChild(zone);
  });

  shuffle([...currentScenario.labels]).forEach(label => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'label-chip';
    chip.draggable = true;
    chip.dataset.labelId = label.id;
    chip.textContent = label.text;

    chip.addEventListener('dragstart', event => event.dataTransfer.setData('text/plain', label.id));
    chip.addEventListener('click', () => {
      selectedLabelId = selectedLabelId === label.id ? null : label.id;
      document.querySelectorAll('.label-chip').forEach(poolChip => {
        poolChip.classList.toggle('selected', poolChip.dataset.labelId === selectedLabelId);
      });
      diagramFeedback.textContent = selectedLabelId
        ? 'Label selected — now tap a matching target on the diagram.'
        : 'Label deselected.';
    });

    labelPool.appendChild(chip);
  });

  diagramFeedback.textContent = 'Place the correct labels. Distractors should stay in the label pool.';
}

function handleLabelDrop(labelId, zone) {
  const label = currentScenario.labels.find(item => item.id === labelId);
  if (!label || zone.classList.contains('correct')) return;

  if (label.target === zone.dataset.target) {
    zone.textContent = label.text;
    zone.classList.add('correct');

    const chip = labelPool.querySelector(`[data-label-id="${label.id}"]`);
    if (chip) chip.remove();

    selectedLabelId = null;
    diagramFeedback.textContent = 'Correct — that label matches the diagram.';
  } else {
    diagramFeedback.textContent = 'That label does not belong there. Try another target.';
  }

  const unresolvedLabels = currentScenario.labels.filter(labelItem => (
    labelItem.target && labelPool.querySelector(`[data-label-id="${labelItem.id}"]`)
  ));

  if (!unresolvedLabels.length) {
    diagramFeedback.textContent = 'Excellent! Every correct label has been placed.';
  }
}

// ---------- Keyword matching ----------
const matchingListEl = document.getElementById('matchingList');
const matchScoreEl = document.getElementById('matchScore');

function buildMatchingSet() {
  const selectedEntries = shuffle([...keywordBank]).slice(0, MATCH_SET_SIZE);
  const definitions = shuffle(selectedEntries.map(entry => entry.def));
  matchingState = selectedEntries.map(entry => ({ ...entry, selected: '' }));

  matchingListEl.innerHTML = '';
  matchingState.forEach((entry, index) => {
    const row = document.createElement('div');
    row.className = 'match-row';
    row.dataset.index = index;

    const termEl = document.createElement('strong');
    termEl.textContent = entry.term;

    const selectEl = document.createElement('select');
    selectEl.innerHTML = `
      <option value="">Select a definition...</option>
      ${definitions.map(definition => `<option value="${definition}">${definition}</option>`).join('')}
    `;
    selectEl.addEventListener('change', event => {
      matchingState[index].selected = event.target.value;
      row.classList.remove('correct', 'incorrect');
    });

    row.append(termEl, selectEl);
    matchingListEl.appendChild(row);
  });

  matchScoreEl.textContent = `New set loaded from a bank of ${keywordBank.length} keywords.`;
}

function checkMatches() {
  let score = 0;

  [...matchingListEl.children].forEach((row, index) => {
    const isCorrect = matchingState[index].selected === matchingState[index].def;
    row.classList.toggle('correct', isCorrect);
    row.classList.toggle('incorrect', !isCorrect);
    if (isCorrect) score += 1;
  });

  matchScoreEl.textContent = `You got ${score}/${MATCH_SET_SIZE} correct.`;
}

function resetSelections() {
  matchingState.forEach(entry => {
    entry.selected = '';
  });

  matchingListEl.querySelectorAll('select').forEach(select => {
    select.value = '';
  });
  matchingListEl.querySelectorAll('.match-row').forEach(row => {
    row.classList.remove('correct', 'incorrect');
  });

  matchScoreEl.textContent = 'Selections reset. Try this set again.';
}

document.getElementById('checkMatchesBtn').addEventListener('click', checkMatches);
document.getElementById('retryMatchesBtn').addEventListener('click', resetSelections);
document.getElementById('newSetBtn').addEventListener('click', buildMatchingSet);

// ---------- Utility ----------
function shuffle(array) {
  for (let index = array.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
  }

  return array;
}

// ---------- SVG templates ----------
function terminalVelocitySVG() {
  return `<svg viewBox="0 0 600 360" aria-label="Terminal velocity diagram">
    <rect width="600" height="360" fill="#f8fafc" />
    <defs>
      <marker id="arrow-dark" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="#0f172a" />
      </marker>
      <marker id="arrow-red" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="#dc2626" />
      </marker>
      <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="#059669" />
      </marker>
    </defs>
    <path d="M300 35 C240 80 235 140 260 190 C280 225 282 275 250 325" fill="none" stroke="#94a3b8" stroke-width="4" stroke-dasharray="10 10" />
    <circle cx="260" cy="190" r="28" fill="#a5b4fc" stroke="#4338ca" stroke-width="3" />
    <line x1="260" y1="150" x2="260" y2="95" stroke="#059669" stroke-width="5" marker-end="url(#arrow-green)" />
    <line x1="260" y1="230" x2="260" y2="292" stroke="#dc2626" stroke-width="5" marker-end="url(#arrow-red)" />
    <line x1="345" y1="190" x2="465" y2="190" stroke="#0f172a" stroke-width="5" marker-end="url(#arrow-dark)" />
    <text x="332" y="178" font-size="20" fill="#0f172a">v</text>
  </svg>`;
}

function reflectionSVG() {
  return `<svg viewBox="0 0 600 360" aria-label="Reflection diagram">
    <rect width="600" height="360" fill="#f8fafc" />
    <defs>
      <marker id="reflection-arrow-red" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="#ef4444" />
      </marker>
      <marker id="reflection-arrow-blue" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="#2563eb" />
      </marker>
    </defs>
    <line x1="80" y1="280" x2="520" y2="280" stroke="#334155" stroke-width="6" />
    <line x1="300" y1="70" x2="300" y2="280" stroke="#64748b" stroke-width="3" stroke-dasharray="8 8" />
    <line x1="150" y1="110" x2="300" y2="280" stroke="#ef4444" stroke-width="5" marker-end="url(#reflection-arrow-red)" />
    <line x1="300" y1="280" x2="450" y2="110" stroke="#2563eb" stroke-width="5" marker-end="url(#reflection-arrow-blue)" />
    <path d="M300 230 A50 50 0 0 0 263 193" fill="none" stroke="#111827" stroke-width="2.5" />
  </svg>`;
}

function refractionSVG() {
  return `<svg viewBox="0 0 600 360" aria-label="Refraction diagram">
    <rect width="600" height="170" fill="#f8fafc" />
    <rect y="170" width="600" height="190" fill="#dbeafe" />
    <defs>
      <marker id="refract-red" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="#ef4444" />
      </marker>
      <marker id="refract-blue" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="#2563eb" />
      </marker>
    </defs>
    <line x1="0" y1="170" x2="600" y2="170" stroke="#334155" stroke-width="4" />
    <line x1="300" y1="40" x2="300" y2="320" stroke="#64748b" stroke-width="3" stroke-dasharray="8 8" />
    <line x1="130" y1="70" x2="300" y2="170" stroke="#ef4444" stroke-width="5" marker-end="url(#refract-red)" />
    <line x1="300" y1="170" x2="390" y2="315" stroke="#2563eb" stroke-width="5" marker-end="url(#refract-blue)" />
    <path d="M300 215 A45 45 0 0 0 332 186" fill="none" stroke="#0f172a" stroke-width="2.5" />
  </svg>`;
}

function thermalConductionSVG() {
  return `<svg viewBox="0 0 600 360" aria-label="Thermal conduction diagram">
    <rect width="600" height="360" fill="#f8fafc" />
    <defs>
      <linearGradient id="rod-gradient" x1="0" x2="1">
        <stop offset="0%" stop-color="#fb923c" />
        <stop offset="100%" stop-color="#60a5fa" />
      </linearGradient>
      <marker id="heat-transfer-arrow" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="#0f172a" />
      </marker>
    </defs>
    <rect x="100" y="150" width="400" height="64" rx="12" fill="url(#rod-gradient)" stroke="#334155" stroke-width="3" />
    <circle cx="130" cy="182" r="12" fill="#b91c1c" />
    <circle cx="470" cy="182" r="12" fill="#1d4ed8" />
    <line x1="180" y1="115" x2="420" y2="115" stroke="#0f172a" stroke-width="5" marker-end="url(#heat-transfer-arrow)" />
    <circle cx="220" cy="182" r="10" fill="#f8fafc" stroke="#64748b" />
    <circle cx="265" cy="182" r="10" fill="#f8fafc" stroke="#64748b" />
    <circle cx="310" cy="182" r="10" fill="#f8fafc" stroke="#64748b" />
    <circle cx="355" cy="182" r="10" fill="#f8fafc" stroke="#64748b" />
    <circle cx="400" cy="182" r="10" fill="#f8fafc" stroke="#64748b" />
  </svg>`;
}

function convectionSVG() {
  return `<svg viewBox="0 0 600 360" aria-label="Convection diagram">
    <rect width="600" height="360" fill="#f8fafc" />
    <defs>
      <marker id="convection-arrow-red" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="#ef4444" />
      </marker>
      <marker id="convection-arrow-blue" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="#2563eb" />
      </marker>
    </defs>
    <rect x="170" y="60" width="260" height="220" rx="16" fill="#dbeafe" stroke="#334155" stroke-width="4" />
    <rect x="245" y="285" width="110" height="18" rx="8" fill="#f97316" />
    <path d="M235 235 C215 195 218 130 255 105" stroke="#ef4444" stroke-width="5" fill="none" marker-end="url(#convection-arrow-red)" />
    <path d="M255 105 C310 82 360 84 395 120" stroke="#ef4444" stroke-width="5" fill="none" marker-end="url(#convection-arrow-red)" />
    <path d="M395 120 C415 160 415 225 365 250" stroke="#2563eb" stroke-width="5" fill="none" marker-end="url(#convection-arrow-blue)" />
    <path d="M365 250 C320 270 275 270 235 235" stroke="#2563eb" stroke-width="5" fill="none" marker-end="url(#convection-arrow-blue)" />
  </svg>`;
}

function diffractionSVG() {
  return `<svg viewBox="0 0 600 360" aria-label="Diffraction diagram">
    <rect width="600" height="360" fill="#f8fafc" />
    <line x1="280" y1="50" x2="280" y2="150" stroke="#334155" stroke-width="8" />
    <line x1="280" y1="210" x2="280" y2="310" stroke="#334155" stroke-width="8" />
    <line x1="90" y1="120" x2="260" y2="120" stroke="#6366f1" stroke-width="4" />
    <line x1="90" y1="170" x2="260" y2="170" stroke="#6366f1" stroke-width="4" />
    <line x1="90" y1="220" x2="260" y2="220" stroke="#6366f1" stroke-width="4" />
    <path d="M300 180 q70 -105 175 -80" stroke="#0ea5e9" fill="none" stroke-width="4" />
    <path d="M300 180 q95 0 190 0" stroke="#0ea5e9" fill="none" stroke-width="4" />
    <path d="M300 180 q70 105 175 80" stroke="#0ea5e9" fill="none" stroke-width="4" />
  </svg>`;
}

function dispersionSVG() {
  return `<svg viewBox="0 0 600 360" aria-label="Dispersion diagram">
    <rect width="600" height="360" fill="#f8fafc" />
    <polygon points="260,110 345,180 260,250" fill="#e2e8f0" stroke="#334155" stroke-width="3" />
    <line x1="90" y1="180" x2="258" y2="180" stroke="#111827" stroke-width="6" />
    <line x1="345" y1="180" x2="520" y2="140" stroke="#ef4444" stroke-width="4" />
    <line x1="345" y1="180" x2="520" y2="165" stroke="#f97316" stroke-width="4" />
    <line x1="345" y1="180" x2="520" y2="190" stroke="#eab308" stroke-width="4" />
    <line x1="345" y1="180" x2="520" y2="215" stroke="#22c55e" stroke-width="4" />
    <line x1="345" y1="180" x2="520" y2="240" stroke="#3b82f6" stroke-width="4" />
    <line x1="345" y1="180" x2="520" y2="265" stroke="#7c3aed" stroke-width="4" />
  </svg>`;
}

function electricityConductionSVG() {
  return `<svg viewBox="0 0 600 360" aria-label="Electrical conduction through a copper wire diagram">
    <rect width="600" height="360" fill="#f8fafc" />
    <defs>
      <marker id="electron-arrow" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="#1d4ed8" />
      </marker>
    </defs>
    <rect x="70" y="140" width="90" height="90" rx="10" fill="#fde68a" stroke="#334155" stroke-width="3" />
    <circle cx="115" cy="185" r="18" fill="#f59e0b" stroke="#92400e" stroke-width="3" />
    <line x1="160" y1="185" x2="470" y2="185" stroke="#b45309" stroke-width="12" stroke-linecap="round" />
    <circle cx="240" cy="185" r="7" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2" />
    <circle cx="300" cy="185" r="7" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2" />
    <circle cx="360" cy="185" r="7" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2" />
    <line x1="405" y1="230" x2="255" y2="230" stroke="#1d4ed8" stroke-width="4" marker-end="url(#electron-arrow)" />
    <circle cx="505" cy="185" r="42" fill="#fef3c7" stroke="#334155" stroke-width="3" />
    <path d="M505 155 L490 195 L505 195 L495 225" fill="none" stroke="#f59e0b" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>`;
}

function halfLifeSVG() {
  return `<svg viewBox="0 0 600 360" aria-label="Half-life of unstable nuclei diagram">
    <rect width="600" height="360" fill="#f8fafc" />
    <line x1="85" y1="300" x2="530" y2="300" stroke="#334155" stroke-width="4" />
    <line x1="85" y1="300" x2="85" y2="55" stroke="#334155" stroke-width="4" />
    <path d="M85 85 C175 120 250 170 530 285" stroke="#ef4444" fill="none" stroke-width="5" />
    <line x1="85" y1="165" x2="255" y2="165" stroke="#64748b" stroke-width="2.5" stroke-dasharray="8 8" />
    <line x1="255" y1="165" x2="255" y2="300" stroke="#64748b" stroke-width="2.5" stroke-dasharray="8 8" />
    <circle cx="135" cy="95" r="9" fill="#4338ca" />
    <circle cx="160" cy="105" r="9" fill="#4338ca" />
    <circle cx="145" cy="130" r="9" fill="#4338ca" />
    <circle cx="470" cy="250" r="8" fill="#94a3b8" />
    <circle cx="495" cy="265" r="8" fill="#94a3b8" />
    <circle cx="450" cy="275" r="8" fill="#94a3b8" />
  </svg>`;
}

// ---------- Start ----------
renderCard();
initScenarioMenu();
buildMatchingSet();

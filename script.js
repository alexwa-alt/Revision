// ---------- Data ----------
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
  makeScenario('Terminal velocity', terminalVelocitySVG(), [
    { text: 'Weight force', target: 'a' },
    { text: 'Air resistance', target: 'b' },
    { text: 'Terminal speed reached', target: 'c' },
    { text: 'Resultant force to the right', target: null }
  ], [
    { id: 'a', x: 28, y: 22 }, { id: 'b', x: 28, y: 72 }, { id: 'c', x: 74, y: 45 }
  ]),
  makeScenario('Reflection', reflectionSVG(), [
    { text: 'Incident ray', target: 'a' }, { text: 'Reflected ray', target: 'b' },
    { text: 'Normal', target: 'c' }, { text: 'Angle of incidence', target: 'd' },
    { text: 'Refracted ray', target: null }
  ], [{ id: 'a', x: 25, y: 32 }, { id: 'b', x: 75, y: 32 }, { id: 'c', x: 50, y: 25 }, { id: 'd', x: 43, y: 43 }]),
  makeScenario('Refraction', refractionSVG(), [
    { text: 'Incident ray', target: 'a' }, { text: 'Refracted ray', target: 'b' },
    { text: 'Normal', target: 'c' }, { text: 'Boundary', target: 'd' },
    { text: 'Total internal reflection', target: null }
  ], [{ id: 'a', x: 22, y: 33 }, { id: 'b', x: 68, y: 70 }, { id: 'c', x: 50, y: 26 }, { id: 'd', x: 49, y: 50 }]),
  makeScenario('Thermal conduction', thermalConductionSVG(), [
    { text: 'Hot end', target: 'a' }, { text: 'Cool end', target: 'b' },
    { text: 'Heat transfer by particle vibration', target: 'c' }, { text: 'Convection current', target: null }
  ], [{ id: 'a', x: 20, y: 50 }, { id: 'b', x: 80, y: 50 }, { id: 'c', x: 50, y: 32 }]),
  makeScenario('Convection', convectionSVG(), [
    { text: 'Warm fluid rises', target: 'a' }, { text: 'Cool fluid sinks', target: 'b' },
    { text: 'Convection current', target: 'c' }, { text: 'Radiation only', target: null }
  ], [{ id: 'a', x: 28, y: 24 }, { id: 'b', x: 76, y: 74 }, { id: 'c', x: 52, y: 50 }]),
  makeScenario('Diffraction', diffractionSVG(), [
    { text: 'Narrow gap', target: 'a' }, { text: 'Wavefronts spread out', target: 'b' },
    { text: 'Incoming plane waves', target: 'c' }, { text: 'Polarisation axis', target: null }
  ], [{ id: 'a', x: 47, y: 50 }, { id: 'b', x: 77, y: 50 }, { id: 'c', x: 20, y: 50 }]),
  makeScenario('Dispersion', dispersionSVG(), [
    { text: 'White light', target: 'a' }, { text: 'Prism', target: 'b' },
    { text: 'Red light (least deviation)', target: 'c' }, { text: 'Violet light (most deviation)', target: 'd' },
    { text: 'Single wavelength output', target: null }
  ], [{ id: 'a', x: 20, y: 50 }, { id: 'b', x: 46, y: 54 }, { id: 'c', x: 80, y: 40 }, { id: 'd', x: 80, y: 72 }]),
  makeScenario('Conduction in copper wire', electricityConductionSVG(), [
    { text: 'Battery', target: 'a' }, { text: 'Copper wire', target: 'b' },
    { text: 'Electron drift direction', target: 'c' }, { text: 'Protons flowing in wire', target: null }
  ], [{ id: 'a', x: 20, y: 50 }, { id: 'b', x: 50, y: 42 }, { id: 'c', x: 70, y: 56 }]),
  makeScenario('Half-life of unstable nuclei', halfLifeSVG(), [
    { text: 'Parent nuclei', target: 'a' }, { text: 'Daughter nuclei', target: 'b' },
    { text: 'Decay curve', target: 'c' }, { text: 'Half-life interval', target: 'd' },
    { text: 'Linear decay', target: null }
  ], [{ id: 'a', x: 17, y: 20 }, { id: 'b', x: 80, y: 78 }, { id: 'c', x: 48, y: 45 }, { id: 'd', x: 35, y: 68 }])
];

const keywordBank = [
  { term: 'Momentum', def: 'The quantity of motion of an object, equal to mass × velocity.' },
  { term: 'Specific heat capacity', def: 'Energy needed to raise the temperature of 1 kg of a substance by 1°C.' },
  { term: 'Frequency', def: 'The number of complete waves passing a point each second.' },
  { term: 'Resistance', def: 'How much a component opposes electric current.' },
  { term: 'Half-life', def: 'Time taken for the number of undecayed nuclei to halve.' },
  { term: 'Refraction', def: 'The change in direction of waves when they enter a different medium.' },
  { term: 'Power', def: 'The rate of energy transfer per second.' },
  { term: 'Density', def: 'Mass per unit volume.' },
  { term: 'Current', def: 'Rate of flow of electric charge.' },
  { term: 'Energy transfer', def: 'Movement of energy from one store to another by heating, working, or radiation.' }
];

function makeScenario(name, svg, labels, targets) {
  return { name, svg, labels: labels.map((l, i) => ({ ...l, id: `${name}-${i}` })), targets };
}

// ---------- Global state ----------
let activeView = 'homeView';
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
  activeView = viewId;
  views.forEach(v => v.classList.toggle('active', v.id === viewId));
  backHomeBtn.style.visibility = viewId === 'homeView' ? 'hidden' : 'visible';
}

document.querySelectorAll('.home-card').forEach(btn => {
  btn.addEventListener('click', () => showView(btn.dataset.target));
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
  const total = cards.reduce((sum, c) => sum + c.weight, 0);
  let r = Math.random() * total;
  for (const card of cards) {
    r -= card.weight;
    if (r <= 0) return card;
  }
  return cards[cards.length - 1];
}

function renderCard() {
  currentCard = weightedPick(equationCards);
  flashcardEl.classList.remove('flipped');
  equationNameEl.textContent = currentCard.name;
  equationFormulaEl.textContent = currentCard.formula;
  const totalSeen = attempts + 1;
  flashcardProgressEl.textContent = `Card ${totalSeen} • Focus deck: ${equationCards.length}`;
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
flashcardEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
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
  scenarioData.forEach((scenario, idx) => {
    const btn = document.createElement('button');
    btn.className = 'scenario-btn ghost-btn';
    btn.textContent = scenario.name;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.scenario-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      loadScenario(idx);
    });
    scenarioMenu.appendChild(btn);
  });
}

function loadScenario(index) {
  currentScenario = JSON.parse(JSON.stringify(scenarioData[index]));
  selectedLabelId = null;
  diagramBoard.innerHTML = currentScenario.svg;
  labelPool.innerHTML = '';

  currentScenario.targets.forEach(target => {
    const zone = document.createElement('div');
    zone.className = 'dropzone';
    zone.dataset.target = target.id;
    zone.style.left = `${target.x}%`;
    zone.style.top = `${target.y}%`;
    zone.textContent = 'Drop label';

    zone.addEventListener('dragover', e => e.preventDefault());
    zone.addEventListener('drop', e => {
      e.preventDefault();
      handleLabelDrop(e.dataTransfer.getData('text/plain'), zone);
    });
    zone.addEventListener('click', () => {
      if (!selectedLabelId) return;
      handleLabelDrop(selectedLabelId, zone);
    });
    diagramBoard.appendChild(zone);
  });

  shuffle(currentScenario.labels).forEach(label => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'label-chip';
    chip.draggable = true;
    chip.dataset.labelId = label.id;
    chip.textContent = label.text;

    chip.addEventListener('dragstart', e => e.dataTransfer.setData('text/plain', label.id));
    chip.addEventListener('click', () => {
      selectedLabelId = selectedLabelId === label.id ? null : label.id;
      document.querySelectorAll('.label-chip').forEach(c => c.classList.toggle('selected', c.dataset.labelId === selectedLabelId));
      diagramFeedback.textContent = selectedLabelId ? 'Now tap a target on the diagram.' : 'Label deselected.';
    });
    labelPool.appendChild(chip);
  });

  diagramFeedback.textContent = 'Place labels. Incorrect labels return to the pool.';
}

function handleLabelDrop(labelId, zone) {
  const label = currentScenario.labels.find(l => l.id === labelId);
  if (!label) return;

  if (label.target === zone.dataset.target) {
    zone.textContent = label.text;
    zone.classList.add('correct');
    const chip = labelPool.querySelector(`[data-label-id="${label.id}"]`);
    if (chip) chip.remove();
    selectedLabelId = null;
    diagramFeedback.textContent = 'Correct! Great physics vocabulary.';
  } else {
    diagramFeedback.textContent = 'Not quite. Try another target.';
  }

  const remainingCorrect = currentScenario.labels.filter(l => l.target && labelPool.querySelector(`[data-label-id="${l.id}"]`));
  if (!remainingCorrect.length) {
    diagramFeedback.textContent = 'Excellent! You labelled the whole diagram.';
  }
}

// ---------- Keyword matching ----------
const matchingListEl = document.getElementById('matchingList');
const matchScoreEl = document.getElementById('matchScore');

function buildMatchingSet() {
  const terms = shuffle([...keywordBank]);
  const definitions = shuffle(keywordBank.map(item => item.def));
  matchingState = terms.map(item => ({ ...item, selected: '' }));

  matchingListEl.innerHTML = '';
  matchingState.forEach((entry, idx) => {
    const row = document.createElement('div');
    row.className = 'match-row';
    row.dataset.index = idx;

    const term = document.createElement('strong');
    term.textContent = entry.term;

    const select = document.createElement('select');
    select.innerHTML = `<option value="">Select a definition...</option>${definitions.map(def => `<option value="${def}">${def}</option>`).join('')}`;
    select.addEventListener('change', e => {
      matchingState[idx].selected = e.target.value;
      row.classList.remove('correct', 'incorrect');
    });

    row.append(term, select);
    matchingListEl.appendChild(row);
  });

  matchScoreEl.textContent = '';
}

function checkMatches() {
  let score = 0;
  [...matchingListEl.children].forEach((row, idx) => {
    const correct = matchingState[idx].selected === matchingState[idx].def;
    row.classList.toggle('correct', correct);
    row.classList.toggle('incorrect', !correct);
    if (correct) score += 1;
  });
  matchScoreEl.textContent = `You got ${score}/10 correct.`;
}

function resetSelections() {
  matchingState.forEach(entry => entry.selected = '');
  matchingListEl.querySelectorAll('select').forEach(select => (select.value = ''));
  matchingListEl.querySelectorAll('.match-row').forEach(row => row.classList.remove('correct', 'incorrect'));
  matchScoreEl.textContent = 'Selections reset. Try again!';
}

document.getElementById('checkMatchesBtn').addEventListener('click', checkMatches);
document.getElementById('retryMatchesBtn').addEventListener('click', resetSelections);
document.getElementById('newSetBtn').addEventListener('click', buildMatchingSet);

// ---------- Utility ----------
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ---------- SVG templates ----------
function terminalVelocitySVG() {
  return `<svg viewBox="0 0 600 360" aria-label="Terminal velocity diagram">
    <rect x="0" y="0" width="600" height="360" fill="#f8fafc"/>
    <circle cx="170" cy="180" r="40" fill="#a5b4fc"/>
    <line x1="170" y1="120" x2="170" y2="70" stroke="#dc2626" stroke-width="4" marker-end="url(#arrow)"/>
    <line x1="170" y1="240" x2="170" y2="290" stroke="#059669" stroke-width="4" marker-end="url(#arrow)"/>
    <line x1="290" y1="180" x2="430" y2="180" stroke="#334155" stroke-width="5" marker-end="url(#arrow)"/>
    <defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#334155"/></marker></defs>
  </svg>`;
}
function reflectionSVG() {
  return `<svg viewBox="0 0 600 360" aria-label="Reflection diagram">
    <rect width="600" height="360" fill="#f8fafc"/>
    <line x1="80" y1="260" x2="520" y2="260" stroke="#334155" stroke-width="5"/>
    <line x1="300" y1="80" x2="300" y2="260" stroke="#64748b" stroke-dasharray="8 8" stroke-width="3"/>
    <line x1="160" y1="120" x2="300" y2="260" stroke="#ef4444" stroke-width="4"/>
    <line x1="300" y1="260" x2="440" y2="120" stroke="#2563eb" stroke-width="4"/>
    <path d="M300 260 A60 60 0 0 0 257 217" fill="none" stroke="#0f172a"/>
  </svg>`;
}
function refractionSVG() {
  return `<svg viewBox="0 0 600 360" aria-label="Refraction diagram">
    <rect width="600" height="180" fill="#f8fafc"/>
    <rect y="180" width="600" height="180" fill="#dbeafe"/>
    <line x1="300" y1="60" x2="300" y2="300" stroke="#64748b" stroke-dasharray="8 8" stroke-width="3"/>
    <line x1="130" y1="70" x2="300" y2="180" stroke="#ef4444" stroke-width="4"/>
    <line x1="300" y1="180" x2="420" y2="290" stroke="#2563eb" stroke-width="4"/>
    <line x1="0" y1="180" x2="600" y2="180" stroke="#334155" stroke-width="4"/>
  </svg>`;
}
function thermalConductionSVG() {
  return `<svg viewBox="0 0 600 360" aria-label="Thermal conduction diagram">
    <rect width="600" height="360" fill="#f8fafc"/>
    <rect x="110" y="150" width="380" height="60" rx="10" fill="url(#tempGrad)" stroke="#334155"/>
    <defs><linearGradient id="tempGrad" x1="0" x2="1"><stop offset="0%" stop-color="#f97316"/><stop offset="100%" stop-color="#60a5fa"/></linearGradient></defs>
    <line x1="210" y1="120" x2="390" y2="120" stroke="#334155" stroke-width="4" marker-end="url(#heatArrow)"/>
    <defs><marker id="heatArrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#334155"/></marker></defs>
  </svg>`;
}
function convectionSVG() {
  return `<svg viewBox="0 0 600 360" aria-label="Convection diagram">
    <rect width="600" height="360" fill="#f8fafc"/>
    <rect x="160" y="60" width="280" height="240" fill="#dbeafe" stroke="#334155" stroke-width="3"/>
    <path d="M220 250 C210 180 220 140 280 120" stroke="#ef4444" stroke-width="4" fill="none" marker-end="url(#arr)"/>
    <path d="M380 110 C390 180 380 220 320 250" stroke="#2563eb" stroke-width="4" fill="none" marker-end="url(#arr)"/>
    <defs><marker id="arr" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#334155"/></marker></defs>
  </svg>`;
}
function diffractionSVG() {
  return `<svg viewBox="0 0 600 360" aria-label="Diffraction diagram">
    <rect width="600" height="360" fill="#f8fafc"/>
    <line x1="280" y1="40" x2="280" y2="150" stroke="#334155" stroke-width="6"/>
    <line x1="280" y1="210" x2="280" y2="320" stroke="#334155" stroke-width="6"/>
    <line x1="60" y1="120" x2="260" y2="120" stroke="#6366f1" stroke-width="3"/>
    <line x1="60" y1="170" x2="260" y2="170" stroke="#6366f1" stroke-width="3"/>
    <line x1="60" y1="220" x2="260" y2="220" stroke="#6366f1" stroke-width="3"/>
    <path d="M300 180 q60 -100 150 -70" stroke="#0ea5e9" fill="none" stroke-width="3"/>
    <path d="M300 180 q90 0 180 0" stroke="#0ea5e9" fill="none" stroke-width="3"/>
    <path d="M300 180 q60 100 150 70" stroke="#0ea5e9" fill="none" stroke-width="3"/>
  </svg>`;
}
function dispersionSVG() {
  return `<svg viewBox="0 0 600 360" aria-label="Dispersion diagram">
    <rect width="600" height="360" fill="#f8fafc"/>
    <polygon points="260,100 340,180 260,260" fill="#e2e8f0" stroke="#334155" stroke-width="3"/>
    <line x1="90" y1="180" x2="258" y2="180" stroke="#111827" stroke-width="5"/>
    <line x1="342" y1="180" x2="520" y2="145" stroke="#ef4444" stroke-width="4"/>
    <line x1="342" y1="180" x2="520" y2="230" stroke="#7c3aed" stroke-width="4"/>
  </svg>`;
}
function electricityConductionSVG() {
  return `<svg viewBox="0 0 600 360" aria-label="Electric conduction diagram">
    <rect width="600" height="360" fill="#f8fafc"/>
    <rect x="80" y="140" width="70" height="80" rx="8" fill="#fde68a" stroke="#334155"/>
    <line x1="150" y1="180" x2="500" y2="180" stroke="#b45309" stroke-width="10"/>
    <line x1="460" y1="180" x2="370" y2="180" stroke="#1d4ed8" stroke-width="4" marker-end="url(#eArrow)"/>
    <defs><marker id="eArrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#1d4ed8"/></marker></defs>
  </svg>`;
}
function halfLifeSVG() {
  return `<svg viewBox="0 0 600 360" aria-label="Half life diagram">
    <rect width="600" height="360" fill="#f8fafc"/>
    <line x1="80" y1="300" x2="520" y2="300" stroke="#334155" stroke-width="4"/>
    <line x1="80" y1="300" x2="80" y2="60" stroke="#334155" stroke-width="4"/>
    <path d="M80 80 C160 130, 220 180, 520 285" stroke="#ef4444" fill="none" stroke-width="4"/>
    <line x1="80" y1="160" x2="300" y2="160" stroke="#64748b" stroke-dasharray="6 6"/>
    <line x1="300" y1="160" x2="300" y2="300" stroke="#64748b" stroke-dasharray="6 6"/>
  </svg>`;
}

// ---------- Start ----------
renderCard();
initScenarioMenu();
buildMatchingSet();

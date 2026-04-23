const roomsData = [
  {
    id: 'room-1',
    accent: 'gold',
    years: '1837–1945',
    eyebrow: 'Room 1',
    question: 'Can thought be mechanized?',
    title: 'Before AI had a name, thinkers were already building the idea-space for it.',
    summary: 'The roots of AI are older than electronic computers. Programmable machinery, symbolic notation, and formal logic made it possible to imagine intelligence as something that could be represented and executed.',
    beginner: 'This room matters because AI starts as a human idea before it becomes a machine reality. The key leap was believing reasoning could be expressed in symbols and procedures.',
    technical: 'Babbage, Lovelace, and later Turing helped establish the abstraction stack AI still relies on: symbolic representation, programmable procedure, and formal models of computation.',
    image: './assets/rooms/mechanized-thought.svg',
    imageAlt: 'Original illustration of gears, notation, and punched instructions representing mechanized thought.',
    imageLabel: 'Original vector artifact',
    milestones: [
      { year: '1837', title: 'Analytical Engine', note: 'Babbage proposed a general programmable machine, long before modern computers.' },
      { year: '1843', title: 'Lovelace notes', note: 'Ada Lovelace described symbolic computation beyond mere arithmetic.' },
      { year: '1936', title: 'Turing machine', note: 'A formal model of computation made the question of machine intelligence more concrete.' }
    ]
  },
  {
    id: 'room-2',
    accent: 'teal',
    years: '1943–1956',
    eyebrow: 'Room 2',
    question: 'Can intelligence be formalized?',
    title: 'Neural abstraction, wartime computing, and philosophy converged into a research program.',
    summary: 'This is the bridge between speculation and science. Artificial neurons, the imitation game, and cybernetic thinking made it plausible that cognition could be modeled rather than merely described.',
    beginner: 'Researchers stopped asking whether intelligent machines were only fantasy and started asking what ingredients they would need.',
    technical: 'McCulloch-Pitts neurons, early information theory, and Turing’s computational framing together created a legitimate theoretical basis for machine intelligence research.',
    image: './assets/rooms/formalized-intelligence.svg',
    imageAlt: 'Original diagram showing a stylized neuron, logic gates, and a text panel representing formalized intelligence.',
    imageLabel: 'Original vector diagram',
    milestones: [
      { year: '1943', title: 'McCulloch & Pitts', note: 'Artificial neurons linked brain-like behavior to logic and computation.' },
      { year: '1950', title: 'Turing Test', note: 'Turing reframed machine intelligence as a behavioral and computational question.' },
      { year: '1956', title: 'Dartmouth workshop', note: 'Artificial intelligence became a named field with its own agenda.' }
    ]
  },
  {
    id: 'room-3',
    accent: 'violet',
    years: '1956–1969',
    eyebrow: 'Room 3',
    question: 'Would symbols and search be enough?',
    title: 'Early AI worked just well enough to make people think general intelligence was close.',
    summary: 'The first generation of AI shined in bounded worlds: theorem proving, games, simple language interaction, and early robotics. It was impressive, but often brittle outside carefully staged environments.',
    beginner: 'AI looked closer than it really was because early demos worked in toy worlds with simplified rules.',
    technical: 'Symbolic search, theorem proving, perceptrons, and systems like ELIZA and Shakey delivered narrow successes while exposing limits in generalization, perception, and combinatorial complexity.',
    image: './assets/rooms/symbolic-optimism.svg',
    imageAlt: 'Original visual showing symbolic trees, a chatbot dialog, and a robot path plan.',
    imageLabel: 'Original exhibit graphic',
    milestones: [
      { year: '1958', title: 'Perceptron', note: 'Rosenblatt showed that machines could learn simple boundaries from examples.' },
      { year: '1966', title: 'ELIZA', note: 'A text interface made AI feel personal before it was actually intelligent.' },
      { year: '1966–72', title: 'Shakey', note: 'Robotics fused planning, sensing, and action in one system.' }
    ]
  },
  {
    id: 'room-4',
    accent: 'rose',
    years: '1970–1993',
    eyebrow: 'Room 4',
    question: 'What happens when promises hit maintenance costs?',
    title: 'Rule-heavy systems found commercial value, then showed how brittle knowledge engineering could be.',
    summary: 'This era is not just a winter. It is a cycle: symbolic success, business adoption, then painful limits. Expert systems worked, but they were expensive to build, hard to maintain, and fragile in changing environments.',
    beginner: 'AI did become useful here, but mainly when it stayed narrow and highly supervised.',
    technical: 'Inference engines, rule bases, Prolog, and backpropagation’s revival revealed a tension between handcrafted knowledge systems and trainable representations.',
    image: './assets/rooms/expert-systems.svg',
    imageAlt: 'Original diagram of a terminal-like expert system and branching rules.',
    imageLabel: 'Original rule-engine visual',
    milestones: [
      { year: '1972', title: 'Prolog', note: 'Logic programming sharpened the symbolic AI toolbox.' },
      { year: '1980', title: 'Expert systems boom', note: 'Business AI returned through narrow, rule-driven software.' },
      { year: '1986', title: 'Backpropagation', note: 'Multi-layer neural nets became trainable in a more practical way.' }
    ]
  },
  {
    id: 'room-5',
    accent: 'ice',
    years: '1990–2011',
    eyebrow: 'Room 5',
    question: 'Can machines learn from data instead of hand-written rules?',
    title: 'The statistical turn moved AI toward probability, benchmarks, and large-scale pattern recognition.',
    summary: 'The field became less like hand-authored logic and more like estimation. Probabilistic methods, benchmark datasets, and larger compute made progress measurable in new ways.',
    beginner: 'This is when AI started becoming better at prediction because it was learning from examples rather than following giant rulebooks.',
    technical: 'Probabilistic modeling, SVMs, recommender systems, speech models, and benchmark culture shifted AI toward empirical performance and data-driven generalization.',
    image: './assets/rooms/statistical-turn.svg',
    imageAlt: 'Original data-heavy chart showing benchmark curves and a chessboard motif.',
    imageLabel: 'Original benchmark visual',
    milestones: [
      { year: '1997', title: 'Deep Blue', note: 'Elite game play demonstrated narrow superhuman performance.' },
      { year: '1998', title: 'MNIST era', note: 'Benchmark datasets standardized what “good” looked like.' },
      { year: '2009', title: 'ImageNet', note: 'Large curated datasets changed the pace of computer vision.' }
    ]
  },
  {
    id: 'room-6',
    accent: 'copper',
    years: '2012–present',
    eyebrow: 'Room 6',
    question: 'When did AI become a general interface instead of a narrow tool?',
    title: 'Deep learning, transformers, and scaled training turned AI into a platform people use directly.',
    summary: 'Modern AI feels different because one family of approaches now spans language, vision, code, and multimodal generation. The breakthrough was not one model, but a stack: data, compute, architecture, tooling, and interfaces.',
    beginner: 'This is the era where AI leaves the lab and becomes part of everyday work, creativity, and search.',
    technical: 'AlexNet, transformer attention, self-supervised pretraining, RLHF, and multimodal scaling shifted AI from task-specific pipelines to reusable foundation models.',
    image: './assets/rooms/foundation-models.svg',
    imageAlt: 'Original diagram of transformer blocks and modern AI interfaces.',
    imageLabel: 'Original foundation-model diagram',
    milestones: [
      { year: '2012', title: 'AlexNet', note: 'GPU-backed deep learning broke away from the old baseline.' },
      { year: '2017', title: 'Transformer', note: 'Attention rewired sequence modeling and scaling.' },
      { year: '2020–22', title: 'GPT-3 to ChatGPT', note: 'Foundation models turned conversational AI into a mainstream product surface.' }
    ]
  }
];

const linearTimeline = [
  { year: '1837', title: 'Babbage outlines the Analytical Engine' },
  { year: '1843', title: 'Ada Lovelace describes symbolic computation' },
  { year: '1936', title: 'Turing formalizes computability' },
  { year: '1943', title: 'McCulloch and Pitts publish artificial neuron model' },
  { year: '1950', title: 'Turing proposes the imitation game' },
  { year: '1956', title: 'Dartmouth names the field' },
  { year: '1958', title: 'Perceptron learning enters the story' },
  { year: '1966', title: 'ELIZA shows the cultural power of conversation' },
  { year: '1972', title: 'Prolog sharpens symbolic reasoning' },
  { year: '1980', title: 'Expert systems become commercially important' },
  { year: '1986', title: 'Backpropagation revives neural learning' },
  { year: '1997', title: 'Deep Blue beats Kasparov' },
  { year: '2009', title: 'ImageNet helps benchmark visual recognition' },
  { year: '2012', title: 'AlexNet resets expectations for perception' },
  { year: '2017', title: 'Transformers become the new backbone' },
  { year: '2021', title: 'AlphaFold 2 shows AI as scientific infrastructure' },
  { year: '2022', title: 'ChatGPT mainstreams conversational AI' }
];

const artifactData = [
  {
    title: 'Alan Turing',
    label: 'Wikimedia Commons archive',
    text: 'A formal archival portrait gives the early theoretical room more weight than a generic illustration ever could.',
    image: './assets/archive/alan-turing-1951.jpg'
  },
  {
    title: 'Frank Rosenblatt',
    label: 'Archival portrait',
    text: 'Rosenblatt bridges symbolic optimism and the neural-network lineage that later re-emerged at scale.',
    image: './assets/history/frank-rosenblatt.jpg'
  },
  {
    title: 'ELIZA terminal recreation',
    label: 'Historical software artifact',
    text: 'This is not just a portrait wall: the ELIZA screenshot shows how early conversational AI actually looked and felt.',
    image: './assets/history/eliza.png'
  },
  {
    title: 'Deep Blue',
    label: 'Wikimedia Commons archive',
    text: 'The hardware shot gives the wall a real machine in the room, not just names and ideas.',
    image: './assets/archive/deep-blue-commons.jpg'
  },
  {
    title: 'Statistical turn',
    label: 'Original illustration',
    text: 'A chart-led visual treatment for the benchmark era, where datasets and measurable error rates mattered more than theatrical demos.',
    image: './assets/rooms/statistical-turn.svg'
  },
  {
    title: 'Foundation models',
    label: 'Original illustration',
    text: 'A house-style transformer and interface visual replaces borrowed paper figures and keeps the page cohesive.',
    image: './assets/rooms/foundation-models.svg'
  }
];

const roomsGrid = document.getElementById('rooms-grid');
const timelineRail = document.getElementById('timeline-rail');
const artifactWall = document.getElementById('artifact-wall');
const modeButtons = document.querySelectorAll('.toggle-button');
const heroAudioToggle = document.getElementById('hero-audio-toggle');
const heroAudioNote = document.getElementById('hero-audio-note');
const HERO_VIDEO_ID = 'cHuqhQmc4ok';
const HERO_CLIP_START = 270;
const HERO_CLIP_END = 310;
const HERO_DEFAULT_VOLUME = 75;
let currentMode = 'beginner';
let heroPlayer;
let heroPlayerReady = false;
let heroAudioPlaying = true;
let heroLoopInterval;
let heroAutoplayFallbackTimer;

function renderRooms() {
  if (!roomsGrid) return;
  roomsGrid.innerHTML = roomsData.map((room, index) => `
    <article class="room-card room-${room.accent} tilt-card reveal ${index % 2 ? 'reverse' : ''}" id="${room.id}">
      <div class="room-media">
        <div class="room-media-label">${room.imageLabel}</div>
        <img src="${room.image}" alt="${room.imageAlt}" loading="lazy" />
      </div>
      <div class="room-copy">
        <div class="room-meta">
          <span class="room-eyebrow">${room.eyebrow}</span>
          <span class="room-years">${room.years}</span>
        </div>
        <p class="room-question">${room.question}</p>
        <h3>${room.title}</h3>
        <p class="room-summary">${room.summary}</p>
        <div class="room-mode-note">
          <strong>${currentMode === 'beginner' ? 'Newcomer reading' : 'Technical reading'}</strong>
          <p>${currentMode === 'beginner' ? room.beginner : room.technical}</p>
        </div>
        <div class="milestone-list">
          ${room.milestones.map(item => `
            <div class="milestone-item">
              <span class="milestone-year">${item.year}</span>
              <div>
                <strong>${item.title}</strong>
                <p>${item.note}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </article>
  `).join('');

  initializeTiltCards();
  initializeRevealAnimations();
}

function renderLinearTimeline() {
  if (!timelineRail) return;
  timelineRail.innerHTML = linearTimeline.map(item => `
    <article class="rail-item reveal">
      <span class="rail-year">${item.year}</span>
      <h3>${item.title}</h3>
    </article>
  `).join('');
}

function renderArtifacts() {
  if (!artifactWall) return;
  artifactWall.innerHTML = artifactData.map(item => `
    <article class="artifact-card tilt-card reveal">
      <img src="${item.image}" alt="${item.title}" loading="lazy" />
      <div class="artifact-copy">
        <span>${item.label}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    </article>
  `).join('');

  initializeTiltCards();
  initializeRevealAnimations();
}

function initializeRevealAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  reveals.forEach((element) => {
    if (!element.classList.contains('revealed')) {
      observer.observe(element);
    }
  });
}

function initializeTiltCards() {
  document.querySelectorAll('.tilt-card').forEach((card) => {
    card.addEventListener('mousemove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 8;
      const rotateX = ((y / rect.height) - 0.5) * -8;
      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

function updateHeroAudioUI() {
  if (!heroAudioToggle) return;
  heroAudioToggle.textContent = heroAudioPlaying ? '🔇 Mute clip' : '🔊 Unmute clip';
  heroAudioToggle.setAttribute('aria-pressed', String(heroAudioPlaying));
  heroAudioToggle.classList.toggle('is-playing', heroAudioPlaying);
  if (heroAudioNote) {
    heroAudioNote.textContent = heroAudioPlaying
      ? 'The hero clip starts with sound when the browser allows autoplay. Tap to mute it.'
      : 'The hero clip is muted. Tap to hear it.';
  }
}

function keepHeroClipLooping() {
  if (!heroPlayerReady || !heroPlayer) return;
  window.clearInterval(heroLoopInterval);
  heroLoopInterval = window.setInterval(() => {
    const currentTime = heroPlayer.getCurrentTime?.();
    if (typeof currentTime !== 'number') return;
    if (currentTime < HERO_CLIP_START - 0.5 || currentTime >= HERO_CLIP_END - 0.35) {
      heroPlayer.seekTo(HERO_CLIP_START, true);
      heroPlayer.playVideo();
      if (heroAudioPlaying) {
        heroPlayer.unMute?.();
        heroPlayer.setVolume?.(HERO_DEFAULT_VOLUME);
      }
    }
  }, 350);
}

function muteHeroAudio() {
  if (!heroPlayerReady || !heroPlayer) return;
  window.clearTimeout(heroAutoplayFallbackTimer);
  heroPlayer.mute();
  heroPlayer.playVideo();
  heroAudioPlaying = false;
  updateHeroAudioUI();
}

function unmuteHeroAudio() {
  if (!heroPlayerReady || !heroPlayer) return;
  window.clearTimeout(heroAutoplayFallbackTimer);
  heroPlayer.unMute();
  heroPlayer.setVolume?.(HERO_DEFAULT_VOLUME);
  heroPlayer.playVideo();
  heroAudioPlaying = true;
  updateHeroAudioUI();
}

function attemptHeroAutoplayWithSound() {
  if (!heroPlayerReady || !heroPlayer) return;
  window.clearTimeout(heroAutoplayFallbackTimer);
  heroPlayer.seekTo(HERO_CLIP_START, true);
  heroPlayer.unMute?.();
  heroPlayer.setVolume?.(HERO_DEFAULT_VOLUME);
  heroPlayer.playVideo();
  heroAudioPlaying = true;
  updateHeroAudioUI();

  heroAutoplayFallbackTimer = window.setTimeout(() => {
    const state = heroPlayer.getPlayerState?.();
    if (state !== window.YT?.PlayerState?.PLAYING) {
      muteHeroAudio();
      if (heroAudioNote) {
        heroAudioNote.textContent = 'Your browser blocked autoplay with sound, so the clip fell back to muted. Tap to unmute it.';
      }
    }
  }, 1400);
}

function fallbackHeroAudioControl() {
  const iframe = document.getElementById('hero-player');
  if (!iframe) return;
  const nextMuted = heroAudioPlaying ? '1' : '0';
  iframe.src = `https://www.youtube-nocookie.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=${nextMuted}&controls=0&loop=1&playlist=${HERO_VIDEO_ID}&start=${HERO_CLIP_START}&end=${HERO_CLIP_END}&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`;
  heroAudioPlaying = !heroAudioPlaying;
  updateHeroAudioUI();
}

function onHeroPlayerReady(event) {
  heroPlayerReady = true;
  event.target.seekTo(HERO_CLIP_START, true);
  keepHeroClipLooping();
  attemptHeroAutoplayWithSound();
}

function onYouTubeIframeAPIReady() {
  const iframe = document.getElementById('hero-player');
  if (!iframe || typeof YT === 'undefined' || !YT.Player) return;
  heroPlayer = new YT.Player('hero-player', {
    events: {
      onReady: onHeroPlayerReady,
      onStateChange: (event) => {
        if (event.data === YT.PlayerState.ENDED) {
          heroPlayer.seekTo(HERO_CLIP_START, true);
          heroPlayer.playVideo();
        }
      }
    }
  });
}

function loadYouTubeAPI() {
  if (document.querySelector('script[data-youtube-api="true"]')) return;
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  tag.dataset.youtubeApi = 'true';
  document.body.appendChild(tag);
}

window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

modeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const mode = button.dataset.mode;
    if (!mode || mode === currentMode) return;
    currentMode = mode;
    modeButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-selected', String(active));
    });
    renderRooms();
  });
});

if (heroAudioToggle) {
  heroAudioToggle.addEventListener('click', () => {
    if (!heroPlayerReady) {
      fallbackHeroAudioControl();
      return;
    }
    if (heroAudioPlaying) {
      muteHeroAudio();
    } else {
      unmuteHeroAudio();
    }
  });
}

renderRooms();
renderLinearTimeline();
renderArtifacts();
initializeRevealAnimations();
initializeTiltCards();
updateHeroAudioUI();
loadYouTubeAPI();

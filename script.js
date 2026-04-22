const timelineData = [
  {
    id: 'myth-mechanism',
    icon: '⚙️',
    era: 'Myth & Mechanism',
    years: 'Antiquity → 1930s',
    title: 'Humans imagined intelligent machines long before computers existed',
    summary: 'Ancient myths, automata, formal logic, and mechanical calculators created the cultural and mathematical preconditions for AI. The dream came first; the machinery came later.',
    beginner: 'People were already asking whether thought could be recreated with artifacts. That question is the emotional origin of AI.',
    technical: 'Formal logic, symbolic representation, and programmable mechanical systems laid the foundation for later computational models of reasoning.',
    tags: ['myth', 'logic', 'automata']
  },
  {
    id: 'birth-of-ai',
    icon: '🧠',
    era: 'Birth of the field',
    years: '1940s → 1956',
    title: 'Turing, cybernetics, and Dartmouth turned speculation into a research program',
    summary: 'The modern field took shape through wartime computing, Turing’s work on machine intelligence, and the Dartmouth workshop that gave artificial intelligence its name.',
    beginner: 'This is the moment AI stopped being science fiction and became an organized scientific project.',
    technical: 'The field unified ideas from symbolic logic, computation, information theory, and early neural models under a shared research agenda.',
    tags: ['Turing', 'Dartmouth', 'cybernetics']
  },
  {
    id: 'early-optimism',
    icon: '♟️',
    era: 'Early optimism',
    years: '1956 → 1974',
    title: 'Researchers solved narrow problems and thought general intelligence was close',
    summary: 'Early systems proved that computers could solve algebra, play games, and manipulate symbols. Researchers often believed human-level intelligence was just around the corner.',
    beginner: 'The first successes were real—but they happened in toy worlds with simplified rules.',
    technical: 'Search, theorem proving, symbolic planning, and early perceptrons worked in constrained environments but struggled with combinatorial explosion and messy real-world data.',
    tags: ['symbolic AI', 'perceptron', 'search']
  },
  {
    id: 'ai-winter',
    icon: '❄️',
    era: 'First AI winter',
    years: '1974 → 1980',
    title: 'Reality caught up with the hype',
    summary: 'Funding slowed after many systems failed to scale beyond demos. Expectations had outrun compute, data, and algorithmic robustness.',
    beginner: 'This was a warning sign: impressive demos are not the same as dependable intelligence.',
    technical: 'Brittle symbolic systems, limited hardware, and weak generalization caused enthusiasm to collapse once benchmarks became more realistic.',
    tags: ['AI winter', 'limits', 'funding crash']
  },
  {
    id: 'expert-systems',
    icon: '📚',
    era: 'Expert systems boom',
    years: '1980s',
    title: 'Commercial AI returned through rule-based expertise',
    summary: 'Expert systems captured human specialist knowledge in large rule sets and found real business use in diagnostics, configuration, and decision support.',
    beginner: 'AI came back by becoming useful in specific domains instead of trying to be universally intelligent.',
    technical: 'Knowledge engineering, inference engines, and domain-specific rule bases improved practical adoption, but maintenance costs and brittleness remained major issues.',
    tags: ['expert systems', 'commercial AI', 'rules']
  },
  {
    id: 'statistical-turn',
    icon: '📈',
    era: 'Statistical turn',
    years: '1990s → 2000s',
    title: 'AI became more data-driven and probabilistic',
    summary: 'Researchers increasingly favored methods that learned from data—probabilistic models, support vector machines, speech models, and recommender systems.',
    beginner: 'Instead of hard-coding every rule, engineers started asking machines to learn patterns from examples.',
    technical: 'Probabilistic inference, Bayesian methods, kernel methods, and large-scale optimization shifted AI away from handcrafted symbolic pipelines.',
    tags: ['statistics', 'probability', 'machine learning']
  },
  {
    id: 'deep-learning',
    icon: '🖥️',
    era: 'Deep learning breakthrough',
    years: '2010s',
    title: 'Neural networks surged once data and GPUs caught up',
    summary: 'Deep learning transformed image recognition, speech, translation, and representation learning—especially after 2012 showed how modern hardware could unlock older ideas.',
    beginner: 'This is when AI started getting dramatically better at perception tasks that used to be considered too hard.',
    technical: 'Backpropagation, large labeled datasets, GPU acceleration, and deeper architectures enabled scalable end-to-end learning with strong benchmark performance.',
    tags: ['AlexNet', 'GPUs', 'representation learning']
  },
  {
    id: 'foundation-models',
    icon: '🌐',
    era: 'Foundation models',
    years: '2017 → present',
    title: 'Transformers and scale turned AI into a general-purpose interface',
    summary: 'Modern AI systems can write, classify, summarize, generate images, answer questions, and act through tools because transformer-based models scale unusually well.',
    beginner: 'This is why AI suddenly feels everywhere: one model family became useful across many different tasks.',
    technical: 'Attention-based architectures, self-supervised learning, reinforcement learning from human feedback, and scaling laws pushed models toward broad transfer and tool use.',
    tags: ['transformers', 'LLMs', 'multimodal AI']
  }
];

const galleryData = [
  {
    initials: 'AT',
    meta: '1936',
    title: 'Alan Turing',
    text: 'Turing made the question of machine intelligence concrete by tying it to computation rather than magic.'
  },
  {
    initials: 'DM',
    meta: '1956',
    title: 'Dartmouth workshop',
    text: 'This is where AI became a field instead of a loose cluster of adjacent ideas.'
  },
  {
    initials: 'DB',
    meta: '1997',
    title: 'Deep Blue',
    text: 'A symbolic and search-heavy system that showed computers could dominate elite play in constrained domains.'
  },
  {
    initials: 'AN',
    meta: '2012',
    title: 'AlexNet',
    text: 'The image-net breakthrough that made deep learning impossible to ignore.'
  },
  {
    initials: 'TR',
    meta: '2017',
    title: 'Transformers',
    text: 'Attention changed the economics of sequence modeling and unlocked modern foundation models.'
  },
  {
    initials: 'LL',
    meta: '2020s',
    title: 'Large language models',
    text: 'The interface layer that made AI feel mainstream because it met people in natural language.'
  }
];

const timelineList = document.getElementById('timeline-list');
const eraNav = document.getElementById('era-nav');
const galleryGrid = document.getElementById('gallery-grid');
const modeButtons = document.querySelectorAll('.toggle-button');
const heroAudioToggle = document.getElementById('hero-audio-toggle');
const heroAudioNote = document.getElementById('hero-audio-note');
const HERO_VIDEO_ID = 'cHuqhQmc4ok';
const HERO_CLIP_START = 270;
const HERO_CLIP_END = 310;
let currentMode = 'beginner';
let heroPlayer;
let heroPlayerReady = false;
let heroAudioPlaying = false;
let heroLoopInterval;

function renderTimeline(mode = currentMode) {
  if (!timelineList) return;
  timelineList.innerHTML = timelineData.map(item => `
    <article class="timeline-card" id="${item.id}">
      <div class="timeline-era">
        <div class="era-marker" aria-hidden="true">${item.icon}</div>
        <span>${item.years}</span>
        <strong>${item.era}</strong>
      </div>
      <div class="timeline-body">
        <h3>${item.title}</h3>
        <p class="timeline-summary">${item.summary}</p>
        <div class="timeline-detail">
          <strong>${mode === 'beginner' ? 'Plain-English takeaway' : 'Technical note'}</strong>
          <p>${mode === 'beginner' ? item.beginner : item.technical}</p>
          <div class="timeline-tags">${item.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
        </div>
      </div>
    </article>
  `).join('');
}

function renderEraNav() {
  if (!eraNav) return;
  eraNav.innerHTML = timelineData.map((item, index) => `
    <button class="era-chip ${index === 0 ? 'active' : ''}" data-target="${item.id}">${item.era}</button>
  `).join('');

  eraNav.querySelectorAll('.era-chip').forEach(button => {
    button.addEventListener('click', () => {
      const target = document.getElementById(button.dataset.target || '');
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      eraNav.querySelectorAll('.era-chip').forEach(chip => chip.classList.remove('active'));
      button.classList.add('active');
    });
  });
}

function renderGallery() {
  if (!galleryGrid) return;
  galleryGrid.innerHTML = galleryData.map(item => `
    <article class="gallery-card">
      <div class="avatar" aria-hidden="true">${item.initials}</div>
      <span class="meta">${item.meta}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join('');
}

function updateHeroAudioUI() {
  if (!heroAudioToggle) return;
  heroAudioToggle.textContent = heroAudioPlaying ? '🔇 Mute clip' : '🔊 Unmute clip';
  heroAudioToggle.setAttribute('aria-pressed', String(heroAudioPlaying));
  heroAudioToggle.classList.toggle('is-playing', heroAudioPlaying);
  if (heroAudioNote) {
    heroAudioNote.textContent = heroAudioPlaying
      ? 'The hero video is playing with sound. Tap to mute it.'
      : 'The hero video auto-plays muted. Tap to hear the clip.';
  }
}

function keepHeroClipLooping() {
  if (!heroPlayerReady || !heroPlayer) return;

  window.clearInterval(heroLoopInterval);
  heroLoopInterval = window.setInterval(() => {
    const currentTime = heroPlayer.getCurrentTime?.();
    if (typeof currentTime === 'number' && currentTime >= HERO_CLIP_END - 0.35) {
      heroPlayer.seekTo(HERO_CLIP_START, true);
      heroPlayer.playVideo();
    }
  }, 500);
}

function unmuteHeroAudio() {
  if (!heroPlayerReady || !heroPlayer) {
    return;
  }

  heroPlayer.unMute();
  heroPlayer.setVolume?.(75);
  heroPlayer.playVideo();
  heroAudioPlaying = true;
  updateHeroAudioUI();
}

function muteHeroAudio() {
  if (!heroPlayerReady || !heroPlayer) {
    return;
  }

  heroPlayer.mute();
  heroPlayer.playVideo();
  heroAudioPlaying = false;
  updateHeroAudioUI();
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
  event.target.mute();
  event.target.seekTo(HERO_CLIP_START, true);
  event.target.playVideo();
  keepHeroClipLooping();
  updateHeroAudioUI();
}

function onHeroPlayerStateChange(event) {
  if (!window.YT || event.data !== window.YT.PlayerState.ENDED) return;
  heroPlayer.seekTo(HERO_CLIP_START, true);
  heroPlayer.playVideo();
}

function loadHeroPlayerAPI() {
  if (!document.getElementById('hero-player')) return;
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(tag);
}

window.onYouTubeIframeAPIReady = function onYouTubeIframeAPIReady() {
  heroPlayer = new window.YT.Player('hero-player', {
    events: {
      onReady: onHeroPlayerReady,
      onStateChange: onHeroPlayerStateChange,
    },
  });
};

function initRevealAnimations() {
  const revealNodes = document.querySelectorAll('.reveal');
  if (!revealNodes.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -8% 0px',
  });

  revealNodes.forEach((node) => observer.observe(node));
}

function initTiltCards() {
  const cards = document.querySelectorAll('.tilt-card');
  cards.forEach((card) => {
    card.addEventListener('mousemove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * 10;
      const rotateX = (0.5 - y) * 10;
      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

modeButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentMode = button.dataset.mode || 'beginner';
    modeButtons.forEach(btn => {
      const active = btn === button;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', String(active));
    });
    renderTimeline(currentMode);
  });
});

heroAudioToggle?.addEventListener('click', () => {
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

renderTimeline();
renderEraNav();
renderGallery();
updateHeroAudioUI();
loadHeroPlayerAPI();
initRevealAnimations();
initTiltCards();

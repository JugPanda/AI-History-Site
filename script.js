const timelineData = [
  {
    era: 'Myth & Mechanism',
    years: 'Antiquity → 1930s',
    title: 'Humans imagined intelligent machines long before computers existed',
    summary:
      'Ancient myths, automata, formal logic, and mechanical calculators created the cultural and mathematical preconditions for AI. The dream came first; the machinery came later.',
    beginner:
      'People were already asking whether thought could be recreated with artifacts. That question is the emotional origin of AI.',
    technical:
      'Formal logic, symbolic representation, and programmable mechanical systems laid the foundation for later computational models of reasoning.',
    tags: ['myth', 'logic', 'automata']
  },
  {
    era: 'Birth of the field',
    years: '1940s → 1956',
    title: 'Turing, cybernetics, and Dartmouth turned speculation into a research program',
    summary:
      'The modern field took shape through wartime computing, Turing’s work on machine intelligence, and the Dartmouth workshop that gave artificial intelligence its name.',
    beginner:
      'This is the moment AI stopped being science fiction and became an organized scientific project.',
    technical:
      'The field unified ideas from symbolic logic, computation, information theory, and early neural models under a shared research agenda.',
    tags: ['Turing', 'Dartmouth', 'cybernetics']
  },
  {
    era: 'Early optimism',
    years: '1956 → 1974',
    title: 'Researchers solved narrow problems and thought general intelligence was close',
    summary:
      'Early systems proved that computers could solve algebra, play games, and manipulate symbols. Researchers often believed human-level intelligence was just around the corner.',
    beginner:
      'The first successes were real—but they happened in toy worlds with simplified rules.',
    technical:
      'Search, theorem proving, symbolic planning, and early perceptrons worked in constrained environments but struggled with combinatorial explosion and messy real-world data.',
    tags: ['symbolic AI', 'perceptron', 'search']
  },
  {
    era: 'First AI winter',
    years: '1974 → 1980',
    title: 'Reality caught up with the hype',
    summary:
      'Funding slowed after many systems failed to scale beyond demos. Expectations had outrun compute, data, and algorithmic robustness.',
    beginner:
      'This was a warning sign: impressive demos are not the same as dependable intelligence.',
    technical:
      'Brittle symbolic systems, limited hardware, and weak generalization caused enthusiasm to collapse once benchmarks became more realistic.',
    tags: ['AI winter', 'limits', 'funding crash']
  },
  {
    era: 'Expert systems boom',
    years: '1980s',
    title: 'Commercial AI returned through rule-based expertise',
    summary:
      'Expert systems captured human specialist knowledge in large rule sets and found real business use in diagnostics, configuration, and decision support.',
    beginner:
      'AI came back by becoming useful in specific domains instead of trying to be universally intelligent.',
    technical:
      'Knowledge engineering, inference engines, and domain-specific rule bases improved practical adoption, but maintenance costs and brittleness remained major issues.',
    tags: ['expert systems', 'commercial AI', 'rules']
  },
  {
    era: 'Statistical turn',
    years: '1990s → 2000s',
    title: 'AI became more data-driven and probabilistic',
    summary:
      'Researchers increasingly favored methods that learned from data—probabilistic models, support vector machines, speech models, and recommender systems.',
    beginner:
      'Instead of hard-coding every rule, engineers started asking machines to learn patterns from examples.',
    technical:
      'Probabilistic inference, Bayesian methods, kernel methods, and large-scale optimization shifted AI away from handcrafted symbolic pipelines.',
    tags: ['statistics', 'probability', 'machine learning']
  },
  {
    era: 'Deep learning breakthrough',
    years: '2010s',
    title: 'Neural networks surged once data and GPUs caught up',
    summary:
      'Deep learning transformed image recognition, speech, translation, and representation learning—especially after 2012 showed how modern hardware could unlock older ideas.',
    beginner:
      'This is when AI started getting dramatically better at perception tasks that used to be considered too hard.',
    technical:
      'Backpropagation, large labeled datasets, GPU acceleration, and deeper architectures enabled scalable end-to-end learning with strong benchmark performance.',
    tags: ['AlexNet', 'GPUs', 'representation learning']
  },
  {
    era: 'Foundation models',
    years: '2017 → present',
    title: 'Transformers and scale turned AI into a general-purpose interface',
    summary:
      'Modern AI systems can write, classify, summarize, generate images, answer questions, and act through tools because transformer-based models scale unusually well.',
    beginner:
      'This is why AI suddenly feels everywhere: one model family became useful across many different tasks.',
    technical:
      'Attention-based architectures, self-supervised learning, reinforcement learning from human feedback, and scaling laws pushed models toward broad transfer and tool use.',
    tags: ['transformers', 'LLMs', 'multimodal AI']
  }
];

const timelineList = document.getElementById('timeline-list');
const modeButtons = document.querySelectorAll('.toggle-button');
let currentMode = 'beginner';

function renderTimeline(mode = currentMode) {
  if (!timelineList) return;
  timelineList.innerHTML = timelineData.map(item => `
    <article class="timeline-card">
      <div class="timeline-era">
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

renderTimeline();

// Comprehensive Strudel instrument and sample knowledge base
export const instruments = {
  drums: {
    bd: {
      name: 'Bass Drum / Kick',
      category: 'drums',
      tags: ['kick', 'bass', 'low', 'power', 'punchy', 'electronic', 'acoustic'],
      description: 'Bass drum / kick drum - the foundational low frequency percussion',
      vibe: ['powerful', 'deep', 'punchy', 'driving'],
      examples: [
        's("bd")',
        's("bd bd*2 bd bd*2")',
        's("bd").bank("RolandTR808")',
        's("bd").gain(1.2)'
      ]
    },
    sd: {
      name: 'Snare Drum',
      category: 'drums',
      tags: ['snare', 'crisp', 'sharp', 'punchy', 'backbeat'],
      description: 'Snare drum - sharp, crisp percussion for backbeats',
      vibe: ['crisp', 'sharp', 'punchy', 'aggressive'],
      examples: [
        's("~ sd ~ sd")',
        's("sd").room(0.5)',
        's("sd").distort(0.3)'
      ]
    },
    hh: {
      name: 'Closed Hi-Hat',
      category: 'drums',
      tags: ['hihat', 'closed', 'tight', 'crisp', 'electronic'],
      description: 'Closed hi-hat - tight, crisp high-frequency rhythm',
      vibe: ['tight', 'crisp', 'bright', 'rhythmic'],
      examples: [
        's("hh*8")',
        's("hh*16").gain(0.7)',
        's("hh*8").lpf(8000)'
      ]
    },
    oh: {
      name: 'Open Hi-Hat',
      category: 'drums',
      tags: ['hihat', 'open', 'sustained', 'bright'],
      description: 'Open hi-hat - sustained, bright high-frequency percussion',
      vibe: ['open', 'bright', 'sustained', 'airy'],
      examples: [
        's("~ ~ oh ~")',
        's("hh*6 oh*2").cut(1)'
      ]
    },
    cp: {
      name: 'Clap',
      category: 'drums',
      tags: ['clap', 'handclap', 'sharp', 'electronic'],
      description: 'Clap sound - sharp, percussive hand clap',
      vibe: ['sharp', 'percussive', 'electronic'],
      examples: [
        's("~ cp ~ cp")',
        's("cp").room(0.8)'
      ]
    },
    rim: {
      name: 'Rimshot',
      category: 'drums',
      tags: ['rimshot', 'sharp', 'metallic', 'accent'],
      description: 'Rimshot - sharp metallic drum rim hit',
      vibe: ['sharp', 'metallic', 'cutting'],
      examples: [
        's("rim*4")',
        's("rim").gain(0.8).hpf(2000)'
      ]
    },
    cr: {
      name: 'Crash Cymbal',
      category: 'drums',
      tags: ['crash', 'cymbal', 'bright', 'impact', 'powerful'],
      description: 'Crash cymbal - bright, impactful cymbal crash',
      vibe: ['bright', 'impactful', 'explosive', 'energetic'],
      examples: [
        's("cr")',
        's("cr").room(0.9).delay(0.5)'
      ]
    },
    rd: {
      name: 'Ride Cymbal',
      category: 'drums',
      tags: ['ride', 'cymbal', 'sustained', 'metallic'],
      description: 'Ride cymbal - sustained metallic cymbal rhythm',
      vibe: ['sustained', 'metallic', 'smooth'],
      examples: [
        's("rd*4")',
        's("rd*8").gain(0.6)'
      ]
    },
    ht: {
      name: 'High Tom',
      category: 'drums',
      tags: ['tom', 'high', 'melodic', 'drum'],
      description: 'High tom - higher pitched tom drum',
      vibe: ['melodic', 'tonal', 'percussive'],
      examples: [
        's("ht mt lt")',
        's("ht*3").room(0.3)'
      ]
    },
    mt: {
      name: 'Mid Tom',
      category: 'drums',
      tags: ['tom', 'mid', 'melodic', 'drum'],
      description: 'Mid tom - middle pitched tom drum',
      vibe: ['melodic', 'tonal', 'percussive'],
      examples: [
        's("mt*2")',
        's("ht mt lt mt")'
      ]
    },
    lt: {
      name: 'Low Tom',
      category: 'drums',
      tags: ['tom', 'low', 'deep', 'melodic'],
      description: 'Low tom - lower pitched tom drum',
      vibe: ['deep', 'melodic', 'tonal'],
      examples: [
        's("lt")',
        's("ht mt lt").room(0.4)'
      ]
    },
    sh: {
      name: 'Shaker',
      category: 'percussion',
      tags: ['shaker', 'percussion', 'rhythm', 'subtle'],
      description: 'Shaker - subtle rhythmic percussion',
      vibe: ['subtle', 'rhythmic', 'textured'],
      examples: [
        's("sh*16")',
        's("sh*8").gain(0.5).hpf(5000)'
      ]
    },
    cb: {
      name: 'Cowbell',
      category: 'percussion',
      tags: ['cowbell', 'metallic', 'bright', 'accent'],
      description: 'Cowbell - bright metallic percussion accent',
      vibe: ['bright', 'metallic', 'distinctive'],
      examples: [
        's("cb*2")',
        's("cb").gain(0.8)'
      ]
    },
    tb: {
      name: 'Tambourine',
      category: 'percussion',
      tags: ['tambourine', 'jingly', 'bright', 'percussion'],
      description: 'Tambourine - jingly bright percussion',
      vibe: ['jingly', 'bright', 'lively'],
      examples: [
        's("tb*4")',
        's("tb*8").gain(0.6)'
      ]
    }
  },

  banks: [
    {
      name: 'RolandTR808',
      description: 'Classic 808 drum machine sounds - electronic, punchy, iconic',
      vibe: ['electronic', 'classic', 'punchy', 'hip-hop'],
      tags: ['808', 'electronic', 'classic', 'analog']
    },
    {
      name: 'RolandTR909',
      description: 'Classic 909 drum machine - techno, house, electronic',
      vibe: ['electronic', 'techno', 'punchy', 'modern'],
      tags: ['909', 'electronic', 'techno', 'house']
    },
    {
      name: 'tidal-drum-machines',
      description: 'Default Strudel drum machine samples',
      vibe: ['varied', 'standard', 'versatile'],
      tags: ['default', 'varied']
    }
  ]
};

export const effects = {
  // FILTERS
  lpf: {
    name: 'Low Pass Filter',
    category: 'filter',
    tags: ['filter', 'lowpass', 'dark', 'mellow', 'warm'],
    description: 'Cuts high frequencies, letting low frequencies pass. Makes sound darker and warmer.',
    parameters: ['cutoff frequency (Hz)', 'lpq for resonance'],
    vibe: ['warm', 'dark', 'mellow', 'smooth'],
    examples: [
      's("bd sd").lpf(1000)',
      's("hh*8").lpf("<500 1000 2000>")',
      's("bd").lpf(800).lpq(10)'
    ],
    relatedQueries: ['darker', 'warmer', 'mellow', 'smooth', 'less bright']
  },

  hpf: {
    name: 'High Pass Filter',
    category: 'filter',
    tags: ['filter', 'highpass', 'bright', 'thin', 'airy'],
    description: 'Cuts low frequencies, letting high frequencies pass. Makes sound brighter and thinner.',
    parameters: ['cutoff frequency (Hz)', 'hpq for resonance'],
    vibe: ['bright', 'airy', 'thin', 'crisp'],
    examples: [
      's("bd").hpf(200)',
      's("hh*8").hpf(5000)',
      's("sd").hpf(300).hpq(5)'
    ],
    relatedQueries: ['brighter', 'thinner', 'crisp', 'airy', 'less bass']
  },

  bpf: {
    name: 'Band Pass Filter',
    category: 'filter',
    tags: ['filter', 'bandpass', 'focused', 'narrow'],
    description: 'Only allows a specific frequency band to pass through.',
    parameters: ['center frequency (Hz)', 'bpq for resonance'],
    vibe: ['focused', 'narrow', 'telephone-like'],
    examples: [
      's("bd sd").bpf(1000)',
      's("hh*8").bpf("<500 1000 2000>")'
    ],
    relatedQueries: ['focused', 'narrow', 'telephone', 'radio']
  },

  // DISTORTION
  distort: {
    name: 'Distortion',
    category: 'distortion',
    tags: ['distortion', 'grit', 'aggressive', 'harsh', 'powerful'],
    description: 'Wave shaping distortion that adds harmonics and grit.',
    parameters: ['amount (0-10+)'],
    vibe: ['aggressive', 'harsh', 'gritty', 'powerful'],
    examples: [
      's("bd").distort(0.5)',
      's("sd").distort(2)',
      's("bd sd").distort("<0.1 0.5 1>")'
    ],
    relatedQueries: ['distorted', 'gritty', 'aggressive', 'harsh', 'powerful', 'more power', 'dirty']
  },

  crush: {
    name: 'Bit Crusher',
    category: 'distortion',
    tags: ['bitcrush', 'lofi', 'digital', 'degraded'],
    description: 'Reduces bit depth for lo-fi digital distortion.',
    parameters: ['bit depth (1-16)'],
    vibe: ['lofi', 'digital', 'degraded', 'retro'],
    examples: [
      's("bd").crush(8)',
      's("hh*8").crush(4)',
      's("sd").crush("<16 8 4>")'
    ],
    relatedQueries: ['lofi', 'digital', 'degraded', 'retro', '8-bit']
  },

  coarse: {
    name: 'Sample Rate Reducer',
    category: 'distortion',
    tags: ['samplerate', 'lofi', 'aliasing'],
    description: 'Fake resampling for lowering sample rate and creating aliasing.',
    parameters: ['factor'],
    vibe: ['lofi', 'aliased', 'degraded'],
    examples: [
      's("bd").coarse(4)',
      's("hh*8").coarse(8)'
    ],
    relatedQueries: ['lofi', 'aliased', 'low quality', 'degraded']
  },

  // MODULATION
  phaser: {
    name: 'Phaser',
    category: 'modulation',
    tags: ['phaser', 'sweeping', 'swirling', 'psychedelic'],
    description: 'Sweeping phaser effect that creates swirling, psychedelic sounds.',
    parameters: ['depth', 'center frequency', 'sweep'],
    vibe: ['sweeping', 'swirling', 'psychedelic', 'moving'],
    examples: [
      's("bd sd").phaser()',
      's("hh*8").phaser(8)'
    ],
    relatedQueries: ['sweeping', 'swirling', 'psychedelic', 'moving', 'oscillate']
  },

  tremolo: {
    name: 'Tremolo',
    category: 'modulation',
    tags: ['tremolo', 'pulsing', 'wobbling', 'rhythmic'],
    description: 'Amplitude modulation creating pulsing, rhythmic volume changes.',
    parameters: ['depth', 'rate'],
    vibe: ['pulsing', 'wobbling', 'rhythmic'],
    examples: [
      's("bd").tremolosync(1).tremolodepth(0.5)',
      's("hh*4").tremolodepth(0.8)'
    ],
    relatedQueries: ['pulsing', 'wobbling', 'rhythmic', 'volume oscillation']
  },

  // SPATIAL & TIME
  room: {
    name: 'Reverb',
    category: 'spatial',
    tags: ['reverb', 'space', 'ambient', 'atmospheric'],
    description: 'Adds reverb to create sense of space and ambience.',
    parameters: ['amount (0-1)', 'roomsize (0-10)'],
    vibe: ['spacious', 'ambient', 'atmospheric', 'distant'],
    examples: [
      's("bd sd").room(0.5)',
      's("cp").room(0.9).roomsize(5)',
      's("sd").room("<0.2 0.5 0.8>")'
    ],
    relatedQueries: ['spacious', 'ambient', 'atmospheric', 'distant', 'echoey', 'reverb']
  },

  delay: {
    name: 'Delay',
    category: 'spatial',
    tags: ['delay', 'echo', 'repeating', 'rhythmic'],
    description: 'Creates echoes and repeating patterns.',
    parameters: ['amount', 'delaytime', 'delayfeedback'],
    vibe: ['echoing', 'repeating', 'rhythmic', 'spacious'],
    examples: [
      's("bd sd").delay(0.5)',
      's("cp").delay(0.8).delaytime(0.25)',
      's("sd").delay(0.5).delayfeedback(0.7)'
    ],
    relatedQueries: ['echo', 'repeating', 'rhythmic delay', 'dub']
  },

  pan: {
    name: 'Panning',
    category: 'spatial',
    tags: ['pan', 'stereo', 'width', 'spatial'],
    description: 'Positions sound in the stereo field (0=left, 0.5=center, 1=right).',
    parameters: ['position (0-1)'],
    vibe: ['wide', 'stereo', 'spatial'],
    examples: [
      's("bd sd").pan("<0 1>")',
      's("hh*8").pan(rand)',
      's("bd").pan(0).s("sd").pan(1)'
    ],
    relatedQueries: ['stereo', 'wide', 'spatial', 'left', 'right']
  },

  // DYNAMICS
  gain: {
    name: 'Gain',
    category: 'dynamics',
    tags: ['volume', 'level', 'amplitude', 'power'],
    description: 'Controls volume level (exponential scaling).',
    parameters: ['level'],
    vibe: ['louder', 'quieter', 'powerful', 'subtle'],
    examples: [
      's("bd").gain(1.2)',
      's("hh*8").gain(0.5)',
      's("bd").gain("<0.8 1 1.2>")'
    ],
    relatedQueries: ['louder', 'quieter', 'volume', 'more power', 'less power']
  },

  compressor: {
    name: 'Compressor',
    category: 'dynamics',
    tags: ['compression', 'punch', 'controlled', 'tight'],
    description: 'Dynamics compressor for controlling dynamic range.',
    parameters: ['threshold', 'ratio', 'attack', 'release'],
    vibe: ['punchy', 'controlled', 'tight', 'consistent'],
    examples: [
      's("bd sd").compressor()',
      's("bd").compressorthreshold(0.5)'
    ],
    relatedQueries: ['punchy', 'controlled', 'tight', 'consistent']
  }
};

export const rhythmPatterns = {
  sixteenths: {
    description: 'Fast 16th note patterns',
    examples: ['s("bd*16")', 's("hh*16")', 's("bd*16").fast(2)'],
    tags: ['fast', 'quick', '16ths', 'rapid']
  },
  eighths: {
    description: '8th note patterns',
    examples: ['s("bd*8")', 's("hh*8")'],
    tags: ['medium', '8ths', 'steady']
  },
  alternating: {
    description: 'Alternating patterns',
    examples: ['s("bd sd")', 's("<bd sd> <cp rim>")', 's("bd sd bd cp")'],
    tags: ['alternate', 'alternating', 'back and forth']
  },
  euclidean: {
    description: 'Euclidean rhythms - evenly distributed hits',
    examples: ['s("bd(3,8)")', 's("sd(5,16)")', 's("hh(7,16)")'],
    tags: ['euclidean', 'distributed', 'mathematical']
  }
};

export const musicTheory = [
  {
    title: 'Euclidean Rhythms',
    description: 'Use (hits, steps) notation to create mathematically distributed rhythms. E.g., bd(3,8) places 3 kicks evenly across 8 steps.',
    example: 's("bd(3,8) sd(5,16)")'
  },
  {
    title: 'Polyphony with Stack',
    description: 'Layer multiple patterns using stack() to create complex arrangements.',
    example: 'stack(s("bd*4"), s("~ sd ~ sd"), s("hh*8"))'
  },
  {
    title: 'Pattern Speed',
    description: 'Use .fast() and .slow() to change pattern speed. fast(2) doubles speed, slow(2) halves it.',
    example: 's("bd sd").fast(2)'
  },
  {
    title: 'Rests and Silence',
    description: 'Use ~ for rests/silence in patterns.',
    example: 's("bd ~ sd ~")'
  },
  {
    title: 'Filters for Tone Shaping',
    description: 'Use lpf() for warmth, hpf() for brightness. Lower lpf = darker, higher hpf = thinner.',
    example: 's("bd sd").lpf(1000)'
  },
  {
    title: 'Room and Delay for Space',
    description: 'room() adds reverb (space), delay() adds echoes. Combine for depth.',
    example: 's("cp").room(0.5).delay(0.3)'
  },
  {
    title: 'Sample Selection',
    description: 'Use .n() or : syntax to select different sample variations.',
    example: 's("hh:0 hh:1 hh:2")'
  }
];

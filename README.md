# Strudel AI - Live Coding Music with AI-Powered Assistance

A modern web application that combines [Strudel](https://strudel.cc/) live coding music framework with AI-powered natural language search and code completion.

## Features

### 🎵 Live Coding Editor
- Interactive code editor for writing Strudel patterns
- Real-time audio playback using WebAudio
- Play/stop controls with visual feedback
- Syntax-highlighted code display

### 🤖 AI-Powered Search
- **Natural Language Queries**: Search for instruments and effects using plain English
  - "electronic kickdrums"
  - "make this distorted"
  - "quicker notes = 16ths"
  - "oscillate sound"
  - "more power"
  - "punchy"

- **Vibe-Based Matching**: Find sounds by mood and character
  - Search by vibes like "punchy", "dark", "bright", "spacious"

- **Interactive Results**:
  - Click to insert code suggestions
  - Hover to preview (visual feedback - audio preview in development)
  - See multiple options with descriptions

### 📚 Embedded Documentation
- **Music Theory Tips**: Essential concepts for live coding
  - Euclidean rhythms
  - Polyphony with stack
  - Pattern speed manipulation
  - Filter tone shaping

- **Syntax Guide**: Quick reference for Strudel patterns
  - Basic patterns and multiplication
  - Sample selection and banks
  - Effect chaining
  - Alternation and rests

- **Code Examples**: Copy-paste ready patterns
  - Basic beats and drum patterns
  - Filtered bass and spatial effects
  - Euclidean rhythms
  - Modulation effects

### 🎹 Comprehensive Instrument Database
- Full catalog of Strudel drum sounds and samples
- Sample banks (808, 909, etc.)
- Audio effects with parameters
- Rhythm patterns and techniques

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Usage

1. **Write Strudel Code**: Use the center editor to write your patterns
   ```javascript
   s("bd sd bd sd")
     .bank("RolandTR808")
     .room(0.3)
   ```

2. **Search for Sounds**: Use the left panel to search naturally
   - Type queries like "electronic kickdrums" or "distorted"
   - Click results to insert code

3. **Learn from Docs**: Use the right panel to learn
   - Explore music theory concepts
   - Reference syntax patterns
   - Copy example code

4. **Play Your Music**: Click the Play button to hear your creation

## Technology Stack

- **React 18**: Modern UI framework
- **Vite**: Fast build tool and dev server
- **Strudel**: Live coding music engine
  - `@strudel/core`: Pattern evaluation
  - `@strudel/webaudio`: Audio synthesis
  - `@strudel/web`: Browser integration

## Project Structure

```
src/
├── components/          # React components
│   ├── StrudelEditor    # Main code editor
│   ├── AISearchPanel    # NLP search interface
│   └── DocsPanel        # Documentation viewer
├── data/               # Knowledge base
│   └── instruments.js  # Instruments, effects, theory
├── utils/              # Utility functions
│   └── nlpSearch.js    # Search algorithms
└── hooks/              # React hooks
    └── useStrudel.js   # Strudel integration
```

## Features in Detail

### Natural Language Search
The NLP search system matches queries against a comprehensive database of:
- Instrument names and descriptions
- Effect parameters and characteristics
- Musical vibes and moods
- Common queries and synonyms

**Example Queries:**
- "I need kickdrums that are electronic" → Suggests bd with RolandTR808 bank
- "Make this distorted" → Suggests .distort() effect with examples
- "Quicker notes = 16ths" → Suggests s("bd*16") patterns
- "More power" → Suggests .gain() and .distort() effects

### Instrument Knowledge Base
Includes comprehensive data for:
- **Drums**: bd, sd, hh, oh, cp, rim, cr, rd, toms
- **Percussion**: shakers, cowbell, tambourine
- **Effects**: filters (lpf, hpf, bpf), distortion, modulation, spatial
- **Banks**: RolandTR808, RolandTR909, and more

### Music Theory Integration
Built-in tips cover:
- Euclidean rhythms for mathematical beat distribution
- Polyphonic layering with stack()
- Pattern speed manipulation
- Filter-based tone shaping
- Spatial effects (reverb, delay)
- Sample selection techniques

## Development Roadmap

### Completed ✅
- React + Vite project setup
- Strudel integration with audio playback
- NLP search with natural language queries
- Vibe-based instrument matching
- Comprehensive instrument/effect database
- Interactive docs panel with theory tips
- Modern UI with dark theme

### Future Enhancements 🚀
- Real-time audio preview on hover
- Advanced code completion with AI suggestions
- Pattern suggestions based on context
- Keyboard shortcuts (Ctrl+Enter to play)
- Code syntax highlighting
- Pattern history and undo/redo
- Export patterns as audio files
- Share patterns via URL
- Preset library with community patterns

## License

AGPL-3.0 - This project uses Strudel which is licensed under AGPL-3.0. Any derivative work must be licensed under the same license.

## Resources

- [Strudel Official Site](https://strudel.cc/)
- [Strudel Documentation](https://strudel.cc/workshop/getting-started)
- [Strudel Repository](https://codeberg.org/uzu/strudel/)
- [Tidal Cycles](https://tidalcycles.org/)

---

Built with ❤️ for the live coding music community

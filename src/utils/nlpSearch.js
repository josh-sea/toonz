import { instruments, effects, rhythmPatterns } from '../data/instruments';

// Natural language query processor
export function searchInstrumentsAndEffects(query) {
  const lowerQuery = query.toLowerCase();
  const results = [];

  // Extract keywords from query
  const keywords = lowerQuery.split(/\s+/);

  // Search through instruments
  Object.entries(instruments.drums || {}).forEach(([key, instrument]) => {
    const matchScore = calculateMatchScore(lowerQuery, keywords, {
      name: instrument.name,
      tags: instrument.tags,
      vibe: instrument.vibe,
      description: instrument.description
    });

    if (matchScore > 0) {
      results.push({
        type: 'instrument',
        key,
        ...instrument,
        matchScore,
        suggestion: instrument.examples[0]
      });
    }
  });

  // Search through effects
  Object.entries(effects).forEach(([key, effect]) => {
    const matchScore = calculateMatchScore(lowerQuery, keywords, {
      name: effect.name,
      tags: effect.tags,
      vibe: effect.vibe,
      description: effect.description,
      relatedQueries: effect.relatedQueries
    });

    if (matchScore > 0) {
      results.push({
        type: 'effect',
        key,
        ...effect,
        matchScore,
        suggestion: effect.examples[0]
      });
    }
  });

  // Search through rhythm patterns
  Object.entries(rhythmPatterns).forEach(([key, pattern]) => {
    const matchScore = calculateMatchScore(lowerQuery, keywords, {
      description: pattern.description,
      tags: pattern.tags
    });

    if (matchScore > 0) {
      results.push({
        type: 'pattern',
        key,
        ...pattern,
        matchScore,
        suggestion: pattern.examples[0]
      });
    }
  });

  // Sort by match score
  results.sort((a, b) => b.matchScore - a.matchScore);

  return results.slice(0, 10); // Return top 10 matches
}

function calculateMatchScore(query, keywords, item) {
  let score = 0;

  // Exact phrase match
  const searchableText = [
    item.name,
    item.description,
    ...(item.tags || []),
    ...(item.vibe || []),
    ...(item.relatedQueries || [])
  ].join(' ').toLowerCase();

  if (searchableText.includes(query)) {
    score += 10;
  }

  // Keyword matching
  keywords.forEach(keyword => {
    if (!keyword) return;

    // Direct matches
    if (item.tags?.some(tag => tag.includes(keyword))) score += 3;
    if (item.vibe?.some(vibe => vibe.includes(keyword))) score += 3;
    if (item.relatedQueries?.some(q => q.includes(keyword))) score += 4;
    if (item.name?.toLowerCase().includes(keyword)) score += 5;
    if (item.description?.toLowerCase().includes(keyword)) score += 2;
  });

  // Semantic matching for common queries
  const semanticMatches = {
    'kick': ['bd', 'bass drum', 'low', 'power'],
    'bass': ['bd', 'low', 'deep', 'sub'],
    'electronic': ['808', '909', 'electronic'],
    'distorted': ['distort', 'grit', 'harsh'],
    'quick': ['16ths', 'fast', 'rapid'],
    'quicker': ['16ths', 'fast', 'rapid'],
    'alternate': ['alternating', 'back and forth'],
    'oscillate': ['phaser', 'tremolo', 'modulation'],
    'power': ['gain', 'distort', 'loud'],
    'punchy': ['compressor', 'tight', '808', 'kick'],
    'spacious': ['room', 'reverb', 'delay'],
    'darker': ['lpf', 'lowpass', 'warm'],
    'brighter': ['hpf', 'highpass', 'crisp']
  };

  keywords.forEach(keyword => {
    if (semanticMatches[keyword]) {
      semanticMatches[keyword].forEach(match => {
        if (searchableText.includes(match)) {
          score += 2;
        }
      });
    }
  });

  return score;
}

// Get suggestions for code completion
export function getCodeCompletionSuggestions(currentCode, cursorPosition) {
  const suggestions = [];

  // Detect context
  const beforeCursor = currentCode.substring(0, cursorPosition);
  const lastWord = beforeCursor.split(/[\s()"']/).pop();

  // Suggest instruments if in s() context
  if (beforeCursor.includes('s("') && !beforeCursor.endsWith('"')) {
    Object.entries(instruments.drums || {}).forEach(([key, instrument]) => {
      if (key.startsWith(lastWord)) {
        suggestions.push({
          text: key,
          type: 'instrument',
          description: instrument.name,
          insertText: key
        });
      }
    });
  }

  // Suggest effects if after a dot
  if (beforeCursor.match(/\)\.[\w]*$/)) {
    Object.entries(effects).forEach(([key, effect]) => {
      if (key.startsWith(lastWord)) {
        suggestions.push({
          text: key,
          type: 'effect',
          description: effect.name,
          insertText: `${key}()`
        });
      }
    });
  }

  // Suggest banks
  if (beforeCursor.includes('.bank("') && !beforeCursor.endsWith('"')) {
    instruments.banks.forEach(bank => {
      if (bank.name.toLowerCase().startsWith(lastWord.toLowerCase())) {
        suggestions.push({
          text: bank.name,
          type: 'bank',
          description: bank.description,
          insertText: bank.name
        });
      }
    });
  }

  return suggestions;
}

// Match instruments by vibe
export function searchByVibe(vibe) {
  const results = [];
  const lowerVibe = vibe.toLowerCase();

  Object.entries(instruments.drums || {}).forEach(([key, instrument]) => {
    if (instrument.vibe?.some(v => v.toLowerCase().includes(lowerVibe))) {
      results.push({
        type: 'instrument',
        key,
        ...instrument,
        suggestion: instrument.examples[0]
      });
    }
  });

  Object.entries(effects).forEach(([key, effect]) => {
    if (effect.vibe?.some(v => v.toLowerCase().includes(lowerVibe))) {
      results.push({
        type: 'effect',
        key,
        ...effect,
        suggestion: effect.examples[0]
      });
    }
  });

  return results;
}

import { useState } from 'react';
import { searchInstrumentsAndEffects, searchByVibe } from '../utils/nlpSearch';
import './AISearchPanel.css';

function AISearchPanel({ onSuggestionSelect, currentCode }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searchMode, setSearchMode] = useState('natural'); // 'natural' or 'vibe'
  const [hoveredResult, setHoveredResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    let searchResults;
    if (searchMode === 'vibe') {
      searchResults = searchByVibe(query);
    } else {
      searchResults = searchInstrumentsAndEffects(query);
    }

    setResults(searchResults);
  };

  const handleQuickQuery = (quickQuery) => {
    setQuery(quickQuery);
    const searchResults = searchInstrumentsAndEffects(quickQuery);
    setResults(searchResults);
  };

  const handleResultClick = (result) => {
    onSuggestionSelect(result);
  };

  const handleResultHover = (result) => {
    setHoveredResult(result);
    // In a full implementation, this would trigger audio preview
    console.log('Preview:', result.suggestion);
  };

  const quickQueries = [
    'electronic kickdrums',
    'distorted',
    '16ths',
    'alternate notes',
    'oscillate sound',
    'more power',
    'punchy',
    'spacious',
    'darker',
    'brighter'
  ];

  return (
    <div className="ai-search-panel">
      <div className="panel-header">
        <h2>AI Search</h2>
        <p className="panel-subtitle">Find instruments & effects naturally</p>
      </div>

      <div className="search-mode-toggle">
        <button
          className={searchMode === 'natural' ? 'active' : ''}
          onClick={() => setSearchMode('natural')}
        >
          Natural Language
        </button>
        <button
          className={searchMode === 'vibe' ? 'active' : ''}
          onClick={() => setSearchMode('vibe')}
        >
          Vibe Match
        </button>
      </div>

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={
            searchMode === 'vibe'
              ? 'Enter a vibe (e.g., punchy, dark, bright)...'
              : 'What do you want to do?'
          }
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="quick-queries">
        <div className="quick-queries-label">Quick searches:</div>
        <div className="quick-query-buttons">
          {quickQueries.map((q) => (
            <button
              key={q}
              className="quick-query-button"
              onClick={() => handleQuickQuery(q)}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      <div className="results-container">
        {results.length > 0 ? (
          <>
            <div className="results-header">
              {results.length} result{results.length !== 1 ? 's' : ''} found
            </div>
            <div className="results-list">
              {results.map((result, index) => (
                <div
                  key={`${result.type}-${result.key}-${index}`}
                  className="result-item"
                  onClick={() => handleResultClick(result)}
                  onMouseEnter={() => handleResultHover(result)}
                  onMouseLeave={() => setHoveredResult(null)}
                >
                  <div className="result-header">
                    <span className={`result-type ${result.type}`}>
                      {result.type}
                    </span>
                    <span className="result-name">{result.name || result.key}</span>
                  </div>
                  <p className="result-description">{result.description}</p>
                  {result.vibe && result.vibe.length > 0 && (
                    <div className="result-vibes">
                      {result.vibe.slice(0, 3).map((vibe) => (
                        <span key={vibe} className="vibe-tag">
                          {vibe}
                        </span>
                      ))}
                    </div>
                  )}
                  <code className="result-suggestion">{result.suggestion}</code>
                  {hoveredResult === result && (
                    <div className="hover-preview">
                      Click to insert • Hover previews
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        ) : query && results.length === 0 ? (
          <div className="no-results">
            No results found. Try a different search!
          </div>
        ) : (
          <div className="search-help">
            <h3>Try searching for:</h3>
            <ul>
              <li>Instruments: "electronic kickdrums", "snare"</li>
              <li>Effects: "distorted", "make this darker"</li>
              <li>Rhythms: "16ths", "alternate notes"</li>
              <li>Modulation: "oscillate sound", "phaser"</li>
              <li>Power: "more power", "punchy"</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default AISearchPanel;

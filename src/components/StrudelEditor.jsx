import { useEffect, useRef } from 'react';
import { useStrudel } from '../hooks/useStrudel';
import './StrudelEditor.css';

function StrudelEditor({ code, onCodeChange, selectedSuggestion }) {
  const textareaRef = useRef(null);
  const { isReady, isPlaying, error, toggle } = useStrudel();

  // Insert selected suggestion at cursor
  useEffect(() => {
    if (selectedSuggestion && textareaRef.current) {
      const textarea = textareaRef.current;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const newCode = code.substring(0, start) + '\n' + selectedSuggestion.suggestion + '\n' + code.substring(end);
      onCodeChange(newCode);

      // Move cursor after inserted text
      setTimeout(() => {
        const newPosition = start + selectedSuggestion.suggestion.length + 2;
        textarea.setSelectionRange(newPosition, newPosition);
        textarea.focus();
      }, 0);
    }
  }, [selectedSuggestion]);

  const handlePlay = () => {
    toggle(code);
  };

  const handleClear = () => {
    onCodeChange('');
  };

  return (
    <div className="strudel-editor">
      <div className="editor-toolbar">
        <button
          className={`play-button ${isPlaying ? 'playing' : ''}`}
          onClick={handlePlay}
          disabled={!isReady}
        >
          {isPlaying ? '⏸ Stop' : '▶ Play'}
        </button>
        <button className="clear-button" onClick={handleClear}>
          Clear
        </button>
        <div className="editor-info">
          {error && <span className="error-text">⚠️ {error}</span>}
          {!isReady && <span className="tip">🔄 Loading Strudel...</span>}
          {isReady && !error && <span className="tip">💡 Click Play to start</span>}
        </div>
      </div>

      <div className="editor-container">
        <textarea
          ref={textareaRef}
          className="code-editor"
          value={code}
          onChange={(e) => onCodeChange(e.target.value)}
          spellCheck={false}
          placeholder="Enter your Strudel code here..."
        />
      </div>

      <div className="editor-status">
        <span className="status-indicator">
          {isPlaying ? '🔊 Playing' : '⏸ Stopped'}
        </span>
        <span className="line-info">
          Lines: {code.split('\n').length}
        </span>
      </div>
    </div>
  );
}

export default StrudelEditor;

import { useState } from 'react';
import StrudelEditor from './components/StrudelEditor';
import AISearchPanel from './components/AISearchPanel';
import DocsPanel from './components/DocsPanel';
import './App.css';

function App() {
  const [code, setCode] = useState(`// Welcome to Strudel AI!
// Try some patterns:

s("bd sd bd sd")
  .bank("RolandTR808")
  .room(0.3)

// Use the AI search panel to find instruments and effects!
// Try searching: "electronic kickdrums" or "make this distorted"
`);

  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Strudel AI</h1>
        <p className="subtitle">Live Coding Music with AI-Powered Assistance</p>
      </header>

      <div className="main-content">
        <div className="left-panel">
          <AISearchPanel
            onSuggestionSelect={setSelectedSuggestion}
            currentCode={code}
          />
        </div>

        <div className="center-panel">
          <StrudelEditor
            code={code}
            onCodeChange={setCode}
            selectedSuggestion={selectedSuggestion}
          />
        </div>

        <div className="right-panel">
          <DocsPanel />
        </div>
      </div>
    </div>
  );
}

export default App;

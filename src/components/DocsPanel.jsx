import { useState } from 'react';
import { musicTheory } from '../data/instruments';
import './DocsPanel.css';

function DocsPanel() {
  const [activeTab, setActiveTab] = useState('theory'); // 'theory', 'syntax', 'examples'

  const syntaxGuide = [
    {
      title: 'Basic Patterns',
      content: 's("bd sd") - Play bass drum then snare drum',
      example: 's("bd sd bd sd")'
    },
    {
      title: 'Multiplication',
      content: '* repeats patterns. s("bd*4") plays bd 4 times',
      example: 's("bd*4 sd*2")'
    },
    {
      title: 'Rests',
      content: '~ creates silence/rest in pattern',
      example: 's("bd ~ sd ~")'
    },
    {
      title: 'Sample Selection',
      content: 'Use :number or .n() to select samples',
      example: 's("hh:0 hh:1 hh:2")'
    },
    {
      title: 'Sample Banks',
      content: '.bank() selects sample banks like 808 or 909',
      example: 's("bd sd").bank("RolandTR808")'
    },
    {
      title: 'Alternation',
      content: '<> alternates between values each cycle',
      example: 's("bd <sd cp>")'
    },
    {
      title: 'Stacking',
      content: 'stack() layers multiple patterns',
      example: 'stack(s("bd*4"), s("hh*8"))'
    },
    {
      title: 'Effects Chain',
      content: 'Chain effects with dots',
      example: 's("bd").lpf(1000).room(0.5)'
    }
  ];

  const examplesGuide = [
    {
      title: 'Basic Beat',
      code: 's("bd sd bd sd").bank("RolandTR808")',
      description: 'Classic four-on-floor beat with 808 sounds'
    },
    {
      title: 'Hi-hat Pattern',
      code: 's("hh*8").gain(0.7).hpf(5000)',
      description: 'Fast hi-hats with volume control and high-pass filter'
    },
    {
      title: 'Layered Drums',
      code: 'stack(\n  s("bd*4"),\n  s("~ sd ~ sd"),\n  s("hh*8")\n)',
      description: 'Kick, snare, and hi-hat layered together'
    },
    {
      title: 'Filtered Bass',
      code: 's("bd*4").lpf(800).distort(0.3)',
      description: 'Distorted bass drum with low-pass filter'
    },
    {
      title: 'Spacious Claps',
      code: 's("~ cp ~ cp").room(0.8).delay(0.3)',
      description: 'Claps with reverb and delay for space'
    },
    {
      title: 'Euclidean Rhythm',
      code: 's("bd(3,8) sd(5,16)").bank("RolandTR909")',
      description: 'Mathematical rhythm distribution'
    },
    {
      title: 'Alternating Banks',
      code: 's("bd sd").bank("<RolandTR808 RolandTR909>")',
      description: 'Switch between 808 and 909 each cycle'
    },
    {
      title: 'Phaser Effect',
      code: 's("hh*16").phaser().gain(0.6)',
      description: 'Sweeping phaser on fast hi-hats'
    }
  ];

  return (
    <div className="docs-panel">
      <div className="panel-header">
        <h2>Documentation</h2>
        <p className="panel-subtitle">Learn Strudel syntax & theory</p>
      </div>

      <div className="docs-tabs">
        <button
          className={activeTab === 'theory' ? 'active' : ''}
          onClick={() => setActiveTab('theory')}
        >
          Music Theory
        </button>
        <button
          className={activeTab === 'syntax' ? 'active' : ''}
          onClick={() => setActiveTab('syntax')}
        >
          Syntax Guide
        </button>
        <button
          className={activeTab === 'examples' ? 'active' : ''}
          onClick={() => setActiveTab('examples')}
        >
          Examples
        </button>
      </div>

      <div className="docs-content">
        {activeTab === 'theory' && (
          <div className="theory-section">
            <div className="section-intro">
              <p>Essential music theory tips for Strudel live coding</p>
            </div>
            {musicTheory.map((tip, index) => (
              <div key={index} className="theory-item">
                <h3>{tip.title}</h3>
                <p>{tip.description}</p>
                <code className="theory-example">{tip.example}</code>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'syntax' && (
          <div className="syntax-section">
            <div className="section-intro">
              <p>Quick reference for Strudel syntax patterns</p>
            </div>
            {syntaxGuide.map((item, index) => (
              <div key={index} className="syntax-item">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <code className="syntax-example">{item.example}</code>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'examples' && (
          <div className="examples-section">
            <div className="section-intro">
              <p>Copy these examples to get started quickly</p>
            </div>
            {examplesGuide.map((item, index) => (
              <div key={index} className="example-item">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <code className="example-code">{item.code}</code>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="docs-footer">
        <a
          href="https://strudel.cc/workshop/getting-started"
          target="_blank"
          rel="noopener noreferrer"
          className="external-link"
        >
          📚 Full Strudel Docs
        </a>
      </div>
    </div>
  );
}

export default DocsPanel;

import { useEffect, useRef, useState } from 'react';

let strudelInitialized = false;
let strudelContext = null;

export function useStrudel() {
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(null);
  const patternRef = useRef(null);

  useEffect(() => {
    // Initialize Strudel
    const initStrudel = async () => {
      try {
        if (!strudelInitialized) {
          // Dynamic import of Strudel modules
          const { evalScope } = await import('@strudel/core');
          const { getAudioContext, initAudioOnFirstClick, webaudioOutput } = await import('@strudel/webaudio');

          // Store context globally
          strudelContext = {
            evalScope,
            getAudioContext,
            initAudioOnFirstClick,
            webaudioOutput
          };

          // Initialize audio on first user interaction
          await initAudioOnFirstClick();

          strudelInitialized = true;
        }
        setIsReady(true);
      } catch (err) {
        console.error('Failed to initialize Strudel:', err);
        setError(err.message);
      }
    };

    initStrudel();
  }, []);

  const play = async (code) => {
    if (!isReady || !strudelContext) {
      console.warn('Strudel not ready yet');
      return;
    }

    try {
      // Stop any existing pattern
      if (patternRef.current) {
        patternRef.current.stop();
      }

      // Evaluate and play the code
      const { evaluate } = await import('@strudel/core');
      const pattern = evaluate(code);

      // Set up webaudio output
      const outputPattern = pattern.output(strudelContext.webaudioOutput);

      // Start playing
      await outputPattern.play();

      patternRef.current = outputPattern;
      setIsPlaying(true);
      setError(null);
    } catch (err) {
      console.error('Error playing pattern:', err);
      setError(err.message);
      setIsPlaying(false);
    }
  };

  const stop = () => {
    if (patternRef.current) {
      patternRef.current.stop();
      patternRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggle = (code) => {
    if (isPlaying) {
      stop();
    } else {
      play(code);
    }
  };

  return {
    isReady,
    isPlaying,
    error,
    play,
    stop,
    toggle
  };
}

'use client';

import React, { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
// Theme CSS is now imported globally in globals.css
// import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-bash';

interface CodeBlockProps {
  language?: string;
  children: string;
  filename?: string;
}

export function CodeBlock({ language = 'javascript', children, filename }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure we're on the client side before highlighting
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && codeRef.current) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        if (codeRef.current) {
          Prism.highlightElement(codeRef.current);
        }
      }, 0);
      
      return () => clearTimeout(timer);
    }
  }, [children, language, isClient]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="codeblock-container">
      {filename && (
        <div className="codeblock-header">
          <span className="codeblock-filename">{filename}</span>
          <button 
            onClick={handleCopy}
            className="codeblock-copy-btn"
            aria-label="Copy code"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
          </button>
        </div>
      )}
      <pre className="codeblock-content" suppressHydrationWarning>
        <code ref={codeRef} className={`language-${language}`} suppressHydrationWarning>
          {children}
        </code>
      </pre>
    </div>
  );
}

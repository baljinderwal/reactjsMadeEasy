import React from 'react';
import styled from 'styled-components';
import { concepts } from '../data/concepts';

const ConceptContainer = styled.div`
  .explanation {
    margin-bottom: 20px;
  }
  .demo {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  .code-block {
    background-color: ${({ theme }) => theme.codeBg};
    padding: 20px;
    border-radius: 5px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
`;

const ConceptPage = () => {
  const concept = concepts[0];

  return (
    <ConceptContainer>
      <h1>{concept.title}</h1>
      <p className="explanation">{concept.explanation}</p>
      <div className="demo">
        {concept.component}
      </div>
      <div style={{ position: 'relative' }}>
        <button
          style={{ position: 'absolute', top: '10px', right: '10px' }}
          onClick={() => navigator.clipboard.writeText(concept.code)}
        >
          Copy
        </button>
        <pre className="code-block">
          <code>{concept.code}</code>
        </pre>
      </div>
    </ConceptContainer>
  );
};

export default ConceptPage;

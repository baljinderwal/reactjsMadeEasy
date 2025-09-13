import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { concepts } from '../data/concepts';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import * as conceptsComponents from '../concepts';
import * as ReactRouter from 'react-router-dom';

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
    background-color: ${({ theme }) => theme.sidebar.background};
    color: ${({ theme }) => theme.sidebar.text};
    padding: 20px;
    border-radius: 5px;
    white-space: pre-wrap;
    word-wrap: break-word;
    transition: all 0.50s linear;
  }
`;

const ConceptPage = () => {
  const { conceptId } = useParams();
  const conceptIndex = concepts.findIndex((c) => c.id === conceptId);
  const concept = concepts[conceptIndex];

  if (!concept) {
    return <div>Concept not found</div>;
  }

  const prevConcept = conceptIndex > 0 ? concepts[conceptIndex - 1] : null;
  const nextConcept = conceptIndex < concepts.length - 1 ? concepts[conceptIndex + 1] : null;

  const scope = {
    React,
    ...React,
    ...conceptsComponents,
    ...ReactRouter,
    styled,
  };

  return (
    <ConceptContainer>
      <h1>{concept.title}</h1>
      <p className="explanation">{concept.explanation}</p>
      <LiveProvider code={concept.code} scope={scope}>
        <div className="demo">
          <LivePreview />
        </div>
        <div style={{ position: 'relative' }}>
          <LiveEditor className="code-block" />
        </div>
        <LiveError />
      </LiveProvider>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
        {prevConcept && <Link to={`/concept/${prevConcept.id}`}>Previous: {prevConcept.title}</Link>}
        {nextConcept && <Link to={`/concept/${nextConcept.id}`}>Next: {nextConcept.title}</Link>}
      </div>
    </ConceptContainer>
  );
};

export default ConceptPage;

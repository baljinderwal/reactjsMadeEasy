import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { concepts } from '../data/concepts';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { JsonView, allExpanded, darkStyles, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
import * as conceptsComponents from '../concepts';
import * as ReactRouter from 'react-router-dom';
import { useTheme } from '../styles/ThemeProvider';

const ConceptContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px); /* Adjust based on header height */
`;

const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  padding: 20px;
  border-bottom: 1px solid #ccc;
`;

const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;

const EditorWrapper = styled.div`
  flex: 1;
  position: relative;
  overflow: auto;
  .code-block {
    background-color: ${({ theme }) => theme.sidebar.background};
    color: ${({ theme }) => theme.sidebar.text};
    padding: 20px;
    border-radius: 5px;
    white-space: pre-wrap;
    word-wrap: break-word;
    transition: all 0.50s linear;
    height: 100%;
  }
`;

const PreviewWrapper = styled.div`
  flex: 1;
  padding: 20px;
  border-left: 1px solid #ccc;
  overflow: auto;
`;

const InspectorContainer = styled.div`
  background-color: ${({ theme }) => theme.sidebar.background};
  color: ${({ theme }) => theme.sidebar.text};
  padding: 20px;
  border-top: 1px solid #ccc;
  flex-shrink: 0;
  height: 250px; /* Give the inspector a fixed height */
  overflow-y: auto; /* Allow scrolling if content overflows */
  transition: all 0.50s linear;

  h3 {
    margin-top: 0;
    margin-bottom: 15px;
  }
`;

const Navigation = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ccc;
`;

const ConceptPage = () => {
  const { conceptId } = useParams();
  const { theme } = useTheme();
  const [inspectorData, setInspectorData] = useState({});
  const conceptIndex = concepts.findIndex((c) => c.id === conceptId);
  const concept = concepts[conceptIndex];

  useEffect(() => {
    setInspectorData({});
  }, [conceptId]);

  if (!concept) {
    return <div>Concept not found</div>;
  }

  const prevConcept = conceptIndex > 0 ? concepts[conceptIndex - 1] : null;
  const nextConcept = conceptIndex < concepts.length - 1 ? concepts[conceptIndex + 1] : null;

  const updateInspector = (key, value) => {
    setInspectorData(prevData => ({
      ...prevData,
      [key]: value
    }));
  };

  const scope = {
    React,
    ...React,
    ...conceptsComponents,
    ...ReactRouter,
    styled,
    updateInspector,
  };

  return (
    <ConceptContainer>
      <MainContent>
        <Header>
          <h1>{concept.title}</h1>
          <p>{concept.explanation}</p>
        </Header>
        <LiveProvider code={concept.code} scope={scope} noInline={false}>
          <LiveWrapper>
            <EditorWrapper>
              <LiveEditor className="code-block" />
              <LiveError />
            </EditorWrapper>
            <PreviewWrapper>
              <LivePreview />
            </PreviewWrapper>
          </LiveWrapper>
        </LiveProvider>
      </MainContent>
      <InspectorContainer>
        <h3>State & Props Inspector</h3>
        <JsonView data={inspectorData} shouldExpandNode={allExpanded} style={theme === 'light' ? defaultStyles : darkStyles} />
      </InspectorContainer>
      <Navigation>
        {prevConcept && <Link to={`/concept/${prevConcept.id}`}>Previous: {prevConcept.title}</Link>}
        {nextConcept && <Link to={`/concept/${nextConcept.id}`}>Next: {nextConcept.title}</Link>}
      </Navigation>
    </ConceptContainer>
  );
};

export default ConceptPage;

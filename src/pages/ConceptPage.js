const ConceptPage = () => {
  const { useParams } = ReactRouterDOM;
  const { conceptId } = useParams();

  const concept = conceptMap[conceptId];

  if (!concept) {
    return (
      <div className="p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Concept Not Found</h2>
        <p>The concept you are looking for does not exist.</p>
      </div>
    );
  }

  const ConceptComponent = concept.component;

  return (
    <ConceptComponent />
  );
};

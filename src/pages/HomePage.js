const HomePage = () => {
  const { Link } = ReactRouterDOM;

  return (
    <div className="p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-gray-800 dark:text-gray-200">
      <h2 className="text-2xl font-bold mb-4">Welcome to the React Learning Project!</h2>
      <p className="mb-6">
        This project is an interactive collection of React concepts. Each concept includes a simple explanation,
        an interactive demo, and a code snippet. Choose a concept from the list below to get started.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {concepts.map(concept => (
          <Link
            key={concept.path}
            to={`/concepts/${concept.path}`}
            className="block p-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <h3 className="font-bold text-lg">{concept.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

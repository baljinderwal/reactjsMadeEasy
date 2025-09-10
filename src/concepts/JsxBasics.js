const JsxBasics = () => {
  const name = "Learner";
  const a = 10;
  const b = 20;

  const getGreeting = () => {
    return "Welcome to the interactive demo!";
  };

  const demoCode = `const JsxBasicsDemo = () => {
  const name = "Learner";
  const a = 10;
  const b = 20;

  const getGreeting = () => {
    return "Welcome to the interactive demo!";
  };

  return (
    <div>
      <p>Hello, <strong>{name}</strong>!</p>
      <p>{getGreeting()}</p>
      <p>
        10 + 20 = <strong>{a + b}</strong>.
      </p>
    </div>
  );
};`;

  return (
    <div className="p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Understanding JSX</h2>

      <div className="prose dark:prose-invert max-w-none">
        <p>
          JSX stands for JavaScript XML. It's a syntax extension for JavaScript that looks very similar to HTML.
          React uses JSX to describe what the UI should look like. While you don't have to use JSX with React,
          it's the recommended way to build user interfaces.
        </p>
        <p>
          The real power of JSX comes from the ability to embed JavaScript expressions directly into your markup.
          You can do this by wrapping the expression in curly braces <code>{'{...}'}</code>.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Interactive Demo</h3>
        <div className="border p-4 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
          <p>Hello, <strong>{name}</strong>!</p>
          <p>{getGreeting()}</p>
          <p>
            You can even do math right inside the curly braces. For example, 10 + 20 = <strong>{a + b}</strong>.
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-2">Code Snippet</h3>
        <p>Here is the code that powers the demo above:</p>
        <CodeSnippet code={demoCode} />
      </div>
    </div>
  );
};

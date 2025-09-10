const CodeSnippet = ({ code }) => {
  const [buttonText, setButtonText] = React.useState("Copy");

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setButtonText("Copied!");
      setTimeout(() => {
        setButtonText("Copy");
      }, 2000); // Reset after 2 seconds
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <div className="relative">
      <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-700 text-white text-sm font-semibold py-1 px-2 rounded"
      >
        {buttonText}
      </button>
    </div>
  );
};

const Sidebar = ({ isOpen, onToggleTheme, theme }) => {
  const { NavLink } = ReactRouterDOM;

  return (
    <div
      className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white p-4
        transform transition-transform duration-300 ease-in-out
        flex flex-col
        md:relative md:translate-x-0 md:flex-shrink-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-8">React Concepts</h1>
        <nav>
          <ul>
            {/* Add a link for the Home page */}
            <li>
              <NavLink
                to="/"
                exact
                className="block py-2 px-4 rounded hover:bg-gray-300 dark:hover:bg-gray-700"
                activeClassName="bg-blue-500 text-white"
              >
                Home
              </NavLink>
            </li>
            <hr className="my-4 border-gray-300 dark:border-gray-600" />
            {concepts.map(concept => (
              <li key={concept.path}>
                <NavLink
                  to={`/concepts/${concept.path}`}
                  className="block py-2 px-4 rounded hover:bg-gray-300 dark:hover:bg-gray-700"
                  activeClassName="bg-blue-500 text-white"
                >
                  {concept.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mt-auto flex justify-center">
        <DarkModeToggle onToggle={onToggleTheme} theme={theme} />
      </div>
    </div>
  );
};

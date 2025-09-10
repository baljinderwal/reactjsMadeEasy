const Header = ({ onMenuClick, onToggleTheme, theme }) => {
  return (
    <header className="bg-gray-800 text-white p-4 md:hidden">
      {/* This header is hidden on medium screens and up */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={onMenuClick} className="p-2 mr-2">
            {/* Hamburger Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <h1 className="text-xl font-bold">React Concepts</h1>
        </div>
        <DarkModeToggle onToggle={onToggleTheme} theme={theme} />
      </div>
    </header>
  );
};

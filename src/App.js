const App = () => {
  const { HashRouter, Route, Switch } = ReactRouterDOM;
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <HashRouter>
      <div className="relative min-h-screen md:flex bg-gray-100 dark:bg-gray-900">
        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}

        <Sidebar isOpen={isSidebarOpen} onToggleTheme={toggleTheme} theme={theme} />

        <div className="flex-1">
          <Header onMenuClick={toggleSidebar} onToggleTheme={toggleTheme} theme={theme} />
          <main className="p-4 md:p-8">
            <Switch>
              <Route path="/concepts/:conceptId">
                <ConceptPage />
              </Route>
              <Route path="/" exact>
                <HomePage />
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </HashRouter>
  );
};

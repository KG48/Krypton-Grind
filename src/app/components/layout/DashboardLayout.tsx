import { useState } from 'react';
import { Outlet } from 'react-router';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';

export function DashboardLayout() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-[#0f172a] transition-colors duration-300`}>
      <Sidebar />
      <div className="ml-64">
        <Navbar darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
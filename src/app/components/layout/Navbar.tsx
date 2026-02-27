import { Search, Bell, Moon, Sun } from 'lucide-react';
import { useLocation } from 'react-router';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

const pageTitles: Record<string, string> = {
  '/': 'Dashboard',
  '/study-tracker': 'Study Tracker',
  '/coding-tracker': 'Coding Tracker',
  '/goals': 'Goals',
  '/daily-planner': 'Daily Planner',
  '/analytics': 'Analytics',
  '/profile': 'Profile',
};

export function Navbar({ darkMode, onToggleDarkMode }: NavbarProps) {
  const location = useLocation();
  const pageTitle = pageTitles[location.pathname] || 'Dashboard';

  return (
    <header className="h-20 bg-white dark:bg-[#1e293b] border-b border-slate-200 dark:border-slate-700 transition-colors duration-300">
      <div className="h-full flex items-center justify-between px-8">
        {/* Page Title */}
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{pageTitle}</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Welcome back! Here's what's happening today.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-64 h-10 pl-10 pr-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all"
            />
          </div>

          {/* Notifications */}
          <button className="relative w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-colors">
            <Bell className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-medium">
              3
            </span>
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-colors"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-amber-500" />
            ) : (
              <Moon className="w-5 h-5 text-slate-600" />
            )}
          </button>

          {/* Profile Avatar */}
          <button className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold">
              JD
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">John Doe</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">john@example.com</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
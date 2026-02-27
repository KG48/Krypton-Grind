import { NavLink } from 'react-router';
import { 
  LayoutDashboard, 
  BookOpen, 
  Code2, 
  Target, 
  CalendarCheck, 
  BarChart3, 
  User 
} from 'lucide-react';

const menuItems = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/study-tracker', label: 'Study Tracker', icon: BookOpen },
  { path: '/coding-tracker', label: 'Coding Tracker', icon: Code2 },
  { path: '/goals', label: 'Goals', icon: Target },
  { path: '/daily-planner', label: 'Daily Planner', icon: CalendarCheck },
  { path: '/analytics', label: 'Analytics', icon: BarChart3 },
  { path: '/profile', label: 'Profile', icon: User },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white dark:bg-[#1e293b] border-r border-slate-200 dark:border-slate-700 transition-colors duration-300">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="h-20 flex items-center px-6 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-slate-900 dark:text-slate-100">StudyTracker</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">Progress Hub</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-indigo-600 dark:text-indigo-400' : ''}`} />
                  <span className="font-medium">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-700">
          <div className="px-4 py-3 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-100 dark:border-indigo-800">
            <p className="text-xs font-medium text-indigo-900 dark:text-indigo-300 mb-1">
              Pro Tip
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Stay consistent with daily goals!
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

import { TrendingUp, BarChart3, Calendar, Award } from 'lucide-react';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend 
} from 'recharts';

const weeklyData = [
  { day: 'Mon', study: 4.5, coding: 2.5 },
  { day: 'Tue', study: 6.2, coding: 3.1 },
  { day: 'Wed', study: 5.8, coding: 2.8 },
  { day: 'Thu', study: 7.1, coding: 3.5 },
  { day: 'Fri', study: 5.5, coding: 2.9 },
  { day: 'Sat', study: 8.3, coding: 4.2 },
  { day: 'Sun', study: 6.7, coding: 3.8 },
];

const monthlyData = [
  { month: 'Jan', hours: 120 },
  { month: 'Feb', hours: 145 },
  { month: 'Mar', hours: 128 },
  { month: 'Apr', hours: 165 },
  { month: 'May', hours: 142 },
  { month: 'Jun', hours: 158 },
];

// Heatmap data (coding activity)
const heatmapData = [
  { day: 'Sun', week1: 0, week2: 2, week3: 3, week4: 1, week5: 4, week6: 3 },
  { day: 'Mon', week1: 3, week2: 4, week3: 5, week4: 3, week5: 4, week6: 5 },
  { day: 'Tue', week1: 4, week2: 3, week3: 4, week4: 5, week5: 3, week6: 4 },
  { day: 'Wed', week1: 5, week2: 4, week3: 3, week4: 4, week5: 5, week6: 3 },
  { day: 'Thu', week1: 3, week2: 5, week3: 4, week4: 3, week5: 4, week6: 5 },
  { day: 'Fri', week1: 2, week2: 3, week3: 4, week4: 2, week5: 3, week6: 4 },
  { day: 'Sat', week1: 1, week2: 2, week3: 1, week4: 3, week5: 2, week6: 1 },
];

const getHeatmapColor = (value: number) => {
  if (value === 0) return 'bg-slate-100 dark:bg-slate-800';
  if (value === 1) return 'bg-emerald-100 dark:bg-emerald-900/30';
  if (value === 2) return 'bg-emerald-200 dark:bg-emerald-800/50';
  if (value === 3) return 'bg-emerald-300 dark:bg-emerald-700/70';
  if (value === 4) return 'bg-emerald-400 dark:bg-emerald-600/80';
  return 'bg-emerald-500 dark:bg-emerald-500';
};

export function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Analytics Overview</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Visualize your learning progress and patterns
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-8 h-8" />
            <span className="text-sm bg-white/20 px-2 py-1 rounded-lg">+12%</span>
          </div>
          <p className="text-sm text-indigo-100 mb-1">Weekly Avg</p>
          <p className="text-3xl font-semibold">6.3h</p>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <BarChart3 className="w-8 h-8" />
            <span className="text-sm bg-white/20 px-2 py-1 rounded-lg">+8%</span>
          </div>
          <p className="text-sm text-emerald-100 mb-1">Total Hours</p>
          <p className="text-3xl font-semibold">124h</p>
        </div>

        <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <Calendar className="w-8 h-8" />
            <span className="text-sm bg-white/20 px-2 py-1 rounded-lg">Current</span>
          </div>
          <p className="text-sm text-amber-100 mb-1">Active Streak</p>
          <p className="text-3xl font-semibold">18 days</p>
        </div>

        <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <Award className="w-8 h-8" />
            <span className="text-sm bg-white/20 px-2 py-1 rounded-lg">Top 10%</span>
          </div>
          <p className="text-sm text-pink-100 mb-1">Productivity</p>
          <p className="text-3xl font-semibold">92%</p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Activity Chart */}
        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Weekly Activity</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Study vs Coding hours</p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="day" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: 'none', 
                  borderRadius: '12px',
                  color: '#f1f5f9'
                }} 
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="study" 
                stroke="#4F46E5" 
                strokeWidth={3}
                dot={{ fill: '#4F46E5', r: 4 }}
                name="Study Hours"
              />
              <Line 
                type="monotone" 
                dataKey="coding" 
                stroke="#10B981" 
                strokeWidth={3}
                dot={{ fill: '#10B981', r: 4 }}
                name="Coding Hours"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Progress Chart */}
        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Monthly Progress</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Total hours per month</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: 'none', 
                  borderRadius: '12px',
                  color: '#f1f5f9'
                }} 
              />
              <Bar dataKey="hours" fill="#4F46E5" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Activity Heatmap */}
      <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Coding Activity Heatmap</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Last 6 weeks of coding practice</p>
        
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <div className="flex gap-1">
              <div className="w-12 flex flex-col justify-around py-1">
                {heatmapData.map((item) => (
                  <div key={item.day} className="h-8 flex items-center text-xs text-slate-500 dark:text-slate-400">
                    {item.day}
                  </div>
                ))}
              </div>
              
              {['week1', 'week2', 'week3', 'week4', 'week5', 'week6'].map((week) => (
                <div key={week} className="flex flex-col gap-1">
                  {heatmapData.map((item) => (
                    <div
                      key={`${week}-${item.day}`}
                      className={`w-8 h-8 rounded ${getHeatmapColor(item[week as keyof typeof item] as number)} transition-colors hover:ring-2 hover:ring-indigo-500`}
                      title={`${item.day}: ${item[week as keyof typeof item]} problems`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-6 text-sm text-slate-500 dark:text-slate-400">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-4 h-4 rounded bg-slate-100 dark:bg-slate-800" />
            <div className="w-4 h-4 rounded bg-emerald-100 dark:bg-emerald-900/30" />
            <div className="w-4 h-4 rounded bg-emerald-200 dark:bg-emerald-800/50" />
            <div className="w-4 h-4 rounded bg-emerald-300 dark:bg-emerald-700/70" />
            <div className="w-4 h-4 rounded bg-emerald-400 dark:bg-emerald-600/80" />
            <div className="w-4 h-4 rounded bg-emerald-500 dark:bg-emerald-500" />
          </div>
          <span>More</span>
        </div>
      </div>

      {/* Productivity Summary */}
      <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Productivity Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Most Productive Day</p>
            <p className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Saturday</p>
            <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-1">8.3 hours avg</p>
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Peak Study Time</p>
            <p className="text-2xl font-semibold text-slate-900 dark:text-slate-100">2-6 PM</p>
            <p className="text-sm text-indigo-600 dark:text-indigo-400 mt-1">Highest focus</p>
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Weekly Goal</p>
            <p className="text-2xl font-semibold text-slate-900 dark:text-slate-100">44/40 hrs</p>
            <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-1">110% achieved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

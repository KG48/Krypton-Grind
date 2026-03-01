import { Clock, CheckCircle2, Target, Flame, TrendingUp, BookOpen } from 'lucide-react';
import { StatCard } from '../components/shared/StatCard';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const weeklyData = [
  { day: 'Mon', hours: 4.5 },
  { day: 'Tue', hours: 6.2 },
  { day: 'Wed', hours: 5.8 },
  { day: 'Thu', hours: 7.1 },
  { day: 'Fri', hours: 5.5 },
  { day: 'Sat', hours: 8.3 },
  { day: 'Sun', hours: 6.7 },
];

const subjectData = [
  { subject: 'Math', progress: 85 },
  { subject: 'Physics', progress: 72 },
  { subject: 'Chemistry', progress: 68 },
  { subject: 'Biology', progress: 91 },
  { subject: 'CS', progress: 78 },
];

const recentActivities = [
  { id: 1, title: 'Completed Calculus Chapter 5', time: '2 hours ago', type: 'study' },
  { id: 2, title: 'Solved 3 LeetCode problems', time: '4 hours ago', type: 'coding' },
  { id: 3, title: 'Finished Physics assignment', time: '1 day ago', type: 'study' },
  { id: 4, title: 'Reviewed Data Structures', time: '1 day ago', type: 'study' },
  { id: 5, title: 'Chemistry lab report submitted', time: '2 days ago', type: 'study' },
];

export function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Message */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
        <h1 className="text-3xl font-semibold mb-2">Welcome back, John! 👋</h1>
        <p className="text-indigo-100">
          You've studied <span className="font-semibold">44 hours</span> this week. Keep up the great work!
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Study Hours"
          value="124h"
          icon={Clock}
          trend={{ value: '12%', isPositive: true }}
          iconColor="text-indigo-600 dark:text-indigo-400"
          iconBgColor="bg-indigo-50 dark:bg-indigo-900/20"
        />
        <StatCard
          title="Problems Solved"
          value="248"
          icon={CheckCircle2}
          trend={{ value: '8%', isPositive: true }}
          iconColor="text-emerald-600 dark:text-emerald-400"
          iconBgColor="bg-emerald-50 dark:bg-emerald-900/20"
        />
        <StatCard
          title="Active Goals"
          value="12"
          icon={Target}
          trend={{ value: '3%', isPositive: false }}
          iconColor="text-amber-600 dark:text-amber-400"
          iconBgColor="bg-amber-50 dark:bg-amber-900/20"
        />
        <StatCard
          title="Current Streak"
          value="18 days"
          icon={Flame}
          trend={{ value: '25%', isPositive: true }}
          iconColor="text-orange-600 dark:text-orange-400"
          iconBgColor="bg-orange-50 dark:bg-orange-900/20"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Study Hours Chart */}
        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Study Hours This Week</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Daily breakdown</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
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
              <Line 
                type="monotone" 
                dataKey="hours" 
                stroke="#4F46E5" 
                strokeWidth={3}
                dot={{ fill: '#4F46E5', r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Subject Progress Chart */}
        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Subject Progress</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Completion percentage</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={subjectData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="subject" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: 'none', 
                  borderRadius: '12px',
                  color: '#f1f5f9'
                }} 
              />
              <Bar dataKey="progress" fill="#10B981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div 
              key={activity.id}
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                activity.type === 'study' 
                  ? 'bg-indigo-100 dark:bg-indigo-900/30' 
                  : 'bg-emerald-100 dark:bg-emerald-900/30'
              }`}>
                {activity.type === 'study' ? (
                  <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                )}
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-900 dark:text-slate-100">{activity.title}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

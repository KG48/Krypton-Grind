import { User, Mail, Calendar, Award, Target, TrendingUp, Edit2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

export function ProfilePage() {
  const achievements = [
    { id: 1, title: '7-Day Streak', icon: '🔥', earned: true },
    { id: 2, title: '100 Problems Solved', icon: '💯', earned: true },
    { id: 3, title: 'Night Owl', icon: '🦉', earned: true },
    { id: 4, title: 'Early Bird', icon: '🌅', earned: false },
    { id: 5, title: 'Study Master', icon: '📚', earned: true },
    { id: 6, title: 'Goal Crusher', icon: '🎯', earned: false },
  ];

  const stats = [
    { label: 'Total Study Hours', value: '324', icon: TrendingUp, color: 'text-indigo-600 dark:text-indigo-400' },
    { label: 'Problems Solved', value: '248', icon: Target, color: 'text-emerald-600 dark:text-emerald-400' },
    { label: 'Goals Achieved', value: '12', icon: Award, color: 'text-amber-600 dark:text-amber-400' },
  ];

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-4xl font-bold border-4 border-white/30">
            JD
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-semibold mb-2">Karan Gavhane</h1>
            <p className="text-indigo-100 mb-4">Computer Science Student • Aspiring Software Engineer</p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>karangavhane1213@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Joined Feb 2025</span>
              </div>
            </div>
          </div>
          <Button className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-xl">
            <Edit2 className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
            <p className="text-3xl font-semibold text-slate-900 dark:text-slate-100 mb-1">
              {stat.value}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Personal Information */}
        <div className="lg:col-span-2 bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-6">Personal Information</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-slate-700 dark:text-slate-300">First Name</Label>
                <Input
                  id="firstName"
                  defaultValue="John"
                  className="mt-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-slate-700 dark:text-slate-300">Last Name</Label>
                <Input
                  id="lastName"
                  defaultValue="Doe"
                  className="mt-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">Email Address</Label>
              <Input
                id="email"
                type="email"
                defaultValue="john.doe@example.com"
                className="mt-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
              />
            </div>
            <div>
              <Label htmlFor="university" className="text-slate-700 dark:text-slate-300">University</Label>
              <Input
                id="university"
                defaultValue="Tech University"
                className="mt-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
              />
            </div>
            <div>
              <Label htmlFor="major" className="text-slate-700 dark:text-slate-300">Major</Label>
              <Input
                id="major"
                defaultValue="Computer Science"
                className="mt-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
              />
            </div>
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl">
              Save Changes
            </Button>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Achievements</h3>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`p-4 rounded-xl text-center transition-all ${
                  achievement.earned
                    ? 'bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-2 border-amber-200 dark:border-amber-800'
                    : 'bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 opacity-50'
                }`}
              >
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <p className="text-xs font-medium text-slate-900 dark:text-slate-100">
                  {achievement.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Study Preferences */}
      <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Study Preferences</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Label htmlFor="dailyGoal" className="text-slate-700 dark:text-slate-300">Daily Study Goal (hours)</Label>
            <Input
              id="dailyGoal"
              type="number"
              defaultValue="6"
              className="mt-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
            />
          </div>
          <div>
            <Label htmlFor="weeklyGoal" className="text-slate-700 dark:text-slate-300">Weekly Study Goal (hours)</Label>
            <Input
              id="weeklyGoal"
              type="number"
              defaultValue="40"
              className="mt-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
            />
          </div>
          <div>
            <Label htmlFor="codingGoal" className="text-slate-700 dark:text-slate-300">Daily Coding Problems</Label>
            <Input
              id="codingGoal"
              type="number"
              defaultValue="3"
              className="mt-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

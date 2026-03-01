import { useState } from 'react';
import { Plus, Edit2, Trash2, Calendar, Target } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';

interface Goal {
  id: string;
  title: string;
  deadline: string;
  progress: number;
  status: 'active' | 'completed' | 'at-risk';
  category: string;
}

const initialGoals: Goal[] = [
  {
    id: '1',
    title: 'Complete Computer Hardware and Architecture Course',
    deadline: '2026-03-30',
    progress: 85,
    status: 'active',
    category: 'Study',
  },
  {
    id: '2',
    title: 'Solve 100 LeetCode Problems',
    deadline: '2026-04-15',
    progress: 68,
    status: 'active',
    category: 'Coding',
  },
  {
    id: '3',
    title: 'Finish Logic Design Project',
    deadline: '2026-03-10',
    progress: 92,
    status: 'at-risk',
    category: 'Study',
  },
  {
    id: '4',
    title: 'Learn React Advanced Patterns',
    deadline: '2026-05-01',
    progress: 45,
    status: 'active',
    category: 'Coding',
  },
  {
    id: '5',
    title: 'Complete OOPS CONCEPTS Course',
    deadline: '2026-02-28',
    progress: 100,
    status: 'completed',
    category: 'Study',
  },
  {
    id: '6',
    title: 'Master Data Structures',
    deadline: '2026-06-01',
    progress: 38,
    status: 'active',
    category: 'Coding',
  },
];

const statusColors = {
  active: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  completed: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  'at-risk': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
};

const categoryColors = {
  Study: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
  Coding: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
};

export function GoalsPage() {
  const [goals] = useState<Goal[]>(initialGoals);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const getDaysRemaining = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Your Goals</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Track and achieve your learning objectives
          </p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg shadow-indigo-500/30">
              <Plus className="w-4 h-4 mr-2" />
              Add Goal
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white dark:bg-[#1e293b] border-slate-200 dark:border-slate-700 rounded-2xl">
            <DialogHeader>
              <DialogTitle className="text-slate-900 dark:text-slate-100">Create New Goal</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div>
                <Label htmlFor="goal-title" className="text-slate-700 dark:text-slate-300">Goal Title</Label>
                <Input
                  id="goal-title"
                  placeholder="e.g., Complete React Course"
                  className="mt-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                />
              </div>
              <div>
                <Label htmlFor="deadline" className="text-slate-700 dark:text-slate-300">Deadline</Label>
                <Input
                  id="deadline"
                  type="date"
                  className="mt-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                />
              </div>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl">
                Create Goal
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center">
              <Target className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Total Goals</p>
              <p className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{goals.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
              <Target className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Completed</p>
              <p className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                {goals.filter(g => g.status === 'completed').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center">
              <Target className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">In Progress</p>
              <p className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                {goals.filter(g => g.status === 'active').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {goals.map((goal) => {
          const daysRemaining = getDaysRemaining(goal.deadline);
          
          return (
            <div
              key={goal.id}
              className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-2">
                    {goal.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={`${statusColors[goal.status]} rounded-lg px-2 py-1 text-xs`}>
                      {goal.status === 'at-risk' ? 'At Risk' : goal.status.charAt(0).toUpperCase() + goal.status.slice(1)}
                    </Badge>
                    <Badge className={`${categoryColors[goal.category as keyof typeof categoryColors]} rounded-lg px-2 py-1 text-xs`}>
                      {goal.category}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                    <Edit2 className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  </button>
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4 text-red-600 dark:text-red-400" />
                  </button>
                </div>
              </div>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Progress</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {goal.progress}%
                  </span>
                </div>
                <Progress value={goal.progress} className="h-2" />
              </div>

              {/* Deadline */}
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span className="text-slate-600 dark:text-slate-400">
                  Due: {new Date(goal.deadline).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
                <span className={`ml-auto font-medium ${
                  daysRemaining < 0 
                    ? 'text-red-600 dark:text-red-400' 
                    : daysRemaining < 7 
                    ? 'text-amber-600 dark:text-amber-400' 
                    : 'text-emerald-600 dark:text-emerald-400'
                }`}>
                  {daysRemaining < 0 
                    ? `${Math.abs(daysRemaining)} days overdue` 
                    : `${daysRemaining} days left`
                  }
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Plus, Flame, Edit2, Trash2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';

interface Problem {
  id: string;
  name: string;
  platform: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  dateSolved: string;
}

const initialProblems: Problem[] = [
  { id: '1', name: 'Two Sum', platform: 'LeetCode', difficulty: 'Easy', dateSolved: '2026-02-27' },
  { id: '2', name: 'Binary Search', platform: 'LeetCode', difficulty: 'Easy', dateSolved: '2026-02-26' },
  { id: '3', name: 'Merge Intervals', platform: 'LeetCode', difficulty: 'Medium', dateSolved: '2026-02-26' },
  { id: '4', name: 'Longest Substring', platform: 'LeetCode', difficulty: 'Medium', dateSolved: '2026-02-25' },
  { id: '5', name: 'Valid Parentheses', platform: 'LeetCode', difficulty: 'Easy', dateSolved: '2026-02-25' },
  { id: '6', name: 'Trapping Rain Water', platform: 'LeetCode', difficulty: 'Hard', dateSolved: '2026-02-24' },
  { id: '7', name: 'Reverse Linked List', platform: 'HackerRank', difficulty: 'Easy', dateSolved: '2026-02-23' },
  { id: '8', name: 'Minimum Window', platform: 'LeetCode', difficulty: 'Hard', dateSolved: '2026-02-22' },
];

const difficultyColors = {
  Easy: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  Medium: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  Hard: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
};

export function CodingTrackerPage() {
  const [problems] = useState<Problem[]>(initialProblems);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [mistakeJournal, setMistakeJournal] = useState(
    'Problem: Two Sum\nMistake: Used nested loops (O(n²)) instead of hash map approach\nLesson: Always consider hash maps for lookup problems\n\n---\n\nProblem: Merge Intervals\nMistake: Forgot to sort intervals first\nLesson: Sorting is often the first step in interval problems'
  );

  return (
    <div className="space-y-6">
      {/* Streak Card */}
      <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Flame className="w-8 h-8" />
              <h2 className="text-3xl font-semibold">18 Day Streak! 🔥</h2>
            </div>
            <p className="text-orange-100">
              You've solved problems for 18 consecutive days. Keep it going!
            </p>
          </div>
          <div className="text-right">
            <p className="text-orange-100 text-sm mb-1">Total Problems</p>
            <p className="text-5xl font-bold">248</p>
          </div>
        </div>
      </div>

      {/* Add Problem Button */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Problems Solved</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Track your coding practice
          </p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg shadow-indigo-500/30">
              <Plus className="w-4 h-4 mr-2" />
              Add Problem
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white dark:bg-[#1e293b] border-slate-200 dark:border-slate-700 rounded-2xl">
            <DialogHeader>
              <DialogTitle className="text-slate-900 dark:text-slate-100">Add New Problem</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div>
                <Label htmlFor="problem-name" className="text-slate-700 dark:text-slate-300">Problem Name</Label>
                <Input
                  id="problem-name"
                  placeholder="e.g., Two Sum"
                  className="mt-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                />
              </div>
              <div>
                <Label htmlFor="platform" className="text-slate-700 dark:text-slate-300">Platform</Label>
                <Input
                  id="platform"
                  placeholder="e.g., LeetCode"
                  className="mt-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                />
              </div>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl">
                Add Problem
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Problems Table */}
      <div className="bg-white dark:bg-[#1e293b] rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                <th className="text-left p-4 font-semibold text-slate-900 dark:text-slate-100">Problem Name</th>
                <th className="text-left p-4 font-semibold text-slate-900 dark:text-slate-100">Platform</th>
                <th className="text-left p-4 font-semibold text-slate-900 dark:text-slate-100">Difficulty</th>
                <th className="text-left p-4 font-semibold text-slate-900 dark:text-slate-100">Date Solved</th>
                <th className="text-left p-4 font-semibold text-slate-900 dark:text-slate-100">Actions</th>
              </tr>
            </thead>
            <tbody>
              {problems.map((problem) => (
                <tr 
                  key={problem.id}
                  className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <td className="p-4 font-medium text-slate-900 dark:text-slate-100">
                    {problem.name}
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-400">
                    {problem.platform}
                  </td>
                  <td className="p-4">
                    <Badge className={`${difficultyColors[problem.difficulty]} rounded-lg px-3 py-1`}>
                      {problem.difficulty}
                    </Badge>
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-400">
                    {new Date(problem.dateSolved).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                        <Edit2 className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                      </button>
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4 text-red-600 dark:text-red-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mistake Journal */}
      <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Mistake Journal</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
          Document your mistakes and learnings to avoid repeating them
        </p>
        <Textarea
          value={mistakeJournal}
          onChange={(e) => setMistakeJournal(e.target.value)}
          className="min-h-[300px] rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 font-mono text-sm"
          placeholder="Document your mistakes and learnings here..."
        />
        <Button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl">
          Save Journal
        </Button>
      </div>
    </div>
  );
}

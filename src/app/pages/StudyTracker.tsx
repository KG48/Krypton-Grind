import { useState } from "react";
import { Plus, Edit2, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Progress } from "../components/ui/progress";

interface Subject {
  id: string;
  name: string;
  progress: number;
  totalHours: number;
  topicsCompleted: number;
  totalTopics: number;
  color: string;
}

const initialSubjects: Subject[] = [
  {
    id: "1",
    name: "Computer Hardware and Architecture",
    progress: 85,
    totalHours: 42,
    topicsCompleted: 17,
    totalTopics: 20,
    color: "bg-indigo-500",
  },
  {
    id: "2",
    name: "Digital Logic Design",
    progress: 72,
    totalHours: 38,
    topicsCompleted: 13,
    totalTopics: 18,
    color: "bg-emerald-500",
  },
  {
    id: "3",
    name: "Object-Oriented Programming using C++",
    progress: 68,
    totalHours: 35,
    topicsCompleted: 14,
    totalTopics: 21,
    color: "bg-amber-500",
  },
  {
    id: "4",
    name: "Discrete mathematics",
    progress: 91,
    totalHours: 48,
    topicsCompleted: 19,
    totalTopics: 21,
    color: "bg-purple-500",
  },
  {
    id: "5",
    name: "Data Structures and Algorithms",
    progress: 78,
    totalHours: 52,
    topicsCompleted: 16,
    totalTopics: 20,
    color: "bg-blue-500",
  },
  {
    id: "6",
    name: "Introduction to Operating Systems",
    progress: 55,
    totalHours: 28,
    topicsCompleted: 11,
    totalTopics: 20,
    color: "bg-pink-500",
  },
];

export function StudyTrackerPage() {
  const [subjects] = useState<Subject[]>(initialSubjects);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Study Subjects
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Track your progress across all subjects
          </p>
        </div>
        <Dialog
          open={isAddDialogOpen}
          onOpenChange={setIsAddDialogOpen}
        >
          <DialogTrigger asChild>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg shadow-indigo-500/30">
              <Plus className="w-4 h-4 mr-2" />
              Add Subject
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white dark:bg-[#1e293b] border-slate-200 dark:border-slate-700 rounded-2xl">
            <DialogHeader>
              <DialogTitle className="text-slate-900 dark:text-slate-100">
                Add New Subject
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div>
                <Label
                  htmlFor="subject-name"
                  className="text-slate-700 dark:text-slate-300"
                >
                  Subject Name
                </Label>
                <Input
                  id="subject-name"
                  placeholder="e.g., Calculus"
                  className="mt-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                />
              </div>
              <div>
                <Label
                  htmlFor="total-topics"
                  className="text-slate-700 dark:text-slate-300"
                >
                  Total Topics
                </Label>
                <Input
                  id="total-topics"
                  type="number"
                  placeholder="20"
                  className="mt-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                />
              </div>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl">
                Add Subject
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Subject Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-xl ${subject.color} flex items-center justify-center`}
                >
                  <span className="text-white text-xl font-semibold">
                    {subject.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    {subject.name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {subject.topicsCompleted}/
                    {subject.totalTopics} topics
                  </p>
                </div>
              </div>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                <Edit2 className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  Progress
                </span>
                <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {subject.progress}%
                </span>
              </div>
              <Progress
                value={subject.progress}
                className="h-2"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Hours
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {subject.totalHours}h
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Topics
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {subject.topicsCompleted}
                  </p>
                </div>
              </div>
            </div>

            {/* View Details Button */}
            <button className="w-full mt-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 font-medium transition-colors">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
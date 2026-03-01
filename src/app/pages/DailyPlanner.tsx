import { useState } from 'react';
import { Plus, Check, Trash2, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Checkbox } from '../components/ui/checkbox';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  time?: string;
}

const initialTasks: Task[] = [
  { id: '1', title: 'Review Calculus Chapter 6', completed: false, time: '09:00 AM' },
  { id: '2', title: 'Solve 3 LeetCode problems', completed: false, time: '11:00 AM' },
  { id: '3', title: 'Physics lab session', completed: true, time: '02:00 PM' },
  { id: '4', title: 'Study Chemistry notes', completed: false, time: '04:00 PM' },
  { id: '5', title: 'Work on CS project', completed: false, time: '06:00 PM' },
];

const completedTasksData: Task[] = [
  { id: 'c1', title: 'Morning workout', completed: true },
  { id: 'c2', title: 'Read daily news', completed: true },
  { id: 'c3', title: 'Breakfast and planning', completed: true },
];

export function DailyPlannerPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [completedTasks, setCompletedTasks] = useState<Task[]>(completedTasksData);
  const [newTask, setNewTask] = useState('');
  const [newTime, setNewTime] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        title: newTask,
        completed: false,
        time: newTime || undefined,
      };
      setTasks([...tasks, task]);
      setNewTask('');
      setNewTime('');
    }
  };

  const handleToggleTask = (id: string) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
      setTasks(tasks.filter(t => t.id !== id));
      setCompletedTasks([...completedTasks, { ...task, completed: true }]);
    }
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const handleDeleteCompletedTask = (id: string) => {
    setCompletedTasks(completedTasks.filter(t => t.id !== id));
  };

  const timeSlots = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', 
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
    '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM',
    '08:00 PM', '09:00 PM'
  ];

  const getTaskForTime = (time: string) => {
    return tasks.find(t => t.time === time);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Daily Planner</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Todo List */}
        <div className="lg:col-span-2 space-y-6">
          {/* Add Task */}
          <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Add New Task</h3>
            <div className="flex gap-3">
              <Input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
                placeholder="Enter task title..."
                className="flex-1 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
              />
              <Input
                type="time"
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
                className="w-32 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
              />
              <Button 
                onClick={handleAddTask}
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-6"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Active Tasks */}
          <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Today's Tasks</h3>
            <div className="space-y-3">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                >
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => handleToggleTask(task.id)}
                    className="rounded-md"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-slate-900 dark:text-slate-100">
                      {task.title}
                    </p>
                    {task.time && (
                      <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3" />
                        {task.time}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => handleDeleteTask(task.id)}
                    className="opacity-0 group-hover:opacity-100 p-2 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-all"
                  >
                    <Trash2 className="w-4 h-4 text-red-600 dark:text-red-400" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Completed Tasks */}
          <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Completed Tasks ({completedTasks.length})
            </h3>
            <div className="space-y-3">
              {completedTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 group"
                >
                  <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <p className="flex-1 font-medium text-slate-600 dark:text-slate-400 line-through">
                    {task.title}
                  </p>
                  <button
                    onClick={() => handleDeleteCompletedTask(task.id)}
                    className="opacity-0 group-hover:opacity-100 p-2 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 rounded-lg transition-all"
                  >
                    <Trash2 className="w-4 h-4 text-red-600 dark:text-red-400" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Schedule */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm sticky top-8">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Today's Schedule</h3>
            <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2">
              {timeSlots.map((time) => {
                const task = getTaskForTime(time);
                return (
                  <div
                    key={time}
                    className={`p-3 rounded-xl border transition-colors ${
                      task
                        ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800'
                        : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Clock className={`w-4 h-4 ${
                        task 
                          ? 'text-indigo-600 dark:text-indigo-400' 
                          : 'text-slate-400'
                      }`} />
                      <span className={`text-sm font-medium ${
                        task
                          ? 'text-indigo-900 dark:text-indigo-300'
                          : 'text-slate-500 dark:text-slate-400'
                      }`}>
                        {time}
                      </span>
                    </div>
                    {task && (
                      <p className="text-sm text-slate-900 dark:text-slate-100 mt-1 ml-6">
                        {task.title}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { createBrowserRouter } from "react-router-dom";;
import { DashboardLayout } from "./components/layout/DashboardLayout";
import { DashboardPage } from "./pages/Dashboard";
import { StudyTrackerPage } from "./pages/StudyTracker";
import { CodingTrackerPage } from "./pages/CodingTracker";
import { GoalsPage } from "./pages/Goals";
import { DailyPlannerPage } from "./pages/DailyPlanner";
import { AnalyticsPage } from "./pages/Analytics";
import { ProfilePage } from "./pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "study-tracker", element: <StudyTrackerPage /> },
      { path: "coding-tracker", element: <CodingTrackerPage /> },
      { path: "goals", element: <GoalsPage /> },
      { path: "daily-planner", element: <DailyPlannerPage /> },
      { path: "analytics", element: <AnalyticsPage /> },
      { path: "profile", element: <ProfilePage /> },
    ],
  },
]);

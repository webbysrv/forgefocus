import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import TimerCard from "@/components/TimerCard";
import StatsRow from "@/components/StatsRow";
import WeeklyChart from "@/components/WeeklyChart";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="ml-[220px] flex-1 flex flex-col">
        {/* Top Bar */}
        <TopBar />

        {/* Content Area */}
        <div className="flex-1 px-8 py-8 flex flex-col items-center gap-8">
          {/* Hero Timer */}
          <TimerCard />

          {/* Stats Row */}
          <StatsRow />

          {/* Weekly Progress Chart */}
          <WeeklyChart />
        </div>
      </main>
    </div>
  );
}

import Background from "@/components/layout/Background";
import Sidebar from "@/components/layout/Sidebar";
import Profile from "@/components/home/Profile";
import Clock from "@/components/home/Clock";
import Calendar from "@/components/home/Calendar";
import Controls from "@/components/home/Controls";

// The home dashboard: a tidy, aligned bento grid.
export default function HomePage() {
  return (
    <>
      <Background />
      <main>
        <div className="home">
          <aside className="home-side">
            <Sidebar />
          </aside>
          <div className="home-col">
            <Profile />
            <Controls />
          </div>
          <div className="home-col">
            <Calendar />
            <Clock />
          </div>
        </div>
      </main>
    </>
  );
}

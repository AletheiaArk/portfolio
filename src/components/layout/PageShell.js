import Background from "@/components/layout/Background";
import Sidebar from "@/components/layout/Sidebar";

export default function PageShell({ title, subtitle, children }) {
  return (
    <>
      <Background />
      <main>
        <div className="shell">
          <aside className="shell-side">
            <Sidebar />
          </aside>
          <section className="shell-main">
            <div className="card page-card">
              <header className="page-head">
                <h1 className="page-title">{title}</h1>
                {subtitle && <p className="page-sub">{subtitle}</p>}
              </header>
              {children}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

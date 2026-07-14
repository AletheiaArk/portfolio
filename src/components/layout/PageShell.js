import Background from "@/components/layout/Background";
import Sidebar from "@/components/layout/Sidebar";

export default function PageShell({ title, subtitle, wide, compact, children }) {
  return (
    <>
      <Background />
      <main>
        <div className={"shell" + (wide ? " shell-wide" : "")}>
          <aside className="shell-side">
            <Sidebar />
          </aside>
          <section className="shell-main">
            <div className="card page-card">
              {title && (
                <header className={"page-head" + (compact ? " page-head-compact" : "")}>
                  <h1 className="page-title">{title}</h1>
                  {subtitle && <p className="page-sub">{subtitle}</p>}
                </header>
              )}
              {children}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

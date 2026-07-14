// Wraps every route. Unlike layout.js, a template re-mounts on each navigation,
// so the CSS entrance animation on <main> replays on every page change.
export default function Template({ children }) {
  return <div className="route-transition">{children}</div>;
}

"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      setTime(`${hh}:${mm}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="card clock">
      <time className="clock-time" suppressHydrationWarning>{time}</time>
    </div>
  );
}

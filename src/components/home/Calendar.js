"use client";

import { useEffect, useState } from "react";

const WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DOW = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function Calendar() {
  // Resolve the date on the client only, to avoid a server/client mismatch.
  const [now, setNow] = useState(null);
  useEffect(() => setNow(new Date()), []);

  if (!now) return <div className="card calendar" aria-hidden="true" />;

  const year = now.getFullYear();
  const month = now.getMonth();
  const today = now.getDate();
  const firstDow = new Date(year, month, 1).getDay(); // 0 = Sunday
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const leadingBlanks = (firstDow + 6) % 7; // shift so the week starts on Monday

  return (
    <div className="card calendar">
      <p className="cal-head">
        {year}/{month + 1}/{today}　{WEEK[now.getDay()]}
      </p>
      <div className="cal-grid">
        {DOW.map((w) => (
          <span key={w} className="dow">{w}</span>
        ))}
        {Array.from({ length: leadingBlanks }, (_, i) => (
          <span key={`blank-${i}`} className="day empty" />
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const d = i + 1;
          return (
            <span key={d} className={"day" + (d === today ? " today" : "")}>{d}</span>
          );
        })}
      </div>
    </div>
  );
}

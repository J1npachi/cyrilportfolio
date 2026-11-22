"use client";

import { useEffect, useState } from "react";

// Shows the owner's current local time, updating every 30 seconds.
// Renders empty on the server so the time never mismatches after loading.
export default function LiveClock({
  timeZone,
  place,
}: {
  timeZone: string;
  place: string;
}) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, [timeZone]);

  return (
    <p className="clock" aria-live="off">
      <span className="clock-dot" aria-hidden="true" />
      <span className="clock-text" data-ready={time !== null}>
        {time ? `It's ${time} in ${place}` : " "}
      </span>
    </p>
  );
}

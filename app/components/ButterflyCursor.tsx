"use client";

import { useEffect, useState } from "react";

const TRAIL_COUNT = 10;

type Point = {
  x: number;
  y: number;
};

export default function ButterflyCursor() {
  const [position, setPosition] = useState<Point>({ x: -100, y: -100 });
  const [trail, setTrail] = useState<Point[]>(
    Array.from({ length: TRAIL_COUNT }, () => ({ x: -100, y: -100 })),
  );

  useEffect(() => {
    let frame = 0;
    let target = { x: -100, y: -100 };

    const moveCursor = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") {
        return;
      }

      target = { x: event.clientX, y: event.clientY };
      setPosition(target);
    };

    const animateTrail = () => {
      setTrail((currentTrail) => {
        const nextTrail = [...currentTrail];
        let leader = target;

        for (let index = 0; index < nextTrail.length; index += 1) {
          const current = nextTrail[index];
          const ease = 0.26 - index * 0.012;

          nextTrail[index] = {
            x: current.x + (leader.x - current.x) * ease,
            y: current.y + (leader.y - current.y) * ease,
          };
          leader = nextTrail[index];
        }

        return nextTrail;
      });

      frame = requestAnimationFrame(animateTrail);
    };

    window.addEventListener("pointermove", moveCursor);
    frame = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="butterfly-cursor-layer" aria-hidden="true">
      {trail.map((point, index) => (
        <span
          // The trail is intentionally positional, so index is stable enough.
          key={index}
          className="butterfly-trail"
          style={{
            left: point.x,
            top: point.y,
            opacity: (TRAIL_COUNT - index) / (TRAIL_COUNT * 1.6),
            transform: `translate(-50%, -50%) scale(${1 - index * 0.055})`,
          }}
        />
      ))}

      <span
        className="butterfly-pointer"
        style={{
          left: position.x,
          top: position.y,
        }}
      >
        <i />
        <b />
      </span>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";

export default function Particles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleCount = 20;
    const items = [];
    for (let i = 0; i < particleCount; i++) {
      items.push({
        id: i,
        left: `${Math.random() * 100}%`,
        bottom: `-${Math.random() * 20}%`,
        size: `${Math.random() * 3 + 1}px`,
        delay: `${Math.random() * 20}s`,
        duration: `${Math.random() * 15 + 15}s`,
      });
    }
    setParticles(items);
  }, []);

  return (
    <div className="particle-network">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            bottom: p.bottom,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';

interface StatCardProps {
  icon: string;
  number: number;
  suffix?: string;
  label: string;
}

export function StatCard({ icon, number, suffix = '+', label }: StatCardProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * number));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, number]);

  return (
    <div ref={cardRef} className="stat-card">
      <div className="stat-icon">
        <i className={icon}></i>
      </div>
      <h3 className="stat-number">
        {count}{suffix}
      </h3>
      <p className="stat-label">{label}</p>
    </div>
  );
}

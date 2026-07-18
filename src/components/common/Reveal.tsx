"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
    children: React.ReactNode;
    direction?: "left" | "right" | "up";
    delay?: number;
};

export default function Reveal({
    children,
    direction = "up",
    delay = 0,
}: RevealProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.2,
            }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div   
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`reveal reveal-${direction} ${
                isVisible? "reveal-show" : ""
            }`}
        >
            {children}
        </div>
    );
}
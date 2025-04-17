"use client";
import { Fade } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
}

const LazyReveal = ({
  children,
  rootMargin = "0px",
  threshold = 0.1,
}: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, rootMargin, threshold]);

  return (
    <Fade in={isVisible} timeout={800}>
      <div
        ref={ref}
        style={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {isVisible ? children : null}
      </div>
    </Fade>
  );
};

export default LazyReveal;

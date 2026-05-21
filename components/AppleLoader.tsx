"use client";

import { useEffect, useState } from "react";

export default function AppleLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 z-[99999] bg-white flex items-center justify-center">
          <div className="apple-spinner">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="apple-spinner-blade"
                style={
                  {
                    "--i": i,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
}
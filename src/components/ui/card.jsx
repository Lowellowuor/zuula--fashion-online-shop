// src/components/ui/card.jsx

export function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300
        overflow-hidden ${className}
      `}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return (
    <div
      className={`
        p-6 md:p-8 flex flex-col gap-3
        ${className}
      `}
    >
      {children}
    </div>
  );
}

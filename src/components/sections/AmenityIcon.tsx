type AmenityIconProps = {
  name?: string;
  className?: string;
};

export function AmenityIcon({ name, className = "h-5 w-5" }: AmenityIconProps) {
  switch (name) {
    case "thermometer":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path d="M14 4a2 2 0 00-2-2h0a2 2 0 00-2 2v10a4 4 0 108 0V4z" />
          <path d="M12 12v2" strokeLinecap="round" />
        </svg>
      );
    case "bed":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path d="M3 12V8a2 2 0 012-2h14a2 2 0 012 2v4M3 12v4h18v-4M3 12h18M7 8V6M17 8V6" strokeLinecap="round" />
        </svg>
      );
    case "wine":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path d="M8 3h8l-1 8a4 4 0 01-8 0L8 3zM12 11v7M9 21h6" strokeLinejoin="round" />
        </svg>
      );
    case "sparkles":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z" />
        </svg>
      );
    case "lock":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path d="M7 11V8a5 5 0 0110 0v3M6 11h12v9H6v-9z" strokeLinejoin="round" />
        </svg>
      );
    case "home":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path d="M4 10.5L12 4l8 6.5V20a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-9.5z" strokeLinejoin="round" />
        </svg>
      );
    case "coffee":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path d="M6 8h12v5a4 4 0 01-4 4H8a4 4 0 01-4-4V8zM18 10h1a2 2 0 012 2v1a2 2 0 01-2 2h-1M6 4v2M10 4v2M14 4v2" strokeLinecap="round" />
        </svg>
      );
    case "sun":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" />
        </svg>
      );
    case "grape":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <circle cx="8" cy="8" r="2" />
          <circle cx="16" cy="8" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="8" cy="16" r="2" />
          <circle cx="16" cy="16" r="2" />
        </svg>
      );
    case "utensils":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path d="M6 3v8a3 3 0 006 0V3M9 11v10M18 3v18M15 3a3 3 0 013 3v5h-6V3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "wifi":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path d="M5 12.5a11 11 0 0114 0M8.5 15.5a6.5 6.5 0 017 0M12 19h.01" strokeLinecap="round" />
        </svg>
      );
    case "laptop":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v8H4V6zM2 16h20v2H2v-2z" strokeLinejoin="round" />
        </svg>
      );
    case "car":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path d="M5 17h14M6 17l-1-4 2-5h10l2 5-1 4M8 17a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM13 17a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" strokeLinejoin="round" />
        </svg>
      );
    case "zap":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" strokeLinejoin="round" />
        </svg>
      );
    case "shirt":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path d="M16 3l4 4-3 3v11H7V10L4 7l4-4 4 3h0a2 2 0 012 0h0L16 3z" strokeLinejoin="round" />
        </svg>
      );
    case "iron":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path d="M4 14h16l-2 6H6l-2-6zM6 14l2-8h8l2 8" strokeLinejoin="round" />
        </svg>
      );
    case "baby":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <circle cx="12" cy="6" r="3" />
          <path d="M6 21v-2a6 6 0 0112 0v2" strokeLinecap="round" />
        </svg>
      );
    case "trees":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path d="M12 22V12M12 12c-3-2-5-4-5-7a5 5 0 0110 0c0 3-2 5-5 7z" strokeLinejoin="round" />
        </svg>
      );
    case "map":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path d="M9 4l-6 2v14l6-2 6 2 6-2V4l-6 2-6-2z" strokeLinejoin="round" />
          <path d="M9 4v14M15 6v14" />
        </svg>
      );
    case "accessibility":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <circle cx="12" cy="4" r="2" />
          <path d="M12 6v5M8 10l4 8 4-8M7 14h10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "elevator":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <rect x="5" y="3" width="14" height="18" rx="1" />
          <path d="M12 7v10M9 14l3 3 3-3M9 10l3-3 3 3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "bath":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path d="M5 12h14a3 3 0 010 6H7a3 3 0 01-3-3v-3a4 4 0 014-4h6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 18v2M18 18v2M7 8V5a2 2 0 012-2h1" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2" strokeLinecap="round" />
        </svg>
      );
  }
}

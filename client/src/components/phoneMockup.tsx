export default function PhoneMockup() {
  return (
    <div className="relative w-full max-w-xs">
      <svg
        width="100%"
        viewBox="0 0 320 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-xl"
      >
        {/* Phone frame */}
        <rect x="0" y="0" width="320" height="650" rx="36" fill="#222" />
        <rect x="8" y="8" width="304" height="634" rx="28" fill="#111" />
        
        {/* Screen content */}
        <rect x="12" y="12" width="296" height="626" rx="24" fill="#333" />
        
        {/* App UI */}
        <rect x="16" y="16" width="288" height="618" rx="20" fill="#121212" />
        
        {/* Status bar */}
        <rect x="16" y="16" width="288" height="40" rx="20" fill="#1A1A1A" />
        
        {/* App grid with thumbnails */}
        <rect x="26" y="66" width="85" height="120" rx="8" fill="#252525" />
        <rect x="26" y="66" width="85" height="90" rx="8" fill="#5F6DF8" opacity="0.7" />
        
        <rect x="121" y="66" width="85" height="120" rx="8" fill="#252525" />
        <rect x="121" y="66" width="85" height="90" rx="8" fill="#723FE0" opacity="0.7" />
        
        <rect x="216" y="66" width="85" height="120" rx="8" fill="#252525" />
        <rect x="216" y="66" width="85" height="90" rx="8" fill="#E05F3F" opacity="0.7" />
        
        <rect x="26" y="196" width="85" height="120" rx="8" fill="#252525" />
        <rect x="26" y="196" width="85" height="90" rx="8" fill="#3FE0BF" opacity="0.7" />
        
        <rect x="121" y="196" width="85" height="120" rx="8" fill="#252525" />
        <rect x="121" y="196" width="85" height="90" rx="8" fill="#E0D13F" opacity="0.7" />
        
        <rect x="216" y="196" width="85" height="120" rx="8" fill="#252525" />
        <rect x="216" y="196" width="85" height="90" rx="8" fill="#3F8FE0" opacity="0.7" />
        
        {/* Bottom navigation */}
        <rect x="16" y="594" width="288" height="40" rx="20" fill="#1A1A1A" />
        <circle cx="60" cy="614" r="8" fill="#FFFFFF" />
        <circle cx="120" cy="614" r="8" fill="#FFFFFF" />
        <circle cx="180" cy="614" r="8" fill="#FFFFFF" />
        <circle cx="240" cy="614" r="8" fill="#FFFFFF" />
      </svg>
    </div>
  );
}

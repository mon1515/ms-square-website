export default function CraneSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="94" y="60" width="8" height="260" fill="currentColor" />
      <rect x="70" y="310" width="56" height="10" fill="currentColor" />
      <rect x="98" y="55" width="98" height="7" fill="currentColor" />
      <rect x="20" y="55" width="78" height="7" fill="currentColor" />
      <rect x="14" y="52" width="16" height="16" fill="currentColor" />
      <line x1="98" y1="60" x2="185" y2="90" stroke="currentColor" strokeWidth="4" />
      <line x1="98" y1="60" x2="30" y2="85" stroke="currentColor" strokeWidth="4" />
      <line x1="180" y1="58" x2="180" y2="150" stroke="currentColor" strokeWidth="3" />
      <line x1="180" y1="150" x2="196" y2="150" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

// Furniro logo mark (two gold peaks). `showText` toggles the wordmark.
function Logo({ showText = true, size = 50 }) {
  return (
    <span className="logo d-inline-flex align-items-center gap-1">
      <svg width={size} height={size * 0.64} viewBox="0 0 50 32" aria-hidden="true">
        <g fill="none" stroke="#B88E2F" strokeWidth="3" strokeLinejoin="round">
          <path d="M2 30 L15 4 L28 30" />
          <path d="M16 30 L29 4 L42 30" />
          <path d="M11 30 L15 22 L19 30" />
        </g>
      </svg>
      {showText && <span className="logo-text">Furniro</span>}
    </span>
  );
}

export default Logo;

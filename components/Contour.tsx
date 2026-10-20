export default function Contour({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 640 420" fill="none" aria-hidden="true">
      <path
        d="M-20 310c90-24 150-92 250-104 110-14 170 48 280 8 50-18 90-52 130-78"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M-20 258c100-22 160-100 270-112 120-14 180 40 290 2 48-16 88-48 120-70"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M-20 352c80-16 170-70 260-78 100-8 160 36 270 10 46-12 90-40 130-62"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M40 200c70-18 120-70 210-78 100-8 150 34 240 6"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}

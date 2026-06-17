import type { SVGProps } from "react";

type IconName =
  | "chef"
  | "gauge"
  | "flower"
  | "shield"
  | "home"
  | "dumbbell"
  | "building"
  | "anchor"
  | "runner"
  | "search"
  | "clipboard"
  | "gear"
  | "play"
  | "sparkle"
  | "lock"
  | "users"
  | "check"
  | "close"
  | "arrow"
  | "cpu"
  | "leaf";

const paths: Record<IconName, React.ReactNode> = {
  chef: (
    <>
      <path d="M6 14v6h12v-6" />
      <path d="M6 14a4 4 0 0 1-1-7.9A4.5 4.5 0 0 1 12 3a4.5 4.5 0 0 1 7 3.1A4 4 0 0 1 18 14H6Z" />
    </>
  ),
  gauge: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 12l4-3" />
      <path d="M12 12v.01" />
    </>
  ),
  flower: (
    <>
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 9.5V4M12 14.5V20M9.5 12H4M14.5 12H20M9.8 9.8 6 6M14.2 9.8 18 6M9.8 14.2 6 18M14.2 14.2 18 18" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <path d="M9.5 12l1.8 1.8L15 10" />
    </>
  ),
  home: (
    <>
      <path d="M4 11l8-7 8 7" />
      <path d="M6 10v10h12V10" />
    </>
  ),
  dumbbell: (
    <>
      <path d="M3 9v6M6 7v10M18 7v10M21 9v6M6 12h12" />
    </>
  ),
  building: (
    <>
      <path d="M5 21V5l7-2v18M12 21V8l7 2v11M3 21h18" />
      <path d="M8 8v.01M8 12v.01M15 13v.01M15 16v.01" />
    </>
  ),
  anchor: (
    <>
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v13M6 13H4c0 4 3.5 7 8 7s8-3 8-7h-2M8 11l-2 2M16 11l2 2" />
    </>
  ),
  runner: (
    <>
      <circle cx="14" cy="5" r="2" />
      <path d="M5 20l3-4 3 1 1-4-3-2 4-2 2 3 3 1" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-4.5-4.5" />
    </>
  ),
  clipboard: (
    <>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 4M9 10h6M9 14h6M9 18h3" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
    </>
  ),
  play: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 9l5 3-5 3V9Z" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 6a3 3 0 0 1 0 6M21 20c0-2.5-1.5-4.7-3.5-5.6" />
    </>
  ),
  check: <path d="M5 12l4 4L19 7" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  cpu: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 10h4v4h-4zM9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-8 6-13 14-13 0 8-5 13-13 13-1 0-1 0-1 0Z" />
      <path d="M5 19c3-4 6-6 10-7" />
    </>
  ),
};

export function Icon({
  name,
  className = "h-6 w-6",
  ...rest
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };

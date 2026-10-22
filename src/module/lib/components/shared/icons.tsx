import type { ReactNode } from "react";
import type { IconName } from "@/module/lib/utility/types/content.interface";

const paths: Record<IconName, ReactNode> = {
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18M10 13v1.5h4V13" />
    </>
  ),
  code: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m9 10-2.5 2L9 14M15 10l2.5 2L15 14M12.5 9l-1 6" />
    </>
  ),
  cloud: (
    <path d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 8.5a4.75 4.75 0 0 1 0 9.5Z" />
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 19a6 6 0 0 1 12 0M16 5.2a3 3 0 0 1 0 5.6M18 14.2A6 6 0 0 1 21 19" />
    </>
  ),
  layers: <path d="m12 3 9 5-9 5-9-5 9-5ZM3 12.5l9 5 9-5M3 16.5l9 5 9-5" />,
  award: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m9 14-1.5 7 4.5-2.5 4.5 2.5L15 14M10 9l1.5 1.5L14 8" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  support: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="3" y="14" width="4" height="6" rx="1.5" />
      <rect x="17" y="14" width="4" height="6" rx="1.5" />
      <path d="M19 20a4 4 0 0 1-4 2h-2" />
    </>
  ),
  phone: (
    <path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 6 6L15 13.5l4 1.5v3a2 2 0 0 1-2 2A14 14 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  pin: (
    <>
      <path d="M12 21s7-6 7-11.5a7 7 0 0 0-14 0C5 15 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
};

interface IconProps {
  name: IconName;
  className?: string;
}

export default function Icon({ name, className = "sc-icon-sm" }: IconProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}

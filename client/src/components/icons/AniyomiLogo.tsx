import { SVGProps } from "react";

export default function AniyomiLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="512" height="512" rx="128" fill="#5F6DF8" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M170.667 149.333C170.667 138.624 179.291 130 190 130H322C332.709 130 341.333 138.624 341.333 149.333V362.667C341.333 373.376 332.709 382 322 382H190C179.291 382 170.667 373.376 170.667 362.667V149.333ZM213.333 170.667V210.667H298.667V170.667H213.333ZM213.333 234.667V341.333H298.667V234.667H213.333Z"
        fill="white"
      />
      <circle cx="256" cy="288" r="32" fill="white" />
    </svg>
  );
}

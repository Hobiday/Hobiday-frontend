import type { SVGProps } from "react";
const SvgHeartDefaultIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={19} fill="none" {...props}>
    <path
      fill="currentColor"
      d="m10.1 15.55-.1.1-.11-.1C5.14 11.24 2 8.39 2 5.5 2 3.5 3.5 2 5.5 2c1.54 0 3.04 1 3.57 2.36h1.86C11.46 3 12.96 2 14.5 2c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05M14.5 0c-1.74 0-3.41.81-4.5 2.08C8.91.81 7.24 0 5.5 0 2.42 0 0 2.41 0 5.5c0 3.77 3.4 6.86 8.55 11.53L10 18.35l1.45-1.32C16.6 12.36 20 9.27 20 5.5 20 2.41 17.58 0 14.5 0"
    />
  </svg>
);
export default SvgHeartDefaultIcon;

export default function CommentGradient() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="commentGradient" x1="50%" y1="0%" x2="87%" y2="50%">
          <stop offset="0%" stopColor="currentColor" className="text-secondary" />
          <stop offset="100%" stopColor="currentColor" className="text-primary" />
        </linearGradient>
      </defs>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.39567 11.554C-0.852334 6.037 3.20667 0 9.16367 0H9.48467C11.6243 0.000530196 13.6761 0.850719 15.189 2.36365C16.7019 3.87658 17.5521 5.9284 17.5527 8.068C17.5529 9.24761 17.3208 10.4157 16.8695 11.5056C16.4182 12.5954 15.7566 13.5857 14.9225 14.4198C14.0884 15.2539 13.0981 15.9155 12.0082 16.3668C10.9184 16.8181 9.75027 17.0503 8.57067 17.05H0.750666C0.595286 17.0501 0.4437 17.002 0.316852 16.9123C0.190005 16.8225 0.0941605 16.6956 0.0425619 16.5491C-0.00903667 16.4025 -0.0138415 16.2435 0.0288116 16.0941C0.0714646 15.9447 0.15947 15.8122 0.280666 15.715L2.25167 14.132C2.29381 14.0982 2.32389 14.0518 2.33741 13.9995C2.35093 13.9472 2.34716 13.892 2.32667 13.842L1.39567 11.554ZM9.16367 1.5C4.27067 1.5 0.937666 6.457 2.78367 10.988L3.71567 13.277C3.85767 13.6259 3.88328 14.0114 3.78869 14.376C3.6941 14.7407 3.48437 15.0651 3.19067 15.301L2.88167 15.55H8.57067C9.55329 15.5503 10.5263 15.3569 11.4342 14.981C12.3421 14.6051 13.167 14.054 13.8618 13.3592C14.5566 12.6643 15.1078 11.8394 15.4837 10.9315C15.8596 10.0237 16.0529 9.05062 16.0527 8.068C16.0521 6.32622 15.36 4.65593 14.1284 3.42431C12.8967 2.19268 11.2264 1.50053 9.48467 1.5H9.16367Z"
        fill="url(#commentGradient)"
      />
    </svg>
  );
}

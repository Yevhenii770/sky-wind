export const cross = ({ size = 40, fill = 'red' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    fill={fill}
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="8" fill="#ecfcff" />
    <g fill={fill}>
      <path d="M12 21a9 9 0 1 1 9-9 9 9 0 0 1-9 9zm0-16a7 7 0 1 0 7 7 7 7 0 0 0-7-7z" />
      <path d="M6.34 18.66a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L17 5.63a1 1 0 1 1 1.42 1.42L7.05 18.37a1 1 0 0 1-.71.29z" />
    </g>
  </svg>
);

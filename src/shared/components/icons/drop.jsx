export const drop = ({ size = 20, fill = '#00c0ff' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    fill={fill}
    viewBox="0 0 64 64"
  >
    <linearGradient
      id="a"
      x1="4"
      x2="60"
      y1="32"
      y2="32"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#00c0ff" />
      <stop offset="1" stopColor="#5558ff" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="M49.162 28.352a17.18 17.18 0 0 0-34.311-.001A11.804 11.804 0 0 0 4 40.092a11.665 11.665 0 0 0 .987 4.738 11.8 11.8 0 0 0 10.816 7.065h32.394a11.791 11.791 0 0 0 .965-23.544zm-.965 21.543H15.803a9.8 9.8 0 0 1-8.985-5.87A9.685 9.685 0 0 1 6 40.092a9.807 9.807 0 0 1 9.803-9.79 1 1 0 0 0 1-1 15.197 15.197 0 0 1 30.394 0 1 1 0 0 0 1 1 9.796 9.796 0 1 1 0 19.593z"
    />
  </svg>
);

import React from 'react';

export const WeatherSvgSelector = ({ id, size = 24 }) => {
  switch (id) {
    case 'wheather':
      return (
        <svg
          viewBox="0 -1.04 20.077 20.077"
          xmlns="http://www.w3.org/2000/svg"
          width={size}
        >
          <path
            fill="#0096FF"
            d="M15.744 9.8a2.76 2.76 0 0 0-.77.11 4.1 4.1 0 0 0-3.4-1.91 4.27 4.27 0 0 0-4.1 3.79 2.27 2.27 0 0 0-.9-.19 2.61 2.61 0 0 0-2.5 2.7 2.61 2.61 0 0 0 2.5 2.7h9.17a3.47 3.47 0 0 0 3.33-3.6 3.47 3.47 0 0 0-3.33-3.6Z"
          />
          <path
            d="M5.824 11.72a3 3 0 1 1 4.18-3.38"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            data-name="primary"
            d="M7.074 2V1m-4.95 3.05-.71-.71m10.66.71.71-.71m3 6.46a2.76 2.76 0 0 0-.77.11A4.1 4.1 0 0 0 11.574 8a4.27 4.27 0 0 0-4.1 3.79 2.27 2.27 0 0 0-.9-.19 2.61 2.61 0 0 0-2.5 2.7 2.61 2.61 0 0 0 2.5 2.7h9.17a3.47 3.47 0 0 0 3.33-3.6 3.47 3.47 0 0 0-3.33-3.6Z"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      );
    default:
      break;
  }
};

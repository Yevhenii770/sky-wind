import React from 'react';

export const WeatherHumiditySvgSelector = ({ id }) => {
  switch (id) {
    case 'humidity':
      return (
        <svg
          viewBox="0 0 1024 1024"
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
        >
          <path
            d="M339.7 882.5C196.6 882.5 80.2 766.1 80.2 623c0-133.2 204.8-395.1 228.2-424.5 5.8-7.3 14.5-11.6 23.8-11.7 9.4-.1 18.1 3.9 24.1 11 1.5 1.8 37.7 44.8 82.2 105.2 10.1 13.8 7.2 33.2-6.6 43.3-13.8 10.1-33.2 7.2-43.3-6.6-21.3-29-40.9-54-55.3-72.1-69.2 92-191.2 271.5-191.2 355.4 0 108.9 88.6 197.6 197.6 197.6S537.3 731.9 537.3 623c0-17.1 13.9-31 31-31s31 13.9 31 31c-.1 143.1-116.5 259.5-259.6 259.5z"
            fill="#1A1A1A"
          />
          <path
            d="M363.7 468.8c-27.9 59.7-46.8 115.7-46.8 158.4 0 164.6 133.4 298 298 298s298-133.4 298-298c0-12.8-1.9-26.9-5.5-41.9-327.2 33.9-284.9-194.9-543.7-116.5z"
            fill="#0096FF"
          />
          <path
            d="M333.6 567.6c-38.2 239.9 123 357.7 287.3 357.7 92.8 0 144.9-12.1 199.6-78.6-261.5 20.7-428.7-99.2-486.9-279.1z"
            fill="#009957"
          />
          <path
            d="M614.9 956.1C433.5 956.1 286 808.5 286 627.2c0-173.4 283.4-532.4 295.5-547.6 5.8-7.3 14.5-11.6 23.8-11.7 9.3-.1 18.1 3.9 24.1 11 2 2.3 49 58.2 106.8 136.6 10.1 13.8 7.2 33.2-6.6 43.3-13.8 10.1-33.2 7.2-43.3-6.6-31.8-43.2-60.6-79.8-79.9-103.7C517 266.1 347.9 512.3 347.9 627.2c0 147.2 119.8 267 267 267s267-119.8 267-267c0-29.7-13.2-87.9-76.4-196.2-8.6-14.8-3.6-33.7 11.2-42.3 14.8-8.6 33.7-3.6 42.3 11.2 57.1 97.9 84.8 172.2 84.8 227.4 0 181.3-147.6 328.8-328.9 328.8z"
            fill="#1A1A1A"
          />
        </svg>
      );

    default:
      break;
  }
};

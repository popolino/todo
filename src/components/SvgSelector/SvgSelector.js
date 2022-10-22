import React from "react";

export const SvgSelector = ({ className, id }) => {
  const svgMap = {
    trash: (
      <svg
        className={className}
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.5" width="40" height="40" rx="8" fill="#F8F8F8" />
        <path
          d="M29 13.98C25.67 13.65 22.32 13.48 18.98 13.48C17 13.48 15.02 13.58 13.04 13.78L11 13.98"
          stroke="#6F767E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5 12.97L16.72 11.66C16.88 10.71 17 10 18.69 10H21.31C23 10 23.13 10.75 23.28 11.67L23.5 12.97"
          stroke="#6F767E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.85 17.14L26.2 27.21C26.09 28.78 26 30 23.21 30H16.79C14 30 13.91 28.78 13.8 27.21L13.15 17.14"
          stroke="#6F767E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.33 24.5H21.66"
          stroke="#6F767E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 20.5H22.5"
          stroke="#6F767E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    checkboxUnchecked: (
      <svg
        className={className}
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.9713 33.5H22.9713C30.4713 33.5 33.4713 30.5 33.4713 23L33.4713 14C33.4713 6.5 30.4713 3.5 22.9713 3.5H13.9713C6.47127 3.5 3.47127 6.5 3.47127 14L3.47127 23C3.47127 30.5 6.47127 33.5 13.9713 33.5Z"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.34"
          d="M12.0963 18.5L16.3413 22.745L24.8463 14.255"
          stroke="#3B3B3B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    checkboxChecked: (
      <svg
        className={className}
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.7563 3.5H12.1863C6.72627 3.5 3.47127 6.755 3.47127 12.215L3.47127 24.77C3.47127 30.245 6.72627 33.5 12.1863 33.5H24.7413C30.2013 33.5 33.4563 30.245 33.4563 24.785L33.4563 12.215C33.4713 6.755 30.2163 3.5 24.7563 3.5ZM25.6413 15.05L17.1363 23.555C16.9263 23.765 16.6413 23.885 16.3413 23.885C16.0413 23.885 15.7563 23.765 15.5463 23.555L11.3013 19.31C10.8663 18.875 10.8663 18.155 11.3013 17.72C11.7363 17.285 12.4563 17.285 12.8913 17.72L16.3413 21.17L24.0513 13.46C24.4863 13.025 25.2063 13.025 25.6413 13.46C26.0763 13.895 26.0763 14.6 25.6413 15.05Z"
          fill="#469D3E"
        />
      </svg>
    ),
  };
  if (!svgMap.hasOwnProperty(id)) {
    console.warn(`Svg with id ${id} doesn't exist`);
    return svgMap.placeholder;
  }
  return svgMap[id];
};

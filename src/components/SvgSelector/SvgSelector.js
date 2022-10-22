import React from "react";

export const SvgSelector = ({className, id}) => {
  const svgMap = {
    messenger: (
      <svg className={className} viewBox="0 0 200 200">
        <path
          d="M191,91.5c0,45.56-40.74,82.5-91,82.5a98.81,98.81,0,0,1-36.15-6.77C62.6,169.07,53.93,181.3,41,185c-14,4-32,6-32,6s12-13,17-22a161.79,161.79,0,0,0,8.93-19.82C18.88,134.29,9,113.94,9,91.5,9,45.94,49.74,9,100,9S191,45.94,191,91.5Z"
          fill="none"
          strokeLinejoin="round"
          strokeWidth="18"
        />
      </svg>
    ),
    trash: (
      <svg className={className} width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.5" width="40" height="40" rx="8" fill="#F8F8F8"/>
        <path d="M29 13.98C25.67 13.65 22.32 13.48 18.98 13.48C17 13.48 15.02 13.58 13.04 13.78L11 13.98" stroke="#6F767E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.5 12.97L16.72 11.66C16.88 10.71 17 10 18.69 10H21.31C23 10 23.13 10.75 23.28 11.67L23.5 12.97" stroke="#6F767E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26.85 17.14L26.2 27.21C26.09 28.78 26 30 23.21 30H16.79C14 30 13.91 28.78 13.8 27.21L13.15 17.14" stroke="#6F767E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.33 24.5H21.66" stroke="#6F767E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.5 20.5H22.5" stroke="#6F767E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

    ),
    tickSquare: (
      <svg className={className} width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.9713 33.5H22.9713C30.4713 33.5 33.4713 30.5 33.4713 23L33.4713 14C33.4713 6.5 30.4713 3.5 22.9713 3.5H13.9713C6.47127 3.5 3.47127 6.5 3.47127 14L3.47127 23C3.47127 30.5 6.47127 33.5 13.9713 33.5Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path opacity="0.34" d="M12.0963 18.5L16.3413 22.745L24.8463 14.255" stroke="#3B3B3B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  };
  if (!svgMap.hasOwnProperty(id)) {
    console.warn(`Svg with id ${id} doesn't exist`);
    return svgMap.placeholder;
  }
  return svgMap[id];
};

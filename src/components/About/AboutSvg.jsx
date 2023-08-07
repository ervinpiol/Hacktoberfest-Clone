import React from "react";

const AboutSvg = () => {
  return (
    <div className="origin-top-right absolute top-10 right-10 scale-[2] w-[120px] overflow-hidden container-anim filter-shadow flex items-center flex-col">
      <div className="mb-1.5 relative flex justify-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 0H18V3H6V0Z" fill="currentColor"></path>
          <path d="M3 6V3H6V6H3Z" fill="currentColor"></path>
          <path d="M3 6V12H0V6H3Z" fill="currentColor"></path>
          <path d="M21 6H18V3H21V6Z" fill="currentColor"></path>
          <path d="M21 18V6H24V18H21Z" fill="currentColor"></path>
          <path d="M18 21V18H21V21H18Z" fill="currentColor"></path>
          <path d="M9 21H18V24H9V21Z" fill="currentColor"></path>
          <path d="M6 21V18H9V21H6Z" fill="currentColor"></path>
          <path d="M3 21H6V24H3V21Z" fill="currentColor"></path>
          <path d="M3 21H0V18H3V21Z" fill="currentColor"></path>
        </svg>
      </div>
      <div className="w-[66px] h-[63px] flex justify-center items-center relative">
        <div className="w-3/5 h-4/5 flex items-center absolute top-2 overflow-hidden">
          <svg
            className="wave"
            width="252"
            height="60"
            viewBox="0 0 252 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 33H0V36H3L3 39H15V36L27 36V39H39V36L41.9999 36V33H38.9999L39 36H27V33H15V36H3V33Z"
              fill="currentColor"
            ></path>
            <path
              d="M57 33H41.9999V36H57V39H63V36H72V39H87V36L99 36V39H105V36H111V39H120V36H129V39H141V36L153 36V39H165V36L168 36V33H165L165 36H153V33H141V36L129 36V33H120V36L111 36V33H105V36H99V33H87V36H72V33H63V36L57 36V33Z"
              fill="currentColor"
            ></path>
            <path
              d="M183 33H168V36H183V39H189V36H198V39H213V36L225 36V39H231V36H237V39H246V36L252 36V33H246V36L237 36V33H231V36H225V33H213V36H198V33H189V36L183 36V33Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <svg
          width="66"
          height="66"
          viewBox="0 0 66 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 0H9H12H15H18H21H24H27H30H33H36H39H42H45H48H51H54H57H60V3H57H54H51H48H45H42H39H36H33H30H27H24H21H18H15H12H9H6V0ZM3 6V3H6V6H3ZM3 48H0V45V42V39V36V33V30V27V24V21V18V15V12V9V6H3V9V12V15V18V21V24V27V30V33V36V39V42V45V48ZM6 51H3V48H6V51ZM42 51H39H36H33H30H27H24H21H18H15H12H9H6V54H3V57H0V60V63H3V66H6H9H12H15H18H21H24H27H30H33H36H39H42H45H48H51H54H57V63H60V66H63V63H66V60V57H63V54H60V51H63V48H66V45V42V39V36V33V30V27V24V21V18V15V12V9V6H63V3H60V6H63V9V12V15V18V21V24V27V30V33V36V39V42V45V48H60V51H57H54H51H48H45H42ZM42 54H39H36H33H30H27H24H21H18H15H12H9H6V57H3V60V63H6H9H12H15H18H21H24H27H30H33H36H39H42H45H48H51H54H57V60V57H60V60V63H63V60V57H60V54H57H54H51H48H45H42ZM57 30V27V24V21V18V15V12V9H60V12V15V18V21V24V27V30V33V36V39V42V45H57V42V39V36V33V30ZM9 45H12H15H18H21H24H27H30H33H36H39H42H45H48H51H54H57V48H54H51H48H45H42H39H36H33H30H27H24H21H18H15H12H9V45ZM9 45H6V42H9V45ZM9 9V6H12H15H18H21H24H27H30H33H36H39H42H45H48H51H54H57V9H54H51H48H45H42H39H36H33H30H27H24H21H18H15H12H9ZM9 9V12H6V9H9ZM12 57H9V60H12V57ZM15 57H18H21H24V60H21H18H15V57Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default AboutSvg;

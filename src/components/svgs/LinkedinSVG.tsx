import { ComponentPropsWithoutRef } from "react";

type LinkedinSVGProps = ComponentPropsWithoutRef<"svg">;

export function LinkedinSVG({ className }: LinkedinSVGProps) {
  return (
    <svg
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g>
        <path
          d="M13.5 2.25C14.0967 2.25 14.669 2.48705 15.091 2.90901C15.5129 3.33097 15.75 3.90326 15.75 4.5V13.5C15.75 14.0967 15.5129 14.669 15.091 15.091C14.669 15.5129 14.0967 15.75 13.5 15.75H4.5C3.90326 15.75 3.33097 15.5129 2.90901 15.091C2.48705 14.669 2.25 14.0967 2.25 13.5V4.5C2.25 3.90326 2.48705 3.33097 2.90901 2.90901C3.33097 2.48705 3.90326 2.25 4.5 2.25H13.5ZM6 7.5C5.80109 7.5 5.61032 7.57902 5.46967 7.71967C5.32902 7.86032 5.25 8.05109 5.25 8.25V12C5.25 12.1989 5.32902 12.3897 5.46967 12.5303C5.61032 12.671 5.80109 12.75 6 12.75C6.19891 12.75 6.38968 12.671 6.53033 12.5303C6.67098 12.3897 6.75 12.1989 6.75 12V8.25C6.75 8.05109 6.67098 7.86032 6.53033 7.71967C6.38968 7.57902 6.19891 7.5 6 7.5ZM8.25 6.75C8.05109 6.75 7.86032 6.82902 7.71967 6.96967C7.57902 7.11032 7.5 7.30109 7.5 7.5V12C7.5 12.1989 7.57902 12.3897 7.71967 12.5303C7.86032 12.671 8.05109 12.75 8.25 12.75C8.44891 12.75 8.63968 12.671 8.78033 12.5303C8.92098 12.3897 9 12.1989 9 12V9.255C9.22875 8.997 9.615 8.694 10.0447 8.51025C10.2945 8.40375 10.6702 8.36025 10.9312 8.44275C11.0178 8.46472 11.0949 8.5142 11.151 8.58375C11.19 8.63625 11.25 8.75325 11.25 9V12C11.25 12.1989 11.329 12.3897 11.4697 12.5303C11.6103 12.671 11.8011 12.75 12 12.75C12.1989 12.75 12.3897 12.671 12.5303 12.5303C12.671 12.3897 12.75 12.1989 12.75 12V9C12.75 8.4975 12.6225 8.0505 12.357 7.692C12.1127 7.36692 11.7708 7.12854 11.3813 7.01175C10.7048 6.7995 9.9555 6.91725 9.45525 7.13175C9.29497 7.20035 9.13894 7.27849 8.988 7.36575C8.95656 7.19294 8.86546 7.03665 8.7306 6.92412C8.59573 6.8116 8.42565 6.74997 8.25 6.75ZM6 5.25C5.80109 5.25 5.61032 5.32902 5.46967 5.46967C5.32902 5.61032 5.25 5.80109 5.25 6C5.25 6.19891 5.32902 6.38968 5.46967 6.53033C5.61032 6.67098 5.80109 6.75 6 6.75C6.19891 6.75 6.38968 6.67098 6.53033 6.53033C6.67098 6.38968 6.75 6.19891 6.75 6C6.75 5.80109 6.67098 5.61032 6.53033 5.46967C6.38968 5.32902 6.19891 5.25 6 5.25Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_81_239">
          <rect width="18" height="18" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}

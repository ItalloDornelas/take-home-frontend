import { Button as ButtonType } from "@/utils/models/model";

export const Button = ({ text }: ButtonType) => {
  return (
    <button className="w-full bg-[#1E6F9F] hover:bg-blue-100 text-white font-semibold py-2 px-6 mt-8 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-300 flex gap-2 justify-center items-center">
      <span className="text-[14px] font-semibold leading-[19.6px] text-left ">
        {text}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </button>
  );
};

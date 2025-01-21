import { Button as ButtonType } from "@/utils/models/commun.model";
import { Check, CirclePlus } from "lucide-react";

export const Button = ({
  onClick,
  children,
  useIconUpdate = false,
}: ButtonType) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-[#1E6F9F] hover:bg-blue-100 py-2 px-6 mt-8 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-300 flex gap-2 justify-center items-center h-[52px]"
    >
      <span className="text-[14px]">{children}</span>
      {useIconUpdate ? <Check size={16} /> : <CirclePlus size={16} />}
    </button>
  );
};

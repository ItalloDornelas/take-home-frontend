import { Header as HeaderType } from "@/utils/models/model";

import Image from "next/image";
import { Button } from "../Button";

export const Header = ({ useButton = true }: HeaderType) => {
  return (
    <>
      <header className="bg-black w-full py-4 shadow-md h-[200px] relative">
        <div className="container mx-auto flex justify-center items-center px-4 w-full h-full">
          <h1 className="flex justify-center items-end gap-3 text-[40px] font-black leading-[48.41px] text-left text-[#5E60CE]">
            <Image
              src="/iconTodo.png"
              width={22}
              height={36}
              alt="todo icon"
              style={{ height: "36px" }}
            />
            <span className="text-[#1E6F9F]">Todo</span> App
          </h1>
        </div>
      </header>
      {useButton && (
        <div className="absolute top-36 w-11/12  max-w-4xl px-6">
          <Button text="Create Task" />
        </div>
      )}
    </>
  );
};

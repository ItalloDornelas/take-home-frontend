"use client";
import Image from "next/image";
import { Button } from "../button";
import { usePathname } from "next/navigation";
import { redirect } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const showButton = pathname.includes("new-or-update") ? false : true;
  return (
    <header className="bg-black w-full py-4 shadow-md h-[200px] relative mb-9">
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
      {showButton && (
        <div className="absolute -bottom-16 w-11/12  max-w-4xl px-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Button onClick={() => redirect("/new-or-update")}>
            {" "}
            Create Task
          </Button>
        </div>
      )}
    </header>
  );
};

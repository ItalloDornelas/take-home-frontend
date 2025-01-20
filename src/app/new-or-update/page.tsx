"use client";
import { InputForm } from "@/components/ui/inputForm";
import { ArrowLeft } from "lucide-react";
import { redirect } from "next/navigation";

export default function NewOrUpdate() {
  return (
    <div className="flex w-full justify-center flex-col gap-6">
      <ArrowLeft
        size={18}
        onClick={() => redirect("/")}
        className="cursor-pointer"
      />
      <InputForm />
    </div>
  );
}

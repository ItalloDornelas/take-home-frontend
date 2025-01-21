"use client";
import { NewOrUpdateForm } from "@/components/new-or-update-form";
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
      <NewOrUpdateForm />
    </div>
  );
}

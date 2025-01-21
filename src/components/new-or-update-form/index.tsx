"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

import { LoadingComponent } from "../ui/loading";
import { TaskForm } from "@/utils/models/tasks.model";
import { onUpdateRequest } from "@/app/api/onUpdateRequest";
import { redirect } from "next/navigation";
import { colors } from "@/utils/const/colors";
import { FormSchema } from "./schema";
import { onSubimitRequest } from "@/app/api/onSubimitRequest";

export const NewOrUpdateForm = ({ task }: TaskForm) => {
  const [validation, setValidation] = useState({
    errorMessage: "",
  });
  const [loading, setLoading] = useState(false);
  const [isEditionMode, setIsEditionMode] = useState(task ? true : false);
  const [colorSelected, setColorSelected] = useState(task ? task.color : "");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: task ? task.title : "",
    },
  });

  form.watch((data) => {
    if (data.title) {
      setValidation({ errorMessage: "" });
    }
  });

  const onSubmit = async (formData: FormData) => {
    setLoading(true);
    const title = formData.get("title") as string;
    if (title.trim() === "") {
      setValidation({ errorMessage: "Mandatory title" });
      setLoading(false);
      return;
    }
    const taskPayload = {
      title,
      color: colorSelected,
      completed: task ? task.completed : false,
    };
    const responseSubmitting = task
      ? await onUpdateRequest({ ...taskPayload, id: task.id }, true)
      : await onSubimitRequest(taskPayload);
    toast({
      title: responseSubmitting.message,
    });
    if (responseSubmitting.success) redirect("/");
    else {
      setLoading(false);
      setIsEditionMode(false);
    }
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form action={onSubmit} className="flex flex-col gap-4">
          <div>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#4EA8DE]">Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ex. Brush you teeth"
                      {...field}
                      className="h-[52px] bg-[#333333]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {validation.errorMessage && (
              <p className="text-red-500">{validation.errorMessage}</p>
            )}
          </div>
          <FormItem>
            <FormLabel className="text-[#4EA8DE]">Color</FormLabel>
            <div className="flex gap-4">
              {colors.map((color) => (
                <button
                  type="button"
                  key={color}
                  className={`w-[52px] h-[52px] rounded-full cursor-pointer ${
                    color === colorSelected && "border-4 border-white"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setColorSelected(color)}
                />
              ))}
            </div>
          </FormItem>

          <Button type="submit" useIconUpdate={isEditionMode ? true : false}>
            {loading ? (
              <LoadingComponent />
            ) : isEditionMode ? (
              "Save"
            ) : (
              "Add Task"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

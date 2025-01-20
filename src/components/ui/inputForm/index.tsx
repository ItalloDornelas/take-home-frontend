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
import { onSubimitRequest } from "../../../utils/functions/onSubimitRequest";
import { redirect } from "next/navigation";
import { LoadingComponent } from "../loading";

const FormSchema = z.object({
  title: z
    .string({ required_error: "Mandatory title" })
    .min(1, { message: "Mandatory title" }),
});

export const InputForm = () => {
  const [validation, setValidation] = useState({
    errorMessage: "",
  });
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
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
    const task = {
      title,
      color,
      completed: false,
    };
    const responseSubmitting = await onSubimitRequest(task);
    toast({
      title: responseSubmitting.message,
    });
    if (responseSubmitting.success) redirect("/");
    else setLoading(false);
  };

  const colors = [
    "#FF3B30",
    "#FF9500",
    "#FFCC00",
    "#34C759",
    "#007AFF",
    "#5856D6",
    "#AF52DE",
    "#FF2D55",
    "#A2845E",
  ];

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
                  className="w-[52px] h-[52px] rounded-full cursor-pointer"
                  style={{ backgroundColor: color }}
                  onClick={() => setColor(color)}
                />
              ))}
            </div>
          </FormItem>

          <Button type="submit">
            {loading ? <LoadingComponent /> : "Add Task"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

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

const FormSchema = z.object({
  title: z
    .string({ required_error: "Mandatory title" })
    .min(1, { message: "Mandatory title" }),
  color: z.string(),
});

export const InputForm = () => {
  const [validation, setValidation] = useState({
    errorMessage: "",
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      color: "",
    },
  });

  const onSubmit = (formData: FormData) => {
    const contactFormData = Object.fromEntries(formData);
    const validatedContactFormData = FormSchema.safeParse(contactFormData);
    console.log(contactFormData, "contactFormData");
    if (!validatedContactFormData.success) {
      const formFieldErrors =
        validatedContactFormData.error.flatten().fieldErrors;
      const errorMessage = Object.values(formFieldErrors)[0]?.[0];
      setValidation({ errorMessage });
    }
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
          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#4EA8DE]">Color</FormLabel>
                <div className="flex gap-4">
                  {colors.map((color) => (
                    <div
                      key={color}
                      className="w-[52px] h-[52px] rounded-full cursor-pointer"
                      style={{ backgroundColor: color }}
                      {...field}
                    />
                  ))}
                </div>
              </FormItem>
            )}
          />

          <Button type="submit">Add Task</Button>
        </form>
      </Form>
    </div>
  );
};

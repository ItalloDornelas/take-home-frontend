import { z } from "zod";

export const FormSchema = z.object({
  title: z
    .string({ required_error: "Mandatory title" })
    .min(1, { message: "Mandatory title" }),
});

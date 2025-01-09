import { z } from "zod"
import { categories, types } from "./consts"


export const transactionSchema = z.object({
  type: z.enum(types),
  category: z.enum(categories),
  amount: z.coerce.number().min(1, {
    message: "Amount must be greater than 0"
  }),
  description: z.string().min(1, {
    message: "Description is required"
  }),
  created_at: z.string().refine(
    (val) => {
      const [day, month, year] = val.split('/').map(Number);
      const date = new Date(year, month - 1, day);
      return date.getDate() === day && date.getMonth() === month - 1 && date.getFullYear() === year;
    },
    {
      message: "Invalid date"
    }
  ).refine(
    (val) => {
      const [day, month, year] = val.split('/').map(Number);
      const inputDate = new Date(year, month - 1, day);
      const currentDate = new Date();
      return inputDate <= currentDate;
    },
    {
      message: "Date cannot be in the future"
    }
  )
})
import z from "zod";

export const dayHabitSchema = z.object({
  date: z.coerce.date(),
});

export const createHabitSchema = z.object({
  title: z.string(),
  weekDays: z.array(z.number().min(0).max(6)),
});

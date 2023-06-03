import { FastifyInstance } from "fastify";

import dayjs from "dayjs";

import { prisma } from "./libs/prisma";
import { createHabitSchema, dayHabitSchema } from "./schemas/main";

interface Params {
  id: string;
}

export async function appRoutes(app: FastifyInstance) {
  // API Running

  app.get("/", async () => {
    return "API Running";
  });

  // Habits

  app.get("/list-habits", async () => {
    const listHabits = await prisma.habit.findMany();
    return {
      listHabits,
    };
  });

  app.get("/habit/:id", async (request) => {
    const { id } = request.params as Params;
    const habit = await prisma.habit.findMany({
      where: {
        id: {
          equals: id,
        },
      },
    });
    return habit;
  });

  app.get("/day-infor", async (request) => {
    const { date } = dayHabitSchema.parse(request.query);

    const parseDate = dayjs(date).startOf("day");
    const weekDay = parseDate.get("day");

    const dayInfor = await prisma.habit.findMany({
      where: {
        created_at: {
          lte: date,
        },
        weekDays: {
          some: {
            week_day: weekDay,
          },
        },
      },
    });

    const day = await prisma.day.findUnique({
      where: {
        date: parseDate.toDate(),
      },
      include: {
        dayHabits: true,
      },
    });

    const completedHabits = day?.dayHabits.map((dayHabit) => {
      return dayHabit.habit_id;
    });

    return {
      dayInfor,
      completedHabits,
    };
  });

  app.post("/create-habit", async (request) => {
    const { title, weekDays } = createHabitSchema.parse(request.body);

    const today = dayjs().startOf("day").toDate();

    const createHabit = await prisma.habit.create({
      data: {
        title,
        created_at: today,
        weekDays: {
          create: weekDays.map((weekDay) => {
            return {
              week_day: weekDay,
            };
          }),
        },
      },
    });

    return createHabit;
  });
}

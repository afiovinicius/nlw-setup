import { useRef } from "react";

import dayjs from "dayjs";

import { Header } from "../../components/Header";
import { ItemHabit } from "../../components/ItemHabit";
import { ModalNewHabit } from "../../components/Modal/ModalNewHabit";

import { Container } from "../../styles/globalStyles";
import { SectionBody, HabitsBody, BarHabits, ViewHabits } from "./styles";

export function generateDatesFromYearBeginning() {
  const firstDayOfTheYear = dayjs().startOf("year");
  const today = new Date();

  const dates = [];
  let compareDate = firstDayOfTheYear;

  while (compareDate.isBefore(today)) {
    dates.push(compareDate.toDate());
    compareDate = compareDate.add(1, "day");
  }

  return dates;
}

const rangeDays = generateDatesFromYearBeginning();

export const Home = () => {
  const daysWeek = ["D", "S", "T", "Q", "Q", "S", "S"];

  const modalNewHabitRef = useRef();

  return (
    <>
      <ModalNewHabit ref={modalNewHabitRef} />
      <SectionBody>
        <Container>
          <Header openModal={modalNewHabitRef} />
          <HabitsBody>
            <BarHabits>
              {daysWeek.map((day: string, index: number) => (
                <p key={index}>{day}</p>
              ))}
            </BarHabits>
            <ViewHabits>
              {rangeDays.map((date: any) => (
                <ItemHabit key={date.toString()} />
              ))}
            </ViewHabits>
          </HabitsBody>
        </Container>
      </SectionBody>
    </>
  );
};

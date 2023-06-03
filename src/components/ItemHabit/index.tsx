import { CheckBox } from "../Forms/Checkbox";
import {
  ItemArrow,
  ItemContent,
  ItemRoot,
  ItemTrigger,
  ProgressIndicator,
  ProgressRoot,
} from "./styles";

export const ItemHabit = (props: any) => {
  const inforDays = [
    {
      day: "terça-feira",
      date: "05/05",
      checked: true,
      progress: "done",
      habits: ["task 1", "task 2", "task 3"],
    },
  ];

  return (
    <>
      {inforDays.map((infor: any, index: any) => (
        <ItemRoot openDelay={300} key={index}>
          <ItemTrigger status={infor.progress} />
          <ItemContent>
            <div className="habit_infor">
              <div className="title">
                <h5>{infor.day}</h5>
                <h2>{infor.date}</h2>
              </div>
              <ProgressRoot>
                <ProgressIndicator status={infor.progress} />
              </ProgressRoot>
            </div>
            <div className="task_habit">
              {infor.habits.map((checks: any, index: any) => (
                <CheckBox key={index} checked={infor.checked} label={checks} />
              ))}
            </div>
            <ItemArrow />
          </ItemContent>
        </ItemRoot>
      ))}
    </>
  );
};

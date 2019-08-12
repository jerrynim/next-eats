import produce from "immer";
import { createStandardAction, ActionType, getType } from "typesafe-actions";

export type Chart = {
  hamburgerNum: number;
  pizzaNum: number;
  saladNum: number;
  total: number;
};

//type정의
const INCREASE_H_NUM = "chart/INCREASE_H_NUM";
const INCREASE_P_NUM = "chart/INCREASE_P_NUM";
const INCREASE_S_NUM = "chart/INCREASE_S_NUM";
//action생성

const increaseHNum = createStandardAction(INCREASE_H_NUM)();
const increasePNum = createStandardAction(INCREASE_P_NUM)();
const increaseSNum = createStandardAction(INCREASE_S_NUM)();

//액션 타입정의

export type IncreaseHNum = ActionType<typeof increaseHNum>;
export type IncreasePNum = ActionType<typeof increasePNum>;
export type IncreaseSNum = ActionType<typeof increaseSNum>;

type Actions = IncreasePNum | IncreaseHNum | IncreaseSNum;
/*
   saga
*/

const initialState: Chart = {
  hamburgerNum: 0,
  pizzaNum: 0,
  saladNum: 0,
  total: 0
};

/*
  Reducer
*/

const chart = (state = initialState, action: Actions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case getType(increaseHNum):
        draft.hamburgerNum = draft.hamburgerNum + 1;
        draft.total += 6000;
        return draft;
      case getType(increasePNum):
        draft.pizzaNum = draft.pizzaNum + 1;
        draft.total += 8000;

        return draft;
      case getType(increaseSNum):
        draft.saladNum = draft.saladNum + 1;
        draft.total += 7000;

        return draft;
      default:
        return;
    }
  });
export default chart;

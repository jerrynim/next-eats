import produce from "immer";
import { createStandardAction, ActionType, getType } from "typesafe-actions";
import { put, takeEvery } from "redux-saga/effects";

export type Menu = {
  name: string;
  price: number;
  image: string;
};

//type정의
const TRIGGER_GET_MENU = "chart/TRIGGER_GET_MENU";
const GET_MENU = "chart/GET_MENU";

//action생성
const triggerGetMenu = createStandardAction(TRIGGER_GET_MENU)();
const getMenu = createStandardAction(GET_MENU)<Array<Menu>>();

//액션 타입정의
export type GetMenu = ActionType<typeof getMenu>;
export type TriggerGetMenu = ActionType<typeof triggerGetMenu>;

type Actions = GetMenu | TriggerGetMenu;
/*
   saga
*/

export function* asyncGetMenu() {
  try {
    const fetched = yield fetch("http://localhost:3000/api/menu").then(
      (response) => response.json()
    );
    //{menus: Array(3)}
    yield put<GetMenu>({ type: "chart/GET_MENU", payload: fetched.menus });
  } catch (e) {
    console.log(e.message);
  }
}

export function* saga() {
  yield takeEvery("chart/TRIGGER_GET_MENU", asyncGetMenu);
}

const initialState: Array<Menu> = [];

/*
  Reducer
*/

export const chart = (state = initialState, action: Actions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case getType(triggerGetMenu):
        return;
      case getType(getMenu):
        return action.payload;
      default:
        return;
    }
  });

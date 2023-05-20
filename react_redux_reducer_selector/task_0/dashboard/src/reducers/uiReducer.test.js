import { initialState, uiReducer } from "./uiReducer";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

describe("reducer tests", function () {
  it("verifying the state returned by the uiReducer function " +
    "equals the initial state when no action is passed", () => {
      const result = initialState;
      expect(uiReducer(initialState, '')).toEqual(result);
    });

  it("verifying the state returned by the uiReducer function " +
    "equals the initial state when the action SELECT_COURSE", () => {
      const result = initialState;
      expect(uiReducer(initialState, { type: 'SELECT_COURSE' })).toEqual(result);
    });

  it("verifying the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER " +
    "is passed, changes correctly the isNotificationDrawerVisible property", () => {
      const result = { ...initialState, isNotificationDrawerVisible: true };
      expect(uiReducer(initialState, { type: 'DISPLAY_NOTIFICATION_DRAWER' })).toEqual(result);
    });
});

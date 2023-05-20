import { initialState, uiReducer } from "./uiReducer";
import { Map } from 'immutable';

describe("reducer tests", function () {
  it("verifying the state returned by the uiReducer function " +
    "equals the initial state when no action is passed", () => {
      const result = Map(initialState);
      expect(uiReducer(initialState, '')).toEqual(result);
    });

  it("verifying the state returned by the uiReducer function " +
    "equals the initial state when the action SELECT_COURSE", () => {
      const result = Map(initialState);
      expect(uiReducer(initialState, { type: 'SELECT_COURSE' })).toEqual(result);
    });

  it("verifying the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER " +
    "is passed, changes correctly the isNotificationDrawerVisible property", () => {
      const result = Map(initialState).set('isNotificationDrawerVisible', true);
      expect(uiReducer(initialState, { type: 'DISPLAY_NOTIFICATION_DRAWER' })).toEqual(result);
    });
});

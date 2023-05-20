import expect from 'expect';
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login,
  logout,
  loginFailure,
  loginSuccess,
} from './uiActionCreators';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './uiActionTypes';
import fetchMock from "fetch-mock";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Action creators', () => {
  it('Verify login action', () => {
    const result = { type: LOGIN, user: { email: 'Joe@gmail.com', password: '12345' } };
    expect(login('Joe@gmail.com', '12345')).toEqual(result);
  });

  it('Verify logout action', () => {
    const result = { type: LOGOUT };
    expect(logout()).toEqual(result);
  });

  it('Verify displayNotificationDrawer action', () => {
    const result = { type: DISPLAY_NOTIFICATION_DRAWER };
    expect(displayNotificationDrawer()).toEqual(result);
  });

  it('Verify hideNotificationDrawer action', () => {
    const result = { type: HIDE_NOTIFICATION_DRAWER };
    expect(hideNotificationDrawer()).toEqual(result);
  });

  describe("Async action creators", () => {
    it('Verify login success action', () => {
      const initialState = {};
      const store = mockStore(initialState);

      const user = {
        email: 'faykris28@gmail.com',
        password: '1234',
      };

      const expectedLoginResult = {
        type: LOGIN,
        user: {
          email: user.email,
          password: user.password,
        },
      };

      const expectedSuccessResult = {
        type: LOGIN_SUCCESS,
      };

      let url = '../../dist/login-success.json';
      let r = fetchMock.mock(url, 200);
      fetch(url)
        .then(res => {
          if (res.ok) {
            store.dispatch(loginSuccess());
            let loginRes = store.getActions()[0];
            let successRes = store.getActions()[1];
            expect(loginRes).toMatchObject(expectedLoginResult);
            expect(successRes).toMatchObject(expectedSuccessResult);
          }
        })
        .catch(() => {
          store.dispatch(loginFailure());
        });
      fetchMock.restore();
    });

    it('Verify login failure action', () => {
      const initialState = {};
      const store = mockStore(initialState);

      const user = {
        email: 'faykris28@gmail.com',
        password: '1234',
      };

      const expectedLoginResult = {
        type: LOGIN,
        user: {
          email: user.email,
          password: user.password,
        },
      };

      const expectedFailureResult = {
        type: LOGIN_FAILURE,
      };

      let url = '../../dist/login-success.json';
      let r = fetchMock.mock(url, 500);
      fetch(url)
        .then(res => {
          if (!res.ok) {
            store.dispatch(loginSuccess());
            let loginRes = store.getActions()[0];
            let successRes = store.getActions()[1];
            expect(loginRes).toMatchObject(expectedLoginResult);
            expect(successRes).toMatchObject(expectedFailureResult);
          }
        })
        .catch(() => {
          store.dispatch(loginFailure());
        });

      fetchMock.restore();
    });
  });
});

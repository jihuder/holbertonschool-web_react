import {
  FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ,
  SET_TYPE_FILTER
} from '../actions/notificationActionTypes';
import { notificationReducer, data } from './notificationReducer';

const state = {
  filter: "DEFAULT",
  notifications: [
    {
      id: 1,
      isRead: false,
      type: "default",
      value: "New course available"
    },
    {
      id: 2,
      isRead: false,
      type: "urgent",
      value: "New resume available"
    },
    {
      id: 3,
      isRead: false,
      type: "urgent",
      value: "New data available"
    }
  ]
};

const read = {
  filter: "DEFAULT",
  notifications: [
    {
      id: 1,
      isRead: false,
      type: "default",
      value: "New course available"
    },
    {
      id: 2,
      isRead: true,
      type: "urgent",
      value: "New resume available"
    },
    {
      id: 3,
      isRead: false,
      type: "urgent",
      value: "New data available"
    }
  ]
};

describe('notificationReducer actions', () => {
  it('Verify that the default state returns an empty array', () => {
    const result = {
      filter: "DEFAULT",
      notifications: []
    };
    expect(notificationReducer(undefined, '')).toEqual(result);
  });

  it('Verify FETCH_NOTIFICATIONS_SUCCESS returns the data passed', () => {
    expect(notificationReducer(state, { type: FETCH_NOTIFICATIONS_SUCCESS, data: data }))
      .toEqual(state);
  });

  it('Verify that MARK_AS_READ returns the data passed', () => {
    expect(notificationReducer(state, { type: MARK_AS_READ, index: 2 }))
      .toEqual(read);
  });

  it('Verify that SET_TYPE_FILTER returns the data passed', () => {
    expect(notificationReducer(state, { type: SET_TYPE_FILTER, filter: 'URGENT' }))
      .toEqual({ ...state, filter: 'URGENT' });
  });
});

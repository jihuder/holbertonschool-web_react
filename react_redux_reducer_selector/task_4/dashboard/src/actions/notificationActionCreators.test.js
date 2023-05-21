import expect from 'expect';
import { MARK_AS_READ, NotificationTypeFilters, SET_TYPE_FILTER } from './notificationActionTypes';
import { markAsAread, setNotificationFilter } from './notificationActionCreators';

describe('Notification action creator', () => {
  it('Verify markAsAread action', () => {
    const result = { type: MARK_AS_READ, index: 1 };
    expect(markAsAread(1)).toEqual(result);
  });

  it('Verify setNotificationFilter action with DEFAULT filter', () => {
    const result = { type: SET_TYPE_FILTER, filter: 'DEFAULT' };
    expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual(result);
  });

  it('Verify setNotificationFilter action with URGENT filter', () => {
    const result = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    expect(setNotificationFilter(NotificationTypeFilters.URGENT)).toEqual(result);
  });
});
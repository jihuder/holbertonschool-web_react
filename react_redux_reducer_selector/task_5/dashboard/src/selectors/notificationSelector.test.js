import { Map, fromJS } from "immutable";
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from "./notificationSelector";
import notificationReducer, {
  initialNotificationState,
} from "../reducers/notificationReducer";
import notificationsNormalizer from "../schema/notifications";

describe("Notification selectors", function () {
  it("Validate filterTypeSelected works as expected", () => {
    const state = notificationReducer(undefined, {});

    const selected = filterTypeSelected(state);

    expect(selected).toEqual(initialNotificationState.filter);
  });

  it("Validate getNotifications returns a list of the message entities within the reducer", () => {
    const initialState = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };

    initialState.notifications = notificationsNormalizer(
      initialState.notifications
    ).notifications;
    const state = notificationReducer(fromJS(initialState), {});
    const selected = getNotifications(state);
    expect(state instanceof Map).toEqual(true);
    expect(selected.toJS()).toEqual(
      notificationsNormalizer(initialState.notifications).notifications
    );
  });

  it("Validate getUnreadNotifications return a list of the message entities within the reducer", () => {
    const initialState = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: true,
          type: "urgent",
          value: "New data available",
        },
      ],
    };

    const expectedResult = [
      {
        id: 3,
        isRead: true,
        type: "urgent",
        value: "New data available",
      },
    ];

    initialState.notifications = notificationsNormalizer(
      initialState.notifications
    ).notifications;

    const state = notificationReducer(fromJS(initialState), {});
    const selected = getUnreadNotifications(state);
    expect(state instanceof Map).toEqual(true);
    expect(selected.toJS()).toEqual(
      notificationsNormalizer(expectedResult).notifications
    );
  });

});

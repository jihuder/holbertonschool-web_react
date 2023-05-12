import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import {getLatestNotification} from "../utils/utils";

describe('<Notifications />', () => {
  let listNotifications;
  let latestNotification;

  it('if <Notifications /> renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('If menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('div.menuItem')).toHaveLength(1);
  });

  it('If div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false}/>);
    expect(wrapper.find('div.Notifications')).toHaveLength(0);
  });

  it('If menu item is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('div.menuItem')).toHaveLength(1);
  });

  it('If div.Notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('div.Notifications')).toHaveLength(1);
  });

  it('if <Notifications /> renders three list items', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications ul')).toHaveLength(1);
  });

  describe("Notifications without listNotifications or empty listNotifications", () => {
    beforeEach(() => {
      listNotifications = [];
    });

    it('Notifications renders Notification Item correct with empty listNotifications', () => {
      const wrapper = shallow(
        <Notifications displayDrawer listNotifications={ listNotifications } />
      );
      expect(wrapper.find("NotificationItem").html()).toEqual(
        '<li data-notification-type="default">No new notification for now</li>'
      );
    });

    it('Notifications renders Notification Item correct without listNotifications', () => {
      const wrapper = shallow(<Notifications displayDrawer />);
      expect(wrapper.find("NotificationItem").html()).toEqual(
        '<li data-notification-type="default">No new notification for now</li>'
      );
    });

    it('Notifications when calling the function markAsRead on an instance of the component', () => {
      const wrapper = shallow(<Notifications displayDrawer />);
      console.log = jest.fn();

      const instance = wrapper.instance();
      const id = 5;
      instance.markAsRead(id);

      expect(console.log).toHaveBeenCalledWith(`Notification ${id} has been marked as read`);
      jest.restoreAllMocks();
    });
  });

  describe('Notifications with listNotifications property and elements', () => {
    beforeEach(() => {
      latestNotification = getLatestNotification();
      listNotifications = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: latestNotification } },
      ];
    });

    it('Notifications renders Notification Items and have the correct html', () => {
      const wrapper = shallow(
        <Notifications displayDrawer listNotifications={ listNotifications } />
      );
      expect(wrapper.find("NotificationItem").at(0).html()).toEqual(
        '<li data-notification-type="default">New course available</li>'
      );
      expect(wrapper.find("NotificationItem").at(1).html()).toEqual(
        '<li data-notification-type="urgent">New resume available</li>'
      );
      expect(wrapper.find("NotificationItem").at(2).html()).toEqual(
        `<li data-notification-type="urgent">${latestNotification}</li>`
      );
    });
  });
});

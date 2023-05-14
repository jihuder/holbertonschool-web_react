import { shallow, mount } from "enzyme";
import React from "react";
import Notifications from "./Notifications";
import { getLatestNotification } from "../utils/utils";
import { StyleSheetTestUtils } from "aphrodite";

describe("<Notifications />", () => {

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  let listNotifications;
  let latestNotification;

  it("Notifications renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("menu item is being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    const item = wrapper.find("div.menuItem_17tvohd");
    expect(item).toHaveLength(1);
  });

  it("div.Notifications is not being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    const item = wrapper.find("div.Notifications_1pojkqf");
    expect(item).toHaveLength(0);
  });

  it("menu item is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    wrapper.update();
    const item = wrapper.find("div.menuItem_17tvohd");
    expect(item).toHaveLength(1);
  });

  it("div.Notifications is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    wrapper.update();
    const item = wrapper.find("div.menuItem_17tvohd");
    expect(item).toHaveLength(1);
  });

  describe("Notifications with listNotifications", () => {
    beforeAll(() => {
      StyleSheetTestUtils.suppressStyleInjection();
    });
    afterAll(() => {
      StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    beforeEach(() => {
      latestNotification = getLatestNotification();
      listNotifications = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: latestNotification } },
      ];
    });

    it("Notifications renders Notification Items and items have correct html", () => {
      const wrapper = mount(
        <Notifications displayDrawer listNotifications={listNotifications} />
      );
      expect(wrapper.exists());
      wrapper.update();
      const listItems = wrapper.find("NotificationItem");
      expect(listItems).toBeDefined();
      expect(listItems).toHaveLength(3);
    });
  });

  describe("Notifications without listNotifications or empty listNotifications", () => {
    beforeAll(() => {
      StyleSheetTestUtils.suppressStyleInjection();
    });
    afterAll(() => {
      StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    beforeEach(() => {
      listNotifications = [];
    });

    it("Notifications renders Notification Item correct with empty listNotifications", () => {
      const wrapper = mount(
        <Notifications displayDrawer listNotifications={listNotifications} />
      );
      expect(wrapper.exists());
      wrapper.update();
      const listItems = wrapper.find("NotificationItem");
      expect(listItems).toHaveLength(1);
    });

    it("Notifications renders Notification Item correct without listNotifications", () => {
      const wrapper = mount(<Notifications displayDrawer />);
      wrapper.update();
      const listItems = wrapper.find("NotificationItem");
      expect(listItems).toHaveLength(1);
    });

    it("when calling the function markAsRead on an instance of the component, the spy is being called with the right message", () => {
      const wrapper = shallow(<Notifications displayDrawer />);

      console.log = jest.fn();

      const instance = wrapper.instance();

      const id = 5;

      instance.markAsRead(id);

      expect(console.log).toHaveBeenCalledWith(
        `Notification ${id} has been marked as read`
      );
      jest.restoreAllMocks();
    });

    it("does not rerender when updating the props of the component with the same list", () => {
      const listNotifications = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
      ];

      const wrapper = shallow(
        <Notifications displayDrawer listNotifications={listNotifications} />
      );

      const shouldComponentUpdate = jest.spyOn(
        Notifications.prototype,
        "shouldComponentUpdate"
      );

      wrapper.setProps({ listNotifications: listNotifications });

      expect(shouldComponentUpdate).toHaveBeenCalled();
      expect(shouldComponentUpdate).toHaveLastReturnedWith(false);

      jest.restoreAllMocks();
    });

    it("does rerender when updating the props of the component with a longer list", () => {
      let listNotifications = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
      ];

      const listNotifications2 = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: latestNotification } },
      ];

      console.log(listNotifications);
      const wrapper = shallow(
        <Notifications displayDrawer listNotifications={listNotifications} />
      );

      const shouldComponentUpdate = jest.spyOn(
        Notifications.prototype,
        "shouldComponentUpdate"
      );

      wrapper.setProps({ listNotifications: listNotifications2 });

      expect(shouldComponentUpdate).toHaveBeenCalled();
      expect(shouldComponentUpdate).toHaveLastReturnedWith(true);

      jest.restoreAllMocks();
    });
  });

  it("verify that clicking on the menu item calls handleDisplayDrawer", () => {
    const handleDisplayDrawer = jest.fn();
    const handleHideDrawer = jest.fn();

    const wrapper = shallow(
      <Notifications
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
      />
    );

    wrapper.find("div.menuItem_17tvohd").simulate("click");
    expect(handleDisplayDrawer).toHaveBeenCalled();
    expect(handleHideDrawer).not.toHaveBeenCalled();

    jest.restoreAllMocks();
  });

  it("verify that clicking on the button calls handleHideDrawer", () => {
    const handleDisplayDrawer = jest.fn();
    const handleHideDrawer = jest.fn();

    const wrapper = shallow(
      <Notifications
        displayDrawer
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
      />
    );

    wrapper.find("div.notifications_1px08ay button").simulate("click");
    expect(handleDisplayDrawer).not.toHaveBeenCalled();
    expect(handleHideDrawer).toHaveBeenCalled();

    jest.restoreAllMocks();
  });

});

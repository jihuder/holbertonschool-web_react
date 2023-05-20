import React from 'react';
import { mount } from 'enzyme';
import Header from "./Header";
import { StyleSheetTestUtils } from "aphrodite";
import AppContext, { user, logOut } from "../App/AppContext";

describe('<Header />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('if <Header /> renders without crashing', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.exists()).toEqual(true);
  });

  it('if <Header /> renders img and h1 tags', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find("img")).toHaveLength(1);
    expect(wrapper.find("h1")).toHaveLength(1);
  });

  it("mounts the Header component with a default context value. The logoutSection is not created", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find("#logoutSection")).toHaveLength(0);
  });

  it("Header component with a user defined (isLoggedIn is true and an email is set). The logoutSection is created", () => {
    const wrapper = mount(
      <AppContext.Provider
        value={{ user: { ...user, isLoggedIn: true }, logOut }}
      >
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find("#logoutSection")).toHaveLength(1);
  });

  it("Header component with a user defined (isLoggedIn is true and an email is set) and the logOut is linked to a spy", () => {
    const logOutSpy = jest.fn();

    const wrapper = mount(
      <AppContext.Provider
        value={{
          user: {
            email: "faykris28@gmail.com",
            password: "1234",
            isLoggedIn: true,
          },
          logOut: logOutSpy,
        }}
      >
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection")).toHaveLength(1);
    wrapper.find("#logoutSection span").simulate("click");

    expect(logOutSpy).toHaveBeenCalled();

    jest.restoreAllMocks();
  });
});

import { shallow, mount } from "enzyme";
import React from "react";
import Footer from "./Footer";
import { StyleSheetTestUtils } from "aphrodite";
import AppContext, { user, logOut } from "../App/AppContext";

describe("<Footer />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("Footer renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("components at the very least render the text “Copyright”", () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find("div.footer p")).toHaveLength(1);
    expect(wrapper.find("div.footer p").text()).toContain("Copyright");
  });

  it("link is not displayed when the user is logged out within the context", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("div.footer a")).toHaveLength(0);
  });

  it("link is displayed when the user is logged in within the context", () => {
    const wrapper = mount(
      <AppContext.Provider
        value={{ user: { ...user, isLoggedIn: true }, logOut }}
      >
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("div.footer a")).toHaveLength(1);
    expect(wrapper.find("div.footer a").text()).toEqual("Contact us");
  });
});

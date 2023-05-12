import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";

describe("<Login />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it("if <Login /> renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("if <Login /> renders 2 input", () => {
    const wrapper = shallow(<Login />);
    wrapper.update();
    expect(wrapper.find("div.login_1v78a4n input")).toHaveLength(2);
  });

  it("if <Login /> renders 2 label", () => {
    const wrapper = shallow(<Login />);
    wrapper.update();
    expect(wrapper.find("div.login_1v78a4n label")).toHaveLength(2);
  });
});

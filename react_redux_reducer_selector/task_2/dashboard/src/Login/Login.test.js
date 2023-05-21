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
    expect(wrapper.find("div.login_wrhj2o input")).toHaveLength(3);
  });

  it("if <Login /> renders 2 label", () => {
    const wrapper = shallow(<Login />);
    wrapper.update();
    expect(wrapper.find("div.login_wrhj2o label")).toHaveLength(2);
  });

  it("if <Login /> have a submit button and is disabled by default", () => {
    const wrapper = shallow(<Login />);
    const submitInput = wrapper.find("form input[type='submit']");

    expect(submitInput).toHaveLength(1);
    expect(submitInput.prop("disabled")).toEqual(true);
  });

  it("if <Login /> after changing the value of the two inputs, the button is enabled", () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find("#email");
    const passwordInput = wrapper.find("#password");

    emailInput.simulate("change", {
      target: { name: "email", value: "Larry@email.com" },
    });

    let submitInput = wrapper.find("form input[type='submit']");

    expect(submitInput.prop("disabled")).toEqual(true);

    passwordInput.simulate("change", {
      target: { name: "password", value: "123456789" },
    });

    submitInput = wrapper.find("form input[type='submit']");
    expect(submitInput.prop("disabled")).toEqual(false);
  });
});

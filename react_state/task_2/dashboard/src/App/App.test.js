import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { StyleSheetTestUtils } from "aphrodite";
import AppContext, { user, logOut } from "./AppContext";

describe('<App />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('if <App /> renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('if <App /> renders Login when isLoggedIn property is not defined', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('if <App /> renders Login when CourseList is not displayed', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      user: {
        ...user,
        isLoggedIn: false,
      },
    });
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('if <App /> when isLoggedIn is true, Login component is not included', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      user: {
        ...user,
        isLoggedIn: true,
      },
    });
    expect(wrapper.find('Login')).toHaveLength(0);
  });

  it('if <App /> when isLoggedIn is true, CourseList component is included', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      user: {
        ...user,
        isLoggedIn: true,
      },
    });
    expect(wrapper.find('CourseList')).toHaveLength(1);
  });

  it('if <App /> when isLoggedIn is true, Header component is included', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      user: {
        ...user,
        isLoggedIn: true,
      },
    });
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('if <App /> when isLoggedIn is true, Footer component is included', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      user: {
        ...user,
        isLoggedIn: true,
      },
    });
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  it('if <App /> when the keys control and h are pressed the logOut function', () => {
    const events = {};
    const logout = jest.fn();

    document.addEventListener = jest.fn((event, cb) => {
      events[event] = cb;
    });

    window.alert = jest.fn();

    shallow(<App logOut={logout} />);

    events.keydown({ key: "h", ctrlKey: true });

    expect(window.alert).toHaveBeenCalledWith("Logging you out");
    expect(logout).toHaveBeenCalled();

    jest.restoreAllMocks();
  });

  it("displayDrawer changes to true when calling handleDisplayDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);

    const instance = wrapper.instance();

    instance.handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
  });

  it("displayDrawer changes to false when calling handleHideDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);

    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);

    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it("verify that the logIn function updates the state correctly", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const loggedUser = {
      email: "faykris28@gmail.com",
      password: "1234",
      isLoggedIn: true,
    };

    const instance = wrapper.instance();
    expect(wrapper.state().user).toEqual(user);

    instance.logIn(loggedUser.email, loggedUser.password);
    expect(wrapper.state().user).toEqual(loggedUser);
  });

  it("verify that the logOut function updates the state correctly", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const loggedUser = {
      email: "faykris28@gmail.com",
      password: "1234",
      isLoggedIn: true,
    };

    const instance = wrapper.instance();
    expect(wrapper.state().user).toEqual(user);

    instance.logIn(loggedUser.email, loggedUser.password);
    expect(wrapper.state().user).toEqual(loggedUser);

    instance.logOut();
    expect(wrapper.state().user).toEqual(user);
  });
});

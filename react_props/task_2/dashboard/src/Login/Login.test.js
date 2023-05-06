import React from 'react';
import { shallow } from 'enzyme';
import Login from "./Login";

describe('<Login />', () => {
  it('if <Login /> renders without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('if <Login /> renders img and h1 tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("div.login input")).toHaveLength(2);
    expect(wrapper.find("div.login label")).toHaveLength(2);
  });
});

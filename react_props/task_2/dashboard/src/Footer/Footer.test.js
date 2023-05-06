import React from 'react';
import { shallow } from 'enzyme';
import Footer from "./Footer";

describe('<Footer />', () => {
  it('if <Footer /> renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('if <Footer /> renders img and h1 tags', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("div.footer p").text()).toContain("Copyright");
  });
});

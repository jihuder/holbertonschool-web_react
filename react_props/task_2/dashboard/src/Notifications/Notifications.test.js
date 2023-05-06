import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('if <Notifications /> renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('if <Notifications /> renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('NotificationItem')).toHaveLength(3);
  });

  it('if <Notifications /> renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    const text = 'Here is the list of notifications';
    expect(wrapper.find('.Notifications p').text()).toEqual(text);
  });
});

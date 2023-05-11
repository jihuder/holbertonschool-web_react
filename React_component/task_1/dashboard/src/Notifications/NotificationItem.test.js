import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('if <NotificationItem /> renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('if <NotificationItem /> when passing dummy value props, it renders with the text "test"', () => {
    const wrapper = shallow(<NotificationItem value="test" />);
    expect(wrapper.find('li').text()).toEqual('test');
  });

  it('if <NotificationItem /> when passing dummy type props, it renders with the type "default"', () => {
    const wrapper = shallow(<NotificationItem type="default" />);
    expect(wrapper.find('li').prop("data-notification-type")).toEqual("default");
  });

  it('if <NotificationItem /> when passing a dummy html prop, it renders the correct html', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.find('li').html()).toEqual('<li data-notification-type="default"><u>test</u></li>');
  });
});

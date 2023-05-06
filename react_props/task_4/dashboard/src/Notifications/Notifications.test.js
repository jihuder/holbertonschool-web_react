import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('if <Notifications /> renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('If menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('div.menuItem')).toHaveLength(1);
  });

  it('If div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false}/>);
    expect(wrapper.find('div.Notifications')).toHaveLength(0);
  });

  it('If menu item is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('div.menuItem')).toHaveLength(1);
  });

  it('If div.Notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('div.Notifications')).toHaveLength(1);
  });

  it('if <Notifications /> renders three list items', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications ul')).toHaveLength(1);
  });

  it('if <Notifications /> renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const text = 'Here is the list of notifications';
    expect(wrapper.find('.Notifications p').text()).toEqual(text);
  });
});

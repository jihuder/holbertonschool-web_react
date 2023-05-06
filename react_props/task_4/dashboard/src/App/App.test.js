import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('if <App /> renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('if <App /> renders when CourseList is not displayed', () => {
    const wrapper = shallow(<App isLoggedIn={false}/>);
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('if <App /> when isLoggedIn is true, Login component is not included', () => {
    const wrapper = shallow(<App isLoggedIn={true}/>);
    expect(wrapper.find('Login')).toHaveLength(0);
  });

  it('if <App /> when isLoggedIn is true, CourseList component is included', () => {
    const wrapper = shallow(<App isLoggedIn={true}/>);
    expect(wrapper.find('CourseList')).toHaveLength(1);
  });
});

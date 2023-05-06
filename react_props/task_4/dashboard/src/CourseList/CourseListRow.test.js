import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from "./CourseListRow";

describe('<CourseListRow />', () => {
  it('if <CourseListRow /> renders one cell with colspan = 2 when textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Courses"/>);
    expect(wrapper.find('th').prop("colSpan")).toEqual("2");
  });

  it('if <CourseListRow /> renders two cells when textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Courses" textSecondCell="Duration"/>);
    const th = wrapper.find("th");
    expect(th.at(0).text()).toEqual("Courses");
    expect(th.at(1).text()).toEqual("Duration");
  });

  it('if <CourseListRow /> renders correctly two td elements within a tr element\n', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Python" textSecondCell="15 days"/>);
    const tr = wrapper.find("tr");
    expect(tr.children("td")).toHaveLength(2);
  });
});

import { shallow } from "enzyme";
import React from "react";
import CourseList from "./CourseList";

describe("<CourseList /> test suit", () => {
  let listCourses;

  it("if <CourseList /> renders without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toEqual(true);
  });

  describe("CourseList with listCourses property", () => {
    beforeEach(() => {
      listCourses = [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 },
      ];
    });

    it("if <CourseList /> renders the 5 different rows with data", () => {
      const wrapper = shallow(<CourseList listCourses={ listCourses } />);

      expect(wrapper.find('CourseListRow').at(0).prop('textFirstCell')).toEqual('Available courses');
      expect(wrapper.find('CourseListRow').at(0).prop('isHeader')).toEqual(true);

      expect(wrapper.find('CourseListRow').at(1).prop('textFirstCell')).toEqual('Course name');
      expect(wrapper.find('CourseListRow').at(1).prop('textSecondCell')).toEqual('Credit');
      expect(wrapper.find('CourseListRow').at(1).prop('isHeader')).toEqual(true);

      expect(wrapper.find('CourseListRow').at(2).prop('textFirstCell')).toEqual('ES6');
      expect(wrapper.find('CourseListRow').at(2).prop('textSecondCell')).toEqual(60);
      expect(wrapper.find('CourseListRow').at(2).prop('isHeader')).toEqual(false);

      expect(wrapper.find('CourseListRow').at(3).prop('textFirstCell')).toEqual('Webpack');
      expect(wrapper.find('CourseListRow').at(3).prop('textSecondCell')).toEqual(20);
      expect(wrapper.find('CourseListRow').at(3).prop('isHeader')).toEqual(false);

      expect(wrapper.find('CourseListRow').at(4).prop('textFirstCell')).toEqual('React');
      expect(wrapper.find('CourseListRow').at(4).prop('textSecondCell')).toEqual(40);
      expect(wrapper.find('CourseListRow').at(4).prop('isHeader')).toEqual(false);
    });
  });

  describe("CourseList when listCourses property is not defined or its empty", () => {
    beforeEach(() => {
      listCourses = [];
    });

    it('if <CourseList /> renders rows when listCourses is not defined', () => {
      const wrapper = shallow(<CourseList />);

      expect(wrapper.find('CourseListRow').at(0).prop('textFirstCell')).toEqual('Available courses');
      expect(wrapper.find('CourseListRow').at(0).prop('isHeader')).toEqual(true);

      expect(wrapper.find('CourseListRow').at(1).prop('textFirstCell')).toEqual('Course name');
      expect(wrapper.find('CourseListRow').at(1).prop('textSecondCell')).toEqual('Credit');
      expect(wrapper.find('CourseListRow').at(1).prop('isHeader')).toEqual(true);

      expect(wrapper.find('CourseListRow').at(2).prop('textFirstCell')).toEqual('No course available yet');
      expect(wrapper.find('CourseListRow').at(2).prop('textSecondCell')).toEqual(null);
      expect(wrapper.find('CourseListRow').at(2).prop('isHeader')).toEqual(false);
    });

    it('if <CourseList /> renders rows when listCourses is empty', () => {
      const wrapper = shallow(<CourseList listCourses={ listCourses } />);

      expect(wrapper.find('CourseListRow').at(0).prop('textFirstCell')).toEqual('Available courses');
      expect(wrapper.find('CourseListRow').at(0).prop('isHeader')).toEqual(true);

      expect(wrapper.find('CourseListRow').at(1).prop('textFirstCell')).toEqual('Course name');
      expect(wrapper.find('CourseListRow').at(1).prop('textSecondCell')).toEqual('Credit');
      expect(wrapper.find('CourseListRow').at(1).prop('isHeader')).toEqual(true);

      expect(wrapper.find('CourseListRow').at(2).prop('textFirstCell')).toEqual('No course available yet');
      expect(wrapper.find('CourseListRow').at(2).prop('textSecondCell')).toEqual(null);
      expect(wrapper.find('CourseListRow').at(2).prop('isHeader')).toEqual(false);
    });


  });
});

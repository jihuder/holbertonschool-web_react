import {
    FETCH_COURSE_SUCCESS,
    SELECT_COURSE,
    UNSELECT_COURSE
} from '../actions/courseActionTypes';
import { courseReducer } from './courseReducer';

describe('courseReducer actions', () => {
    const data = [
        {
            id: 1,
            name: "ES6",
            isSelected: false,
            credit: 60
        },
        {
            id: 2,
            name: "Webpack",
            isSelected: false,
            credit: 20
        },
        {
            id: 3,
            name: "React",
            isSelected: false,
            credit: 40
        }
    ];

    const selected = [
        {
            id: 1,
            name: "ES6",
            isSelected: false,
            credit: 60
        },
        {
            id: 2,
            name: "Webpack",
            isSelected: true,
            credit: 20
        },
        {
            id: 3,
            name: "React",
            isSelected: false,
            credit: 40
        }
    ];

    it('Verify default state returns an empty array', () => {
        expect(courseReducer([], '')).toEqual([]);
    });

    it('Verify FETCH_COURSE_SUCCESS returns the data passed', () => {
        expect(courseReducer([], { type: FETCH_COURSE_SUCCESS, data: data })).toEqual(data);
    });

    it('Verify SELECT_COURSE returns the data with the right item updated', () => {
        expect(courseReducer(data, { type: SELECT_COURSE, index: 2 })).toEqual(selected);
    });

    it('Verify SELECT_COURSE returns the data with the right item updated', () => {
        expect(courseReducer(data, { type: UNSELECT_COURSE, index: 2 })).toEqual(data);
    });
});

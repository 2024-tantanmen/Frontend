import { atom } from "recoil";

export const augustState = atom({
    key: 'augustState',
    default: new Array(31).fill(null).map(() => ([
        {
            title: '일정은여섯글자',
            firstMeal: [],
            secondMeal: [],
            thirdMeal: [],
            extraMeal: [],
            workoutTime: '',
            stepCount: ''
        },
        {
            title: '일정은여섯글자',
            firstMeal: [],
            secondMeal: [],
            thirdMeal: [],
            extraMeal: [],
            workoutTime: '',
            stepCount: ''
        },
    ]))
});

export const septemberState = atom({
    key: 'septemberState',
    default: new Array(31).fill(null).map(() => ([{
        title: '',
        firstMeal: [],
        secondMeal: [],
        thirdMeal: [],
        extraMeal: [],
        workoutTime: '',
        stepCount: 'h'
    }]))
});

export const crntClickedDayState = atom({
    key: 'crntClickedDayState',
    default: -1
})
import { atom } from "recoil";

export const chatbotAnswerState = atom({
    key: 'chatbotAnswerState',
    default: "열여섯글자까지작성되고다음줄로넘어가기"
});
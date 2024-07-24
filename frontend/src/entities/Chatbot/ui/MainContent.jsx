import { useState } from "react";
import styled from "styled-components";
import AiChat from "./AiChat";
import { useRecoilState } from "recoil";
import { chatbotAnswerState } from "../../../shared/state/Chatbot";
import DefaultChat from "./DefaultChat";
import MyChat from "./MyChat";

function MainContent() {

    const [chatbotAnswer, setChatbotAnswer] = useRecoilState(chatbotAnswerState);

    return (
        <Wrapper>
            <Welcome>반가워요<br/>탄수발자국 챗봇이에요!</Welcome>
            <DefaultChat/>
            <AiChat/>
            <MyChat/>
            <MyChat/>
            <AiChat/>
        </Wrapper>
    );
}

export default MainContent;

const Wrapper = styled.div`
    max-height: 100%;
    overflow: auto;
`;

const Welcome = styled.div`
    color: var(--Gray8, #262829);
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; 
    margin : 4rem 0;
`;

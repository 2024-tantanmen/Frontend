import styled from "styled-components";
import Header from "../entities/Chatbot/ui/Header";
import MainContent from "../entities/Chatbot/ui/MainContent";
import send from "../assets/sendIcon.svg";
import sendOrange from "../assets/sendOrange.svg";
import { useState } from 'react';

export default function Chatbot() {
    const [sendIcon, setSendIcon] = useState(send);

    return (
        <Wrapper>
            <Header />
            <Content>
                <MainContent />
            </Content>
            <InputContainer>
                <Input placeholder="챗봇에게 질문을 해보세요." />
                <Send
                    src={sendIcon}
                    onMouseEnter={() => setSendIcon(sendOrange)}
                    onMouseLeave={() => setSendIcon(send)}
                    onMouseDown={() => setSendIcon(sendOrange)}
                    onMouseUp={() => setSendIcon(send)}
                />
            </InputContainer>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background: var(--Gray1, #F2F3F5);
`;

const Content = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 0 2rem;
`;

const InputContainer = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    background-color: #fff;
    align-items: center;
    padding: 0 2rem;
    gap: 0.8rem;
    position: relative;
`;

const Input = styled.input`
    width: 100%;
    font-family: "Noto Sans KR";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    height: 36px;
    padding: 0.9rem 1.6rem;
    align-items: center;
    border-radius: 20px;
    border: 1px solid var(--Gray2, #E3E5E7);
    background: var(--Gray1, #F2F3F5);
    &:focus {
        border-color: #EF6038;
        outline: none;
        color: #262829;
    }
`;

const Send = styled.img`
    cursor: pointer;
    width: 3rem;
    height: 3rem; 
`;

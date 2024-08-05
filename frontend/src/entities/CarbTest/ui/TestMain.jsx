import styled from "styled-components";
import TestContent from "./TestContent";
import icon from "../../../assets/pretzelIcon.svg";

export default function TestMain(){

    return(
    <Wrapper>

        <TitleContainer>
            <Icon src={icon} alt="icon" fetchpriority="high"/>
            <Div>자신에게 해당하는 질문에 체크하세요.</Div>
        </TitleContainer>

        <TestContent/>

    </Wrapper>);
}

const Wrapper = styled.div`
background: #F2F3F5;
padding: 2.5rem 2rem 1.6rem 2rem;
`

const Div= styled.div`
@media (max-width: 397px) {
    font-size: 1.5rem; 
    @media (max-width: 380px) {
    font-size: 1.4rem; 
    @media (max-width: 360px) {
    font-size: 1.3rem; 
    @media (max-width: 345px) {
    font-size: 1.2rem; 
    }
`

const TitleContainer = styled.div`
display: flex;
align-items: center;
gap: 0.8rem;
color: var(--Gray8, #262829);
font-family: "Noto Sans KR";
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`

const Icon=styled.img`
width: 3.2rem;
height: 3.2rem;
`
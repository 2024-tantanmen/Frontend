import styled from "styled-components"
import link from '../../../assets/Link.svg'
import kakao from '../../../assets/Kakao.svg'
import { hoverGrow } from "../../../shared/animation/hoverGrow"
import { hover } from "@testing-library/user-event/dist/hover"

function ShareResult() {
    return (
        <MainLayout>
            <Title>추천 식단을 공유해보세요</Title>

            <ButtonWrap>

                <CopyLinkWrap>
                    <Img src={link} />
                </CopyLinkWrap>

                <Img src={kakao} />

            </ButtonWrap>
        </MainLayout>
    )
}

export default ShareResult

const MainLayout = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 8rem;
padding: 1.6rem 1.8rem;
background-color: black
`

const Title = styled.div`
color: #FFF;
font-family: "Noto Sans KR";
font-size: 1.6rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`

const ButtonWrap = styled.div`
display: flex;
gap: 0.8rem;
`

const CopyLinkWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 4.8rem;
height: 4.8rem;
background-color: white;
border-radius: 50%;
${hoverGrow}
`

const Img = styled.img`
${hoverGrow}
`
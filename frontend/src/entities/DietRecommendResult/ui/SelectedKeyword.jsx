import styled from "styled-components"
import Choices from "../../DietRecommend/ui/Choices"

function SelectedKeyword(){
    return(
        <MainLayout>
            <Title>선택한 키워드</Title>

            <Choices
            title="알레르기"
            choices={['메밀', '땅콩']}
            />

            <Choices
            title="식습관"
            choices={['가리는 것 없음']}
            />
        </MainLayout>
    )
}

export default SelectedKeyword

const MainLayout = styled.div`
padding: 2rem;
background-color: white;
`

const Title = styled.div`
color: #262829;
font-family: "Noto Sans KR";
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: 1.6rem
`
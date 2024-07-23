import styled from "styled-components";
import BackButton from '../../../assets/BackButton.svg'

function Header(){
    return(
        <MainLayout>
            <img src={BackButton} />
            <Title>식단 추천</Title>
            <img
            style={{visibility: 'hidden'}}
            src={BackButton} />
        </MainLayout>
    )
}

export default Header;

const MainLayout = styled.div`
width: 100%;
height: 5.6rem;
background-color: white;
padding: 1rem 2rem;
display: flex;
justify-content: space-between;
align-items: center
`

const Title = styled.div`
color: #262829;
text-align: center;
font-family: "Noto Sans KR";
font-size: 1.6rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`
import styled from "styled-components";
import { useRecoilValue } from 'recoil';
import { selectedImgState } from '../../../shared/state/Gallery';
import test from '../../../assets/testImg.svg';
import icon from '../../../assets/pretzelIcon.svg';
import linkIcon from '../../../assets/linkIcon.svg';
import kakaoIcon from '../../../assets/kakaoIcon.svg';
import StandardButton from '../../../shared/components/StandardButton/StandardButton';
import { useState } from "react";
import { hoverGrow } from "../../../shared/animation/hoverGrow";


function MainContent(){

    const selectedImg = useRecoilValue(selectedImgState);
    const [foodCnt, setFoodCnt] = useState('00');
    const [calCnt, setcalCnt] = useState('000');


    return(
    <Wrapper>
        <Title>업로드한 사진</Title>
        <PicContainer>
            <Img src={selectedImg}/>
        </PicContainer>

        <ResultContainer>
        <TitleIcon src={icon}/>
        <ResultTitle>식단 분석 결과</ResultTitle>
        </ResultContainer>

        <CntContainer>
        <FontContainer>총</FontContainer>
        <FoodCntContainer>{foodCnt}</FoodCntContainer>
        <FontContainer>개의 음식</FontContainer>
        </CntContainer>

        <CntContainer style={{marginTop:"0.8rem"}}>
        <FontContainer>총</FontContainer>
        <FoodCntContainer>{calCnt}</FoodCntContainer>
        <FontContainer>kcal</FontContainer>
        </CntContainer>

        <FontContainer style={{marginTop:"4rem", marginLeft:"2rem"}}>식단 총 함량 분석</FontContainer>
        {/** 여기에 캐러셀 추가 */}

        <FontContainer style={{marginTop:"4.4rem", marginLeft:"2rem"}}>메뉴별 분석&nbsp;<span style={{color:"#EF6038"}}>{foodCnt}</span></FontContainer>
        {/** 여기에 캐러셀 추가 */}

        <ShareContainer>
          <FontContainer style={{color:"#fff", position:"absolute", left:"2rem"}}>분석 결과를 공유해보세요</FontContainer>

          <IconContainer>
            <Icon src={linkIcon}/>
            <Icon src={kakaoIcon}/>
          </IconContainer>
        </ShareContainer>

        <ButtonContainer>
        <StandardButton title="다시 해보기" width="18.7rem" height="4rem"/>
        <StandardButton title="총 칼로리 기록하기" width="18.7rem" height="4rem" backgroundColor="#EF6038"/>
      </ButtonContainer>
        
      </Wrapper>
      );
}

export default MainContent;

const Wrapper = styled.div`
  background: var(--Gray1, #f2f3f5);
  padding: 2.4rem 0 0 0;
`;

const Title = styled.div`
  color: var(--Gray8, #262829);
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 2rem;
`;

const Img = styled.img`
    border-radius: 16px;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const PicContainer = styled.div`
  margin: 0.8rem 2rem 0 2rem;
  height: 39rem;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleIcon = styled.img`
    width: 3.2rem;
    height: 3.2rem;
    margin-right: 8px;
`

const ResultTitle = styled.div`
color: var(--Gray8, #262829);
font-family: "Noto Sans KR";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;

`

const ResultContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 2rem;
    margin-top: 4.6rem;
`

const FontContainer = styled(ResultTitle)`
font-size: 16px;
`

const FoodCntContainer = styled(FontContainer)`
display: flex;
width: fit-content;
padding: 8px 16px;
justify-content: center;
align-items: center;
border-radius: 8px;
border: 1px solid var(--Gray2, #E3E5E7);
background: var(--White, #FFF);
color: var(--Primary-color1, #EF6038);
`

const CntContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 2rem;
    margin-top: 2.4rem;
`

const ShareContainer = styled.div`
  position: relative;
  display:flex;
  width: 100%;
  height: 8rem;
  background: var(--Black, #000);
  margin-top: 4rem;
  align-items: center;
`

const IconContainer = styled.div`
display:flex;
position: absolute;
justify-content: center;
align-items:center;
gap: 0.8rem;
right: 1.8rem;
`

const Icon = styled.img`
width: 4.8rem;
height: 4.8rem;
cursor: pointer;
${hoverGrow}
`

const ButtonContainer = styled.div`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  padding: 2rem;
`;
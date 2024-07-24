import styled from "styled-components"
import DietRecommendResultCell from "./DietRecommendResultCell";

function CarbTestResultTab(){
    return(
    <CellWrap>
        
        <DietRecommendResultCell />
        <DietRecommendResultCell />
        <DietRecommendResultCell />
        
    </CellWrap>
    )
}

export default CarbTestResultTab

const CellWrap = styled.div`
display: flex;
flex-direction: column;
gap: 1.6rem
`
import styled from "styled-components"
import { useState } from "react";
import Header from "../entities/Mypage/ui/Header";
import FootprintCounterArea from '../entities/Mypage/ui/FootprintCounterArea'
import Tabbar from "../entities/Mypage/ui/Tabbar";
import GoToDietRecommend from '../entities/Mypage/ui/GoToDietRecommend'
import DietRecommendResultTab from "../entities/Mypage/ui/DietRecommendResultTab";
import CarbCountingResultTab from "../entities/Mypage/ui/CarbCountingResultTab";
import CarbTestResultTab from "../entities/Mypage/ui/CarbCountingResultTab";

function Mypage (){

    const [tab, setTab] = useState(0);

    function renderContent() {
        if (tab === 0) {
            return <DietRecommendResultTab />;
        } else if (tab === 1) {
            return <CarbCountingResultTab />;
        } else if (tab === 2) {
            return <CarbTestResultTab />;
        } else if (tab === 3) {
            return <>커뮤니티</>;
        }
    }

    return(
        <>
        <Header />

        <FootprintCounterArea />

        <Tabbar tab={tab} setTab={setTab}/>

        <GoToDietRecommend />

        <TabLayout>
            {renderContent()}
        </TabLayout>
        
        </>
    )
}

export default Mypage

const TabLayout = styled.div`
padding: 4rem 2rem
`
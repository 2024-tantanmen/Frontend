import styled from "styled-components"
import { useState } from "react";
import Header from "../entities/ Mypage/Header";
import FootprintCounterArea from "../entities/ Mypage/FootprintCounterArea";

function Mypage (){

    const [tab, setTab] = useState(0);

    function renderContent() {
        if (tab === 0) {
            return <>식단 추천</>;
        } else if (tab === 1) {
            return <>탄수 카운팅</>;
        } else if (tab === 2) {
            return <>중독 테스트</>;
        } else if (tab === 2) {
            return <>커뮤니티</>;
        }
    }

    return(
        <>
        <Header />
        <FootprintCounterArea />
        {/* <Tabbar />
        <Content /> */}
        </>
    )
}

export default Mypage
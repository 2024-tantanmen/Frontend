import styled from "styled-components";
import Header from "../entities/DietRecommend/ui/Header";
import ResultMenu from "../entities/DietRecommend/ui/ResultMenu";
import SelectedKeyword from "../entities/DietRecommend/ui/SelectedKeyword";
import ShareResult from "../entities/DietRecommend/ui/ShareResult";
import Footer from "../shared/components/Footer/Footer";

function DietRecommend(){
    return(
        <>
        <Header />
        <ResultMenu />
        <SelectedKeyword />
        <ShareResult />
        <Footer />
        </>
    )
}

export default DietRecommend;
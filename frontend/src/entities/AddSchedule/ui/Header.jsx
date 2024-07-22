import styled from "styled-components";
import BackButton from '../../../assets/BackButton.svg'
import { useState } from "react";
import Modal from './Modal'

function Header (){

    const [isModalVisible, setIsModalVisible] = useState(false)

    function handleBackButtonClick(){
        setIsModalVisible(true)
    }

    const handleModalClick = () => {
        setIsModalVisible(false);
    };

    return(
        <MainLayout>
            <StyledBackButton
            src={BackButton}
            onClick={handleBackButtonClick}
            />

            {/* 모달 */}
            {isModalVisible && (
                <StyledModalContainer onClick={handleModalClick}>
                    <StyledModal onClick={(e) => e.stopPropagation()}>
                        <Modal setIsModalVisible={setIsModalVisible}/>
                    </StyledModal>
                </StyledModalContainer>
            )}
        </MainLayout>
    )
}
export default Header;

const MainLayout = styled.div`
width: 100%;
height: 5.6rem;
display:flex;
justify-content: space-between;
align-items: center;
padding: 0 2rem 0 2rem;
`

const StyledBackButton = styled.img`
width:3.6rem;
height:3.6rem;
`

const StyledModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
`;

const StyledModal = styled.div`
    width: 38rem;
    height: 24.8rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    @media(max-width: 428px) {
        width:88%
    }
`;  
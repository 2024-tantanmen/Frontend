import styled from 'styled-components';
import { useState } from 'react';
import Modal from './Modal';
import { hoverGrow } from '../../animation/hoverGrow';
import { crntClickedDayState, crntClickedMonthState } from '../../state/calendar';
import { useRecoilState } from 'recoil';

function CalendarCell({ schedule, index, day, today, month }) {

    // eslint-disable-next-line
    const [_, setCrntClickedDay] = useRecoilState(crntClickedDayState)
    // eslint-disable-next-line
    const [__, setCrntClickedMonth] = useRecoilState(crntClickedMonthState)
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleCellClick = () => {
        setIsModalVisible(true);
        setCrntClickedDay(index)
        setCrntClickedMonth(month)
    };

    const handleModalClick = () => {
        setIsModalVisible(false);
    };

    const isEmpty = (schedule.length === 1 && schedule[0].title === '')

    return (
        <>
            <StyledContainer onClick={handleCellClick}>
                <FlexBox istoday={today === index}>
                <StyledDate istoday={today === index}>
                    {index + 1}
                </StyledDate>
                </FlexBox>
            
                {!isEmpty && schedule.map((e, i) => (
                    <StyledScheduleContainer>
                        {e.title}
                    </StyledScheduleContainer>
                ))}

            </StyledContainer>

            {/* 모달 */}
            {isModalVisible && (
                <StyledModalContainer onClick={handleModalClick}>
                    <StyledModal onClick={(e) => e.stopPropagation()}>
                        <Modal
                            setIsModalVisible={setIsModalVisible}
                            index={index}
                            day={day} />
                    </StyledModal>
                </StyledModalContainer>
            )}
        </>
    );
}

export default CalendarCell;

const StyledContainer = styled.div`
    width: 100%;
    height: 78px;
    border-radius: 4px;
    background-color: #f4f4f4;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    padding-top:0.6rem;
    transition: background-color 0.3s ease;
    overflow: hidden;
    overflow-y: auto; 
    &:hover {
        background: white;
    }

    @media (hover: hover) {
	${hoverGrow}
    }
`;

const FlexBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color:${props => props.istoday ? '#FF6464' : 'transparent'};
    border-radius: 50%;
    width: 1.7rem;
    height: 1.7rem;
    margin-bottom: 1rem;
`

const StyledDate = styled.div`
    
    color:${props => props.istoday ? 'white' : 'black'};
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    // margin-bottom: 16px;
`

const StyledScheduleContainer = styled.div`
    width: 100%;
    background-color: #FCD8BE;
    padding: 1px 2px;
    color: var(--Gray8, #262829);
    font-family: "Noto Sans KR";
    font-size: 0.95rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    overflow: hidden;
    white-space: nowrap;
    // text-overflow: ellipsis;
    max-width: 8.5ch;
    margin-bottom: 3px;

    @media (max-width: 428px){
    font-size: 2vw;
    }
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
    width: 380px;
    height: 454px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    @media(max-width: 428px) {
        width:88%
    }
`;
import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import check from '../../../assets/Check_notpickybutton.svg';
import uncheck from '../../../assets/Uncheck_notpickybutton.svg';
import { hoverGrow } from "../../../shared/animation/hoverGrow";
import { newAllergyTypeState, newEatingHabitTypeState } from '../../../shared/state/DietRecommend';
import { useRecoilState } from 'recoil';

function NotPickyButton({ title, type }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const [newAllergyType, setNewAllergyType] = useRecoilState(newAllergyTypeState)
    const [newEatingHabitType, setNewEatingHabitType] = useRecoilState(newEatingHabitTypeState)

    useEffect(()=>{
        // eslint-disable-next-line
        if(type == 'allergy'){
            if(newAllergyType.length === 1 && newAllergyType.includes('없음')){
                setIsClicked(true)
            }else {
                setIsClicked(false)
            }
            // eslint-disable-next-line
        }else if(type == 'eating-habit'){
            if(newEatingHabitType.length === 1 &&newEatingHabitType.includes('없음')){
                setIsClicked(true)
            }else {
                setIsClicked(false)
            }
        }

        console.log(newAllergyType, newEatingHabitType)
        // eslint-disable-next-line
    }, [newAllergyType, newEatingHabitType])

    useEffect(()=>{
        // eslint-disable-next-line
        if(type=='allergy'){
            if(!isClicked){
                setNewAllergyType((prev) => {
                    return prev.filter((e) => e !== '없음');
                });
            }
            // eslint-disable-next-line
        } else if (type=='eating-habit'){
            if(!isClicked){
                setNewEatingHabitType((prev) => {
                    return prev.filter((e) => e !== '없음');
                });
            }
        }
        // eslint-disable-next-line
    }, [isClicked])

    return (
        <NotPickyButtonWrap
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            isClicked={isClicked}
            onClick={() => {

                if(type === 'allergy'){
                    if(newAllergyType.includes('없음')){
                        setNewAllergyType([])
                    }else {
                        setNewAllergyType(['없음'])
                    } 
                }else if(type === 'eating-habit'){
                    if(newEatingHabitType.includes('없음')){
                        setNewEatingHabitType([])
                    }else {
                        setNewEatingHabitType(['없음'])
                    } 
                }

            }}
        >
            <NotPickyButtonText>
                {title}
            </NotPickyButtonText>

            <NotPickyButtonIcon src={isHovered || isClicked ? check : uncheck} fetchpriority='high' alt='check'/>
        </NotPickyButtonWrap>
    );
}

export default NotPickyButton;

const NotPickyButtonWrap = styled.div`
cursor: pointer;
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 1.6rem;
  background-color: ${props => props.isClicked ? '#EF6038' : '#F2F3F5'};
  padding: 1.6rem 1.8rem;
  overflow: hidden;
  transition: all 0.25s ease-in-out;
  color: ${props => props.isClicked ? 'white' : '#7D7F82'};
  @media (hover: hover) {
	${hoverGrow}
    }
  position: relative;

  &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      transition: all 0.25s ease-in-out;
      background-color: #EF6038;
      border-radius: 30px;
      visibility: hidden;
      height: 10px;
      width: 10px;
      z-index: -1;
  }

  &:hover::after {
      visibility: visible;
      transform: scale(100) translateX(2px);
  }

  &:hover {
      color: white;
  }
`;

const NotPickyButtonText = styled.div`
  font-family: "Noto Sans KR";
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 18px */
`;

const NotPickyButtonIcon = styled.img``;
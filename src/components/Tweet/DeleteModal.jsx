import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255,255,255,0.05);
  backdrop-filter: blur(5px);
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  border-radius: 15px;
  padding: 20px;
  width: 280px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleText = styled.div`
    color: white;
    font-weight: bold;
    font-size: 25px;
    margin-top:20px;
    margin-bottom: 10px;
`;
const DeleteText = styled.div`
    color: gray;
    margin-bottom: 20px;
    text-align: center;
`;
const DeleteBtn = styled.button`
    background-color: red;
    color: white;
    border: none;
    border-radius: 15px;
    width: 200px;
    height: 40px;
    font-weight: bold;
`;
const CancelBtn = styled.button`
    background-color: Black;
    color: white;
    border: 0.8px solid gray;
    border-radius: 15px;
    width: 200px;
    height: 40px;
    margin-top: 10px;
    font-weight:bold;

`;


function DeleteModal({closeModal, deleteTweet}){
    return(
    <>
    <Background onClick={closeModal}/>
    <ModalContainer>
        <TitleText>Delete post?</TitleText>
        <DeleteText>This can't be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from search results.</DeleteText>
        <DeleteBtn onClick={deleteTweet}>Delete</DeleteBtn>
        <CancelBtn onClick={closeModal}>Cancel</CancelBtn>
    </ModalContainer>
    </>
 );
}

export default DeleteModal;
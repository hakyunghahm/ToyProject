import React from "react";
import { useLocation } from 'react-router-dom'; 
import styled from "styled-components";
import SideBar from "../components/Layout/SideBar";
import TrendingBar from "../components/Layout/TrendingBar"
import { AiOutlineRetweet } from "react-icons/ai";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { IoHeartOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { GoArrowLeft } from "react-icons/go";



const ViewContainer = styled.div`
  display: flex;
  justify-content: center;   
  margin: 0 auto;
  box-sizing: border-box;
  overflow-x: hidden;
  width: 100%; 
`;

const SideBarContainer = styled.div`
  width: 300px;
  flex-shrink: 0;
`;

const ViewCenter = styled.div`
  width: 580px;
  border-left: 0.8px solid #444;
  border-right: 0.8px solid #444;
  min-height: 100vh; 
  flex-shrink: 0;
`;
const ProfileImg = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 5px;
`;
const TrendingBarContainer = styled.div`
  width: 370px;
  flex-shrink: 0;
`;
const TweetContent = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid #333;
`;

const TweetUser = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: white;
  font-weight: bold;
  margin-bottom: 8px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 3px;
`;

const UserId = styled.span`
  color: gray;
  font-size: 15px;
`;


const TweetText = styled.p`
  color: white;
  font-size: 17px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const TweetDate = styled.div`
  font-size: 14px;
  color: gray;
  margin-bottom: 12px;
`;

const Divider = styled.div`
  height: 1px;
  background: #333;
  margin: 12px 0;
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-around;
  color: gray;
`;

const DeleteBtn = styled.button`
    border: none;
    background-color: black;;
`;

const ViewHeader = styled.div`
    color: white;
    padding: 20px 20px;
    display: flex;
    align-items: center;
`;
const HeaderText = styled.div`
    margin-left: 40px;
    font-size: 20px;
    font-weight: 700;
`;

function ViewPage({openModal}) {
  const location = useLocation();
  const tweet = location.state.tweet;

  
  return (
    <ViewContainer>
      <SideBarContainer>
        <SideBar />
      </SideBarContainer>

      <ViewCenter>
        <ViewHeader><GoArrowLeft size="20px" /><HeaderText>게시물</HeaderText></ViewHeader>
      <TweetContent>
        <TweetUser>
            <ProfileImg
            src="https://cdn-icons-png.flaticon.com/512/4159/4159471.png"
            alt="프로필"
            />
             <UserInfo>
                <UserName>{tweet.author.username}</UserName>
                <UserId>{tweet.author.userId}</UserId>
            </UserInfo>
        </TweetUser>

        <TweetText>{tweet.content}</TweetText>
        <TweetDate>{tweet.createdAt ? tweet.createdAt.slice(11, 16) : "시간 없음"}</TweetDate>

        <Divider />

        <ActionBar>
             <span><HiOutlineChatBubbleOvalLeft color="gray" size="20px" /></span>
             <span><AiOutlineRetweet color="gray" size="20px" /></span>
             <span><IoHeartOutline color="gray" size="20px" /></span>
            <DeleteBtn onClick={() => openModal(tweet.id)}>
                <MdDeleteOutline color="gray" size="20px" />
            </DeleteBtn>
        </ActionBar>



        </TweetContent>


  

      </ViewCenter>

      <TrendingBarContainer>
        <TrendingBar />
      </TrendingBarContainer>
    </ViewContainer>
  );
}

export default ViewPage;

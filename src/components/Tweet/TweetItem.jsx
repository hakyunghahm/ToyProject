import React from "react";
import styled from "styled-components";
import { AiOutlineRetweet } from "react-icons/ai";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { IoHeartOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";


const TweetContainer = styled.div`
    border-top: 0.8px solid #444;
    color:white;
    width: 580px;
    padding: 10px 10px;
    display: flex;
    cursor: pointer;

`;
const ProfileImg = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 5px;
`;
const TweetContent = styled.div`
    width: 560px;
`;
const UserName = styled.span`
    font-size: 15px;
    font-weight: bold;
    margin-right: 5px;
`;
const UserId = styled.span`
    color: gray;
`;
const TweetText = styled.div`
    margin-bottom: 10px;
`;
const TweetActions = styled.div`
    display: flex;
    justify-content: space-between;
`;
const TweetTime = styled.div`
    color: gray;
`;
const TweetUser = styled.div`
    display: flex;
    margin-bottom: 4px;
    align-items: center;
`;
const DeleteBtn = styled.button`
    border: none;
    background-color: black;;
`;

const StyledLink = styled(Link)`
    display: inline;
`



function TweetItem ({tweet, openModal, closeModal, deleteTweet }){

    return(
        <>
        <TweetContainer>
            <ProfileImg
                src="https://cdn-icons-png.flaticon.com/512/4159/4159471.png"
                alt="프로필"
            />
            <TweetContent>
                <StyledLink to={`/${tweet.id}`} state={{tweet}}> 
                <TweetUser>
                    <UserName>{tweet.user}</UserName>
                    <UserId>@sumrwaves </UserId>
                    <TweetTime>ㆍ{tweet.time.slice(-5)}</TweetTime>
                </TweetUser>
                <TweetText>{tweet.text}</TweetText>
                </StyledLink>
                <TweetActions>
                <span><HiOutlineChatBubbleOvalLeft color="gray" size="20px" /></span>
                <span><AiOutlineRetweet color="gray" size="20px" /></span>
                <span><IoHeartOutline color="gray" size="20px" /></span>
                <DeleteBtn onClick={() => openModal(tweet.id)}>
                    <MdDeleteOutline color="gray" size="20px" />
                </DeleteBtn>
                </TweetActions>
            </TweetContent>
        </TweetContainer>

        </>
    );
}

export default TweetItem;
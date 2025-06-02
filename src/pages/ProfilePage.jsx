import React from "react";
import SideBar from "../components/Layout/Sidebar";
import TrendingBar from "../components/Layout/TrendingBar"
import styled from "styled-components";
import { GoArrowLeft } from "react-icons/go";
import { useState, useEffect } from "react"; 
import TweetList from "../components/Tweet/TweetList";
import { FaCalendarAlt } from "react-icons/fa";
import { fetchMyProfile } from "../api/api";

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
const TrendingBarContainer = styled.div`
  width: 370px;
  flex-shrink: 0;
`;

const ProfileCenter = styled.div`
  width: 580px;
  border-left: 0.8px solid #444;
  border-right: 0.8px solid #444;
  min-height: 100vh; 
  flex-shrink: 0;
`;

const ViewHeader = styled.div`
    color: white;
    padding: 10px;
    display: flex;
    align-items: center;
`;
const HeaderText = styled.div`
    margin-left: 40px;
`;
const HeaderUser = styled.div`
    font-weight: bold;
    font-size: 17px;
`;
const TweetsNum = styled.div`
    color: gray;
    font-size: 15px;
`;
const ProfileTop = styled.div`
`;
const ProfileBottom = styled.div`
`;

const CoverImage = styled.div`
  width: 100%;
  height: 180px;
  background-color: #333; 
  position: relative;
  z-index: 0;
`;

const ProfileSection = styled.div`
  padding: 16px 20px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 0.5px solid black;
  position: absolute;
  top: 150px;
  z-index: 10; 
`;

const Name = styled.div`
  margin-top: 50px;
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const UserId = styled.div`
  color: gray;
  font-size: 15px;
  margin-bottom: 4px;
`;

const JoinDate = styled.div`
  color: gray;
  font-size: 14px;
  margin-bottom: 8px;
  margin-top : 10px;
`;

const FollowInfo = styled.div`
  color: gray;
  font-size: 14px;
  display: flex;
`;

const FollowerNum = styled.span`
    color: white;
    font-weight: bold;
    margin-right: 5px;
`;

const FollowerText = styled.span`
    margin-right: 10px;
`;

const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid #333;
  margin-top: 12px;
  justify-content: space-around;
`;

const PostTab = styled.div`
  color: white;
  padding: 12px 16px;
  font-weight: bold;
  border-bottom: 2px solid #1d9bf0;
`;

const Tab = styled.div`
  color: gray;
  padding: 12px 16px;
  font-weight: bold;
  
`

function ProfilePage (){
   const [profile, setProfile] = useState(null);

   useEffect(()=>{
        const fetchData = async () => {
        const result = await fetchMyProfile("1")
        setProfile (result.data);
       }
       fetchData();
   }, []);
    const userTweets = profile
    ? (profile.content || []).map(tweet => ({
        ...tweet,
        author: {
          username: profile.nickname,
          profileImage: profile.profileImage,
        },
      }))
    : [];

    if (!profile || !profile.user) {
      return <div style={{ color: "white", padding: "20px" }}>Loading...</div>;
    }
    
    return(
        <ViewContainer>

            <SideBarContainer>
            <SideBar />
            </SideBarContainer>
            
            <ProfileCenter>
            <ViewHeader>
                <GoArrowLeft size="20px" />
                <HeaderText>
                    <HeaderUser>{profile.user.nickname}</HeaderUser>
                    <TweetsNum>{profile.content.length} Posts</TweetsNum>
                </HeaderText>
            </ViewHeader>

            <ProfileTop>
            <CoverImage />
                <ProfileSection>
                <ProfileImage src="https://cdn-icons-png.flaticon.com/512/4159/4159471.png" alt="프로필" />
                <Name>{profile.user.nickname}</Name>
                <UserId>{profile.user.userId}</UserId>
                <JoinDate><FaCalendarAlt size="12px"/> Joined {profile.user.joinDate}</JoinDate>
                <FollowInfo>
                    <FollowerNum>{profile.user.followerCount}</FollowerNum>
                    <FollowerText>Following </FollowerText>
                    <FollowerNum>{profile.user.followingCount}</FollowerNum>
                    <FollowerText>Followers</FollowerText>
                </FollowInfo>
                </ProfileSection>
            </ProfileTop>
        
            <ProfileBottom>
            <Tabs>
                <PostTab>Posts</PostTab>
                <Tab>Replies</Tab>
                <Tab>Highlights</Tab>
                <Tab>Articles</Tab>
                <Tab>Media</Tab>
                <Tab>Likes</Tab>
            </Tabs>
            </ProfileBottom>

            <TweetList tweets={userTweets || []} /> 

            </ProfileCenter>

            <TrendingBarContainer>
            <TrendingBar />
            </TrendingBarContainer>

       </ViewContainer>
    );
}



export default ProfilePage;
import React, {useState} from "react";
import SideBar from "../components/Layout/Sidebar";
import TrendingBar from "../components/Layout/TrendingBar"
import TweetList from "../components/Tweet/TweetList";
import TweetForm from "../components/Tweet/TweetForm"
import styled from "styled-components";
import DeleteModal from "../components/Tweet/DeleteModal";
import moment from "moment";

const MainContainer = styled.div`
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

const MainCenter = styled.div`
    width: 580px;
    border-left: 0.8px solid #444;
    border-right: 0.8px solid #444;
    min-height: 100vh; 
    flex-shrink: 0;
`;

const TrendingBarContainer = styled.div`
    width: 370px;
    flex-shrink: 0;
`;

const CenterHeader = styled.div`
  display: flex;
  border-bottom: 0.8px solid #444;
`;
const Tab = styled.div`
  flex: 1;
  text-align: center;
  padding: 14px 0;
  font-size: 15px;
  font-weight: bold;
  color: #536471;
  cursor: pointer;

  &:hover {
    background-color: #333333;
  }
`;

const ActiveTab = styled(Tab)`
  color: white;

`;

function MainPage (){

    //트윗 추가 
    const [tweets, setTweets] = useState([]);
    
    const handleAddTweet = (text) => {
        if (!text.trim()){
            return;
        }
        const newTweet = {
            id: Date.now(),
            text,
            user: "하경",
            time: moment().format("YYYY년 MM월 DD일 HH:mm"),
        };
        setTweets([newTweet, ...tweets]);
    };
    

    //트윗 삭제 모달 관리 
    const [isModalOpen, setIsModalOpen] = useState(false); //삭제 상태 
    const [targetId, setTargetId] = useState(null); //무엇을 삭제할지 

    const openModal = (id) => {
        setTargetId(id);
        setIsModalOpen(true);
      };
      
      const closeModal = () => {
        setIsModalOpen(false);
        setTargetId(null);
      };
      
      const deleteTweet = () => {
        setTweets(tweets.filter((tweet) => tweet.id !== targetId));
        closeModal();
      };
      
    
    return (
        <MainContainer>
          <SideBarContainer>
            <SideBar tweets={tweets} />
          </SideBarContainer>
      
          <MainCenter>
            <CenterHeader>
              <Tab>For You</Tab>
              <ActiveTab>Following</ActiveTab>
            </CenterHeader>
            <TweetForm onPost={handleAddTweet} />
            {isModalOpen && (
            <DeleteModal
                deleteTweet={deleteTweet}
                closeModal={closeModal}
            />
        )} 
            <TweetList tweets={tweets} openModal={openModal} closeModal={closeModal} deleteTweet={deleteTweet} />
            
          </MainCenter>
      
          <TrendingBarContainer>
            <TrendingBar />
          </TrendingBarContainer>
        </MainContainer>
        
      );
      
}

export default MainPage; 
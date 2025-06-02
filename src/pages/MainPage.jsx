import React, {useState, useEffect} from "react";
import SideBar from "../components/Layout/Sidebar";
import TrendingBar from "../components/Layout/TrendingBar"
import TweetList from "../components/Tweet/TweetList";
import TweetForm from "../components/Tweet/TweetForm"
import styled from "styled-components";
import DeleteModal from "../components/Tweet/DeleteModal";
import { fetchAllTweets, writeTweet, deleteTweet as deleteTweetAPI } from "../api/api";

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

  const [tweets, setTweets] = useState([]);

  // 트윗 목록 불러오는 공통 함수로 분리
  const loadTweets = async () => {
    try {
      const result = await fetchAllTweets();
      setTweets(result.data.data.tweets);
    } catch (error) {
      console.error("트윗 로딩 실패:", error);
    }
  };
  
  // 트윗 추가
  const handleAddTweet = async (text) => {
    if (!text.trim()) return;
  
    try {
      const response = await writeTweet({ userId: "1", content: text });
      console.log("작성 결과:", response);
      await loadTweets(); // 작성 후 목록 갱신
    } catch (error) {
      console.error("트윗 작성 실패:", error);
    }
  };
  
  // 컴포넌트 마운트 시 초기 트윗 로딩
  useEffect(() => {
    loadTweets();
  }, []);

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
      
      const deleteTweet = async () => {
          console.log("삭제 요청할 tweetId:", targetId);
          await deleteTweetAPI(targetId, "1"); // ← userId도 같이 넘겨줌
          const result = await fetchAllTweets();
          setTweets(result.data.data.tweets); 
          closeModal(); // 삭제 후 모달 닫기
      };
      
    
    return (
        <MainContainer>
          <SideBarContainer>
            <SideBar />
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
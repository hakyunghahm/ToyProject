import React from "react";
import styled from "styled-components";

const trendList = [
    {
        category: "Music·Trending",
        name: "#엔시티위시",
        num: "222K posts",
      },
    {
      category: "Only on X·Trending",
      name: "#HAPPYRIKUDAY",
      num: "12.5K posts",
    },
    {
      category: "Only on X·Trending",
      name: "#리쿠야_온세상이너를_쿠리해",
      num: "10.6K posts",
    },
    {
      category: "Trending in South Korea",
      name: "리쿠 버블",
      num: "7865 posts",
    },
  ];
  
  const TrendsContainer = styled.div`
    border: 0.8px solid #474545;
    border-radius: 15px;
    padding: 10px 20px;
    margin: 20px;
  
  `;
  const TrendTitle = styled.div`
    font-weight: 900;
    font-size: 20px;
    color: white; 
    margin-bottom: 20px;

  `;
  const TrendItem = styled.div`
    color: gray;
    margin-bottom: 20px;
    font-size: 15px;
    gap: 10px;
  `;
  const Category = styled.div`
    color: gray;
  `
  const TrendName = styled.div`
    color: white; 
    font-weight: bold;
    margin-top: 3px;
    margin-bottom: 3px;
  `;
  const TrendNum = styled.div`
    color: gray;
  `;  
  const Premium = styled.div`
    color: white;
    border: 0.8px solid #474545;
    border-radius: 15px;
    padding: 10px 20px;
    margin: 20px;
    height: 140px;
  `;
  const PremiumTitle = styled.div`
    font-weight: 900;
    font-size: 20px;
    color: white; 
    margin-bottom: 10px;
  `;
  const PremiumMent = styled.div`
    color: white; 
    margin-top: 3px;
    margin-bottom: 10px;
  `;
  const SubscribeBtn = styled.button`
    background-color: #1d9bf0;
    width: 110px;
    height: 35px;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    font-size: 15px;
    margin-bottom: 10px;
    color: white;
  `;



  function TrendingBar() {
    return (
      <>
      <Premium>
        <PremiumTitle>Subscribe to Premium</PremiumTitle>
        <PremiumMent>Subscribe to unblock new features and if eligible, receive a share of ads revenue.</PremiumMent>
        <SubscribeBtn >Subscribe</SubscribeBtn>
      </Premium>
      <TrendsContainer>
        <TrendTitle>Trends for you</TrendTitle>
        {trendList.map((trend, index) => (
          <TrendItem key={index}>
            <Category>{trend.category}</Category>
            <TrendName>{trend.name}</TrendName>
            <TrendNum>{trend.num}</TrendNum>
          </TrendItem>
        ))}
      </TrendsContainer>
      </>
    );
  }

export default TrendingBar;
import axios from "axios";

//공통 axios 인스턴스
const api = axios.create({
    baseURL: "https://busanlottegiants.p-e.kr",
});


export const fetchAllTweets = () => api.get("/main");
export const writeTweet = (tweetData) => api.post("/tweets", tweetData);
export const fetchTweetById = (tweetId) => api.get(`/tweets/${tweetId}`);
export const deleteTweet = (tweetId, userId) => {
    return api.delete(`/tweets/${tweetId}`, {
      headers: {
        "Auth-Id": userId
      }
    });
  };
export const fetchMyProfile = (userId) => api.get(`/users/${userId}/profile`);
 
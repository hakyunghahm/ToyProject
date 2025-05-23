import React from "react";
import TweetItem from "./TweetItem";

function TweetList({tweets, openModal,closeModal, deleteTweet}){
    return(
        <div>
            {tweets.map((tweet) => (<TweetItem key={tweet.id} tweet={tweet} openModal={openModal} closeModal={closeModal} deleteTweet={deleteTweet} />))}
        </div>
    );
}


export default TweetList;
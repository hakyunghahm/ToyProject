import React, {useState} from "react";
import styled from "styled-components";

const FormContainer = styled.form`
    padding: 10px 10px;
`;
const ProfileImg = styled.img`
    width: 40px;
    height: 40px;
    float: left;
`;
const TweetArea = styled.textarea`
    width: 500px;
    height: 80px;
    background-color: black;
    color: white;
    border: none;
    font-size: 20px;
    margin-left: 10px;
    margin-top: 10px;
    resize: none;
    outline: none;
    font-family: sans-serif;
 `;

const PostBtn = styled.button`
    background-color: gray;
    float: right;
    width: 70px;
    height: 30px;
    border: none;
    border-radius: 20px;
    font-size: 15px;
    margin-bottom: 10px;
    font-weight: bold;
`;
const FormTop = styled.div`
    display: flex;
    
`;
function TweetForm ({onPost}){
    const [text, setText] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();  // 새로고침 방지
        onPost(text);  
        setText(""); // 텍스트 초기화 
    }

    return( 
        <FormContainer onSubmit = {handleSubmit}>
            <FormTop>
            <ProfileImg 
            src="https://cdn-icons-png.flaticon.com/512/4159/4159471.png" 
            alt="프로픨" 
            />
            <TweetArea
             value={text}
             placeholder="What is happening?!"
             onChange={(e) => setText(e.target.value)}
            />
            </FormTop>
            <PostBtn type="submit">Post</PostBtn>
        </FormContainer>
        
 );
}


export default TweetForm;
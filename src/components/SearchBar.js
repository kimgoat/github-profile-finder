import React, { useState } from 'react';
import Styled from "styled-components";

const SearchBarWrap = Styled.div`
form{
    display: flex;
    justify-content: center;
}

input{
    color: white;
    width: 300px;
    height: 30px;
    padding: 0px 20px;
    border-radius: 20px;
    line-height: 30px;
    font-size: 20px;
    margin-bottom: 40px; 
    background: none;
    border: 3.5px solid white;
}

input::placeholder {
    color: white;
  }

  input:focus {
    outline: none;
  }`;

const SearchBar = ({ getUser, getUserRepo }) => {
    const [userName, setUserName] = React.useState("");

    const handleChange = event => {
        setUserName(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        getUser(userName);
        getUserRepo(userName);
        setUserName("");
    }


    return (
        <SearchBarWrap>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="GitHub 아이디를 입력해주세요."
                    value={userName}
                    onChange={handleChange} />
            </form>

        </SearchBarWrap>
    );
};

export default SearchBar;

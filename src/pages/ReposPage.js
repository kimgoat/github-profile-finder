import React, { useState } from 'react';
import Styled from "styled-components";
import RepoCard from '../components/RepoCard';

const MainWrap = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;

.repo_header{
    font-size: 50px;
    font-weight: 700;
    color: #FFFFFF;
    text-shadow: 0 0 10px #faf9e0;

    background: none;
    border: 2px solid white;
    height: 100px;
    width: 500px;
    border-radius: 50px;
    margin-bottom: 10px;

    display: flex;
    align-items: center;
    justify-content: center;    

    margin-bottom: 50px;
}

`;

const ReposPage = ({userRepoData}) => {
    const { repo_status, repo_data } = userRepoData; 
    switch (repo_status) {
        case "pending":
            return  (
            <MainWrap>
                <div style={{ color: "white", fontSize: "24px" }}>Loading...</div>
            </MainWrap>
            );
        case "resolved":
            return repo_data &&(
                <MainWrap>
                    <div className='repo_header'>
                        <header>Repository List</header>
                    </div>
                    {repo_data.map(repo => (
                        <RepoCard repo={repo} key={repo.id}/>
                    ))}
               </MainWrap>);
        case "rejected":
            return (
                <MainWrap>
                    <div style={{ color: "white", fontSize: "24px" }}>empty</div>
                </MainWrap>
            );
        case "idle":
        default:
            return <div></div>;
    }
};

export default ReposPage;

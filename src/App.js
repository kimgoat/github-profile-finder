import React, { useState } from 'react';
import Result from "./components/Result";
import SearchBar from './components/SearchBar';
import ReposPage from './pages/ReposPage';
import { getUserData } from './lib/api';
import { getUserRepos } from './lib/api';
import Styled from "styled-components";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

const MainWrap = Styled.div`
h1{
  font-size: 40px;
  cursor: default;
  color: #FFFFFF;
  text-shadow: 0 0 10px #FFFFFF;
}

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
`;

function App() {
  const [userData, setUserData] = React.useState({
    status: 'idle',
    data: null,
  });

  const [userRepoData, setUserRepoData] = React.useState({
    repo_status: 'idle',
    repo_data: null,
  });

  const getUser = async (id) => {
    setUserData({ ...userData, status: "pending" });
    try {
      const data = await getUserData(id);
      if (data === null) throw Error;
      setUserData({ status: "resolved", data: data });
    } catch (e) {
      setUserData({ status: "rejected", data: null });
      console.log(e);
    }
  };

  const getUserRepo = async (id) => {
    setUserRepoData({ ...userRepoData, repo_status: "pending" });
    try {
      const repo_data = await getUserRepos(id);
      if (repo_data === null) throw Error;
      setUserRepoData({ repo_status: "resolved", repo_data: repo_data });
    } catch (e) {
      setUserRepoData({ repo_status: "rejected", repo_data: null });
      console.log(e);
    }
  };


  return (
    <Router>
      <Routes>
        <Route path ="/" element = {
          <MainWrap>
          <h1>GitHub Profile Finder</h1>
          < SearchBar getUser={getUser} getUserRepo={getUserRepo} />
          <Result userData={userData} />
          </MainWrap>
        }/>
        <Route path = "repos" element = {
            <ReposPage userRepoData={userRepoData}/>
        } />
      </Routes>
    </Router>
    
  );
}

export default App;

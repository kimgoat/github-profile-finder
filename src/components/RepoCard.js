import React from 'react';
import Styled from "styled-components";

const RepoCardWrap = Styled.div`

a {
    text-decoration: none;
    color: #FFFFFF;
    text-shadow: 0 0 10px #faf9e0;
    font-size: 23px;
    font-weight: 500;
    line-height: 1.5;
}

`;

const RepoCard = ({ repo }) => {
    return repo && (
        <RepoCardWrap>
            <a href={'' + repo.html_url}>{repo.name}</a>
        </RepoCardWrap>
    );
};

export default RepoCard;
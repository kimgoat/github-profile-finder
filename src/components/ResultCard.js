import React, { memo, useCallback, useState } from 'react';
import Styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import styled from 'styled-components';

const ResultCardWrap = Styled.div`
img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    -webkit-box-shadow: 0px 7px 14px 7px rgba(255,255,255,0.35); 
    box-shadow: 0px 7px 14px 7px rgba(255,255,255,0.35);
}


.result_card{
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 500px;
    border: 3px solid white;
    border-radius: 20px;

    visibility : ${({open}) => (true ? 'visible' : 'hidden')};
    opacity: ${({open}) => (true ? '1' : '0')};
}

.result_id{
    font-size: 30px;
    font-weight: 700;
    color: #fcf3b6;
    text-shadow: 0 0 5px #b7d7e8;
    margin: 20px 0px 20px 0px;
}

.result_list{
    display: flex;
}

.result_list > div{
    font-size: 22px;
    text-align: center;
    width: 100px;
    margin: 10px 15px;
    color: white;
}

.info{
    text-align: center;
    font-size: 35px;
    margin: 15px 0px;
    font-weight: 700;
    color: white;
}

.result_closeIcon{
    display: flex;
    align-self: flex-end;
    margin: 10px 10px 10px 0px;
    color: #8ca6ce;
    font-size: 25px;
    cursor: pointer;
}

.result_closeIcon:hover{
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
    color: white;
}


.result_repos:hover{
    color: #fcf3b6;
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
    border: none; 
}

.result_visit{
    background: none;
    font-size: 23px;
    color: white;
    border: 3px solid white;
    height: 40px;
    width: 170px;
    border-radius: 25px;
    margin-bottom: 10px;
    cursor: pointer;
}

.result_visit:hover{
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
    background: linear-gradient(to right, #fbcac9, #8ca6ce);
    border: none; 
}

`;

const StyledLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    font-size: 22px;
    text-align: center;
    width: 100px;
    margin: 10px 15px;
    color: white;
`;

const ResultCard = ({data}) => {
    // console.log(data);
    const [open, setOpen] = useState(true);

    return data && (
        <ResultCardWrap>
            {open && (
            <div className='result_card' open={open}>
                <FontAwesomeIcon
                    icon={faTimesCircle}
                    className='result_closeIcon'
                    onClick={() => setOpen(false)}
                />
                <img src={data.avatar_url} alt="" />
                <p className='result_id'>{data.login}</p>
                <a href={'' + data.html_url}>
                    <button className='result_visit'>Visit GitHub</button>
                </a>
                <div className='result_list'>
                    <div className='result_followers'>Followers
                    <p className="info">{data.followers}</p></div>
                    <div className='result_following'>Following
                    <p className="info">{data.following}</p></div>
                    <StyledLink to = "/repos">
                        <div className='result_repos'>Repository
                        <p className="info"> {data.public_repos} </p></div>
                    </StyledLink>
                </div>
            </div>
            )}
        </ResultCardWrap >
    );
};

export default ResultCard;
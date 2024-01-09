import React, { useState } from 'react';
import ResultCard from "./ResultCard";


const Result = ({ userData }) => {
    const { status, data } = userData;

    switch (status) {
        case "pending":
            return <div style={{ color: "white", fontSize: "24px" }}>Loading...</div>;
        case "resolved":
            return data &&(
                <>
                 <ResultCard data={data} />
                </>);
        case "rejected":
            return (
                <div style={{ color: "white", fontSize: "24px" }}>User Not Found</div>
            );
        case "idle":
        default:
            return <div></div>;
    }
};

export default Result;
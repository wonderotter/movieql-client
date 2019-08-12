import React from "react";

const Detail = ({ match: { params: { movieId } } }) => {
    console.log(movieId);
    
    return <h1>Detail</h1>;
}

export default Detail;
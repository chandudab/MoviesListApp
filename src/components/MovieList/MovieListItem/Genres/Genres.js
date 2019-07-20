import React from 'react';

const genres = (props) => (
    props.genres.map((item, index) => {
        return <span key={index}>{props.genresList[item]}</span>
    })
);

export default genres;
import React from "react";
import PropTypes from "prop-types";

const Rating = ({ stars }) => {
    return (
        <div className="rating">
            {[...new Array(Math.round(stars <= 5 ? stars : 0)).keys()].map(str => (<div className="star" key={str} />))}
        </div>
    )
}

Rating.propTypes = {
    start: PropTypes.number.isRequired,
}

export default Rating;

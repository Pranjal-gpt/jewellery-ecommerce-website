import React from 'react';

const starRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
        stars.push(<i className="fa fa-star" aria-hidden="true" key={i}></i>);
    }
    if (stars.length < 5) {
        for (let i = 0; i < 5 - rating; i++) {
            stars.push(<i className="fa-regular fa-star" key={rating + i}></i>);
        }
    }
    return stars;
};
//productDetails.reviews && productDetails.reviews.map
function TotalRating({ productDetails }) {
    const sumOfRatings =productDetails.reviews &&  productDetails.reviews.reduce((acc, review) => acc + review.rating, 0);
    const averageRating = sumOfRatings / productDetails.reviews &&  productDetails.reviews.length;
    return (
             <span className='text-xl'>{starRating(averageRating)}</span>
     
    );
}

export default TotalRating;

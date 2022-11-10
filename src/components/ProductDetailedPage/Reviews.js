import React from 'react';

function Reviews({ id, username, comment, title, update }) {
  return (
    <div className="reviews">
      <div>
        <div className="reviewsProfile">
          <span className="reviewsBestIcon">베스트</span>
          <span className="reviewsWriter">{username}</span>
        </div>
      </div>
      <article>
        <div>
          <div className="reviewsProduct">
            <h3 className="reviewsProductTitle">{title}</h3>
          </div>
          <p className="reviewsText">{comment}</p>
          <footer className="reviewsFooter">
            <div>
              <span className="reviewsDate">{update}</span>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
}

export default Reviews;

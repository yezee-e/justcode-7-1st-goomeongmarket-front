import React from 'react';

function Reviews({ id, user_id, product_id, comment, title, update }) {
  return (
    <div className="reviews">
      <div>
        <div className="reviewsProfile">
          <span className="reviewsBestIcon">베스트</span>
          {/* <span className="reviewsGrade">프렌즈</span> */}
          <span className="reviewsWriter">{user_id}</span>
        </div>
      </div>
      <article>
        <div>
          <div className="reviewsProduct">
            <h3 className="reviewsProductTitle">{title}</h3>
          </div>
          <p className="reviewsText">{comment}</p>
          {/* <div className="reviewsPhotoWrap">
            <button className="reviewsPhoto"></button>
          </div> */}
          <footer className="reviewsFooter">
            <div>
              <span className="reviewsDate">{update}</span>
            </div>
            {/* <button className="reviewsHelpBtn">
              <span className="thumbIcon"></span>
              <span className="reviewsHelpCount">도움돼요 4</span>
            </button> */}
          </footer>
        </div>
      </article>
    </div>
  );
}

export default Reviews;

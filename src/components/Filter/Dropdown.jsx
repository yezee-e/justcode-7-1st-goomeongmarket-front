//각 필터별 mapping하기
//각 카테고리 flip state만들기
//FaAngleDown아이콘 keyfram 효과넣기

//filter 넣고 ->다시 필터빼기 //map,useEffect()
import React from 'react';

import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { useParams, useSearchParams } from 'react-router-dom';
import './Dropdown.scss';

function Dropdown({ list, setTabList }) {
  const [isActive, setIsActive] = useState(false);
  // const [filter, setFilter] = useState([]);
  let [searchParms, setSearchParams] = useSearchParams();
  const sorted_by = searchParms.get('sorted_by');
  const category_id = searchParms.get('category_id');
  const { tabId } = useParams();

  // const FETCH = `http://localhost:8000/products/${tabId}?sorted_by=${pageNumber}`;

  const filtering = pageNumber => {
    fetch(`http://localhost:8000/products/${tabId}?sorted_by=${pageNumber}`, {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(res => setTabList(res.data));
    searchParms.set('sorted_by', pageNumber);
    setSearchParams(searchParms);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>
        {list}
        <FaAngleDown className="dropIcon" />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {list === '카테고리' && (
            <div className="dropdown-content_label">
              <label
                htmlFor="check"
                className="dropdown-item"
                onClick={() => filtering()}
              >
                <input type="radio" id="check" name="together" />
                음식
              </label>
              <label
                htmlFor="check1"
                className="dropdown-item"
                onClick={() => filtering()}
              >
                <input type="radio" id="check1" name="together" />
                가구
              </label>
            </div>
          )}
          {list == '가격' && (
            <div className="dropdown-content_label">
              <label
                htmlFor="check2"
                className="dropdown-item"
                onClick={() => filtering(6)}
              >
                <input type="radio" id="check2" name="together" />
                높은 가격순
              </label>
              <label
                htmlFor="check3"
                className="dropdown-item"
                onClick={() => filtering(-6)}
              >
                <input type="radio" id="check3" name="together" />
                낮은 가격순
              </label>
            </div>
          )}
          {list === '이름순' && (
            <div className="dropdown-content_label">
              <label
                htmlFor="check4"
                className="dropdown-item"
                onClick={() => filtering(2)}
              >
                <input type="radio" id="check4" name="together" />
                오름차순
              </label>
              <label
                htmlFor="check5"
                className="dropdown-item"
                onClick={() => filtering(-2)}
              >
                <input type="radio" id="check5" name="together" />
                내림차순
              </label>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Dropdown;

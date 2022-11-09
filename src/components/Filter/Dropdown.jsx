import React from 'react';
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { useParams, useSearchParams } from 'react-router-dom';
import './Dropdown.scss';

function Dropdown({ list, setTabList, filtering }) {
  const [isActive, setIsActive] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  let [searchParms, setSearchParams] = useSearchParams();
  const sorted_by = searchParms.get('sorted_by');
  const category_id = searchParms.get('category_id');
  const { tabId } = useParams();

  //진짜 구현해볼 API
  // const filtering = pageNumber => {
  //   fetch(`http://localhost:8000/products/${tabId}?sorted_by=${pageNumber}`, {
  //     method: 'POST',
  //     headers: { 'content-Type': 'application/json' },
  //   })
  //     .then(res => res.json())
  //     .then(res => setTabList(res.data));
  //   searchParms.set('sorted_by', pageNumber);
  //   setSearchParams(searchParms);
  // };

  //목데이터
  // const filtering = pageNumber => {
  //   fetch(`http://localhost:3000/data/mock${tabId}?sorted_by=${pageNumber}`, {
  //     method: 'POST',
  //     headers: { 'content-Type': 'application/json' },
  //   })
  //     .then(res => res.json())
  //     .then(res => setTabList(res.data));
  //   searchParms.set('sorted_by', pageNumber);
  //   setSearchParams(searchParms);
  //   setIsChecked(cur => !cur);
  // };

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
                채소
              </label>
              <label
                htmlFor="check1"
                className="dropdown-item"
                onClick={() => filtering()}
              >
                <input type="radio" id="check1" name="together" />
                과일
              </label>
              <label
                htmlFor="check3"
                className="dropdown-item"
                onClick={() => filtering()}
              >
                <input type="radio" id="check3" name="together" />
                수산﹒해산﹒건어물
              </label>
              <label
                htmlFor="check4"
                className="dropdown-item"
                onClick={() => filtering()}
              >
                <input type="radio" id="check4" name="together" />
                정육﹒계란
              </label>
              <label
                htmlFor="check5"
                className="dropdown-item"
                onClick={() => filtering()}
              >
                <input type="radio" id="check5" name="together" />
                국﹒반찬﹒메인요리
              </label>
            </div>
          )}
          {list == '가격' && (
            <div className="dropdown-content_label">
              <label
                htmlFor="check6"
                className="dropdown-item"
                onClick={() => filtering(6)}
              >
                <input type="radio" id="check6" name="together" />
                높은 가격순
              </label>
              <label
                htmlFor="check7"
                className="dropdown-item"
                onClick={() => filtering(-6)}
              >
                <input type="radio" id="check7" name="together" />
                낮은 가격순
              </label>
            </div>
          )}
          {list === '이름순' && (
            <div className="dropdown-content_label">
              <label
                htmlFor="check8"
                className="dropdown-item"
                onClick={() => filtering(2)}
              >
                <input type="radio" id="check8" name="together" />
                오름차순
              </label>
              <label
                htmlFor="check9"
                className="dropdown-item"
                onClick={() => filtering(-2)}
              >
                <input type="radio" id="check9" name="together" />
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

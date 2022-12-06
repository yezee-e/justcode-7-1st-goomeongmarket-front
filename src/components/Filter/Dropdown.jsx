import React from 'react';
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import './Dropdown.scss';

function Dropdown({ list, filtering }) {
  const [isActive, setIsActive] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const mainCategoryType = [
    { num: 1, value: '과일' },
    { num: 2, value: '수산﹒해산﹒건어물' },
    { num: 3, value: '정육﹒계란' },
    { num: 4, value: '채소' },
    { num: 5, value: '국﹒반찬﹒메인요리' },
  ];
  const mainCategoryPrice = [
    { num: -6, value: '높은 가격순' },
    { num: 6, value: '낮은 가격순' },
  ];

  const mainCategoryName = [
    { num: -2, value: '오름차순' },
    { num: 2, value: '내림차순' },
  ];

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
              {mainCategoryType.map(category => (
                <label
                  key={category.num}
                  htmlFor={category.value}
                  className="dropdown-item"
                  onClick={() => filtering(category.num)}
                >
                  <input type="radio" id={category.value} name="together" />
                  {category.value}
                </label>
              ))}
            </div>
          )}
          {list === '가격' && (
            <div className="dropdown-content_label">
              {mainCategoryPrice.map(price => (
                <label
                  key={price.num}
                  htmlFor={price.value}
                  className="dropdown-item"
                  onClick={() => filtering(price.num)}
                >
                  <input type="radio" id={price.value} name="together" />
                  {price.value}
                </label>
              ))}
            </div>
          )}
          {list === '이름순' && (
            <div className="dropdown-content_label">
              {mainCategoryName.map(name => (
                <label
                  key={name.num}
                  htmlFor={name.value}
                  className="dropdown-item"
                  onClick={() => filtering(name.num)}
                >
                  <input type="radio" id={name.value} name="together" />
                  {name.value}
                </label>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
